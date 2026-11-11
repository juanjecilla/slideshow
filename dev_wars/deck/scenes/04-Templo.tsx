import { Eyebrow, Img, Lines, Quote, Rise, Sc, Title, defineBeats, useBeats } from '../ui';

export const templo = defineBeats([
  { name: 'verdad', ref: 'slide 32' },
  { name: 'equipo', ref: 'slide 32' },
  { name: 'madurez', ref: 'slide 32' },
  { name: 'entrega', ref: 'slide 32' },
  { name: 'necesidades', ref: 'slide 32' },
  { name: 'ataque', ref: 'slide 33' },
  { name: 'sobreingenieria', ref: 'slide 34' },
  { name: 'caso', ref: 'slide 35' },
  { name: 'solucion', ref: 'slide 36' },
  { name: 'mvp', ref: 'slide 37' },
  { name: 'entrevista-1', ref: 'slide 38' },
  { name: 'entrevista-2', ref: 'slide 39' },
  { name: 'entrevista-codigo', ref: 'slide 40' },
  { name: 'rechazado', ref: 'slide 40 (click)' },
] as const);

const I = templo.i;

const PAIRS = [
  ['No existe la verdad absoluta', 'Todo depende del contexto'],
  ['Expertise del equipo', '¿Sabemos usarlo ya?'],
  ['Madurez tecnológica', '¿Lo vi en un post de Medium ayer?'],
  ['Tiempos de entrega', '¿Perfección o time-to-market menor?'],
  ['Necesidades reales', '¿Un motor de plasma para ir a por pan?'],
] as const;
const PAIR_BEATS = ['verdad', 'equipo', 'madurez', 'entrega', 'necesidades'] as const;

const SOLUTION = [
  'Arquitectura: Monolito vs Microservicios',
  'Comunicación: Directa a BD vs Event Driven',
  'Infraestructura: Hosting gestionado vs Kubernetes',
  'Persistencia: SQL vs Redis + Postgres + Elastic',
  'Frontend: Componentes en React vs Micro frontends',
];

function Body() {
  const { at, from, between } = useBeats(I);
  const temple = between('verdad', 'necesidades');
  return (
    <>
      {/* the temple of wisdom: one pair per beat, Yoda stays */}
      <Title on={temple} y={90} size={92} text="El templo de la sabiduría">El templo de la <span style={{ color: 'var(--accent)' }}>sabiduría</span></Title>
      <Img on={temple} src="yoda.webp" x={1210} y={250} w={500} h={600} />
      {PAIRS.map(([a, b], k) => {
        const shown = from(PAIR_BEATS[k]) && temple;
        return (
          <Rise key={a} on={shown} x={150} y={290 + k * 140}>
            <div className="dw-line" style={{ fontSize: 58 }}>{a}</div>
            <div className="dw-line" style={{ fontSize: 40, color: 'var(--ink-2)', fontWeight: 500, marginTop: 6 }}>{b}</div>
          </Rise>
        );
      })}

      {/* overengineering */}
      <Title on={at('ataque')} y={250} size={190}>El Ataque de la</Title>
      <Title on={at('ataque')} y={450} size={190} color="var(--accent)" delay={140}>Sobreingeniería</Title>

      <Title on={at('sobreingenieria')} y={110} size={112}>Sobreingeniería</Title>
      <Lines on={at('sobreingenieria')} y={340} size={62} width={1000} gap={1.65} step={240} lines={[
        'Cuando planificamos “demasiado”',
        '“Por si acaso en el futuro…”',
        'Nuevas tecnologías no maduras',
        'Guiarnos por estándares sin contexto',
      ]} />
      <Img on={at('sobreingenieria')} src="deathstar-beam.webp" x={1210} y={300} w={560} h={394} delay={200} />

      <Eyebrow on={at('caso')} y={170}>Caso de uso</Eyebrow>
      <Quote on={at('caso')} y={260} size={86} width={1560}>“El cliente necesita un formulario de contacto para una campaña de marketing de 2 semanas. Esperamos <span style={{ color: 'var(--accent)' }}>100 leads al día</span>.”</Quote>

      <Eyebrow on={at('solucion')} y={96}>Caso de uso</Eyebrow>
      <Title on={at('solucion')} y={150} size={112}>Solución</Title>
      {SOLUTION.map((s, k) => {
        const [label, rest] = s.split(': ');
        return (
          <Rise key={s} on={at('solucion')} x={150} y={340 + k * 124} delay={k * 220}>
            <div className="dw-mono" style={{ fontSize: 26, color: 'var(--accent)', marginBottom: 6 }}>{label}</div>
            <div className="dw-line" style={{ fontSize: 58 }}>{rest}</div>
          </Rise>
        );
      })}

      <Title on={at('mvp')} y={110} size={120}>¿Y si…?</Title>
      <Lines on={at('mvp')} y={330} size={66} width={1000} gap={1.65} step={240} lines={[
        { t: 'Un MVP no tiene que ser perfecto', accent: true },
        'Importa más demostrar el concepto',
        'No hacen falta tests',
        'No reinventes la rueda',
        'No tiene por qué escalar',
      ]} />
      <Img on={at('mvp')} src="jarjar.webp" x={1230} y={230} w={500} h={618} delay={300} />

      {/* interviews */}
      <Eyebrow on={between('entrevista-1', 'rechazado')} y={96}>Ego en entrevistas</Eyebrow>
      <Quote on={at('entrevista-1')} y={250} size={88} width={1560}>“… tienes que hacer una petición a una API y mostrar el resultado en un listado…”</Quote>
      <Rise on={at('entrevista-1')} x={150} y={800} delay={500}><div className="dw-mono" style={{ fontSize: 36, color: 'var(--accent)' }}>Proyecto en blanco - 20 minutos</div></Rise>

      <Lines on={at('entrevista-2')} y={200} size={72} width={1620} gap={1.5} step={230} lines={[
        'Arquitectura Clean',
        'Repositorio con Data sources',
        'Inyección de dependencias con Dagger Hilt',
        'Retrofit',
        'Jetpack Compose',
      ]} />
      <Rise on={at('entrevista-2')} x={150} y={900} delay={1200}><div className="dw-mono" style={{ fontSize: 36, color: 'var(--accent)' }}>Proyecto en blanco - 20 minutos</div></Rise>

      <Img on={between('entrevista-codigo', 'rechazado')} src="code.webp" x={210} y={250} w={1500} h={657} />
      <Img on={at('rechazado')} src="rejected.webp" x={620} y={330} w={680} h={680} style={{ transform: 'rotate(-10deg)' }} />
    </>
  );
}

export const Templo = () => <Sc index={3}><Body /></Sc>;
