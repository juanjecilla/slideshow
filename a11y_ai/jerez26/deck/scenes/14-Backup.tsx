import { Scene, useScene } from 'beatdeck';
import { CAP } from '../captures';
import { OV } from '../overlays';
import { Eyebrow, Mono, Phone, Say } from '../ui';
import navBefore from '../assets/nav-200-before.png';
import navAfter from '../assets/nav-200-after.png';
import grid200 from '../assets/grid-200-after.png';
import synopsis from '../assets/detail-synopsis.png';

/** 14 BACKUP — real captures from the audit, in case the live demo fails. Reach it from the overview (O). */
function Backup_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <Eyebrow on={at(0)} out={gone(0)} text="backup · capturas del dispositivo" />
      <Say on={at(0)} out={gone(0)} text="Si falla la demo." size={72} />
      <Phone on={at(0)} out={gone(0)} src={navBefore} alt="Barra inferior con el texto al 200 % antes de la corrección" x={120} y={240} h={700} overlays={OV.navBefore} boxes={at(0)} />
      <Phone on={at(0)} out={gone(0)} src={navAfter} alt="Barra inferior con el texto al 200 % después de la corrección" x={560} y={240} h={700} overlays={OV.navAfter} boxes={at(0)} />
      <Phone on={at(0)} out={gone(0)} src={grid200} alt="Resultados de búsqueda con el texto al 200 %: una sola tarjeta ancha" x={1000} y={240} h={700} />
      <Phone on={at(0)} out={gone(0)} src={synopsis} alt="Pantalla de detalle con la sinopsis larga" x={1440} y={240} h={700} overlays={OV.synopsis} boxes={at(0)} />

      <Eyebrow on={at(1)} out={gone(1)} text="backup · salida de las herramientas" />
      <Say on={at(1)} out={gone(1)} text="Las herramientas, tal como se ejecutaron." size={72} />
      <Mono on={at(1)} out={gone(1)} x={120} y={290} size={26} title="tree_audit.py" lines={[...CAP.auditBroken]} />
      <Mono on={at(1)} out={gone(1)} x={120} y={620} size={26} title="scan_compose.py" lines={[...CAP.scanShort]} />
    </>
  );
}

export const Backup = () => <Scene index={13}><Backup_ /></Scene>;
