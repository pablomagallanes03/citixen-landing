import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Términos de Uso — Citixen</title>
        <meta name="description" content="Términos y condiciones de uso de la plataforma Citixen para gobiernos locales y ciudadanos." />
        <meta property="og:title" content="Términos de Uso — Citixen" />
        <meta property="og:description" content="Términos y condiciones de uso de la plataforma Citixen." />
        <meta property="og:type" content="article" />
      </Head>

      <Navbar />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="container">
            <div className="legal-hero-inner">
              <span className="legal-label">Documento legal</span>
              <h1>Términos de Uso</h1>
              <p className="legal-subtitle">
                Condiciones que rigen el uso de la plataforma Citixen,
                sus servicios y herramientas para gobiernos locales y ciudadanos.
              </p>
              <div className="legal-meta">
                <div className="meta-item">
                  <span className="meta-label">Vigencia</span>
                  <span className="meta-value">Mayo 2026</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Jurisdicción</span>
                  <span className="meta-value">República Argentina</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-content">
          <div className="container">
            <div className="legal-body">

              <h2>1. Aceptación de los Términos</h2>
              <p>
                Al acceder o utilizar la plataforma Citixen (en adelante, &ldquo;la Plataforma&rdquo;), incluyendo el portal
                web, la aplicación móvil, los paneles de administración y cualquier servicio asociado, usted
                acepta estos Términos de Uso en su totalidad. Si no está de acuerdo con alguna de estas
                condiciones, no debe utilizar la Plataforma.
              </p>
              <p>
                La Plataforma es operada por <strong>Citixen Technologies SAS</strong> (en adelante, &ldquo;Citixen&rdquo;),
                con domicilio en la República Argentina.
              </p>

              <h2>2. Descripción del Servicio</h2>
              <p>
                Citixen es una plataforma de participación ciudadana y transparencia gubernamental que permite a
                los gobiernos locales publicar información sobre sus proyectos, recibir retroalimentación de los
                ciudadanos y gestionar la asignación de recursos públicos a través de Créditos Cívicos.
              </p>
              <p>
                La Plataforma opera en tres niveles de funcionalidad:
              </p>
              <ul>
                <li><strong>Nivel 1 — Transparencia:</strong> portal público con proyectos, índice de transparencia y suscripción a novedades.</li>
                <li><strong>Nivel 2 — Participación:</strong> consultas ciudadanas, propuestas y priorización de necesidades.</li>
                <li><strong>Nivel 3 — Asignación:</strong> gestión de Créditos Cívicos, financiamiento de proyectos sociales y desembolsos.</li>
              </ul>

              <h2>3. Registro y Cuentas</h2>
              <h3>3.1 Gobiernos locales</h3>
              <p>
                El registro de un gobierno local requiere la solicitud a través del formulario de la Plataforma.
                Citixen se reserva el derecho de aprobar o rechazar solicitudes de registro según criterios de
                verificación institucional. La aprobación no implica relación contractual permanente.
              </p>
              <h3>3.2 Ciudadanos</h3>
              <p>
                Los ciudadanos pueden registrarse en la aplicación móvil proporcionando información veraz y
                actualizada. Cada persona puede tener una única cuenta. El uso de datos falsos o la creación
                de cuentas múltiples puede resultar en la suspensión de la cuenta.
              </p>
              <h3>3.3 Seguridad de la cuenta</h3>
              <p>
                El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso.
                Citixen no será responsable por accesos no autorizados derivados de la negligencia del usuario
                en el resguardo de sus credenciales.
              </p>

              <h2>4. Créditos Cívicos</h2>
              <p>
                Los Créditos Cívicos (CC) son unidades de asignación que representan poder de decisión
                ciudadana sobre recursos públicos. No constituyen dinero, criptomonedas, valores negociables
                ni activos financieros de ningún tipo.
              </p>
              <ul>
                <li>Los CC se otorgan a los ciudadanos cuando el gobierno local aprueba comprobantes de pago de impuestos o tasas municipales.</li>
                <li>Los CC solo pueden utilizarse para apoyar proyectos sociales dentro de la misma ciudad del ciudadano.</li>
                <li>Los CC no pueden transferirse entre ciudadanos, venderse ni convertirse directamente a dinero.</li>
                <li>Si un proyecto apoyado se cancela, los CC se devuelven automáticamente al ciudadano.</li>
              </ul>

              <h2>5. Proyectos y Organizaciones</h2>
              <p>
                Los ciudadanos pueden crear proyectos sociales e iniciativas ciudadanas a través de la Plataforma.
                Los proyectos que requieren financiamiento con CC están sujetos a la aprobación del gobierno local
                correspondiente.
              </p>
              <p>
                Las organizaciones registradas en la Plataforma son responsabilidad de sus representantes legales.
                Citixen no actúa como garante de las organizaciones ni de la ejecución de sus proyectos.
              </p>

              <h2>6. Contenido del Usuario</h2>
              <p>
                Los usuarios son responsables del contenido que publican en la Plataforma, incluyendo pero no
                limitado a: descripciones de proyectos, propuestas, comentarios, evidencia de ejecución y
                cualquier material adjunto.
              </p>
              <p>
                Citixen se reserva el derecho de moderar, ocultar o eliminar contenido que:
              </p>
              <ul>
                <li>Sea ilegal, difamatorio, amenazante o acosador.</li>
                <li>Contenga información falsa o engañosa.</li>
                <li>Viole derechos de propiedad intelectual de terceros.</li>
                <li>Sea spam o contenido publicitario no autorizado.</li>
                <li>Viole cualquier otra disposición de estos Términos.</li>
              </ul>

              <h2>7. Propiedad Intelectual</h2>
              <p>
                La Plataforma, su diseño, código fuente, marcas, logotipos y contenido original son propiedad
                de Citixen Technologies SAS y están protegidos por las leyes de propiedad intelectual aplicables.
              </p>
              <p>
                El contenido publicado por los usuarios permanece bajo su titularidad, pero al publicarlo
                otorgan a Citixen una licencia no exclusiva, gratuita y mundial para mostrarlo dentro de la
                Plataforma y en los portales públicos asociados.
              </p>

              <h2>8. Limitación de Responsabilidad</h2>
              <p>
                Citixen proporciona la Plataforma &ldquo;tal como está&rdquo; y no garantiza la disponibilidad
                ininterrumpida del servicio. Citixen no será responsable por:
              </p>
              <ul>
                <li>Interrupciones del servicio por mantenimiento o causas de fuerza mayor.</li>
                <li>Pérdidas derivadas del mal uso de la Plataforma por parte del usuario.</li>
                <li>La veracidad del contenido publicado por gobiernos, ciudadanos u organizaciones.</li>
                <li>Los desembolsos de fondos, que son responsabilidad exclusiva del gobierno local correspondiente.</li>
              </ul>

              <h2>9. Suspensión y Terminación</h2>
              <p>
                Citixen se reserva el derecho de suspender o cancelar cuentas que violen estos Términos de Uso,
                previa notificación cuando sea posible. Los gobiernos locales pueden ser suspendidos por el
                administrador de la Plataforma con motivo documentado.
              </p>

              <h2>10. Modificaciones</h2>
              <p>
                Citixen puede actualizar estos Términos de Uso en cualquier momento. Los cambios significativos
                serán notificados a los usuarios a través de la Plataforma. El uso continuado del servicio
                después de una modificación implica la aceptación de los nuevos términos.
              </p>

              <h2>11. Legislación Aplicable</h2>
              <p>
                Estos Términos de Uso se rigen por las leyes de la República Argentina. Cualquier controversia
                será sometida a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires,
                renunciando a cualquier otro fuero que pudiera corresponder.
              </p>

              <h2>12. Contacto</h2>
              <p>
                Para consultas sobre estos Términos de Uso, puede contactarnos a
                través de <a href="mailto:contacto@citixen.org">contacto@citixen.org</a>.
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
