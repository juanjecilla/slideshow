import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { flags, reducedMotion } from 'beatdeck';
import { config } from '../deck.config';
import { resolveStart, standbyState, type StandbyState } from './standbyState';

/** True while printing / exporting to PDF (the completed frame is what belongs on paper). */
function usePrint(): boolean {
  const [print, setPrint] = useState(false);
  useEffect(() => {
    const mq = typeof matchMedia === 'function' ? matchMedia('print') : null;
    if (!mq) return;
    const on = () => setPrint(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return print;
}

/**
 * Drives the standby animation. `active` = the standby beat is on screen (no ticking otherwise).
 *
 * Frozen (capture, reduced motion, print): progress is forced to 1, nothing animates. Under `?capture=1` the
 * clock is ignored too, so screenshots never depend on the time of day. Reduced motion and print keep the real
 * clock: the countdown text still ticks once a second (that is not motion).
 */
export function useStandby(active: boolean): StandbyState {
  const reduced = useSyncExternalStore(reducedMotion.subscribe, () => reducedMotion.get());
  const print = usePrint();
  const frozen = flags.capture || reduced || print;
  const until = useMemo(
    () => (flags.capture ? null : resolveStart(location.search, config.startsAt, Date.now())),
    [],
  );
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!active) return;
    setNow(Date.now());
    if (frozen) {
      if (until == null) return;
      const id = setInterval(() => setNow(Date.now()), 1000);
      return () => clearInterval(id);
    }
    let raf = 0, last = 0;
    const step = (t: number) => {
      if (t - last >= 33) { last = t; setNow(Date.now()); }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, frozen, until]);

  return standbyState(now, { until, frozen });
}
