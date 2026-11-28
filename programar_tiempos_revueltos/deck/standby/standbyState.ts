/**
 * Standby clock logic: pure, no React, no DOM, no imports. Written so it can move to beatdeck as-is
 * (the visuals stay in each talk). Time in, state out.
 *
 *   until set   idle (before the scan window) → scan (progress 0→1 over the window) → ready (held)
 *   no until    loop: progress 0→1 over most of `loopMs`, held at 1 for the rest, then starts over
 *   frozen      progress is forced to 1 (the "completed" frame: capture, reduced motion, print)
 */

export type StandbyMode = 'idle' | 'scan' | 'ready' | 'loop';

export interface StandbyOpts {
  /** Start time, ms since epoch. null/undefined = no clock: loop. */
  until?: number | null;
  /** How long before `until` the scan runs. Default 10 min. */
  windowMs?: number;
  /** Loop length when there is no clock. Default 60 s. */
  loopMs?: number;
  /** Force the completed frame. */
  frozen?: boolean;
}

export interface StandbyState {
  mode: StandbyMode;
  /** 0..1 */
  progress: number;
  /** 0..3 = the phase running; 4 = all four done. */
  phase: 0 | 1 | 2 | 3 | 4;
  /** ms to `until` (negative once past), null without a clock. */
  remainingMs: number | null;
  done: boolean;
  frozen: boolean;
}

export const SCAN_WINDOW_MS = 10 * 60_000;
export const LOOP_MS = 60_000;
/** Share of a loop spent scanning; the rest holds the completed frame before it starts over. */
const LOOP_SCAN_SHARE = 0.85;

export function standbyState(now: number, o: StandbyOpts = {}): StandbyState {
  const windowMs = o.windowMs ?? SCAN_WINDOW_MS;
  const loopMs = o.loopMs ?? LOOP_MS;
  const frozen = !!o.frozen;
  let mode: StandbyMode;
  let progress: number;
  let remainingMs: number | null = null;

  if (o.until == null) {
    mode = 'loop';
    progress = Math.min(1, ((now % loopMs) / loopMs) / LOOP_SCAN_SHARE);
  } else {
    remainingMs = o.until - now;
    if (remainingMs <= 0) { mode = 'ready'; progress = 1; }
    else if (remainingMs > windowMs) { mode = 'idle'; progress = 0; }
    else { mode = 'scan'; progress = 1 - remainingMs / windowMs; }
  }
  if (frozen) progress = 1;
  const phase = (progress >= 1 ? 4 : Math.min(3, Math.floor(progress * 4))) as StandbyState['phase'];
  return { mode, progress, phase, remainingMs, done: progress >= 1, frozen };
}

/**
 * The start time for this run: `?start=HH:MM` (today, local time; for rehearsals) wins over the configured ISO
 * string. null = no valid clock → loop.
 */
export function resolveStart(search: string, startsAt: string | undefined, now: number): number | null {
  const m = /^(\d{1,2}):(\d{2})$/.exec(new URLSearchParams(search).get('start') ?? '');
  if (m && +m[1] < 24 && +m[2] < 60) {
    const d = new Date(now);
    d.setHours(+m[1], +m[2], 0, 0);
    return d.getTime();
  }
  const t = startsAt ? Date.parse(startsAt) : NaN;
  return Number.isFinite(t) ? t : null;
}

/** `mm:ss`, or `h:mm:ss` from one hour up. Never negative. */
export function formatRemaining(ms: number): string {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  const p = (n: number) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${p(m)}:${p(sec)}` : `${p(m)}:${p(sec)}`;
}
