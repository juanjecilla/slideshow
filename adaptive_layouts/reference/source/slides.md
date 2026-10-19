# Adaptative Layouts.pptx

29 slides. Media in `media/`.

## Slide 01

- Adaptative Layouts
- Adaptarse o Morir
- ‹#›

## Slide 02

- Adaptative Layouts
- Adaptarse o Morir
- ‹#›

Images: `media/image30.png`

## Slide 03

- Quién soy?
- Juanje Cilla
  Senior Software Engineer
  Más de 10 años en Android
  Profesor en KeepCoding
  Bootcamp Desarrollo Mobile
  GDG Aranjuez
  Organizador
  Coding Pit
  Welcome to La Secta
- ‹#›

Images: `media/image1.png`

## Slide 04

- Agenda
- Problemática
  Soluciones antiguas
  Adaptive Layouts
  Conclusiones
- ‹#›

Images: `media/image14.png`

## Slide 05

- 1. Problemática a.k.a. El Malo
- ‹#›

## Slide 06

- 1 - Problemática
- Dispositivos
- Contexto
- Estado
- ‹#›

Images: `media/image7.png`, `media/image11.png`, `media/image12.png`

## Slide 07

- 3.000M
- Dispositivos Android en el mundo
- ‹#›

## Slide 08

- 1.1 - Problemática - Dispositivos
- ‹#›

Images: `media/image6.png`, `media/image10.png`, `media/image18.png`, `media/image3.png`, `media/image35.png`, `media/image9.png`, `media/image25.png`, `media/image32.png`

## Slide 09

- 1.2 - Problemática - Contexto
- Orientación
  Portrait / Landscape
  Zoom
  1x … 3x
  Font size
  2x, 3x…
- ‹#›

Images: `media/image5.png`, `media/image8.png`, `media/image13.png`

## Slide 10

- 1.3 - Problemática - Estado
- Misma app
  Abierto
  Cerrado
  Doblado
  Varias apps
  Ajuste de tamaño
  Comunicación
- ‹#›

Images: `media/image2.png`, `media/image4.png`

## Slide 11

- 1 - Problemática
- Dispositivos
- Contexto
- Estado
- ‹#›

Images: `media/image7.png`, `media/image11.png`, `media/image12.png`, `media/image33.png`

## Slide 12

- ‹#›

Images: `media/image29.gif`

## Slide 13

- ‹#›

Images: `media/image37.gif`

## Slide 14

- 2. Soluciones antiguas a.k.a. El Feo
- ‹#›

## Slide 15

- 2.1 - Soluciones Antiguas - XML
- Múltiples layouts
  Independientes
  Poca reusabilidad
  Configuraciones complejas
- ‹#›

Images: `media/image22.png`

## Slide 16

- 2.2 - Soluciones Antiguas - Ñapas
- ‹#›

Images: `media/image15.png`, `media/image16.png`

## Slide 17

- 2.3 - Soluciones Antiguas - a11y
- ‹#›

Images: `media/image8.png`, `media/image20.gif`

## Slide 18

- 2.4 - Soluciones Antiguas - Problemas
- Pantallas grandes:
  Orientaciones forzadas
  MinAspectRatio / MaxAspectRatio
  ResizeableActivity
- ‹#›

Images: `media/image24.png`, `media/image26.png`

## Slide 19

- 3. Adaptive Layouts a.k.a. El Bueno
- ‹#›

## Slide 20

- 3 - Adaptive Layouts
- Jetpack Compose
  Window Size Classes
  Window Insets
  Material 3 Adaptative
  Adaptive input methods
- ‹#›

Images: `media/image21.png`

## Slide 21

- 3.1 - Adaptive Layouts - Window Size Classes
- 3 tamaños:
  Compact (< 600 dp)
  Medium (600 dp ≤ width < 840 dp)
  Expanded (840 dp ≤ width < 1200 dp)
  Independiente del dispositivo
  HingeInfo / Posture
- ‹#›

Images: `media/image19.png`

## Slide 22

- 3.2 - Adaptive Layouts - Window Insets
- Scaffold Components:
  TopAppBar
  BottomAppBar
  NavigationBar
  Modifier.windowInsetsPadding
- ‹#›

Images: `media/image34.png`

## Slide 23

- 3.3 - Adaptive Layouts - Material 3 Adaptive
- NavigationSuiteScaffold
  PaneScaffolds
  Supporting
  ListDetail
  Predictive Back
  Navigable
- ‹#›

Images: `media/image36.png`

## Slide 24

- 3.3 - Adaptive Layouts - Material 3 Adaptive
- ‹#›

Images: `media/image17.jpg`

## Slide 25

- 3.4 - Adaptive Layouts - Adaptive input methods
- Diferentes dispositivos, nuevas entradas
  Stylus
  Teclados
  Ratones
  Herramientas de accesibilidad
- ‹#›

Images: `media/image31.png`

## Slide 26

- 3.5 - Adaptive Layouts - Otras opciones
- LazyVerticalGrid / LazyHorizontalGrid
  GridCells: Adaptative vs Fixed
  BoxWithConstraints
  SubcomposeLayout
  Custom Layout
  Measurables, placeables
- ‹#›

Images: `media/image23.png`

## Slide 27

- 4. Conclusiones a.k.a. El FIN
- ‹#›

## Slide 28

- 4 - Conclusiones
- ‹#›
- Not Do’s
  Forzar resizeableActivity, screenOrientation, min/maxAspectRatio
  Tamaños con APIs antiguas y tamaño de dispositivo
  Lógica específica de gestión de ventanas
  Max width por defecto
- Do’s
  resizeableActivity="true" y quitar screenOrientation y min/maxAspectRatio
  WindowManager/Metrics y currentWindowAdaptiveInfo()
  Adaptive Layouts
  Aprovechar el tamaño de la pantalla para múltiples ventanas

## Slide 29

- Gracias
- ‹#›
- linktr.ee/juanje.cilla
- juanje-cilla

Images: `media/image38.png`, `media/image28.png`, `media/image27.png`
