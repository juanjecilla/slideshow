# research — (progr)Amar en tiempos revueltos

Fact-check de las cifras que puede usar el deck. Fecha de consulta: 2026-10-20; segunda pasada de verificación 2026-11-24 (búsqueda web, snippets de resultados: **no** se han leído los informes primarios, salvo indicación). `scenes.ts` cita estos ids en `ref`.

Leyenda: ✅ leído en la fuente primaria · ⚠️ solo fuente secundaria, o con matiz que hay que decir en voz alta · ❓ sin verificar, no usar en pantalla hasta cerrarlo.

Regla: **solo datos reales**. Ninguna cifra entra en una escena sin id aquí y sin ✅. Lo que no se ha podido verificar no se pinta como cifra: pasa a la sección «Abiertas» y se cuenta como lo que es, una preocupación compartida sin respuesta todavía.

Regla antigua (se mantiene): ninguna cifra entra en una escena sin id aquí. Lo que no esté ✅ lleva el matiz en la nota del beat o se queda como `TODO`.

## R1 — Productividad: lo que se siente frente a lo que se mide

| id | Dato | Estado | Fuente |
|---|---|---|---|
| R1.1 | RCT de METR (jul 2025): 16 desarrolladores open source con experiencia, 246 tareas en sus propios repositorios (22k+ estrellas, 1M+ líneas). Con IA permitida (sobre todo Cursor Pro + Claude 3.5/3.7) tardaron un **19% más** | ✅ | https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ |
| R1.2 | Antes de empezar esperaban acelerar un **24%**. Al acabar seguían creyendo que habían ido un **20%** más rápido | ✅ | misma |
| R1.3 | **Matiz obligatorio.** La propia METR avisa de que el resultado es de principios de 2025, de una muestra pequeña y un contexto concreto ("no claim … majority or plurality of software development work"). La página lleva un aviso de que está desfasado | ✅ | misma |
| R1.4 | Seguimiento de METR (24 feb 2026): 57 desarrolladores, 143 repos, 800+ tareas. Estimaciones −18% (los que repetían, IC95 −38% a +9%) y −4% (nuevos, IC95 −15% a +9%) en tiempo; ambos intervalos incluyen el cero. METR dice que es "an unreliable signal" y "only very weak evidence" porque muchos desarrolladores se negaron a trabajar sin IA | ✅ | https://metr.org/blog/2026-02-24-uplift-update/ |
| R1.5 | DORA 2025: adopción de IA cerca del 90%; la IA es un **amplificador** (magnifica las fortalezas de las organizaciones buenas y las disfunciones de las malas); la inestabilidad de las entregas "sigue subiendo"; el throughput ya correlaciona positivamente con la IA. 142 páginas, casi 5.000 profesionales | ⚠️ resumen de InfoQ; falta leer el informe | https://www.infoq.com/news/2025/09/dora-state-of-ai-in-dev-2025 |
| R1.6 | DORA 2025: sin efecto de la IA sobre la tensión en el trabajo ni el agotamiento; sí sobre la productividad individual percibida (más del 80% cree que le ha subido) | ⚠️ mismo resumen | misma |

**Cómo usarlo:** el guion limpio es "te sientes más rápido ≠ lo estás" (R1.1+R1.2), siempre con R1.3 y R1.4 a la vista: la historia no es "la IA te hace lento", es "no sabemos medirlo y la sensación engaña". No decir "19% más lento" a secas.

## R2 — Confianza y adopción

| id | Dato | Estado | Fuente |
|---|---|---|---|
| R2.1 | Stack Overflow 2025: **84%** usa o planea usar IA | ✅ | https://survey.stackoverflow.co/2025/ai |
| R2.2 | **46%** desconfía de la precisión de la IA, **33%** confía; solo **3%** tiene "high trust" | ✅ | misma |
| R2.3 | Los más veteranos son los más cautos: 2,5% "highly trust" (chart) y 20,7% "highly distrust". El texto de la página dice 2,6% y 20%: usar los de la gráfica o redondear a "2-3%" | ✅ | misma |
| R2.4 | **66%** señala "soluciones casi correctas, pero no del todo" como problema | ✅ | misma |
| R2.5 | Cifras de 2024 que circulan (31% desconfianza, 76% adopción) | ⚠️ citadas por prensa | TechRepublic / DEV |

## R3 — Despidos "por la IA"

