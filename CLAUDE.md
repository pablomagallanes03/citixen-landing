# CLAUDE.md — citixen.app (web institucional)

Web institucional de Citixen en `citixen.app`. Rama `redesign/ciudad-que-escucha` (maqueta, 10-nov-2026), creada sobre `redesign/el-acuerdo`.
Hasta que se apruebe y se haga merge, producción sigue sirviendo `main` con el diseño anterior.

## Maqueta «Ciudad que escucha» (reemplaza la dirección de «El acuerdo» en la home)

Brief aprobado por Pablo (10-nov-2026): https://claude.ai/artifact/TwbATDBS3ZU1NEpbhg6MmK
- Citixen se presenta como plataforma de escucha ciudadana, inteligencia colectiva, participación, cocreación y gestión pública basada en conocimiento ciudadano. **No** como plataforma de reclamos ni de encuestas con seguimiento.
- Home nueva: `pages/index.js` + `components/landing/*` + `content/landing.mjs`. Segunda iteración (10-nov-2026), 9 secciones: hero con el mapa de toda la ciudad (`Hero.jsx` + `CityMap.jsx`, compartido con Lugares), problemas, Lugares (mapa por barrios + ficha permanente en pestañas: resumen, historial, necesidades, participación, acciones; cada pestaña dice si está disponible hoy o llega próximamente), inteligencia colectiva (proceso visible + tablero con temas, acuerdos y desacuerdos, voz minoritaria, evolución y trazabilidad hasta cada respuesta), de la escucha a la acción (participar, cocrear, actuar y mostrar en una sola sección), resumen de la plataforma, cómo empezar con las reglas, Créditos Cívicos y formulario.
- Se quitaron el recorrido de la plaza y las capacidades en pestañas (repetían Lugares y la sección de acción).
- Sin promesas absolutas: no «todo lo que necesita un gobierno», no «sin normas nuevas», no «lo publicado no se borra» (se dice qué queda registrado y cómo se corrige), y la protección de datos se describe como un intento con revisión humana, no como garantía.
- Las cifras de ejemplo del hero viven dentro de la figura del mapa, con su rótulo de datos ficticios.
- Revisión del 10-nov-2026: solo dos estados públicos («Disponible hoy» y «Próximamente») en todas las secciones; el hero dice «ordena los resultados» (no promete análisis con IA); «Empezá por un lugar» es la propuesta de piloto con CTA «Solicitar un piloto», sin gratuidad ni plazos; el formulario de la home usa los textos de piloto o demostración (`final.form`) y sigue creando un `MunicipalLead`.
- PDF para compartir: no usar `page.pdf()` sobre la página (Chrome convierte las fuentes variables en Type3 y algunos visores las deforman). Generar el PDF a partir de capturas del navegador.
- **Dos estados públicos:** disponible (sin rótulo, o «Disponible hoy» donde convive con lo que viene) y «Próximamente». La inteligencia colectiva se muestra solo como «Demostración conceptual» con datos ficticios.
- Nombres: «Lugares» y «CoLab» se mantienen; las capacidades de análisis usan nombres descriptivos (Temas que surgen, Acuerdos y desacuerdos, Voces minoritarias, Cómo cambia en el tiempo).
- Valle Norte es la ciudad ficticia de todos los ejemplos. Sin clientes, testimonios ni métricas reales. Ejemplo principal: una plaza; los lugares de salud se muestran sin análisis de IA externa.
- Home, `/plataforma`, `/primer-ciclo` y navegación en español, portugués de Brasil e inglés (11-nov-2026). `spanishFirst` (`lib/draft.mjs`) queda para contenido nuevo sin traducir: `check-content` frena la compilación de producción si un módulo lo usa.
- CTA principal: «Solicitar un piloto» (navegación, hero, «Empezá por un lugar», `/como-funciona`, `/plataforma`); «Pedir una demostración» es la alternativa. Mismo formulario (`MunicipalLead`), textos de piloto o demostración en `firstCycle.form`.
- **Empezar gratis (decisión de Pablo, 11-nov-2026; reemplaza «sin gratuidad» del 10-nov):** el botón principal del hero y el de la navegación dicen «Empezar gratis» y llevan al registro autónomo de municipios (`PANEL_SIGNUP_URL` en `lib/urls.mjs` → `https://panel.citixen.app/registrarse`). Plan gratuito sin vencimiento: hasta 5 Lugares, sin Créditos Cívicos, IA para 1.000 aportes por mes. «Solicitar un piloto» pasa a ser el segundo botón del hero y sigue en «Empezá por un lugar» y las páginas interiores. El panel está solo en español.
- «Plataforma» en la navegación y el pie lleva a `/plataforma` (reescrita por capacidad, con el estado de cada herramienta).
- Ronda de lanzamiento (11-nov-2026): Citixen se presenta como plataforma con implementación y acompañamiento en los primeros pilotos (no como consultora de encuestas); el piloto es la puerta de entrada, no el límite. Orden de la home: hero → problemas → piloto (lo que se implementa hoy) → de la escucha a la acción → Lugares e inteligencia colectiva (lo que se suma después, con «Próximamente» y un puente «Hoy ya podés») → plataforma → Créditos Cívicos → formulario.
- Hero sin capacidades futuras en el párrafo; en teléfonos se oculta la fila de cifras de la figura para que el mapa suba.
- Créditos Cívicos: «siguen los procedimientos administrativos y presupuestarios de tu municipio», nunca «se ejecutan».
- Imagen para redes por idioma: `public/og-image-{es,pt,en}.png` (1200 × 630), con `og:image:alt`. Se generan con capturas del hero real (mapa y logo del sitio) y las fuentes del sitio; `og-image.png` es copia de la versión en español.
- La barra «Maqueta» (abajo a la derecha, solo en vista previa) alterna cuatro titulares; `?titular=b` comparte uno.
- La regla «tampoco la síntesis de respuestas con IA» de «El acuerdo» queda reemplazada: la IA aparece como diferencial, rotulada como demostración conceptual hasta que se resuelvan sus condiciones de privacidad.
- `currency.local` (1 CC = 1 moneda local) se reemplazó por `currency.usd` (1 CC = 1 USD), alineado con la decisión del 4-nov-2026. Las cifras del simulador se calibraron con 1 CC = $1: no muestran equivalencias en dinero hasta recalibrarlas con aprobación de Pablo.

