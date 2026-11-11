import { QR } from 'beatdeck';
import { asset } from '../assets';
import { config } from '../deck.config';
import { Eyebrow, Lines, Photo, Rise, Sc, Title, defineBeats, useBeats } from '../ui';

export const cierre = defineBeats([
  { name: 'camino', ref: 'slide 74', note: '“This is the way.”' },
  { name: 'speaker', ref: 'slide 75', note: 'The QR is the Linktree QR of the original closing slide.' },
] as const);

const I = cierre.i;

function Body() {
  const { at } = useBeats(I);
  return (
    <>
      <Photo on={at('camino')} src="mando.webp" />

      <Eyebrow on={at('speaker')} y={150}>El speaker a.k.a Yo</Eyebrow>
      <Title on={at('speaker')} y={210} size={170}>Juanje Cilla</Title>
      <Lines on={at('speaker')} y={470} size={60} width={1000} gap={1.6} step={200} lines={[
        'Desarrollador de Software',
        'Organizador GDG Aranjuez',
        'Escribo en Substack',
        'Tengo un podcast',
      ]} />
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
