#!/usr/bin/env python3
"""Generates deck/code.ts from the Muviss sources, so the code on stage is copied, never retyped.

Run:  python3 tools/gen-code.py [path/to/Muviss] [--commit <sha>]
The path must be a checkout of Muviss's main branch (the audience can only find code that is on main).
Pass --commit when the path is not a git repository (e.g. a `git archive` copy).

Each snippet is a list of parts; a part is found by an anchor text in the file, so it survives line shifts:
    (anchor, before, after)   the anchor's line, `before` lines above it and `after` lines below it.
Parts that are not contiguous are joined by a `// …` line. Then, per snippet:
    sub      replaces a line (matched by its stripped prefix) with an explicit abbreviation written with `…`,
             or splits it over several lines with "\\n" (a line wrap; only where Kotlin allows one).
    compact  drops blank lines.
Every deviation from the file is announced on stage by the snippet's SRC entry ("abreviado con …",
"línea partida", "sin líneas en blanco"). Type below ~28 px does not survive a stream, hence the wraps.
"""
import json, subprocess, sys
from pathlib import Path

args = sys.argv[1:]
commit_arg = None
if '--commit' in args:
    i = args.index('--commit')
    commit_arg = args[i + 1]
    del args[i:i + 2]
ROOT = Path(args[0] if args else Path.home() / 'Projects/CodingPit/Muviss')
OUT = Path(__file__).resolve().parent.parent / 'deck' / 'code.ts'

APP = 'app/shared/src/commonMain/kotlin/com/codingpit/muviss/MuvissApp.kt'
INS = 'core/designsystem/src/commonMain/kotlin/com/codingpit/muviss/core/designsystem/layout/ScreenInsets.kt'
ACT = 'app/androidApp/src/main/kotlin/com/codingpit/muviss/MainActivity.kt'
DET = 'feature/search/ui/src/commonMain/kotlin/com/codingpit/muviss/feature/search/ui/DetailScreen.kt'
PRO = 'feature/profile/ui/src/commonMain/kotlin/com/codingpit/muviss/feature/profile/ui/ProfileCharts.kt'
SEA = 'feature/search/ui/src/commonMain/kotlin/com/codingpit/muviss/feature/search/ui/SearchScreen.kt'
MAIN = 'app/desktopApp/src/main/kotlin/com/codingpit/muviss/Main.kt'
WIN = 'app/desktopApp/src/main/kotlin/com/codingpit/muviss/DesktopWindowState.kt'
TRI = 'feature/triage/ui/src/commonMain/kotlin/com/codingpit/muviss/feature/triage/ui/TriageScreen.kt'
MAN = 'app/androidApp/src/main/AndroidManifest.xml'

SNIPPETS = {
    'wscCode': dict(file=APP, parts=[('val windowSizeClass', 0, 0)]),
    'wscWhy': dict(file=APP, parts=[('Window-size-class-driven navigation', 0, 2)]),
    'wscWhen': dict(file=APP, parts=[('val layoutType =', 0, 5)]),
    'edge': dict(file=ACT, parts=[('enableEdgeToEdge()', -1, 1)]),
    'screenInsets': dict(file=INS, parts=[('fun ScreenInsets(', -1, 7)], sub={
        'insets: WindowInsets =': 'insets: WindowInsets =\n    WindowInsets.safeDrawing.only(WindowInsetsSides.Top + WindowInsetsSides.Horizontal),',
    }),
    'insetsWhy': dict(file=INS, parts=[('safeDrawing] rather', 0, 3)]),
    'insetsConsumed': dict(file=INS, parts=[('consumes', 0, 2)]),
    'insetsTest': dict(file=INS, parts=[('is a parameter rather', 0, 3)]),
    'detailBp': dict(file=DET, parts=[('private val EXPANDED_BREAKPOINT', -1, 0)]),
    'detailIf': dict(file=DET, parts=[('state.details != null -> BoxWithConstraints', 0, 0), ('if (maxWidth >= EXPANDED_BREAKPOINT)', 0, 4)]),
    'detailCap': dict(file=DET, parts=[('val bodyColumn = Modifier', 0, 2)], sub={
        '.padding(start = MuvissSpacing.xxl': '.padding(start = MuvissSpacing.xxl + POSTER_COLUMN_WIDTH + MuvissSpacing.xl,\n    end = MuvissSpacing.xxl)',
    }),
    'cardCap': dict(file=TRI, parts=[('private val MAX_CARD_WIDTH', 0, 0)]),
    'grid': dict(file=SEA, parts=[('GridCells.Adaptive', -1, 2)]),
    'legendBp': dict(file=PRO, parts=[('private val WIDE_LAYOUT_BREAKPOINT =', 0, 0), ('fun rememberWideChartLayout', 0, 0)], sub={
        'fun rememberWideChartLayout': 'fun rememberWideChartLayout(): Boolean =\n    currentWindowAdaptiveInfo().windowSizeClass.isWidthAtLeastBreakpoint(WIDE_LAYOUT_BREAKPOINT)',
    }),
    'legendWide': dict(file=PRO, parts=[('if (wide) {', 0, 10)], sub={
        'Row(modifier,': 'Row(modifier, …) {',
        'Column(modifier.fillMaxWidth(),': 'Column(modifier.fillMaxWidth(), …) {',
        'GenreDonut(': 'GenreDonut(…)',
        'GenreLegend(genres, selectedIndex, onSelect, palette, Modifier.weight': 'GenreLegend(…, Modifier.weight(1f, fill = false).widthIn(max = WIDE_LEGEND_MAX_WIDTH))',
        'GenreLegend(genres, selectedIndex, onSelect, palette, Modifier.fillMaxWidth': 'GenreLegend(…, Modifier.fillMaxWidth())',
    }),
    'menubar': dict(file=MAIN, parts=[('MenuBar {', 0, 15)]),
    'accelerator': dict(file=MAIN, parts=[('internal val isMacOs', 0, 2)], sub={
        'internal fun accelerator': 'internal fun accelerator(key: Key): KeyShortcut =\n    KeyShortcut(key, meta = isMacOs, ctrl = !isMacOs)',
    }),
    'quitWhy': dict(file=MAIN, parts=[('macOS gives every app', 0, 2), ('internal val quitShortcut', 0, 0)]),
    'viewShortcuts': dict(file=MAIN, parts=[('internal val viewShortcuts', 0, 3)]),
    'windowState': dict(file=WIN, parts=[('Sensible default for a first-ever', 0, 1), ('Floor so the window', 0, 1)]),
    'triageKeys': dict(file=TRI, parts=[('val direction = when (key)', 0, 18)], compact=True),
    'backOptIn': dict(file=MAN, parts=[('enableOnBackInvokedCallback', 0, 0)]),
}


