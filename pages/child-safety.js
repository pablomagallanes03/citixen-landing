import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ChildSafety() {
  return (
    <>
      <Head>
        <title>Estándares de Seguridad Infantil — Citixen</title>
        <meta name="description" content="Estándares de Citixen contra la explotación y abuso sexual infantil (CSAE/CSAM). Política de prevención, denuncia y cumplimiento legal." />
        <meta property="og:title" content="Estándares de Seguridad Infantil — Citixen" />
        <meta property="og:description" content="Estándares de Citixen contra la explotación y abuso sexual infantil. Política de prevención, mecanismos de denuncia y cumplimiento legal." />
        <meta property="og:type" content="article" />
      </Head>

      <Navbar />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="container">
            <div className="legal-hero-inner">
              <span className="legal-label">Documento legal</span>
              <h1>Estándares de Seguridad Infantil</h1>
              <p className="legal-subtitle">
                Estándares de Citixen contra la explotación y el abuso sexual infantil (CSAE/CSAM),
                mecanismos de denuncia y procedimientos de respuesta.
              </p>
              <div className="legal-meta">
                <div className="meta-item">
                  <span className="meta-label">Última actualización</span>
                  <span className="meta-value">27 de mayo de 2026</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Marco normativo</span>
                  <span className="meta-value">Ley 26.061 (Argentina) + estándares Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-content">
          <div className="container">
            <div className="legal-body">

              <h2>1. Alcance y propósito</h2>
              <p>
                Citixen es una plataforma de participación ciudadana destinada exclusivamente a personas
                mayores de dieciocho (18) años. Esta política describe los estándares que Citixen Technologies
                SAS (&ldquo;Citixen&rdquo;) aplica para prevenir, detectar y responder a cualquier contenido
                o conducta vinculada a la explotación y abuso sexual infantil (Child Sexual Abuse and
                Exploitation — CSAE), incluyendo el material de abuso sexual infantil (Child Sexual Abuse
                Material — CSAM).
              </p>
              <p>
                Estos estándares se aplican a toda la plataforma: aplicación móvil, paneles web y servicios
                asociados. Se complementan con nuestros{' '}
                <Link href="/terms">Términos y Condiciones</Link> y nuestra{' '}
                <Link href="/privacy">Política de Privacidad</Link>.
              </p>

              <h2>2. Prohibición absoluta</h2>
              <p>
                Citixen <strong>prohíbe estrictamente</strong> la publicación, distribución, intercambio,
                solicitación o promoción —directa o indirecta— de material de abuso sexual infantil (CSAM),
                así como cualquier conducta destinada a captar, contactar, manipular, coaccionar o explotar
                sexualmente a menores de edad a través de la plataforma o utilizando recursos de la plataforma.
              </p>
              <p>
                Esta prohibición incluye, sin que la enumeración sea taxativa:
              </p>
              <ul>
                <li>Imágenes, videos, audio o cualquier representación visual o auditiva de abuso sexual
                  infantil, real o generada artificialmente (incluyendo CSAM generado por inteligencia
                  artificial).</li>
                <li>Texto, descripciones, narrativas o relatos que normalicen, promocionen, faciliten o
                  glorifiquen el abuso sexual infantil.</li>
                <li>Contacto con menores con fines de captación, grooming o cualquier otra forma de
                  explotación sexual.</li>
                <li>Enlaces, referencias, código o cualquier vector que dirija a contenido CSAM alojado
                  en plataformas externas.</li>
                <li>Uso de la plataforma para coordinar, organizar o facilitar cualquier delito contra
                  la integridad sexual de menores.</li>
              </ul>

              <h2>3. Política de cero tolerancia</h2>
              <p>
                Cualquier contenido o conducta que infrinja los estándares de la Sección 2 resultará en:
              </p>
              <ul>
                <li><strong>Remoción inmediata</strong> del contenido infractor de la plataforma.</li>
                <li><strong>Suspensión y eliminación inmediata</strong> de la cuenta del usuario responsable.</li>
                <li><strong>Preservación de la evidencia</strong> conforme a los requisitos legales aplicables,
                  con cadena de custodia.</li>
                <li><strong>Denuncia a las autoridades competentes</strong> según se describe en la Sección 6.</li>
                <li><strong>Cooperación plena</strong> con investigaciones judiciales y administrativas
                  conforme a la ley aplicable.</li>
              </ul>
              <p>
                No se admiten advertencias previas, segundas oportunidades, descargos ni atenuantes
                discrecionales frente a contenido CSAM. La aplicación de esta política es automática
                ante la confirmación del contenido.
              </p>

              <h2>4. Mecanismo de denuncia en la app</h2>
              <p>
                La plataforma incluye mecanismos accesibles para que cualquier usuario denuncie contenido
                o conducta vinculada a la seguridad infantil:
              </p>
              <ul>
                <li><strong>Reporte de contenido in-app:</strong> proyectos, organizaciones, propuestas,
                  comentarios e iniciativas comunitarias incluyen un botón de denuncia accesible desde
                  el menú de cada elemento. La categoría &ldquo;Seguridad infantil / CSAE&rdquo; está
                  disponible y se procesa con prioridad crítica.</li>
                <li><strong>Reporte por correo electrónico:</strong> cualquier persona —usuaria o no de
                  la plataforma— puede reportar contenido relacionado con CSAE/CSAM enviando un correo a{' '}
                  <a href="mailto:legal@citixen.org">legal@citixen.org</a> con el asunto
                  &ldquo;Reporte CSAE&rdquo;.</li>
                <li><strong>Procesamiento prioritario:</strong> los reportes de seguridad infantil tienen
                  prioridad máxima sobre cualquier otra cola de moderación y son atendidos por personal
                  con capacitación específica.</li>
              </ul>
              <p>
                Las denuncias pueden hacerse de forma anónima. Citixen no exige identificación al denunciante
                para procesar el reporte. La identidad del denunciante, cuando se conozca, se mantiene
                confidencial en la medida que la ley aplicable lo permita.
              </p>

              <h2>5. Tiempos de respuesta</h2>
              <ul>
                <li><strong>Recepción y triage:</strong> dentro de las 24 horas de recibida la denuncia.</li>
                <li><strong>Revisión y decisión:</strong> dentro de las 48 horas hábiles. Para contenido
                  con indicios claros de CSAM, la remoción puede ser inmediata, antes de completar la
                  revisión formal.</li>
                <li><strong>Notificación al denunciante:</strong> dentro de las 72 horas hábiles, cuando
                  el reporte incluya datos de contacto y no haya restricciones legales para informar el
                  resultado.</li>
                <li><strong>Reporte a autoridades:</strong> sin demora indebida una vez confirmado el
                  contenido, conforme a la Sección 6.</li>
              </ul>

              <h2>6. Cooperación con autoridades</h2>
              <p>
                Citixen denuncia el contenido CSAM confirmado a las autoridades competentes en las
                jurisdicciones donde opera:
              </p>
              <ul>
                <li><strong>Argentina:</strong> Unidad Fiscal Especializada en Ciberdelincuencia
                  (UFECI) del Ministerio Público Fiscal de la Nación, y autoridades policiales locales
                  competentes.</li>
                <li><strong>Cooperación internacional:</strong> National Center for Missing & Exploited
                  Children (NCMEC) en Estados Unidos, INHOPE y autoridades equivalentes en las
                  jurisdicciones donde se identifique un nexo material con la conducta denunciada.</li>
                <li><strong>Preservación de evidencia:</strong> Citixen preserva contenido, metadatos
                  e información de usuario asociada a denuncias confirmadas durante el período que la
                  ley aplicable o las autoridades requieran, con cadena de custodia documentada.</li>
                <li><strong>Respuesta a órdenes judiciales:</strong> Citixen cumple con las órdenes
                  judiciales, subpoenas y solicitudes formales de autoridades competentes según los
                  procedimientos legales aplicables.</li>
              </ul>

              <h2>7. Prevención y diseño de producto</h2>
              <p>
                Más allá de la respuesta reactiva, Citixen implementa medidas preventivas a nivel de
                producto:
              </p>
              <ul>
                <li><strong>Restricción de edad:</strong> la plataforma está destinada exclusivamente
                  a mayores de 18 años. Los Términos y Condiciones requieren mayoría de edad para
                  registrarse, y la operatoria con Créditos Cívicos requiere validación por parte del
                  gobierno municipal.</li>
                <li><strong>Filtrado automatizado de contenido:</strong> propuestas y comentarios
                  ciudadanos se procesan con filtros que detectan patrones de lenguaje inadecuado.
                  Contenido marcado por el filtro pasa a revisión humana antes de publicarse.</li>
                <li><strong>Sin mensajería privada entre usuarios desconocidos:</strong> la plataforma
                  no incluye un sistema de mensajería privada general entre ciudadanos. Las
                  interacciones se desarrollan sobre objetos públicos (proyectos, propuestas,
                  iniciativas comunitarias) con auditoría completa.</li>
                <li><strong>Sin contenido para menores:</strong> Citixen no aloja, promociona ni
                  recomienda contenido destinado a menores.</li>
                <li><strong>Moderación humana:</strong> el equipo de moderación recibe capacitación
                  específica en detección y respuesta a CSAE/CSAM.</li>
              </ul>

              <h2>8. Cumplimiento legal</h2>
              <p>
                Citixen cumple con la legislación aplicable contra la explotación y abuso sexual
                infantil, incluyendo, en lo pertinente:
              </p>
              <ul>
                <li><strong>Argentina:</strong> Ley 26.061 de Protección Integral de los Derechos de
                  las Niñas, Niños y Adolescentes; Código Penal Argentino, artículos 128 (producción,
                  distribución y tenencia de representaciones sexuales de menores) y 131 (grooming);
                  Ley 26.388 de delitos informáticos; Ley 26.904 de captación de menores con fines
                  sexuales (grooming).</li>
                <li><strong>Convención sobre los Derechos del Niño</strong> (ONU, 1989) y Protocolo
                  Facultativo relativo a la venta de niños, la prostitución infantil y la utilización
                  de niños en la pornografía.</li>
                <li><strong>Estándares de la industria:</strong> alineamiento con las políticas
                  publicadas por Google Play sobre estándares de seguridad infantil y los principios
                  voluntarios sobre seguridad en línea promovidos por gobiernos y organizaciones
                  internacionales.</li>
              </ul>

              <h2>9. Capacitación interna</h2>
              <p>
                El equipo de Citixen con acceso a herramientas de moderación recibe:
              </p>
              <ul>
                <li>Capacitación inicial obligatoria sobre identificación de CSAE/CSAM, manejo seguro
                  del contenido sospechoso (sin necesidad de almacenamiento personal), preservación
                  de evidencia y procedimientos de escalación.</li>
                <li>Acceso restringido al contenido sospechoso, bajo el principio de mínima exposición
                  necesaria.</li>
                <li>Soporte psicológico disponible para personal expuesto a contenido sensible.</li>
              </ul>

              <h2>10. Auditoría y mejora continua</h2>
              <p>
                Citixen revisa estos estándares al menos una vez por año o cuando ocurra alguno de
                los siguientes eventos: cambios sustanciales en la legislación aplicable, identificación
                de patrones nuevos de abuso, requerimientos de Google Play u otras plataformas de
                distribución, o recomendaciones de autoridades competentes.
              </p>
              <p>
                Los registros internos de denuncias, decisiones y reportes a autoridades se conservan
                conforme a los plazos legales aplicables y se utilizan para análisis agregado
                anonimizado destinado a mejorar la prevención.
              </p>

              <h2>11. Punto de contacto</h2>
              <p>
                Para reportar contenido o conducta vinculada a la seguridad infantil, o para consultas
                de autoridades regulatorias y judiciales sobre el cumplimiento de Citixen con la
                política de Estándares de Seguridad Infantil:
              </p>
              <p>
                <strong>Citixen Technologies SAS</strong><br />
                Bell Ville, Provincia de Córdoba<br />
                República Argentina
              </p>
              <p>
                Punto de contacto designado para reportes CSAE y consultas de autoridades regulatorias:{' '}
                <a href="mailto:legal@citixen.org">legal@citixen.org</a>
              </p>
              <p>
                El punto de contacto designado está preparado para responder consultas de autoridades
                regulatorias y judiciales sobre las prácticas de prevención de CSAM y el cumplimiento
                de Citixen con la presente política.
              </p>

              <h2>12. Cambios a estos estándares</h2>
              <p>
                Citixen podrá actualizar estos Estándares de Seguridad Infantil para reflejar cambios
                normativos, técnicos o de producto. La versión vigente está publicada permanentemente
                en esta URL pública. Cambios sustanciales serán comunicados a los usuarios registrados
                con al menos treinta (30) días de anticipación a través del medio de notificación
                habitual de la plataforma.
              </p>

              <p className="legal-footnote">
                <em>
                  Estos Estándares forman parte del marco de cumplimiento de Citixen junto con los{' '}
                  <Link href="/terms">Términos y Condiciones</Link> y la{' '}
                  <Link href="/privacy">Política de Privacidad</Link>.
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
