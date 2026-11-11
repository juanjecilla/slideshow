import { QR } from 'beatdeck';
import { asset } from '../assets';
import { config } from '../deck.config';
import { strings as s } from '../i18n';
import { Eyebrow, Lines, Photo, Rise, Sc, Title, defineBeats, useBeats } from '../ui';

/** `ref` = slide number in the Google Slides deck given at Codemotion Madrid 2026. */
export const cierre = defineBeats([
  { name: 'way', ref: 'slide 74', note: s.close.way },
  { name: 'speaker', ref: 'slide 75', note: s.close.qrNote },
] as const);

const I = cierre.i;

function Body() {
  const { at } = useBeats(I);
  return (
    <>
      <Photo on={at('way')} src="mando.webp" />

      <Eyebrow on={at('speaker')} y={150}>{s.close.speaker}</Eyebrow>
      <Title on={at('speaker')} y={210} size={170}>{s.close.name}</Title>
      <Lines on={at('speaker')} y={470} size={60} width={1000} gap={1.6} step={200} lines={s.close.lines} />
      <Rise on={at('speaker')} x={1300} y={230} delay={300}><div style={{ pointerEvents: 'none' }}>
        <QR url={config.qrUrl} size={440} />
      </div></Rise>
      <Rise on={at('speaker')} x={1300} y={720} delay={500} style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <img src={asset('linkedin.webp')} alt="" width={68} height={68} draggable={false} />
        <div className="dw-line" style={{ fontSize: 52 }}>{config.handle}</div>
      </Rise>
    </>
  );
}

export const Cierre = () => <Sc index={7}><Body /></Sc>;
