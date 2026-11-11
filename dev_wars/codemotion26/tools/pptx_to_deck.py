#!/usr/bin/env python3
"""Convert the Dev Wars Google Slides export (.pptx, unzipped) into data the beatdeck renderer draws.

Usage (run isolated, the input is untrusted):
    python3 -I tools/pptx_to_deck.py <unzipped_pptx_dir> <deck_dir> <videos_dir>

Writes:
    <deck_dir>/slides.gen.ts      LAYOUTS + SLIDES (absolute 1920x1080 geometry, resolved text styles, steps)
    <deck_dir>/assets/*.webp|gif  every image the slides and layouts use (PNG/JPG -> WebP via cwebp)
Standard library only (+ the `cwebp` binary for images).

Geometry: 1 EMU = 1920 / 9144000 px. Font size: hundredths of a point * (1920 / 72 / 10) / 100 px.
Text style is resolved the way PowerPoint does: master txStyles -> master placeholder -> layout placeholder
-> slide shape lstStyle -> paragraph pPr -> run rPr.
"""
import json
import os
import posixpath
import re
import subprocess
import sys
import xml.etree.ElementTree as ET

NS = {
    'p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'rel': 'http://schemas.openxmlformats.org/package/2006/relationships',
}
R_ID = '{%s}id' % NS['r']
R_EMBED = '{%s}embed' % NS['r']
EMU = 1920 / 9144000
PT = 1920 / 720  # px per point at this slide size (10in wide)

SRC, DECK, VIDEOS = sys.argv[1], sys.argv[2], sys.argv[3]
ASSETS = os.path.join(DECK, 'assets')
os.makedirs(ASSETS, exist_ok=True)

# Drive / YouTube clip -> local file under deck/assets/video (re-encoded by hand, see docs/RUNBOOK.md).
CLIPS = {
    '1qhPB4Dr05iBmHNNhHUHM8jVQHy6k6qpy': 'trail-leire.mp4',
    '1FMKyfudDjwXjGRaoS9r0do1QhmFKoAeM': 'maraton-barcelona.mp4',
    '1sWFhMhuLHc6xKNxMF8CBPJ0yon_2tncx': 'speed-project-finisher.mp4',
    '2Y3gmYO8TCE': 'trail-leire-yt.mp4',
}
# Words fixed on purpose (the Codemotion copy keeps the slides as presented, only these typos are corrected).
TYPOS = [
    ('¿Tiene senido?', '¿Tiene sentido?'),
    ('No exite', 'No existe'),
    ('Infraestructora', 'Infraestructura'),
    ('Organizado GDG', 'Organizador GDG'),
    ('se vió', 'se vio'),
]

warnings = []


def warn(msg):
    if msg not in warnings:
        warnings.append(msg)


def read(path):
    with open(os.path.join(SRC, path), 'rb') as f:
        return f.read()


def exists(path):
    return os.path.exists(os.path.join(SRC, path))


def tree(path):
    return ET.fromstring(read(path))


def rels(part):
    d, f = posixpath.split(part)
    path = posixpath.join(d, '_rels', f + '.rels')
    if not exists(path):
        return {}
    out = {}
    for r in tree(path).findall('rel:Relationship', NS):
        if r.get('TargetMode') == 'External':
            out[r.get('Id')] = r.get('Target')
        else:
            out[r.get('Id')] = posixpath.normpath(posixpath.join(d, r.get('Target')))
    return out


# ---------------------------------------------------------------- theme colours
theme = tree('ppt/theme/theme1.xml')
SCHEME = {}
for el in theme.find('.//a:clrScheme', NS):
    name = el.tag.split('}')[1]
    c = el[0]
    SCHEME[name] = (c.get('val') if c.tag.endswith('srgbClr') else c.get('lastClr')).upper()
master = tree('ppt/slideMasters/slideMaster1.xml')
CLRMAP = {k: v for k, v in master.find('p:clrMap', NS).attrib.items()}


def color(el):
    """Resolve a fill element's colour to '#RRGGBB' (alpha ignored, noted)."""
    if el is None:
        return None
    c = el.find('a:srgbClr', NS)
    if c is not None:
        return '#' + c.get('val').upper()
    c = el.find('a:schemeClr', NS)
    if c is not None:
        v = c.get('val')
        v = CLRMAP.get(v, v)
        return '#' + SCHEME[v]
    return None


# ---------------------------------------------------------------- images
_img_done = {}


