# Propuesta: datos del formulario comercial en la Política de privacidad

Borrador para revisión jurídica (11-nov-2026). **No está publicado.** La Política vigente (`pages/privacy.js`, «Última actualización: 24 de agosto de 2026») no menciona el formulario de piloto o demostración de citixen.app.

Los puntos marcados **[DECISIÓN PENDIENTE]** no están definidos en Citixen y no se completaron por suposición. Plazos, bases jurídicas y procedimientos tienen que fijarlos Pablo y quien haga la revisión jurídica.

## 1. Qué se recoge hoy

Formulario «Pedí un piloto o una demostración» (home y `/primer-ciclo`), que crea un `MunicipalLead` en el backend (`POST /api/government/register-light`).

| Dato | Formulario nuevo (rama `redesign/ciudad-que-escucha`) | Pedidos anteriores |
|---|---|---|
| Nombre y apellido | Sí | Sí |
| Email institucional | Sí | Sí |
| Municipio u organismo | Sí | Sí |
| País | Sí | Sí |
| Interés: piloto o demostración | Sí | No |
| Idioma de la página desde la que se envió | Sí (automático) | No |
| Cargo | No | Sí |
| Tipo de gobierno | No | Sí |
| Provincia o estado, ciudad | No | Sí |
| Sitio web oficial | No (el backend lo acepta si llega) | Opcional |

Datos técnicos asociados, según el código revisado:

- **IP:** el límite de pedidos (3 por IP cada 24 horas) la guarda en memoria del servidor, sin base de datos. Si se supera el límite, la IP queda en el registro del servidor (`logger.warn`).
- **Registro del servidor:** cada pedido escribe una línea con el nombre del municipio, la ciudad o el país, el email y el identificador del pedido (`console.log` en `registerGovernmentLight`). El plazo de conservación de esos registros no está definido en la Política. **[DECISIÓN PENDIENTE]**
- **Campo trampa (`_hp`):** si llega completo, el pedido se descarta sin guardarse.

## 2. Texto propuesto

### Nueva sección 2.11 — Datos de contacto comercial

> Cuando una persona de un gobierno u organismo público completa el formulario para pedir un piloto o una demostración en citixen.app, recolectamos su nombre y apellido, su email institucional, el municipio u organismo, el país, si le interesa un piloto o una demostración, y el idioma de la página desde la que lo envió. Estos datos no forman parte de una cuenta de la Plataforma.

### Finalidades (agregar a la sección 3)

> Usamos estos datos para responder el pedido, coordinar la demostración o el piloto y hacer el seguimiento de esa conversación. No los usamos para enviar newsletters ni comunicaciones promocionales, y no los vendemos ni cedemos a terceros.

**[DECISIÓN PENDIENTE]** Confirmar si habrá seguimiento comercial posterior (por ejemplo, un nuevo contacto meses después). Si lo hay, la finalidad y su base jurídica tienen que figurar de forma explícita.

### Base jurídica (sección 3.1)

**[DECISIÓN PENDIENTE — revisión jurídica]** Las opciones a evaluar, sin elegir ninguna:

- Medidas precontractuales adoptadas a solicitud de la persona interesada (RGPD, art. 6.1.b), para responder el pedido.
- Consentimiento (Ley 25.326, art. 5), que hoy el formulario expresa como «Al enviar tus datos, aceptás nuestra Política de privacidad». Conviene revisar si esa frase es un consentimiento válido o solo un aviso.
- Interés legítimo, si hubiera un seguimiento comercial posterior.

### Destinatarios (secciones 5 y 6)

> Estos datos solo los ve el equipo de Citixen. No se comparten con gobiernos locales ni con otros usuarios.

Encargados que ya figuran en la sección 6.1 y que intervienen en este tratamiento:

- **MongoDB, Inc.** (MongoDB Atlas): almacenamiento del pedido.
- **DigitalOcean, LLC:** servidor que recibe el pedido y guarda sus registros.
- **Resend, Inc.:** envío del email de confirmación al solicitante y de la notificación interna al equipo (casilla configurada en `LEAD_NOTIFY_EMAIL`, por omisión `admin@citixen.org`).

**[A REVISAR]** Vercel Inc. aloja citixen.app y no figura en la sección 6.1. No recibe el contenido del formulario: en producción, Nginx envía `/api/*` directo al backend. Sí registra los accesos al sitio, incluidas las IP.

### Conservación (sección 8.1)

**[DECISIÓN PENDIENTE]** Hoy los pedidos no tienen un plazo de conservación: quedan guardados con su estado (pendiente, contactado, convertido o descartado) sin vencimiento automático. Hay que definir:

- cuánto tiempo se conservan los pedidos descartados o sin respuesta;
- si, cuando un pedido se convierte en un gobierno activo, sus datos pasan a regirse por las reglas de las cuentas de gobierno;
- cómo se aplica la eliminación (borrado o anonimización) y quién la ejecuta.

### Derechos (sección 9)

> Las personas que completaron el formulario pueden ejercer los derechos de la sección 9 escribiendo a privacy@citixen.org.

Los plazos de respuesta que ya figuran en la sección 9.2 aplican sin cambios. Hoy no existe un procedimiento interno documentado para encontrar y borrar un pedido. **[DECISIÓN PENDIENTE]**

### Transferencias internacionales (sección 10)

> Aplican las mismas condiciones de la sección 10, ya que intervienen los mismos proveedores.

## 3. Coherencia de enlaces y textos legales

| Punto | Estado verificado el 11-nov-2026 |
|---|---|
| Enlace a la política desde el formulario | `/privacy` en los tres idiomas. En pt y en, la etiqueta indica «(em espanhol)» e «(in Spanish)», igual que el pie del sitio |
| Páginas legales en `/pt/*` y `/en/*` | Redirigen a la versión en español (temporal), como en el pie |
| Enlaces del pie de los emails | Apuntan a `https://citixen.org/privacy` y `/terms`, que hoy redirigen a `citixen.app/privacy` y `/terms`. Conviene apuntarlos directo a citixen.app |
| Idioma de la política | Solo en español. Los visitantes en pt y en aceptan un texto que no está en su idioma. **[DECISIÓN PENDIENTE]**: traducir o mantener |
| Registro de bases ante la AAIP | La sección 1.2 dice que se hará «previo al inicio de operaciones con el primer municipio». Confirmar si la base de pedidos comerciales entra en esa inscripción |

## 4. Recomendaciones técnicas (no aplicadas)

- Dejar de escribir el email del solicitante en el registro del servidor, o definir el plazo de conservación de esos registros.
- Agregar un plazo de conservación para los pedidos (por ejemplo, un índice con vencimiento sobre los descartados), una vez decidido.
- Documentar en el panel del superadmin cómo eliminar un pedido a solicitud de la persona.
