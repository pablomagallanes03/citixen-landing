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

## Estructura de la landing

| Orden | Componente | Objetivo |
|---|---|---|
| 1 | Navbar | Navegación + CTA "Activar mi portal" |
| 2 | Hero | Hook + mockup de portal + proof points |
| 3 | Problem | Validar el dolor (invisibilidad de gestión) |
| 4 | SocialProof | Strip de confianza mínima |
| 5 | Progressive | Los 2 modos con resultado + esfuerzo |
| 6 | Scenarios | 4 escenarios identificables por tipo de municipio |
| 7 | Differentiator | Tabla vs alternativas (portal, encuestas, PP) |
| 8 | HowToStart | 3 pasos con tiempos estimados |
| 9 | FAQ | 6 objeciones frecuentes del decisor público |
| 10 | EarlyAccess | Formulario gobierno (primario) + ciudadano |
| 11 | Footer | Links + legal |

**Página adicional:** `/transparency-methodology` — documento público de metodología del Índice de Transparencia (CTI v1.0). En inglés, orientado a organismos multilaterales e investigadores.

---

## Reglas de comunicación

| Regla | Detalle |
|---|---|
| Tono | Institucional, claro, sobrio. No es una startup hype. |
| Vocabulario | "Créditos Cívicos" (no "tokens", no "Civic Coins"). "Infraestructura de confianza" (no "plataforma de participación"). |
| Orden de revelación | Transparencia primero, CC al final. No asustar con complejidad. |
| Audiencia primaria | Intendentes, secretarios de gobierno, jefes de gabinete de municipios de 5.000 a 500.000 hab. |
| Audiencia secundaria | Ciudadanos que quieren que su ciudad lo use |
| Qué NO decir | "Revolucionar", "empoderar", "disruptivo", "blockchain", "tokens", "cambiar el mundo" |
| CTA principal | "Activar mi portal" (no "Agendar demo" ni "Contactar ventas") |

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
| CTA primario | Self-service ("Activar mi portal"), no "Agendar demo" |

---

## Pendientes

| Item | Prioridad |
|---|---|
| Asset real `public/og-image.png` (1200x630) | Alta — necesita diseño |
| Configurar Resend + dominio verificado | Alta — para que el form funcione en prod |
| Página de pricing (cuando se defina modelo) | Media |
| Versión en inglés de la landing | Baja — mercado inicial es Argentina |
| Analytics (Vercel Web Analytics) | Media |
