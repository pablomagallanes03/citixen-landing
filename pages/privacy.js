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
                  <span className="meta-label">Vigencia</span>
                  <span className="meta-value">Mayo 2026</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Marco normativo</span>
                  <span className="meta-value">Ley 25.326 (Argentina)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-content">
          <div className="container">
            <div className="legal-body">

              <h2>1. Responsable del Tratamiento</h2>
              <p>
                <strong>Citixen Technologies SAS</strong> (en adelante, &ldquo;Citixen&rdquo;) es responsable del tratamiento
                de los datos personales recopilados a través de la plataforma Citixen, incluyendo el portal web,
                la aplicación móvil y los paneles de administración.
              </p>
              <p>
                Contacto del responsable: <a href="mailto:contacto@citixen.org">contacto@citixen.org</a>
              </p>

              <h2>2. Datos que Recopilamos</h2>
              <h3>2.1 Datos proporcionados por el usuario</h3>
              <ul>
                <li><strong>Ciudadanos:</strong> nombre, apellido, email, ciudad, contraseña (almacenada de forma cifrada).</li>
                <li><strong>Gobiernos locales:</strong> nombre del municipio, tipo de entidad, ubicación, nombre y cargo del representante, email institucional.</li>
                <li><strong>Organizaciones:</strong> nombre, tipo de entidad, descripción, documentación de respaldo, datos bancarios (para desembolsos).</li>
              </ul>
              <h3>2.2 Datos generados por el uso</h3>
              <ul>
                <li>Historial de asignación de Créditos Cívicos.</li>
                <li>Proyectos creados, apoyados o completados.</li>
                <li>Participación en consultas y propuestas ciudadanas.</li>
                <li>Comprobantes de pago de impuestos (para acreditación de CC).</li>
              </ul>
              <h3>2.3 Datos técnicos</h3>
              <ul>
                <li>Dirección IP (para seguridad y rate limiting).</li>
                <li>Tokens de dispositivo para notificaciones push (FCM).</li>
                <li>Información básica del navegador o dispositivo.</li>
              </ul>
              <h3>2.4 Datos de autenticación social</h3>
              <p>
                Si el usuario se registra mediante Google o Apple, recibimos el nombre, email y un
                identificador único del proveedor. No accedemos a contactos, fotos ni otra información
                de la cuenta del proveedor.
              </p>

              <h2>3. Finalidad del Tratamiento</h2>
              <p>Los datos personales se utilizan exclusivamente para:</p>
              <ul>
                <li>Gestionar el registro y la autenticación de usuarios.</li>
                <li>Operar la plataforma de participación ciudadana y transparencia.</li>
                <li>Procesar la asignación de Créditos Cívicos y los desembolsos asociados.</li>
                <li>Enviar notificaciones relevantes sobre la actividad del usuario.</li>
                <li>Garantizar la seguridad de la plataforma (detección de fraude, rate limiting).</li>
                <li>Generar estadísticas agregadas y anónimas sobre el uso de la plataforma.</li>
                <li>Cumplir con obligaciones legales aplicables.</li>
              </ul>

              <h2>4. Base Legal</h2>
              <p>
                El tratamiento de datos se realiza conforme a la Ley 25.326 de Protección de Datos Personales
                de la República Argentina y sus normas reglamentarias. Las bases legales son:
              </p>
              <ul>
                <li><strong>Consentimiento:</strong> otorgado al aceptar estos términos al registrarse.</li>
                <li><strong>Ejecución contractual:</strong> necesario para prestar el servicio solicitado.</li>
                <li><strong>Interés legítimo:</strong> seguridad de la plataforma y prevención de fraude.</li>
                <li><strong>Obligación legal:</strong> cumplimiento de requerimientos normativos.</li>
              </ul>

              <h2>5. Almacenamiento y Seguridad</h2>
              <p>
                Los datos se almacenan en servidores seguros con las siguientes medidas de protección:
              </p>
              <ul>
                <li>Contraseñas cifradas con algoritmos de hash seguros (bcrypt).</li>
                <li>Comunicaciones cifradas mediante HTTPS/TLS.</li>
                <li>Tokens de autenticación con rotación y expiración automática.</li>
                <li>Cookies httpOnly y secure para sesiones web.</li>
                <li>Content Security Policy (CSP) para prevención de ataques XSS.</li>
                <li>Rate limiting por IP y por usuario para prevención de abuso.</li>
                <li>Registro de auditoría para acciones administrativas.</li>
              </ul>

              <h2>6. Compartición de Datos</h2>
              <p>Citixen no vende ni comercializa datos personales. Los datos pueden compartirse con:</p>
              <ul>
                <li>
                  <strong>Gobiernos locales:</strong> los datos del ciudadano necesarios para la gestión
                  de su participación (nombre, ciudad, historial de CC) son visibles para el gobierno
                  de su misma ciudad. Nunca se comparten datos con gobiernos de otras ciudades.
                </li>
                <li>
                  <strong>Otros ciudadanos:</strong> el nombre y ciudad del creador de un proyecto son
                  públicos. El soporte a proyectos es anónimo (solo se muestran conteos agregados).
                </li>
                <li>
                  <strong>Proveedores de servicio:</strong> servicios técnicos necesarios para operar la
                  plataforma (hosting, email transaccional, almacenamiento de archivos). Estos
                  proveedores están sujetos a obligaciones de confidencialidad.
                </li>
                <li>
                  <strong>Autoridades:</strong> cuando sea requerido por orden judicial o disposición legal.
                </li>
              </ul>

              <h2>7. Aislamiento por Jurisdicción</h2>
              <p>
                La plataforma implementa aislamiento estricto por jurisdicción. Los datos de los ciudadanos
                de una ciudad solo son accesibles para el gobierno de esa misma ciudad. No existe acceso
                cruzado entre gobiernos de diferentes ciudades.
              </p>

              <h2>8. Retención de Datos</h2>
              <ul>
                <li><strong>Cuentas activas:</strong> los datos se conservan mientras la cuenta esté activa.</li>
                <li><strong>Cuentas eliminadas:</strong> los datos se anoniman o eliminan dentro de los 30 días posteriores a la solicitud de eliminación, salvo datos que deban conservarse por obligación legal.</li>
                <li><strong>Notificaciones:</strong> se eliminan automáticamente después de 90 días.</li>
                <li><strong>Registros de auditoría:</strong> se conservan por el plazo legal aplicable.</li>
              </ul>

              <h2>9. Derechos del Usuario</h2>
              <p>
                De acuerdo con la Ley 25.326, el usuario tiene derecho a:
              </p>
              <ul>
                <li><strong>Acceso:</strong> solicitar qué datos personales tenemos almacenados.</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                <li><strong>Supresión:</strong> solicitar la eliminación de sus datos personales.</li>
                <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en ciertos supuestos.</li>
              </ul>
              <p>
                Para ejercer estos derechos, contactar a <a href="mailto:contacto@citixen.org">contacto@citixen.org</a>.
                Se responderá dentro de los 10 días hábiles.
              </p>

              <h2>10. Cookies y Tecnologías Similares</h2>
              <p>
                La plataforma utiliza cookies estrictamente necesarias para el funcionamiento del servicio:
              </p>
              <ul>
                <li><strong>Cookie de sesión:</strong> autenticación del usuario (httpOnly, secure).</li>
                <li><strong>Preferencias:</strong> idioma y configuración de interfaz.</li>
              </ul>
              <p>
                No utilizamos cookies de rastreo, publicidad ni analytics de terceros.
              </p>

              <h2>11. Menores de Edad</h2>
              <p>
                La plataforma no está dirigida a menores de 16 años. No recopilamos intencionalmente datos
                de menores. Si detectamos una cuenta de un menor, procederemos a su eliminación.
              </p>

              <h2>12. Transferencia Internacional</h2>
              <p>
                Los datos pueden almacenarse en servidores ubicados fuera de la República Argentina
                (servicios cloud). En todos los casos, se garantiza un nivel adecuado de protección
                conforme a la normativa aplicable.
              </p>

              <h2>13. Modificaciones</h2>
              <p>
                Citixen puede actualizar esta Política de Privacidad. Los cambios significativos serán
                notificados a los usuarios. La fecha de vigencia se actualizará en la parte superior
                de este documento.
              </p>

              <h2>14. Autoridad de Control</h2>
              <p>
                La Agencia de Acceso a la Información Pública (AAIP) es el órgano de control en materia
                de protección de datos personales en la República Argentina.
                Sitio web: <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer">www.argentina.gob.ar/aaip</a>
              </p>

              <h2>15. Contacto</h2>
              <p>
                Para consultas sobre esta Política de Privacidad o el tratamiento de sus datos personales,
                puede contactarnos a través de <a href="mailto:contacto@citixen.org">contacto@citixen.org</a>.
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