def image(media_path):
    """Copy/convert a media file into deck/assets, return the file name used by the deck."""
    if media_path in _img_done:
        return _img_done[media_path]
    base, ext = os.path.splitext(posixpath.basename(media_path))
    ext = ext.lower()
    src = os.path.join(SRC, media_path)
    if ext in ('.png', '.jpg', '.jpeg'):
        out = base + '.webp'
        dst = os.path.join(ASSETS, out)
        if not os.path.exists(dst):
            subprocess.run(['cwebp', '-quiet', '-q', '84', '-alpha_q', '100', '-m', '6', src, '-o', dst], check=True)
    else:
        out = base + ext
        dst = os.path.join(ASSETS, out)
        if not os.path.exists(dst):
            with open(src, 'rb') as f, open(dst, 'wb') as g:
                g.write(f.read())
    _img_done[media_path] = out
    return out


# ---------------------------------------------------------------- style resolution
def num(v, default=None):
    return default if v is None else int(v)


def lvl_props(lvl_el):
    """Flatten one a:lvlNpPr into a dict of the properties we render."""
    if lvl_el is None:
        return {}
    d = {}
    for k in ('algn', 'marL', 'indent'):
        if lvl_el.get(k) is not None:
            d[k] = lvl_el.get(k) if k == 'algn' else int(lvl_el.get(k))
    for tag in ('lnSpc', 'spcBef', 'spcAft'):
        e = lvl_el.find('a:' + tag, NS)
        if e is not None:
            pc = e.find('a:spcPct', NS)
            pt = e.find('a:spcPts', NS)
            if pc is not None:
                d[tag] = ('pct', int(pc.get('val')) / 100000)
            elif pt is not None:
                d[tag] = ('pt', int(pt.get('val')) / 100)
    if lvl_el.find('a:buNone', NS) is not None:
        d['bu'] = None
    bc = lvl_el.find('a:buChar', NS)
    if bc is not None:
        d['bu'] = bc.get('char')
    if lvl_el.find('a:buAutoNum', NS) is not None:
        d['bu'] = '#'
        warn('autonumber bullet used')
    bsz = lvl_el.find('a:buSzPts', NS)
    if bsz is not None:
        d['buSz'] = int(bsz.get('val')) / 100
    bclr = lvl_el.find('a:buClr', NS)
    if bclr is not None:
        d['buClr'] = color(bclr)
    d.update(rpr_props(lvl_el.find('a:defRPr', NS)))
    return d


def rpr_props(rpr):
    d = {}
    if rpr is None:
        return d
    if rpr.get('sz'):
        d['sz'] = int(rpr.get('sz')) / 100
    for k in ('b', 'i'):
        if rpr.get(k) is not None:
            d[k] = rpr.get(k) == '1'
    if rpr.get('u') is not None:
        d['u'] = rpr.get('u') not in ('none',)
    if rpr.get('strike') is not None:
        d['strike'] = rpr.get('strike') not in ('noStrike',)
    if rpr.get('cap') is not None:
        d['cap'] = rpr.get('cap')
    fill = rpr.find('a:solidFill', NS)
    if fill is not None:
        d['c'] = color(fill)
    lat = rpr.find('a:latin', NS)
    if lat is not None and lat.get('typeface'):
        d['font'] = lat.get('typeface')
    return d


def style_chain(kind, lvl, layout_ph, master_ph):
    """Property dicts, lowest priority first, for a placeholder/text box of `kind` at level `lvl` (0-based)."""
    key = 'a:lvl%dpPr' % (lvl + 1)
    chain = []
    tx = master.find('p:txStyles', NS)
    style = {'title': 'p:titleStyle', 'ctrTitle': 'p:titleStyle', 'subTitle': 'p:bodyStyle', 'body': 'p:bodyStyle'}.get(kind, 'p:otherStyle')
    chain.append(lvl_props(tx.find(style + '/' + key, NS)))
    for ph in (master_ph, layout_ph):
        if ph is not None:
            chain.append(lvl_props(ph.find('p:txBody/a:lstStyle/' + key, NS)))
    return chain


# ---------------------------------------------------------------- geometry
def xfrm(sp):
    x = sp.find('p:spPr/a:xfrm', NS)
    if x is None:
        x = sp.find('p:grpSpPr/a:xfrm', NS)
    if x is None:
        return None
    off, ext = x.find('a:off', NS), x.find('a:ext', NS)
    b = {
        'x': round(int(off.get('x')) * EMU, 1), 'y': round(int(off.get('y')) * EMU, 1),
        'w': round(int(ext.get('cx')) * EMU, 1), 'h': round(int(ext.get('cy')) * EMU, 1),
    }
    if x.get('rot'):
        b['rot'] = int(x.get('rot')) / 60000
    if x.get('flipH') == '1':
        b['flipH'] = True
    if x.get('flipV') == '1':
        b['flipV'] = True
    return b


