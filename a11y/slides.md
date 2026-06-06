---
theme: default
canvasWidth: 1920
highlighter: shiki
mdc: false
transition: none
layout: raw
class: cover
progress: true
---

<div class="glyph" aria-hidden="true">a11y</div>
<div class="content">
  <div class="meta-block">
    <div class="top-line">COMMIT CONF 2026 · 5 DE JUNIO · MADRID</div>
  </div>
  <h1>a11y,<br/>el numerónimo<br/><em>ético.</em></h1>
  <div class="meta-block">
    <div class="meta-line">Más que un hashtag — un compromiso con la inclusión.</div>
    <div class="meta-line" style="color: var(--ink-faint);">iOS · Android · SwiftUI · Jetpack Compose</div>
  </div>
</div>

<!--
[PORTADA · ~1 min]
Bienvenidos a Commit Conf. Soy Juanje Cilla — 40 minutos juntos sobre accesibilidad móvil.
El plan: por qué importa → principios universales → herramientas de asistencia → APIs de iOS y Android → tooling de auditoría → IA → llamada a la acción.
Empezamos con la palabra que da título a la charla.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>00 · Hola</span></div>
  <div class="right">speaker</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">QUIÉN HABLA</div>
  <h2 class="slide-title" style="font-size: 84px;">Hola, soy <em>Juanje Cilla.</em></h2>
  <div style="display: grid; grid-template-columns: 1fr 460px; gap: 80px; margin-top: 24px; flex: 1; align-items: center;">
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div style="display: grid; grid-template-columns: 220px 1fr; gap: 26px 36px; font-family: 'JetBrains Mono', monospace; font-size: 30px; line-height: 1.4; border-top: 1px solid var(--rule); padding-top: 32px;">
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Rol</div>
        <div style="color: var(--ink);">Senior Mobile Engineer</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Comunidad</div>
        <div style="color: var(--ink); font-size: 34px">GDG Organizer · <span style="color: var(--accent);">GDG Aranjuez</span></div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Podcast</div>
        <div style="color: var(--ink);">Welcome to <span style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">La Secta</span></div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Substack</div>
        <div style="color: var(--ink);"><span style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">Coding Pit</span></div>
      </div>
      <div style="font-size: 32px; line-height: 1.5; color: var(--ink-dim); max-width: 820px;">
        Hoy quiero compartir lo aprendido — los pequeños hábitos que convierten un equipo en uno inclusivo.
      </div>
    </div>
    <div style="position: relative; display: flex; justify-content: center; align-items: center;">
      <div style="position: relative; width: 440px; height: 440px;">
        <div style="position: absolute; inset: -14px; border: 1px solid var(--accent); border-radius: 50%; pointer-events: none;" aria-hidden="true"></div>
        <div style="position: absolute; inset: 6px; border: 1px solid var(--rule); border-radius: 50%; pointer-events: none;" aria-hidden="true"></div>
        <img src="./juanje.jpg" alt="Foto de Juanje Cilla" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; filter: grayscale(0.15) contrast(1.02); display: block;" />
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>01 / 48</span><span>commit conf 2026 · speaker</span></div>

<!--
[SPEAKER · ~1,5 min]
Breve intro: Senior Mobile Engineer, organizo el GDG Aranjuez, tengo el podcast La Secta y la newsletter Coding Pit en Substack.
Objetivo de hoy: que salgáis con hábitos concretos, no solo inspiración. Código real, APIs reales, herramientas reales.
-->



---
class: section-slide
---

<div class="deck-chrome">
  <div class="left"><span style="background:#0a0a0a;width:8px;height:8px;border-radius:50%;display:inline-block;" aria-hidden="true"></span><span>SECCIÓN I</span></div>
  <div class="right">origen · contexto</div>
</div>
<div class="slide-pad" style="justify-content: space-between;">
  <div class="num">I · Origen</div>
  <h2>Antes de las APIs,<br/>el <em>porqué</em>.</h2>
  <div class="desc">
    De dónde viene la palabra, a quiénes afecta y qué exige hoy el marco legal en España y la UE.
  </div>
</div>
<div class="footer-rule"><span>02 / 48</span><span>contexto · cifras · ley</span></div>

<!--
[SECCIÓN I · ~30 s]
Primera sección: origen y contexto. Antes de código, necesitamos entender el «porqué».
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>01 · Origen</span></div>
  <div class="right">numerónimo / definición</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">DEFINICIÓN · OTROS EJEMPLOS</div>
  <h2 class="slide-title">Numerónimo —<br/>palabra abreviada con un <em>número</em> en su interior.</h2>
  <div class="lead" style="margin-top: 40px; font-size: 30px;">Conserva la primera y la última letra; las intermedias se sustituyen por su recuento. Una convención nacida en plataformas de caracteres limitados, hoy extendida en la cultura técnica.</div>
  <div class="numex-grid">
    <div class="numex-card">
      <div class="domain">Accesibilidad</div>
      <div class="num">a<em>11</em>y</div>
      <div class="full">accessibility</div>
    </div>
    <div class="numex-card">
      <div class="domain">i18n</div>
      <div class="num">i<em>18</em>n</div>
      <div class="full">internationalization</div>
    </div>
    <div class="numex-card">
      <div class="domain">l10n</div>
      <div class="num">l<em>10</em>n</div>
      <div class="full">localization</div>
    </div>
    <div class="numex-card">
      <div class="domain">Kubernetes</div>
      <div class="num">k<em>8</em>s</div>
      <div class="full">kubernetes</div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>03 / 48</span><span>es.wikipedia.org / Numerónimo</span></div>

<!--
[NUMERÓNIMO · ~2 min]
Un numerónimo toma la primera letra, cuenta las del medio y pone la última. «accessibility» → a + 11 letras + y → a11y.
Misma lógica: i18n (internationalization), l10n (localization), k8s (kubernetes). Nació en Unix/Usenet donde cada carácter costaba.
La convención pasó del límite de caracteres a la cultura técnica global.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>01 · Origen</span></div>
  <div class="right">a11y / numerónimo</div>
</div>
<div class="slide-pad">
  <div class="center-stack">
    <div class="word-row">
      <span class="dim">a</span><span class="k">c</span><span class="k">c</span><span class="k">e</span><span class="k">s</span><span class="k">s</span><span class="k">i</span><span class="k">b</span><span class="k">i</span><span class="k">l</span><span class="k">i</span><span class="k">t</span><span class="dim">y</span>
    </div>
    <div class="numeronimo-display">
      <span class="a">a</span><span class="eleven">11</span><span class="y">y</span>
    </div>
    <div style="font-size: 36px; color: var(--ink-dim); max-width: 1100px; line-height: 1.4;">
      La primera letra, las <span style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">once</span> que omitimos, y la última.<br/>
      Un numerónimo nacido en límites de caracteres — hoy, símbolo de equidad digital.
    </div>
  </div>
</div>
<div class="footer-rule"><span>04 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[a → 11 → y · ~1 min]
Pausa. Dejar que el visual respire.
«a», las once letras que omitimos, «y». Una abreviatura que esconde una palabra que describe un derecho.
Pregunta al público: ¿cuántos habéis escrito código de accesibilidad esta semana?
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>01 · Origen</span></div>
  <div class="right">a11y / cultura</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">PRONUNCIACIÓN · CONTEXTO · IRONÍA</div>
  <h2 class="slide-title">Del límite de caracteres<br/>al <em>activismo</em> digital.</h2>
  <div class="two-col">
    <div class="col">
      <h3 style="color: var(--accent);">"A-once-Y"</h3>
      <p>O bien <em style="color: var(--ink); font-style: italic;">A-uno-uno-Y</em>. En inglés, también <em style="color: var(--ink); font-style: italic;">ally</em> — aliado.</p>
      <p>La conexión semántica con la idea de <em style="color: var(--ink); font-style: italic;">apoyo</em> no es accidental.</p>
    </div>
    <div class="col">
      <h3>La ironía</h3>
      <p>El término que representa la accesibilidad puede ser, en sí mismo, un obstáculo:</p>
      <p style="color: var(--ink);"><span style="font-family: 'JetBrains Mono', monospace; color: var(--accent);">1</span> y <span style="font-family: 'JetBrains Mono', monospace; color: var(--accent);">l</span> son visualmente idénticas en muchas tipografías.</p>
    </div>
  </div>
  <img src="./troll.png" alt="" aria-hidden="true" class="troll-face" />
</div>
<div class="footer-rule"><span>05 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[DEL LÍMITE AL ACTIVISMO · ~2 min]
Pronunciación: «a-once-y» o en inglés «ally» — aliado. La conexión semántica no es accidental.
La ironía: en muchas tipografías el «1» y la «l» son idénticos. El término que representa accesibilidad puede ser inaccesible para alguien con baja visión.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>01 · Origen</span></div>
  <div class="right">a11y / dimensión</div>
</div>
<div class="slide-pad">
  <div style="flex:1; display: flex; flex-direction: row; align-items: center; gap: 60px;">
    <div style="display: flex; flex-direction: column; justify-content: center; gap: 60px; flex: 1;">
      <div class="stat-tag">Población mundial con discapacidad significativa</div>
      <div class="stat-num" style="display: flex; align-items: baseline; gap: 24px;">
        <span>1<span style="color: var(--accent); font-family: 'Fraunces', serif; font-weight: 300; font-style: italic;">,</span>300</span>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 200px; color: var(--ink-dim); letter-spacing: 0; line-height: 1;">M</span>
      </div>
      <div class="stat-caption">
        Aproximadamente <span style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">16%</span> de la humanidad — más que la población combinada de la UE, EE. UU. y Japón.
      </div>
    </div>
    <div class="stat-globe" aria-hidden="true">🌍</div>
  </div>
</div>
<div class="footer-rule"><span>06 / 48</span><span>OMS · 2023</span></div>

<!--
[1,300 MILLONES · ~1,5 min]
1300 millones de personas con discapacidad significativa según la OMS 2023. El 16% de la humanidad.
Para hacerse una idea: más que la población combinada de la UE, Estados Unidos y Japón.
No hablamos de una minoría marginal — hablamos del mayor segmento de usuarios que la industria tech ignora sistemáticamente.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>01 · Origen</span></div>
  <div class="right">a11y / dimensión · España</div>
</div>
<div class="slide-pad">
  <div style="flex:1; display: flex; flex-direction: row; align-items: center; gap: 80px;">
    <div style="display: flex; flex-direction: column; justify-content: center; gap: 60px; flex: 1;">
      <div class="stat-tag">Personas con discapacidad en España</div>
      <div class="stat-num" style="display: flex; align-items: baseline; gap: 24px;">
        <span>4<span style="color: var(--accent); font-family: 'Fraunces', serif; font-weight: 300; font-style: italic;">,</span>3</span>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 200px; color: var(--ink-dim); letter-spacing: 0; line-height: 1;">M</span>
      </div>
      <div class="stat-caption">
        Casi <span style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">9%</span> de la población española — más de 4 millones de personas a las que tu app puede excluir.
      </div>
    </div>
    <img src="./spain.png" alt="Mapa de España" class="spain-map" />
  </div>
</div>
<div class="footer-rule"><span>07 / 48</span><span>INE · Encuesta de Discapacidad 2020</span></div>

<!--
[4,3 MILLONES · ~1 min]
España: 4,3 millones de personas con algún tipo de discapacidad según el INE 2020. El 9% de la población.
No es un problema lejano ni abstracto — es el mercado doméstico, los usuarios de tu empresa, los empleados de tu cliente.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>01 · Origen</span></div>
  <div class="right">tipos de discapacidad</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">PERMANENTE · TEMPORAL · SITUACIONAL</div>
  <h2 class="slide-title">Toda persona, en algún <em>momento.</em></h2>
  <div class="disab-matrix">
    <div class="cell head">Tipo</div>
    <div class="cell head">Permanente</div>
    <div class="cell head">Temporal</div>
    <div class="cell head">Situacional</div>
    <div class="cell head">Impacto en la app</div>
    <div class="cell row-label">Visual</div>
    <div class="cell">Ceguera, baja visión, daltonismo.</div>
    <div class="cell">Cataratas, post-operatorio, ojos dilatados.</div>
    <div class="cell">Reflejos del sol, conducir.</div>
    <div class="cell impact">Alto contraste, lectores de pantalla, Dynamic Type.</div>
    <div class="cell row-label">Auditiva</div>
    <div class="cell">Sordera, hipoacusia profunda.</div>
    <div class="cell">Infección de oído, presión en avión.</div>
    <div class="cell">Concierto, biblioteca.</div>
    <div class="cell impact">Subtítulos, transcripciones, avisos hápticos.</div>
    <div class="cell row-label">Motora</div>
    <div class="cell">Parálisis, Parkinson, ausencia de un miembro.</div>
    <div class="cell">Brazo fracturado, lesión por esfuerzo repetitivo.</div>
    <div class="cell">Cargar a un bebé, guantes gruesos.</div>
    <div class="cell impact">Áreas de toque amplias, navegación por botones, voz.</div>
    <div class="cell row-label">Cognitiva</div>
    <div class="cell">Autismo, dislexia, síndrome de Down.</div>
    <div class="cell">Fatiga, estrés agudo, medicación.</div>
    <div class="cell">Multitarea, prisa, pánico.</div>
    <div class="cell impact">Jerarquía clara, navegación predecible, lenguaje sencillo.</div>
  </div>