def snippet(spec):
    path, parts = spec['file'], spec['parts']
    sub, compact = spec.get('sub', {}), spec.get('compact', False)
    lines = (ROOT / path).read_text().split('\n')
    out, ranges, notes = [], [], set()
    for n, (anchor, before, after) in enumerate(parts):
        hit = next((i for i, l in enumerate(lines) if anchor in l), None)
        if hit is None:
            sys.exit(f'anchor not found in {path}: {anchor!r}')
        a, b = hit + before, hit + after
        ranges.append((a + 1, b + 1))
        chunk = []
        for i in range(a, b + 1):
            l = lines[i]
            ind = ' ' * (len(l) - len(l.lstrip()))
            for k, rep in sub.items():
                if l.strip().startswith(k):
                    l = '\n'.join(ind + x for x in rep.split('\n'))
                    notes.add('línea partida' if '\n' in rep else 'abreviado con …')
                    break
            chunk += l.split('\n')
        if compact:
            if any(not c.strip() for c in chunk):
                notes.add('sin líneas en blanco')
            chunk = [c for c in chunk if c.strip()]
        if n:
            ind = len(chunk[0]) - len(chunk[0].lstrip())
            out.append(' ' * ind + '// …')
        out += chunk
    ind = min((len(l) - len(l.lstrip()) for l in out if l.strip()), default=0)
    ref = ', '.join(f'{a}-{b}' if a != b else str(a) for a, b in ranges)
    note = (' · ' + ', '.join(sorted(notes))) if notes else ''
    return [l[ind:] if l.strip() else '' for l in out], f"{path.split('/')[-1]}:{ref}{note}"


if commit_arg:
    commit = commit_arg
else:
    commit = subprocess.run(['git', '-C', str(ROOT), 'rev-parse', '--short', 'HEAD'], capture_output=True, text=True).stdout.strip()
code, src = {}, {}
for k, spec in SNIPPETS.items():
    code[k], src[k] = snippet(spec)

body = [
    '// GENERATED by tools/gen-code.py from the Muviss sources (main). Do not edit by hand.',
    f'// Muviss commit {commit}.',
    '',
    f'export const MUVISS_COMMIT = {json.dumps(commit)};',
    '',
    '/** Lines of each snippet. `…` marks an explicit abbreviation or an elided range. */',
    'export const CODE = ' + json.dumps(code, ensure_ascii=False, indent=2) + ' as const;',
    '',
    '/** Where each snippet comes from: file:lines, plus what was changed to fit the stage. */',
    'export const SRC = ' + json.dumps(src, ensure_ascii=False, indent=2) + ' as const;',
    '',
]
OUT.write_text('\n'.join(body))
longest = max(len(l) for v in code.values() for l in v)
print(f'wrote {OUT} ({len(code)} snippets, Muviss {commit}, longest line {longest} chars)')
