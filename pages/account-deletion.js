import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AccountDeletion() {
  return (
    <>
      <Head>
        <title>Eliminación de cuenta — Citixen</title>
        <meta
          name="description"
          content="Solicitá la eliminación de tu cuenta y datos asociados en Citixen. Información sobre qué datos se borran y cuáles se conservan por obligación legal."
        />
        <meta property="og:title" content="Eliminación de cuenta — Citixen" />
        <meta
          property="og:description"
          content="Cómo solicitar la eliminación de tu cuenta de Citixen y qué datos se borran."
        />
        <meta property="og:type" content="article" />
      </Head>

      <Navbar />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="container">
            <div className="legal-hero-inner">
              <span className="legal-label">Account deletion / Eliminación de cuenta</span>
              <h1>Eliminar tu cuenta de Citixen</h1>
              <p className="legal-subtitle">
                Solicitá la eliminación de tu cuenta y de los datos personales asociados.
                Tu solicitud se procesa en un plazo máximo de 30 días.
              </p>
              <div className="legal-meta">
                <div className="meta-item">
                  <span className="meta-label">Última actualización</span>
                  <span className="meta-value">21 de mayo de 2026</span>
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

              {/* English summary for Google Play reviewers / international users */}
              <h2>English summary</h2>
              <p>
                You can request deletion of your Citixen account and associated personal data in two ways:
              </p>
              <ol>
                <li>
                  <strong>From the mobile app:</strong> open the Citixen app, sign in, go to Profile
                  (&ldquo;Perfil&rdquo; / &ldquo;Mi Impacto&rdquo;) → Settings → &ldquo;Eliminar cuenta&rdquo; (Delete account).
                  Confirm the action. Your account is deactivated immediately and your personal data is anonymized
                  within 30 days.
                </li>
                <li>
                  <strong>By email:</strong> send a written request to{' '}
                  <a href="mailto:privacy@citixen.org">privacy@citixen.org</a> from the email address
                  registered on your account. Subject: &ldquo;Account deletion request&rdquo;.
                  We process the request within 30 days.
                </li>
              </ol>
              <p>
                <strong>Data deleted:</strong> name, email, phone, profile photo, in-app activity (likes,
                comments, proposals, project support), push notification tokens, device identifiers.
              </p>
              <p>
                <strong>Data retained (legal obligation):</strong> tax payment receipts (10 years —
                Argentine Tax Law), anonymized audit logs (3 years), Civic Credit transactions tied to
                completed projects (kept anonymized for fiscal traceability).
              </p>

              <hr />

              {/* ═══ 1. INTRODUCCIÓN ═══ */}
              <h2>1. Tu derecho a solicitar la eliminación</h2>
              <p>
                Como usuario de Citixen, tenés derecho a solicitar la eliminación de tu cuenta y de los
                datos personales asociados, en cumplimiento de la Ley 25.326 de Protección de Datos
                Personales de Argentina y del Reglamento General de Protección de Datos (RGPD) de la
                Unión Europea.
              </p>
              <p>
                Este derecho es gratuito, no requiere justificación, y puede ejercerse en cualquier momento.
              </p>

              {/* ═══ 2. CÓMO SOLICITAR LA ELIMINACIÓN ═══ */}
              <h2>2. Cómo solicitar la eliminación</h2>

              <h3>2.1 Desde la aplicación móvil (recomendado)</h3>
              <ol>
                <li>Abrí la app Citixen e iniciá sesión.</li>
                <li>Tocá la pestaña <strong>&ldquo;Perfil&rdquo;</strong> (Modo Comunidad) o <strong>&ldquo;Mi Impacto&rdquo;</strong> (Créditos Cívicos).</li>
                <li>Ingresá a <strong>Configuración</strong> (ícono de engranaje).</li>
                <li>Seleccioná <strong>&ldquo;Eliminar cuenta&rdquo;</strong>.</li>
                <li>Confirmá la acción ingresando tu contraseña.</li>
              </ol>
              <p>
                Tu cuenta se desactiva inmediatamente. No vas a poder volver a iniciar sesión con esa
                cuenta. Los datos personales se anonimizan en el sistema dentro de los 30 días.
              </p>

              <h3>2.2 Por correo electrónico</h3>
              <p>
                Si no podés acceder a la app (por ejemplo, ya la desinstalaste o perdiste acceso a tu
                cuenta), enviá un correo a:
              </p>
              <p>
                <a href="mailto:privacy@citixen.org">privacy@citixen.org</a>
              </p>
              <p>
                <strong>Asunto sugerido:</strong> &ldquo;Solicitud de eliminación de cuenta&rdquo;
              </p>
              <p>
                <strong>Contenido del correo:</strong>
              </p>
              <ul>
                <li>El email con el que está registrada tu cuenta</li>
                <li>Nombre completo (para validar tu identidad)</li>
                <li>Ciudad declarada al registrarte</li>
                <li>Confirmación expresa de que solicitás la eliminación de tu cuenta y datos asociados</li>
              </ul>
              <p>
                Procesamos la solicitud dentro de los 30 días corridos desde su recepción y te enviamos
                un correo de confirmación cuando la eliminación se completa.
              </p>

              {/* ═══ 3. QUÉ DATOS SE ELIMINAN ═══ */}
              <h2>3. Datos que se eliminan</h2>
              <p>
                Cuando se procesa tu solicitud, se eliminan o anonimizan los siguientes datos:
              </p>
              <ul>
                <li>Nombre completo, nombre de usuario, dirección de correo electrónico, número de teléfono</li>
                <li>Foto de perfil (avatar) y cualquier foto subida a la app</li>
                <li>Ciudad declarada y demás datos de tu perfil ciudadano</li>
                <li>Historial de actividad en la app: likes, comentarios, propuestas, apoyo a proyectos</li>
                <li>Tokens de notificación push (FCM)</li>
                <li>Identificadores del dispositivo asociados a tu cuenta</li>
                <li>Saldo de Créditos Cívicos no asignados (se reversan al sistema)</li>
                <li>Datos bancarios cargados para reclamos de proyectos completados</li>
              </ul>

              {/* ═══ 4. QUÉ DATOS SE CONSERVAN ═══ */}
              <h2>4. Datos que se conservan por obligación legal</h2>
              <p>
                Por obligaciones legales y para mantener la integridad fiscal y de auditoría del
                sistema, ciertos datos se conservan de forma anonimizada (sin posibilidad de
                identificarte) durante los plazos establecidos por ley:
              </p>
              <ul>
                <li>
                  <strong>Comprobantes fiscales:</strong> los comprobantes de pago de impuestos que
                  subiste a la app se conservan por 10 años, según la legislación tributaria argentina.
                  Se anonimizan removiendo tu identidad pero manteniendo el dato fiscal asociado al
                  municipio.
                </li>
                <li>
                  <strong>Transacciones de Créditos Cívicos asignados a proyectos completados:</strong>
                  {' '}los Créditos que asignaste a proyectos que ya completaron su ciclo se conservan
                  anonimizados. No se eliminan porque forman parte de la trazabilidad fiscal del
                  municipio.
                </li>
                <li>
                  <strong>Registros de auditoría:</strong> los logs de acciones críticas (aprobación
                  por gobierno, suspensiones, moderación) se conservan por 3 años de forma anonimizada
                  para cumplir con requerimientos legales y de auditoría.
                </li>
                <li>
                  <strong>Datos de transparencia pública:</strong> proyectos que creaste y que fueron
                  completados con financiamiento ciudadano se mantienen como registro público
                  anonimizado del proceso democrático municipal.
                </li>
              </ul>
              <p>
                La anonimización implica que estos registros no pueden ser usados para identificarte
                directa ni indirectamente. No constituyen datos personales bajo la Ley 25.326 ni el
                RGPD una vez completado el proceso.
              </p>

              {/* ═══ 5. PLAZO DE EJECUCIÓN ═══ */}
              <h2>5. Plazo de ejecución</h2>
              <p>
                Las solicitudes de eliminación se procesan en un <strong>plazo máximo de 30 días corridos</strong>
                {' '}desde su recepción, en cumplimiento del artículo 16 de la Ley 25.326.
              </p>
              <p>
                Si en algún caso excepcional el plazo se extiende (por ejemplo, una solicitud durante
                un proceso de verificación legal en curso), te notificamos por correo electrónico
                explicando el motivo y el nuevo plazo estimado.
              </p>

              {/* ═══ 6. CONFIRMACIÓN ═══ */}
              <h2>6. Confirmación de eliminación</h2>
              <p>
                Una vez completada la eliminación, recibís un correo electrónico de confirmación a la
                dirección que usaste para solicitarla. El correo describe qué datos se eliminaron y
                cuáles se conservaron anonimizados, con detalle de las bases legales aplicadas.
              </p>

              {/* ═══ 7. CONSULTAS ═══ */}
              <h2>7. Consultas sobre el proceso</h2>
              <p>
                Si tenés dudas sobre el proceso de eliminación, sobre el tratamiento de tus datos, o
                querés ejercer otros derechos (acceso, rectificación, portabilidad), podés contactarnos
                a través de los siguientes canales:
              </p>
              <p>
                <strong>Contacto de privacidad:</strong>{' '}
                <a href="mailto:privacy@citixen.org">privacy@citixen.org</a>
                <br />
                <strong>Política de privacidad completa:</strong>{' '}
                <Link href="/privacy">citixen.org/privacy</Link>
                <br />
                <strong>Términos y condiciones:</strong>{' '}
                <Link href="/terms">citixen.org/terms</Link>
              </p>
              <p>
                También podés presentar un reclamo ante la Agencia de Acceso a la Información Pública
                (AAIP) de Argentina si considerás que tus derechos no fueron respetados.
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
