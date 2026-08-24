import Head from 'next/head'
import Link from 'next/link'
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
                  <span className="meta-value">24 de agosto de 2026</span>
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

              {/* ═══ 1. INTRODUCCIÓN ═══ */}
              <h2>1. Introducción e Identidad del Responsable</h2>

              <h3>1.1 Sobre esta Política</h3>
              <p>
                Esta Política de Privacidad (&ldquo;Política&rdquo;) describe cómo Citixen Technologies SAS (&ldquo;Citixen&rdquo;,
                &ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;) recolecta, utiliza, almacena, comparte y protege
                sus datos personales cuando usted utiliza la plataforma Citixen, la aplicación móvil y los
                servicios asociados (conjuntamente, la &ldquo;Plataforma&rdquo;).
              </p>
              <p>
                Esta Política debe leerse conjuntamente con nuestros <Link href="/terms">Términos y Condiciones</Link>, que definen
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
              <p>
                Las bases de datos que contienen datos personales procesados a través de la Plataforma serán inscriptas
                ante la Agencia de Acceso a la Información Pública (AAIP) de Argentina de conformidad con la Ley 25.326,
                previo al inicio de operaciones con el primer municipio. El número de registro será publicado en esta
                Política una vez completada la inscripción.
              </p>

              <h3>1.3 Alcance</h3>
              <p>
                Esta Política se aplica a todos los usuarios de la Plataforma, incluyendo ciudadanos,
                personal gubernamental, representantes de organizaciones y visitantes. Cubre los datos
                recolectados a través de la aplicación móvil, los paneles web y cualquier API o servicio
                operado por Citixen.
              </p>

              {/* ═══ 2. DATOS QUE RECOLECTAMOS ═══ */}
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
                <strong>Estos documentos contienen información financiera y tributaria que requiere protección reforzada.</strong> Se
                recolectan exclusivamente con el propósito de validar la elegibilidad de participación cívica y se
                comparten únicamente con el gobierno local correspondiente. Ver Sección 5 para detalles.
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
              <p>No recolectamos datos de ubicación continuos ni en segundo plano de su dispositivo.</p>

              <h3>2.5 Datos de dispositivo y técnicos</h3>
              <ul>
                <li>Tipo de dispositivo, sistema operativo y versión</li>
                <li>Tokens de notificación push (tokens FCM) para la entrega de notificaciones</li>
                <li>Identificadores de dispositivo asociados al registro de notificaciones push</li>
                <li>Dirección IP</li>
                <li>Tipo y versión de navegador (para usuarios del panel web)</li>
                <li>Versión de la aplicación</li>
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
                <li>Copias, fotografías, capturas o grabaciones de documentos de identidad o de videollamadas de verificación (ver Sección 2.10)</li>
              </ul>

              <h3>2.9 Procesamiento asistido por inteligencia artificial</h3>
              <p>
                Ciertas funciones de la Plataforma pueden utilizar modelos de inteligencia artificial (IA) de terceros para asistir en el procesamiento de información, incluyendo:
              </p>
              <ul>
                <li>Extracción y estructuración de datos de documentos fiscales y financieros (ej: lectura de comprobantes de pago, balances municipales);</li>
                <li>Filtrado automatizado de contenido para detectar lenguaje potencialmente inadecuado en propuestas y comentarios ciudadanos;</li>
                <li>Categorización y organización de información para facilitar la gestión por parte de los gobiernos locales.</li>
              </ul>
              <p><strong>Principios que rigen el uso de IA en la Plataforma:</strong></p>
              <ul>
                <li><strong>Sin decisiones automatizadas vinculantes.</strong> Ninguna decisión que produzca efectos legales sobre los usuarios (aprobación de cuentas, aprobación de proyectos, procesamiento de desembolsos, suspensión de cuentas) es tomada por sistemas automatizados. Todas las decisiones gubernamentales son tomadas por funcionarios humanos.</li>
                <li><strong>Revisión humana obligatoria.</strong> Cuando la IA asiste en la extracción o clasificación de datos, los resultados son revisados y validados por un operador humano antes de que produzcan efecto.</li>
                <li><strong>Sin entrenamiento con datos personales identificables.</strong> Los datos personales de los usuarios no se utilizan para entrenar, ajustar ni mejorar modelos de IA. El procesamiento se limita a la ejecución de tareas específicas sobre los datos proporcionados, sin retención por parte del modelo.</li>
                <li><strong>Proveedores de IA.</strong> Los modelos de IA utilizados son provistos por terceros (actualmente Anthropic, Inc.). Los datos enviados a estos proveedores están sujetos a los acuerdos de procesamiento de datos correspondientes y a las mismas salvaguardas descritas en la Sección 6.</li>
              </ul>

              <h3>2.10 Datos de verificación de identidad humana</h3>
              <p>
                Los ciudadanos que deseen habilitar la recaudación externa de donaciones en una Iniciativa Comunitaria (ver Términos y Condiciones, Sección 5.9) pueden solicitar una verificación de identidad. Este proceso es optativo y se realiza mediante una videollamada corta con el equipo de Citixen, no mediante la carga de documentos a la Plataforma. Recolectamos: número de teléfono de contacto, tipo de documento exhibido (no una copia ni el número completo), el resultado de la verificación (seis controles puntuales), notas del revisor y las fechas del proceso.
              </p>
              <p>
                <strong>Deliberadamente no recolectamos ni almacenamos</strong> copia, fotografía o captura del documento exhibido, ni grabación, audio o transcripción de la videollamada, ni el número completo del documento. Esta minimización es intencional: evitamos crear un repositorio de documentos de identidad sensibles. El resultado (identidad verificada: sí/no) es visible públicamente como insignia en el perfil del creador; los datos subyacentes son accesibles únicamente por el administrador de sistema de Citixen a cargo de este proceso y no se comparten con gobiernos locales ni con otros usuarios.
              </p>

              {/* ═══ 3. CÓMO UTILIZAMOS SUS DATOS ═══ */}
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
              <p>El retiro del consentimiento no afecta la legalidad del procesamiento realizado antes del retiro.</p>

              <h3>3.3 Evaluaciones de interés legítimo</h3>
              <p>Cuando nos basamos en el interés legítimo, hemos realizado evaluaciones de balance:</p>
              <ul>
                <li><strong>Prevención de fraude:</strong> nuestro interés en mantener la integridad de la Plataforma prevalece sobre el impacto mínimo a la privacidad del monitoreo de patrones de inicio de sesión.</li>
                <li><strong>Intercambio de datos con gobiernos:</strong> se procesa bajo ejecución de contrato (el servicio requiere participación gubernamental) e interés público (la Plataforma facilita el ejercicio de derechos de participación cívica). Este intercambio es inherente al servicio y se limita a los propósitos específicos descritos en la Sección 5.</li>
                <li><strong>Analíticas:</strong> utilizamos únicamente datos anonimizados y agregados — sin perfilamiento individual de usuarios.</li>
              </ul>

              {/* ═══ 4. QUÉ ES PÚBLICO Y QUÉ ES PRIVADO ═══ */}
              <h2>4. Qué es Público y Qué es Privado</h2>

              <h3>4.1 Información pública</h3>
              <ul>
                <li>Título, descripción, categoría, ubicación y fotografías del proyecto — visible para todos los usuarios.</li>
                <li>Nombre, avatar y ciudad del creador del proyecto — visible para todos los usuarios.</li>
                <li>Progreso de financiamiento del proyecto (CC asignados vs. meta) — visible para todos los usuarios.</li>
                <li>Número de supporters (solo conteo agregado) — visible para todos los usuarios.</li>
                <li>Nombre, descripción y estado de verificación de la organización — visible para todos los usuarios.</li>
                <li>Nombre del representante de la organización (para organizaciones verificadas) — visible para todos los usuarios.</li>
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
                <li>Sus tokens de autenticación — solo Citixen.</li>
              </ul>

              <h3>4.3 Anonimato de los supporters</h3>
              <p>
                Cuando usted asigna Créditos Cívicos a un proyecto, su identidad como supporter <strong>no se
                divulga</strong> a otros usuarios, al creador del proyecto ni al público general. Solo se muestran
                conteos agregados (ej: &ldquo;47 ciudadanos apoyan este proyecto&rdquo;). Esta es una decisión de diseño
                deliberada para proteger las elecciones de participación cívica de los ciudadanos de presión
                social o represalias.
              </p>
              <p>
                Reconocemos que las elecciones de participación cívica pueden reflejar preferencias y convicciones personales.
                Su historial individual de asignaciones se trata con confidencialidad reforzada y no se divulga
                a otros usuarios, creadores de proyectos, el público general ni funcionarios del gobierno local.
              </p>

              <h3>4.4 Visibilidad del creador</h3>
              <p>
                Si usted crea un proyecto, iniciativa comunitaria u organización, su nombre, avatar y ciudad
                son públicamente visibles como creador. <strong>Esta es una condición de crear contenido cívico
                público en la Plataforma.</strong> La rendición de cuentas cívica requiere que la persona que propone
                un uso de recursos públicos sea públicamente identificable.
              </p>

              {/* ═══ 5. INTERCAMBIO DE DATOS CON GOBIERNOS ═══ */}
              <h2>5. Intercambio de Datos con Gobiernos Locales</h2>

              <h3>5.1 Propósito</h3>
              <p>
                El intercambio de datos entre Citixen y los gobiernos locales es un componente necesario del servicio de participación cívica que la Plataforma provee. Citixen es una empresa privada que provee tecnología a gobiernos locales — no es una entidad pública, autoridad gubernamental ni extensión del Estado.
              </p>
              <p>Este intercambio sirve tres propósitos específicos:</p>
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
                <li>Su actividad en iniciativas comunitarias (a menos que la iniciativa sea señalada para revisión)</li>
                <li>Sus preferencias de notificaciones push o historial de comunicación con Citixen</li>
                <li>Sus datos de verificación de identidad humana (teléfono, notas de revisión) — gestionados exclusivamente por Citixen (Sección 2.10)</li>
              </ul>

              <h3>5.4 Aislamiento jurisdiccional</h3>
              <p>
                Cada gobierno local solo puede acceder a datos pertenecientes a ciudadanos, proyectos y
                organizaciones dentro de su propio municipio. <strong>El acceso a datos inter-jurisdiccional
                está técnicamente prohibido a nivel de la Plataforma.</strong> Un gobierno en la Ciudad A no puede
                acceder a ningún dato relacionado con la Ciudad B, y la Plataforma aplica esta restricción
                a través de validación del lado del servidor.
              </p>

              <h3>5.5 Relación de responsable del tratamiento con los gobiernos</h3>
              <p>
                Citixen y los gobiernos locales procesan sus datos personales cada uno para sus propios fines distintos:
                Citixen para operar la Plataforma, el gobierno local para ejercer sus funciones de gobernanza cívica.
                Cada parte determina los fines de su propio procesamiento de forma independiente.
              </p>
              <p>
                El uso de datos por parte del gobierno se rige por sus propias obligaciones de protección de datos
                bajo la legislación aplicable. Si tiene inquietudes sobre cómo su gobierno local utiliza datos accedidos
                a través de la Plataforma, debe dirigir esas inquietudes al gobierno local directamente, además de
                contactar a Citixen a <a href="mailto:privacy@citixen.org">privacy@citixen.org</a>.
              </p>

              {/* ═══ 6. INTERCAMBIO DE DATOS CON TERCEROS ═══ */}
              <h2>6. Intercambio de Datos con Terceros</h2>

              <h3>6.1 Proveedores de servicios</h3>
              <p>Compartimos datos personales con las siguientes categorías de proveedores de servicios:</p>
              <ul>
                <li><strong>MongoDB, Inc.</strong> — alojamiento de base de datos (MongoDB Atlas) — Estados Unidos / UE</li>
                <li><strong>DigitalOcean, LLC</strong> — alojamiento en la nube y almacenamiento de archivos — Estados Unidos</li>
                <li><strong>Google LLC (Firebase)</strong> — entrega de notificaciones push (FCM) — Estados Unidos</li>
                <li><strong>Google LLC / Apple Inc.</strong> — autenticación OAuth — Estados Unidos</li>
                <li><strong>Resend, Inc.</strong> — correos electrónicos transaccionales — Estados Unidos</li>
                <li><strong>Anthropic, Inc.</strong> — procesamiento asistido por IA (extracción de datos, filtrado de contenido) — Estados Unidos</li>
              </ul>

              <h3>6.2 No venta de datos personales</h3>
              <p>
                <strong>Citixen no vende, alquila ni comercializa sus datos personales a ningún tercero,
                bajo ninguna circunstancia.</strong> Esta no es una política que pueda cambiar mediante una
                actualización de los Términos sin consentimiento explícito y separado.
              </p>

              <h3>6.3 Divulgación legal</h3>
              <p>
                Podemos divulgar sus datos personales si así lo requiere la ley, una orden judicial o
                una solicitud gubernamental, o si creemos de buena fe que la divulgación es necesaria para
                proteger los derechos, propiedad o seguridad de Citixen, nuestros usuarios o el público.
                Cuando la ley lo permita, le notificaremos de dicha divulgación.
              </p>

              <h3>6.4 Transferencias comerciales</h3>
              <p>
                En caso de fusión, adquisición o venta de activos de Citixen, sus datos personales podrán
                ser transferidos a la entidad adquirente. Le notificaremos de cualquier transferencia antes
                de que sus datos queden sujetos a una política de privacidad diferente.
              </p>

              {/* ═══ 7. SEGURIDAD ═══ */}
              <h2>7. Seguridad de los Datos</h2>

              <h3>7.1 Medidas técnicas</h3>
              <ul>
                <li><strong>Encriptación en tránsito</strong> — todos los datos transmitidos entre su dispositivo y nuestros servidores están encriptados utilizando TLS/HTTPS.</li>
                <li><strong>Seguridad de autenticación</strong> — los tokens de acceso se almacenan como cookies httpOnly y seguras (paneles web) o en almacenamiento encriptado del dispositivo (aplicación móvil); los tokens de actualización se almacenan encriptados con rotación de uso único y detección de replay.</li>
                <li><strong>Content Security Policy</strong> — los paneles web están protegidos por encabezados CSP estrictos que previenen XSS y clickjacking.</li>
                <li><strong>Control de acceso</strong> — controles de acceso basados en roles y perfiles de permisos aseguran que los usuarios gubernamentales solo puedan acceder a datos dentro de su jurisdicción.</li>
                <li><strong>Limitación de tasa</strong> — los endpoints de la API están protegidos por limitación de tasa para prevenir ataques de fuerza bruta y abuso.</li>
                <li><strong>Seguridad de contraseñas</strong> — las contraseñas se hashean utilizando algoritmos estándar de la industria y nunca se almacenan en texto plano.</li>
                <li><strong>Protección CORS</strong> — las solicitudes de origen cruzado están restringidas únicamente a dominios autorizados.</li>
              </ul>

              <h3>7.2 Medidas organizativas</h3>
              <ul>
                <li>El acceso a datos personales se limita al personal de Citixen que lo requiere para la operación de la Plataforma.</li>
                <li>El acceso gubernamental está delimitado por fronteras jurisdiccionales y se aplica a nivel de servidor.</li>
                <li>Las acciones administrativas se registran en registros de auditoría con marcas de tiempo e identificación del actor.</li>
                <li>La información bancaria se captura como instantáneas al momento de generar registros de desembolso.</li>
              </ul>

              <h3>7.3 Respuesta a incidentes</h3>
              <p>
                En caso de una violación de datos personales, Citixen notificará a la autoridad competente
                dentro de las 72 horas y a los usuarios afectados sin demora indebida si la violación
                resulte en alto riesgo para sus derechos y libertades.
              </p>

              <h3>7.4 Sin garantía absoluta</h3>
              <p>
                Si bien implementamos medidas de seguridad comercialmente razonables, <strong>ningún sistema
                es completamente seguro.</strong> Usted es responsable de mantener la seguridad de sus credenciales
                de cuenta y su dispositivo.
              </p>

              {/* ═══ 8. RETENCIÓN ═══ */}
              <h2>8. Retención de Datos</h2>

              <h3>8.1 Períodos de retención</h3>
              <ul>
                <li><strong>Cuentas activas:</strong> los datos se conservan mientras la cuenta esté activa.</li>
                <li><strong>Documentos de validación fiscal:</strong> 10 años desde el envío (obligación fiscal argentina, Ley 11.683).</li>
                <li><strong>Registros de auditoría:</strong> 5 años (cumplimiento legal y rendición de cuentas).</li>
                <li><strong>Registros de Tickets de Cobro:</strong> 10 años desde la generación (conservación de registros fiscales).</li>
                <li><strong>Proyectos completados:</strong> indefinido (anonimizados — registro cívico histórico).</li>
                <li><strong>Notificaciones:</strong> 90 días (limpieza automática).</li>
                <li><strong>Tokens de actualización rotados:</strong> 30 días desde la rotación.</li>
                <li><strong>Tokens FCM inactivos:</strong> eliminados automáticamente al fallar la entrega push.</li>
                <li><strong>Cuentas eliminadas — datos personales:</strong> 30 días post-solicitud de eliminación.</li>
                <li><strong>Cuentas eliminadas — registros anonimizados:</strong> indefinido (registro cívico histórico).</li>
              </ul>

              <h3>8.2 Obligaciones legales de retención</h3>
              <p>Ciertos datos deben retenerse más allá de la solicitud de eliminación del usuario:</p>
              <ul>
                <li><strong>Documentos fiscales</strong> — la ley fiscal argentina requiere su retención por el período legalmente mandado.</li>
                <li><strong>Registros de auditoría</strong> — se retienen con la identidad del usuario anonimizada después de la eliminación de la cuenta.</li>
                <li><strong>Registros de Tickets de Cobro</strong> — como registros que involucran fondos públicos, se retienen por el período legalmente mandado.</li>
              </ul>

              <h3>8.3 Anonimización de registros históricos</h3>
              <p>
                Cuando usted elimina su cuenta, los registros de proyectos completados y participación cívica
                se retienen como parte del registro cívico histórico. Aplicamos técnicas de anonimización irreversible:
                su nombre se reemplaza con un identificador genérico no único, su correo electrónico, foto de perfil
                y todos los demás identificadores personales se eliminan permanentemente. Los identificadores geográficos
                que podrían permitir la re-identificación en municipios pequeños se generalizan al nivel de ciudad.
                Después de la anonimización, los datos restantes no pueden ser rastreados hasta usted.
              </p>
              <p>
                Si la anonimización completa no es técnicamente factible para un registro específico, Citixen
                le informará y discutirá alternativas, que pueden incluir la eliminación completa del registro.
              </p>

              {/* ═══ 9. SUS DERECHOS ═══ */}
              <h2>9. Sus Derechos</h2>

              <h3>9.1 Derechos bajo la legislación aplicable</h3>
              <p>De acuerdo con la Ley 25.326 y el RGPD (cuando sea aplicable), usted tiene derecho a:</p>
              <ul>
                <li><strong>Acceso:</strong> solicitar una copia de los datos personales que tenemos sobre usted.</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                <li><strong>Supresión (&ldquo;Derecho al olvido&rdquo;):</strong> solicitar la eliminación de sus datos personales, sujeto a las obligaciones legales de retención.</li>
                <li><strong>Limitación del tratamiento:</strong> solicitar que limitemos el procesamiento de sus datos en ciertas circunstancias.</li>
                <li><strong>Portabilidad de datos:</strong> solicitar sus datos en un formato estructurado y legible por máquina.</li>
                <li><strong>Oposición:</strong> oponerse al procesamiento basado en interés legítimo.</li>
                <li><strong>Retirar el consentimiento:</strong> cuando el procesamiento se base en el consentimiento.</li>
                <li><strong>No ser objeto de decisiones automatizadas:</strong> no tomamos decisiones basadas exclusivamente en procesamiento automatizado que produzcan efectos legales sobre usted. Todas las decisiones gubernamentales son tomadas por funcionarios humanos. Citixen evalúa periódicamente los riesgos de privacidad asociados al procesamiento de datos fiscales y participación cívica.</li>
              </ul>

              <h3>9.2 Cómo ejercer sus derechos</h3>
              <p>
                Para ejercer estos derechos, contactar a <a href="mailto:privacy@citixen.org">privacy@citixen.org</a>.
                Responderemos dentro de los 30 días. Para usuarios en Argentina, responderemos dentro de los
                10 días hábiles conforme lo requiere la Ley 25.326. No hay cargo por ejercer sus derechos.
              </p>

              <h3>9.3 Derecho a presentar una queja</h3>
              <p>Si considera que nuestro procesamiento viola la legislación aplicable:</p>
              <ul>
                <li><strong>Argentina:</strong> Agencia de Acceso a la Información Pública (AAIP) — <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer">www.argentina.gob.ar/aaip</a></li>
                <li><strong>Unión Europea:</strong> la autoridad de protección de datos de su país de residencia.</li>
                <li><strong>Otras jurisdicciones:</strong> la autoridad de protección de datos relevante en su país.</li>
              </ul>

              {/* ═══ 10. TRANSFERENCIAS INTERNACIONALES ═══ */}
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
                <li>Evaluaciones de impacto de transferencia con medidas suplementarias (encriptación en tránsito y en reposo, pseudonimización cuando sea factible).</li>
              </ul>

              {/* ═══ 11. COOKIES ═══ */}
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

              <h3>Do Not Track</h3>
              <p>Respetamos las señales Do Not Track (DNT). Dado que no realizamos rastreo entre sitios, las señales DNT no modifican nuestras prácticas de datos.</p>

              {/* ═══ 12. MENORES ═══ */}
              <h2>12. Privacidad de Menores</h2>
              <p>
                La Plataforma no está destinada a y no puede ser utilizada por personas menores de
                dieciocho (18) años. No recolectamos deliberadamente datos personales de menores. Si
                tomamos conocimiento de que hemos recolectado datos de un menor, eliminaremos esos datos
                y cancelaremos la cuenta asociada.
              </p>

              {/* ═══ 13. CAMBIOS ═══ */}
              <h2>13. Cambios a esta Política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente. Para cambios sustanciales
                proporcionaremos al menos treinta (30) días de aviso previo a través de un aviso dentro
                de la Plataforma, un correo electrónico y una notificación dentro de la aplicación.
              </p>
              <p>
                Su uso continuado de la Plataforma después de la fecha de vigencia de cualquier cambio
                constituye su reconocimiento de la Política actualizada. Si no está de acuerdo con los
                cambios, puede dejar de utilizar la Plataforma y solicitar la eliminación de su cuenta.
              </p>

              {/* ═══ 14. CONTACTO ═══ */}
              <h2>14. Contáctenos</h2>
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
                  Para usuarios fuera de Argentina, la versión en inglés prevalecerá.
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
