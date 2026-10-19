# research.md — fact-check

Fecha de consulta: 2026-10-19. Cada hecho tiene un id para usarlo como `ref` en `deck/scenes.ts`.
Estado: ✅ verificado en fuente primaria · ⚠️ fuente secundaria · ❓ pendiente.

## R1 · ML Kit GenAI (Gemini Nano vía AICore)

| id | Hecho | Estado | Fuente |
|---|---|---|---|
| R1.1 | Las GenAI APIs corren sobre AICore ("an Android system service that enables on-device execution of GenAI foundation models") con Gemini Nano. | ✅ | https://developers.google.com/ml-kit/genai |
| R1.2 | Estabilidad: Summarization, Proofreading, Rewriting, Image description y Prompt = **Beta**; Speech recognition = Alpha. Sin SLA ni política de deprecación; pueden romper compatibilidad. | ✅ | https://developers.google.com/ml-kit/genai |
| R1.3 | **Image Description solo soporta inglés** ("supports English, with support for more languages to be added in the future"). Artefacto `com.google.mlkit:genai-image-description:1.0.0-beta1`, API 26+. | ✅ | https://developers.google.com/ml-kit/genai/image-description/android |
| R1.4 | **Summarization soporta inglés, japonés y coreano** (no español). `genai-summarization:1.0.0-beta1`, API 26+. Entrada <4000 tokens; artículo >400 caracteres (mejor ≥300 palabras); salida 1–3 viñetas. | ✅ | https://developers.google.com/ml-kit/genai/summarization/android |
| R1.5 | **Rewriting soporta inglés, japonés, francés, alemán, italiano, español y coreano.** Estilos: ELABORATE, EMOJIFY, SHORTEN, FRIENDLY, PROFESSIONAL, REPHRASE. Entrada <256 tokens. `genai-rewriting:1.0.0-beta1`, API 26+. **No existe un estilo "lectura fácil".** | ✅ | https://developers.google.com/ml-kit/genai/rewriting/android |
| R1.6 | Flujo común: `checkFeatureStatus()` → UNAVAILABLE / DOWNLOADABLE / DOWNLOADING / AVAILABLE; `downloadFeature`; `runInference`; `close()`. No soportado con bootloader desbloqueado. La disponibilidad depende del dispositivo y de la configuración. | ✅ | páginas anteriores |
| R1.7 | Hay una lista de dispositivos (Pixel recientes, Galaxy S25+, Honor, OPPO, Xiaomi…) pero la página resumen no la detalla por API. Tras reset/alta de dispositivo la inicialización puede tardar de minutos a horas. | ✅ (lista no leída) | https://developers.google.com/ml-kit/genai |
| R1.8 | Traducción on-device ML Kit: 58 idiomas, "entirely on device". Artefacto/minSdk sin leer. | ✅ parcial | https://developers.google.com/ml-kit/genai (tarjeta Translation) |

### Consecuencias para el plan (ajustes a D10/D11)
1. **"Easy read" con Summarization no sirve en español.** Opciones: Summarization en inglés (la demo es EN), o Rewriting (sí admite ES) con SHORTEN/REPHRASE. Hay que **reformular D11(b)** como "sinopsis más corta y simple", sin prometer "lectura fácil" real.
2. **Image Description solo en inglés:** un usuario de TalkBack en español oirá una descripción en inglés. Idea a validar: encadenar con ML Kit Translation. Es material para la slide de límites.
3. **La copia ES no podrá mostrar descripciones de imagen en español.** Salida en vivo solo en EN (o traducida).
4. Todo es Beta: decirlo en la charla (R1.2).

## R2 · Dispositivo de demo
| id | Hecho | Estado |
|---|---|---|
| R2.1 | El Pixel de las capturas de app_functions es un Pixel 9 Pro. Si está en la lista de dispositivos de Image Description/Rewriting para su versión de AICore: | ❓ **comprobar en el propio dispositivo** con `checkFeatureStatus()` (no hay lista por API accesible) |
| R2.2 | Referencia de rendimiento Pixel 9 Pro (blog, mayo 2025): imagen→texto ~510 tok/s entrada, ~11 tok/s salida, 0,8 s de codificación de imagen. | ⚠️ resumen de búsqueda; verificar en https://android-developers.googleblog.com/2025/05/on-device-gen-ai-apis-ml-kit-gemini-nano.html |

