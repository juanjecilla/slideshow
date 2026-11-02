import { Arrow, NodeBox, Reveal, Scene, useScene, type NodeTone, type Rect } from 'beatdeck';
import { Eyebrow, Statement } from '../ui';

const PHASES = [
  { id: 'COMPILAR', who: 'compilador', lines: ['KSP lee tus métodos @AppFunctionDeclaration', 'genera el servicio concreto', 'escribe el XML de metadatos en assets/'] },
  { id: 'INSTALAR', who: 'sistema', lines: ['lee el XML del APK', 'indexa los metadatos de la función', 'no al abrir la app: puede tardar tras el primer arranque'] },
  { id: 'DESCUBRIR', who: 'agente', lines: ['necesita EXECUTE_APP_FUNCTIONS', 'searchAppFunctions() → metadatos', 'isAppFunctionEnabled() → ¿puedo ejecutarla?'] },
  { id: 'INVOCAR', who: 'agente → sistema', lines: ['executeAppFunction(request)', 'el sistema vincula tu AppFunctionService', 'la app puede estar cerrada'] },
  { id: 'EJECUTAR', who: 'tu código', lines: ['hilo principal por defecto', 'suspend + Dispatchers.IO', 'resultado o AppFunctionException'] },
];

const node = (i: number): Rect => ({ x: 150 + i * 350, y: 250, w: 300, h: 130 });

function DeepDive_() {
  const { here, b } = useScene();
  const tone = (i: number): NodeTone => (!here ? 'normal' : b === 0 ? 'ghost' : b - 1 === i ? 'hot' : b - 1 > i ? 'normal' : 'ghost');
  return (
    <>
      <Eyebrow on={here}>bajo el capó</Eyebrow>
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

      {/* 6 · el resultado vuelve al agente */}
      <Arrow from={{ x: node(4).x + 150, y: node(4).y + node(4).h + 20 }} to={{ x: node(3).x + 150, y: node(3).y + node(3).h + 20 }} on={here && b >= 6} tone="hot" head={false} label="" />
      <Statement on={here && b === 6} y={520} size={90}>El agente recibe<br />un resultado — o un error tipado.</Statement>
      <Reveal on={here && b === 6} x={158} y={820} delay={400}>
        <div className="mono" style={{ fontSize: 36, color: 'var(--agent)' }}>ExecuteAppFunctionResponse</div>
      </Reveal>
    </>
  );
}

/** 08 DEEP DIVE — un diagrama, cinco fases. */
export const DeepDive = () => <Scene index={7}><DeepDive_ /></Scene>;