## Dominios

- `citixen.app`: este repo. Nginx en el droplet del backend (`164.92.218.144`) hace reverse-proxy a Vercel para toda ruta que no sea `/api/*`. TLS termina en el droplet.
- `citixen.app/api/*`: backend (otro repo), mismo dominio.
- `citixen.org`: `citixen-portal` (iniciativas ciudadanas y Mi Ciudad). No es este repo.
- `admin.citixen.app` / `government.citixen.app`: paneles (otros repos).
- `citixen.tech` fue dado de baja. No referenciarlo.
- El archivo `infra/nginx-citixen.conf` del backend está desactualizado respecto del servidor real. No usarlo como referencia del proxy.

## Dirección aprobada

Dirección creativa «El acuerdo»: *El gobierno habilita. La ciudadanía decide. Lo decidido se cumple.*
- Créditos Cívicos son el diferenciador y el centro. Opiná, Propuestas, Mi Ciudad, comunicación institucional, panel y apps tienen presencia, sin catálogo.
- El Home convierte gobiernos y lo entiende cualquier vecino. Los vecinos tienen `/vecinos`.
- Conversión: demostración y acompañamiento del primer ciclo. **No** prometer documentos jurídicos ni borradores de normas.
- **Kiterium no aparece en esta web.** Tampoco la síntesis de respuestas con IA.
- Sin precios. Sin métricas de adopción. Toda cifra de ejemplo va etiquetada como ilustrativa o ficticia.
- Vocabulario: «Créditos Cívicos» (nunca tokens ni Civic Coins). Nunca «devolución», «reembolso», «cashback», «empoderar», «revolucionar», «garantizado».

## Stack

- Next.js 14.2 (Pages Router), React 18. Se evaluó App Router y se descartó: Pages Router trae enrutamiento por idioma nativo y conserva las páginas legales sin tocarlas.
- Estilos: `styles/globals.css` (tokens y base) + CSS Modules por componente. `styles/legal.css` y `styles/methodology.css` son de las páginas que se conservan.
- Fuentes con `next/font/local` desde `styles/fonts/` (variables, subconjunto latino, OFL): Schibsted Grotesk (titulares) e Inter (texto). No usar `next/font/google`: la descarga de Schibsted Grotesk falla al compilar en Vercel (nov 2026). La tipografía de titulares está pendiente de confirmación.
- Sin dependencias nuevas.

