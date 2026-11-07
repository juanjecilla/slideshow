# CFP (as submitted)

**Title:** Convierte tu app en una skill con App Functions

**Description:**
Los modelos de lenguaje han dejado de ser meros generadores de texto para convertirse en agentes capaces de razonar
y ejecutar acciones mediante herramientas externas (tool calling). En Android, la API de App Functions se consolida
como el contrato nativo que permite a cualquier LLM o asistente del sistema utilizar la lógica de nuestra aplicación
como si fuera una skill más dentro de su repertorio. En esta charla veremos cómo dejar de diseñar exclusivamente para
pulsaciones en pantalla y empezar a exponer nuestro dominio a la orquestación inteligente. Exploraremos la
arquitectura interna de App Functions, la definición de schemas estructurados y las pautas para que los modelos
puedan invocar capacidades locales de forma segura, determinista y sin romper la experiencia de usuario.

Note: "cualquier LLM o asistente" is softened in the deck: only privileged agents holding `EXECUTE_APP_FUNCTIONS`
can call (see `research.md` F2).
