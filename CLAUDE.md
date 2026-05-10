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

## Posicionamiento (mayo 2026)

**Citixen = Infraestructura de confianza para gobiernos locales.**

El producto tiene 2 modos de adopción progresiva:
- **Modo Comunidad:** Transparencia, participación y engagement ciudadano. Portal público, consultas, propuestas, índice de transparencia. Gratuito.
- **Modo Economía Participativa:** Todo lo anterior + Créditos Cívicos, financiamiento participativo y trazabilidad económica.

La landing comunica de arriba hacia abajo: primero transparencia y participación (fácil, seguro, sin riesgo), y después Créditos Cívicos como capa de activación avanzada.

---

## Estructura de la landing (actualizada mayo 2026)

| Orden | Componente | Objetivo |
|---|---|---|
| 1 | Navbar | Navegación + CTA "Contactanos" |
| 2 | Hero | "Lo que hacés ya existe. Solo falta que se vea." + mockup portal + proof points |
| 3 | Problem | Dolor expandido (4 bloques: PDFs, redes, portal, inauguraciones) |
| 4 | WhatIsCitixen | Tabla resumen de 2 modos (reemplaza SocialProof) |
| 5 | CommunityMode | 5 capacidades de Modo Comunidad como producto principal |
| 6 | CaseStudyBlock | Presidente Roca — "Ejemplo basado en información pública" |
| 7 | ParticipativeEconomy | Economía Participativa como evolución avanzada |
| 8 | CivicCreditsExplainer | CC explicados en 4 pasos + comparación con PP tradicional |
| 9 | HowToStart | 3 pasos simplificados |
| 10 | Trust | Fundador + empresa + seguridad + contacto |
| 11 | FAQ | 8 preguntas (incluye seguridad y financiamiento) |
| 12 | EarlyAccess | Formulario liviano (3 campos gobierno + 1 ciudadano) via /api/contact |
| 13 | Footer | Links + legal |

**Componentes removidos del flujo (archivos conservados):** SocialProof, Progressive, Scenarios, Differentiator.

**Página adicional:** `/transparency-methodology` — documento público de metodología del Índice de Transparencia (CTI v1.0). En inglés, orientado a organismos multilaterales e investigadores.

---

## Reglas de comunicación

| Regla | Detalle |
|---|---|
| Tono | Institucional, claro, sobrio. No es una startup hype. |
| Vocabulario | "Créditos Cívicos" (no "tokens", no "Civic Coins"). "Infraestructura de gestión municipal abierta" (no "plataforma de participación"). |
| Orden de revelación | Transparencia primero, CC al final. No asustar con complejidad. |
| Audiencia primaria | Intendentes, secretarios de gobierno, jefes de gabinete de municipios de 5.000 a 500.000 hab. |
| Audiencia secundaria | Ciudadanos que quieren que su ciudad lo use |
| Qué NO decir | "Revolucionar", "empoderar", "disruptivo", "blockchain", "tokens", "cambiar el mundo" |
| CTA hero | "Ver cómo funciona" (scroll a #comunidad) — baja fricción |
| CTA formulario | "Quiero activar Mi Ciudad" — 3 campos (municipio, provincia, email) via /api/contact |
| CTA navbar | "Contactanos" → scroll a formulario |

---

## Stack técnico

- **Framework:** Next.js 14 (Pages Router)
- **Estilos:** CSS custom en `styles/globals.css` + `styles/methodology.css`. Variables CSS en `:root`.
- **Paleta:** `--primary: #3477C1`, `--secondary: #3C9ECE`, `--accent: #F7794E`, `--dark: #020202`, `--bg: #E7ECF0`, `--surface: #FFFFFF`
- **Fuente:** Inter (Google Fonts)
- **Animaciones:** IntersectionObserver + `.fade-up` + CSS keyframes
- **Deploy:** Vercel (`origin` remote)
- **Dominio:** `citixen.org`

---

## API endpoint

`POST /api/contact` — Recibe formularios de la landing.

- Si `RESEND_API_KEY` está configurado: envía email de notificación a `CONTACT_EMAIL` (default: `contacto@citixen.org`)
- Si no: solo logea (modo desarrollo)
- Nunca falla al usuario — errores de envío se logean pero devuelven 200

**Variables de entorno necesarias en Vercel:**
- `RESEND_API_KEY` — API key de Resend para envío de emails
- `CONTACT_EMAIL` — Email destino de las notificaciones (opcional, default `contacto@citixen.org`)

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
| Modelo de adopción | 2 modos progresivos (Comunidad + Economía Participativa). Internamente `"light"` y `"full"` en BD. |
| Modo Comunidad gratuito | Sin límite de tiempo. No es freemium con fecha de vencimiento. |
| Target primario | Gobiernos locales (no ciudadanos, no ONGs, no empresas) |
| Hero visual | Mockup de portal web (no mockup de app móvil) |
| CTA primario | Self-service ("Activar Mi Ciudad"), no "Agendar demo" |

---

## Pendientes

| Item | Prioridad |
|---|---|
| Asset real `public/og-image.png` (1200x630) | Alta — necesita diseño |
| Configurar Resend + dominio verificado | Alta — para que el form funcione en prod |
| Página de pricing (cuando se defina modelo) | Media |
| Versión en inglés de la landing | Baja — mercado inicial es Argentina |
| Analytics (Vercel Web Analytics) | Media |