</div>
<div class="footer-rule"><span>08 / 48</span><span>Microsoft Inclusive Design</span></div>

<!--
[TIPOS DE DISCAPACIDAD · ~3 min]
Modelo de Microsoft Inclusive Design: permanente, temporal, situacional.
Un brazo fracturado NO es «solo para discapacitados» — afecta al 100% de personas en algún momento.
Ejemplos concretos: usar el móvil con guantes de invierno (situacional-motora), ver la pantalla al sol (situacional-visual), estar en una biblioteca sin poder poner audio (situacional-auditiva).
Dynamic Type al 310%: ¿habéis probado vuestra app así?
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>01 · Origen</span></div>
  <div class="right">marco legal · ES · UE</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">CONTEXTO LEGISLATIVO · 2025</div>
  <h2 class="slide-title">No es solo ética —<br/>también es <em>obligación.</em></h2>
  <div class="legal-grid">
    <div class="legal-card">
      <div class="flag">🇪🇺 Unión Europea</div>
      <h3>European Accessibility Act</h3>
      <div class="law">Directiva 2019/882 · EAA</div>
      <p>Productos y servicios digitales — banca, e-commerce, transporte, móvil — deben cumplir requisitos comunes de accesibilidad en todos los Estados miembros.</p>
      <div class="deadline">En vigor desde <em>28 jun · 2025</em></div>
    </div>
    <div class="legal-card">
      <div class="flag">🇪🇸 España</div>
      <h3>Ley 11/2023 y RD 1112/2018</h3>
      <div class="law">Transposición del EAA · WCAG 2.1 AA</div>
      <p>Aplica a apps móviles del sector público y privado. Exige declaración de accesibilidad, mecanismo de reclamación y monitorización periódica.</p>
      <div class="deadline">Sanciones hasta <em>1 M €</em> por infracción muy grave</div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>09 / 48</span><span>EAA · BOE · Ley 11/2023</span></div>

<!--
[MARCO LEGAL · ~2,5 min]
El EAA entró en vigor el 28 de junio de 2025 — hace menos de una semana. Esto es actual, no hipotético.
Aplica a apps móviles en banca, e-commerce, transporte y telecomunicaciones. Sector público lleva más años obligado.
En España: Ley 11/2023, exige declaración de accesibilidad y mecanismo de reclamación. Sanciones hasta 1M€ por infracción muy grave.
No es opcional. Si alguien en vuestro equipo dice «no tenemos tiempo», la respuesta ahora es legal además de ética.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>01 · Origen</span></div>
  <div class="right">marco legal · profundizar</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">PARA PROFUNDIZAR · COMMIT CONF 2025</div>
  <h2 class="slide-title">El marco legal,<br/>contado por <em>quien lo vive.</em></h2>
  <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; margin-top: 56px; flex: 1; align-items: center;">
    <div style="display: flex; flex-direction: column; gap: 28px;">
      <div style="display: grid; grid-template-columns: 180px 1fr; gap: 16px 28px; font-family: 'JetBrains Mono', monospace; font-size: 24px; line-height: 1.4; border-top: 1px solid var(--rule); padding-top: 26px;">
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Charla</div>
        <div style="color: var(--ink); font-family: 'Fraunces', serif; font-style: italic; font-size: 28px;">Ley Europea de Accesibilidad 2025 (EAA): qué es y cómo te afecta</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Speaker</div>
        <div style="color: var(--ink);">Carlos Espada</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Evento</div>
        <div style="color: var(--ink);">Commit Conf <span style="color: var(--accent);">2025</span></div>
      </div>
      <div style="font-size: 26px; line-height: 1.5; color: var(--ink-dim); max-width: 560px;">
        Una hora muy bien invertida para entender el EAA, la Ley 11/2023 y qué implica de verdad para tu producto.
      </div>
      <a href="https://www.youtube.com/watch?v=5rrkjXetLFE" target="_blank" rel="noopener" style="font-family: 'JetBrains Mono', monospace; font-size: 24px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); text-decoration: none; border-bottom: 1px solid var(--accent); align-self: flex-start; padding-bottom: 4px;">↗ youtube.com / watch?v=5rrkjXetLFE</a>
    </div>
    <iframe
      src="https://www.youtube.com/embed/5rrkjXetLFE"
      title="Ley Europea de Accesibilidad 2025 (EAA): qué es y cómo te afecta — Carlos Espada en Commit Conf 2025"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy"
      style="width: 100%; aspect-ratio: 16/9; border: 1px solid var(--rule); display: block;"
    ></iframe>
  </div>
</div>
<div class="footer-rule"><span>10 / 48</span><span>Carlos Espada · Commit Conf 2025</span></div>

<!--
[REFERENCIA LEGAL · ~1 min]
Recomendación directa: si queréis el detalle legal completo, esta charla de Carlos Espada del año pasado es una hora muy bien invertida.
Yo me centro hoy en el código — las APIs y las herramientas. La parte legal queda aquí referenciada.
-->

---
class: quote-slide
---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>01 · Origen</span></div>
  <div class="right">a11y / ética</div>
</div>
<div class="slide-pad">
  <div class="center-stack-left">
    <div class="quote-mark" style="padding: 100px 0px 0px" aria-hidden="true">"</div>
    <div class="quote-text">
      La accesibilidad no es un <em>extra</em>.<br/>Es un derecho humano <em>fundamental</em>.
    </div>
    <div class="quote-attrib">Convención ONU · Derechos de las Personas con Discapacidad</div>
  </div>
</div>
<div class="footer-rule"><span>11 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[CITA ONU · ~1 min]
Pausa. Dejar que la cita respire.
«La accesibilidad no es un extra. Es un derecho humano fundamental.»
Este es el marco ético que sostiene todo lo técnico que viene a continuación.
-->

---
class: section-slide
---

<div class="deck-chrome">
  <div class="left"><span style="background:#0a0a0a;width:8px;height:8px;border-radius:50%;display:inline-block;" aria-hidden="true"></span><span>SECCIÓN II</span></div>
  <div class="right">principios · WCAG</div>
</div>
<div class="slide-pad" style="justify-content: space-between;">
  <div class="num">II · Principios</div>
  <h2>Lo <em>universal</em><br/>antes que la plataforma.</h2>
  <div class="desc">
    POUR, contraste y objetivos táctiles — los criterios que cualquier UI debe cumplir, escriba el código quien lo escriba.
  </div>
</div>
<div class="footer-rule"><span>12 / 48</span><span>WCAG · POUR · contraste</span></div>

<!--
[SECCIÓN II · ~30 s]
Segunda sección: principios universales. Antes de hablar de plataformas, los criterios que aplican a cualquier interfaz.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>02 · Principios</span></div>
  <div class="right">WCAG 2.1</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">LOS CUATRO PILARES · WCAG</div>
  <h2 class="slide-title">P · O · U · R</h2>
  <div class="pour-grid">
    <div class="pour-card">
      <div class="letter" aria-hidden="true">P</div>
      <div class="label">01 / Perceptible</div>
      <h3>Perceptible</h3>
      <p>La información debe captarse por los sentidos disponibles del usuario.</p>
    </div>
    <div class="pour-card">
      <div class="letter" aria-hidden="true">O</div>
      <div class="label">02 / Operable</div>
      <h3>Operable</h3>
      <p>La interfaz debe funcionar con teclado, voz, switch o gesto simple.</p>
    </div>
    <div class="pour-card">
      <div class="letter" aria-hidden="true">U</div>
      <div class="label" style="font-size: 19px; letter-spacing: 0.1em;">03 / Understandable</div>
      <h3>Comprensible</h3>
      <p>El contenido y la operación deben ser claros, predecibles y consistentes.</p>
    </div>
    <div class="pour-card">
      <div class="letter" aria-hidden="true">R</div>
      <div class="label">04 / Robust</div>
      <h3>Robusto</h3>
      <p>Compatible con tecnologías de asistencia presentes — y futuras.</p>
    </div>
  </div>
</div>
<div class="footer-rule"><span>13 / 48</span><span>WCAG 2.1 · Principios POUR</span></div>

<!--
[POUR · ~2 min]
WCAG: Web Content Accessibility Guidelines. La referencia global — también para móvil.
P-O-U-R: Perceptible, Operable, Understandable, Robust.
Perceptible: si solo está en color o solo en audio, falla. Operable: si no funciona sin ratón/pantalla táctil, falla. Comprensible: si el lenguaje es opaco o la navegación impredecible, falla. Robusto: si solo funciona con el AT actual y no con el del futuro, falla.
WCAG 2.1 es la referencia que exige la Ley 11/2023 española para nivel AA.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>02 · Principios</span></div>
  <div class="right">Perceptible · contraste</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">RATIOS DE CONTRASTE · WCAG AA Y AAA</div>
  <h2 class="slide-title">El color comunica —<br/>pero <em>nunca</em> solo.</h2>
  <div class="contrast-grid">
    <div class="contrast-swatch" style="background: #f5f1e8; color: #0a0a0a;">
      <div class="ratio">21 : 1</div>
      <div class="sample">Aa</div>
      <div class="verdict pass" style="color: #157a3a;">✓ AAA · Texto normal</div>
    </div>
    <div class="contrast-swatch" style="background: #2b2b2b; color: #f5f1e8;">
      <div class="ratio">12.6 : 1</div>
      <div class="sample">Aa</div>
      <div class="verdict pass">✓ AA · Texto normal</div>
    </div>
    <div class="contrast-swatch" style="background: #888; color: #fff;">
      <div class="ratio">2.9 : 1</div>
      <div class="sample">Aa</div>
      <div class="verdict fail">✗ Falla AA</div>
    </div>
  </div>
  <div style="display: flex; gap: 80px; margin-top: 56px; font-family: 'JetBrains Mono', monospace; font-size: 24px; color: var(--ink-dim);">
    <div><span style="color: var(--accent);">4.5 : 1</span> &nbsp; texto &lt; 18pt</div>
    <div><span style="color: var(--accent);">3.0 : 1</span> &nbsp; texto grande / UI</div>
    <div style="color: var(--ink-faint);">excepción · logos, decorativos</div>
  </div>
</div>
<div class="footer-rule"><span>14 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[CONTRASTE · ~2 min]
Ratio 4,5:1 para texto normal, 3:1 para texto grande (+18pt o +14pt negrita). 7:1 para nivel AAA.
El tercer swatch — ratio 2,9:1 sobre gris — es el error más frecuente en auditorías que hago. Gris claro sobre blanco es un desastre para usuarios con baja visión.
Herramienta: Accessibility Inspector en Xcode, o contrast.ratio.fyi en web. El color NUNCA debe ser el único medio de transmitir información.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>02 · Principios</span></div>
  <div class="right">Operable · objetivos táctiles</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">TAMAÑO MÍNIMO DE OBJETIVOS TÁCTILES</div>
  <h2 class="slide-title">El pulgar adulto<br/>mide ~<em>9mm</em>.</h2>
  <div class="touch-stage">
    <div class="touch-cell">
      <div class="touch-square" style="width: 320px; height: 320px;" aria-hidden="true">
        <div class="target" style="width: 234px; height: 234px;"></div>
      </div>
      <div class="touch-meta">
        <div class="platform">iOS · Apple HIG</div>
        <div class="size"><em>44</em> × 44 pt</div>
        <div class="desc">Estándar de precisión para interacción táctil en iPhone.</div>
      </div>
    </div>
    <div class="touch-cell">
      <div class="touch-square" style="width: 320px; height: 320px;" aria-hidden="true">
        <div class="target" style="width: 256px; height: 256px;"></div>
      </div>
      <div class="touch-meta">
        <div class="platform">Android · Material</div>
        <div class="size"><em>48</em> × 48 dp</div>
        <div class="desc">≈ 9mm — el pulpejo del dedo adulto promedio.</div>
      </div>
    </div>
    <div class="touch-cell">
      <div class="touch-square" style="width: 320px; height: 320px;" aria-hidden="true">
        <div class="target" style="width: 128px; height: 128px;"></div>
      </div>
      <div class="touch-meta">
        <div class="platform">WCAG 2.2 · Mínimo</div>
        <div class="size"><em>24</em> × 24 px</div>
        <div class="desc">Piso absoluto — y un espaciado de 8 dp entre controles.</div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>15 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[TOUCH TARGETS · ~2 min]
El pulgar adulto mide ~9mm. 44pt en iOS HIG, 48dp en Material Design. El mínimo absoluto de WCAG 2.2 es 24×24px.
Usar el mínimo de la plataforma, NO el mínimo de WCAG — el mínimo de WCAG es el suelo, no el objetivo.
Además: 8dp de separación entre controles adyacentes. Un botón pequeño perjudica al usuario de switch antes que a nadie.
Test rápido: ¿vuestros iconos de navegación tienen 48×48dp?
-->

---
class: section-slide
---

<div class="deck-chrome">
  <div class="left"><span style="background:#0a0a0a;width:8px;height:8px;border-radius:50%;display:inline-block;" aria-hidden="true"></span><span>SECCIÓN III</span></div>
  <div class="right">asistencia · usuarios</div>
