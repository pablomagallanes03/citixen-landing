# CLAUDE.md — citixen.app (web institucional)

Web institucional de Citixen en `citixen.app`. Rediseño «El acuerdo» (nov 2026), rama `redesign/el-acuerdo`.
Hasta que se apruebe y se haga merge, producción sigue sirviendo `main` con el diseño anterior.

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
- Fuentes con `next/font` (alojadas en el sitio): Schibsted Grotesk (titulares) e Inter (texto). La tipografía de titulares está pendiente de confirmación.
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
- Portugués de Brasil (`pt-BR`). Las traducciones al portugués y al inglés necesitan revisión de un hablante nativo antes del lanzamiento.

## Registro de afirmaciones (protección del despliegue)

La web comunica el modelo completo de Créditos Cívicos V2, que se desarrolla en otro chat. Para que producción nunca afirme algo que todavía no existe:

- `content/claims.mjs`: estado de cada capacidad (`emission.modalities`, `limits.general`, `execution.municipal`, `currency.local`, `backing.budget`).
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

- Formulario de demostración (`components/DemoForm.jsx`) → `POST /api/government/register-light` (crea `MunicipalLead`). Envía los 8 campos que exige el validador del backend, con honeypot `_hp`. Maneja 409 y 429.
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
| Integrar el simulador interactivo tras validar el prototipo | Alta |
| Revisión nativa de portugués e inglés | Alta |
| Imagen para redes (`public/og-image.png` es del diseño anterior) | Media |
| Versión del logo para fondos claros | Media |
| Confirmar tipografía de titulares (Schibsted Grotesk o licencia) | Media |
| `www.citixen.app` sirve contenido duplicado: redirigir al dominio principal en Nginx (requiere aprobación) | Media |
| Revisar el email automático de confirmación del backend para que hable de «demostración» | Media |
