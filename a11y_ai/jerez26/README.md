# ¿a11y en Android? Ahora es fácil con la IA

Edición en español de la charla para DevFest Jerez de la Frontera 2026 (21 nov 2026). Es una **Edition** del deck base
(`../`): se hizo desde el deck inglés congelado y no se edita por separado. Publicada en
<https://juanjecilla.github.io/slideshow/a11y_ai/jerez26/>. Juanje Cilla · hecha con [beatdeck](https://github.com/borjaperfra/beatdeck).

```bash
npm install
npm run dev          # http://127.0.0.1:5173/#1.1
npm run present      # build de producción, abierto en local (funciona sin conexión)
npm run verify       # cada paso comprobado → artifacts/verify/
```

## Qué está traducido y qué no

- Traducido: todo lo que ve y oye el público (escenas, anuncios para lectores de pantalla en `deck/sr.ts`, `alt` de las
  imágenes, citas en `deck/quotes.ts`, botones Paso anterior / Paso siguiente, pantalla de espera).
- **No** traducido: las notas del ponente (`note` en `deck/scenes.ts`), el código, los nombres de API, la salida de las
  herramientas (`tree_audit.py`, `speak.py`…) y lo que devuelve ML Kit (la descripción de imágenes es solo en inglés).
- La grabación de TalkBack de 3.3 tiene voz en español y no tiene subtítulos.
- Las citas están traducidas del inglés y así se indica en pantalla.

La documentación (auditoría, decisiones, checklist) está en `../docs/`.