</div>
<div class="slide-pad" style="justify-content: space-between;">
  <div class="num">III · Asistencia</div>
  <h2>Antes de programar,<br/><em>conocer</em>.</h2>
  <div class="desc">
    Lectores de pantalla, conmutadores, control por voz. Las herramientas que usan a diario las personas para las que escribimos código.
  </div>
</div>
<div class="footer-rule"><span>16 / 48</span><span>VoiceOver · TalkBack · Switch · Voice</span></div>

<!--
[SECCIÓN III · ~30 s]
Tercera sección: las herramientas de asistencia. Antes de programar, conocer a quiénes programamos.
Esta sección es sobre empatía técnica — entender el arsenal que usan nuestros usuarios a diario.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>03 · Asistencia</span></div>
  <div class="right">mapa · ecosistema</div>
</div>
<div class="slide-pad">
  <div class="eyebrow" style="margin-bottom: 24px;">EL ECOSISTEMA · iOS Y ANDROID</div>
  <h2 class="slide-title" style="font-size: 76px;">Cada plataforma —<br/>su <em>vocabulario</em> de asistencia.</h2>
  <div class="disab-matrix" style="grid-template-columns: 1.2fr 1.3fr 1.3fr 2fr; font-size: 22px; margin-top: 40px;">
    <div class="cell head">Categoría</div>
    <div class="cell head">iOS · iPadOS</div>
    <div class="cell head">Android</div>
    <div class="cell head">Para quién</div>
    <div class="cell row-label">Lector de pantalla</div>
    <div class="cell impact">VoiceOver</div>
    <div class="cell impact">TalkBack</div>
    <div class="cell">Ceguera, baja visión severa, dislexia.</div>
    <div class="cell row-label">Conmutadores</div>
    <div class="cell impact">Switch Control</div>
    <div class="cell impact">Switch Access</div>
    <div class="cell">Movilidad muy reducida — uno o dos botones físicos.</div>
    <div class="cell row-label">Control por voz</div>
    <div class="cell impact">Voice Control</div>
    <div class="cell impact">Voice Access</div>
    <div class="cell">Manos ocupadas, fatiga, dificultad motora.</div>
    <div class="cell row-label">Magnificación</div>
    <div class="cell impact">Zoom</div>
    <div class="cell impact">Magnification</div>
    <div class="cell">Baja visión — ampliar pantalla o cursor.</div>
    <div class="cell row-label">Texto adaptable</div>
    <div class="cell impact">Dynamic Type</div>
    <div class="cell impact">Font scale</div>
    <div class="cell">Vista cansada, presbicia, lectura cómoda.</div>
    <div class="cell row-label">Subtítulos en vivo</div>
    <div class="cell impact">Live Captions</div>
    <div class="cell impact">Live Caption</div>
    <div class="cell">Sordera, hipoacusia, entornos ruidosos.</div>
  </div>
</div>
<div class="footer-rule"><span>17 / 48</span><span>Apple · Google · accessibility</span></div>

<!--
[ECOSISTEMA · ~2 min]
Cada plataforma tiene su vocabulario propio pero los conceptos son análogos.
Lectores de pantalla (VoiceOver/TalkBack) son los más usados. Switch Control/Access es el menos conocido pero el más crítico — si el foco está roto, el usuario queda bloqueado.
Live Captions: disponible desde iOS 16 y Android 10, transcribe audio del sistema en tiempo real — sin que la app haga nada.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>03 · Asistencia</span></div>
  <div class="right">screen readers · VO · TB</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">LECTORES DE PANTALLA · LA INTERFAZ HABLADA</div>
  <h2 class="slide-title">La pantalla,<br/>contada en <em>voz alta.</em></h2>
  <div class="tools-grid" style="grid-template-columns: 1fr 1fr; margin-top: 48px;">
    <div class="tool-cell">
      <div class="platform">Apple · iOS · iPadOS · macOS</div>
      <h3>VoiceOver</h3>
      <p>Lee en voz alta el elemento enfocado y permite operar la app sin mirar la pantalla.</p>
      <div style="display: grid; grid-template-columns: 200px 1fr; gap: 10px 24px; margin-top: 12px; font-family: 'JetBrains Mono', monospace; font-size: 22px; line-height: 1.4;">
        <div style="color: var(--accent);">Swipe →</div><div style="color: var(--ink-dim);">Siguiente elemento</div>
        <div style="color: var(--accent);">Double-tap</div><div style="color: var(--ink-dim);">Activar el elemento</div>
        <div style="color: var(--accent);">2-finger ↕</div><div style="color: var(--ink-dim);">Rotor — saltar entre encabezados, enlaces…</div>
        <div style="color: var(--accent);">Triple-tap</div><div style="color: var(--ink-dim);">Atajo · activar / desactivar</div>
      </div>
    </div>
    <div class="tool-cell">
      <div class="platform">Google · Android</div>
      <h3>TalkBack</h3>
      <p>Equivalente en Android. Mismas ideas, gramática de gestos propia.</p>
      <div style="display: grid; grid-template-columns: 200px 1fr; gap: 10px 24px; margin-top: 12px; font-family: 'JetBrains Mono', monospace; font-size: 22px; line-height: 1.4;">
        <div style="color: var(--accent);">Swipe →</div><div style="color: var(--ink-dim);">Siguiente elemento</div>
        <div style="color: var(--accent);">Double-tap</div><div style="color: var(--ink-dim);">Activar el elemento</div>
        <div style="color: var(--accent);">Swipe ↕</div><div style="color: var(--ink-dim);">Menú de lectura — granularidad</div>
        <div style="color: var(--accent);">Vol↑ + Vol↓</div><div style="color: var(--ink-dim);">Atajo del sistema · activar / desactivar</div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>18 / 48</span><span>una prueba — diez minutos al mes con la pantalla apagada</span></div>

<!--
[VOICEOVER / TALKBACK · ~3 min]
Gesto fundamental en ambas plataformas: swipe derecho → siguiente elemento, doble tap → activar.
El Rotor de VoiceOver (giro de dos dedos) permite saltar directamente entre encabezados, enlaces o controles — fundamental para navegar por contenido largo.
Reto para hoy: activar VoiceOver en vuestro móvil, cerrar los ojos 10 minutos, navegar por vuestra propia app. Lo que encontréis os cambiará cómo programáis.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>03 · Asistencia</span></div>
  <div class="right">screen readers · ejemplo</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EJEMPLO · LO QUE VOICEOVER LEE</div>
  <h2 class="slide-title">Lo que el usuario<br/><em>escucha</em> al deslizar.</h2>
  <div style="display: grid; grid-template-columns: 300px 1fr; gap: 80px; margin-top: 40px; flex: 1; align-items: center;">
    <div style="background: #1a1814; border: 1px solid var(--rule); border-radius: 36px; padding: 14px; aspect-ratio: 9/19; display: flex; flex-direction: column;" aria-hidden="true">
      <div style="background: var(--bg); border-radius: 24px; flex: 1; padding: 22px 18px; display: flex; flex-direction: column; gap: 14px; position: relative; overflow: hidden;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--ink-faint); text-align: center; padding: 4px 0;">9:41 · Perfil</div>
        <div style="display: flex; align-items: center; gap: 14px; padding: 10px; border: 3px solid var(--accent); border-radius: 12px; position: relative;">
          <div style="position: absolute; left: -10px; top: -22px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent);">VO · Foco</div>
          <div style="width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, #ff8a6c, #ffd479); flex-shrink: 0;"></div>
          <div style="display: flex; flex-direction: column; gap: 7px; flex: 1;">
            <div style="height: 11px; width: 75%; background: var(--ink); border-radius: 3px;"></div>
            <div style="height: 9px; width: 55%; background: var(--ink-faint); border-radius: 3px;"></div>
          </div>
        </div>
        <div style="height: 44px; background: var(--bg-soft); border-radius: 22px; display: flex; align-items: center; justify-content: center;">
          <div style="height: 10px; width: 70px; background: var(--ink-dim); border-radius: 3px;"></div>
        </div>
        <div style="height: 14px; width: 140px; background: var(--ink-dim); border-radius: 3px; margin-top: 6px;"></div>
        <div style="height: 62px; background: var(--bg-soft); border-radius: 12px;"></div>
        <div style="height: 62px; background: var(--bg-soft); border-radius: 12px;"></div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 36px;">
      <div style="display: flex; align-items: flex-start; gap: 22px;">
        <div style="width: 64px; height: 64px; border-radius: 50%; border: 2px solid var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: var(--code-bg);" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6d52" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10v4M7 6v12M11 3v18M15 7v10M19 10v4"/></svg>
        </div>
        <div style="flex: 1; padding: 28px 34px; background: var(--code-bg); border: 1px solid var(--rule); border-radius: 4px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 14px;">VoiceOver dice</div>
          <div style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; font-size: 40px; line-height: 1.3; color: var(--ink);">"Foto de perfil de María García. Imagen. Toca dos veces para activar."</div>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 200px 1fr; gap: 14px 32px; font-family: 'JetBrains Mono', monospace; font-size: 22px; line-height: 1.4; padding-top: 24px; border-top: 1px solid var(--rule);">
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Origen</div>
        <div style="color: var(--ink);"><span style="color: var(--accent);">accessibilityLabel</span> + <span style="color: var(--accent);">traits</span></div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Componentes</div>
        <div style="color: var(--ink);">Etiqueta · Tipo · Acción posible</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Siguiente gesto</div>
        <div style="color: var(--ink);">Swipe → para avanzar al botón "Seguir"</div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>19 / 48</span><span>VoiceOver · ejemplo de lectura en vivo</span></div>

<!--
[LO QUE VOICEOVER LEE · ~2 min]
Este anuncio — «Foto de perfil de María García. Imagen. Toca dos veces para activar.» — tiene tres componentes:
1. Etiqueta (accessibilityLabel): «Foto de perfil de María García»
2. Tipo/trait: «Imagen»
3. Pista de acción: «Toca dos veces para activar»
Sin label: VoiceOver dice «Imagen. Toca dos veces.» — el usuario no sabe de quién es.
Con contentDescription = null en Android: TalkBack dice nada o «sin etiqueta» — el usuario queda desorientado.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>03 · Asistencia</span></div>
  <div class="right">switch · acceso por conmutador</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">CONMUTADORES · MOVILIDAD MUY REDUCIDA</div>
  <h2 class="slide-title">Uno o dos botones —<br/><em>toda</em> la interfaz.</h2>
  <div style="display: grid; grid-template-columns: 1.05fr 1.4fr; gap: 56px; margin-top: 48px; flex: 1; align-items: stretch;">
    <div style="display: flex; flex-direction: column; gap: 28px; padding: 34px 38px; border: 1px solid var(--rule); background: var(--bg-soft);">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);">¿Qué es un switch?</div>
      <div style="display: flex; align-items: center; gap: 28px; padding: 18px 0;" aria-hidden="true">
        <div style="position: relative; width: 150px; height: 150px; flex-shrink: 0;">
          <div style="position: absolute; left: -36px; top: 50%; transform: translateY(-50%); width: 40px; height: 5px; background: var(--ink-faint); border-radius: 2px;"></div>
          <div style="position: absolute; left: -42px; top: calc(50% - 9px); width: 12px; height: 18px; background: var(--ink-dim); border-radius: 2px;"></div>
          <div style="position: absolute; inset: 8px; border: 2px solid var(--ink-dim); border-radius: 50%; background: var(--code-bg);"></div>
          <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 78px; height: 78px; background: var(--accent); border-radius: 50%; box-shadow: 0 8px 0 #b03f24, inset 0 -6px 0 rgba(0,0,0,0.18);"></div>
          <div style="position: absolute; left: 50%; top: 50%; transform: translate(-110%, -110%); width: 18px; height: 18px; background: rgba(255,255,255,0.32); border-radius: 50%; filter: blur(2px);"></div>
        </div>
        <p style="font-size: 24px; line-height: 1.45; color: var(--ink-dim); margin: 0;">Un dispositivo físico — un botón, un pedal, un soplo o un parpadeo capturado por la cámara — que sustituye al tap.</p>
      </div>
      <div style="margin-top: auto; padding-top: 22px; border-top: 1px solid var(--rule); font-size: 22px; line-height: 1.4; color: var(--ink-faint); font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em;">
        Uno o dos switches bastan para operar toda la interfaz mediante <em style="color: var(--accent); font-style: italic; font-family: 'Fraunces', serif; font-size: 26px;">escaneo</em>.
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 22px;">
      <div style="padding: 28px 32px; border: 1px solid var(--rule); background: var(--bg-soft); display: flex; flex-direction: column; gap: 12px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);">iOS · iPadOS</div>
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 36px; margin: 0; color: var(--ink); letter-spacing: -0.01em;">Switch Control</h3>
        <p style="font-size: 24px; line-height: 1.45; color: var(--ink-dim); margin: 0;">Escaneo del sistema completo. Las acciones se agrupan según el mismo árbol de accesibilidad que ve VoiceOver — etiqueta bien y heredas semántica.</p>
      </div>
      <div style="padding: 28px 32px; border: 1px solid var(--rule); background: var(--bg-soft); display: flex; flex-direction: column; gap: 12px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);">Android</div>
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 36px; margin: 0; color: var(--ink); letter-spacing: -0.01em;">Switch Access</h3>
        <p style="font-size: 24px; line-height: 1.45; color: var(--ink-dim); margin: 0;">Escaneo por filas, columnas o elementos. Acepta switches USB, Bluetooth y los botones de volumen del propio dispositivo.</p>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>20 / 48</span><span>hit targets pequeños penalizan al usuario de switch antes que a nadie</span></div>

