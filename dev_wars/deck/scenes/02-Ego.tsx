import { config } from '../deck.config';
import { Clip, Img, Lines, Sc, Title, defineBeats, useBeats } from '../ui';

export const ego = defineBeats([
  { name: 'conflicto', ref: 'slide 9' },
  { name: 'ego', ref: 'slide 10' },
  { name: 'rae', ref: 'slide 11' },
  { name: 'definicion', ref: 'slide 12' },
  { name: 'ni-bueno-ni-malo', ref: 'slide 13' },
  { name: 'deporte-bien', ref: 'slide 14', note: `Clips play by themselves, silent. ${config.clipSources.youtubeTrail} (bundled locally) and ${config.clipSources.driveTrail}` },
  { name: 'deporte-mal', ref: 'slide 15', note: `Clips play by themselves, silent. ${config.clipSources.driveMarathon} and ${config.clipSources.driveSpeedProject}` },
  { name: 'tech', ref: 'slide 16' },
] as const);

const I = ego.i;

function Body() {
  const { at } = useBeats(I);
  return (
    <>
      <Title on={at('conflicto')} center y={400} size={160}>El conflicto <span style={{ color: 'var(--accent)' }}>galáctico</span></Title>

      {/* El Ego */}
      <Title on={at('ego')} y={110} size={150}>El Ego</Title>
      <Img on={at('ego')} src="planet.webp" x={150} y={400} w={562} h={470} delay={80} />
      <Img on={at('ego')} src="mask.webp" x={742} y={400} w={673} h={470} delay={160} />
      <Img on={at('ego')} src="ego-guardians.webp" x={1445} y={400} w={318} h={470} delay={240} fit="cover" />

      <Title on={at('rae')} y={110} size={150}>El Ego</Title>
      <Img on={at('rae')} src="rae-ego.webp" x={150} y={400} w={1620} h={314} />
      <Title on={at('definicion')} y={110} size={150}>El Ego</Title>
      <Img on={at('definicion')} src="rae-def.webp" x={150} y={400} w={1620} h={312} />

      <Title on={at('ni-bueno-ni-malo')} y={110} size={150}>El Ego</Title>
      <Lines on={at('ni-bueno-ni-malo')} y={400} size={78} gap={1.7} step={260} lines={[
        { t: 'No es malo per se', accent: true },
        'Nos ayuda a adaptarnos, definirnos y relacionarnos',
        'Es malo si es rígido y defensivo',
      ]} />

      {/* sport */}
      <Title on={at('deporte-bien')} y={110} size={76} color="var(--ink-2)">El Ego en el deporte</Title>
      <Title on={at('deporte-bien')} y={260} size={260} color="var(--accent)" delay={120}>Bien</Title>
      <Clip on={at('deporte-bien')} name="trail-leire" x={760} y={250} w={394} h={700} />
      <Clip on={at('deporte-bien')} name="trail-leire-yt" x={1190} y={420} w={580} h={326} />

      <Title on={at('deporte-mal')} y={110} size={76} color="var(--ink-2)">El Ego en el deporte</Title>
      <Title on={at('deporte-mal')} y={260} size={260} color="var(--fault)" delay={120}>Mal</Title>
      <Clip on={at('deporte-mal')} name="maraton-barcelona" x={760} y={250} w={394} h={700} />
      <Clip on={at('deporte-mal')} name="speed-project-finisher" x={1190} y={250} w={394} h={700} />

      <Title on={at('tech')} y={110} size={120}>El Ego en <span style={{ color: 'var(--accent)' }}>Tech</span></Title>
      <Lines on={at('tech')} y={380} size={72} gap={1.7} step={260} lines={[
        'Sobreponer nuestras ideas por encima de todo',
        'Inseguridades',
        'Priorización del YO en contra del NOSOTROS',
        'Conformismo',
      ]} />
    </>
  );
}

export const Ego = () => <Sc index={1}><Body /></Sc>;
