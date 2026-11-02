import { Arrow, NodeBox, Reveal, Scene, useScene, type Rect } from 'beatdeck';
import { config } from '../deck.config';
import { ENTRY_POINT, ERRORS, FUNCTION, GRADLE, MANIFEST, SERIALIZABLE } from '../code';
import { Eyebrow, G, Meta } from '../ui';
import { CodeBlock, type CodeLine } from '../code-block';
import type { Lang } from '../syntax';


const UI: Rect = { x: 150, y: 330, w: 500, h: 130 };
const AF: Rect = { x: 150, y: 560, w: 500, h: 130 };
const UC: Rect = { x: 800, y: 445, w: 480, h: 130 };
const DATA: Rect = { x: 1400, y: 445, w: 370, h: 130 };

function Code_() {
  const { here, b } = useScene();
  const block = (k: number, lines: (string | CodeLine)[], size: number, y: number, file: string, lang: Lang = 'kotlin') => (
    <Reveal on={here && b === k} out={here && b > k} x={150} y={y}>
      <CodeBlock lang={lang} file={file} size={size} fit={{ x: 150, y }} lines={lines} />
    </Reveal>
  );
  return (
    <>
      <Eyebrow on={here}>código · {config.libVersion}</Eyebrow>

      {block(0, GRADLE.map((t) => (t.includes('compileSdk') ? { t, marks: [{ text: '37', label: 'docs: 36+ · skill: 37' }], labels: 1 as const } : t)), 30, 150, 'app/build.gradle.kts')}
      {block(1, FUNCTION.map((t) => (t.startsWith('@AppFunctionDeclaration(')
        ? { t, marks: [{ text: 'isDescribedByKDoc = true', label: 'el KDoc viaja hasta el agente' }], labels: 1 as const }
        : t.includes('Dispatchers.IO') ? { t, marks: [{ text: 'Dispatchers.IO', label: 'no el hilo principal' }], labels: 1 as const } : t)), 26, 150, 'BaseAgendaAppFunctionService.kt')}
      {block(2, SERIALIZABLE, 26, 160, 'AgendaModels.kt')}
      {block(3, ENTRY_POINT, 30, 170, 'BaseAgendaAppFunctionService.kt')}
      {block(4, MANIFEST, 24, 150, 'AndroidManifest.xml', 'xml')}
      {block(5, ERRORS, 26, 200, 'BaseAgendaAppFunctionService.kt')}

      {/* 6 · architecture */}
      <NodeBox rect={UI} on={here && b === 6} kind="adaptador de entrada" value="Compose UI" />
      <NodeBox rect={AF} on={here && b === 6} kind="adaptador de entrada" value="AppFunctionService" tone="hot" delay={150} />
      <NodeBox rect={UC} on={here && b === 6} kind="dominio" value="casos de uso" delay={300} />
      <NodeBox rect={DATA} on={here && b === 6} kind="datos" value="repositorio" delay={450} />
      <Arrow from={UI} to={UC} on={here && b === 6} delay={500} />
      <Arrow from={AF} to={UC} on={here && b === 6} tone="hot" delay={650} />
      <Arrow from={UC} to={DATA} on={here && b === 6} delay={800} />
      <Meta on={here && b === 6} y={820} size={36}>Un <G>adaptador de entrada</G>. Aquí no hay lógica de negocio.</Meta>
    </>
  );
}

/** 09 CODE — gradle, función, serializable, punto de entrada, manifest, errores, arquitectura. */
export const Code = () => <Scene index={8}><Code_ /></Scene>;