<!--
[SWITCH CONTROL · ~2,5 min]
El switch puede ser un botón físico, un pedal de pie, un soplo captado por micrófono, o un parpadeo capturado por la cámara frontal del iPhone.
Switch Control en iOS y Switch Access en Android escanean los elementos del árbol de accesibilidad en orden. Si el árbol es caótico, el escaneo es caótico.
Punto clave: si el label de accesibilidad es correcto para VoiceOver, automáticamente es correcto para Switch Control — la semántica se comparte.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>03 · Asistencia</span></div>
  <div class="right">switch · cómo se navega</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EJEMPLO · ESCANEO PASO A PASO</div>
  <h2 class="slide-title">Un toque,<br/>un <em>soplo,</em> un parpadeo.</h2>
  <div style="display: grid; grid-template-columns: 300px 1fr; gap: 80px; margin-top: 40px; flex: 1; align-items: center;">
    <div style="background: #1a1814; border: 1px solid var(--rule); border-radius: 36px; padding: 14px; aspect-ratio: 9/16; display: flex; flex-direction: column;" aria-hidden="true">
      <div style="background: var(--bg); border-radius: 24px; flex: 1; padding: 22px 18px; display: flex; flex-direction: column; gap: 14px; position: relative; overflow: hidden;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--ink-faint); text-align: center; padding: 4px 0;">9:41 · Escaneo activo</div>
        <div style="height: 56px; background: var(--bg-soft); border-radius: 12px; border: 2px dashed rgba(160,154,142,0.35);"></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div style="height: 70px; background: var(--bg-soft); border-radius: 12px; border: 2px dashed rgba(160,154,142,0.35);"></div>
          <div style="height: 70px; background: rgba(255,109,82,0.12); border-radius: 12px; border: 3px solid var(--accent); position: relative;">
            <div style="position: absolute; inset: -10px; border: 2px solid var(--accent); border-radius: 16px; opacity: 0.35;"></div>
          </div>
        </div>
        <div style="height: 56px; background: var(--bg-soft); border-radius: 12px; border: 2px dashed rgba(160,154,142,0.35);"></div>
        <div style="height: 56px; background: var(--bg-soft); border-radius: 12px; border: 2px dashed rgba(160,154,142,0.35);"></div>
        <div style="margin-top: auto; padding: 10px 14px; background: var(--code-bg); border-left: 3px solid var(--accent); border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink-dim); line-height: 1.35;">
          <div style="color: var(--accent); letter-spacing: 0.08em; margin-bottom: 2px;">→ ELEMENTO 2 / 5</div>
          <div>Pulsa para seleccionar</div>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);">Modos de escaneo</div>
      <div style="display: flex; flex-direction: column; border-top: 1px solid var(--rule);">
        <div style="display: grid; grid-template-columns: 110px 1fr; gap: 32px; padding: 22px 0; border-bottom: 1px solid var(--rule); align-items: center;">
          <div style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; font-size: 64px; line-height: 1; color: var(--accent);" aria-hidden="true">1</div>
          <div>
            <div style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 30px; color: var(--ink); margin-bottom: 6px; letter-spacing: -0.01em;">switch — escaneo automático</div>
            <div style="font-size: 23px; color: var(--ink-dim); line-height: 1.4;">El foco avanza solo; el usuario pulsa para seleccionar lo resaltado.</div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 110px 1fr; gap: 32px; padding: 22px 0; border-bottom: 1px solid var(--rule); align-items: center;">
          <div style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; font-size: 64px; line-height: 1; color: var(--accent);" aria-hidden="true">2</div>
          <div>
            <div style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 30px; color: var(--ink); margin-bottom: 6px; letter-spacing: -0.01em;">switches — control manual</div>
            <div style="font-size: 23px; color: var(--ink-dim); line-height: 1.4;">Uno avanza el foco, el otro selecciona — más rápido y predecible.</div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 110px 1fr; gap: 32px; padding: 22px 0; border-bottom: 1px solid var(--rule); align-items: center;">
          <div style="display: flex; align-items: center; justify-content: center; width: 70px; height: 70px; border: 2px solid var(--accent); border-radius: 50%;" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff6d52" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><circle cx="12" cy="12" r="1" fill="#ff6d52"/></svg>
          </div>
          <div>
            <div style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 30px; color: var(--ink); margin-bottom: 6px; letter-spacing: -0.01em;">cámara — sin contacto</div>
            <div style="font-size: 23px; color: var(--ink-dim); line-height: 1.4;">Un parpadeo, una sonrisa o un gesto facial capturado por la cámara frontal.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>21 / 48</span><span>switch · escaneo · accesibilidad motora</span></div>

<!--
[ESCANEO · ~1,5 min]
Escaneo automático: el sistema avanza solo elemento a elemento. El usuario ESPERA a que el foco llegue al destino y pulsa.
Si el orden de foco es incorrecto, el usuario puede tardar minutos en llegar a un botón que está a un toque visual.
Con dos switches: uno avanza el foco, el otro selecciona — mucho más rápido. La cámara frontal permite prescindir de hardware físico.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>03 · Asistencia</span></div>
  <div class="right">voz · Voice Control · Voice Access</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">CONTROL POR VOZ · VOICE CONTROL · VOICE ACCESS</div>
  <h2 class="slide-title">Operar la app<br/><em>hablando.</em></h2>
  <div style="display: grid; grid-template-columns: 300px 1fr; gap: 80px; margin-top: 40px; flex: 1; align-items: center;">
    <div style="background: #1a1814; border: 1px solid var(--rule); border-radius: 36px; padding: 14px; aspect-ratio: 9/16; display: flex; flex-direction: column;" aria-hidden="true">
      <div style="background: var(--bg); border-radius: 24px; flex: 1; padding: 22px 18px; display: flex; flex-direction: column; gap: 14px; position: relative; overflow: hidden;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--ink-faint); text-align: center; padding: 4px 0;">9:41 · Voice Control</div>
        <div style="display: flex; align-items: center; gap: 12px; padding: 8px;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #ff8a6c, #ffd479);"></div>
          <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;"><div style="height: 10px; width: 70%; background: var(--ink); border-radius: 3px;"></div><div style="height: 8px; width: 50%; background: var(--ink-faint); border-radius: 3px;"></div></div>
        </div>
        <div style="position: relative; height: 48px; background: var(--accent); border-radius: 24px; display: flex; align-items: center; justify-content: center; color: #0a0a0a; font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 18px;">
          Seguir
          <div style="position: absolute; right: -10px; top: -14px; padding: 4px 10px; background: var(--code-bg); border: 1px solid var(--accent); border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); letter-spacing: 0.04em; white-space: nowrap;">"Seguir"</div>
        </div>
        <div style="height: 14px; width: 130px; background: var(--ink-dim); border-radius: 3px; margin-top: 6px;"></div>
        <div style="height: 56px; background: var(--bg-soft); border-radius: 12px;"></div>
        <div style="height: 56px; background: var(--bg-soft); border-radius: 12px;"></div>
        <div style="margin-top: auto; padding: 10px 14px; background: var(--code-bg); border: 1px solid var(--accent); border-radius: 24px; display: flex; align-items: center; gap: 10px;">
          <div style="width: 10px; height: 10px; background: var(--accent); border-radius: 50%;"></div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink); letter-spacing: 0.04em;">Escuchando…</div>
          <div style="margin-left: auto; display: flex; gap: 3px; align-items: flex-end;">
            <div style="width: 3px; height: 10px; background: var(--accent); border-radius: 2px;"></div>
            <div style="width: 3px; height: 18px; background: var(--accent); border-radius: 2px;"></div>
            <div style="width: 3px; height: 14px; background: var(--accent); border-radius: 2px;"></div>
            <div style="width: 3px; height: 8px; background: var(--accent); border-radius: 2px;"></div>
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 28px;">
      <div style="font-size: 30px; line-height: 1.45; color: var(--ink); max-width: 800px;">
        "Toca <em style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">Seguir</em>", "desplaza hacia abajo". Cada control necesita un <em style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">nombre</em> que el usuario pueda pronunciar.
      </div>
      <div style="display: grid; grid-template-columns: 200px 1fr; gap: 14px 32px; font-family: 'JetBrains Mono', monospace; font-size: 22px; line-height: 1.4; padding-top: 24px; border-top: 1px solid var(--rule);">
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">iOS</div>
        <div style="color: var(--ink);">Voice Control — usa el <span style="color: var(--accent);">accessibilityLabel</span>.</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Android</div>
        <div style="color: var(--ink);">Voice Access — necesita <span style="color: var(--accent);">contentDescription</span> en cada control.</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Para quién</div>
        <div style="color: var(--ink);">Manos ocupadas, fatiga, lesiones, dificultad motora.</div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>22 / 48</span><span>Voice Control · Voice Access</span></div>

<!--
[VOICE CONTROL · ~2 min]
«Toca Seguir» — Voice Control busca un control cuyo accessibilityLabel sea «Seguir» y lo activa.
Si un botón tiene solo un icono sin label: Voice Control no puede activarlo por nombre. El usuario dice «toca el botón de más» y nada pasa.
Voice Control y Voice Access usan exactamente el mismo label que VoiceOver y TalkBack — una sola fuente de verdad para múltiples tecnologías de asistencia.
Para quién: manos ocupadas (cargar bebé), lesión de hombro, Parkinson, esclerosis lateral.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>03 · Asistencia</span></div>
  <div class="right">zoom · magnification</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">MAGNIFICACIÓN · ZOOM · MAGNIFICATION</div>
  <h2 class="slide-title">Ampliar la pantalla<br/>sin <em>perder</em> el sitio.</h2>
  <div style="display: grid; grid-template-columns: 300px 1fr; gap: 80px; margin-top: 40px; flex: 1; align-items: center;">
    <div style="background: #1a1814; border: 1px solid var(--rule); border-radius: 36px; padding: 14px; aspect-ratio: 9/19; display: flex; flex-direction: column;" aria-hidden="true">
      <div style="background: var(--bg); border-radius: 24px; flex: 1; padding: 22px 18px; display: flex; flex-direction: column; gap: 10px; position: relative; overflow: hidden;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--ink-faint); text-align: center; padding: 4px 0;">9:41 · Zoom 250%</div>
        <div style="height: 10px; width: 70%; background: var(--ink-dim); border-radius: 2px;"></div>
        <div style="height: 8px; width: 50%; background: var(--ink-faint); border-radius: 2px;"></div>
        <div style="height: 40px; background: var(--bg-soft); border-radius: 8px; margin-top: 6px;"></div>
        <div style="height: 8px; width: 60%; background: var(--ink-faint); border-radius: 2px;"></div>
        <div style="height: 8px; width: 75%; background: var(--ink-faint); border-radius: 2px;"></div>
        <div style="height: 40px; background: var(--bg-soft); border-radius: 8px; margin-top: 6px;"></div>
        <div style="height: 8px; width: 55%; background: var(--ink-faint); border-radius: 2px;"></div>
        <div style="height: 8px; width: 65%; background: var(--ink-faint); border-radius: 2px;"></div>
        <div style="position: absolute; left: 22%; top: 30%; width: 180px; height: 180px; border-radius: 50%; border: 4px solid var(--accent); background: rgba(255,109,82,0.06); box-shadow: 0 0 0 6px rgba(255,109,82,0.08), 0 24px 60px rgba(0,0,0,0.55); display: flex; align-items: center; justify-content: center; overflow: hidden;">
          <div style="font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 64px; color: var(--ink); letter-spacing: -0.02em; line-height: 1;">Aa</div>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 28px;">
      <div style="font-size: 30px; line-height: 1.45; color: var(--ink); max-width: 800px;">
        Triple-tap para acercar; gesto de tres dedos para desplazar. Cuidado con elementos <em style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">sticky</em> y modales — su comportamiento cambia bajo la lupa.
      </div>
      <div style="display: grid; grid-template-columns: 200px 1fr; gap: 14px 32px; font-family: 'JetBrains Mono', monospace; font-size: 22px; line-height: 1.4; padding-top: 24px; border-top: 1px solid var(--rule);">
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Rango</div>
        <div style="color: var(--ink);">Hasta <span style="color: var(--accent);">15×</span> en iOS · <span style="color: var(--accent);">8×</span> en Android.</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Test</div>
        <div style="color: var(--ink);">Activa zoom y navega tu app — ¿se te pierden los modales?</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Para quién</div>
        <div style="color: var(--ink);">Baja visión, presbicia, fatiga visual ocasional.</div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>23 / 48</span><span>Zoom · Magnification</span></div>

