import { Reveal, Scene, Terminal, useScene } from 'beatdeck';
import { ADB_ADD, ADB_LIST, ADB_SEARCH, ADB_STOP } from '../code';
import { A, Eyebrow, G, Meta, Statement } from '../ui';

const FNS = ['searchTalks', 'getFavourites', 'addToFavorites', 'clearFavorites'];
const CHECKS = ['no UI', 'no network', 'typed', 'app closed'];

function Demo_() {
  const { here, b } = useScene();
  const only = (k: number) => ({ on: here && b === k, out: here && b > k });
  return (
    <>
      <Eyebrow on={here}>live demo</Eyebrow>

      {/* 0 · scenario */}
      <Statement {...only(0)} y={190} size={150}>DevFest<br /><G>agenda.</G></Statement>
      <Meta {...only(0)} y={620} size={30} delay={500}>the real one · 23 sessions · 3 rooms</Meta>
      {FNS.map((f, i) => (
        <Reveal key={f} {...only(0)} x={1050} y={290 + i * 100} delay={250 + i * 150}>
          <div className="mono" style={{ fontSize: 44, color: f === 'clearFavorites' ? 'var(--warning)' : 'var(--ink)' }}>{f}()</div>
        </Reveal>
      ))}

      {/* 1–4 · adb */}
      <Reveal {...only(1)} x={150} y={400} delay={200}>
        <Terminal size={36} lines={[{ t: ADB_LIST[0], marks: [{ text: 'list-app-functions', label: 'what the system indexed' }], labels: 1 }, ADB_LIST[1]]} />
      </Reveal>
      <Reveal {...only(2)} x={150} y={360} delay={200}><Terminal size={32} lines={ADB_SEARCH} /></Reveal>
      <Reveal {...only(3)} x={150} y={360} delay={200}><Terminal size={32} lines={ADB_ADD} /></Reveal>
      <Reveal {...only(4)} x={150} y={300} delay={200}>
        <Terminal size={32} lines={[...ADB_STOP, '', ...ADB_SEARCH]} />
      </Reveal>
      <Meta {...only(4)} y={800} size={34} delay={500}>App force-stopped. Same call. <G>Same result.</G></Meta>

      {/* 5 · ask about a slot (the audience picks one) */}
      <Statement {...only(5)} y={190} size={104}>Ask about <G>any slot.</G></Statement>
      <Meta {...only(5)} y={470} size={34} delay={250}>What is at 18:15?</Meta>
      <Reveal {...only(5)} x={150} y={620} delay={400}>
        <Terminal size={36} lines={['$ scripts/appfunctions-adb.sh search demo 18:00']} />
      </Reveal>

      {/* 6 · testing agent */}
      <Statement {...only(6)} y={190} size={96}>AppFunctions<br /><A>Testing Agent</A></Statement>
      {['privileged execution', 'manual debugging', 'LLM agent evaluations'].map((t, i) => (
        <Reveal key={t} {...only(6)} x={158} y={560 + i * 90} delay={250 + i * 150}><div className="mono" style={{ fontSize: 40 }}>{t}</div></Reveal>
      ))}
      <Meta {...only(6)} y={880} size={26} delay={700}>github.com/android/appfunctions → agent/</Meta>

      {/* 7 · recap */}
      <Statement {...only(7)} y={190} size={104}>What we saw.</Statement>
      {CHECKS.map((c, i) => (
        <Reveal key={c} {...only(7)} x={158} y={430 + i * 120} delay={250 + i * 180}>
          <div style={{ display: 'flex', gap: 36, alignItems: 'baseline' }}>
            <span style={{ fontSize: 64, color: 'var(--accent)' }}>✓</span>
            <span className="t-statement" style={{ fontSize: 80 }}>{c}</span>
          </div>
        </Reveal>
      ))}
    </>
  );
}

/** 12 DEMO — adb list/execute, closed app, Testing Agent. Real output replaces nothing: the demo is live. */
export const Demo = () => <Scene index={11}><Demo_ /></Scene>;