| id | Dato | Estado | Fuente |
|---|---|---|---|
| R3.1 | Challenger, Gray & Christmas, informe de septiembre 2026 (publicado 1 oct): hasta septiembre se han **anunciado 573.195** recortes en EE. UU. | ✅ | https://www.challengergray.com/blog/job-cuts-fall-in-september-hiring-plans-up-3-over-2025-on-weak-early-seasonal-hiring/ |
| R3.2 | La IA se cita en **120.136** (≈21%) y es la **primera** causa del año | ✅ | misma |
| R3.3 | **Matiz obligatorio.** En septiembre la IA fue la quinta causa, con 3.961 recortes. Challenger cuenta **planes anunciados** y los motivos que declaran las empresas, no despidos ejecutados ni causalidad | ✅ | misma |
| R3.4 | El sector tecnológico lleva **165.925** recortes anunciados, el más alto de todas las industrias | ✅ | misma |
| R3.5 | Mayo 2026: 38.579 recortes con IA, 40% de los del mes, máximo mensual desde que se mide (2023) | ⚠️ secundaria (Quartz / agregadores) | https://qz.com/tech-job-cuts-ai-layoffs-may-2026-060526 |
| R3.6 | "AI-washing": atribuir a la IA recortes que tienen otra causa (tipos, sobrecontratación) | ❓ hay que buscar un estudio o fuente seria antes de afirmarlo | TODO |
| R3.7 | Casos con nombre de empresa (Microsoft, Oracle, GitLab…) | ❓ solo blogs de baja calidad; **no usar** hasta tener nota de prensa o comunicado | TODO |

**Cómo usarlo:** R3.2 con R3.3 en la misma pantalla. "Anunciado y declarado", no "despedido por una IA".

## R4 — Tokens y factura

| id | Dato | Estado | Fuente |
|---|---|---|---|
| R4.1 | **(2026-11-24: TechCrunch devuelve 403 y las citas literales «token incinerator» / «burn rate» no se pudieron reverificar; el deck las PARAFRASEA sin comillas.)** Adam Mosseri (Meta), Lenny's Podcast, citado por TechCrunch 14 jul 2026: "the burn rate of a strong engineer might be the same as their salary", "you're going to probably need to put in some caps" y "It's not that hard to build a token incinerator". Dijo que hoy Meta no tiene topes | ✅ cita leída en TechCrunch (secundaria de la entrevista, no el audio) | https://techcrunch.com/2026/07/14/metas-adam-mosseri-says-ai-token-budgets-could-soon-be-capped-per-engineer/ |
| R4.2 | Meta cerró un ranking interno de gasto en tokens (abr 2026, a los pocos días de que The Information lo publicara; top 250 usuarios). Matiz: Meta dijo a Fortune que no pidió cerrarlo; el aviso en la página citaba filtraciones de datos | ⚠️ TechCrunch + Fortune (checked 2026-11-24) | misma; https://fortune.com/2026/04/09/meta-killed-employee-ai-token-dashboard/ |
| R4.3 | Uber agotó el presupuesto de IA para código de todo 2026 hacia abril y limitó el gasto por empleado | ⚠️ TechCrunch / The Information; sin importe verificado | misma |
| R4.4 | Microsoft retiró licencias de Claude Code y movió ingenieros a Copilot CLI | ⚠️ TechCrunch; otras fuentes dicen que puso presupuestos por división: contradicción | misma |
| R4.5 | GitHub Copilot pasa a facturación por uso el 1 jun 2026 | ⚠️ una sola fuente secundaria; confirmar en el changelog de GitHub | TODO |
| R4.6 | Importes por ingeniero y mes (1.500 $, 2.000 $…) | ❓ blogs que citan a The Information; **no usar** en pantalla | TODO |

**Cómo usarlo:** la historia de Cap2 se sostiene con R4.1 (✅). Los casos de empresa (R4.3, R4.4) se dicen con "según ha publicado la prensa" o se omiten. Sin importes.

## R5 — Mercado tech en España (cifras sin verificar: ver «Abiertas»; los datos primarios están en R6)

> Desde 2026-11-24 **ninguna fila de R5 se pinta en pantalla**. Quedan aquí como rastro de lo comprobado.

