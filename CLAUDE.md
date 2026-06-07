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
| 1 | Navbar | "Soy gobierno" (`/soygobierno`), "Soy vecino" (`/soyvecino`), "Pricing", CTA "Contactanos" |
| 2 | Hero | Sin eyebrow. H1 al vecino: **"Lo que tus vecinos deciden, la ciudad lo construye."** (H1 fijo — el `RotatingWord` fue retirado). Subhead explica el mecanismo CC + control municipal. 3 proof points: "Vinculante" / "Proyectos reales" / "Con control municipal". CTAs: "Activá Citixen en tu ciudad" (→`#acceso`) y "Ver cómo funciona →" (→`#gobierno`). **Visual `hero-visual` (arco decisión → obra, reemplazó el mockup-wallet en jun 2026):** tarjeta de proyecto ejecutado "Plaza San Martín — Barrio Norte" con foto (`/mockup/plaza.png`, LCP `priority`), chip de categoría, 3 métricas (vecinos que priorizaron / CC asignados / % meta financiada), timeline de 4 pasos del ciclo real (priorizado → aprobado por el municipio → en obra → inaugurada) y footer con "vecinos decidiendo" + chip "Pack de evidencia". Cards de fondo desenfocadas: "Ejecutado" / "Recibiendo apoyo". Challenger A/B del H1 archivado en comentario. **Vocabulario: nunca "votar/votación" — los vecinos priorizan/asignan CC.** |
| 3 | Problem | Dolor del vecino sin peso: "Pagás impuestos toda tu vida. Nunca decidiste sobre uno solo." 4 bloques (consultas no vinculantes, audiencias express, presupuestos participativos simbólicos, programas sin preguntar). Turn: "Citixen le da peso real **antes** de que se vote, no después". |
| 4 | WhatIsCitixen | Tabla de 2 modos (`#gobierno` anchor). **Columna izquierda: Créditos Cívicos** ("Que tus vecinos decidan" + label "Producto principal"). **Columna derecha: Modo Comunidad** ("Si tu ciudad todavía no está lista" + "Gratis 6 meses"). |
| 5 | CommunityMode | **Path alternativo** — eyebrow "Path alternativo" + subtítulo "Si tu ciudad todavía no puede activar Créditos Cívicos…". 4 capacidades core + 2 optional. CTA "Activar Modo Comunidad". |
| 6 | HowToStart | 3 pasos simplificados |
| 7 | Trust | Seguridad + contacto directo |
| 8 | FAQ | 8 preguntas (incluye link a /soyvecino) |
| 9 | EarlyAccess | Formulario gobierno (solo una columna, ancho protagonista). El acceso del ciudadano se movió a `/soyvecino`. |
| 10 | Footer | Links + legal |

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
- `/soyvecino` — landing dedicada al vecino. Renombrada desde `/creditos-civicos` (mayo 2026). Mantiene la narrativa de 7 actos original con eyebrow nuevo "Sos vecino" en el hero.
- `/soygobierno` — landing dedicada al intendente (junio 2026). Página espejo de `/soyvecino`, gobierno-first: el comprador ya se auto-seleccionó, así que lidera con "qué ganás vos" (beneficios al gobierno) sin contaminar el frame vecino-first de la home. Reutiliza el sistema de clases `ep-*` (paleta navy, sin CSS nuevo salvo `.ep-hero-actions` / `.ep-hero-link`). 9 actos: promesa → problema del gobierno → qué gana → por qué es seguro → control vs respaldo → 2 modos → implementación → FAQ del intendente → CTA al form `/#acceso`. Transparencia se mantiene como output, no como hook (coherente con `no-asap-compliance-positioning`). El nav "Soy gobierno" apunta acá (antes era ancla `/#gobierno`).
- `/creditos-civicos` → redirect 308 (permanent) a `/soyvecino` en `next.config.js`. Preserva SEO acumulado y links externos previos.

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
- `EarlyAccess` (form de gobierno en `/#acceso`) → `POST /api/government/register-light` (crea `MunicipalLead`). Honeypot `_hp` anti-spam. Maneja 409 (duplicado) y 429 (rate limit).
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
| ~~Página de pricing~~ | ✅ Existe (`/pricing`) |
| Migrar `<img>` a `next/image` en `/soyvecino` y `CivicLoopScroll` (5 instancias) | Media — LCP/bandwidth |
| Versión en inglés de la landing | Baja — mercado inicial es Argentina |
| Analytics (Vercel Web Analytics) | Media |

**Componentes sin importar (conservados a propósito):** `CaseStudyBlock`, `SocialProof`, `Progressive`, `Scenarios`, `Differentiator`, `CivicCreditsExplainer`, `VecinoBanner`. No están en el flujo de ninguna página. Borrar si se confirma que no vuelven.
