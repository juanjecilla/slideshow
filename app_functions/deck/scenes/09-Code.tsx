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
      <Eyebrow on={here}>code · {config.libVersion}</Eyebrow>

      {block(0, GRADLE.map((t) => (t.includes('compileSdk') ? { t, marks: [{ text: '37', label: 'docs: 36+ · skill: 37' }], labels: 1 as const } : t)), 30, 150, 'app/build.gradle.kts')}
      {block(1, FUNCTION.map((t) => (t.startsWith('@AppFunctionDeclaration(')
        ? { t, marks: [{ text: 'isDescribedByKDoc = true', label: 'the KDoc ships to the agent' }], labels: 1 as const }
        : t.includes('Dispatchers.IO') ? { t, marks: [{ text: 'Dispatchers.IO', label: 'not the main thread' }], labels: 1 as const } : t)), 26, 150, 'BaseAgendaAppFunctionService.kt')}
      {block(2, SERIALIZABLE, 26, 160, 'AgendaModels.kt')}
      {block(3, ENTRY_POINT, 30, 170, 'BaseAgendaAppFunctionService.kt')}
      {block(4, MANIFEST, 24, 150, 'AndroidManifest.xml', 'xml')}
      {block(5, ERRORS, 26, 200, 'BaseAgendaAppFunctionService.kt')}

      {/* 6 · architecture */}
      <NodeBox rect={UI} on={here && b === 6} kind="driving adapter" value="Compose UI" />
      <NodeBox rect={AF} on={here && b === 6} kind="driving adapter" value="AppFunctionService" tone="hot" delay={150} />
      <NodeBox rect={UC} on={here && b === 6} kind="domain" value="use cases" delay={300} />
      <NodeBox rect={DATA} on={here && b === 6} kind="data" value="repository" delay={450} />
      <Arrow from={UI} to={UC} on={here && b === 6} delay={500} />
      <Arrow from={AF} to={UC} on={here && b === 6} tone="hot" delay={650} />
      <Arrow from={UC} to={DATA} on={here && b === 6} delay={800} />
      <Meta on={here && b === 6} y={820} size={36}>An <G>inbound adapter</G>. No business logic here.</Meta>
    </>
  );
}

/** 09 CODE — gradle, function, serializable, entry point, manifest, errors, architecture. */
export const Code = () => <Scene index={8}><Code_ /></Scene>;
