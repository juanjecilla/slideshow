import { Caption, Img, Lines, Photo, Rise, Sc, Title, defineBeats, useBeats } from '../ui';
import { asset } from '../assets';

/** `ref` = slide number in the Google Slides deck given at Codemotion Madrid 2026. */
export const prologue = defineBeats([
  { name: 'title', ref: 'slide 1', note: 'Calm start: the talk begins on the first click.' },
  { name: 'galaxy', ref: 'slide 2' },
  { name: 'company', ref: 'slide 2 (click)', note: 'The stamp: "a company far, far away".' },
  { name: 'logo', ref: 'slide 3' },
  { name: 'disclaimer', ref: 'slide 4' },
  { name: 'manifesto', ref: 'slide 5' },
  // An animated GIF is on screen: its frame differs between captures (verify only).
  { name: 'tusken', ref: 'slide 5 (click)', tolerance: 3 },
  { name: 'crawl', auto: true, ref: 'slide 6', note: 'The crawl scrolls by itself (about 45 s). Click when you are ready to go on.' },
  { name: 'junior', ref: 'slide 7' },
  { name: 'senior', ref: 'slide 8' },
] as const);

const I = prologue.i;

const CRAWL_1 = 'Es un periodo de guerra civil en el repositorio. Las naves de los desarrolladores rebeldes han logrado una victoria contra el Imperio de los frameworks obsoletos. Pero el EGO, una sombra amenaza con dividir a los equipos.';
const CRAWL_2 = 'Mientras el código se expande por la galaxia, los ingenieros luchan no por la eficiencia, sino por tener la razón. En medio de este caos, surge la necesidad de encontrar el equilibrio en la Fuerza...';

function Body() {
  const { at, from, between, entry } = useBeats(I);
  return (
    <>
      {/* title */}
      <Title on={at('title')} center y={300} size={330} color="var(--accent)">DEV WARS</Title>
      <Title on={at('title')} center y={640} size={104} delay={160}>El despertar del ego</Title>

      {/* galaxy + company stamp */}
      <Rise on={between('galaxy', 'company')} x={150} y={470} style={{ width: 1620, textAlign: 'center' }}>
        <div className="dw-quote" style={{ fontSize: 78, color: 'var(--space-blue)', fontWeight: 400, whiteSpace: 'nowrap' }}>
          A long time ago in a{' '}
          <span style={{ position: 'relative' }}>
            galaxy
            <img
              src={asset('company.webp')} alt="COMPANY" draggable={false}
              style={{
                position: 'absolute', left: '50%', top: '50%', width: 360, transform: `translate(-50%, -48%) scale(${from('company') ? 1 : 1.35})`,
                opacity: from('company') ? 1 : 0, transition: from('company') ? 'opacity 260ms ease, transform 260ms var(--ease)' : 'none',
              }}
            />
          </span>{' '}
          far, far away....
        </div>
      </Rise>

      {/* logo */}
      <Img on={at('logo')} src="logo.webp" x={310} y={250} w={1300} h={582} />

      {/* disclaimer */}
      <Img on={at('disclaimer')} src="disclaimer.webp" x={400} y={250} w={1120} h={515} />

      {/* manifesto */}
      <Img on={between('manifesto', 'tusken')} src="disclaimer.webp" x={110} y={50} w={420} h={193} />
      <Lines on={between('manifesto', 'tusken')} x={150} y={330} size={66} gap={1.55} lines={[
        { t: 'Star Wars como hilo conductor', accent: true },
        'No voy a decir verdades absolutas',
        'Experiencias reales',
        { t: 'No pasa en todos lados', dim: true, indent: 56 },
        'No soy perfecto',
        'El humor por encima de todo',
      ]} />
      <Img on={at('tusken')} src="tusken.gif" x={1130} y={520} w={640} h={311} />

      {/* crawl */}
      <div className="dw-crawl-stage" style={{ opacity: at('crawl') ? 1 : 0 }}>
        <div className="dw-crawl" key={`${entry}-${at('crawl')}`} data-run={at('crawl') ? 1 : 0}>
          <p>{CRAWL_1}</p>
          <p>{CRAWL_2}</p>
        </div>
      </div>

      {/* the two characters */}
      <Photo on={at('junior')} src="luke.webp" shade="bottom" />
      <Caption on={at('junior')} eyebrow="Programador a.k.a" title="“El Junior”" />
      <Photo on={at('senior')} src="obiwan.webp" shade="bottom" />
      <Caption on={at('senior')} eyebrow="Software Engineer a.k.a" title="“El Senior”" />
    </>
  );
}

export const Prologue = () => <Sc index={0}><Body /></Sc>;
