import { Arrow, NodeBox, Reveal, Scene, useScene, type NodeTone, type Rect } from 'beatdeck';
import { Eyebrow, Statement } from '../ui';

const PHASES = [
  { id: 'BUILD', who: 'compiler', lines: ['KSP reads your @AppFunctionDeclaration methods', 'generates the concrete service', 'writes XML metadata into assets/'] },
  { id: 'INSTALL', who: 'system', lines: ['reads the XML from the APK', 'indexes the function metadata', 'not at app start: may lag after first launch'] },
  { id: 'DISCOVER', who: 'agent', lines: ['needs EXECUTE_APP_FUNCTIONS', 'searchAppFunctions() → metadata', 'isAppFunctionEnabled() → can I run it?'] },
  { id: 'INVOKE', who: 'agent → system', lines: ['executeAppFunction(request)', 'the system binds your AppFunctionService', 'the app can be closed'] },
  { id: 'EXECUTE', who: 'your code', lines: ['main thread by default', 'suspend + Dispatchers.IO', 'result or AppFunctionException'] },
];

const node = (i: number): Rect => ({ x: 150 + i * 350, y: 250, w: 300, h: 130 });

function DeepDive_() {
  const { here, b } = useScene();
  const tone = (i: number): NodeTone => (!here ? 'normal' : b === 0 ? 'ghost' : b - 1 === i ? 'hot' : b - 1 > i ? 'normal' : 'ghost');
  return (
    <>
      <Eyebrow on={here}>under the hood</Eyebrow>
      {PHASES.map((p, i) => (
        <NodeBox key={p.id} rect={node(i)} on={here} kind={p.who} value={p.id} tone={b >= 6 ? 'dim' : tone(i)} delay={i * 90} />
      ))}
      {PHASES.slice(1).map((_, i) => (
        <Arrow key={i} from={node(i)} to={node(i + 1)} on={here} tone={here && b - 1 === i + 1 ? 'hot' : 'dim'} delay={400 + i * 90} />
      ))}

      {PHASES.map((p, i) => (
        <div key={p.id}>
          <Reveal on={here && b === i + 1} out={here && b > i + 1} x={150} y={500}>
            <div className="t-statement" style={{ fontSize: 96, color: 'var(--accent)' }}>{p.id.toLowerCase()}</div>
          </Reveal>
          {p.lines.map((l, k) => (
            <Reveal key={k} on={here && b === i + 1} out={here && b > i + 1} x={150} y={680 + k * 82} delay={150 + k * 150}>
              <div className="mono" style={{ fontSize: 40 }}>{l}</div>
            </Reveal>
          ))}
        </div>
      ))}

      {/* 6 · result back to the agent */}
      <Arrow from={{ x: node(4).x + 150, y: node(4).y + node(4).h + 20 }} to={{ x: node(3).x + 150, y: node(3).y + node(3).h + 20 }} on={here && b >= 6} tone="hot" head={false} label="" />
      <Statement on={here && b === 6} y={520} size={104}>The agent gets<br />a result — or a typed error.</Statement>
      <Reveal on={here && b === 6} x={158} y={820} delay={400}>
        <div className="mono" style={{ fontSize: 36, color: 'var(--agent)' }}>ExecuteAppFunctionResponse</div>
      </Reveal>
    </>
  );
}

/** 08 DEEP DIVE — one diagram, five phases. */
export const DeepDive = () => <Scene index={7}><DeepDive_ /></Scene>;
