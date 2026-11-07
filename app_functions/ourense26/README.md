# Convierte tu app en una skill con App Functions · copia en español

DevFest Ourense 2026 · GDG Ourense · sáb 7 nov 2026 · 13:00 · Red Velvet · Juanje Cilla.
Es la **copia en español** del deck base en inglés (`../`), con los mismos beats y el mismo código. Se publica en
`https://juanjecilla.github.io/slideshow/app_functions/ourense26/`.

## Ejecutar
```bash
npm install
npm run dev          # http://127.0.0.1:5173/#1.1   (P = vista de presentador, O = overview)
npm run build        # typecheck + bundle + comprobación offline
npm run verify       # cada beat hacia delante / atrás / desde la URL → artifacts/verify/ (~5 min)
```

## Qué es y qué no es distinto del deck en inglés
| Igual (no tocar aquí) | Traducido aquí |
| --- | --- |
| `deck/code.ts`, `deck/captures.ts` (código real de la demo, en inglés), la estructura de beats y posiciones | textos de `deck/scenes/*.tsx`, `deck/scenes.ts` (nombres de beats y notas del presentador), `deck/deck.config.ts`, `deck/backup-steps.ts` |

Regla: **cualquier cambio de contenido se hace primero en el deck base (`../`) y se replica aquí.** Para regenerar el código y las
capturas a partir del proyecto demo: `python3 -I scripts/gen-code.py` en ambos (la salida es la misma).

## Estado (2026-11-02)
- Traducción completa de las 13 escenas y de las notas del presentador; `build` y `verify` en `docs/RUNBOOK.md`.
- Referencias comprobadas el 2026-11-02 (ver `../research.md`, `../docs/RELEASE-CHECKLIST.md`).
- Guía de traducción y glosario: `../docs/HANDOFF-ES.md`.