## Páginas y rutas

| Ruta | Contenido |
|---|---|
| `/` | Home: hero, simulador, tres tiempos, reglas, diferencia, pruebas, plataforma, vecinos, primer ciclo |
| `/como-funciona` | Créditos Cívicos en detalle + preguntas de gobiernos |
| `/plataforma` | Capacidades complementarias |
| `/vecinos` | Para ciudadanos: buscador de ciudad, app, iniciativas en citixen.org |
| `/primer-ciclo` | Conversión: pasos + formulario de demostración |
| `/privacy`, `/terms`, `/account-deletion`, `/child-safety`, `/transparency-methodology` | **Se conservan con sus rutas y contenido.** Solo en español |

Redirecciones (`next.config.js`): `/creditos-civicos` → `/como-funciona`, `/soyvecino` → `/vecinos`, `/soygobierno`, `/municipios`, `/pricing` → `/primer-ciclo` (permanentes); `/caso-de-estudio` → `/primer-ciclo` (temporal). Las páginas legales en `/pt/*` y `/en/*` redirigen a la versión en español (temporal).

Las URLs legales están declaradas en Google Play y App Store: no cambiarlas.

## Idiomas

- `es` (por defecto, sin prefijo), `pt` (`/pt/...`), `en` (`/en/...`). Configuración en `next.config.js` (`i18n`) y `lib/i18n-config.mjs`.
- Todo texto vive en `content/*.mjs` con la forma `{ es, pt, en }` y la misma estructura en los tres idiomas. Los componentes leen con `useContent(modulo)`.
- Portugués de Brasil (`pt-BR`). Las versiones en portugués e inglés se publican sin revisión nativa (decisión de Pablo, 11-nov-2026). No decir que tuvieron revisión nativa.

## Registro de afirmaciones (protección del despliegue)

La web comunica el modelo completo de Créditos Cívicos V2, que se desarrolla en otro chat. Para que producción nunca afirme algo que todavía no existe:

- `content/claims.mjs`: estado de cada capacidad (`emission.modalities`, `limits.general`, `execution.municipal`, `currency.usd`, `backing.budget`).
- En el contenido, un texto condicionado se escribe `gated(id, textoCompleto, textoVerificado)`. `textoVerificado` describe lo que hoy es cierto; puede ser `null` para ocultar el elemento.
- **Producción** muestra el texto completo solo si la afirmación está `verified`. **Preview y desarrollo** muestran los textos completos, con un aviso visible.
- **Pasar una afirmación a `verified` requiere la aprobación explícita del dueño del producto (Pablo)**, después de revisar la evidencia técnica y funcional de V2. Registrar `approvedBy` y `approvedAt`.
- `npm run build` ejecuta `scripts/check-content.mjs` antes de compilar. Falla si falta un idioma, si las estructuras no coinciden, si un texto condicionado no tiene versión verificada o si una afirmación está `verified` sin aprobación registrada.

## Entorno (`SITE_ENV`)

`next.config.js` lo resuelve al compilar desde `VERCEL_ENV`:

| Entorno | Afirmaciones | Formulario | Indexación |
|---|---|---|---|
| `production` (Vercel producción) | Solo verificadas | Envía de verdad | Sí |
| `preview` (Vercel preview) | Completas + aviso | Simula el envío | `noindex` |
| `development` (`next dev`) | Completas + aviso | Simula el envío | `noindex` |
| `local-build` (sin Vercel) | Solo verificadas | Simula el envío | `noindex` |

## Formularios y backend

