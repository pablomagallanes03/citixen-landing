import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones — Citixen</title>
        <meta name="description" content="Términos y Condiciones de uso de la plataforma Citixen para gobiernos locales y ciudadanos." />
        <meta property="og:title" content="Términos y Condiciones — Citixen" />
        <meta property="og:description" content="Términos y Condiciones de uso de la plataforma Citixen." />
        <meta property="og:type" content="article" />
      </Head>

      <Navbar />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="container">
            <div className="legal-hero-inner">
              <span className="legal-label">Documento legal</span>
              <h1>Términos y Condiciones</h1>
              <p className="legal-subtitle">
                Condiciones que rigen el uso de la plataforma Citixen,
                sus servicios y herramientas para gobiernos locales y ciudadanos.
              </p>
              <div className="legal-meta">
                <div className="meta-item">
                  <span className="meta-label">Vigencia</span>
                  <span className="meta-value">24 de agosto de 2026</span>
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

              {/* ═══ 1. ACEPTACIÓN Y ELEGIBILIDAD ═══ */}
              <h2>1. Aceptación y Elegibilidad</h2>

              <h3>1.1 Aceptación de los Términos</h3>
              <p>
                Estos Términos y Condiciones (&ldquo;Términos&rdquo;) constituyen un acuerdo legalmente vinculante entre usted (&ldquo;Usuario&rdquo;, &ldquo;usted&rdquo; o &ldquo;su&rdquo;) y Citixen Technologies SAS, sociedad constituida bajo las leyes de la República Argentina, con domicilio en Bell Ville, Provincia de Córdoba, Argentina (&ldquo;Citixen&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;).
              </p>
              <p>
                Al crear una cuenta, acceder o utilizar la plataforma Citixen, la aplicación móvil o cualquier servicio asociado (conjuntamente, la &ldquo;Plataforma&rdquo;), usted reconoce que ha leído, comprendido y acepta quedar obligado por estos Términos. Si no está de acuerdo, no debe acceder ni utilizar la Plataforma.
              </p>

              <h3>1.2 Elegibilidad</h3>
              <p>Para utilizar la Plataforma, usted debe:</p>
              <ul>
                <li>Tener al menos dieciocho (18) años de edad;</li>
                <li>Tener capacidad legal para celebrar acuerdos vinculantes conforme la legislación aplicable;</li>
                <li>No haber sido previamente suspendido, removido o excluido de la Plataforma;</li>
                <li>Proporcionar información precisa, actualizada y completa durante el registro y mantener su exactitud durante todo el uso de la Plataforma.</li>
              </ul>

              <h3>1.3 Usuarios gubernamentales</h3>
              <p>
                Si accede a la Plataforma en representación de una entidad gubernamental local, usted declara y garantiza que tiene la autoridad para vincular a dicha entidad a estos Términos y que dicha entidad acepta quedar obligada por estos Términos a través de su aceptación.
              </p>

              <h3>1.4 Representantes de organizaciones</h3>
              <p>
                Si crea o gestiona una Organización (según se define en la Sección 6) en la Plataforma, usted declara y garantiza que tiene la autoridad para actuar en representación de dicha organización y que acepta la responsabilidad personal por el cumplimiento de estos Términos en dicha capacidad.
              </p>

              {/* ═══ 2. DESCRIPCIÓN DE LA PLATAFORMA ═══ */}
              <h2>2. Descripción de la Plataforma</h2>

              <h3>2.1 Qué es Citixen</h3>
              <p>
                Citixen es una plataforma tecnológica de participación cívica que permite a los ciudadanos dirigir recursos públicos hacia proyectos sociales en su municipio a través de un mecanismo digital llamado Créditos Cívicos. La Plataforma proporciona herramientas para:
              </p>
              <ul>
                <li>Que los ciudadanos reciban, gestionen y asignen Créditos Cívicos hacia proyectos sociales e iniciativas cívicas dentro de su municipio;</li>
                <li>Que los ciudadanos y organizaciones propongan, creen y gestionen proyectos sociales e iniciativas comunitarias;</li>
                <li>Que los gobiernos locales validen la identidad ciudadana, revisen y aprueben proyectos, gestionen ecosistemas cívicos y registren determinaciones de desembolso;</li>
                <li>Que todos los participantes realicen seguimiento de la participación cívica, el progreso de los proyectos y el impacto comunitario.</li>
              </ul>
              <p>
                <strong>El uso de la Plataforma es gratuito para los ciudadanos.</strong> No se cobra cargo de registro, suscripción, transacción ni de ningún otro tipo a los ciudadanos. La relación económica subyacente a la participación cívica es entre usted y su gobierno local, no entre usted y Citixen. La Plataforma no facilita la captación de capital privado para proyectos financiados por Créditos Cívicos — las asignaciones de CC representan el ejercicio de un derecho de participación cívica sobre recursos que ya forman parte del presupuesto municipal. Esta descripción corresponde al mecanismo de Créditos Cívicos: las Iniciativas Comunitarias pueden incorporar, de forma optativa, un enlace externo de recaudación operado por terceros, que se rige por la Sección 5.9.
              </p>

              <h3>2.2 Qué NO es Citixen</h3>
              <p>Citixen es un proveedor de tecnología. <strong>Citixen NO es:</strong></p>
              <ul>
                <li>Un banco, institución financiera o negocio de servicios monetarios;</li>
                <li>Un procesador de pagos, transmisor de dinero o intermediario financiero;</li>
                <li>Un fiduciario, fideicomisario o custodio de fondos, activos o instrumentos financieros;</li>
                <li>Una agencia gubernamental, autoridad pública o extensión de cualquier entidad gubernamental;</li>
                <li>Una plataforma de inversión, plataforma de crowdfunding o mercado de valores;</li>
                <li>Un garante de cualquier resultado de proyecto, acción gubernamental o desembolso financiero.</li>
              </ul>
              <p>
                Esta enumeración no se altera por la posibilidad de que una Iniciativa Comunitaria incluya un enlace externo de recaudación (Sección 5.9): ese enlace lleva a una plataforma de pago operada por terceros ajenos a Citixen, nunca por Citixen.
              </p>

              <h3>2.3 La Plataforma como infraestructura</h3>
              <p>
                La Plataforma funciona como infraestructura de participación cívica. Todas las decisiones de asignación, actividades de gestión de proyectos y registros de desembolso facilitados a través de la Plataforma son habilitados por la tecnología provista por Citixen, pero los procesos cívicos subyacentes — incluyendo la emisión de Créditos Cívicos, la aprobación de proyectos y el desembolso de fondos — son actos soberanos del gobierno local correspondiente. El rol de Citixen se limita a proveer y mantener la tecnología que facilita estos procesos.
              </p>

              {/* ═══ 3. NATURALEZA DE LOS CRÉDITOS CÍVICOS ═══ */}
              <h2>3. Naturaleza de los Créditos Cívicos</h2>
              <p><strong>Esta sección define la naturaleza legal de los Créditos Cívicos. Es central a estos Términos y rige la interpretación de todas las demás secciones.</strong></p>

              <h3>3.1 Definición</h3>
              <p>
                Los Créditos Cívicos (&ldquo;CC&rdquo;) son unidades digitales de participación revocables y no transferibles, emitidas por un gobierno local a través de la Plataforma, que representan el derecho condicional del ciudadano a dirigir la asignación de una porción de recursos públicos hacia proyectos sociales dentro de su municipio.
              </p>

              <h3>3.2 Qué NO son los Créditos Cívicos</h3>
              <p><strong>Los Créditos Cívicos no son:</strong></p>
              <ul>
                <li>Moneda, dinero, moneda de curso legal ni ninguna forma de instrumento monetario;</li>
                <li>Valor almacenado, créditos prepagos, dinero electrónico ni ningún producto financiero;</li>
                <li>Propiedad, activos, valores negociables, commodities ni instrumentos de inversión de ningún tipo;</li>
                <li>Criptomonedas, tokens de utilidad ni activos digitales con valor de mercado;</li>
                <li>Vouchers, cupones ni instrumentos canjeables por efectivo, bienes o servicios;</li>
                <li>Derechos transferibles — los CC no pueden ser vendidos, comercializados, regalados, legados, cedidos ni transferidos entre usuarios, entre plataformas o entre municipios bajo ninguna circunstancia;</li>
                <li>Instrumentos utilizables para cancelar obligaciones tributarias, deudas comerciales ni ninguna obligación fuera de la Plataforma.</li>
              </ul>

              <h3>3.3 Emisión y naturaleza condicional</h3>
              <p>
                Los Créditos Cívicos son emitidos por el gobierno local a través de la Plataforma cuando se valida la contribución fiscal de un ciudadano. La emisión de CC es un acto gubernamental facilitado por la tecnología de la Plataforma. Citixen no emite, crea, acuña ni genera Créditos Cívicos.
              </p>
              <p>Los derechos asociados a los Créditos Cívicos están condicionados a:</p>
              <ul>
                <li>La participación continua del gobierno local correspondiente en la Plataforma;</li>
                <li>Que la cuenta del Usuario se mantenga en buen estado;</li>
                <li>El cumplimiento por parte del Usuario de estos Términos y la legislación aplicable;</li>
                <li>La disponibilidad operativa de la Plataforma.</li>
              </ul>

              <h3>3.4 Derechos operativos</h3>
              <p>Los Créditos Cívicos otorgan al titular los siguientes derechos operativos limitados dentro de la Plataforma:</p>
              <ul>
                <li>Asignar CC hacia proyectos sociales aprobados dentro del municipio del titular;</li>
                <li>Suscribir asignaciones recurrentes a organizaciones verificadas dentro del municipio del titular;</li>
                <li>Consultar su conteo de CC asignados, historial de asignaciones y registro de participación cívica.</li>
              </ul>
              <p>
                Estos derechos operativos son intransferibles, no cedibles y existen exclusivamente dentro de la Plataforma. No crean ninguna obligación financiera por parte de Citixen ni ningún derecho a compensación monetaria.
              </p>

              <h3>3.5 Sin valor independiente</h3>
              <p>
                Los Créditos Cívicos no tienen valor independiente, valor de mercado ni valor redimible. No tienen funcionalidad fuera de la Plataforma ni fuera del municipio emisor. La exhibición de equivalencias en moneda fiat en la Plataforma se proporciona exclusivamente como referencia informativa respecto al contexto económico de la participación cívica y no constituye una promesa, garantía ni representación de convertibilidad o valor monetario.
              </p>

              <h3>3.6 Alcance municipal específico</h3>
              <p>
                Los Créditos Cívicos son emitidos por y están vinculados a un municipio específico. Un ciudadano solo puede asignar CC hacia proyectos dentro de su propio municipio. Los CC de un municipio no tienen validez, funcionalidad ni reconocimiento en ningún otro municipio.
              </p>

              <h3>3.7 Mecánica de asignación</h3>
              <p>Cuando un ciudadano asigna CC a un proyecto, los CC asignados se registran en los registros de la Plataforma como una asignación dirigida. Estos CC se rastrean dentro de la Plataforma en espera del resultado del proyecto:</p>
              <ul>
                <li>Si el proyecto se completa, la asignación se finaliza y los CC se registran como habiendo cumplido su propósito participativo;</li>
                <li>Si el proyecto se cancela, todos los CC asignados se devuelven automáticamente al conteo de asignaciones de los ciudadanos asignantes. Esta devolución es un ajuste de registro de la Plataforma, no un reembolso financiero;</li>
                <li>Mientras están asignados, los CC no están disponibles para re-asignación por parte del ciudadano.</li>
              </ul>
              <p>
                En ningún momento de este proceso los CC pasan a ser propiedad del creador del proyecto, la organización beneficiaria ni ninguna parte distinta al derecho de participación condicional del ciudadano asignante.
              </p>

              <h3>3.8 Revocabilidad</h3>
              <p>
                El gobierno local conserva la autoridad soberana para modificar, suspender o revocar Créditos Cívicos de conformidad con la legislación aplicable y las regulaciones municipales. Citixen implementa estas decisiones gubernamentales a través de la Plataforma pero no revoca CC de forma independiente excepto cuando sea necesario para hacer cumplir estos Términos.
              </p>

              <h3>3.9 Inexistencia de ciclo económico cerrado</h3>
              <p><strong>El ciclo de asignación de CC no es un circuito financiero cerrado.</strong></p>
              <p>
                <strong>Como supporter (asignando CC a proyectos de terceros):</strong> Cuando un ciudadano asigna CC a un proyecto creado por otro ciudadano u organización, esos CC nunca retornan al ciudadano asignante como moneda fiat ni como ninguna otra forma de valor económico. El derecho de participación del ciudadano asignante se agota con la asignación. El único escenario en que los CC asignados retornan al ciudadano asignante es la cancelación del proyecto, lo cual es un ajuste de registro de la Plataforma que restaura unidades de participación — no un reembolso financiero.
              </p>
              <p>
                <strong>Como creador de proyecto o dueño de organización:</strong> Un ciudadano que crea un proyecto o es dueño de una organización puede, si el proyecto se completa o la organización recibe asignaciones mensuales, convertirse en beneficiario de una transferencia de fiat ejecutada por el gobierno local. Esto no constituye una conversión de los propios CC del creador en fiat. La transferencia de fiat se financia con CC asignados por otros ciudadanos, requiere una cadena de seis condiciones independientes (ninguna garantizada), es ejecutada por el gobierno local fuera de la Plataforma a su sola discreción, y es compensación por la ejecución de un proyecto de interés público verificado — no un retorno sobre las unidades de participación propias del creador.
              </p>
              <p>
                <strong>El principio fundamental:</strong> En ambos roles, los CC no funcionan como reserva de valor que se convierte en fiat para el titular. En ningún momento un ciudadano deposita valor en la Plataforma y retira valor equivalente — que es la característica definitoria del valor almacenado y los instrumentos financieros que los Créditos Cívicos no son.
              </p>

              {/* ═══ 4. CUENTAS DE USUARIO Y ROLES ═══ */}
              <h2>4. Cuentas de Usuario y Roles</h2>

              <h3>4.1 Tipos de cuenta</h3>
              <p>La Plataforma admite los siguientes tipos de cuenta:</p>
              <ul>
                <li><strong>Ciudadano</strong> — usuarios individuales que participan en la asignación cívica;</li>
                <li><strong>Gobierno</strong> — personal autorizado de una entidad gubernamental local, que puede tener diferentes perfiles operativos (como administrador, revisor, gestor de proyectos, tesorero u observador) según lo determine la organización interna de su gobierno;</li>
                <li><strong>Superadmin</strong> — administración de la plataforma, limitada al administrador de sistema designado por Citixen.</li>
              </ul>

              <h3>4.2 Registro y aprobación</h3>
              <p>
                Las cuentas de ciudadano se crean a través de un proceso de registro que incluye verificación del correo electrónico. La cuenta se activa de inmediato al completar el registro: el ciudadano puede iniciar sesión y utilizar la Plataforma con normalidad desde ese momento. Las cuentas se crean con estado de aprobación pendiente por defecto; <strong>este estado no bloquea el acceso a la cuenta ni la navegación de la Plataforma</strong> — únicamente condiciona las operaciones que involucran Créditos Cívicos, que requieren aprobación previa del gobierno local. <strong>El registro no garantiza la aprobación para operar con Créditos Cívicos.</strong> Las decisiones de aprobación son tomadas por el gobierno local a su exclusiva discreción, y Citixen no es responsable de, ni participa en, estas decisiones. La verificación de identidad por videollamada, optativa para quienes deseen habilitar recaudación externa en Iniciativas Comunitarias, es un proceso distinto descripto en la Sección 5.9.
              </p>

              <h3>4.3 Autenticación de terceros</h3>
              <p>
                La Plataforma puede ofrecer registro e inicio de sesión a través de proveedores de autenticación de terceros (como Google o Apple). Al utilizar estos métodos, usted autoriza a Citixen a acceder a cierta información de su cuenta de terceros según se describe en nuestra Política de Privacidad.
              </p>

              <h3>4.4 Seguridad de la cuenta</h3>
              <p>
                Usted es responsable de mantener la confidencialidad de sus credenciales de cuenta y de toda la actividad que ocurra bajo su cuenta. Debe notificar a Citixen inmediatamente a <a href="mailto:legal@citixen.org">legal@citixen.org</a> si tiene conocimiento de cualquier uso no autorizado de su cuenta.
              </p>

              <h3>4.5 Exactitud de la cuenta</h3>
              <p>
                Usted acepta proporcionar y mantener información precisa, actualizada y completa en su cuenta. Citixen se reserva el derecho de suspender o cancelar cuentas que contengan información falsa, engañosa o desactualizada.
              </p>

              {/* ═══ 5. PROYECTOS E INICIATIVAS SOCIALES ═══ */}
              <h2>5. Proyectos e Iniciativas Sociales</h2>

              <h3>5.1 Tipos de proyecto</h3>
              <p>La Plataforma admite dos tipos de proyectos:</p>
              <ul>
                <li><strong>Proyectos financiados</strong> — proyectos sociales que reciben Créditos Cívicos, requieren aprobación gubernamental antes de aceptar asignaciones, y al completarse pueden generar un registro de solicitud de desembolso (Ticket de Cobro) para el beneficiario;</li>
                <li><strong>Iniciativas Comunitarias</strong> — iniciativas cívicas que no involucran Créditos Cívicos, no requieren aprobación gubernamental y se impulsan por la participación ciudadana directa (voluntariado, coordinación, contribuciones en especie). Pueden incluir, a criterio de su creador, un enlace externo de recaudación de donaciones (Sección 5.9).</li>
              </ul>

              <h3>5.2 Creación de proyectos</h3>
              <p>
                Cualquier ciudadano elegible puede proponer un proyecto en la Plataforma. Los proyectos financiados están sujetos a revisión y aprobación por parte del gobierno local correspondiente. Las iniciativas comunitarias están sujetas a moderación comunitaria y a las reglas de la Plataforma.
              </p>
              <p><strong>La creación de un proyecto no garantiza aprobación, financiamiento, éxito ni ningún resultado particular.</strong></p>

              <h3>5.3 Aprobación gubernamental de proyectos financiados</h3>
              <p>
                El gobierno local revisa y decide si aprueba los proyectos financiados a su exclusiva discreción. <strong>La aprobación no constituye:</strong>
              </p>
              <ul>
                <li>Un respaldo a los méritos, viabilidad o probabilidad de éxito del proyecto;</li>
                <li>Una garantía de que el proyecto recibirá suficientes asignaciones de CC;</li>
                <li>Un compromiso del gobierno de financiar, apoyar o asegurar la completación del proyecto;</li>
                <li>Ninguna asunción de responsabilidad por parte del gobierno o de Citixen respecto al resultado del proyecto.</li>
              </ul>

              <h3>5.4 Responsabilidad por la ejecución del proyecto</h3>
              <p>
                <strong>Los creadores de proyectos y sus organizaciones designadas son los únicos responsables de la ejecución y entrega de sus proyectos.</strong> Ni Citixen ni el gobierno local asumen responsabilidad alguna por la calidad, oportunidad o completitud de la ejecución del proyecto, la exactitud de la información proporcionada por el creador, el cumplimiento de promesas hechas a la comunidad, ni cualquier pérdida o daño derivado de las actividades del proyecto.
              </p>

              <h3>5.5 Asignación de Créditos Cívicos a proyectos</h3>
              <p>
                Cuando un ciudadano asigna CC a un proyecto financiado, esto constituye una expresión de preferencia cívica y una asignación dirigida de unidades de participación. <strong>Una asignación no es:</strong> una inversión financiera, una donación, una compra de bienes o servicios, un préstamo, un contrato entre el ciudadano y el creador, ni un compromiso vinculante de entregar ningún resultado específico.
              </p>

              <h3>5.6 Completación y cancelación de proyectos</h3>
              <p>
                Los proyectos financiados siguen un ciclo de vida gestionado a través de la Plataforma. El gobierno local verifica la completación del proyecto con base en la evidencia presentada por el creador. Si un proyecto se cancela en cualquier etapa previa al desembolso de fiat, todas las asignaciones de CC se devuelven automáticamente al conteo de asignaciones de los ciudadanos asignantes como un ajuste de registro de la Plataforma.
              </p>

              <h3>5.7 Iniciativas Comunitarias</h3>
              <p>
                Las iniciativas comunitarias operan bajo un ciclo de vida simplificado sin supervisión gubernamental del financiamiento. Están sujetas a moderación comunitaria, mecanismos de reporte y reglas de la Plataforma. Citixen se reserva el derecho de restringir o eliminar iniciativas comunitarias que violen estos Términos o la legislación aplicable.
              </p>

              <h3>5.8 Reportes comunitarios</h3>
              <p>
                Los usuarios pueden reportar proyectos o iniciativas que consideren que violan estos Términos o la legislación aplicable. Los reportes son revisados por el gobierno local correspondiente (para proyectos financiados) o por el equipo de moderación de Citixen (para iniciativas comunitarias sin contraparte gubernamental). Citixen no está obligada a tomar acción sobre cada reporte pero los revisará de buena fe.
              </p>

              <h3>5.9 Recaudación externa en Iniciativas Comunitarias</h3>
              <p>
                Cualquier ciudadano puede incorporar en su Iniciativa Comunitaria un enlace externo de recaudación de donaciones (por ejemplo, Mercado Pago, GoFundMe u otra plataforma de pago de terceros), sin necesidad de trayectoria previa en la Plataforma. <strong>Citixen no procesa ni custodia fondos:</strong> el enlace dirige al donante fuera de la Plataforma, hacia un servicio elegido y operado exclusivamente por el creador. La relación de la donación es entre el donante y el creador de la iniciativa; Citixen no es parte de ella.
              </p>
              <p>
                Cuando el creador cuenta con identidad verificada (insignia &ldquo;Identidad verificada&rdquo;), esa verificación certifica únicamente que una persona se presentó en una videollamada, exhibió un documento de identidad y que los datos coinciden con los de su cuenta. <strong>No constituye una validación de la causa declarada, una garantía sobre el uso de los fondos, ni una certificación de la veracidad de la iniciativa.</strong> Cualquier monto de fondos recaudados que el creador declare en la Plataforma es información autodeclarada, no auditada por Citixen.
              </p>
              <p>
                Citixen no realiza determinación alguna sobre si una Iniciativa Comunitaria cumple con la legislación aplicable en materia de solicitud pública de donaciones o financiamiento colectivo en la jurisdicción del creador o del donante, ni garantiza que las donaciones sean deducibles de impuestos. Cada usuario es responsable de cumplir dicha legislación. Citixen se reserva el derecho de restringir, suspender o inhabilitar esta función en cualquier jurisdicción donde identifique un riesgo regulatorio, y de ocultar el enlace o revocar la insignia de identidad verificada ante sospecha fundada de fraude, conforme a los mecanismos de reporte de la Sección 5.8.
              </p>

              {/* ═══ 6. ORGANIZACIONES ═══ */}
              <h2>6. Organizaciones</h2>

              <h3>6.1 Creación y verificación</h3>
              <p>
                Los ciudadanos pueden crear organizaciones en la Plataforma para gestionar proyectos sociales y recibir apoyo operativo a través de asignaciones recurrentes de CC. Las organizaciones están sujetas a un proceso de verificación por parte del gobierno local. El estado de verificación puede ser: pendiente, verificada, suspendida o rechazada.
              </p>

              <h3>6.2 Naturaleza de la verificación</h3>
              <p>
                La verificación gubernamental de una organización indica que el gobierno local ha revisado la legitimidad y documentación de la organización. <strong>La verificación no constituye:</strong> una inscripción o registro legal de la organización, una garantía financiera, una asunción de responsabilidad por sus actividades, ni un respaldo a sus proyectos u operaciones.
              </p>

              <h3>6.3 Presupuestos operativos y asignaciones recurrentes</h3>
              <p>Las organizaciones verificadas pueden declarar un presupuesto operativo y recibir asignaciones recurrentes de CC. Estas asignaciones:</p>
              <ul>
                <li>Son decisiones voluntarias de los ciudadanos que pueden ser pausadas o canceladas en cualquier momento;</li>
                <li>Están sujetas al techo presupuestario aprobado de la organización;</li>
                <li>Generan registros mensuales de desembolso (Tickets Mensuales de Organización) para que el gobierno local los procese;</li>
                <li><strong>No son ingresos garantizados, obligaciones contractuales ni derechos adquiridos.</strong></li>
              </ul>

              <h3>6.4 Responsabilidad de la organización</h3>
              <p>
                Las organizaciones y sus representantes son los únicos responsables de la exactitud de la información proporcionada, el cumplimiento de las leyes aplicables, el uso adecuado de cualquier fondo desembolsado por el gobierno local, y mantener actualizada su documentación e información bancaria.
              </p>

              {/* ═══ 7. TICKETS DE COBRO Y DESEMBOLSO DE FIAT ═══ */}
              <h2>7. Tickets de Cobro y Desembolso de Fiat</h2>

              <h3>7.1 Naturaleza de los Tickets de Cobro</h3>
              <p>
                Cuando un proyecto financiado alcanza su meta de financiamiento, o cuando se completa el ciclo mensual de asignación de una organización verificada, la Plataforma genera automáticamente un registro administrativo (&ldquo;Ticket de Cobro&rdquo; o &ldquo;Ticket Mensual de Organización&rdquo;, colectivamente &ldquo;Tickets&rdquo;). <strong>Un Ticket es:</strong>
              </p>
              <ul>
                <li>Un registro administrativo dentro de la Plataforma que documenta la completación de un ciclo de asignación de CC y la determinación de elegibilidad para desembolso resultante;</li>
                <li>Un registro no vinculante para la consideración del gobierno local;</li>
                <li>Un registro informativo que incluye la cantidad de CC, una tasa de referencia administrativa y un equivalente en fiat calculado para referencia del gobierno.</li>
              </ul>
              <p>
                <strong>Citixen no verifica la liquidez, disponibilidad presupuestaria ni la intención de pago de ningún gobierno local.</strong>
              </p>

              <h3>7.2 Qué NO es un Ticket de Cobro</h3>
              <p><strong>Un Ticket no es:</strong></p>
              <ul>
                <li>Un instrumento negociable, pagaré, cheque, factura ni ninguna forma de instrumento financiero;</li>
                <li>Una garantía o promesa de pago por parte de Citixen ni de ninguna otra parte;</li>
                <li>Una obligación de deuda de Citixen;</li>
                <li>Una obligación vinculante para el gobierno local;</li>
                <li>Un derecho de cobro ejecutable contra Citixen;</li>
                <li>Una orden de pago ni instrucción de pago.</li>
              </ul>

              <h3>7.3 Tasa de referencia administrativa</h3>
              <p>
                El equivalente en moneda fiat exhibido en un Ticket se calcula utilizando una tasa de referencia administrativa configurada por el gobierno local. <strong>No es un tipo de cambio de mercado, una tasa de conversión ni una representación de que los Créditos Cívicos tengan valor monetario.</strong> La tasa se registra al momento de la generación del Ticket y no cambia posteriormente.
              </p>

              <h3>7.4 Transferencia de recursos públicos</h3>
              <p>La transferencia de moneda fiat a los beneficiarios de proyectos es realizada exclusivamente por el gobierno local, fuera de la Plataforma. Citixen no retiene, gestiona, transmite ni desembolsa moneda fiat alguna; no intermedia en ningún proceso de transferencia; no garantiza que se realizará transferencia alguna; y proporciona el Ticket únicamente como registro administrativo para facilitar los procesos internos del gobierno.</p>

              <h3>7.5 Persistencia de los Tickets</h3>
              <p>
                Los Tickets se conservan dentro de la Plataforma como registros administrativos. La persistencia de los Tickets no prevalece sobre la autoridad soberana del gobierno local sobre los recursos públicos. Si el gobierno revoca CC, se retira de la Plataforma o modifica el marco de participación cívica, los Tickets podrán ser anulados o modificados de conformidad con la Sección 12.2.
              </p>

              <h3>7.6 Suspensión del gobierno</h3>
              <p>
                Si la participación de un gobierno local en la Plataforma es suspendida, los Tickets pendientes se conservan como registros pero no pueden avanzar al estado de pagados hasta que se restablezca la participación del gobierno. Citixen no es responsable por ningún retraso o incumplimiento de Tickets resultante de la suspensión del gobierno.
              </p>

              {/* ═══ 8. CONTENIDO DEL USUARIO Y PI ═══ */}
              <h2>8. Contenido del Usuario y Propiedad Intelectual</h2>

              <h3>8.1 Contenido del Usuario</h3>
              <p>
                &ldquo;Contenido del Usuario&rdquo; significa cualquier texto, imagen, fotografía, documento, descripción, archivo de evidencia u otro material que usted cargue, envíe o publique a través de la Plataforma.
              </p>

              <h3>8.2 Propiedad</h3>
              <p>Usted conserva la propiedad de su Contenido del Usuario. Nada en estos Términos transfiere la propiedad de su contenido a Citixen.</p>

              <h3>8.3 Licencia a Citixen</h3>
              <p>
                Al enviar Contenido del Usuario a la Plataforma, usted otorga a Citixen una licencia no exclusiva, mundial, libre de regalías, sublicenciable (exclusivamente a proveedores de servicios que operen en nombre de Citixen) para usar, reproducir, exhibir, distribuir y crear obras derivadas de su Contenido del Usuario únicamente para: operar y mejorar la Plataforma, mostrar su contenido a otros usuarios, compartirlo con el gobierno local como parte de los procesos cívicos, y promover la Plataforma y su misión cívica.
              </p>
              <p>
                Esta licencia no otorga a Citixen el derecho de vender su contenido a terceros ni de utilizarlo para publicidad comercial no relacionada con la misión cívica de la Plataforma.
              </p>

              <h3>8.4 Propiedad intelectual de Citixen</h3>
              <p>
                La Plataforma, incluyendo su diseño, código, funcionalidades, marcas, logos y documentación, es propiedad intelectual de Citixen Technologies SAS y está protegida por las leyes de propiedad intelectual aplicables.
              </p>

              {/* ═══ 9. USO ACEPTABLE Y CONDUCTA PROHIBIDA ═══ */}
              <h2>9. Uso Aceptable y Conducta Prohibida</h2>

              <h3>9.1 Estándar general</h3>
              <p>Usted acepta utilizar la Plataforma de buena fe, para su propósito previsto de participación cívica, y de conformidad con estos Términos y todas las leyes aplicables.</p>

              <h3>9.2 Conducta prohibida</h3>
              <p>Usted no puede:</p>
              <ul>
                <li><strong>Fraude y tergiversación</strong> — crear proyectos sin genuina intención de ejecutarlos; enviar información falsa o engañosa; presentar comprobantes fiscales fraudulentos; tergiversar su identidad o afiliación organizacional;</li>
                <li><strong>Manipulación del sistema</strong> — crear múltiples cuentas; utilizar bots o scripts sin autorización; intentar manipular conteos de CC o métricas;</li>
                <li><strong>Abuso de mecanismos cívicos</strong> — asignar CC a sus propios proyectos a través de cuentas alternativas; coordinar campañas de apoyo artificial; abusar del sistema de reportes;</li>
                <li><strong>Contenido dañino</strong> — cargar contenido ilegal, difamatorio, amenazante, discriminatorio o que promueva la violencia;</li>
                <li><strong>Interferencia con la Plataforma</strong> — intentar obtener acceso no autorizado; realizar ingeniería inversa; eludir funciones de seguridad;</li>
                <li><strong>Uso indebido de funciones gubernamentales</strong> — acceder a datos fuera de su jurisdicción; compartir credenciales gubernamentales; utilizar datos de la Plataforma para fines no relacionados con la gestión de participación cívica.</li>
              </ul>

              <h3>9.3 Consecuencias</h3>
              <p>
                La violación de esta sección puede resultar en la suspensión o cancelación inmediata de su cuenta, eliminación de su contenido, cancelación de sus proyectos y pérdida de cualquier derecho operativo asociado a sus Créditos Cívicos.
              </p>

              {/* ═══ 10. MODERACIÓN ═══ */}
              <h2>10. Moderación, Restricción y Suspensión</h2>

              <h3>10.1 Moderación de la Plataforma</h3>
              <p>Citixen opera un sistema de moderación que incluye: revisión y aprobación gubernamental de proyectos financiados, reportes comunitarios, detección automatizada de actividad sospechosa, y revisión administrativa por personal de Citixen.</p>

              <h3>10.2 Acciones gubernamentales</h3>
              <p>
                El gobierno local puede, dentro de su jurisdicción, aprobar o rechazar registros de ciudadanos, aprobar o restringir proyectos, verificar o suspender organizaciones, y cancelar proyectos de conformidad con las reglas de la Plataforma. Estas son decisiones gubernamentales facilitadas por la Plataforma. Citixen no las toma ni las revisa.
              </p>

              <h3>10.3 Acciones de Citixen</h3>
              <p>
                Citixen se reserva el derecho de suspender o cancelar cualquier cuenta, eliminar o restringir contenido, cancelar o restringir proyectos u organizaciones, y limitar funcionalidades. En todos los casos, Citixen proporcionará aviso dentro de las setenta y dos (72) horas, incluyendo el motivo de la acción e información sobre cómo impugnarla.
              </p>

              <h3>10.4 Sin compensación</h3>
              <p>
                Las acciones de moderación, restricción o suspensión no otorgan al usuario afectado derecho a compensación, indemnización ni reembolso alguno por parte de Citixen.
              </p>

              {/* ═══ 11. CANCELACIÓN Y ELIMINACIÓN DE CUENTA ═══ */}
              <h2>11. Cancelación y Eliminación de Cuenta</h2>

              <h3>11.1 Cancelación por el Usuario</h3>
              <p>
                Usted puede solicitar la eliminación de su cuenta en cualquier momento contactándonos a <a href="mailto:legal@citixen.org">legal@citixen.org</a> o a través de la configuración de cuenta en la Plataforma. Al recibir una solicitud de eliminación:
              </p>
              <ul>
                <li><strong>Asignaciones activas de CC</strong> — cualquier CC asignado a proyectos activos será devuelto automáticamente, y su conteo restante será puesto en cero;</li>
                <li><strong>Proyectos activos que usted creó</strong> — serán cancelados, activando la devolución automática de todas las asignaciones de CC;</li>
                <li><strong>Organizaciones de su propiedad</strong> — debe transferir la titularidad o las organizaciones serán suspendidas;</li>
                <li><strong>Datos personales</strong> — serán tratados de conformidad con nuestra Política de Privacidad;</li>
                <li><strong>Registros históricos</strong> — podrán ser conservados en forma anonimizada como parte del registro cívico de la Plataforma.</li>
              </ul>

              <h3>11.2 Cancelación por Citixen</h3>
              <p>Citixen puede suspender o cancelar su cuenta en cualquier momento por violación de estos Términos, actividad fraudulenta, requerimientos legales, o cualquier otra razón a discreción razonable de Citixen.</p>

              <h3>11.3 Cancelación por el Gobierno</h3>
              <p>El gobierno local puede suspender o desactivar cuentas de ciudadanos dentro de su jurisdicción a través de la Plataforma. Dichas acciones gubernamentales no son decisiones de Citixen.</p>

              <h3>11.4 Supervivencia</h3>
              <p>Las Secciones 3, 7, 8, 13, 14 y 16 sobreviven a la cancelación de su cuenta y de estos Términos.</p>

              {/* ═══ 12. PARTICIPACIÓN Y RETIRO DEL GOBIERNO ═══ */}
              <h2>12. Participación y Retiro del Gobierno</h2>

              <h3>12.1 Dependencia de la participación gubernamental</h3>
              <p>
                La funcionalidad de los Créditos Cívicos dentro de cualquier municipio está condicionada a la participación activa del gobierno local. Usted reconoce que los CC son específicos del municipio, que Citixen no controla si un gobierno se une o se retira de la Plataforma, y que la propuesta de valor de los CC está inherentemente vinculada a la participación continua del gobierno.
              </p>

              <h3>12.2 Proceso de retiro del gobierno</h3>
              <p>Si un gobierno local se retira de la Plataforma, se aplicará un período de transición de noventa (90) días:</p>
              <ul>
                <li><strong>Días 1-30</strong> — no se aceptarán nuevos proyectos; los proyectos activos existentes continuarán recibiendo asignaciones;</li>
                <li><strong>Días 31-60</strong> — los proyectos activos dejarán de aceptar nuevas asignaciones; los Tickets pendientes tendrán procesamiento prioritario;</li>
                <li><strong>Días 61-90</strong> — los proyectos no financiados serán cancelados con CC devueltos; los proyectos financiados con Tickets no pagados serán cancelados;</li>
                <li><strong>Después del Día 90</strong> — los CC no asignados cesarán de tener funcionalidad operativa. Las cuentas de ciudadanos permanecerán accesibles pero las funciones de participación cívica estarán deshabilitadas.</li>
              </ul>

              <h3>12.3 Sin responsabilidad por retiro del gobierno</h3>
              <p>
                Citixen no es responsable por ninguna pérdida de funcionalidad de los Créditos Cívicos, interrupción de servicios ni ninguna otra consecuencia derivada del retiro de un gobierno local de la Plataforma.
              </p>

              {/* ═══ 13. DESCARGOS Y LIMITACIÓN DE RESPONSABILIDAD ═══ */}
              <h2>13. Descargos y Limitación de Responsabilidad</h2>

              <h3>13.1 Plataforma proporcionada &ldquo;tal cual&rdquo;</h3>
              <p>
                LA PLATAFORMA SE PROPORCIONA &ldquo;TAL CUAL&rdquo; Y &ldquo;SEGÚN DISPONIBILIDAD&rdquo;. EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEGISLACIÓN APLICABLE, CITIXEN RECHAZA TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS.
              </p>

              <h3>13.2 Sin garantías</h3>
              <p>Citixen no garantiza: el funcionamiento continuo o libre de errores de la Plataforma; que algún proyecto será aprobado, financiado o exitoso; que algún gobierno local cumplirá sus obligaciones de desembolso; la exactitud de cualquier información exhibida en la Plataforma; ni la legitimidad de cualquier causa de recaudación publicada por un usuario ni el uso correcto o declarado de los fondos donados a través de enlaces externos conforme a la Sección 5.9.</p>

              <h3>13.3 Acciones de terceros</h3>
              <p>
                Citixen no es responsable por las acciones, omisiones, decisiones o faltas de gobiernos locales, creadores de proyectos, organizaciones, otros usuarios, proveedores de servicios de terceros, ni de las plataformas de pago de terceros elegidas por los creadores de iniciativas conforme a la Sección 5.9 — incluyendo el uso, destino o resultado de los fondos recaudados a través de dichos enlaces.
              </p>

              <h3>13.4 Limitación de responsabilidad</h3>
              <p>
                <strong>LAS SIGUIENTES LIMITACIONES SE APLICAN EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEGISLACIÓN APLICABLE. CUANDO LAS DISPOSICIONES OBLIGATORIAS DE PROTECCIÓN AL CONSUMIDOR DE SU JURISDICCIÓN PROPORCIONEN MAYOR PROTECCIÓN, DICHAS DISPOSICIONES PREVALECERÁN.</strong>
              </p>
              <p>
                La responsabilidad total acumulada de Citixen no excederá el monto que usted haya pagado a Citixen en los veinticuatro (24) meses anteriores al reclamo. En ningún caso Citixen será responsable por daños indirectos, incidentales, especiales, consecuenciales o punitivos. Citixen no será responsable por daños derivados de las acciones u omisiones de los gobiernos locales.
              </p>

              <h3>13.5 Excepciones</h3>
              <p>Nada en esta sección excluye ni limita la responsabilidad por: muerte o lesiones personales causadas por negligencia de Citixen; fraude o tergiversación fraudulenta; negligencia grave o conducta dolosa; cualquier responsabilidad que no pueda ser excluida bajo la legislación obligatoria aplicable, incluyendo la Ley argentina 24.240 y las directivas de protección al consumidor de la Unión Europea.</p>

              <h3>13.6 Protección al consumidor</h3>
              <p>
                Si usted es un consumidor bajo las leyes de su jurisdicción, nada en estos Términos pretende limitar los derechos obligatorios de protección al consumidor que le sean aplicables. En caso de conflicto entre estos Términos y las disposiciones obligatorias de protección al consumidor, las disposiciones obligatorias prevalecerán.
              </p>

              {/* ═══ 14. RESOLUCIÓN DE DISPUTAS ═══ */}
              <h2>14. Resolución de Disputas</h2>

              <h3>14.1 Resolución informal</h3>
              <p>
                Antes de iniciar procedimientos formales, usted acepta contactar a Citixen a <a href="mailto:legal@citixen.org">legal@citixen.org</a> e intentar resolver cualquier disputa de manera informal por un período de treinta (30) días.
              </p>

              <h3>14.2 Mediación</h3>
              <p>Si la resolución informal no tiene éxito, cualquiera de las partes podrá proponer mediación ante un mediador mutuamente acordado.</p>

              <h3>14.3 Jurisdicción</h3>
              <p>
                Para disputas derivadas del uso comercial o institucional de la Plataforma, usted acepta someterse a la jurisdicción exclusiva de los tribunales de la Ciudad de Bell Ville, Provincia de Córdoba, República Argentina. Para usuarios que califiquen como consumidores, la jurisdicción se determinará de conformidad con las disposiciones obligatorias de la jurisdicción del consumidor.
              </p>

              <h3>14.4 Procedimientos individuales</h3>
              <p>
                En la máxima medida permitida por la legislación aplicable, los procedimientos se llevarán a cabo de forma individual. <strong>Esta cláusula no se aplica en jurisdicciones donde las acciones colectivas son un derecho obligatorio del consumidor</strong>, incluyendo Argentina (Ley 24.240 y Artículo 43 de la Constitución Nacional) y la Unión Europea (Directiva 2020/1828).
              </p>

              <h3>14.5 Disputas con el gobierno</h3>
              <p>
                Las disputas entre usuarios y gobiernos locales respecto a decisiones de aprobación, desembolsos u otras acciones gubernamentales no son disputas con Citixen y deben ser dirigidas al gobierno local correspondiente.
              </p>

              {/* ═══ 15. MODIFICACIONES ═══ */}
              <h2>15. Modificaciones a los Términos</h2>
              <p>
                Citixen se reserva el derecho de modificar estos Términos en cualquier momento. Para cualquier modificación, Citixen proporcionará al menos treinta (30) días de aviso previo a través de la Plataforma, por correo electrónico y mediante notificación dentro de la aplicación. Su uso continuado de la Plataforma después de la fecha de vigencia constituye su aceptación de los Términos modificados.
              </p>

              {/* ═══ 16. LEY APLICABLE ═══ */}
              <h2>16. Ley Aplicable</h2>
              <p>
                Estos Términos se rigen por las leyes de la República Argentina. Si accede a la Plataforma desde fuera de Argentina, usted es responsable del cumplimiento de las leyes de su jurisdicción. Cuando las disposiciones obligatorias de su legislación local proporcionen mayor protección, dichas disposiciones prevalecerán.
              </p>
              <p>
                Citixen no será responsable por incumplimientos derivados de circunstancias de fuerza mayor fuera de su control razonable. Estos Términos, junto con la Política de Privacidad, constituyen el acuerdo completo entre usted y Citixen respecto al uso de la Plataforma.
              </p>
              <p>
                Citixen puede ceder estos Términos previa notificación con al menos treinta (30) días de anticipación. Usted no puede ceder sus derechos sin consentimiento previo por escrito de Citixen.
              </p>

              {/* ═══ 17. CONTACTO ═══ */}
              <h2>17. Información de Contacto</h2>
              <p>
                Para preguntas, inquietudes o notificaciones legales respecto a estos Términos:
              </p>
              <p>
                <strong>Citixen Technologies SAS</strong><br />
                Bell Ville, Provincia de Córdoba<br />
                República Argentina
              </p>
              <p>
                Consultas legales: <a href="mailto:legal@citixen.org">legal@citixen.org</a><br />
                Consultas de privacidad: <a href="mailto:privacy@citixen.org">privacy@citixen.org</a><br />
                Consultas generales: A través de las funciones de soporte de la Plataforma
              </p>

              <p className="legal-footnote">
                <em>
                  Estos Términos y Condiciones están disponibles en español e inglés. En caso de discrepancia,
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
