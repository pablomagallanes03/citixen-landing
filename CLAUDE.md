# CLAUDE.md — Citixen Landing Page

## Qué es este repo

Landing page de Citixen en `citixen.org`. Comunica el producto a gobiernos locales y ciudadanos.
Deploy: Vercel. Framework: Next.js 14 + React 18. Estilos: CSS custom con variables (no Tailwind classes en components).

**Dominios:**
- `citixen.org` — landing institucional (este repo)
- `citixen.tech` — redirige 301 a `citixen.org` (configurar en Vercel)
- `admin.citixen.app` / `government.citixen.app` — paneles operativos (otros repos)
- `citixen.app` — backend API (otro repo)

---

## Posicionamiento (revisado junio 2026 — decisión 31/05)

**Citixen = participación ciudadana con peso real en municipios locales.**

El centro del producto es **el ciudadano con peso en su municipio**, no el municipio con un dashboard de transparencia. La transparencia fiscal es **piso del producto** (commodity técnica), no el hook de venta. El moat es: Créditos Cívicos + ciclo de aprobación + participación vinculante.

El producto tiene 2 modos de adopción:
- **Créditos Cívicos** (interno: `full`): participación con CC, financiamiento participativo, ciclo de aprobación municipal. **Modo protagonista del producto.**
- **Modo Comunidad** (interno: `light`): consultas, propuestas, portal público y reporte mensual. Sin CC. Puerta de entrada para municipios que todavía no están listos para activar CC. Trial 6 meses gratuito.

### Cómo se traduce en la landing
- El Hero le habla **al vecino**, no al intendente. El intendente lee la promesa que él puede ofrecerle a su ciudad.
- El relato lleva CC al frente, no atrás. Comunidad aparece después como path alternativo (no como modo gratuito al que escalás).
- Transparencia NO se vende como propuesta de valor. Se menciona como output del sistema.
- ASAP / índice de transparencia: solo como prueba externa al hablar con municipios que ya lo cumplen — *"ASAP mide qué se publica. Citixen mide qué se decide."*

Ver memorias del proyecto raíz: `no-asap-compliance-positioning`, `portal-four-functions`.

---

## Estructura de la landing (revisada junio 2026)

| Orden | Componente | Objetivo |
|---|---|---|
| 1 | Navbar | "Soy vecino" (`/soyvecino`), "Soy gobierno" (`/soygobierno`), CTA "Contactanos". **Orden vecino-first + "Pricing" removido del navbar (jun 2026)** — pricing vive solo al fondo de `/soygobierno` (`#pricing`). El link del footer y la página standalone `/pricing` se removieron (jun 2026); `/pricing` redirige 308 a `/soygobierno#pricing`. |
| 2 | Hero | Sin eyebrow. H1 al vecino con **palabra rotativa**: **"Pagás _[impuestos / multas / tasas]_, ahora también decidí adónde van."** (`RotatingWord` **reactivado jun 2026** — ciclo de 3 palabras, clases `.rotating-word`/`.rotating-word__active`, ~2,2s, fade-up, respeta `prefers-reduced-motion`; SSR muestra "impuestos"; el `<title>` SEO mantiene "Pagás impuestos. Decidís dónde van."). Subhead en **eje participación/relación, SIN mencionar Créditos Cívicos** (decisión jun 2026 — el Hero corrió del mecanismo CC a la relación gobierno-vecino): *"Citixen cambia tu relación con tu ciudad: participás de las decisiones, priorizás los proyectos que importan y ves cómo se hacen realidad."* 3 proof points: "Vinculante" / "Proyectos reales" / "Con control municipal". CTAs: "Activá Citixen en tu ciudad" (→`#acceso`) y "Ver cómo funciona →" (→`#gobierno`). **Visual `hero-visual` (arco decisión → obra, reemplazó el mockup-wallet en jun 2026):** tarjeta de proyecto ejecutado "Plaza San Martín — Barrio Norte" con foto (`/mockup/plaza.png`, LCP `priority`), chip de categoría, 3 métricas (vecinos que priorizaron / CC asignados / % meta financiada), timeline de 4 pasos del ciclo real (priorizado → aprobado por el municipio → en obra → inaugurada) y footer con "vecinos decidiendo" + chip "Pack de evidencia". Cards de fondo desenfocadas: "Ejecutado" / "Recibiendo apoyo". Challenger A/B del H1 archivado en comentario. **Vocabulario: nunca "votar/votación" — los vecinos priorizan/asignan CC.** |
| 3 | WhatIsCitixen | Tabla de 2 modos (`#gobierno` anchor). Izquierda **Créditos Cívicos** (producto principal), derecha **Modo Comunidad** ("6 meses gratis"). |
| 4 | TwoPaths | **"Dos caminos" (nuevo jun 2026)** — routing por audiencia: tarjeta vecino → `/soyvecino`, tarjeta gobierno → `/soygobierno`. Reemplaza las secciones de detalle que se repetían en las páginas dedicadas. Clases `.two-paths-*`. |
| 5 | EarlyAccess | Formulario gobierno (una columna). Bloque "Vos mantenés el control" removido jun 2026. |
| 6 | Footer | Links + legal |

