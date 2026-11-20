import test from 'node:test';
import assert from 'node:assert/strict';
import { standbyState, resolveStart, formatRemaining, SCAN_WINDOW_MS, LOOP_MS } from '../../deck/standby/standbyState.ts';

const T = 1_000_000_000_000;

test('idle before the scan window', () => {
  const s = standbyState(T, { until: T + SCAN_WINDOW_MS + 1 });
  assert.deepEqual([s.mode, s.progress, s.phase, s.done], ['idle', 0, 0, false]);
});

test('scan runs 0→1 over the window, one phase per quarter', () => {
  const at = (frac) => standbyState(T + frac * SCAN_WINDOW_MS, { until: T + SCAN_WINDOW_MS });
  assert.equal(at(0).mode, 'scan');
  assert.equal(at(0).phase, 0);
  assert.equal(at(0.26).phase, 1);
  assert.equal(at(0.51).phase, 2);
  assert.equal(at(0.76).phase, 3);
  assert.ok(Math.abs(at(0.5).progress - 0.5) < 1e-9);
});

test('ready holds the completed frame after the start', () => {
  const s = standbyState(T + 5000, { until: T });
  assert.deepEqual([s.mode, s.progress, s.phase, s.done], ['ready', 1, 4, true]);
});

test('no clock loops, scans then holds, then starts over', () => {
  const at = (ms) => standbyState(ms, { loopMs: LOOP_MS });
  assert.equal(at(0).mode, 'loop');
  assert.equal(at(0).progress, 0);
  assert.ok(at(LOOP_MS * 0.4).progress > 0.4 && at(LOOP_MS * 0.4).progress < 1);
  assert.equal(at(LOOP_MS * 0.95).progress, 1);
  assert.equal(at(LOOP_MS).progress, 0);
});

test('frozen forces the completed frame in every mode, keeps the clock', () => {
  for (const until of [null, T + 3 * SCAN_WINDOW_MS, T + 1000, T - 1000]) {
    const s = standbyState(T, { until, frozen: true });
    assert.deepEqual([s.progress, s.phase, s.done, s.frozen], [1, 4, true, true]);
  }
  assert.equal(standbyState(T, { until: T + 60_000, frozen: true }).remainingMs, 60_000);
});

test('resolveStart: ?start=HH:MM wins, ISO config next, otherwise null', () => {
  const now = new Date(2026, 10, 21, 9, 0, 0).getTime();
  assert.equal(resolveStart('?start=09:30', '2026-11-21T10:00:00+01:00', now), new Date(2026, 10, 21, 9, 30).getTime());
  assert.equal(resolveStart('', '2026-11-21T10:00:00+01:00', now), Date.parse('2026-11-21T10:00:00+01:00'));
  assert.equal(resolveStart('?start=25:00', '', now), null);
  assert.equal(resolveStart('?start=abc', undefined, now), null);
  assert.equal(resolveStart('', 'not a date', now), null);
});

test('formatRemaining', () => {
  assert.equal(formatRemaining(4 * 60_000 + 12_000), '04:12');
  assert.equal(formatRemaining(3_725_000), '1:02:05');
  assert.equal(formatRemaining(-5), '00:00');
});
