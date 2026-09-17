export default function RepresentativeDemocracy() {
  return (
    <section className="rd-section">
      <div className="container">
        <div className="rd-inner fade-up">
          <h2 className="rd-title">
            Elegís representantes cada algunos años.<br />
            <span>Tu ciudad toma decisiones todos los días.</span>
          </h2>
          <p className="rd-body">
            Citixen no reemplaza la democracia representativa. Le agrega una nueva capa de
            participación. Una donde votar a tus representantes y participar directamente en
            algunas decisiones de tu ciudad pueden convivir. Porque participar en democracia no
            debería limitarse a elegir quién decide.
          </p>
          <p className="rd-strong">También podemos construir nuevas formas de decidir juntos.</p>
        </div>
      </div>

      <style jsx>{`
        .rd-section {
          padding: 120px 0;
          background: var(--citixen-gradient);
          text-align: center;
        }
        .rd-inner { max-width: 760px; margin: 0 auto; }
        .rd-title {
          font-size: 34px;
          font-weight: 800;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 28px;
        }
        .rd-title span { color: #fff; }
        .rd-body {
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.78);
          margin-bottom: 24px;
        }
        .rd-strong {
          font-size: 21px;
          font-weight: 800;
          color: var(--secondary);
        }
        @media (max-width: 600px) {
          .rd-title { font-size: 26px; }
        }
      `}</style>
    </section>
  )
}