| id | Dato | Estado | Fuente |
|---|---|---|---|
| R5.1 | (checked 2026-11-24: la cifra −33%/+13% la repiten varios medios — dplnews, interempresas, ecosistemastartup — con datos de Job Market Insights, InfoJobs e Hirint; **el informe primario de DigitalES no se ha localizado**, sigue ⚠️.) DigitalES, 4.ª edición de "Radiografía de Empleos y Sectores Emergentes" (28 may 2026; datos de Job Market Insights, InfoJobs e Hirint): ofertas para programadores **junior −33%** en el último año, **sénior +13%** | ⚠️ leído en prensa (El Diario de Madrid); falta el informe | https://www.eldiariodemadrid.es/articulo/economia/inteligencia-artificial-empleo-programadores-digitales-ofertas-junior-senior/20260528154252132123.html |
| R5.2 | Ofertas que piden conocimientos de herramientas de IA: 8.713 convocatorias, **+64%** interanual | ⚠️ misma | misma |
| R5.3 | **Matiz obligatorio.** BBVA Research / Fedea (sep 2026): por ahora la IA no destruye empleo neto en España; los jóvenes son el grupo más expuesto (puestos de entrada). Felgueroso (Fedea): "no se observa desplazamiento del empleo debido a la IA". **La frase "no permite atribuir la caída a la IA" NO se ha encontrado** (checked 2026-11-24): no decirla como cita | ⚠️ prensa; el informe existe en BBVA Research, sin leer | https://www.bbvaresearch.com/publicaciones/espana-ia-y-empleo-senales-tempranas-de-ajuste/ |
| R5.4 | ~~InfoJobs: −41% de vacantes de primer empleo para programadores junior~~ | ❌ refutado (checked 2026-11-24): no aparece en ninguna fuente. El 41% del informe de DigitalES es el porcentaje de ofertas que piden competencias personales (34% en 2024). **Descartado** | https://dplnews.com/?p=318126 |
| R5.5 | Barómetro de Talento Digital 2026 (Digitalent Group): 51,7% de empresas prevé menos contratación junior por la IA | ❓ | TODO |
| R5.6 | ~~Stanford: ≈−20%~~ ❌ no encontrado (checked 2026-11-24). Lo que sí dice "Canaries in the Coal Mine" (Brynjolfsson, Chandar, Chen; rev. 13 nov 2025): −**16%** relativo en el empleo de 22-25 años en las ocupaciones más expuestas a la IA. Matiz (nota de feb 2026): no se puede asegurar causalidad; tipos de interés y otros factores; el dashboard (oct 2026) ya ve ganancias en algunos grupos | ⚠️ visto solo en snippets del sitio del laboratorio; leer el paper antes de pintar | https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine/ |

**Cómo usarlo:** no usar R5 en pantalla. Para el público junior se usa R6.3 (Manfred, primaria) y la pregunta abierta A1.

## R6 — Manfred × TheirStack, Tech Career Report 2026 (primaria ✅, leída entera el 2026-11-24)

Fuente: https://www.getmanfred.com/tech-career-report (texto: `/informe-es.md`, `/informe-en.md`; noviembre 2026). Talento: comunidad Manfred (127.665 profesionales). Ofertas: 167.645 ofertas tech de los últimos 12 meses (TheirStack). Encuesta «IA en desarrollo 2026»: 756 respuestas, 7 sep–18 oct 2026.
**Licencia CC BY-NC 4.0**: cita obligatoria como «Tech Career Report 2026, Manfred × TheirStack» con enlace; uso no comercial (una charla gratuita de comunidad lo es; si el uso cambia, revisar). La cita va en pantalla en cada beat con cifra de R6.

| id | Dato | Estado | Matiz obligatorio (se dice en el mismo beat o el siguiente) |
|---|---|---|---|
| R6.1 | **98%** usa IA en su trabajo diario y **86%** dice que le hace más productivo; solo el **20%** ha recibido formación de su empresa (45% se formó solo, 35% sin formación) | ✅ | Muestra autoseleccionada de la comunidad Manfred: 56% con más de 10 años de experiencia y 98% ya usa IA. No representa el mercado |
| R6.2 | Solo el **21%** usa el código generado casi sin tocarlo. Entre un 45% y un 51% cree que la IA acabará con la programación «pura» (tanto quien empieza como quien lleva 20+ años) | ✅ | misma muestra |
| R6.3 | Solo el **4,4%** de las ofertas busca perfiles junior, mientras **1 de cada 5** profesionales tiene menos de 2 años de experiencia. La mediana junior es **25.500 €**, casi el salario mediano de España (24.497 €, INE 2024) | ✅ | «Junior» = título con junior/trainee/intern/graduate, contado una vez por empresa y mes |
| R6.4 | En ofertas de Manfred, las abiertas a menos de 2 años de experiencia pasaron del **7,8% (2022) a menos del 1% (2026)**; las que piden 5+ años, del **24% al 60%** | ✅ | Son ofertas de clientes de Manfred, no todo el mercado («siguen de cerca la tendencia del sector», dice el informe). El informe da «menos de 1%» y «0,5%» en dos sitios: decir «menos del 1%». No dice que la causa sea la IA |
| R6.5 | De las ofertas que indican años, el **55,5%** pide de 2 a 4 años; solo **3 de cada 100** aceptan menos de 2 | ✅ | Mercado completo (TheirStack); mínimo de años que indica cada oferta |
| R6.6 | Ofertas con IA en el título: **1,5% (2023) → 10,5% (2026)**. Las que mencionan agentes de IA se multiplicaron por **8,3** en un año. La mayor brecha oferta/talento del informe es la IA (**5,5×**) | ✅ | El índice de tensión es dirección y orden, no una ratio exacta. «IA en la descripción» (15,7%) no es «IA en el título» |
| R6.7 | El **84%** permitiría IA en una prueba técnica (52% sí, 32% con límites, 16% no). El **46%** de las empresas con las que habló Manfred rediseñó su prueba por la IA (**6 de 13**) y el 67% de esas (**4 de 6**) eliminó la prueba para casa o el algoritmo | ✅ | **n = 13 empresas**: muestra pequeña y no representativa. Decir «6 de 13», nunca solo «46%». Los ejemplos Meta/Canva/Shopify son públicos, no datos de Manfred |
| R6.8 | «Dos mercados bajo un nombre»: un puesto sénior en big tech cobra **×3,5** (con variable; más del doble solo en base) frente a una consultora pequeña. Solo el **10,3%** de las ofertas de desarrollo publica salario | ✅ | La mediana engaña: lo que cambia el salario es el tipo de empresa, no el tamaño |
| R6.9 | Cita anónima de Manfred (responsable de ingeniería, scaleup de software): «The bottleneck is now in the review.» El cuello de botella pasó de escribir código a revisarlo | ✅ como cita de la entrevista; ⚠️ como tendencia | Es cualitativa, de las conversaciones de Manfred. No es una cifra |
| R6.10 | Cada persona que usa IA maneja de media **3,1 herramientas** | ✅ | Comunidad Manfred (muestra autoseleccionada). Aparece en el texto del informe sin gráfico asociado: citar como «de media» |

