import { Arrow, NodeBox, Reveal, Scene, Terminal, useScene, type Rect } from 'beatdeck';
import { APP_METADATA, DYNAMIC, SKILLS_CMD } from '../code';
import { A, Eyebrow, G, Meta, Statement } from '../ui';

const CHAIN = ['searchTalks', 'addToFavorites', 'createEvents', 'send'];
const chip = (i: number): Rect => ({ x: 150 + i * 440, y: 520, w: 380, h: 120 });

function Beyond_() {
  const { here, b } = useScene();
  const only = (k: number) => ({ on: here && b === k, out: here && b > k });
  return (
    <>
      <Eyebrow on={here}>más allá de una función</Eyebrow>

      {/* 0 · orchestration */}
      <Statement {...only(0)} y={190} size={104}>El valor está en la <G>cadena.</G></Statement>
      {CHAIN.map((c, i) => <NodeBox key={c} rect={chip(i)} on={here && b === 0} value={c} kind={['devfest', 'devfest', 'calendario', 'mensajes'][i]} tone={i === 1 ? 'hot' : 'normal'} delay={i * 150} />)}
      {CHAIN.slice(1).map((_, i) => <Arrow key={i} from={chip(i)} to={chip(i + 1)} on={here && b === 0} delay={500 + i * 150} />)}
      <Meta {...only(0)} y={760} size={32} delay={600}>Cada app solo conoce sus funciones. El agente escribe el plan.</Meta>

      {/* 1 · app_metadata */}
      <Statement {...only(1)} y={190} size={84}>Otro sitio para <G>instrucciones.</G></Statement>
      <Reveal {...only(1)} x={150} y={330} delay={200}><Terminal prompt="" size={26} lines={APP_METADATA} /></Reveal>
      <Meta {...only(1)} y={820} size={26} delay={500}>app_metadata.xml · texto libre en `instructions`: patrones y restricciones</Meta>

      {/* 2 · dynamic */}
      <Statement {...only(2)} y={190} size={104}>Regístralas en <G>ejecución.</G></Statement>
      <Reveal {...only(2)} x={150} y={420} delay={200}><Terminal prompt="" size={36} lines={DYNAMIC} /></Reveal>
      <Meta {...only(2)} y={800} size={30} delay={500}>Ligadas a una Activity: expuestas solo mientras tiene sentido.</Meta>

      {/* 3 · android skills */}
      <Statement {...only(3)} y={190} size={90}>Deja que un agente las escriba<br /><A>contigo.</A></Statement>
      <Reveal {...only(3)} x={150} y={560} delay={200}><Terminal size={48} lines={SKILLS_CMD} /></Reveal>
      <Meta {...only(3)} y={720} size={28} delay={500}>Skill oficial de Android: busca candidatas, escribe código, pule el KDoc, prueba con ADB.</Meta>
    </>
  );
}

/** 11 BEYOND — orquestación, app_metadata, funciones dinámicas, Android skills. */
export const Beyond = () => <Scene index={10}><Beyond_ /></Scene>;