def ph_of(sp):
    ph = sp.find('p:nvSpPr/p:nvPr/p:ph', NS)
    if ph is None:
        return None
    return {'type': ph.get('type') or 'body', 'idx': ph.get('idx')}


def find_ph(root, ph):
    """The placeholder shape matching `ph` (by idx, else type) in a layout/master tree."""
    if ph is None or root is None:
        return None
    best = None
    for sp in root.findall('.//p:sp', NS):
        p = ph_of(sp)
        if p is None:
            continue
        if ph['idx'] is not None and p['idx'] == ph['idx']:
            return sp
        if p['type'] == ph['type'] and best is None:
            best = sp
    return best


# ---------------------------------------------------------------- text
def para_text_style(chain_base, ppr):
    d = {}
    for part in chain_base:
        d.update(part)
    d.update(lvl_props(ppr))
    return d


def build_text(sp, kind, layout_ph, master_ph, fscale):
    tb = sp.find('p:txBody', NS)
    if tb is None:
        return None
    body = tb.find('a:bodyPr', NS)
    anchor = {'t': 'start', 'ctr': 'center', 'b': 'end'}.get(body.get('anchor', 't'), 'start')
    ins = [int(body.get(k, 91425)) * EMU for k in ('lIns', 'tIns', 'rIns', 'bIns')]
    shape_lst = {}
    paras = []
    for p in tb.findall('a:p', NS):
        ppr = p.find('a:pPr', NS)
        lvl = int(ppr.get('lvl', 0)) if ppr is not None else 0
        chain = style_chain(kind, lvl, layout_ph, master_ph)
        chain.append(lvl_props(tb.find('a:lstStyle/a:lvl%dpPr' % (lvl + 1), NS)))
        base = para_text_style(chain, ppr)
        runs = []
        for r in p:
            tag = r.tag.split('}')[1]
            if tag == 'br':
                runs.append({'t': '\n'})
                continue
            if tag not in ('r', 'fld'):
                continue
            t = r.find('a:t', NS)
            text = (t.text or '') if t is not None else ''
            if tag == 'fld':
                continue  # slide numbers are not part of the talk
            rp = dict(base)
            rp.update(rpr_props(r.find('a:rPr', NS)))
            runs.append({'t': text, 'sz': rp.get('sz', 18) * fscale, 'b': rp.get('b', False), 'i': rp.get('i', False),
                         'u': rp.get('u', False), 'c': rp.get('c') or '#000000', 'font': rp.get('font', 'Arial'),
                         **({'cap': rp['cap']} if rp.get('cap') not in (None, 'none') else {})})
        if not runs:
            end = p.find('a:endParaRPr', NS)
            rp = dict(base)
            rp.update(rpr_props(end))
            runs.append({'t': '', 'sz': rp.get('sz', 18) * fscale, 'font': rp.get('font', 'Arial'), 'c': rp.get('c') or '#000000'})
        first = runs[0]
        merged = []
        for r in runs:
            key = {k: v for k, v in r.items() if k != 't'}
            if merged and {k: v for k, v in merged[-1].items() if k != 't'} == key:
                merged[-1]['t'] += r['t']
            else:
                merged.append(dict(r))
        for r in merged:
            for a, b in TYPOS:
                r['t'] = r['t'].replace(a, b)
        bu = base.get('bu')
        bullet = None
        if bu:
            bullet = {'ch': bu, 'sz': round(base.get('buSz', first['sz'] / fscale) * PT * fscale, 1), 'c': base.get('buClr') or first['c']}
        spc = lambda k: (base[k][1] * PT if base.get(k, ('pt', 0))[0] == 'pt' else base[k][1] * first['sz'] * PT / PT * 1.0) if k in base else 0
        paras.append({
            'algn': {'l': 'left', 'ctr': 'center', 'r': 'right', 'just': 'justify'}.get(base.get('algn', 'l'), 'left'),
            'marL': round(base.get('marL', 0) * EMU, 1), 'indent': round(base.get('indent', 0) * EMU, 1),
            'before': round(spc('spcBef') * (1 if base.get('spcBef', ('pt',))[0] == 'pt' else 1), 1) if 'spcBef' in base else 0,
            'after': round(spc('spcAft'), 1) if 'spcAft' in base else 0,
            'line': base['lnSpc'][1] if 'lnSpc' in base and base['lnSpc'][0] == 'pct' else 1.0,
            'bullet': bullet, 'runs': [{**r, 'sz': round(r['sz'] * PT, 1)} for r in merged],
        })
    return {'anchor': anchor, 'ins': [round(v, 1) for v in ins], 'paras': paras}