**Cómo usarlo:** Cap1 gana R6.1 (todo el mundo la usa, casi nadie la ha enseñado) y R6.2. Cap2 sustituye el bloque de España por R6.3+R6.4 («la primera barra de la escalera»), siempre con su matiz y sin atribuir causa. Cap3 usa R6.7+R6.9 («lo que se pide ahora es criterio: dirigir, revisar, defender») y R6.8 para «hacia arriba».

## Abiertas — sin respuesta verificada, y lo sabemos todos

No se pintan como cifra. Se cuentan como pregunta abierta y compartida: nadie tiene la respuesta todavía y casi todos tenemos la misma preocupación. Es honesto y encaja con el tono (el narrador no se las sabe todas).

| id | Pregunta abierta | Qué sí hay (verificado) | Qué falta |
|---|---|---|---|
| A1 | ¿Está la IA cerrando la puerta de entrada a los juniors? | R6.3, R6.4: la puerta se estrecha y se mueve (ofertas <2 años: 7,8% → <1%). Manfred: «la IA no cerrará la puerta junior: la moverá» (es su apuesta, no un dato) | Causalidad. DigitalES −33% (R5.1) solo en prensa; Stanford −16% (R5.6) es de EE. UU. y los autores no aseguran causalidad; BBVA/Fedea (R5.3) no ve destrucción neta de empleo |
| A2 | ¿Los despidos «por la IA» son por la IA? | R3.2, R3.3: Challenger cuenta motivos declarados y planes anunciados | R3.6: «AI-washing» sin estudio serio |
| A3 | ¿La IA nos hace más rápidos de verdad? | R1.1–R1.4: lo que se siente (24%/20%) frente a lo que se mide (19%), con intervalos que incluyen el cero | Nadie sabe medirlo aún (METR lo dice) |
| A4 | ¿Habrá topes de tokens y qué pasará con la presión? | R4.1: Mosseri espera topes; hoy Meta no los tiene | Ningún dato de costes por ingeniero verificado (R4.6) |
| A5 | ¿Nos formará la empresa? | R6.1: solo el 20% ha recibido formación | Manfred apuesta a que se negociará como el remoto (opinión) |

## Frases que no podemos decir

- "La IA te hace más lento" (R1.3, R1.4).
- "La IA ha dejado sin trabajo a X personas" (R3.3).
- Importes concretos de facturas por empresa (R4.6).
- "InfoJobs −41%" (R5.4) y "Stanford −20%" (R5.6): las cifras no existen en las fuentes.
- "BBVA/Fedea dicen que no se puede atribuir a la IA" como cita literal (R5.3).
- "Los juniors están acabados" (R5.3, R6.4: no hay causa demostrada).
- "El 46% de las empresas ha cambiado sus pruebas" sin decir "6 de 13" (R6.7).
- "El 98% de los devs usa IA" sin decir que es la comunidad Manfred (R6.1).

## Pendiente de cerrar antes del content freeze

- R1.5/R1.6: leer el informe DORA 2025.
- R3.6, R3.7: fuente seria para "AI-washing" y casos con nombre.
- R4.5: changelog de GitHub.
- R5.1-R5.6: informe de DigitalES (no localizado el 2026-11-24) y nota de BBVA Research/Fedea (localizada, sin leer). Si no se leen antes del congelado de contenido, R5.1/R5.3/R5.6 salen de pantalla y quedan como nota hablada.
- Anécdotas del ponente ("presión por usar IA", "cómo lo gestioné"): `TODO`, las cuenta el ponente.