> **Home simplificado (jun 2026 — "menos es más", feedback con ciudadanos):** la home pasó de 9 a 4 secciones de contenido (Hero → WhatIsCitixen → TwoPaths → EarlyAccess). Se removieron del render **Problem, CommunityMode, HowToStart, Trust y FAQ** porque su contenido ya vive en las páginas dedicadas (`/soyvecino`, `/soygobierno`). Los componentes quedan en `components/` sin importar (reversible).

> **Nota (jun 2026):** `ParticipativeEconomy` y `PricingSummary` figuraban en el flujo de esta tabla pero **no se importan en `index.js`** ni existen como componentes. La home real es exactamente la secuencia de arriba (ver `pages/index.js`).

**Componentes removidos del flujo (archivos conservados):** SocialProof, Progressive, Scenarios, Differentiator, CivicCreditsExplainer, CaseStudyBlock, **VecinoBanner**.

**VecinoBanner** se removió en junio 2026: con el Hero hablándole directo al vecino, la banda transicional dejó de tener sentido. El acceso a `/soyvecino` sigue disponible desde la navbar.

**Decisión narrativa (junio 2026):** la landing es **vecino-first en el Hero**. El intendente entra leyendo la promesa que él puede ofrecerle a sus vecinos. No hay separación de audiencias por scroll ni por card lateral — el frame unifica ambos lectores desde el H1. La sección WhatIsCitixen + EarlyAccess hablan al intendente directo cuando él baja al detalle de cómo activarlo.

**Rutas y SEO:**
- `/` — home (citizen-first, intendente lee como audiencia que compra esta promesa)
- `/soyvecino` — landing dedicada al vecino con narrativa de 7 actos
- `/creditos-civicos` → redirect 308 a `/soyvecino`