def text_of(paras):
    return ' / '.join(''.join(r['t'] for r in p['runs']) for p in paras if ''.join(r['t'] for r in p['runs']).strip())


# ---------------------------------------------------------------- shapes
def fill_of(sp):
    sppr = sp.find('p:spPr', NS)
    if sppr is None:
        return None
    if sppr.find('a:noFill', NS) is not None:
        return None
    return color(sppr.find('a:solidFill', NS))


def line_of(sp):
    ln = sp.find('p:spPr/a:ln', NS)
    if ln is None or ln.find('a:noFill', NS) is not None:
        return None
    c = color(ln.find('a:solidFill', NS))
    return {'c': c, 'w': round(int(ln.get('w', 12700)) * EMU, 1)} if c else None


def walk(parent, relmap, layout, level, ctx):
    """Yield item dicts for the shapes under an spTree, back to front."""
    for el in parent:
        tag = el.tag.split('}')[1]
        if tag in ('nvGrpSpPr', 'grpSpPr'):
            continue
        if tag == 'grpSp':
            warn('group shape in %s' % ctx)
            yield from walk(el, relmap, layout, level, ctx)
            continue
        if tag not in ('sp', 'pic'):
            warn('unsupported <%s> in %s' % (tag, ctx))
            continue
        c = el.find('.//p:cNvPr', NS)
        sid = c.get('id')
        if tag == 'pic':
            box = xfrm(el)
            blip = el.find('p:blipFill/a:blip', NS)
            src = relmap.get(blip.get(R_EMBED)) if blip is not None else None
            if not src:
                warn('picture without image in %s' % ctx)
                continue
            item = {'id': sid, 'kind': 'img', 'box': box, 'src': image(src)}
            crop = el.find('p:blipFill/a:srcRect', NS)
            if crop is not None and any(crop.get(k) not in (None, '0') for k in ('l', 't', 'r', 'b')):
                item['crop'] = [int(crop.get(k, 0)) / 100000 for k in ('l', 't', 'r', 'b')]
            alt = c.get('title') or c.get('descr')
            if alt:
                item['alt'] = alt
            hl = c.find('a:hlinkClick', NS)
            if hl is not None and hl.get(R_ID):
                url = relmap.get(hl.get(R_ID), '')
                clip = None
                m = re.search(r'drive\.google\.com/file/d/([\w-]+)', url) or re.search(r'youtube\.com/watch\?v=([\w-]+)', url)
                if m:
                    clip = CLIPS.get(m.group(1))
                    if not clip:
                        warn('no local clip for ' + url)
                if clip:
                    item['kind'] = 'video'
                    item['video'] = clip  # the source URL is not emitted: the deck is offline (see deck.config.ts)
                else:
                    warn('link not carried over: ' + url)
            yield item
            continue
        # sp
        ph = ph_of(el)
        if ph and ph['type'] == 'sldNum':
            continue
        box = xfrm(el)
        layout_ph = find_ph(layout, ph) if ph else None
        master_ph = find_ph(master, ph) if ph else None
        if box is None and ph:
            box = xfrm(layout_ph) if layout_ph is not None and xfrm(layout_ph) else (xfrm(master_ph) if master_ph is not None else None)
        if box is None:
            warn('shape without geometry in %s' % ctx)
            continue
        kind = ph['type'] if ph else 'other'
        body = el.find('p:txBody/a:bodyPr', NS)
        fscale = 1.0
        if body is not None:
            na = body.find('a:normAutofit', NS)
            if na is not None and na.get('fontScale'):
                fscale = int(na.get('fontScale')) / 100000
        text = build_text(el, kind, layout_ph, master_ph, fscale)
        prst = el.find('p:spPr/a:prstGeom', NS)
        item = {'id': sid, 'kind': 'shape', 'box': box}
        if prst is not None and prst.get('prst') != 'rect':
            item['geom'] = prst.get('prst')
            if prst.get('prst') == 'roundRect':
                adj = prst.find('.//a:gd', NS)
                item['adj'] = int(adj.get('fmla').split()[1]) / 100000 if adj is not None else 0.1667
        fl = fill_of(el)
        if fl:
            item['fill'] = fl
        ln = line_of(el)
        if ln:
            item['line'] = ln
        if text and text_of(text['paras']):
            item['text'] = text
            item['role'] = kind
        if not (fl or ln or 'text' in item):
            continue  # empty placeholder / invisible shape
        yield item


