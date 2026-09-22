# CLAUDE.md — Citixen Landing Page

## Qué es este repo

Landing page de Citixen en `citixen.app`. Comunica el producto a gobiernos locales y ciudadanos.
Deploy: Vercel. Framework: Next.js 14 + React 18. Estilos: CSS custom con variables (no Tailwind classes en components).

**Dominios (verificado por auditoría DNS/HTTP/TLS, sep 2026 — corrige la versión anterior de esta sección):**
- `citixen.app` — **este repo** (landing institucional Next.js). El deploy vive en Vercel como siempre, pero el dominio lo sirve Nginx en el droplet del backend (`164.92.218.144`) haciendo reverse-proxy hacia ese deploy de Vercel para toda ruta que no sea `/api/*` — así la landing y el backend conviven bajo un solo dominio sin CORS. TLS termina en el droplet (Let's Encrypt, `CN=citixen.app`), no en Vercel. **No confundir con "solo backend"** — esa era la doc vieja.
- `citixen.app/api/*` — backend API (otro repo, mismo dominio, mismo droplet, sin proxy)
- `citixen.org` — **ya NO es este repo.** Es `citixen-portal` (Vite/React, sitio ciudadano estilo GoFundMe — Iniciativas Ciudadanas, Vercel directo)
- `citixen.tech` — **dado de baja (sep 2026).** El usuario decidió no renovarlo/venderlo por costo de mantenimiento — no se usaba. El redirect 301 hacia `citixen.org` que tenía configurado se quitó de `vercel.json` de este repo. No referenciar `citixen.tech` en ningún lugar nuevo (copy, JSON-LD, comentarios de código).
- `admin.citixen.app` / `government.citixen.app` — paneles operativos (otros repos)

---

## ⚠️ REVERSIÓN ESCOPEADA AL HOME (sep 2026)

> **El Home (`/`) revirtió el "giro narrativo" de junio 2026 — decisión explícita del usuario, no accidental.** El usuario trajo una lista de frases + un texto narrativo completo ya armado (10 bloques) + una captura de referencia visual, y pidió reconstruir la página principal desde cero con esa narrativa. Antes de tocar código se le preguntó explícitamente (3 preguntas, ver abajo) porque el pedido chocaba con decisiones cerradas del giro de junio — las 3 respuestas confirmaron la reversión:
> 1. **CC vuelve a ser protagonista explícito desde el Hero, sin mención a la Deliberación con IA en el Home.** El H1 vuelve a "Tus impuestos. Tu ciudad. Tu decisión." con "Créditos Cívicos" nombrados sin eufemismo ("presupuesto participativo continuo" fuera del Home).
> 2. **Home vuelve a ser largo** (10 secciones de contenido, no 4). El principio "menos es más" (jun 2026, ver `feedback_landing_less_is_more` en memoria raíz) no se descartó como regla general — se hizo una excepción explícita para esta narrativa específica, que el usuario ya trae armada como relato progresivo de una sola página.
> 3. **Paleta de marca intacta** (navy `#0A3D91` + coral `#F7794E`, sin verde) — la captura de referencia usaba verde, pero solo se tomó de ahí la estructura/layout (cards, sliders, timeline, callouts), no el color.
>
> **Alcance de la reversión: SOLO `pages/index.js` y los componentes que renderiza.** `/soyvecino`, `/soygobierno`, `Deliberation.jsx` y el resto del posicionamiento de junio (abajo) **no se tocaron** y siguen vigentes tal cual — el intendente que entra por `/soygobierno` sigue leyendo "presupuesto participativo continuo" con la Deliberación con IA como diferenciador. Si en el futuro se quiere propagar este giro a esas páginas, es una decisión nueva, no implícita en esta.

## Posicionamiento (revisado junio 2026 — decisión 31/05, vigente fuera del Home — ver reversión arriba)

> **GIRO NARRATIVO (jun 2026 — decisión del usuario, vigente).** Tres movimientos acoplados, aplicados al Home + `/soyvecino` + `/soygobierno`:
> 1. **Una sola Citixen, no dos modos.** Afuera dejamos de presentar "Modo Comunidad" vs "Créditos Cívicos" como dos productos/modos. Es una plataforma; **Créditos Cívicos es una capacidad que se enciende con un switch** cuando la ciudad está lista. (Adentro, `platformMode: light/full` sigue intacto — el cambio es de empaquetado, no de arquitectura.)
> 2. **El motor de deliberación con IA pasa a protagonista.** La landing ahora lidera por las herramientas de participación, con la **deliberación asistida por IA** como diferenciador. Framing obligatorio: *asiste, nunca decide · cita su fuente · nada sin cita validado por máquina · ninguna voz se pierde*. Nunca hype, nunca "el algoritmo decide". Componente reutilizable `components/Deliberation.jsx` (banda navy) renderizado en Home y `/soygobierno`.
> 3. **Cero mención de plata.** La landing no habla de precios ni de "gratis / 6 meses" en ninguna superficie. El costo es conversación B2G. Se limpiaron `WhatIsCitixen`, `EarlyAccess`, badge de `/soygobierno`, JSON-LD (`offers`/`price`) y `caso-de-estudio`.
>
> El eje del relato corrió de **"asignás / presupuesto"** a **"tu ciudad te escucha de verdad — y puede probarlo"**. La línea previa de §Posicionamiento ("CC al frente / presupuesto participativo continuo como protagonista") queda **subordinada** a este giro donde haya conflicto.

**Citixen = participación ciudadana con peso real en municipios locales.**

El centro del producto es **el ciudadano con peso en su municipio**, no el municipio con un dashboard de transparencia. La transparencia fiscal es **piso del producto** (commodity técnica), no el hook de venta. El moat es: Créditos Cívicos + ciclo de aprobación + participación vinculante.

El producto tiene 2 modos de adopción:
- **Créditos Cívicos** (interno: `full`): participación con CC, financiamiento participativo, ciclo de aprobación municipal. **Modo protagonista del producto.**
- **Modo Comunidad** (interno: `light`): consultas, propuestas, portal público y reporte mensual. Sin CC. Puerta de entrada para municipios que todavía no están listos para activar CC. Trial 6 meses gratuito.

### Cómo se traduce en la landing
- El Hero le habla **al vecino**, no al intendente. El intendente lee la promesa que él puede ofrecerle a su ciudad.
- **Participación primero en todas las superficies municipales (giro jun 2026).** El relato arranca por participación; CC aparece como **evolución**, no como headline. Aplica al Home (Hero ya era participación-pura; la tabla `WhatIsCitixen` se flipeó: Comunidad como entrada, presupuesto participativo como paso siguiente) y a `/soygobierno`. El bloque de CC se reencuadra como **"presupuesto participativo continuo"** (concepto que el intendente ya reconoce y respeta), con "Créditos Cívicos" nombrado como el *mecanismo interno*, no como el título. Razón: para el comprador municipal, "Créditos Cívicos / tokens" suena a fintech/cripto y frena la adopción; "presupuesto participativo" es una práctica de gobernanza legible y de bajo riesgo percibido. El rename es **solo de posicionamiento** — adentro de la app y en código/BD sigue siendo "Créditos Cívicos" (§5 raíz intacto). En `/soyvecino` **no** aplica: para el vecino, los CC son la propuesta de valor, no un miedo — ahí CC al frente está bien.
- "Presupuesto participativo continuo" describe el mecanismo (asignación continua, trazable, vinculada al aporte de cada vecino). NO correr el eje a fiscalización ("controlá en qué se gastan tus impuestos") — eso reactiva el miedo del intendente y contradice `no-asap-compliance-positioning`.
- Transparencia NO se vende como propuesta de valor. Se menciona como output del sistema.
- ASAP / índice de transparencia: solo como prueba externa al hablar con municipios que ya lo cumplen — *"ASAP mide qué se publica. Citixen mide qué se decide."*

Ver memorias del proyecto raíz: `no-asap-compliance-positioning`, `portal-four-functions`.

---

## Estructura del Home (reescrita sep 2026 — ver reversión al inicio del archivo)

Narrativa larga de 10 secciones, CC-first, basada en un texto completo entregado por el usuario. Reemplaza la estructura de 4 secciones de junio 2026 (tabla vieja conservada en el historial de git si hace falta recuperarla).

| Orden | Componente | Contenido |
|---|---|---|
| 1 | `Hero.jsx` | H1 "Tus impuestos. Tu ciudad. Tu decisión." (highlight coral en "Tu decisión"). Lead + frase fuerte ("Citixen propone algo simple...") + tagline "Créditos Cívicos para convertir impuestos en decisiones ciudadanas." CTAs: "Quiero participar" (`Link` → `/soyvecino`) y "Conocé más ↓" (→ `#como-funciona`). Visual: reusa el patrón `.hv-card` (mismo usado en `/soygobierno`) + las clases `.phone-progress-*`/`.phone-supporters-*` de `PhoneMockup` — cero CSS nuevo. **Carrusel de 4 proyectos (sep 2026):** la tarjeta "Proyecto destacado" rota cada 4.5s (`setInterval`, respeta `prefers-reduced-motion`) entre plaza (`/mockup/plaza.png`, foto original del repo) + iluminación pública (`/mockup/iluminacion.jpg`) + ciclovías (`/mockup/ciclovia.jpg`) + centro cultural (`/mockup/centro-cultural.jpg`). **Los 3 nuevos son imágenes generadas por IA (sep 2026), no fotos de stock** — el primer intento usó fotos reales de Unsplash (recortadas con ImageMagick), pero el usuario las encontró "muy básicas"; se armaron 3 prompts detallados (estilo fotorrealista, luz cálida de atardecer, formato panorámico 16:9, sin texto/logos/lugares reconocibles, coherente con `plaza.png`) que el usuario corrió en Codex y devolvió como PNG ya en 16:9 — sin necesidad de recorte. Convertidas a `.jpg` calidad 85 con `sips` para bajar peso (~2.3MB → ~600KB c/u). Puntos indicadores (`.hero-dots`) debajo de la tarjeta. **Gotcha de esta sesión:** al reemplazar estos archivos, el servidor de dev ya levantado siguió sirviendo las versiones viejas (caché del image optimizer de Next / proceso viejo colgado) — si esto vuelve a pasar, matar el proceso en el puerto 3000, borrar `.next/cache/images` y arrancar `next dev` de cero antes de verificar visualmente. |
| 2 | `HowItWorks.jsx` (nuevo) | `#como-funciona`. 3 pasos con flechas (Contribuís → Recibís CC → Elegís proyectos) + callout "No se retiran / No se venden / No se transfieren — Son capacidad de decisión." |
| 3 | `TaxToProject.jsx` (nuevo, reemplaza `CreditAllocator.jsx` — decisión sep 2026, ver nota abajo) | "De tu impuesto al proyecto". Abre con **"Tu municipio decide qué porcentaje de cada impuesto se convierte en Créditos Cívicos"** (refleja `allocationPercentage` real de §32 CLAUDE.md raíz) — ejemplo: pagás $100, el municipio destina 70% a decisión ciudadana → recibís 70 CC, "el resto sigue financiando los servicios habituales" (nunca "te devuelve"/"recuperás", vocabulario prohibido en §32). Constantes `PAID=100`, `ALLOCATION_PCT=70`, `BUDGET=70` al tope del archivo. Fórmula `$1 = 1 CC = $1 de decisión` sin disclaimer de tipo de cambio (ver nota abajo). 4 proyectos con `Meta: $X / X CC` + `Tu límite: Y CC` cada uno (límites 40/30/20/10, suman 100 — **más que el `BUDGET` de 70 a propósito**). Sliders con doble tope: el propio límite del proyecto Y un tope global dinámico = `BUDGET - suma de los otros 3` — así ni un solo proyecto puede agotar el presupuesto, ni la suma total puede superar 70 aunque los límites individuales permitirían más. Valores iniciales `[30, 20, 15, 5]` (ya suman 70/70, "completamente asignado" desde el arranque). Cierra con nota sobre por qué existen los límites y que el municipio puede ajustarlos con motivo visible. |
| 3.5 | `GoalReached.jsx` (nuevo) | "¿Y cuándo un proyecto alcanza su meta?" — secuencia 8.420→13.750→18.900→20.000 CC (chip verde `var(--green)` al llegar, mismo verde que ya usaba `.hv-photo-stamp`) → explica solicitud de ejecución + liberación de fondos por el municipio → stats reutilizando las clases globales `.hv-metric*` (100 CC / $100 / 0% comisión) → cierre: "Cada peso representado por tus Créditos tiene un destino que vos elegiste." + "Vos decidís el destino. El municipio garantiza los recursos. El proyecto los convierte en resultados." |
| 3.6 | `ProofOfImpact.jsx` (nuevo — sep 2026) | "El círculo se cierra con pruebas" — versión Home, citizen-first, de la sección homónima que ya existía en `/soygobierno` (ACTO 3, "Pack de evidencia"). Banda navy (`--citixen-gradient`) con la misma foto `/mockup/plaza.png` con stamp "Ejecutado", lista de 3 puntos (fotos antes/después, historia contada, registro permanente sin edición) y cierre **"Para vos, la prueba de que tu decisión sirvió."** (en `/soygobierno` el cierre prioriza "para tu gestión" — acá se invierte el orden a propósito). Completa el tramo de la cadena que `GoalReached` dejaba abierto ("se ejecuta" → nunca se mostraba la prueba). No se tocó la versión de `/soygobierno`; son dos componentes con el mismo concepto y distinto foco de audiencia. |
| 4 | `CollectiveDecisions.jsx` (nuevo) | "Miles de decisiones individuales construyen una prioridad colectiva." Ilustración propia: 6 siluetas SVG inline en paleta de marca (sin asset externo). En mobile la fila de siluetas usa `flex-wrap` — sin esto desborda el viewport (bug real encontrado y corregido en esta sesión). |
| 5 | `MoreThanOpinion.jsx` (nuevo) | "Participar debería ser más que opinar." Compara "Me gustaría que..." vs "Quiero que una parte de los recursos vaya acá." Reusa `<PhoneMockup />` tal cual (mismo componente que ya usaba `/soygobierno`). |
| 6 | `CitizenGovernmentSplit.jsx` (nuevo) | "Vos elegís. El municipio ejecuta." 2 cards: "La ciudadanía decide" / "El gobierno ejecuta." |
| 7 | `CitizenInitiatives.jsx` (nuevo) | "Una buena idea también puede empezar con un vecino." Cadena Proponer → Debatir → Priorizar → Ejecutar. |
| 8 | `NotOnePriority.jsx` (nuevo) | "Una ciudad no tiene una sola prioridad. Tiene miles." Callout final: "Para el ciudadano, poder de decisión. Para el municipio, prioridades respaldadas por sus vecinos." |
| 9 | ~~`RepresentativeDemocracy.jsx`~~ | **Removida del Home (sep 2026, a pedido del usuario) — archivo conservado sin importar.** Repetía en modo abstracto ("Citixen no reemplaza la democracia representativa...") algo que la sección 6 ya cubre de forma concreta ("Vos elegís. El municipio ejecuta."), y esa reflexión filosófica justo antes del cierre frenaba el envión de `TaxToProject`/`GoalReached` en el peor lugar de la página. |
| 10 | `FinalCTA.jsx` (nuevo) | "Del impuesto al proyecto, sin perder la decisión en el camino." (headline actualizado sep 2026 — reemplaza "Tus impuestos financian la ciudad..."). Dual CTA: "Quiero participar" (→ `/soyvecino`) / "Quiero llevar Citixen a mi municipio" (→ `#acceso`). |
| — | `EarlyAccess.jsx` | Sigue siendo el form real que pega a `POST /api/government/register-light`. Vive después de `FinalCTA`, bajo `#acceso`. **Subtítulo del header sacado (sep 2026):** hablaba de "encendés el peso económico con un switch" — resaca del giro de junio (Modo Comunidad → CC como switch) que ya no existe en esta página. Era además redundante con la descripción de la tarjeta ("Registrá tu municipio y te ayudamos a tenerlo operativo en un día."). Queda solo el título. |
| — | `Footer.jsx` | Sin cambios. |

**Decisión de fondo (sep 2026):** a pedido explícito del usuario, el concepto central de la sección 3 dejó de ser "priorización libre entre categorías" (`CreditAllocator.jsx`, borrado — nunca llegó a deployarse) y pasó a ser **asignación ciudadana de recursos públicos con metas y límites reales**: pagás → recibís CC → distribuís dentro de límites por proyecto → el proyecto alcanza su meta → el municipio libera los fondos → se ejecuta. Esto es más preciso respecto al modelo real (`maxDonationPerCitizen` por proyecto, §18 CLAUDE.md raíz) que la versión anterior. **Corrección (sep 2026):** la primera versión de `TaxToProject.jsx` llevaba un disclaimer diciendo "el tipo de cambio real lo fija cada municipio" — **es incorrecto y se sacó**. Según el modelo real (§15 CLAUDE.md raíz), el `ExchangeRate` es por moneda y lo fija el **superadmin** desde `citixen-admin`, no cada gobierno local; el municipio solo tiene asociada una `currency` (ISO 4217). No reintroducir esa frase ni ninguna que atribuya el tipo de cambio a los municipios.

**Recién quedaron sin importar en `index.js` (archivos conservados, reversible):** `WhatIsCitixen.jsx`, `TwoPaths.jsx`, `RepresentativeDemocracy.jsx`. Se suman a la lista histórica de componentes ya desmontados: `HowToStart`, `CivicLoopScroll`, `Trust`, `Problem`, `CommunityMode`, `Deliberation`, `SocialProof`, `Progressive`, `Scenarios`, `Differentiator`, `CivicCreditsExplainer`, `CaseStudyBlock`, `VecinoBanner`, `PricingSection`. Varios de estos (`HowToStart`, `CivicLoopScroll`, `Trust`, `Problem`) inspiraron visualmente los componentes nuevos de la tabla de arriba sin reutilizarse literalmente (contenido distinto).

**SEO del Home actualizado en consecuencia** (`pages/index.js`): `<title>`, meta description, OG/Twitter tags y el JSON-LD (`Organization`/`SoftwareApplication`) dejaron de mencionar la Deliberación con IA como feature líder — ahora lideran con Créditos Cívicos. El JSON-LD de `/soygobierno` (si lo tiene) no se tocó.

**Decisión narrativa previa (junio 2026, sigue aplicando fuera del Home):** `/soyvecino` y `/soygobierno` siguen siendo vecino-first / gobierno-first respectivamente, con sus propios H1 y estructura — no se modificaron.

**Rutas y SEO:**
- `/` — home (citizen-first, intendente lee como audiencia que compra esta promesa)
- `/soyvecino` — landing dedicada al vecino con narrativa de 7 actos
- `/creditos-civicos` → redirect 308 a `/soyvecino`

**Rutas y SEO:**
- `/` — home (vecino-first en el Hero; el intendente entra leyendo la promesa que puede ofrecer)
- `/soyvecino` — landing dedicada al vecino. Renombrada desde `/creditos-civicos` (mayo 2026). Mantiene la narrativa de 7 actos original. El hero va **sin eyebrow** (se retiró "Sos vecino" en jun 2026 — el formato etiqueta-conversacional leía a IA; misma decisión que en `/soygobierno`). **H1 refrescado jun 2026** (ángulo "del reclamo a la decisión", ADN del producto): *"Dejá de pedirle a tu ciudad. **Empezá a decidir con ella.**"* + subhead *"No se trata de pedir más fuerte, sino de decidir. Con Citixen priorizás los proyectos que tu ciudad necesita y ves cómo se hacen realidad."* Reemplazó "Pagás impuestos. ¿Alguna vez pudiste decidir qué se hace con ellos?". Como `/soyvecino` lo lee solo el vecino (sin intendente), el tono puede ser más audaz que el Home. **Cierre reenfocado 100% al vecino (jun 2026):** se eliminaron las 2 secciones de gobierno del cuerpo (ACTO 5 — "el municipio no pierde control / gana respaldo" + band "implementación sin secretos") por no dirigirse al vecino. El CTA final dejó de ser dual: ahora es header motivacional ("Las ciudades no cambian solas. Las cambian sus vecinos.") + strip **"Todo lo que vas a poder hacer"** (6 beneficios: decidir sobre proyectos / opinar y proponer / impulsar proyectos sociales e iniciativas ciudadanas / seguir resultados / avisos del municipio / mi impacto) + **una sola tarjeta centrada** (`ep-cta-dual--single`): el buscador `CitySearchCTA`, que ya trae su propio botón "Descargar en Google Play" y los mensajes por estado (activa / pre-adopción / en activación). La tarjeta de descarga separada se **unificó** con el buscador (jun 2026 — era redundante). Clases nuevas en globals.css: `ep-cta-perks`/`ep-cta-perk`.
- `/soygobierno` — landing dedicada al intendente. **Reestructurada (jun 2026) de página defensiva a catálogo de herramientas:** el municipio entiende en detalle TODO lo que Citixen le da, sin secciones de riesgo/implementación/FAQ ("si tienen dudas, que escriban"). Estructura actual: Hero (sin eyebrow — se retiró por leer a IA) → **catálogo en 3 bloques de 6 tarjetas c/u** (Modo Comunidad · Presupuesto participativo continuo —mecanismo interno: Créditos Cívicos— · Para tu equipo, con badge por modo) → banda navy "Pack de evidencia" → cierre "¿dudas? escribinos" + form `EarlyAccess` (`/#acceso` → `MunicipalLead`). **La sección de precios (`<PricingSection />`, ACTO 4) se removió jun 2026** — la landing no muestra precios; el costo es B2G consultivo. La barra de disponibilidad de 7 países se removió (jun 2026). El nav "Soy gobierno" apunta acá. El hero conserva el arco de proyecto `hero-visual`/`hv-*` (vocabulario "Créditos Cívicos"). **H1 gobierno-first (jun 2026):** *"Convertí a tus vecinos en aliados de tu gestión."* + subhead *"Citixen convierte el reclamo en participación, y la participación en respaldo a tu gestión…"* — el título vende el beneficio del **intendente** (legitimidad / respaldo a su gestión), no el del vecino. Reemplazó el "Tu ciudad paga impuestos / dale peso a tus vecinos" (beneficiaba al ciudadano). CSS scoped en `<style jsx>` con clases `sg-*` (`sg-tools`/`sg-block`/`sg-tool`/`sg-evi`/`sg-proof`), reusa la paleta navy + variables globales — **cero CSS global nuevo**. Transparencia sigue como output, no como hook (coherente con `no-asap-compliance-positioning`). **Eliminado en la reestructura:** secciones "Por qué es seguro", "Control vs respaldo", "Empezás sin riesgo", "Implementación sin secretos", FAQ del intendente, el demo `<PhoneMockup />` "Mirá adentro" y el eyebrow del hero.
- `/creditos-civicos` → redirect 308 (permanent) a `/soyvecino` en `next.config.js`. Preserva SEO acumulado y links externos previos.

**Pricing — removido de la landing (jun 2026):** decisión de producto — no se muestra tema precios en la landing. El costo de Créditos Cívicos es B2G consultivo (depende del municipio, se conversa tras el primer contacto) y el precio de Modo Comunidad aún no está cerrado; publicar una cifra a medias ancla la conversación en costo antes de que exista. El componente `components/PricingSection.jsx` queda **sin importar** (conservado por convención, reversible). Subsiste solo el gancho de valor **"6 meses gratis"** como propuesta (columna en `WhatIsCitixen` del Home, badge del catálogo en `/soygobierno`, frase en `EarlyAccess`) — eso es propuesta de valor, no una tabla de precios. La página standalone `/pricing` redirige 308 a `/soygobierno`.

**Páginas adicionales:**
- `/creditos-civicos` — página dedicada a explicar los Créditos Cívicos. Narrativa de 7 actos: hero emocional (con mockup iPhone + carrusel 3 proyectos) → puente conceptual → mecanismo de 5 pasos → precedente institucional → gobernanza → FAQ → CTA descarga app. Audiencia: ciudadano frustrado + intendente. Fotos en `/public/mockup/`.
- `/transparency-methodology` — documento público de metodología del Índice de Transparencia (CTI v1.0). En inglés, orientado a organismos multilaterales e investigadores.

---

## Reglas de comunicación

| Regla | Detalle |
|---|---|
| Tono | Institucional, claro, sobrio. No es una startup hype. |
| Vocabulario | "Créditos Cívicos" (no "tokens", no "Civic Coins"). "Participación ciudadana con peso real" o "plataforma de participación". NO usar "infraestructura de transparencia" ni "portal de transparencia" como descriptor primario. |
| Orden de revelación | **Participación con CC al frente.** Modo Comunidad como path alternativo, no como modo gratuito al que escalás. Transparencia es output del sistema, no propuesta de valor. |
| Audiencia primaria del Hero | **Vecinos del municipio.** El Hero les habla directo. |
| Comprador | Intendentes, secretarios de gobierno, jefes de gabinete (municipios 5.000 – 500.000 hab). Entran al Hero leyendo la promesa que pueden ofrecerle a sus vecinos. La sección WhatIsCitixen + form les habla de forma directa. |
| Qué NO decir | "Revolucionar", "empoderar", "disruptivo", "blockchain", "tokens", "cambiar el mundo". **Tampoco vender transparencia como hook ni posicionar Citixen como herramienta de cumplimiento ASAP** (decisión 31/05 — ver memoria `no-asap-compliance-positioning`). |
| CTA hero primary | "Ver cómo funciona" → `#gobierno` (lleva a WhatIsCitixen) |
| CTA hero secondary | "Soy gobierno →" → `#acceso` (form para que el intendente se auto-identifique y salte directo) |
| CTA formulario | "Quiero activar Mi Ciudad" — el form de `EarlyAccess` postea directo al backend `POST {NEXT_PUBLIC_API_URL}/api/government/register-light` (crea `MunicipalLead`). Tiene honeypot anti-spam. NO usa un endpoint propio de la landing. |
| CTA navbar | "Contactanos" → scroll a formulario |

---

## Stack técnico

- **Framework:** Next.js 14 (Pages Router)
- **Estilos:** CSS custom en `styles/globals.css` + `styles/methodology.css`. Variables CSS en `:root`.
- **Paleta de marca (Citixen Brand Blue — definida mayo 2026):**
  - `--primary: #0A3D91` (navy medio — solid color institucional sobre blanco)
  - `--primary-mid: #032C7A` (navy profundo — paso intermedio del gradiente)
  - `--primary-dark: #021B4E` (navy más profundo — navbar, fondos densos, top del gradiente)
  - `--secondary: #3C9ECE` (celeste — complementario; sin cambio)
  - `--accent: #F7794E` (coral — CTAs de alto impacto; sin cambio)
  - `--dark: #020202`, `--bg: #E7ECF0`, `--surface: #FFFFFF`
- **Gradiente oficial de marca:** `--citixen-gradient: linear-gradient(180deg, #021B4E 0%, #032C7A 45%, #0A3D91 100%)`. Vertical: navy más profundo arriba → navy medio abajo. Usado en TODOS los heroes (Hero index, ep-hero `/creditos-civicos`, ep-cta `/creditos-civicos`, methodology-hero `/transparency-methodology`).
- **Regla — navbar:** usa `--primary-dark` solid en default y scrolled. Esto da continuidad visual con el top del gradiente del Hero (también `#021B4E`) — la transición navbar→hero es invisible.
- **Fuente:** Inter (Google Fonts)
- **Animaciones:** IntersectionObserver + `.fade-up` + CSS keyframes
- **Deploy:** Vercel (`origin` remote)
- **Dominio:** `citixen.app` (ver corrección de dominios arriba, sep 2026)

---

## Formularios

La landing **no tiene API routes propias** (`pages/api/` fue eliminado en junio 2026 — el endpoint `/api/contact` quedó muerto y se borró).

Los dos formularios postean directo al backend Citixen (`NEXT_PUBLIC_API_URL`, default `https://citixen.app`):
- `EarlyAccess` (form de gobierno en `/#acceso`) → `POST /api/government/register-light` (crea `MunicipalLead`). Honeypot `_hp` anti-spam. Maneja 409 (duplicado) y 429 (rate limit). **Sin checkbox bloqueante de T&C (jun 2026):** como es un form de contacto/lead (no alta de cuenta), se reemplazó el checkbox obligatorio por una nota pasiva *"Al enviar tus datos, aceptás nuestra Política de Privacidad"*; el botón queda siempre habilitado y el submit manda `acceptedTermsAndConditions: true`. También se quitó el bloque "Vos mantenés el control".
- `/soyvecino` consume `GET /api/cities?search=` y `GET /api/cities/:slug/stats` para el buscador de ciudad.

**Variable de entorno en Vercel:**
- `NEXT_PUBLIC_API_URL` — URL del backend (opcional, default `https://citixen.app`)

---

## SEO

- **JSON-LD:** `SoftwareApplication` con info de la empresa y features
- **Open Graph:** título, descripción, imagen (pendiente asset real en `public/og-image.png`)
- **Favicon:** SVG en `public/favicon.svg`
- **Idioma:** `og:locale = es_AR`

---

## Decisiones cerradas

| Decisión | Regla |
|---|---|
| Nombre del producto | "Citixen" (nunca "Citixen App" ni "Plataforma Citixen") |
| Nombre de los créditos | "Créditos Cívicos" en español, "Civic Credits" en código. NUNCA "Civic Coins". |
| Modelo de adopción | 2 modos progresivos (Comunidad + Créditos Cívicos). Internamente `"light"` y `"full"` en BD. |
| Nombre del segundo modo | "Créditos Cívicos" en UI visible. NO "Economía Participativa" (término académico preexistente con carga ideológica). Renombrado mayo 2026. En código/BD sigue siendo `"full"`. |
| Pricing Modo Comunidad | Trial gratuito de 6 meses + licencia anual a precio accesible (monto pendiente de definir — mayo 2026). Durante el trial, sin tarjeta y sin límites operativos. No prometer "gratis para siempre" en copy ni metadata. |
| Target primario | Gobiernos locales (no ciudadanos, no ONGs, no empresas) |
| Hero visual | Mockup de portal web (no mockup de app móvil) |
| CTA primario | Self-service ("Activar Mi Ciudad"), no "Agendar demo" |
| Citixen Brand Blue | Gradiente vertical `#021B4E → #032C7A → #0A3D91` definido mayo 2026 como identidad de marca. Reemplaza los azules cielo más claros previos (`#3477C1` y derivados). Usado en heroes, navbar, buttons primary, mockups, accents. Variable: `--citixen-gradient`. |
| IA en la landing (decisión jun 2026 — **REVERTIDA por el GIRO**) | La decisión previa era "no mencionar IA todavía". **El giro jun 2026 la reabre:** la deliberación con IA es ahora protagonista (Home + `/soygobierno`). Condición de honestidad atada al giro: el **motor de deliberación debe entrar a producción con o antes** de que el copy salga live (camino 1 — "deployable en días"). La copy habla en presente ("Citixen lee cada respuesta"); si el deploy se corre, suavizar a futuro o esconder hasta el trigger. Framing obligatorio (no negociable): **asiste, nunca decide · cita su fuente · nada sin cita validado por máquina · ninguna voz se pierde**. Nunca hype, nunca "el algoritmo decide". Coherente con el guardrail raíz `la-ia-asiste-nunca-decide`. |

---

## Pendientes

| Item | Prioridad |
|---|---|
| ~~Asset real `public/og-image.png` (1200x630)~~ | ✅ Existe (`public/og-image.png`, 1200×630) |
| ~~Configurar Resend~~ | ✅ Obsoleto — el form postea al backend, la landing ya no envía emails |
| ~~Página de pricing~~ | ✅ Tema precios removido de la landing (jun 2026) — decisión de producto. `/pricing` redirige a `/soygobierno`. Solo subsiste el gancho "6 meses gratis" |
| Migrar `<img>` a `next/image` en `/soyvecino` y `CivicLoopScroll` (5 instancias) | Media — LCP/bandwidth |
| Versión en inglés de la landing | Baja — mercado inicial es Argentina |
| Analytics (Vercel Web Analytics) | Media |

**Componentes sin importar (conservados a propósito):** `CaseStudyBlock`, `SocialProof`, `Progressive`, `Scenarios`, `Differentiator`, `CivicCreditsExplainer`, `VecinoBanner`, `PricingSection`. No están en el flujo de ninguna página. Borrar si se confirma que no vuelven.
