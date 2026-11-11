import { strings as s } from '../i18n';
import { Eyebrow, Img, Lines, Quote, Rise, Sc, Title, defineBeats, useBeats } from '../ui';

/** `ref` = slide number in the Google Slides deck given at Codemotion Madrid 2026. */
export const templo = defineBeats([
  { name: 'truth', ref: 'slide 32' },
  { name: 'team', ref: 'slide 32' },
  { name: 'maturity', ref: 'slide 32' },
  { name: 'delivery', ref: 'slide 32' },
  { name: 'needs', ref: 'slide 32' },
  { name: 'attack', ref: 'slide 33' },
  { name: 'overengineering', ref: 'slide 34' },
  { name: 'use-case', ref: 'slide 35' },
  { name: 'solution', ref: 'slide 36' },
  { name: 'mvp', ref: 'slide 37' },
  { name: 'interview-1', ref: 'slide 38' },
  { name: 'interview-2', ref: 'slide 39' },
  { name: 'interview-code', ref: 'slide 40' },
  { name: 'rejected', ref: 'slide 40 (click)' },
] as const);

const I = templo.i;
const PAIR_BEATS = ['truth', 'team', 'maturity', 'delivery', 'needs'] as const;

function Body() {
  const { at, from, between } = useBeats(I);
  const temple = between('truth', 'needs');
  const t = s.temple;
  return (
    <>
      {/* the temple of wisdom: one pair per beat, Yoda stays */}
      <Title on={temple} y={90} size={92} text={t.titleText}>{t.title[0]}<span style={{ color: 'var(--accent)' }}>{t.title[1]}</span></Title>
      <Img on={temple} src="yoda.webp" x={1210} y={250} w={500} h={600} />
      {t.pairs.map(([a, b], k) => {
        const shown = from(PAIR_BEATS[k]) && temple;
        return (
          <Rise key={a} on={shown} x={150} y={290 + k * 140}>
            <div className="dw-line" style={{ fontSize: 58 }}>{a}</div>
            <div className="dw-line" style={{ fontSize: 40, color: 'var(--ink-2)', fontWeight: 500, marginTop: 6 }}>{b}</div>
          </Rise>
        );
      })}

      {/* overengineering */}
      <Title on={at('attack')} y={250} size={190}>{t.attack[0]}</Title>
      <Title on={at('attack')} y={450} size={190} color="var(--accent)" delay={140}>{t.attack[1]}</Title>

      <Title on={at('overengineering')} y={110} size={112}>{t.overTitle}</Title>
      <Lines on={at('overengineering')} y={340} size={62} width={1000} gap={1.65} step={240} lines={t.over} />
      <Img on={at('overengineering')} src="deathstar-beam.webp" x={1210} y={300} w={560} h={394} delay={200} />

      <Eyebrow on={at('use-case')} y={170}>{t.useCase}</Eyebrow>
      <Quote on={at('use-case')} y={260} size={86} width={1560}>{t.quote[0]}<span style={{ color: 'var(--accent)' }}>{t.quote[1]}</span>{t.quote[2]}</Quote>

      <Eyebrow on={at('solution')} y={96}>{t.useCase}</Eyebrow>
      <Title on={at('solution')} y={215} size={112}>{t.solution}</Title>
      {t.solutionRows.map((row, k) => {
        const [label, rest] = row.split(': ');
        return (
          <Rise key={row} on={at('solution')} x={150} y={420 + k * 116} delay={k * 220}>
            <div className="dw-mono" style={{ fontSize: 26, color: 'var(--accent)', marginBottom: 6 }}>{label}</div>
            <div className="dw-line" style={{ fontSize: 56 }}>{rest}</div>
          </Rise>
        );
      })}

      <Title on={at('mvp')} y={110} size={120}>{t.whatIf}</Title>
      <Lines on={at('mvp')} y={330} size={66} width={1000} gap={1.65} step={240} lines={[
        { t: t.mvp[0], accent: true }, t.mvp[1], t.mvp[2], t.mvp[3], t.mvp[4],
      ]} />
      <Img on={at('mvp')} src="jarjar.webp" x={1230} y={230} w={500} h={618} delay={300} />

      {/* interviews */}
      <Eyebrow on={between('interview-1', 'rejected')} y={96}>{t.interviews}</Eyebrow>
      <Quote on={at('interview-1')} y={250} size={88} width={1560}>{t.interviewQuote}</Quote>
      <Rise on={at('interview-1')} x={150} y={800} delay={500}><div className="dw-mono" style={{ fontSize: 36, color: 'var(--accent)' }}>{t.blank}</div></Rise>

      <Lines on={at('interview-2')} y={200} size={72} width={1620} gap={1.5} step={230} lines={t.stack} />
      <Rise on={at('interview-2')} x={150} y={900} delay={1200}><div className="dw-mono" style={{ fontSize: 36, color: 'var(--accent)' }}>{t.blank}</div></Rise>

      <Img on={between('interview-code', 'rejected')} src="code.webp" x={210} y={250} w={1500} h={657} />
      <Img on={at('rejected')} src="rejected.webp" x={620} y={330} w={680} h={680} style={{ transform: 'rotate(-10deg)' }} />
    </>
  );
}

export const Templo = () => <Sc index={3}><Body /></Sc>;
