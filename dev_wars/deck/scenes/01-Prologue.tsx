import { Caption, Img, Lines, Photo, Rise, Sc, Title, defineBeats, useBeats } from '../ui';
import { asset } from '../assets';
import { strings as s } from '../i18n';

/** `ref` = slide number in the Google Slides deck given at Codemotion Madrid 2026. */
export const prologue = defineBeats([
  { name: 'title', ref: 'slide 1', note: s.prologue.notes.title },
  { name: 'galaxy', ref: 'slide 2' },
  { name: 'company', ref: 'slide 2 (click)', note: s.prologue.notes.company },
  { name: 'logo', ref: 'slide 3' },
  { name: 'disclaimer', ref: 'slide 4' },
  { name: 'manifesto', ref: 'slide 5' },
  // An animated GIF is on screen: its frame differs between captures (verify only).
  { name: 'tusken', ref: 'slide 5 (click)', tolerance: 3 },
  { name: 'crawl', auto: true, ref: 'slide 6', note: s.prologue.notes.crawl },
  { name: 'junior', ref: 'slide 7' },
  { name: 'senior', ref: 'slide 8' },
] as const);

const I = prologue.i;

function Body() {
  const { at, from, between, entry } = useBeats(I);
  return (
    <>
      {/* title + loading bar */}
      <Title on={at('title')} center y={290} size={330} color="var(--accent)">DEV WARS</Title>
      <Title on={at('title')} center y={620} size={104} delay={160}>{s.subtitle}</Title>
      <Rise on={at('title')} x={580} y={830} delay={320} ms={700}><div className="dw-loader"><i /></div></Rise>

      {/* galaxy + company stamp */}
      <Rise on={between('galaxy', 'company')} x={150} y={470} style={{ width: 1620, textAlign: 'center' }}>
        <div className="dw-quote" style={{ fontSize: 78, color: 'var(--space-blue)', fontWeight: 400, whiteSpace: 'nowrap' }}>
          A long time ago in a{' '}
          <span style={{ position: 'relative' }}>
            galaxy
            {/* a dark plate with alpha under the stamp, so COMPANY reads over the word it replaces */}
            <span
              style={{
                position: 'absolute', left: '50%', top: '50%', width: 330, height: 118, background: 'rgba(11, 11, 12, 0.94)',
                borderRadius: 6, boxShadow: '0 0 28px 10px rgba(11, 11, 12, 0.94)',
                transform: `translate(-50%, -48%) rotate(-17deg) scale(${from('company') ? 1 : 1.35})`,
                opacity: from('company') ? 1 : 0, transition: from('company') ? 'opacity 260ms ease, transform 260ms var(--ease)' : 'none',
              }}
            />
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

      {/* logo: full screen */}
      <Photo on={at('logo')} src="logo-clean.webp" fit="contain" bg="#000" />

      {/* disclaimer */}
      <Img on={at('disclaimer')} src="disclaimer.webp" x={400} y={250} w={1120} h={515} />

      {/* manifesto */}
      <Img on={between('manifesto', 'tusken')} src="disclaimer.webp" x={110} y={50} w={420} h={193} />
      <Lines on={between('manifesto', 'tusken')} x={150} y={330} size={66} gap={1.55} lines={[
        { t: s.prologue.manifesto[0], accent: true },
        s.prologue.manifesto[1],
        s.prologue.manifesto[2],
        { t: s.prologue.manifesto[3], dim: true, indent: 56 },
        s.prologue.manifesto[4],
        s.prologue.manifesto[5],
      ]} />
      <Img on={at('tusken')} src="tusken.gif" x={1130} y={520} w={640} h={311} />

      {/* crawl */}
      <div className="dw-crawl-stage" style={{ opacity: at('crawl') ? 1 : 0 }}>
        <div className="dw-crawl" key={`${entry}-${at('crawl')}`} data-run={at('crawl') ? 1 : 0}>
          <p>{s.prologue.crawl[0]}</p>
          <p>{s.prologue.crawl[1]}</p>
        </div>
      </div>

      {/* the two characters */}
      <Photo on={at('junior')} src="luke.webp" shade="bottom" />
      <Caption on={at('junior')} eyebrow={s.prologue.junior.eyebrow} title={s.prologue.junior.title} />
      <Photo on={at('senior')} src="obiwan.webp" shade="bottom" />
      <Caption on={at('senior')} eyebrow={s.prologue.senior.eyebrow} title={s.prologue.senior.title} />
    </>
  );
}

export const Prologue = () => <Sc index={0}><Body /></Sc>;