**Rutas y SEO:**
- `/` — home (vecino-first en el Hero; el intendente entra leyendo la promesa que puede ofrecer)
- `/soyvecino` — landing dedicada al vecino. Renombrada desde `/creditos-civicos` (mayo 2026). Mantiene la narrativa de 7 actos original. El hero va **sin eyebrow** (se retiró "Sos vecino" en jun 2026 — el formato etiqueta-conversacional leía a IA; misma decisión que en `/soygobierno`). **Cierre reenfocado 100% al vecino (jun 2026):** se eliminaron las 2 secciones de gobierno del cuerpo (ACTO 5 — "el municipio no pierde control / gana respaldo" + band "implementación sin secretos") por no dirigirse al vecino. El CTA final dejó de ser dual: ahora es header motivacional ("Las ciudades no cambian solas. Las cambian sus vecinos.") + strip **"Todo lo que vas a poder hacer"** (6 beneficios: decidir sobre proyectos / opinar y proponer / impulsar proyectos sociales e iniciativas ciudadanas / seguir resultados / avisos del municipio / mi impacto) + **una sola tarjeta centrada** (`ep-cta-dual--single`): el buscador `CitySearchCTA`, que ya trae su propio botón "Descargar en Google Play" y los mensajes por estado (activa / pre-adopción / en activación). La tarjeta de descarga separada se **unificó** con el buscador (jun 2026 — era redundante). Clases nuevas en globals.css: `ep-cta-perks`/`ep-cta-perk`.
- `/soygobierno` — landing dedicada al intendente. **Reestructurada (jun 2026) de página defensiva a catálogo de herramientas:** el municipio entiende en detalle TODO lo que Citixen le da, sin secciones de riesgo/implementación/FAQ ("si tienen dudas, que escriban"). Estructura actual: Hero (sin eyebrow — se retiró por leer a IA) → **catálogo en 3 bloques de 6 tarjetas c/u** (Modo Comunidad · Créditos Cívicos · Para tu equipo, con badge por modo) → banda navy "Pack de evidencia" → **`<PricingSection />`** (los 2 planes, embebido al fondo — jun 2026) → cierre "¿dudas? escribinos" + form `EarlyAccess` (`/#acceso` → `MunicipalLead`). La barra de disponibilidad de 7 países se removió (jun 2026). El nav "Soy gobierno" apunta acá. El hero conserva el arco de proyecto `hero-visual`/`hv-*` (vocabulario "Créditos Cívicos"). **H1 gobierno-first (jun 2026):** *"Convertí a tus vecinos en aliados de tu gestión."* + subhead *"Citixen convierte el reclamo en participación, y la participación en respaldo a tu gestión…"* — el título vende el beneficio del **intendente** (legitimidad / respaldo a su gestión), no el del vecino. Reemplazó el "Tu ciudad paga impuestos / dale peso a tus vecinos" (beneficiaba al ciudadano). CSS scoped en `<style jsx>` con clases `sg-*` (`sg-tools`/`sg-block`/`sg-tool`/`sg-evi`/`sg-proof`), reusa la paleta navy + variables globales — **cero CSS global nuevo**. Transparencia sigue como output, no como hook (coherente con `no-asap-compliance-positioning`). **Eliminado en la reestructura:** secciones "Por qué es seguro", "Control vs respaldo", "Empezás sin riesgo", "Implementación sin secretos", FAQ del intendente, el demo `<PhoneMockup />` "Mirá adentro" y el eyebrow del hero.
- `/creditos-civicos` → redirect 308 (permanent) a `/soyvecino` en `next.config.js`. Preserva SEO acumulado y links externos previos.

**Pricing — componente compartido (jun 2026):** los 2 planes viven en **`components/PricingSection.jsx`** (fuente única de datos: `tiers`). Lo usa el fondo de `/soygobierno` (`headingLevel="h2"`, ancla `#pricing`). La página standalone `/pricing` se eliminó (jun 2026, redirige a `/soygobierno#pricing`); su FAQ de precios se descartó. **Modo Comunidad** ya no dice "Gratis" sino **"6 meses gratis"** + "Después, licencia anual accesible" (regla: no prometer gratis para siempre). Features incluyen el canal de comunicación oficial (§38), mapa, comentarios; se quitó "Índice de transparencia verificable" (no se vende transparencia como hook).

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
- **Dominio:** `citixen.org`

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

---

## Pendientes

| Item | Prioridad |
|---|---|
| ~~Asset real `public/og-image.png` (1200x630)~~ | ✅ Existe (`public/og-image.png`, 1200×630) |
| ~~Configurar Resend~~ | ✅ Obsoleto — el form postea al backend, la landing ya no envía emails |
| ~~Página de pricing~~ | ✅ Embebida al fondo de `/soygobierno#pricing` (la standalone `/pricing` se eliminó jun 2026, redirige) |
| Migrar `<img>` a `next/image` en `/soyvecino` y `CivicLoopScroll` (5 instancias) | Media — LCP/bandwidth |
| Versión en inglés de la landing | Baja — mercado inicial es Argentina |
| Analytics (Vercel Web Analytics) | Media |

**Componentes sin importar (conservados a propósito):** `CaseStudyBlock`, `SocialProof`, `Progressive`, `Scenarios`, `Differentiator`, `CivicCreditsExplainer`, `VecinoBanner`. No están en el flujo de ninguna página. Borrar si se confirma que no vuelven.