<!--
[ZOOM · ~1,5 min]
iOS soporta hasta 15x de zoom del sistema. Android hasta 8x.
El error más frecuente con zoom: modales que no siguen el foco del zoom. Si una alerta aparece fuera de la región ampliada, el usuario con baja visión no la ve.
Test: activar zoom al 250% y navegar una pantalla de onboarding de tu app. ¿El botón «Siguiente» está visible?
Sticky headers y elementos fixed-position son otro problema habitual.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>03 · Asistencia</span></div>
  <div class="right">texto adaptable · Dynamic Type</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">TEXTO ADAPTABLE · DYNAMIC TYPE · FONT SCALE</div>
  <h2 class="slide-title">Texto a <em>tamaño</em><br/>humano.</h2>
  <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; margin-top: 48px; flex: 1; align-items: center;">
    <div style="display: flex; flex-direction: column; gap: 18px;" aria-label="Comparación de tamaños de texto: 100%, 175% y 310%">
      <div style="display: flex; align-items: baseline; gap: 26px; padding: 18px 24px; border: 1px solid var(--rule); background: var(--bg-soft);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--ink-faint); letter-spacing: 0.08em; width: 90px; flex-shrink: 0;">100%</div>
        <div style="font-family: 'Space Grotesk', sans-serif; font-size: 28px; color: var(--ink); line-height: 1.3;">Tus pedidos están en camino.</div>
      </div>
      <div style="display: flex; align-items: baseline; gap: 26px; padding: 18px 24px; border: 1px solid var(--rule); background: var(--bg-soft);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--ink-faint); letter-spacing: 0.08em; width: 90px; flex-shrink: 0;">175%</div>
        <div style="font-family: 'Space Grotesk', sans-serif; font-size: 44px; color: var(--ink); line-height: 1.25;">Tus pedidos están en camino.</div>
      </div>
      <div style="display: flex; align-items: baseline; gap: 26px; padding: 18px 24px; border: 2px solid var(--accent); background: var(--bg-soft);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--accent); letter-spacing: 0.08em; width: 90px; flex-shrink: 0;">310%</div>
        <div style="font-family: 'Space Grotesk', sans-serif; font-size: 60px; color: var(--ink); line-height: 1.2; letter-spacing: -0.01em;">Tus pedidos están…</div>
      </div>
      <div style="margin-top: 8px; font-family: 'JetBrains Mono', monospace; font-size: 18px; color: var(--ink-faint); letter-spacing: 0.06em;">Misma cadena · 3 escalas del usuario</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 28px;">
      <div style="font-size: 30px; line-height: 1.45; color: var(--ink); max-width: 700px;">
        Hasta <em style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">310%</em> en iOS, <em style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">200%</em> en Android.
      </div>
      <div style="display: grid; grid-template-columns: 200px 1fr; gap: 14px 32px; font-family: 'JetBrains Mono', monospace; font-size: 22px; line-height: 1.4; padding-top: 24px; border-top: 1px solid var(--rule);">
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">iOS</div>
        <div style="color: var(--ink);">Usa <span style="color: var(--accent);">.font(.body)</span>, no <span style="color: var(--accent);">.font(.system(size: 16))</span>.</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Android</div>
        <div style="color: var(--ink);">Usa <span style="color: var(--accent);">sp</span>, nunca <span style="color: var(--accent);">dp</span> ni <span style="color: var(--accent);">px</span> para texto.</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Trampa</div>
        <div style="color: var(--ink);">Botones con altura fija — el texto se trunca al crecer.</div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>24 / 48</span><span>Dynamic Type · Font scale</span></div>

<!--
[DYNAMIC TYPE · ~2 min]
Dynamic Type en iOS va hasta el 310% (Accessibility sizes). Font scale en Android hasta ~200%.
La trampa más común: altura de botón fija. Si el botón tiene height: 44pt hardcoded, con Dynamic Type grande el texto se trunca o desborda.
En SwiftUI: usar .font(.body) en vez de .font(.system(size: 16)) — el primero escala, el segundo no.
En Android: usar sp en vez de dp o px para tamaños de texto. Un solo cambio en las unidades corrige el problema en toda la app.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>03 · Asistencia</span></div>
  <div class="right">subtítulos · Live Captions</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">SUBTÍTULOS EN VIVO · LIVE CAPTIONS</div>
  <h2 class="slide-title">El audio<br/>también <em>se lee.</em></h2>
  <div style="display: grid; grid-template-columns: 300px 1fr; gap: 80px; margin-top: 40px; flex: 1; align-items: center;">
    <div style="background: #1a1814; border: 1px solid var(--rule); border-radius: 36px; padding: 14px; aspect-ratio: 9/19; display: flex; flex-direction: column;" aria-hidden="true">
      <div style="background: var(--bg); border-radius: 24px; flex: 1; padding: 22px 18px; display: flex; flex-direction: column; gap: 12px; position: relative; overflow: hidden;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--ink-faint); text-align: center; padding: 4px 0;">9:41 · Reproduciendo</div>
        <div style="flex: 1; background: linear-gradient(135deg, #1f1c16 0%, #2a261d 100%); border-radius: 12px; position: relative; display: flex; align-items: center; justify-content: center;">
          <div style="width: 60px; height: 60px; border: 2px solid rgba(245,241,232,0.6); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <div style="width: 0; height: 0; border-left: 14px solid rgba(245,241,232,0.85); border-top: 9px solid transparent; border-bottom: 9px solid transparent; margin-left: 4px;"></div>
          </div>
          <div style="position: absolute; left: 12px; right: 12px; bottom: 14px; padding: 12px 14px; background: rgba(0,0,0,0.82); border-radius: 8px; display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 6px; height: 6px; background: var(--accent); border-radius: 50%;"></div>
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--accent); letter-spacing: 0.16em;">LIVE CAPTION</div>
            </div>
            <div style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 14px; line-height: 1.35; color: #fff;">— y como decía, lo importante es que el equipo escuche…</div>
          </div>
        </div>
        <div style="display: flex; gap: 8px; padding: 6px 0;">
          <div style="flex: 1; height: 4px; background: var(--accent); border-radius: 2px;"></div>
          <div style="flex: 2; height: 4px; background: var(--bg-soft); border-radius: 2px;"></div>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 28px;">
      <div style="font-size: 30px; line-height: 1.45; color: var(--ink); max-width: 760px;">
        Transcripción del audio del sistema en tiempo real — disponible para cualquier vídeo, llamada o reproducción. Tu audio merece <em style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">subtítulos</em> propios.
      </div>
      <div style="display: grid; grid-template-columns: 200px 1fr; gap: 14px 32px; font-family: 'JetBrains Mono', monospace; font-size: 22px; line-height: 1.4; padding-top: 24px; border-top: 1px solid var(--rule);">
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">iOS</div>
        <div style="color: var(--ink);">Live Captions — sistema completo desde iOS 16.</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Android</div>
        <div style="color: var(--ink);">Live Caption — disponible desde Android 10.</div>
        <div style="color: var(--ink-faint); letter-spacing: 0.1em; text-transform: uppercase;">Tu app</div>
        <div style="color: var(--ink);">Provee tus propios subtítulos · transcripciones · WebVTT.</div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>25 / 48</span><span>Live Captions · subtítulos del sistema</span></div>

<!--
[LIVE CAPTIONS · ~1,5 min]
Live Captions transcribe el audio del SISTEMA en tiempo real — sin que la app haga nada especial.
Pero depender del sistema no es suficiente: si tu app tiene audio propio (vídeos, podcasts, llamadas), provee tus propios subtítulos en formato WebVTT o SRT.
Los subtítulos propios tienen ventajas: terminología correcta, sincronización perfecta, disponibles offline, y accesibles en más plataformas.
Esto ya no es solo buena práctica: el EAA lo exige para contenido multimedia.
-->

---
class: section-slide
---

<div class="deck-chrome">
  <div class="left"><span style="background:#0a0a0a;width:8px;height:8px;border-radius:50%;display:inline-block;" aria-hidden="true"></span><span>SECCIÓN IV</span></div>
  <div class="right">iOS · accesibilidad</div>
</div>
<div class="slide-pad" style="justify-content: space-between;">
  <div class="num">IV · iOS</div>
  <h2>De lo <em>imperativo</em><br/>a lo declarativo.</h2>
  <div class="desc">
    UIKit y Storyboards exigían disciplina. SwiftUI integra la accesibilidad en la propia definición de la vista.
  </div>
</div>
<div class="footer-rule"><span>26 / 48</span><span>UIKit → SwiftUI</span></div>

<!--
[SECCIÓN IV · ~30 s]
Cuarta sección: iOS. De lo imperativo a lo declarativo. UIKit exigía disciplina; SwiftUI integra la accesibilidad en la definición de la vista.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>04 · iOS</span></div>
  <div class="right">UIKit · legacy</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EL LEGADO · IMPERATIVO</div>
  <h2 class="slide-title">UIKit y Storyboards.</h2>
  <div class="lead">Configurar accesibilidad significaba mantener un segundo árbol — paralelo a la vista, propenso a desincronizarse.</div>
  <ShikiCode lang="swift" label="Ejemplo de código UIKit: configurar accesibilidad en viewDidLoad" :code="`// ViewController.swift · UIKit
override func viewDidLoad() {
  super.viewDidLoad()
  avatar.isAccessibilityElement = true
  avatar.accessibilityLabel = &quot;Foto de perfil&quot;
  avatar.accessibilityTraits = [.image]
  // …repetir para cada vista, sincronizar.
}`" />
  <div class="code-tag legacy" style="margin-top: 32px;">
    <span class="pill">UIKit</span>
    <span>3 propiedades · 1 controlador · 0 garantías de sincronía</span>
  </div>
</div>
<div class="footer-rule"><span>27 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[UIKIT · ~2 min]
UIKit: la accesibilidad vive en el ViewController, separada de la vista. Si cambias el diseño y olvidas actualizar el controller, la semántica se desincroniza silenciosamente.
Tres propiedades manuales por elemento: isAccessibilityElement, accessibilityLabel, accessibilityTraits. En una pantalla compleja, docenas de propiedades que mantener en paralelo.
Esto era el estado del arte hasta 2019. Aún hay proyectos que lo usan.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>04 · iOS</span></div>
  <div class="right">SwiftUI · declarativo</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EL PARADIGMA MODERNO · DECLARATIVO</div>
  <h2 class="slide-title">SwiftUI: accesibilidad<br/><em>por diseño.</em></h2>
  <ShikiCode lang="swift" label="Ejemplo de código SwiftUI: modificadores de accesibilidad" style="flex: 0 0 auto;" :code="`Image(&quot;perfil&quot;)
    .accessibilityLabel(&quot;Foto de perfil de usuario&quot;)
    .accessibilityAddTraits(.isImage)`" />
  <div class="code-tag modern" style="margin-top: 32px;">
    <span class="pill">SwiftUI</span>
    <span>la vista y su semántica viven en una misma expresión</span>
  </div>
</div>
<div class="footer-rule"><span>28 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[SWIFTUI · ~2 min]
SwiftUI: el modificador .accessibilityLabel() está CON la Image. La semántica no puede desincronizarse — vive con la vista.
Si refactorizas la vista y cambias la imagen, el label está justo al lado recordándote actualizarlo.
Tres líneas de código para una imagen completamente accesible. Esto es el paradigma moderno.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>04 · iOS</span></div>
  <div class="right">SwiftUI · modifiers</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EL VOCABULARIO ESENCIAL</div>
  <h2 class="slide-title">Cinco modificadores<br/>que casi todo lo cubren.</h2>
  <div class="mod-list">
    <div class="mod-row">
      <div class="name">.accessibilityLabel()</div>
      <div class="desc">Nombre descriptivo. Identifica iconos sin texto, imágenes informativas.</div>
    </div>
    <div class="mod-row">
      <div class="name">.accessibilityHint()</div>
      <div class="desc">La consecuencia de interactuar — útil en flujos de navegación complejos.</div>
    </div>
    <div class="mod-row">
      <div class="name">.accessibilityValue()</div>
      <div class="desc">El estado actual: porcentaje de un slider, posición de un selector.</div>
    </div>
    <div class="mod-row">
      <div class="name">.accessibilityAddTraits()</div>
      <div class="desc">El rol semántico — cabecera, botón, enlace, imagen.</div>
    </div>
    <div class="mod-row">
      <div class="name">.accessibilityElement(children:.combine)</div>
      <div class="desc">Agrupa hijos en una unidad de lectura — un gesto en lugar de cinco.</div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>29 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[CINCO MODIFICADORES · ~3 min]
Estos cinco cubren el 90% de los casos en SwiftUI:
1. .accessibilityLabel() → el nombre (qué es el elemento)
2. .accessibilityHint() → la consecuencia (qué pasa si lo tocas) — para flujos complejos
3. .accessibilityValue() → el estado actual (porcentaje de un slider, «encendido» de un toggle)
4. .accessibilityAddTraits() → el rol semántico (.isButton, .isHeader, .isLink, .isImage)
5. .accessibilityElement(children: .combine) → agrupa hijos — un gesto en vez de cinco
El quinto es el más potente y el más ignorado. Una tarjeta de producto con imagen+título+precio se puede leer de un golpe.
-->

---
class: section-slide
---

<div class="deck-chrome">
  <div class="left"><span style="background:#0a0a0a;width:8px;height:8px;border-radius:50%;display:inline-block;" aria-hidden="true"></span><span>SECCIÓN V</span></div>
  <div class="right">Android · accesibilidad</div>
</div>
<div class="slide-pad" style="justify-content: space-between;">
  <div class="num">V · ANDROID</div>
  <h2>De <em>XML</em> a<br/>la composición.</h2>
  <div class="desc">
    El sistema de vistas separó estructura y comportamiento. Compose los reúne en una función — y trae consigo el árbol semántico.
  </div>
</div>
<div class="footer-rule"><span>30 / 48</span><span>XML → Jetpack Compose</span></div>

<!--
[SECCIÓN V · ~30 s]
Quinta sección: Android. El árbol semántico de Compose es la clave. De XML y la inflación de vistas a la composición reactiva.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>05 · Android</span></div>
  <div class="right">XML · legacy</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EL LEGADO · INFLACIÓN DE VISTAS</div>
  <h2 class="slide-title">El sistema<br/>de vistas XML.</h2>
  <div class="lead">La accesibilidad dependía de un atributo. Un buen comienzo — pero verboso, lento y desconectado del estado.</div>
  <ShikiCode lang="xml" label="Ejemplo de código XML Android: ImageView con contentDescription" :code="`&lt;!-- layout/item_profile.xml --&gt;