def background(root, relmap):
    bg = root.find('p:cSld/p:bg/p:bgPr', NS)
    if bg is None:
        return None
    f = bg.find('a:solidFill', NS)
    if f is not None:
        return {'color': color(f)}
    b = bg.find('a:blipFill/a:blip', NS)
    if b is not None:
        return {'img': image(relmap[b.get(R_EMBED)])}
    return None


# ---------------------------------------------------------------- layouts
layouts = {}


def layout(part):
    if part in layouts:
        return layouts[part]
    root = tree(part)
    rm = rels(part)
    mrm = rels('ppt/slideMasters/slideMaster1.xml')
    name = 'L' + re.search(r'(\d+)', posixpath.basename(part)).group(1)
    items = list(walk(root.find('p:cSld/p:spTree', NS), rm, root, 'layout', part))
    # Layout placeholders (title/body/sldNum) are prompts, not content: only decoration is drawn.
    items = [i for i in items if i['kind'] != 'shape' or 'text' not in i]
    for n, i in enumerate(items):
        i['id'] = '%s.%d' % (name, n)
    bg = background(root, rm) or background(master, mrm) or {'color': '#' + SCHEME['lt1']}
    layouts[part] = {'id': name, 'name': root.find('p:cSld', NS).get('name'), 'bg': bg, 'items': items, '_root': root}
    return layouts[part]


# ---------------------------------------------------------------- slides
def steps_of(root):
    """spid -> click number (1-based) from the main sequence; shapes not listed are always visible."""
    seq = root.find('.//p:cTn[@nodeType="mainSeq"]', NS)
    if seq is None:
        return {}
    out = {}
    for n, par in enumerate(seq.find('p:childTnLst', NS).findall('p:par', NS), start=1):
        for t in par.findall('.//p:spTgt', NS):
            out.setdefault(t.get('spid'), n)
    return out


pres = tree('ppt/presentation.xml')
prel = rels('ppt/presentation.xml')
slide_parts = [prel[s.get(R_ID)] for s in pres.find('p:sldIdLst', NS)]
slides = []
for n, part in enumerate(slide_parts, start=1):
    root = tree(part)
    rm = rels(part)
    lay_part = next(v for v in rm.values() if 'slideLayouts/' in v)
    lay = layout(lay_part)
    items = list(walk(root.find('p:cSld/p:spTree', NS), rm, lay['_root'], 'slide%d' % n, part))
    st = steps_of(root)
    has_video = any(i['kind'] == 'video' for i in items)
    for i in items:
        s = st.get(i['id'])
        if s and not (has_video and i['kind'] == 'video'):
            i['step'] = s
        elif s and i['kind'] == 'img' and has_video:
            i['step'] = s
    steps = max([i.get('step', 0) for i in items] + [0])
    bg = background(root, rm)
    slide = {'n': n, 'layout': lay['id'], 'steps': steps, 'items': items}
    if bg:
        slide['bg'] = bg
    if has_video:
        slide['play'] = steps + 1  # one extra beat starts the clips (the original links open them)
    slide['text'] = ' / '.join(text_of(i['text']['paras']) for i in items if 'text' in i)
    slides.append(slide)

lays = [{k: v for k, v in l.items() if k != '_root'} for l in layouts.values()]
out = os.path.join(DECK, 'slides.gen.ts')
with open(out, 'w', encoding='utf-8') as f:
    f.write('// GENERATED by tools/pptx_to_deck.py from the Google Slides export. Do not edit by hand.\n')
    f.write("import type { LayoutData, SlideData } from './slides.types';\n\n")
    f.write('export const LAYOUTS: LayoutData[] = %s;\n\n' % json.dumps(lays, ensure_ascii=False, indent=1))
    f.write('export const SLIDES: SlideData[] = %s;\n' % json.dumps(slides, ensure_ascii=False, indent=1))
print('slides', len(slides), 'layouts', len(lays), 'assets', len(os.listdir(ASSETS)))
for w in warnings:
    print('WARN', w)
