import { useEffect, useRef, type CSSProperties } from 'react';
import { flags } from 'beatdeck';
import type { Bg, Box, ItemData, LayoutData, Para, Run, SlideData } from './slides.types';
import { LAYOUTS } from './slides.gen';
import './deck.css';

const FILES = import.meta.glob('./assets/**/*.{webp,gif,png,jpg,svg,mp4}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const file = (name: string) => FILES[`./assets/${name}`] ?? FILES[`./assets/video/${name}`] ?? '';

const LINE = 1.2; // natural line height the source renders IBM Plex Sans with; line spacing is a percentage of it

function boxStyle(b: Box): CSSProperties {
  const t: string[] = [];
  if (b.rot) t.push(`rotate(${b.rot}deg)`);
  if (b.flipH) t.push('scaleX(-1)');
  if (b.flipV) t.push('scaleY(-1)');
  return { left: b.x, top: b.y, width: b.w, height: b.h, transform: t.join(' ') || undefined };
}

function weight(r: Run): number {
  if (r.b) return 700;
  return /SemiBold/i.test(r.font) ? 600 : 400;
}

function RunSpan({ r }: { r: Run }) {
  const style: CSSProperties = {
    fontSize: r.sz, fontWeight: weight(r), fontStyle: r.i ? 'italic' : undefined, color: r.c,
    textDecoration: r.u ? 'underline' : undefined, textTransform: r.cap === 'all' ? 'uppercase' : undefined,
  };
  return <span style={style}>{r.t}</span>;
}

function ParaView({ p }: { p: Para }) {
  const first = p.runs[0];
  const empty = p.runs.every((r) => !r.t);
  const natural = first.sz * LINE;
  const full = natural * p.line;
  // In the source, extra line spacing is added below the text (the first line hugs the top of the box).
  const style: CSSProperties = {
    textAlign: p.algn, paddingLeft: p.marL, marginTop: p.before, marginBottom: p.after,
    lineHeight: `${full}px`, minHeight: full, top: -(full - natural) / 2,
  };
  const ring = p.bullet?.ch === '○';
  const dot = p.bullet && (p.bullet.ch === '●' || ring) ? p.bullet.sz * (ring ? 0.43 : 0.54) : 0;
  return (
    <p className="dw-p" style={style}>
      {p.bullet && !empty && (dot ? (
        <span className="dw-bu" style={{
          left: p.marL + p.indent, top: full / 2 - dot / 2, width: dot, height: dot, borderRadius: '50%', boxSizing: 'border-box',
          ...(ring ? { border: `${Math.max(2, dot * 0.1)}px solid ${p.bullet.c}` } : { background: p.bullet.c }),
        }} />
      ) : (
        <span className="dw-bu" style={{ left: p.marL + p.indent, fontSize: p.bullet.sz, color: p.bullet.c }}>{p.bullet.ch}</span>
      ))}
      {empty ? '​' : p.runs.map((r, i) => <RunSpan key={i} r={r} />)}
    </p>
  );
}

function Video({ item, playing, poster }: { item: ItemData; playing: boolean; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Clips are silent (no audio track). The presenter window mirrors the stage: it must not play a second copy.
    // `?capture=1` (verify/shot) keeps the poster.
    if (playing && !flags.presenter && !flags.capture) {
      void v.play().catch(() => undefined);
    } else {
      v.pause();
      try { v.currentTime = 0; } catch { /* not ready yet */ }
    }
  }, [playing]);
  // verify/shot (`?capture=1`) compare frames: a still poster keeps them deterministic (decoding timing differs per load).
  if (flags.capture) return <img className="dw-video" src={poster} alt={item.alt ?? ''} draggable={false} />;
  return <video ref={ref} className="dw-video" src={file(item.video!)} poster={poster} muted playsInline preload="auto" aria-label={item.alt} />;
}

function Item({ item, local, play }: { item: ItemData; local: number; play: number }) {
  const on = !item.step || local >= item.step;
  const cls = 'dw-box' + (item.step ? ' dw-step' : '');
  const common = { className: cls, 'data-on': on ? '1' : '0', style: boxStyle(item.box) } as const;

  if (item.kind === 'img' || item.kind === 'video') {
    const src = file(item.src!);
    let inner;
    if (item.kind === 'video') {
      inner = <Video item={item} playing={play > 0 && local >= play} poster={file(item.video!.replace(/\.mp4$/, '.jpg'))} />;
    } else if (item.crop) {
      const [l, t, r, b] = item.crop;
      const w = 1 - l - r, h = 1 - t - b;
      inner = (
        <div className="dw-crop" style={{ inset: 0 }}>
          <img className="dw-img" src={src} alt={item.alt ?? ''} draggable={false}
            style={{ position: 'absolute', width: `${100 / w}%`, height: `${100 / h}%`, left: `${(-l / w) * 100}%`, top: `${(-t / h) * 100}%` }} />
        </div>
      );
    } else {
      inner = <img className="dw-img" src={src} alt={item.alt ?? ''} draggable={false} />;
    }
    return <div {...common}>{inner}</div>;
  }

  const style: CSSProperties = { ...boxStyle(item.box) };
  if (item.fill) style.background = item.fill;
  if (item.line) style.border = `${item.line.w}px solid ${item.line.c}`;
  if (item.geom === 'ellipse') style.borderRadius = '50%';
  if (item.geom === 'roundRect') style.borderRadius = Math.min(item.box.w, item.box.h) * (item.adj ?? 0.1667);
  if (item.text) {
    const [l, t, r, b] = item.text.ins;
    style.padding = `${t}px ${r}px ${b}px ${l}px`;
    style.display = 'flex';
    style.flexDirection = 'column';
    style.justifyContent = item.text.anchor === 'start' ? 'flex-start' : item.text.anchor === 'end' ? 'flex-end' : 'center';
    style.fontFamily = "'IBM Plex Sans', system-ui, sans-serif";
  }
  return (
    <div className={cls} data-on={on ? '1' : '0'} style={style}>
      {item.text?.paras.map((p, i) => <ParaView key={i} p={p} />)}
    </div>
  );
}

const layoutById = new Map<string, LayoutData>(LAYOUTS.map((l) => [l.id, l]));

function bgStyle(bg: Bg | undefined): CSSProperties {
  if (!bg) return {};
  if ('color' in bg) return { background: bg.color };
  // Transparent PNGs sit on the theme's lt1 (white), as in the original; the stage behind is dark.
  return { backgroundColor: '#FFFFFF', backgroundImage: `url(${file(bg.img)})`, backgroundSize: '100% 100%' };
}

/** One slide of the original, drawn from its data. `local` = beat inside the slide (click animations, clip start). */
export function SlideView({ slide, live, local }: { slide: SlideData; live: boolean; local: number }) {
  const lay = layoutById.get(slide.layout)!;
  return (
    <div className="dw-slide" data-live={live ? 'on' : 'off'} data-slide={slide.n} style={bgStyle(slide.bg ?? lay.bg)}>
      {lay.items.map((it) => <Item key={it.id} item={it} local={0} play={0} />)}
      {/* Only the slide on screen may play its clips: a neighbour is mounted (hidden) for preloading. */}
      {slide.items.map((it) => <Item key={it.id} item={it} local={local} play={live ? slide.play ?? 0 : 0} />)}
    </div>
  );
}