## R3 · Testing y herramientas
| id | Hecho | Estado | Fuente |
|---|---|---|---|
| R3.1 | Compose: `ui-test-junit4-accessibility`, desde Compose 1.8.0. `composeTestRule.enableAccessibilityChecks()` + `tryPerformAccessibilityChecks()`. Basado en ATF (el mismo de Accessibility Scanner). Checks: etiqueta de contenido, contraste, tamaño de target táctil, orden de recorrido. Complementa, no sustituye, a TalkBack/Switch Access. | ✅ | https://developer.android.com/develop/ui/compose/accessibility/testing |
| R3.2 | Android Studio: Agent Mode (Otter 3, ene 2026) y Journeys (tests E2E en lenguaje natural, vía Studio Labs). | ⚠️ | https://developer.android.com/studio/gemini/features · https://android-developers.googleblog.com/2026/01/llm-flexibility-agent-mode-improvements.html |
| R3.3 | ¿Journeys/Agent Mode comprueban a11y por sí mismos? | ❓ no hay fuente; probar en la auditoría y no afirmarlo antes |
| R3.4 | Muviss ya corre lint de a11y como error en CI y no usa ATF (hallazgo del repo, ver DECISIONS D5). | ✅ repo | — |

## R4 · Por qué ahora
| id | Hecho | Estado | Fuente |
|---|---|---|---|
| R4.1 | OMS: unos 1.300 millones de personas (16 %, 1 de cada 6) viven con una discapacidad significativa. Última actualización de la ficha: 7 mar 2023. | ✅ | https://www.who.int/news-room/fact-sheets/detail/disability-and-health |
| R4.2 | La Directiva (UE) 2019/882 (EAA) se aplica desde el **28 jun 2025** a productos y servicios nuevos; los servicios con contratos anteriores, hasta el **28 jun 2030**. Microempresas (<10 empleados y <2 M€) exentas en servicios. | ⚠️ varias firmas legales; verificar en EUR-Lex | https://www.insideglobaltech.com/2025/06/10/european-accessibility-act-june-2025-deadline-has-arrived/ |
| R4.3 | España: Ley 11/2023, de 8 de mayo. Las apps móviles de los servicios incluidos (comercio electrónico, banca, transporte, comunicaciones…) deben ser accesibles. | ⚠️ | https://www.cuatrecasas.com/es/global/propiedad-intelectual/art/claves-proxima-entrada-vigor-ley-accesibilidad-espana |
| R4.4 | Sanciones en España ("30.000–600.000 €" según una firma). **No usar en la charla** hasta leer el texto consolidado de la ley. | ❓ | BOE: buscar el texto consolidado de la Ley 11/2023 (el id BOE-A-2023-11589 salió de una búsqueda sin confirmar) |
| R4.5 | Referencia técnica: WCAG 2.1 AA + EN 301 549. | ⚠️ | las mismas firmas |
| R4.6 | **Matiz para el público:** el EAA cubre ciertos servicios (e-commerce, banca, transporte, comunicaciones). Muviss, una app de seguimiento de películas, probablemente **no** esté afectada. No presentarla como obligada por ley. | juicio | — |

## R5 · Hefesto (cierre)
| id | Hecho | Estado | Fuente |
|---|---|---|---|
| R5.1 | Homero lo llama cojo ("lame", chōlos); discapacitado de nacimiento en Homero, o por su caída del Olimpo en versiones posteriores. | ✅ | https://en.wikipedia.org/wiki/Hephaestus |
| R5.2 | Ilíada 18.417–421: criadas de oro "con entendimiento, voz y fuerza" que lo sostienen al caminar. | ✅ | https://en.wikipedia.org/wiki/Hephaestus |
| R5.3 | Ilíada 18.371–379: trípodes con ruedas que se mueven por sí solos hasta la asamblea de los dioses. Wikipedia ofrece una versión con ruedas de bronce y otra de oro; verificar el texto de Homero antes de citar el material. | ⚠️ | idem |
| R5.4 | "Se hizo piernas mecánicas autopropulsadas": **no usar**, parece un añadido moderno. | ✗ | — |

## Pendientes
- Leer la lista oficial de dispositivos de AICore y probar `checkFeatureStatus()` en el Pixel.
- Texto consolidado de la Ley 11/2023 (BOE) y EUR-Lex para la Directiva.
- Probar si Journeys/Agent Mode detectan problemas de a11y.
- Verificar el artefacto y el minSdk de ML Kit Translation.