&lt;ImageView
    android:id=&quot;@+id/avatar&quot;
    android:src=&quot;@drawable/ic_profile&quot;
    android:contentDescription=&quot;@string/foto_perfil&quot;
    android:layout_width=&quot;48dp&quot;
    android:layout_height=&quot;48dp&quot; /&gt;`" />
  <div class="code-tag legacy" style="margin-top: 32px;">
    <span class="pill">XML · Views</span>
    <span>inflar XML en runtime · estado y semántica viven aparte</span>
  </div>
</div>
<div class="footer-rule"><span>31 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[XML VIEWS · ~2 min]
El sistema de vistas XML: contentDescription es el único atributo de accesibilidad disponible. Un buen comienzo — pero el atributo es estático.
Si el estado de la vista cambia (cargando → error → éxito), el contentDescription en XML NO se actualiza automáticamente. Hay que hacerlo desde el código Java/Kotlin, otra vez en un lugar separado.
El texto @string/foto_perfil en strings.xml es correcto — facilita la traducción. Pero la sincronización sigue siendo manual.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>05 · Android</span></div>
  <div class="right">Compose · semantics</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EL PARADIGMA MODERNO · ÁRBOL SEMÁNTICO</div>
  <h2 class="slide-title">Jetpack Compose:<br/>semántica como <em>verdad.</em></h2>
  <ShikiCode lang="kotlin" label="Ejemplo de código Jetpack Compose: Modifier.semantics" style="flex: 0 0 auto;" :code="`Modifier.semantics {
    contentDescription = &quot;Confirmar compra&quot;
    role = Role.Button
    stateDescription = &quot;Cargando…&quot;
}`" />
  <div class="code-tag modern" style="margin-top: 32px;">
    <span class="pill">Jetpack Compose</span>
    <span>el árbol semántico se actualiza junto al estado · sin desincronía</span>
  </div>
</div>
<div class="footer-rule"><span>32 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[COMPOSE SEMANTICS · ~2 min]
Modifier.semantics es el equivalente directo de accessibilityLabel+traits en SwiftUI. Pero con una ventaja clave: el árbol semántico se actualiza REACTIVAMENTE junto con el estado de la UI.
Si stateDescription cambia de «Cargando…» a «Compra confirmada», TalkBack lo anuncia automáticamente — sin código adicional.
El árbol semántico de Compose está diseñado para testing y para AT desde el primer día.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>05 · Android</span></div>
  <div class="right">Compose · merging</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">REDUCIR LA CARGA COGNITIVA</div>
  <h2 class="slide-title">Cinco gestos<br/>en uno solo.</h2>
  <div class="two-col">
    <div class="col">
      <h3 style="color: var(--accent);">mergeDescendants = true</h3>
      <p>Agrupa varios hijos como una sola entidad enfocable.</p>
      <p>Una tarjeta de producto se lee de un golpe — nombre, precio, valoración — en lugar de exigir cuatro deslizamientos.</p>
    </div>
    <div class="col">
      <h3 style="color: var(--accent);">customActions = […]</h3>
      <p>Expone acciones alternativas en el menú local de TalkBack.</p>
      <p>Un gesto largo o un swipe se convierten en una opción seleccionable — sin sacrificar la fidelidad táctil del UI visual.</p>
    </div>
  </div>
</div>
<div class="footer-rule"><span>33 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[MERGING + CUSTOM ACTIONS · ~2,5 min]
mergeDescendants = true: una tarjeta con imagen, nombre, precio y valoración se lee como una unidad. «Zapatillas Nike Air Max. 89 euros. 4,5 estrellas.» — un gesto, no cuatro.
customActions: las acciones de swipe (eliminar, archivar) se exponen como opciones en el menú local de TalkBack. El usuario no tiene que adivinar el gesto — le aparece en el menú.
Estas dos técnicas juntas son la diferencia entre una app «que compila con accesibilidad» y una app «que realmente funciona con TalkBack».
-->

---
class: section-slide
---

<div class="deck-chrome">
  <div class="left"><span style="background:#0a0a0a;width:8px;height:8px;border-radius:50%;display:inline-block;" aria-hidden="true"></span><span>SECCIÓN VI</span></div>
  <div class="right">Auditoría · validación</div>
</div>
<div class="slide-pad" style="justify-content: space-between;">
  <div class="num">VI · AUDITORÍA</div>
  <h2>Lo que no se mide,<br/><em>no</em> se incluye.</h2>
  <div class="desc">
    Cada plataforma trae sus herramientas. El componente, la pieza atómica que lo propaga todo.
  </div>
</div>
<div class="footer-rule"><span>34 / 48</span><span>Tooling de validación</span></div>

<!--
[SECCIÓN VI · ~30 s]
Sexta sección: auditoría. Lo que no se mide no se mejora. Las herramientas de las plataformas son gratuitas y muy potentes.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>06 · Auditoría</span></div>
  <div class="right">Tooling · plataforma</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">SUITE INTEGRADA · APPLE &amp; GOOGLE</div>
  <h2 class="slide-title">Auditar es<br/>parte del oficio.</h2>
  <div class="tools-grid">
    <div class="tool-cell">
      <div class="platform">Apple</div>
      <h3>Accessibility Inspector</h3>
      <p>Explora la jerarquía en ejecución. Auditoría automática: etiquetas faltantes, contraste, targets pequeños.</p>
    </div>
    <div class="tool-cell">
      <div class="platform">Apple</div>
      <h3>VoiceOver Simulator</h3>
      <p>Probar la navegación por voz desde Mac — sin invadir el dispositivo personal del desarrollador.</p>
    </div>
    <div class="tool-cell">
      <div class="platform">Google</div>
      <h3>Accessibility Scanner</h3>
      <p>App de Play Store que sugiere mejoras concretas en cualquier pantalla — tamaño y contraste.</p>
    </div>
    <div class="tool-cell">
      <div class="platform">Google · Android Studio</div>
      <h3>Compose UI Check</h3>
      <p>Resalta problemas de accesibilidad en las previews — antes de que el código llegue a producción.</p>
    </div>
  </div>
</div>
<div class="footer-rule"><span>35 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[SUITE DE HERRAMIENTAS · ~2 min]
Cuatro herramientas, todas gratuitas:
Apple: Accessibility Inspector (en Xcode, también sin dispositivo físico), VoiceOver Simulator (en Mac, sin invadir el dispositivo personal).
Google: Accessibility Scanner (descargar ahora mismo desde Play Store), Compose UI Check (integrado en Android Studio, detecta problemas en el panel de previews).
La meta: integrar al menos una en el proceso diario antes del commit.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>06 · Auditoría</span></div>
  <div class="right">ejemplo · Accessibility Inspector</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EJEMPLO · APPLE · ACCESSIBILITY INSPECTOR</div>
  <h2 class="slide-title">Inspeccionar el árbol<br/><em>en vivo.</em></h2>
  <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; margin-top: 56px; flex: 1; align-items: stretch;">
    <div style="background: var(--bg-soft); border: 1px solid var(--rule); border-radius: 6px; overflow: hidden; display: flex; flex-direction: column;" role="img" aria-label="Captura del Accessibility Inspector mostrando el árbol de vistas con dos advertencias: etiqueta faltante y touch target pequeño">
      <div style="display: flex; gap: 8px; padding: 14px 18px; border-bottom: 1px solid var(--rule); background: #1a1814;" aria-hidden="true">
        <span style="width: 12px; height: 12px; background: #ff5f57; border-radius: 50%;"></span>
        <span style="width: 12px; height: 12px; background: #febc2e; border-radius: 50%;"></span>
        <span style="width: 12px; height: 12px; background: #28c840; border-radius: 50%;"></span>
        <span style="margin-left: 16px; font-family: 'JetBrains Mono', monospace; font-size: 18px; color: var(--ink-faint); letter-spacing: 0.06em;">Accessibility Inspector — iPhone 15 Pro</span>
      </div>
      <div style="padding: 28px 32px; font-family: 'JetBrains Mono', monospace; font-size: 22px; line-height: 1.6; color: var(--ink-dim); flex: 1;" aria-hidden="true">
        <div style="color: var(--ink);">▾ Window</div>
        <div style="padding-left: 24px; color: var(--ink);">▾ ScrollView</div>
        <div style="padding-left: 48px; color: var(--ink);">▾ VStack</div>
        <div style="padding-left: 72px; color: var(--accent);">● Image &nbsp;<span style="color:#ff8a6c;">"Foto de perfil"</span></div>
        <div style="padding-left: 72px; color: var(--ink);">● Text &nbsp;<span style="color:#b9e58b;">"María García"</span></div>
        <div style="padding-left: 72px; color: var(--ink);">● Button &nbsp;<span style="color:#b9e58b;">"Seguir"</span></div>
        <div style="padding-left: 72px; color: var(--accent);">⚠ Image &nbsp;<span style="color:var(--ink-faint);">label faltante</span></div>
        <div style="padding-left: 72px; color: var(--accent);">⚠ TouchTarget &nbsp;<span style="color:var(--ink-faint);">32×32 &lt; 44pt</span></div>
        <div style="padding-left: 72px; color: var(--ink);">● Text &nbsp;<span style="color:#b9e58b;">"Hace 2 horas"</span></div>
      </div>
      <div style="padding: 18px 32px; border-top: 1px solid var(--rule); background: #1a1814; font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--ink-faint);" aria-hidden="true">
        <span style="color: var(--accent);">2 issues</span> · 7 elements · audit complete
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 24px; justify-content: center;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 24px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);">Lo que detecta</div>
      <div style="font-size: 28px; line-height: 1.45; color: var(--ink-dim);">Etiquetas faltantes, contraste insuficiente, hit targets fuera del mínimo, traits incoherentes.</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--ink); margin-top: 12px; padding: 18px 22px; background: var(--code-bg); border: 1px solid var(--rule); border-radius: 4px;">
        <span style="color: var(--ink-faint);">$</span> open /Applications/Xcode.app<br/>
        <span style="color: var(--ink-faint);">  </span>Xcode → Open Developer Tool → Accessibility Inspector
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>36 / 48</span><span>Apple · Accessibility Inspector</span></div>

<!--
[ACCESSIBILITY INSPECTOR · ~2 min]
Demo live sugerida: Xcode → Open Developer Tool → Accessibility Inspector → conectar iPhone.
El árbol muestra en tiempo real: etiquetas, traits, y las advertencias ⚠ en naranja.
Dos advertencias en esta captura: label faltante (Image sin accessibilityLabel) y touch target (32×32pt < 44pt mínimo).
El audit automático detecta: labels faltantes, contraste insuficiente, hit targets pequeños, traits incoherentes.
En 30 segundos veis los problemas de vuestra app.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>06 · Auditoría</span></div>
  <div class="right">ejemplo · Accessibility Scanner</div>
</div>
<div class="slide-pad">
  <div class="eyebrow" style="margin-bottom: 16px;">EJEMPLO · GOOGLE · ACCESSIBILITY SCANNER</div>
  <h2 class="slide-title">Sugerencias <em>concretas,</em><br/>en cualquier pantalla.</h2>
  <div style="display: grid; grid-template-columns: 380px 1fr; gap: 64px; margin-top: 0; flex: 1; align-items: center;">
    <div style="background: #1a1814; border: 1px solid var(--rule); border-radius: 36px; padding: 16px; aspect-ratio: 9/19; display: flex; flex-direction: column; gap: 10px;" aria-hidden="true">
      <div style="background: var(--bg); border-radius: 24px; flex: 1; padding: 22px 18px; display: flex; flex-direction: column; gap: 14px; position: relative; overflow: hidden;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--ink-faint); text-align: center; padding: 4px 0;">9:41 · Scanner Results</div>
        <div style="height: 60px; background: var(--bg-soft); border-radius: 12px; position: relative; border: 2px solid var(--accent);">
          <div style="position: absolute; top: -10px; right: -10px; width: 22px; height: 22px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #0a0a0a; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700;">!</div>
        </div>
        <div style="height: 60px; background: var(--bg-soft); border-radius: 12px;"></div>
        <div style="height: 100px; background: var(--bg-soft); border-radius: 12px; position: relative; border: 2px solid var(--accent);">
          <div style="position: absolute; top: -10px; right: -10px; width: 22px; height: 22px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #0a0a0a; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700;">!</div>
        </div>
        <div style="height: 60px; background: var(--bg-soft); border-radius: 12px;"></div>
        <div style="margin-top: auto; height: 48px; background: var(--accent); border-radius: 24px; opacity: 0.4;"></div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; flex-direction: column; gap: 12px; padding: 20px 28px; background: var(--bg-soft); border: 1px solid var(--rule); border-left: 3px solid var(--accent);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase;">⚠ Touch target size</div>
        <div style="font-size: 26px; color: var(--ink); line-height: 1.4;">El elemento mide 36 × 36 dp. Mínimo recomendado: 48 × 48 dp.</div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--ink-faint);">Activity → ProfileFragment → btn_follow</div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px; padding: 20px 28px; background: var(--bg-soft); border: 1px solid var(--rule); border-left: 3px solid var(--accent);">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase;">⚠ Text contrast</div>
        <div style="font-size: 26px; color: var(--ink); line-height: 1.4;">Ratio 3.2:1 sobre texto normal. WCAG AA requiere 4.5:1.</div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--ink-faint);">color: #888 sobre #fff → usa #595959</div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>37 / 48</span><span>Google · Accessibility Scanner</span></div>

<!--
[ACCESSIBILITY SCANNER · ~1,5 min]
Accessibility Scanner: app gratuita de Google en Play Store. Funciona en cualquier pantalla de Android — no solo en tu app.
Los iconos «!» en naranja señalan los elementos con problemas. Dos sugerencias concretas: tamaño del target (36dp < 48dp) y contraste de texto (3,2:1 no llega a 4,5:1 de WCAG AA).
La ruta específica (ProfileFragment → btn_follow) hace que sea trivial saber exactamente dónde está el problema en el código.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>06 · Auditoría</span></div>
  <div class="right">ejemplo · VoiceOver</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EJEMPLO · APPLE · VOICEOVER SIMULATOR</div>
  <h2 class="slide-title">Lo que <em>oye</em> el usuario<br/>cuando navega.</h2>
  <div style="display: flex; flex-direction: column; gap: 0; margin-top: 56px; border-top: 1px solid var(--rule);">
    <div style="display: grid; grid-template-columns: 200px 1fr 1.4fr; gap: 40px; padding: 26px 0; border-bottom: 1px solid var(--rule); align-items: baseline;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase;">Gesto</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase;">Foco</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase;">Anuncio de VoiceOver</div>
    </div>
    <div style="display: grid; grid-template-columns: 200px 1fr 1.4fr; gap: 40px; padding: 24px 0; border-bottom: 1px solid var(--rule); align-items: baseline;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 24px; color: var(--ink-dim);">Swipe →</div>
      <div style="font-size: 26px; color: var(--ink);">Avatar de María</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--ink); background: var(--code-bg); padding: 12px 18px; border-radius: 4px;">"Foto de perfil de María García. Imagen."</div>
    </div>
    <div style="display: grid; grid-template-columns: 200px 1fr 1.4fr; gap: 40px; padding: 24px 0; border-bottom: 1px solid var(--rule); align-items: baseline;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 24px; color: var(--ink-dim);">Swipe →</div>
      <div style="font-size: 26px; color: var(--ink);">Botón seguir</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--ink); background: var(--code-bg); padding: 12px 18px; border-radius: 4px;">"Seguir. Botón. Toca dos veces para activar."</div>
    </div>
    <div style="display: grid; grid-template-columns: 200px 1fr 1.4fr; gap: 40px; padding: 24px 0; border-bottom: 1px solid var(--rule); align-items: baseline;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 24px; color: var(--ink-dim);">Double-tap</div>
      <div style="font-size: 26px; color: var(--ink);">Botón seguir · activar</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--ink); background: var(--code-bg); padding: 12px 18px; border-radius: 4px;">"Siguiendo. Botón seleccionado."</div>
    </div>
    <div style="display: grid; grid-template-columns: 200px 1fr 1.4fr; gap: 40px; padding: 24px 0; align-items: baseline;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 24px; color: var(--ink-dim);">Rotor → Headings</div>
      <div style="font-size: 26px; color: var(--ink);">Sección "Publicaciones"</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; color: var(--ink); background: var(--code-bg); padding: 12px 18px; border-radius: 4px;">"Publicaciones. Encabezado, nivel 2."</div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>38 / 48</span><span>Apple · VoiceOver</span></div>

<!--
[VOICEOVER SIMULATOR · ~2 min]
Esta tabla muestra la secuencia exacta de anuncios al navegar una pantalla de perfil con VoiceOver.
El «Siguiendo. Botón seleccionado.» después del double-tap es el feedback de estado — confirma que la acción tuvo éxito. Sin ese feedback, el usuario no sabe si pulsó bien.
Con Rotor → Headings: el usuario salta directamente a «Publicaciones. Encabezado, nivel 2.» sin pasar por todos los elementos anteriores. Esto requiere que los encabezados tengan el trait .isHeader correcto.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>06 · Auditoría</span></div>
  <div class="right">ejemplo · Compose UI Check</div>
</div>
<div class="slide-pad">
  <div class="eyebrow" style="margin-bottom: 16px;">EJEMPLO · GOOGLE · COMPOSE UI CHECK</div>
  <h2 class="slide-title">Auditoría <em>en la preview,</em><br/>antes del commit.</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 16px; flex: 1; min-height: 0;">
    <div style="display: flex; flex-direction: column; gap: 12px; min-height: 0; overflow: hidden;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent);">@Preview · UI Check ON</div>
      <ShikiCode lang="kotlin" label="Ejemplo de código Compose UI Check: preview con problemas de accesibilidad" style="margin-top: 0; flex: 1; min-height: 0; overflow: hidden;" :code="`@Preview(showBackground = true)
