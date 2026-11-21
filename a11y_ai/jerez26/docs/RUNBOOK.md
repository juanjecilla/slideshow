# Runbook — edición en español

El día de la charla se sigue `../../docs/RUNBOOK.md` (deck base): el mismo ordenador, la misma demo con el Pixel.
Diferencias de esta edición:

- `npm run present` desde este directorio sirve `dist/` en `http://127.0.0.1:4173/` (mismo puerto que el deck base:
  no ejecutes los dos a la vez).
- Las notas del ponente están en inglés (decisión R-22).
- Comprobación previa: `npm run build && node tools/check-a11y.mjs` (espera `lang es`, botones «Paso anterior» y
  «Paso siguiente»).
