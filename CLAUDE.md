# CLAUDE.md — Citixen (Guía Estratégica, Producto y Comunicación)

---

## 🧠 ESENCIA DEL PROYECTO

Citixen no es solo una plataforma tecnológica.

Es una infraestructura digital que redefine la relación entre ciudadanos, gobiernos locales y recursos públicos.

Su propósito es permitir que los ciudadanos participen de forma estructurada, transparente y medible en la asignación de una parte de los recursos públicos que generan a través de sus impuestos.

---

## 🎯 VISIÓN

Citixen es una plataforma digital diseñada para transformar la relación entre ciudadanos y gobiernos locales mediante un sistema transparente de participación en el uso de los recursos públicos.

El objetivo es:
- aumentar la transparencia fiscal  
- incentivar la participación ciudadana  
- mejorar la eficiencia en la asignación de recursos públicos  

A largo plazo, Citixen aspira a convertirse en una plataforma global utilizada por municipios para fortalecer la democracia participativa.

---

## 🌍 PROBLEMA GLOBAL

Existe una desconexión estructural entre:
- los ciudadanos que pagan impuestos  
- y las decisiones sobre cómo se utilizan esos recursos  

Esto genera:
- percepción de ineficiencia  
- falta de transparencia  
- desconfianza institucional  
- baja participación ciudadana  

Al mismo tiempo:
Los gobiernos locales tienen dificultades para identificar y financiar iniciativas sociales alineadas con necesidades reales.

---

## 🚀 LA SOLUCIÓN: CITIXEN

Citixen introduce un sistema donde:

- los ciudadanos reciben créditos digitales al pagar impuestos  
- estos créditos se denominan **Civic Coins**  
- los ciudadanos asignan estos créditos a proyectos sociales dentro de su ciudad  

Cuando un proyecto alcanza su objetivo:
- solicita financiamiento  
- el municipio valida  
- y realiza el pago con recursos públicos ya recaudados  

---

## 🧩 ACTORES DEL ECOSISTEMA

**Ciudadanos**
- Pagan impuestos municipales  
- Reciben Civic Coins  
- Asignan recursos a proyectos  

**Proyectos Sociales**
- Publican iniciativas con impacto social  
- Reciben apoyo mediante Civic Coins  

**Municipios**
- Verifican pagos de impuestos  
- Aprueban proyectos  
- Autorizan transferencias de fondos  

---

## ⚙️ FUNCIONAMIENTO DEL SISTEMA

1. El ciudadano paga un impuesto municipal  
2. Solicita Civic Coins en la app  
3. El municipio verifica el pago  
4. Se emiten Civic Coins  
5. El ciudadano asigna sus créditos  
6. Los proyectos acumulan apoyo  
7. El municipio ejecuta el pago  

---

## 💰 ECONOMÍA DEL SISTEMA

Los Civic Coins:

- Son créditos digitales internos  
- Representan valor público asignable  
- No son transferibles entre ciudadanos  
- No pueden venderse  
- Tienen fecha de expiración  

Solo pueden utilizarse dentro del ecosistema Citixen.

---

## 📊 TRANSPARENCIA

Citixen integra un sistema de visualización pública:

- créditos emitidos  
- proyectos financiados  
- fondos transferidos  
- estado de ejecución  

La transparencia se comunica como:
- trazabilidad  
- seguimiento  
- resultados visibles  

---

## 🏗️ ARQUITECTURA TECNOLÓGICA

Componentes principales:

- Frontend: interfaz de usuarios  
- Backend: lógica del sistema  
- Base de datos: almacenamiento  

No requiere blockchain en su fase inicial.

---

## ⚖️ POSICIONAMIENTO

Citixen debe percibirse como:

- infraestructura cívica digital  
- herramienta de gobernanza moderna  
- sistema complementario al modelo actual  

Nunca como:
- movimiento político  
- plataforma activista  
- solución radical o anti-sistema  

---

## ❌ QUÉ NO ES CITIXEN

- No reemplaza al Estado  
- No es un sistema de votación política  
- No es populismo digital  
- No es una herramienta de protesta  

---

## 🧭 TONO DE COMUNICACIÓN

Debe ser:

- institucional  
- claro  
- moderno  
- confiable  
- sobrio  

Evitar:

- hype  
- exageraciones  
- lenguaje emocional extremo  
- discurso político polarizante  

---

## ✍️ REGLAS DE COPY

Siempre:

- explicar con claridad  
- usar lenguaje simple pero serio  
- priorizar credibilidad  
- ser directo  

Evitar frases como:

- "revolucionar todo"  
- "cambiar el mundo"  
- "la mejor solución"  
- "empoderar a las masas"  

---

## 🏛️ RELACIÓN CON GOBIERNOS

Debe transmitir:

- respeto institucional  
- viabilidad  
- facilidad de implementación  
- mejora del sistema existente  

---

## 👥 RELACIÓN CON CIUDADANOS

Debe transmitir:

- participación real  
- control tangible  
- impacto visible  

Sin generar falsas expectativas.

---

## 🎨 DISEÑO Y EXPERIENCIA

Debe reflejar:

- confianza  
- claridad  
- orden  
- modernidad institucional  

No debe parecer:

- startup hype  
- app juvenil  
- producto experimental  

---

## ⚠️ REGLAS ESTRICTAS

- No usar lenguaje político polarizante  
- No prometer cambios irreales  
- No exagerar impacto  
- No usar frases genéricas  
- No desalinearse del enfoque institucional  

---

## 🧠 PRINCIPIO FINAL

Citixen es una herramienta seria, viable y escalable para mejorar la participación ciudadana en la asignación de recursos públicos.

Todo el contenido debe alinearse con esta visión.


<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

These defaults are optimized for AI coding agents (and humans) working on apps that deploy to Vercel.

- Treat Vercel Functions as stateless + ephemeral (no durable RAM/FS, no background daemons), use Blob or marketplace integrations for preserving state
- Edge Functions (standalone) are deprecated; prefer Vercel Functions
- Don't start new projects on Vercel KV/Postgres (both discontinued); use Marketplace Redis/Postgres instead
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Provision Marketplace native integrations with `vercel integration add` (CI/agent-friendly)
- Sync env + project settings with `vercel env pull` / `vercel pull` when you need local/offline parity
- Use `waitUntil` for post-response work; avoid the deprecated Function `context` parameter
- Set Function regions near your primary data source; avoid cross-region DB/service roundtrips
- Tune Fluid Compute knobs (e.g., `maxDuration`, memory/CPU) for long I/O-heavy calls (LLMs, APIs)
- Use Runtime Cache for fast **regional** caching + tag invalidation (don't treat it as global KV)
- Use Cron Jobs for schedules; cron runs in UTC and triggers your production URL via HTTP GET
- Use Vercel Blob for uploads/media; Use Edge Config for small, globally-read config
- If Enable Deployment Protection is enabled, use a bypass secret to directly access them
- Add OpenTelemetry via `@vercel/otel` on Node; don't expect OTEL support on the Edge runtime
- Enable Web Analytics + Speed Insights early
- Use AI Gateway for model routing, set AI_GATEWAY_API_KEY, using a model string (e.g. 'anthropic/claude-sonnet-4.6'), Gateway is already default in AI SDK
  needed. Always curl https://ai-gateway.vercel.sh/v1/models first; never trust model IDs from memory
- For durable agent loops or untrusted code: use Workflow (pause/resume/state) + Sandbox; use Vercel MCP for secure infra access
<!-- VERCEL BEST PRACTICES END -->