- Formulario de piloto o demostración (`components/DemoForm.jsx`) → `POST /api/government/register-light` (crea `MunicipalLead`). Desde el 11-nov-2026 pide solo nombre, email institucional, municipio u organismo, país e interés (`pilot`/`demo`), y envía el idioma de la página (`locale`) y el honeypot `_hp`. Maneja 409 y 429. `?interes=demo` preselecciona la demostración.
- Usa el contrato del backend desplegado el 11-nov-2026 (PR #20 del backend: tipo, provincia, ciudad y cargo opcionales; `interest` y `locale`; email de confirmación en el idioma del pedido). El panel superadmin muestra interés e idioma.
- Propuesta de actualización de la política de privacidad para estos datos: `docs/propuesta-privacidad-formulario-comercial.md` (pendiente de revisión jurídica).
- Buscador de ciudades (`components/CitySearch.jsx`) → `GET /api/cities?search=` y `GET /api/cities/:slug/stats`.
- Las llamadas son relativas (`/api/...`). En producción Nginx las envía al backend; en preview y desarrollo lo hace la regla `rewrites` de `next.config.js`, que evita el bloqueo de CORS.

## Sistema visual

- **Las cuatro piezas de la X** (`components/brand/Pieces.jsx`), con geometría tomada de `components/Logo.jsx`. Papel fijo de cada pieza: arriba a la derecha el gobierno, abajo a la izquierda la ciudadanía (**siempre coral, la única coral en pantalla**), arriba a la izquierda el proyecto, abajo a la derecha el cumplimiento. `state="apart"` (proceso abierto) / `"together"` (acuerdo cumplido); `highlight` destaca un papel.
- Color: noche `#021B4E`, navy `#0A3D91`, coral `#F7794E` (≤ 3 % de la superficie: decisión ciudadana y CTA principal), blanco y niebla. Sin celeste, verde ni violeta en las páginas nuevas.
- **El texto sobre coral es navy noche**, nunca blanco (contraste AA).
- Sin fotos de stock ni imágenes generadas por IA.
- Movimiento: `--ease` 600–900 ms. Todo respeta `prefers-reduced-motion`. Las animaciones de aparición solo se activan con JavaScript.
- El logo sobre fondo claro pierde dos piezas (son blancas). Hoy solo se usa sobre noche. Pendiente: definir una versión para fondos claros.

## Simulador

- Motor puro y probado: `lib/simulator/engine.mjs` (límites, billetera, límite general con excepciones, proyección, resultados) y `lib/simulator/city.mjs` (Valle Norte, ciudad argentina ficticia, pesos, cifras ilustrativas).
- El Home muestra la escena inicial en versión estática (`components/home/SimulatorPreview.jsx`). **La experiencia interactiva se integra cuando se valide el prototipo navegable que se desarrolla por separado.** No duplicar ese trabajo.
- El simulador no llama a la red ni guarda nada.

## Comandos

```bash
npm run dev             # desarrollo (modo preview de contenido)
npm test                # pruebas unitarias (motor del simulador + registro de afirmaciones)
npm run check:content   # verificación de contenido
npm run build           # verificación + sitemap + compilación
npx next lint
```

## Despliegue

- **Nada entra a `main` sin autorización explícita del dueño del producto.** Push a `main` = producción.
- La rama `redesign/el-acuerdo` se revisa en una vista previa privada de Vercel (Deployment Protection).
- Antes del corte a producción: confirmar a qué despliegue apunta el proxy de Nginx (configuración del servidor, solo lectura) y tener el simulador integrado.
- Rollback: Vercel permite volver al despliegue anterior al instante.

## Pendientes

| Item | Prioridad |
|---|---|
| Integrar el simulador interactivo tras validar el prototipo (y recalibrar cifras a 1 CC = 1 USD) | Alta |
| Prueba en un dispositivo físico (iOS y Android) | Alta, antes de producción |
| Política de privacidad: aplicar la propuesta de `docs/` tras la revisión jurídica (preguntas al abogado: https://claude.ai/artifact/D5c2tbtt3SDXyYf4foqZGF) | Alta, antes de producción |
| Política de privacidad solo en español: una revisión preliminar con IA (no jurídica) la considera bloqueante para publicar pt/en. Decidir con el abogado | Alta |
| `content/home.mjs` y `components/home/` quedaron sin uso (home de «El acuerdo») | Baja |
| Revisión nativa de portugués e inglés (se publican sin ella por decisión de Pablo, 11-nov-2026) | Baja |
| Versión del logo para fondos claros | Media |
| Confirmar tipografía de titulares (Schibsted Grotesk o licencia) | Media |
| `www.citixen.app` sirve contenido duplicado: redirigir al dominio principal en Nginx (requiere aprobación) | Media |
