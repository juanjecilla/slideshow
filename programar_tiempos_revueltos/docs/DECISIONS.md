# DECISIONS — (progr)Amar en tiempos revueltos (DevFest Barcelona 2026)

## Context
Nueva charla para **DevFest Barcelona 2026** (28 nov 2026, 30 min + 10 de preguntas). Mismo flujo que `app_functions/` y `a11y_ai/`: grilling → DECISIONS → research → beat map → escenas → verify → RUNBOOK. Es una charla sobre personas y no tiene demo técnica: el hilo es un culebrón (referencia a la serie *Amar en tiempos revueltos*) que sirve para contar datos reales sin ponerse solemne. Rama `talk/amar-tiempos-revueltos-barcelona26` (nombre anterior al renombrado de 2026-11-25), worktree `../Charlas-programar`. Hoy es 20 oct y quedan 39 días.

## Decisiones (grilling cerrado el 20 oct)
| # | Decisión |
|---|---|
| D1 | DevFest Barcelona · 28 nov 2026 · 30 min + 10 de Q&A |
| D2 | **(revisada 2026-11-24)** La charla se da en **español**, pero la **ruta base es inglés** (`/slideshow/programar_tiempos_revueltos/`, `lang: 'en'`) por si se quiere repetir tal cual en inglés. La edición en español es una *Edition* (ver GLOSSARY): `programar_tiempos_revueltos/bcn26/`, hecha desde el Base deck congelado y publicada bajo la ruta base. Orden: Base EN → congelar → Edition ES → ensayar con la ES. Sustituye a «español, sin copia EN» |
| D3 | Tesis: se combinan las tres. (1) **Personas > tokens**: el foco en el equipo no es un lujo. (2) **Separar hype de realidad** con datos verificados. (3) **Guía práctica de supervivencia**: qué hacer el lunes |
| D4 | Audiencia: devs de junior a senior más público tech general (PM, diseño, QA). Poca jerga, nada que exija saber de IA por dentro |
| D5 | Tono: **culebrón total**. Personajes, capítulos, "anteriormente en…", cliffhangers. Los despidos van en el mismo registro (sin cambio de tono) y se pueden nombrar empresas, siempre con fuente en `research.md` |
| D6 | Estructura: cold open → Cap1 "La llegada" → Cap2 "La crisis" → Cap3 "¿Y ahora qué?" → final de temporada → escena post-créditos → "Continuará…" (= Q&A) |
| D7 | Reparto de arquetipos: **La Dev** (protagonista), **Dirección** (quema tokens), **El Agente IA** (el galán misterioso), **La Factura** (la villana), **El Equipo**. El ponente es el narrador y rompe la cuarta pared con datos |
| D8 | Cap3 cubre los cuatro niveles: yo (cabeza), equipo, carrera, hacia arriba (dirección). Se recorta tras el primer pase de tiempos |
| D9 | **(revisada 2026-11-24)** Solo datos reales. `docs/research.md` con ids `ref`; fuente principal del mercado y la IA: **Manfred × TheirStack, Tech Career Report 2026** (R6, primaria, CC BY-NC 4.0, cita en pantalla). Lo no verificado no se pinta como cifra: va a «Abiertas» (A1–A5) y se cuenta como preocupación compartida sin respuesta |
| D10 | **(revisada 2026-11-24)** La anécdota «presión por usar IA» (Cap2) la sustituye el **bloque «el ruido»** (modelos cada semana, benchmarks vs realidad, muchas herramientas, todo el mundo compartiendo, «he publicado mi…» con 0 usuarios, AI slop, capas que aprender: contexto, harness, memoria): 6 beats cualitativos en Cap2, *posición provisional, por confirmar*. Sigue pendiente la anécdota «cómo lo gestioné» (Cap3, beat `gestione`, TODO visible). Antes: anécdotas del ponente: "presión por usar IA" (Cap2) y "cómo lo gestioné" (Cap3). Las cuenta el ponente más tarde (`TODO`). Más huecos tras el beat map |
| D11 | Interacción: mano alzada en el cold open y una pregunta de vuelta al cierre. Sin herramientas externas: el deck es offline |
| D12 | Cierre: final de temporada "reconciliación" (La Dev y El Agente IA, con las personas primero). Después, **escena post-créditos**: "la temporada 2 la escribís vosotros" + 3 acciones para el lunes. Luego "Continuará…" y preguntas |
| D13 | Estilo: tema **Poster** (**elegido tras un PoC frente a un tema suizo, 2026-11-24**; el suizo queda como issue en beatdeck, juanjecilla/beatdeck#19; Poster entra en beatdeck con juanjecilla/beatdeck#18; antes en `resources/beatdeck-poster-theme`, Fraunces, tonos a sangre, sheets) + componentes de culebrón propios (cabecera "Capítulo N", rótulo "Anteriormente en…", "Continuará…"). El reparto se muestra como cartel tipográfico, un tono por personaje, sin imágenes generadas |
| D14 | Accesibilidad: `a11y-kit` del tema (`ThemeToggle` T, `LiveRegion`, `SrNav`, `StagePicture`), `deck/sr.ts` por beat, `tools/contrast.mjs` en verde |
| D15 | Scaffold con `npx degit juanjecilla/beatdeck` (igual que `a11y_ai`) y `npm run init --lang es`. Tema instalado con `install.sh` desde la rama `resources/beatdeck-poster-theme` |
| D16 | **(2026-11-25)** Slug `programar_tiempos_revueltos`; edición ES en `programar_tiempos_revueltos/bcn26/` (el QR de la edición apunta a su propia URL). Las dos URLs tienen ya un placeholder en Pages (PR #21) para los organizadores |
| D17 | **(2026-11-25)** El bloque «el ruido» se queda en Cap2, 6 beats, mismo orden (cierra D10 «por confirmar»). Las frases del monólogo van solo en notas del ponente |
| D18 | **(2026-11-25)** «Cómo lo gestioné» = dos historias ya publicadas por el ponente en Substack, ambas en Cap3: FOFO (post 42) y postmortem propio (post 38). Sustituyen al `TODO` |
| D19 | **(2026-11-25)** Cierre en dos tiempos («Las herramientas cambian, pero las personas siguen» → «(progr)Amar es cuidar a quien programa»). Acción «Yo» del lunes: postmortem de 15 min. «Arriba» confirmada. La pregunta final vuelve a la del inicio |
| D20 | **(2026-11-25)** El número gigante de escena solo se pinta en el primer beat de cada escena |
| D21 | **(2026-11-25)** El standby es una animación en bucle (no hay horario publicado) con titulares de los tiempos revueltos, solo cifras con ref. Dos prototipos (`?standby=a|b`); se borra el descartado antes de congelar |

### Notas sobre las decisiones
- **"Póster suizo".** El usuario habló de "el póster suizo que hemos desarrollado en otra rama". En el repo no hay nada con ese nombre: lo desarrollado es el tema Poster, con serif Fraunces y no el sans con rejilla clásico suizo. Se ha asumido que es ese. Si lo que se quería era un estilo suizo real (Helvetica, rejilla estricta, reglas), es un tema nuevo: ver "Abierto".
- **El hype frente a la realidad es el hilo conductor de Cap1.** La cifra estrella no es "19% más lento" sino la distancia entre lo que se siente y lo que se mide (R1.1+R1.2), con los matices R1.3/R1.4. La charla no debe vender "la IA es mala".
- **Los datos de despidos y de ofertas junior llevan siempre su matiz** (R3.3, R6.3-R6.4, A1) en la misma pantalla o en el siguiente beat.

## Alcance para el 28 nov
- **Imprescindible**: deck completo en español, research cerrado y sin ❓ en pantalla, tema Poster con tonos del reparto, a11y-kit, Backup, RUNBOOK, landing.
- **Si da tiempo**: tercera anécdota, versión de 20 min para otro evento, subtítulos/transcripción de la charla.

## Escenas (base, se recorta tras los primeros ensayos)
| # | Escena | Min |
|---|---|---|
| 01 | OPEN: standby, título, "anteriormente en el mundo tech…", mano alzada | 2 |
| 02 | REPARTO: cartel del reparto, un personaje por beat | 2 |
| 03 | CAP1 La llegada: la promesa (24%/20%, 84% adopción), el golpe de realidad (METR + matices), «todo el mundo la usa, casi nadie formado» (Manfred), confianza (SO). DORA fuera (⚠️ sin fuente primaria) | 7 (por cronometrar) |
| 04 | CAP2 La crisis: los despidos (Challenger), la factura de tokens (Mosseri), el bloque «el ruido» (provisional), el mercado junior en España (Manfred) + pregunta abierta A1 | 8 (por cronometrar: hoy 15 beats) |
| 05 | CAP3 ¿Y ahora qué?: yo → equipo → carrera → hacia arriba | 8 |
| 06 | FINAL de temporada: reconciliación | 1,5 |
| 07 | POSTCRÉDITOS: temporada 2 + 3 acciones para el lunes | 1,5 |
| 08 | CONTINUARÁ…: preguntas | 10 |
| 09 | BACKUP (última escena, no oculta: el motor no tiene escenas ocultas) | — |

Estado 2026-11-25: 48 beats (47 sin el backup), `npm run verify` y contraste en verde. Aún sin cronometrar. Cap2 tiene 15 beats para ~8 min.

Suma de charla: 30 min.

## Fases de ejecución
1. **Hecho hoy (20 oct):** worktree, scaffold, tema Poster, cfp, DECISIONS, research con fuentes verificadas, beat map borrador con escenas placeholder. **Parada para revisión.**
2. **Content audit** (21–26 oct): el ponente cuenta las anécdotas; se cierran los ❓ de research; se redacta el guion de cada capítulo en `docs/CONTENT-AUDIT.md`.
3. **Dirección visual** (27 oct–2 nov): tonos por personaje (+ `contrast.mjs`), componentes de culebrón, cold open.
4. **Escenas** (3–14 nov), con `sr.ts` por beat y `ref` a research.
5. **RUNBOOK, RELEASE-CHECKLIST, landing, `deploy.yml`, README** (15–20 nov).
6. **Ensayos con cronómetro** (21–26 nov): ≤30 min.
7. **Merge el 28 nov.** Rebase tras el merge de `app_functions` (7 nov) y de `a11y_ai` (21 nov): habrá conflictos en landing, deploy y README.

## Verificación
- `npm run build -- --base /slideshow/programar_tiempos_revueltos/` OK (typecheck + bundle + offline).
- `npm run verify` y revisar `artifacts/verify/contact.png`.
- `node tools/contrast.mjs` en verde, en ambas ediciones.
- Cada cifra de pantalla tiene `ref` a un R-id ✅ en `research.md`.
- Navegar con VoiceOver: el `aria-live` anuncia cada beat.

## Abierto
- ~~¿"Póster suizo" = tema Poster o estilo suizo real?~~ Resuelto 2026-11-24: PoC de ambos, **se queda Poster**; el suizo va a beatdeck como issue (#19).
- Edition ES (`bcn26`): fecha de congelado del Base deck EN (propuesta: 26 nov noche) y quién revisa la traducción.
- Licencia de Manfred (CC BY-NC 4.0): confirmar que el uso (charla gratuita de comunidad) es no comercial y dejar la cita en cada beat con cifra de R6.
- Standby: elegir prototipo `a` o `b` y borrar el otro (D21).
- Cap3 niveles «Yo» y «Equipo»: el texto sigue siendo borrador.
- Qué recortar de Cap3 si los cuatro niveles no caben en 8 min.
- Tarjeta en la landing (aún no existe).
- Licencias/uso de nombres de la serie en el título y en el material (es solo un guiño; no se usa ningún recurso de la serie).
