import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad — Citixen</title>
        <meta name="description" content="Política de privacidad de la plataforma Citixen. Cómo recopilamos, usamos y protegemos tus datos personales." />
        <meta property="og:title" content="Política de Privacidad — Citixen" />
        <meta property="og:description" content="Cómo Citixen recopila, usa y protege los datos personales de sus usuarios." />
        <meta property="og:type" content="article" />
      </Head>

      <Navbar />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="container">
            <div className="legal-hero-inner">
              <span className="legal-label">Documento legal</span>
              <h1>Política de Privacidad</h1>
              <p className="legal-subtitle">
                Cómo recopilamos, utilizamos, almacenamos y protegemos
                los datos personales de los usuarios de la plataforma Citixen.
              </p>
              <div className="legal-meta">
                <div className="meta-item">
                  <span className="meta-label">Última actualización</span>
                  <span className="meta-value">Mayo 2026</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Marco normativo</span>
                  <span className="meta-value">Ley 25.326 (Argentina) + RGPD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-content">
          <div className="container">
            <div className="legal-body">

              <h2>1. Introducción e Identidad del Responsable</h2>
              <h3>1.1 Sobre esta Política</h3>
              <p>
                Esta Política de Privacidad describe cómo Citixen Technologies SAS (&ldquo;Citixen&rdquo;,
                &ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;) recolecta, utiliza, almacena, comparte y protege
                sus datos personales cuando usted utiliza la plataforma Citixen, la aplicación móvil y los
                servicios asociados (conjuntamente, la &ldquo;Plataforma&rdquo;).
              </p>
              <p>
                Esta Política debe leerse conjuntamente con nuestros Términos y Condiciones, que definen
                conceptos clave utilizados a lo largo de este documento, incluyendo la naturaleza de los
                Créditos Cívicos y el rol de la Plataforma como infraestructura tecnológica de participación cívica.
              </p>

              <h3>1.2 Responsable del tratamiento</h3>
              <p>
                <strong>Citixen Technologies SAS</strong><br />
                Bell Ville, Provincia de Córdoba<br />
                República Argentina
              </p>
              <p>
                Contacto de privacidad: <a href="mailto:privacy@citixen.org">privacy@citixen.org</a>
              </p>

              <h3>1.3 Alcance</h3>
              <p>
                Esta Política se aplica a todos los usuarios de la Plataforma, incluyendo ciudadanos,
                personal gubernamental, representantes de organizaciones y visitantes. Cubre los datos
                recolectados a través de la aplicación móvil, los paneles web y cualquier API o servicio
                operado por Citixen.
              </p>

              <h2>2. Datos que Recolectamos</h2>

              <h3>2.1 Datos de identidad y cuenta</h3>
              <ul>
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Ciudad de residencia (vinculada a un municipio verificado)</li>
                <li>Fotografía de perfil (opcional)</li>
                <li>Contraseña (hasheada; nunca almacenada en texto plano)</li>
                <li>Identificadores de proveedores de autenticación (Google ID, Apple ID, si aplica)</li>
                <li>Fecha de creación de la cuenta</li>
              </ul>

              <h3>2.2 Datos de validación fiscal</h3>
              <p>
                Datos enviados para validar contribuciones fiscales para la emisión de Créditos Cívicos:
              </p>
              <ul>
                <li>Comprobantes de pago de impuestos y documentos fiscales (imágenes o PDFs)</li>
                <li>Tipo y método de validación fiscal seleccionado</li>
                <li>Fecha y monto de las contribuciones validadas</li>
                <li>Estado de aprobación o rechazo y anotaciones del revisor gubernamental</li>
              </ul>
              <p>
                <strong>Estos son datos sensibles.</strong> Se recolectan exclusivamente con el propósito de
                validar la elegibilidad de participación cívica y se comparten únicamente con el gobierno
                local correspondiente. Ver Sección 5 para detalles.
              </p>

              <h3>2.3 Datos de participación cívica</h3>
              <ul>
                <li>Conteo de Créditos Cívicos e historial de asignaciones</li>
                <li>Proyectos que ha creado, incluyendo descripciones, fotografías y evidencia</li>
                <li>Proyectos que ha apoyado (registros de asignación)</li>
                <li>Organizaciones que ha creado o gestiona</li>
                <li>Iniciativas comunitarias en las que ha creado o participado (likes, reportes)</li>
                <li>Registros de Tickets de Cobro asociados a sus proyectos u organizaciones</li>
                <li>Información bancaria (CBU, alias o datos de cuenta bancaria) proporcionada con fines de desembolso</li>
              </ul>

              <h3>2.4 Datos de ubicación</h3>
              <ul>
                <li>Municipio (ciudad) asociado a su cuenta — requerido para la funcionalidad de participación cívica</li>
                <li>Coordenadas geográficas de proyectos y organizaciones que usted crea (si elige agregar ubicación)</li>
                <li>Ubicación aproximada derivada de la dirección IP (para seguridad y prevención de fraude)</li>
              </ul>
              <p>
                No recolectamos datos de ubicación continuos ni en segundo plano de su dispositivo.
              </p>

              <h3>2.5 Datos de dispositivo y técnicos</h3>
              <ul>
                <li>Tipo de dispositivo, sistema operativo y versión</li>
                <li>Tokens de notificación push (tokens FCM) para la entrega de notificaciones</li>
                <li>Identificadores de dispositivo asociados al registro de notificaciones push</li>
                <li>Dirección IP</li>
                <li>Tipo y versión de navegador (para usuarios del panel web)</li>
              </ul>

              <h3>2.6 Datos de autenticación y seguridad</h3>
              <ul>
                <li>JSON Web Tokens (tokens de acceso)</li>
                <li>Tokens de actualización (almacenados encriptados en nuestra base de datos)</li>
                <li>Tokens de proveedores OAuth (temporales, utilizados solo durante el flujo de autenticación)</li>
                <li>Marcas de tiempo de inicio de sesión y datos de sesión</li>
                <li>Intentos fallidos de inicio de sesión (para monitoreo de seguridad)</li>
              </ul>

              <h3>2.7 Datos de comunicación</h3>
              <ul>
                <li>Mensajes de soporte enviados a través de la Plataforma</li>
                <li>Preferencias e historial de notificaciones</li>
                <li>Reportes comunitarios que usted envíe o que se envíen sobre su contenido</li>
              </ul>

              <h3>2.8 Datos que NO recolectamos</h3>
              <p>No recolectamos:</p>
              <ul>
                <li>Datos biométricos</li>
                <li>Datos de salud o médicos</li>
                <li>Datos sobre origen racial o étnico</li>
                <li>Opiniones políticas ni afiliación partidaria</li>
                <li>Creencias religiosas</li>
                <li>Orientación sexual</li>
                <li>Antecedentes penales</li>
                <li>Datos de menores (la Plataforma está restringida a usuarios de 18 años o más)</li>
              </ul>

              <h2>3. Cómo Utilizamos sus Datos</h2>

              <h3>3.1 Bases legales para el procesamiento</h3>
              <p>
                Procesamos sus datos personales bajo las siguientes bases legales, en cumplimiento de la
                Ley argentina de Protección de Datos Personales (Ley 25.326) y el Reglamento General de
                Protección de Datos (RGPD) cuando sea aplicable:
              </p>
              <ul>
                <li><strong>Ejecución de contrato:</strong> operar su cuenta, procesar asignaciones de CC y generar tickets, compartir datos con su gobierno local para participación cívica, enviar notificaciones transaccionales.</li>
                <li><strong>Consentimiento:</strong> enviar notificaciones push a su dispositivo, enviar newsletter o comunicaciones promocionales.</li>
                <li><strong>Interés legítimo:</strong> prevenir fraude y asegurar la seguridad de la Plataforma, hacer cumplir los Términos y Condiciones, moderar contenido, generar analíticas anonimizadas y agregadas.</li>
                <li><strong>Obligación legal:</strong> cumplir con obligaciones legales (retención de registros fiscales, registros de auditoría), responder a solicitudes legales de autoridades competentes.</li>
              </ul>

              <h3>3.2 Procesamiento basado en consentimiento</h3>
              <p>
                Cuando nos basamos en el consentimiento como base legal (notificaciones push, newsletter),
                usted puede retirar su consentimiento en cualquier momento:
              </p>
              <ul>
                <li><strong>Notificaciones push:</strong> desactivar a través de la configuración de su dispositivo o las preferencias de notificación de la Plataforma.</li>
                <li><strong>Newsletter:</strong> cancelar la suscripción a través del enlace en cualquier correo de newsletter, o a través de la configuración de cuenta.</li>
              </ul>
              <p>
                El retiro del consentimiento no afecta la legalidad del procesamiento realizado antes del retiro.
              </p>

              <h2>4. Qué es Público y Qué es Privado</h2>

              <h3>4.1 Información pública</h3>
              <ul>
                <li>Título, descripción, categoría, ubicación y fotografías del proyecto — visible para todos los usuarios.</li>
                <li>Nombre, avatar y ciudad del creador del proyecto — visible para todos los usuarios.</li>
                <li>Progreso de financiamiento del proyecto (CC asignados vs. meta) — visible para todos los usuarios.</li>
                <li>Número de supporters (solo conteo agregado) — visible para todos los usuarios.</li>
                <li>Nombre, descripción y estado de verificación de la organización — visible para todos los usuarios.</li>
                <li>Detalles de la iniciativa comunitaria y conteo de likes — visible para todos los usuarios.</li>
              </ul>

              <h3>4.2 Información privada</h3>
              <ul>
                <li>Su dirección de correo electrónico — solo usted + su gobierno local.</li>
                <li>Su conteo de CC — solo usted.</li>
                <li>Su historial de asignaciones (qué proyectos apoyó) — solo usted.</li>
                <li>Sus documentos de validación fiscal — solo usted + su gobierno local.</li>
                <li>Su información bancaria (CBU/alias) — solo usted + su gobierno local (solo al procesar un desembolso).</li>
                <li>Montos individuales de apoyo por proyecto — solo usted.</li>
                <li>Sus datos de dispositivo y técnicos — solo Citixen.</li>
              </ul>

              <h3>4.3 Anonimato de los supporters</h3>
              <p>
                Cuando usted asigna Créditos Cívicos a un proyecto, su identidad como supporter <strong>no se
                divulga</strong> a otros usuarios, al creador del proyecto ni al público general. Solo se muestran
                conteos agregados (ej: &ldquo;47 ciudadanos apoyan este proyecto&rdquo;). Esta es una decisión de diseño
                deliberada para proteger las elecciones de participación cívica de los ciudadanos de presión
                social o represalias.
              </p>

              <h3>4.4 Visibilidad del creador</h3>
              <p>
                Si usted crea un proyecto, iniciativa comunitaria u organización, su nombre, avatar y ciudad
                son públicamente visibles como creador. <strong>Esta es una condición de crear contenido cívico
                público en la Plataforma.</strong> La rendición de cuentas cívica requiere que la persona que propone
                un uso de recursos públicos sea públicamente identificable.
              </p>

              <h2>5. Intercambio de Datos con Gobiernos Locales</h2>

              <h3>5.1 Propósito</h3>
              <p>
                El intercambio de datos entre Citixen y los gobiernos locales es un componente necesario de la
                infraestructura de participación cívica. Sirve tres propósitos específicos:
              </p>
              <ul>
                <li><strong>Validación de identidad</strong> — verificar que los ciudadanos son residentes genuinos del municipio.</li>
                <li><strong>Prevención de fraude</strong> — permitir al gobierno revisar documentos fiscales y detectar reclamos fraudulentos.</li>
                <li><strong>Ejecución de decisiones colectivas</strong> — permitir al gobierno revisar proyectos, aprobar iniciativas y procesar desembolsos.</li>
              </ul>
              <p>
                <strong>Este intercambio de datos no es:</strong> vigilancia, comercialización de datos,
                intercambio discrecional ni perfilamiento con fines ajenos a la participación cívica.
              </p>

              <h3>5.2 Datos accesibles para los gobiernos locales</h3>
              <ul>
                <li><strong>Datos de registro:</strong> nombre, email, ciudad, fecha de registro, estado de aprobación — para validación de identidad.</li>
                <li><strong>Documentos fiscales:</strong> comprobantes impositivos enviados para validación de CC — para validación fiscal.</li>
                <li><strong>Proyectos:</strong> detalles del proyecto, estado, progreso de financiamiento, evidencia — para gestión de proyectos.</li>
                <li><strong>Organizaciones:</strong> detalles de la organización, estado de verificación, presupuesto — para gestión del ecosistema.</li>
                <li><strong>Tickets de Cobro:</strong> detalles del ticket, beneficiario, cantidad de CC, equivalente en fiat — para procesamiento de desembolsos.</li>
                <li><strong>Información bancaria:</strong> CBU/alias (solo en etapa de desembolso) — para ejecución de pagos.</li>
              </ul>

              <h3>5.3 Datos NO accesibles para los gobiernos locales</h3>
              <ul>
                <li>Qué proyectos específicos usted apoyó como ciudadano (se preserva el anonimato del supporter)</li>
                <li>Su conteo individual de CC</li>
                <li>Su actividad en otros municipios</li>
                <li>Sus datos de dispositivo, dirección IP o tokens de autenticación</li>
                <li>Sus preferencias de notificaciones push o historial de comunicación con Citixen</li>
              </ul>

              <h3>5.4 Aislamiento jurisdiccional</h3>
              <p>
                Cada gobierno local solo puede acceder a datos pertenecientes a ciudadanos, proyectos y
                organizaciones dentro de su propio municipio. <strong>El acceso a datos inter-jurisdiccional
                está técnicamente prohibido a nivel de la Plataforma.</strong> Un gobierno en la Ciudad A no puede
                acceder a ningún dato relacionado con la Ciudad B.
              </p>

              <h2>6. Intercambio de Datos con Terceros</h2>

              <h3>6.1 Proveedores de servicios</h3>
              <p>Compartimos datos personales con las siguientes categorías de proveedores de servicios:</p>
              <ul>
                <li><strong>MongoDB, Inc.</strong> — alojamiento de base de datos (MongoDB Atlas) — Estados Unidos / UE</li>
                <li><strong>DigitalOcean, LLC</strong> — alojamiento en la nube y almacenamiento de archivos — Estados Unidos</li>
                <li><strong>Google LLC (Firebase)</strong> — entrega de notificaciones push (FCM) — Estados Unidos</li>
                <li><strong>Google LLC / Apple Inc.</strong> — autenticación OAuth — Estados Unidos</li>
                <li><strong>Resend, Inc.</strong> — correos electrónicos transaccionales — Estados Unidos</li>
              </ul>

              <h3>6.2 No venta de datos personales</h3>
              <p>
                <strong>Citixen no vende, alquila ni comercializa sus datos personales a ningún tercero,
                bajo ninguna circunstancia.</strong>
              </p>

              <h3>6.3 Divulgación legal</h3>
              <p>
                Podemos divulgar sus datos personales si así lo requiere la ley, una orden judicial o
                una solicitud gubernamental, o si creemos de buena fe que la divulgación es necesaria para
                proteger los derechos, propiedad o seguridad de Citixen, nuestros usuarios o el público.
              </p>

              <h2>7. Seguridad de los Datos</h2>
              <p>Implementamos las siguientes medidas técnicas de seguridad:</p>
              <ul>
                <li><strong>Encriptación en tránsito</strong> — todos los datos transmitidos entre su dispositivo y nuestros servidores están encriptados utilizando TLS/HTTPS.</li>
                <li><strong>Seguridad de autenticación</strong> — los tokens de acceso se almacenan como cookies httpOnly y seguras (paneles web) o en almacenamiento encriptado del dispositivo (aplicación móvil); los tokens de actualización se almacenan encriptados con rotación de uso único y detección de replay.</li>
                <li><strong>Content Security Policy</strong> — los paneles web están protegidos por encabezados CSP estrictos que previenen XSS y clickjacking.</li>
                <li><strong>Control de acceso</strong> — controles de acceso basados en roles aseguran que los usuarios gubernamentales solo puedan acceder a datos dentro de su jurisdicción.</li>
                <li><strong>Limitación de tasa</strong> — los endpoints de la API están protegidos por limitación de tasa para prevenir ataques de fuerza bruta y abuso.</li>
                <li><strong>Seguridad de contraseñas</strong> — las contraseñas se hashean utilizando bcrypt y nunca se almacenan en texto plano.</li>
                <li><strong>Registro de auditoría</strong> — las acciones administrativas se registran con marcas de tiempo e identificación del actor.</li>
              </ul>
              <p>
                En caso de una violación de datos personales, Citixen notificará a la autoridad competente
                dentro de las 72 horas y a los usuarios afectados sin demora indebida.
              </p>
              <p>
                Si bien implementamos medidas de seguridad comercialmente razonables, <strong>ningún sistema
                es completamente seguro.</strong> Usted es responsable de mantener la seguridad de sus credenciales
                de cuenta y su dispositivo.
              </p>

              <h2>8. Retención de Datos</h2>
              <ul>
                <li><strong>Cuentas activas:</strong> los datos se conservan mientras la cuenta esté activa.</li>
                <li><strong>Documentos de validación fiscal:</strong> 10 años desde el envío (obligación fiscal argentina, Ley 11.683).</li>
                <li><strong>Registros de auditoría:</strong> 5 años (cumplimiento legal y rendición de cuentas).</li>
                <li><strong>Registros de Tickets de Cobro:</strong> 10 años desde la generación (conservación de registros fiscales).</li>
                <li><strong>Proyectos completados:</strong> indefinido (anonimizados — registro cívico histórico).</li>
                <li><strong>Notificaciones:</strong> 90 días (limpieza automática).</li>
                <li><strong>Tokens de actualización rotados:</strong> 30 días desde la rotación.</li>
                <li><strong>Cuentas eliminadas — datos personales:</strong> 30 días post-solicitud de eliminación.</li>
                <li><strong>Cuentas eliminadas — registros anonimizados:</strong> indefinido (registro cívico histórico).</li>
              </ul>

              <h3>Anonimización de registros históricos</h3>
              <p>
                Cuando usted elimina su cuenta, los registros de proyectos completados y participación cívica
                se retienen como parte del registro cívico histórico. Aplicamos técnicas de anonimización
                irreversible: su nombre se reemplaza con un identificador genérico, su correo electrónico,
                foto de perfil y todos los demás identificadores personales se eliminan permanentemente.
                Después de la anonimización, los datos restantes no pueden ser rastreados hasta usted.
              </p>

              <h2>9. Sus Derechos</h2>
              <p>
                De acuerdo con la Ley 25.326 y el RGPD (cuando sea aplicable), usted tiene derecho a:
              </p>
              <ul>
                <li><strong>Acceso:</strong> solicitar una copia de los datos personales que tenemos sobre usted.</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                <li><strong>Supresión (&ldquo;Derecho al olvido&rdquo;):</strong> solicitar la eliminación de sus datos personales, sujeto a las obligaciones legales de retención.</li>
                <li><strong>Limitación del tratamiento:</strong> solicitar que limitemos el procesamiento de sus datos en ciertas circunstancias.</li>
                <li><strong>Portabilidad de datos:</strong> solicitar sus datos en un formato estructurado y legible por máquina.</li>
                <li><strong>Oposición:</strong> oponerse al procesamiento basado en interés legítimo.</li>
                <li><strong>Retirar el consentimiento:</strong> cuando el procesamiento se base en el consentimiento, usted puede retirarlo en cualquier momento.</li>
              </ul>
              <p>
                Para ejercer estos derechos, contactar a <a href="mailto:privacy@citixen.org">privacy@citixen.org</a>.
                Responderemos dentro de los 30 días. Para usuarios en Argentina, responderemos dentro de los
                10 días hábiles conforme lo requiere la Ley 25.326.
              </p>

              <h3>Derecho a presentar una queja</h3>
              <p>
                Si considera que nuestro procesamiento de sus datos personales viola la legislación aplicable,
                usted tiene el derecho de presentar una queja ante:
              </p>
              <ul>
                <li><strong>Argentina:</strong> Agencia de Acceso a la Información Pública (AAIP) — <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer">www.argentina.gob.ar/aaip</a></li>
                <li><strong>Unión Europea:</strong> la autoridad de protección de datos de su país de residencia.</li>
              </ul>

              <h2>10. Transferencias Internacionales de Datos</h2>
              <p>
                Sus datos personales pueden ser transferidos y procesados en países distintos a su país de
                residencia. Nuestros principales proveedores de servicios están ubicados en Estados Unidos y
                la Unión Europea.
              </p>
              <p>Nos aseguramos de que las transferencias internacionales estén protegidas por:</p>
              <ul>
                <li>El estatus de adecuación de Argentina reconocido por la Comisión Europea.</li>
                <li>Cláusulas Contractuales Tipo (CCT) cuando los datos se transfieren a países sin determinación de adecuación.</li>
                <li>Protecciones contractuales con todos los proveedores de servicios.</li>
                <li>Encriptación en tránsito y en reposo.</li>
              </ul>

              <h2>11. Cookies y Tecnologías de Rastreo</h2>
              <h3>Paneles web</h3>
              <ul>
                <li><strong>Cookies esenciales:</strong> cookies de autenticación httpOnly requeridas para el inicio de sesión seguro. No pueden ser deshabilitadas.</li>
                <li><strong>Sin cookies publicitarias</strong> — no utilizamos cookies de publicidad, retargeting ni rastreo de comportamiento.</li>
                <li><strong>Sin analíticas de terceros</strong> — no incorporamos servicios de analíticas de terceros que rastreen usuarios entre sitios web.</li>
              </ul>
              <h3>Aplicación móvil</h3>
              <p>
                La aplicación móvil no utiliza cookies. Los tokens de autenticación se almacenan en
                almacenamiento encriptado del dispositivo (keychain seguro).
              </p>

              <h2>12. Privacidad de Menores</h2>
              <p>
                La Plataforma no está destinada a y no puede ser utilizada por personas menores de
                dieciocho (18) años. No recolectamos deliberadamente datos personales de menores. Si
                tomamos conocimiento de que hemos recolectado datos de un menor, eliminaremos esos datos
                y cancelaremos la cuenta asociada.
              </p>

              <h2>13. Cambios a esta Política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente. Para cambios sustanciales
                proporcionaremos al menos treinta (30) días de aviso previo a través de un aviso dentro
                de la Plataforma y un correo electrónico a la dirección asociada con su cuenta.
              </p>
              <p>
                Su uso continuado de la Plataforma después de la fecha de vigencia de cualquier cambio
                constituye su reconocimiento de la Política actualizada. Si no está de acuerdo con los
                cambios, puede dejar de utilizar la Plataforma y solicitar la eliminación de su cuenta.
              </p>

              <h2>14. Contacto</h2>
              <p>
                Para cualquier pregunta, inquietud o solicitud relacionada con esta Política de
                Privacidad o sus datos personales:
              </p>
              <p>
                <strong>Citixen Technologies SAS</strong><br />
                Bell Ville, Provincia de Córdoba<br />
                República Argentina
              </p>
              <p>
                Consultas de privacidad: <a href="mailto:privacy@citixen.org">privacy@citixen.org</a><br />
                Consultas legales: <a href="mailto:legal@citixen.org">legal@citixen.org</a>
              </p>
              <p>
                Nos proponemos responder a todas las consultas relacionadas con privacidad dentro de los 30 días.
              </p>

              <p className="legal-footnote">
                <em>
                  Esta Política de Privacidad está disponible en español e inglés. En caso de discrepancia,
                  la versión en español prevalecerá para la interpretación legal para usuarios en Argentina.
                </em>
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
