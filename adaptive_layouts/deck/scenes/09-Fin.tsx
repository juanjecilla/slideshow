import { QR, Scene } from 'beatdeck';
import { config } from '../deck.config';
import { Bullets, Eyebrow, Intertitle, Line, Say, useBeat, Western } from '../ui';

function Fin_() {
  const { here, b, at, gone } = useBeat();
  return (
    <>
      {/* 9.1 */}
      <Intertitle on={at(0)} out={gone(0)} part="4 · Conclusiones" name="El FIN" />

      {/* 9.2 */}
      <Eyebrow on={at(1)} out={gone(1)} text="Not Do's" />
      <Bullets here={here} b={b} from={1} to={1} together y={230} size={56} gap={34}
        items={['Forzar resizeableActivity, screenOrientation, min/maxAspectRatio', 'Tamaños con APIs antiguas y tamaño de dispositivo', 'Lógica específica de gestión de ventanas', 'Max width por defecto']} />

      {/* 9.3 the Do about the manifest, updated for API 36 */}
      <Eyebrow on={at(2)} out={gone(2)} text="Do's" />
      <Line on={at(2)} out={gone(2)} y={230} size={56} text='resizeableActivity="true" y quitar screenOrientation y min/maxAspectRatio' />
      <Say on={at(2)} out={gone(2)} text="Desde la API 36, en ≥ 600 dp," y={520} size={96} color="var(--accent)" />
      <Say on={at(2)} out={gone(2)} text="se ignoran de todos modos." y={650} size={96} color="var(--accent)" />
      <Line on={at(2)} out={gone(2)} text="El manifest de Muviss no pone ninguno." y={850} size={52} dim />

      {/* 9.4 */}
      <Eyebrow on={at(3)} out={gone(3)} text="Do's" />
      <Say on={at(3)} out={gone(3)} text="WindowManager/Metrics" y={290} size={110} />
      <Say on={at(3)} out={gone(3)} text="y currentWindowAdaptiveInfo()" y={460} size={110} />

      {/* 9.5 */}
      <Eyebrow on={at(4)} out={gone(4)} text="Do's" />
      <Western on={at(4)} out={gone(4)} text="Adaptive Layouts" y={380} size={150} />

      {/* 9.6 */}
      <Eyebrow on={at(5)} out={gone(5)} text="Do's" />
      <Say on={at(5)} out={gone(5)} text="Aprovechar el tamaño de la pantalla" y={310} size={88} />
      <Say on={at(5)} out={gone(5)} text="para múltiples ventanas." y={460} size={88} color="var(--accent)" />

      {/* 9.7 */}
      <Western on={at(6)} out={gone(6)} text="Gracias" y={300} size={280} />
      <Line on={at(6)} out={gone(6)} text="linktr.ee/juanje.cilla  ·  juanje-cilla" y={700} size={56} dim />

      {/* 9.8 the talk on the web */}
      <Eyebrow on={at(7)} out={gone(7)} text="La charla, en la web" />
      <Say on={at(7)} out={gone(7)} text="Código, notas" y={260} size={120} />
      <Say on={at(7)} out={gone(7)} text="y fuentes." y={410} size={120} color="var(--accent)" />
      <Line on={at(7)} out={gone(7)} text={config.qrLabel} y={720} size={44} />
      <Line on={at(7)} out={gone(7)} text="linktr.ee/juanje.cilla" y={810} size={44} dim />
      {at(7) && <QR url={config.qrUrl} size={560} x={1130} y={240} />}

      {/* 9.9 */}
      <Western on={at(8)} text="Preguntas" y={380} size={230} />
    </>
  );
}
export const Fin = () => <Scene index={8}><Fin_ /></Scene>;
