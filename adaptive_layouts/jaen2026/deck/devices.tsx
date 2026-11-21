import type { ReactNode } from 'react';

/**
 * Every kind of screen an Android app can end up on (docs/research.md R12). One beat each in scene 02:
 * deck/scenes.ts and deck/sr.ts read this list, so adding a device here adds its beat.
 * Icons are drawn on a 200×200 box, ink outline on the surface colour, ochre for the one detail that says what it is.
 */
export interface DeviceDef { id: string; name: string; sub: string; note: string; sr: string; icon: ReactNode }

const S = { stroke: 'var(--ink)', strokeWidth: 8, strokeLinejoin: 'round', strokeLinecap: 'round', fill: 'var(--surface)' } as const;
const O = { fill: 'var(--ochre)', stroke: 'none' } as const;

export const DEVICES: readonly DeviceDef[] = [
  { id: 'phone', name: 'Móvil', sub: 'Android', note: 'El de siempre: compact, vertical, una mano.', sr: 'Móvil.',
    icon: <><rect x="68" y="22" width="64" height="156" rx="16" {...S} /><rect x="88" y="34" width="24" height="6" rx="3" {...O} /></> },
  { id: 'tablet', name: 'Tablet', sub: 'Android', note: 'Medium y expanded. Aquí es donde fallan las apps pensadas solo para móvil.', sr: 'Tablet.',
    icon: <><rect x="22" y="40" width="156" height="120" rx="16" {...S} /><circle cx="166" cy="100" r="4" fill="var(--ochre)" /></> },
  { id: 'foldable', name: 'Plegable', sub: 'Android · postura y bisagra', note: 'Se abre, se cierra, se dobla a medias. La pantalla cambia de tamaño con la app abierta.', sr: 'Plegable.',
    icon: <><rect x="26" y="44" width="148" height="112" rx="14" {...S} /><rect x="96" y="44" width="8" height="112" {...O} /></> },
  { id: 'trifold', name: 'Tri-plegable', sub: 'Android · dos pliegues', note: 'Dos pliegues: la documentación de Android ya habla de los tri-plegables (Samsung Trifold como ejemplo). Sin postura de mesa.', sr: 'Tri-plegable, con dos pliegues.',
    icon: <><rect x="14" y="48" width="172" height="104" rx="12" {...S} /><rect x="70" y="48" width="7" height="104" {...O} /><rect x="123" y="48" width="7" height="104" {...O} /></> },
  { id: 'connected', name: 'Pantalla conectada', sub: 'Android · Connected Displays', note: 'Conectas el móvil a un monitor y aparece un escritorio con ventanas redimensionables. Pixel y Samsung, desde Android 16 QPR3.', sr: 'Pantalla conectada: el móvil como escritorio.',
    icon: <><rect x="12" y="62" width="44" height="84" rx="10" {...S} /><path d="M66 104 H96 M86 94 L98 104 L86 114" {...S} fill="none" /><rect x="106" y="48" width="84" height="62" rx="6" {...S} /><path d="M148 110 V132 M124 134 H172" {...S} fill="none" /></> },
  { id: 'chromebook', name: 'Chromebook', sub: 'ChromeOS', note: 'ChromeOS: ventanas libres, teclado y ratón.', sr: 'Chromebook, ChromeOS.',
    icon: <><rect x="40" y="46" width="120" height="84" rx="8" {...S} /><path d="M16 142 H184 L172 160 H28 Z" {...S} /><rect x="86" y="146" width="28" height="5" rx="2" {...O} /></> },
  { id: 'googlebook', name: 'Googlebook', sub: 'Portátil sobre base Android', note: 'Una nueva categoría de portátiles construida sobre la base de Android, la siguiente generación de ChromeOS. A la venta en EE. UU. desde el 4 de octubre de 2026 según Google.', sr: 'Googlebook, un portátil construido sobre Android.',
    icon: <><rect x="40" y="46" width="120" height="84" rx="8" {...S} /><path d="M16 142 H184 L172 160 H28 Z" {...S} /><circle cx="58" cy="62" r="6" fill="var(--ochre)" /></> },
  { id: 'tv', name: 'Televisión', sub: 'Google TV · Android TV', note: 'Mando y foco, no dedo. Otra distancia, otra entrada.', sr: 'Televisión, Google TV.',
    icon: <><rect x="18" y="42" width="164" height="102" rx="8" {...S} /><path d="M62 144 L54 164 M138 144 L146 164" {...S} fill="none" /><circle cx="158" cy="122" r="9" {...O} /></> },
  { id: 'watch', name: 'Reloj', sub: 'Wear OS', note: 'Wear OS: la pantalla más pequeña. Redonda o cuadrada.', sr: 'Reloj, Wear OS.',
    icon: <><path d="M80 20 H120 L124 64 H76 Z M76 136 H124 L120 180 H80 Z" {...S} /><circle cx="100" cy="100" r="42" {...S} /><circle cx="100" cy="100" r="8" fill="var(--ochre)" /></> },
  { id: 'car', name: 'Coche', sub: 'Android Auto · Automotive OS', note: 'Android Auto proyecta el móvil; Android Automotive OS corre en el propio coche.', sr: 'Coche, Android Auto y Android Automotive.',
    icon: <><path d="M18 138 Q18 108 48 102 L70 66 H130 L152 102 Q182 108 182 138 V150 H18 Z" {...S} /><circle cx="58" cy="152" r="17" {...S} /><circle cx="142" cy="152" r="17" {...S} /><path d="M78 78 H122 L138 102 H62 Z" {...O} /></> },
  { id: 'xr', name: 'XR', sub: 'Android XR · gafas y cascos', note: 'Android XR: cascos como Galaxy XR y gafas con cable. Tus apps de móvil funcionan como paneles 2D flotando en el espacio.', sr: 'Realidad extendida, Android XR: gafas y cascos.',
    icon: <><rect x="16" y="66" width="168" height="72" rx="30" {...S} /><path d="M16 102 H6 M184 102 H194" {...S} fill="none" /><rect x="40" y="90" width="120" height="14" rx="7" {...O} /></> },
  { id: 'glasses', name: 'Gafas inteligentes', sub: 'Android XR · IA', note: 'Gafas ligeras con cámara, micrófono y altavoz, y algunas con pantalla en la lente. Aún no sabemos tu app: es otro diseño. Primero llegan las de audio, otoño de 2026.', sr: 'Gafas inteligentes con IA.',
    icon: <><circle cx="58" cy="104" r="34" {...S} /><circle cx="142" cy="104" r="34" {...S} /><path d="M92 100 H108 M24 96 L8 80 M176 96 L192 80" {...S} fill="none" /><circle cx="142" cy="104" r="7" {...O} /></> },
] as const;