@Composable
fun FollowButtonPreview() {
  Button(
    onClick = {},
    modifier = Modifier
      .size(36.dp)   // ⚠ &lt; 48dp
  ) {
    Icon(
      Icons.Filled.Add,
      contentDescription = null  // ⚠ falta
    )
  }
}`" />
    </div>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent);">Problems panel</div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; gap: 14px; padding: 16px 22px; background: var(--bg-soft); border: 1px solid var(--rule); border-left: 3px solid var(--accent); align-items: flex-start;">
          <div style="color: var(--accent); font-family: 'JetBrains Mono', monospace; font-size: 22px; flex-shrink: 0;">⚠</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 22px; color: var(--ink); line-height: 1.35;">Touch target size 36×36 dp es inferior al mínimo de 48×48 dp.</div>
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; color: var(--ink-faint);">FollowButton.kt · línea 8</div>
          </div>
        </div>
        <div style="display: flex; gap: 14px; padding: 16px 22px; background: var(--bg-soft); border: 1px solid var(--rule); border-left: 3px solid var(--accent); align-items: flex-start;">
          <div style="color: var(--accent); font-family: 'JetBrains Mono', monospace; font-size: 22px; flex-shrink: 0;">⚠</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 22px; color: var(--ink); line-height: 1.35;">Image sin contentDescription. Añade un texto descriptivo o márcalo decorativo.</div>
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; color: var(--ink-faint);">FollowButton.kt · línea 12</div>
          </div>
        </div>
        <div style="display: flex; gap: 14px; padding: 16px 22px; background: var(--bg-soft); border: 1px solid var(--rule); border-left: 3px solid #4ade80; align-items: flex-start;">
          <div style="color: #4ade80; font-family: 'JetBrains Mono', monospace; font-size: 22px; flex-shrink: 0;">✓</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 22px; color: var(--ink); line-height: 1.35;">Contraste &amp; foco visible — sin problemas detectados.</div>
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; color: var(--ink-faint);">2 reglas pasadas</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>39 / 48</span><span>Android Studio · Compose UI Check</span></div>

<!--
[COMPOSE UI CHECK · ~2 min]
Compose UI Check detecta problemas de accesibilidad directamente en el panel de previews de Android Studio — antes del commit.
Dos warnings en este código: .size(36.dp) está por debajo del mínimo de 48dp, y contentDescription = null en el Icon.
Lo importante: estos errores aparecen en el panel «Problems» con el número de línea exacto. No hay excusa para no verlos antes de mergear.
Integrar esto en el pipeline de CI: si la preview tiene warnings de accesibilidad, el build falla.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>06 · Auditoría</span></div>
  <div class="right">Design System · desde cero</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">DEL COMPONENTE A LA APP — UNA VEZ, BIEN</div>
  <h2 class="slide-title">Accesibilidad <em>desde el diseño,</em> propagada por el sistema.</h2>
  <div class="two-col">
    <div class="col">
      <h3 style="color: var(--accent);">El componente como contrato</h3>
      <p>Un Button del design system define su rol, su label, su estado y su hit target — una sola vez.</p>
      <p>Cada pantalla que lo consume hereda esa accesibilidad sin esfuerzo adicional.</p>
    </div>
    <div class="col">
      <h3 style="color: var(--accent);">Validación al crear</h3>
      <ul>
        <li><span class="idx">01</span><span>Reglas de <em style="color: var(--accent); font-style: normal; font-family: 'JetBrains Mono', monospace; font-size: 26px;">axe-core</em> en cada componente atómico.</span></li>
        <li><span class="idx">02</span><span>Tokens de color con ratios validados antes de exportar.</span></li>
        <li><span class="idx">03</span><span>Hit targets, foco y semántica documentados en el sistema.</span></li>
      </ul>
    </div>
  </div>
</div>
<div class="footer-rule"><span>40 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[DESIGN SYSTEM · ~2 min]
El mensaje más importante de esta sección: construye el componente accesible UNA VEZ, todas las pantallas lo heredan gratis.
Un Button del design system define su rol, su label pattern, su estado y su hit target. Cada equipo que consume el componente no necesita pensar en ello.
Validar la accesibilidad al nivel del componente atómico con axe-core en tests. Tokens de color con ratios validados antes de exportar al equipo de diseño.
La accesibilidad no se añade al final — se propaga desde el sistema de diseño.
-->

---
class: section-slide
---

<div class="deck-chrome">
  <div class="left"><span style="background:#0a0a0a;width:8px;height:8px;border-radius:50%;display:inline-block;" aria-hidden="true"></span><span>SECCIÓN VII</span></div>
  <div class="right">futuro · IA</div>
</div>
<div class="slide-pad" style="justify-content: space-between;">
  <div class="num">VII · Futuro</div>
  <h2>Mirando<br/><em>adelante</em>.</h2>
  <div class="desc">
    IA en el dispositivo, personalización profunda y nuevas formas de adaptar la interfaz a cada persona.
  </div>
</div>
<div class="footer-rule"><span>41 / 48</span><span>IA · personalización</span></div>

<!--
[SECCIÓN VII · ~30 s]
Séptima sección: futuro. IA en el dispositivo, personalización profunda, y cómo la accesibilidad viaja con el usuario entre dispositivos.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>07 · Futuro</span></div>
  <div class="right">IA · personalización</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">EL HORIZONTE · IA Y PERFILES DINÁMICOS</div>
  <h2 class="slide-title">Lo que viene —<br/>y lo que <em>nos toca.</em></h2>
  <div class="future-grid">
    <div class="future-card">
      <div class="num" aria-hidden="true">01</div>
      <h3>IA descriptiva</h3>
      <p>Modelos de visión generan alt text donde no lo hay. La brecha histórica se cierra — con supervisión.</p>
    </div>
    <div class="future-card">
      <div class="num" aria-hidden="true">02</div>
      <h3>Sesgos heredados</h3>
      <p>Los datos de entrenamiento traen ideologías propias. La intervención humana es indispensable.</p>
    </div>
    <div class="future-card">
      <div class="num" aria-hidden="true">03</div>
      <h3>Perfiles dinámicos</h3>
      <p>La interfaz se adapta a la persona — no a una categoría. La accesibilidad viaja con el usuario.</p>
    </div>
  </div>
</div>
<div class="footer-rule"><span>42 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[IA DESCRIPTIVA · ~2 min]
Tres tendencias claras en el horizonte:
1. IA descriptiva: modelos de visión como GPT-4o generan alt text donde no lo hay. Útil para cerrar la brecha histórica de contenido sin etiquetar — pero siempre con revisión humana. Los sesgos del entrenamiento son reales.
2. Sesgos heredados: un modelo entrenado con internet puede tener ideas preconcebidas sobre discapacidad. La intervención humana es indispensable.
3. Perfiles dinámicos: la interfaz que se adapta a la persona, no a una categoría. Apple Accessibility API ya empieza a ir en esta dirección.
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>07 · Futuro</span></div>
  <div class="right">IA · técnicas · práctica</div>
</div>
<div class="slide-pad">
  <div class="eyebrow" style="margin-bottom: 16px;">QUÉ PODEMOS HACER YA · IA APLICADA AL DISEÑO ACCESIBLE</div>
  <h2 class="slide-title">La IA, como <em>copiloto</em><br/>de accesibilidad.</h2>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 12px; flex: 1;">
    <div style="display: flex; flex-direction: column; gap: 8px; padding: 14px 20px; border: 1px solid var(--rule); background: var(--bg-soft);">
      <div style="display: flex; align-items: baseline; gap: 14px;">
        <div style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; font-size: 40px; line-height: 1; color: var(--accent);" aria-hidden="true">01</div>
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 24px; margin: 0; color: var(--ink); letter-spacing: -0.01em;">Alt text por visión</h3>
      </div>
      <p style="font-size: 20px; line-height: 1.35; color: var(--ink-dim); margin: 0;">Modelos multimodales generan descripciones de imágenes y capturas. Revisa siempre el resultado.</p>
      <div style="margin-top: auto; font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--accent); letter-spacing: 0.06em; padding-top: 8px; border-top: 1px solid var(--rule);">ImageCaptions · GPT-4o</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px; padding: 14px 20px; border: 1px solid var(--rule); background: var(--bg-soft);">
      <div style="display: flex; align-items: baseline; gap: 14px;">
        <div style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; font-size: 40px; line-height: 1; color: var(--accent);" aria-hidden="true">02</div>
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 24px; margin: 0; color: var(--ink); letter-spacing: -0.01em;">Auditoría de mockups</h3>
      </div>
      <p style="font-size: 20px; line-height: 1.35; color: var(--ink-dim); margin: 0;">Subir un Figma o screenshot al LLM y pedir un informe: contraste, foco, hit targets — antes del commit.</p>
      <div style="margin-top: auto; font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--accent); letter-spacing: 0.06em; padding-top: 8px; border-top: 1px solid var(--rule);">Claude · Gemini</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px; padding: 14px 20px; border: 1px solid var(--rule); background: var(--bg-soft);">
      <div style="display: flex; align-items: baseline; gap: 14px;">
        <div style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; font-size: 40px; line-height: 1; color: var(--accent);" aria-hidden="true">03</div>
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 24px; margin: 0; color: var(--ink); letter-spacing: -0.01em;">Labels en código</h3>
      </div>
      <p style="font-size: 20px; line-height: 1.35; color: var(--ink-dim); margin: 0;">El copiloto del IDE detecta labels faltantes y sugiere el texto según el contexto del árbol UI.</p>
      <div style="margin-top: auto; font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--accent); letter-spacing: 0.06em; padding-top: 8px; border-top: 1px solid var(--rule);">Copilot · Cursor</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px; padding: 14px 20px; border: 1px solid var(--rule); background: var(--bg-soft);">
      <div style="display: flex; align-items: baseline; gap: 14px;">
        <div style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; font-size: 40px; line-height: 1; color: var(--accent);" aria-hidden="true">04</div>
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 24px; margin: 0; color: var(--ink); letter-spacing: -0.01em;">Lenguaje claro</h3>
      </div>
      <p style="font-size: 20px; line-height: 1.35; color: var(--ink-dim); margin: 0;">Reescribir copy en lectura fácil — frases cortas, sin jerga. Cognición, dislexia, lectores no nativos.</p>
      <div style="margin-top: auto; font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--accent); letter-spacing: 0.06em; padding-top: 8px; border-top: 1px solid var(--rule);">UNE 153101</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px; padding: 14px 20px; border: 1px solid var(--rule); background: var(--bg-soft);">
      <div style="display: flex; align-items: baseline; gap: 14px;">
        <div style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; font-size: 40px; line-height: 1; color: var(--accent);" aria-hidden="true">05</div>
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 24px; margin: 0; color: var(--ink); letter-spacing: -0.01em;">Subtítulos y voz</h3>
      </div>
      <p style="font-size: 20px; line-height: 1.35; color: var(--ink-dim); margin: 0;">Transcripción automática para vídeos y podcasts. TTS de calidad humana para onboarding.</p>
      <div style="margin-top: auto; font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--accent); letter-spacing: 0.06em; padding-top: 8px; border-top: 1px solid var(--rule);">Whisper · ElevenLabs</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px; padding: 14px 20px; border: 1px solid var(--rule); background: var(--bg-soft);">
      <div style="display: flex; align-items: baseline; gap: 14px;">
        <div style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; font-size: 40px; line-height: 1; color: var(--accent);" aria-hidden="true">06</div>
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 24px; margin: 0; color: var(--ink); letter-spacing: -0.01em;">Tests automatizados</h3>
      </div>
      <p style="font-size: 20px; line-height: 1.35; color: var(--ink-dim); margin: 0;">Agentes que navegan la app simulando VoiceOver o TalkBack y reportan los caminos rotos del foco.</p>
      <div style="margin-top: auto; font-family: 'JetBrains Mono', monospace; font-size: 20px; color: var(--accent); letter-spacing: 0.06em; padding-top: 8px; border-top: 1px solid var(--rule);">axe + IA · agentes E2E</div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>43 / 48</span><span>IA aplicada · técnicas y herramientas</span></div>

<!--
[IA COPILOTO · ~3 min]
Seis técnicas concretas que podéis usar HOY:
1. Alt text por visión: GPT-4o o Claude describen imágenes. Revisar siempre.
2. Auditoría de mockups: subir un Figma o screenshot a Claude/Gemini y pedir un informe de contraste, foco y hit targets — antes del commit.
3. Labels en código: Copilot y Cursor detectan contentDescription = null y sugieren el texto basándose en el contexto del árbol UI.
4. Lenguaje claro (UNE 153101): el LLM reescribe textos complejos en lectura fácil — para dislexia, cognición, lectores no nativos.
5. Subtítulos y voz: Whisper para transcripción, ElevenLabs para TTS de calidad humana en onboarding.
6. Tests automatizados: agentes que navegan la app simulando VoiceOver/TalkBack y reportan caminos rotos del foco.
-->
---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>07 · Futuro</span></div>
  <div class="right">IA · acceso · datos</div>
</div>
<div class="slide-pad" style="justify-content: center; gap: 48px;">
  <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; letter-spacing: 0.18em; color: var(--ink-faint); text-transform: uppercase;">Conversación con César Alberca · 2025</div>
  <h2 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 110px; line-height: 0.96; letter-spacing: -0.03em; margin: 0; color: var(--ink); max-width: 1600px;">
    Si la IA es la que va a<br/>acceder a los datos…<br/>
    <em style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; color: var(--accent);">¿tiene sentido pensar<br/>en a11y?</em>
  </h2>
</div>
<div class="footer-rule"><span>44 / 48</span><span>IA · acceso · datos</span></div>

<!--
[PREGUNTA PROVOCADORA · ~2 min]
César Alberca planteó esta pregunta: si la IA va a ser el agente que acceda a las interfaces, ¿para quién diseñamos la accesibilidad?
La respuesta: el árbol de accesibilidad ES la interfaz semántica que consumen los agentes. Buena a11y = buena API para la IA.
-->

---
class: section-slide
---

<div class="deck-chrome">
  <div class="left"><span style="background:#0a0a0a;width:8px;height:8px;border-radius:50%;display:inline-block;" aria-hidden="true"></span><span>SECCIÓN VIII</span></div>
  <div class="right">cierre · llamada</div>
</div>
<div class="slide-pad" style="justify-content: space-between;">
  <div class="num">VIII · Cierre</div>
  <h2>Construir para <em>todos</em>.</h2>
  <div class="desc">
    Una llamada a la acción, los recursos para seguir y el espacio para tus dudas.
  </div>
</div>
<div class="footer-rule"><span>45 / 48</span><span>CTA · recursos · Q&amp;A</span></div>

<!--
[SECCIÓN VIII · ~30 s]
Última sección: cierre. Una llamada a la acción, los recursos para seguir y tiempo para vuestras preguntas.
-->

---
class: quote-slide
---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>08 · Cierre</span></div>
  <div class="right">Llamada a la acción</div>
</div>
<div class="slide-pad">
  <div class="center-stack-left">
    <div class="quote-mark" aria-hidden="true">"</div>
    <div class="quote-text">
      Construir para <em>todos</em><br/>no es una buena práctica —<br/>es nuestra <em>responsabilidad.</em>
    </div>
    <div class="quote-attrib">— manifiesto del oficio</div>
  </div>
</div>
<div class="footer-rule"><span>46 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[CITA CIERRE · ~1 min]
Pausa. Esta es la responsabilidad.
Construir para todos no es una buena práctica — es nuestra responsabilidad como ingenieros.
1300 millones de personas. El EAA. Las herramientas existen. El conocimiento existe. ¿Qué más necesitamos?
-->

---

<div class="deck-chrome">
  <div class="left"><span class="dot"></span><span>08 · Cierre</span></div>
  <div class="right">Para seguir</div>
</div>
<div class="slide-pad">
  <div class="eyebrow">DOCUMENTACIÓN · LECTURAS · COMUNIDAD</div>
  <h2 class="slide-title">Recursos.</h2>
  <div class="resource-list">
    <div class="resource">
      <div class="cat">Estándar</div>
      <div class="name">WCAG 2.2 — Web Content Accessibility Guidelines</div>
      <div class="url">w3.org/TR/WCAG22</div>
    </div>
    <div class="resource">
      <div class="cat">iOS</div>
      <div class="name">Apple Human Interface Guidelines · Accessibility</div>
      <div class="url">developer.apple.com/design/hig/accessibility</div>
    </div>
    <div class="resource">
      <div class="cat">Android</div>
      <div class="name">Compose Accessibility · Material Guidelines</div>
      <div class="url">developer.android.com/jetpack/compose/accessibility</div>
    </div>
    <div class="resource">
      <div class="cat">Tooling</div>
      <div class="name">axe-core — motor de auditoría a11y</div>
      <div class="url">github.com/dequelabs/axe-core</div>
    </div>
    <div class="resource">
      <div class="cat">Marco ético</div>
      <div class="name">ONU · Convención sobre los Derechos de las Personas con Discapacidad</div>
      <div class="url">un.org/disabilities/convention</div>
    </div>
    <div class="resource">
      <div class="cat">Comunidad</div>
      <div class="name">a11y Project — recursos y patrones abiertos</div>
      <div class="url">a11yproject.com</div>
    </div>
  </div>
</div>
<div class="footer-rule"><span>47 / 48</span><span>a11y · el numerónimo ético</span></div>

<!--
[RECURSOS · ~1,5 min]
Seis recursos clave — todos gratuitos:
WCAG 2.2 en w3.org/TR/WCAG22 — la referencia técnica.
Apple HIG Accessibility — cómo Apple quiere que implementes accesibilidad.
Compose Accessibility en developer.android.com — guía oficial para Jetpack Compose.
axe-core en GitHub — motor de auditoría open source, se integra en tests automáticos.
Convención ONU — el marco de derechos que sustenta todo.
a11yproject.com — comunidad, patrones y checklists prácticos.
-->

---

<div class="deck-chrome closing">
  <div class="left"><span class="dot"></span><span>08 · Cierre</span></div>
  <div class="right">FIN · enlaces</div>
</div>
<div class="slide-pad" style="justify-content: space-between; padding-bottom: 110px;">
  <div class="eyebrow">PREGUNTAS · COMENTARIOS · CONVERSACIÓN</div>
  <div style="display: grid; grid-template-columns: 1fr 380px; gap: 100px; align-items: center; flex: 1; padding: 30px 0;">
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <h2 style="font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 168px; line-height: 0.92; letter-spacing: -0.04em; margin: 0; color: var(--ink);">Gracias.<br><span style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic; font-weight: 300;">¿</span><em style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 300; color: var(--accent);">Dudas?</em></h2>
      <div style="display: grid; grid-template-columns: 220px 1fr; gap: 18px 36px; font-family: 'JetBrains Mono', monospace; font-size: 26px; line-height: 1.4; border-top: 1px solid var(--rule); padding-top: 28px; max-width: 820px;">
        <div style="color: var(--ink-faint); letter-spacing: 0.12em; text-transform: uppercase;">Linktree</div>
        <div style="color: var(--ink);">linktr.ee/<span style="color: var(--accent);">juanje.cilla</span></div>
        <div style="color: var(--ink-faint); letter-spacing: 0.12em; text-transform: uppercase;">Podcast</div>
        <div style="color: var(--ink);">Welcome to <em style="font-family: 'Fraunces', serif; font-style: italic; color: var(--accent);">La Secta</em></div>
        <div style="color: var(--ink-faint); letter-spacing: 0.12em; text-transform: uppercase;">Substack</div>
        <div style="color: var(--ink);"><em style="font-family: 'Fraunces', serif; font-style: italic; color: var(--accent);">Coding Pit</em></div>
        <div style="color: var(--ink-faint); letter-spacing: 0.12em; text-transform: uppercase;">Comunidad</div>
        <div style="color: var(--ink);">GDG Aranjuez</div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 18px;">
      <div style="background: #f5f1e8; padding: 22px; border-radius: 8px;">
        <QRCode url="https://linktr.ee/juanje.cilla" :size="320" label="Código QR para linktr.ee/juanje.cilla — todos los enlaces del speaker" />
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 22px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); text-align: center;">escanea · todo en uno</div>
    </div>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: flex-end; gap: 80px;">
    <div class="signoff" style="white-space: nowrap; margin-top: 0;">a<span style="color: var(--accent); font-family: 'Fraunces', serif; font-style: italic;">11</span>y · el numerónimo ético</div>
    <div style="font-family: 'JetBrains Mono', monospace; font-size: 26px; color: var(--ink-dim); text-align: right; white-space: nowrap;">COMMIT CONF 2026<br>5 DE JUNIO · MADRID</div>
  </div>
</div>
<div class="footer-rule"><span>48 / 48</span><span>FIN · linktr.ee/juanje.cilla</span></div>

<!--
[FIN · ~5 min Q&A]
Gracias por la atención. Los recursos están en el QR — un único enlace de Linktree con todo.
Tiempo para preguntas. Si no hay preguntas en sala, arrancar con: «¿alguien ha probado VoiceOver en producción esta semana?»
Para cualquier duda después: linktr.ee/juanje.cilla o escribidme directamente.
-->
