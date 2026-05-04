import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TransparencyMethodology() {
  return (
    <>
      <Head>
        <title>Citixen Transparency Index — Methodology v1.0</title>
        <meta name="description" content="Methodology document for the Citixen Transparency Index (CTI). Describes how the index is computed, its criteria, limitations, and data license." />
        <meta property="og:title" content="Citixen Transparency Index — Methodology v1.0" />
        <meta property="og:description" content="Public methodology for the CTI, a real-time transparency index for local governments computed from operational data." />
        <meta property="og:type" content="article" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="methodology-page">
        {/* Header */}
        <section className="methodology-hero">
          <div className="container">
            <div className="methodology-hero-inner">
              <span className="methodology-label">Methodology Document</span>
              <h1>Citixen Transparency Index</h1>
              <p className="methodology-subtitle">
                A real-time, endogenous transparency index for local governments.
                Computed automatically from operational data within the Citixen platform.
              </p>
              <div className="methodology-meta">
                <div className="meta-item">
                  <span className="meta-label">Version</span>
                  <span className="meta-value">1.0</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Effective date</span>
                  <span className="meta-value">May 2026</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Data license</span>
                  <span className="meta-value">CC BY 4.0</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Language</span>
                  <span className="meta-value">EN / ES</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of contents */}
        <section className="methodology-toc">
          <div className="container">
            <div className="toc-card">
              <h3>Contents</h3>
              <ol>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#scope">Scope &amp; eligibility</a></li>
                <li><a href="#criteria">Criteria &amp; formulas</a></li>
                <li><a href="#badges">Project badges</a></li>
                <li><a href="#limitations">Known limitations</a></li>
                <li><a href="#governance">Governance &amp; versioning</a></li>
                <li><a href="#data-license">Data license &amp; citation</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Sections */}
        <div className="container methodology-body">

          {/* 1 — Overview */}
          <section id="overview" className="methodology-section">
            <span className="section-number">01</span>
            <h2>Overview</h2>
            <p>
              The <strong>Citixen Transparency Index (CTI)</strong> measures how transparently a local
              government manages its public works and projects within the Citixen platform. Unlike
              traditional transparency assessments — which rely on external evaluators and produce
              annual retrospective reports — the CTI is computed in real time from the government&apos;s
              actual operational behavior.
            </p>
            <p>
              The index does not measure impact, policy quality, or citizen satisfaction. It measures
              <strong> observable, verifiable behaviors</strong> that indicate a government&apos;s commitment
              to keeping citizens informed about the state, progress, and results of public projects.
            </p>
            <div className="callout">
              <strong>Design principle:</strong> The CTI is intentionally simple. Four criteria, equal
              weights, no subjective assessments. A citizen, journalist, or multilateral analyst should
              be able to understand it in under 60 seconds.
            </div>
          </section>

          {/* 2 — Scope */}
          <section id="scope" className="methodology-section">
            <span className="section-number">02</span>
            <h2>Scope &amp; eligibility</h2>
            <p>
              The CTI applies to local governments operating in <strong>Citixen Light</strong> mode.
              Each government manages a portfolio of public projects published on their transparency
              portal.
            </p>
            <h3>Eligible projects</h3>
            <p>
              Only projects with <code>projectType: &quot;light_public&quot;</code> are included. Cancelled
              projects are excluded from all calculations. Projects from Citixen Full mode (funded
              projects with Civic Credits) are not part of this index.
            </p>
            <h3>Minimum data threshold</h3>
            <div className="callout callout-warning">
              A government must have <strong>at least 3 non-cancelled projects</strong> to receive a
              CTI score. Below this threshold, the index returns <em>&quot;Insufficient data&quot;</em> instead
              of a numeric score. This prevents statistically insignificant portfolios from generating
              misleading results.
            </div>
          </section>

          {/* 3 — Criteria */}
          <section id="criteria" className="methodology-section">
            <span className="section-number">03</span>
            <h2>Criteria &amp; formulas</h2>
            <p>
              The CTI is a composite score of <strong>4 criteria</strong>, each weighted equally
              at <strong>25 points</strong>, for a maximum of <strong>100 points</strong>. The final
              score is rounded to the nearest integer.
            </p>

            {/* Criterion 1 */}
            <div className="criterion-card">
              <div className="criterion-header">
                <span className="criterion-number">C1</span>
                <div>
                  <h4>Updating</h4>
                  <span className="criterion-es">Actualización</span>
                </div>
                <span className="criterion-weight">25 pts</span>
              </div>
              <p className="criterion-question">
                What percentage of active projects have been updated in the last 30 days?
              </p>
              <div className="formula-box">
                <code>Score = (updated_active_projects / total_active_projects) × 25</code>
              </div>
              <div className="criterion-details">
                <p><strong>Active projects:</strong> Projects with status <code>planning</code> or <code>in_progress</code>.</p>
                <p><strong>Updated:</strong> A project is considered updated if it has received a public update or recorded activity within the last 30 calendar days.</p>
                <p><strong>Zero active projects:</strong> If a government has no active projects (all completed or not started), this criterion scores <strong>25/25</strong> (neutral, not punitive).</p>
              </div>
            </div>

            {/* Criterion 2 */}
            <div className="criterion-card">
              <div className="criterion-header">
                <span className="criterion-number">C2</span>
                <div>
                  <h4>Evidence</h4>
                  <span className="criterion-es">Evidencia</span>
                </div>
                <span className="criterion-weight">25 pts</span>
              </div>
              <p className="criterion-question">
                What percentage of completed projects include photographic evidence?
              </p>
              <div className="formula-box">
                <code>Score = (completed_with_photos / total_completed) × 25</code>
              </div>
              <div className="criterion-details">
                <p><strong>Photographic evidence:</strong> At least one image file attached to the project&apos;s documentation.</p>
                <p><strong>Zero completed projects:</strong> Scores <strong>25/25</strong> (neutral).</p>
              </div>
            </div>

            {/* Criterion 3 */}
            <div className="criterion-card">
              <div className="criterion-header">
                <span className="criterion-number">C3</span>
                <div>
                  <h4>Timeliness</h4>
                  <span className="criterion-es">Cumplimiento</span>
                </div>
                <span className="criterion-weight">25 pts</span>
              </div>
              <p className="criterion-question">
                What percentage of projects with deadlines are on schedule?
              </p>
              <div className="formula-box">
                <code>Score = (on_time_projects / projects_with_deadline) × 25</code>
              </div>
              <div className="criterion-details">
                <p><strong>On time (completed):</strong> Completion date ≤ estimated end date.</p>
                <p><strong>On time (active):</strong> Estimated end date has not yet passed.</p>
                <p><strong>Delayed status:</strong> Projects explicitly marked as <code>delayed</code> are counted as not on time.</p>
                <p><strong>No deadline set:</strong> Projects without an estimated end date are excluded from the denominator.</p>
                <p><strong>Zero projects with deadlines:</strong> Scores <strong>25/25</strong> (neutral).</p>
              </div>
            </div>

            {/* Criterion 4 */}
            <div className="criterion-card">
              <div className="criterion-header">
                <span className="criterion-number">C4</span>
                <div>
                  <h4>Budget disclosure</h4>
                  <span className="criterion-es">Cobertura presupuestaria</span>
                </div>
                <span className="criterion-weight">25 pts</span>
              </div>
              <p className="criterion-question">
                What percentage of projects have a declared budget?
              </p>
              <div className="formula-box">
                <code>Score = (projects_with_budget / total_projects) × 25</code>
              </div>
              <div className="criterion-details">
                <p><strong>Budget disclosed:</strong> A project has a declared estimated budget greater than zero.</p>
                <p><strong>Denominator:</strong> All non-cancelled projects in the government&apos;s portfolio.</p>
                <p><strong>Zero projects:</strong> Scores <strong>25/25</strong> (neutral).</p>
              </div>
            </div>

            {/* Neutral zero rule */}
            <div className="callout">
              <strong>Neutral zero rule:</strong> When a criterion has no applicable projects to
              evaluate (empty denominator), it scores 25/25 rather than 0/25. This prevents
              newly onboarded governments from starting at 0%, which would penalize adoption and
              create a perverse incentive to delay joining the platform.
            </div>
          </section>

          {/* 4 — Badges */}
          <section id="badges" className="methodology-section">
            <span className="section-number">04</span>
            <h2>Project badges</h2>
            <p>
              In addition to the government-level index, individual projects receive
              <strong> badges</strong> — binary indicators of specific positive behaviors.
              Badges are purely positive: the absence of a badge is the signal. There are
              no negative badges.
            </p>

            <div className="badges-grid">
              <div className="badge-card">
                <span className="badge-icon">&#128247;</span>
                <h4>Has evidence</h4>
                <p>The project includes at least one photograph in its documentation.</p>
              </div>
              <div className="badge-card">
                <span className="badge-icon">&#128260;</span>
                <h4>Recently updated</h4>
                <p>The project has recorded activity within the last 30 days.</p>
              </div>
              <div className="badge-card">
                <span className="badge-icon">&#128176;</span>
                <h4>Budget disclosed</h4>
                <p>The project has a declared estimated budget greater than zero.</p>
              </div>
              <div className="badge-card">
                <span className="badge-icon">&#9200;</span>
                <h4>On schedule</h4>
                <p>The project has not exceeded its estimated deadline and is not marked as delayed.</p>
              </div>
              <div className="badge-card">
                <span className="badge-icon">&#9989;</span>
                <h4>Completed with evidence</h4>
                <p>The project is completed and includes photographic documentation of results.</p>
              </div>
            </div>
          </section>

          {/* 5 — Limitations */}
          <section id="limitations" className="methodology-section">
            <span className="section-number">05</span>
            <h2>Known limitations</h2>
            <p>
              The CTI is transparent about what it can and cannot measure. Users of this data
              should consider these limitations when interpreting scores.
            </p>

            <div className="limitations-list">
              <div className="limitation-item">
                <h4>Self-reported data</h4>
                <p>
                  All four criteria rely on data entered by the government itself. The government
                  controls project timelines, status updates, budget declarations, and evidence
                  uploads. There is no external verification layer in v1.0. A government could
                  theoretically inflate its score by setting lenient deadlines or uploading
                  low-quality evidence.
                </p>
              </div>

              <div className="limitation-item">
                <h4>Measures process, not impact</h4>
                <p>
                  The CTI measures <em>documentary compliance</em> — whether the government keeps
                  the public informed about project status. It does not measure whether projects
                  achieve their intended social outcomes. A government can score 100/100 while
                  executing projects of questionable impact.
                </p>
              </div>

              <div className="limitation-item">
                <h4>Equal weights are arbitrary</h4>
                <p>
                  The 4 × 25% weighting is a deliberate simplification. Meeting deadlines may matter
                  more to citizens than uploading photos. The current version prioritizes legibility
                  over precision. Future versions may introduce differential weighting based on
                  empirical data.
                </p>
              </div>

              <div className="limitation-item">
                <h4>No trend analysis</h4>
                <p>
                  The v1.0 index is a point-in-time snapshot. It does not capture trajectory — a
                  government improving from 40 to 80 is indistinguishable from one that has always
                  been at 80. Historical snapshots will be introduced in a future version.
                </p>
              </div>

              <div className="limitation-item">
                <h4>Small portfolio bias</h4>
                <p>
                  The minimum threshold of 3 projects mitigates extreme cases, but a government with
                  3 projects is still more volatile than one with 30. Scores should be interpreted
                  with portfolio size in mind (published alongside the score as <code>projectCount</code>).
                </p>
              </div>

              <div className="limitation-item">
                <h4>Mitigation: social pressure</h4>
                <p>
                  While the CTI v1.0 has no external audit, Citixen&apos;s Layer 2 (citizen participation)
                  introduces social counter-pressure: public comments, citizen proposals, and community
                  reports create reputational costs for governments that manipulate data. The combination
                  of self-reported metrics and social oversight produces a more robust signal than
                  either mechanism alone.
                </p>
              </div>
            </div>
          </section>

          {/* 6 — Governance */}
          <section id="governance" className="methodology-section">
            <span className="section-number">06</span>
            <h2>Governance &amp; versioning</h2>

            <h3>Versioning policy</h3>
            <p>
              The methodology is versioned using <strong>semantic versioning</strong> (MAJOR.MINOR).
              Changes to criteria definitions, weights, or eligibility thresholds increment the MAJOR
              version. Clarifications, typo fixes, or additions that do not change computation logic
              increment the MINOR version.
            </p>

            <h3>Non-retroactivity</h3>
            <p>
              When a new version is published, historical data computed under previous versions is
              preserved with its original methodology version tag. Scores are never retroactively
              recalculated. This ensures that time-series data remains comparable within each
              methodology version.
            </p>

            <h3>Changelog</h3>
            <table className="changelog-table">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Date</th>
                  <th>Changes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>v1.0</code></td>
                  <td>May 2026</td>
                  <td>Initial release. 4 criteria × 25 points, 5 project badges, minimum 3-project threshold.</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 7 — Data license */}
          <section id="data-license" className="methodology-section">
            <span className="section-number">07</span>
            <h2>Data license &amp; citation</h2>

            <h3>License</h3>
            <p>
              All CTI scores and associated metadata are published under the
              <strong> Creative Commons Attribution 4.0 International (CC BY 4.0)</strong> license.
              You are free to share and adapt the data for any purpose, including commercial use,
              provided you give appropriate credit.
            </p>

            <h3>How to cite</h3>
            <div className="citation-box">
              <p>
                Citixen Technologies. (2026). <em>Citixen Transparency Index — Methodology v1.0</em>.
                Retrieved from <code>https://citixen.tech/transparency-methodology</code>
              </p>
            </div>

            <h3>Machine-readable data</h3>
            <p>
              CTI scores are available programmatically via Citixen&apos;s public API. Documentation
              and endpoints will be published at a future date. Organizations interested in
              early access can contact <strong>data@citixen.tech</strong>.
            </p>
          </section>

        </div>

        {/* CTA */}
        <section className="methodology-cta">
          <div className="container">
            <div className="cta-inner">
              <h2>Interested in using CTI data?</h2>
              <p>
                If you represent a multilateral organization, government agency, research institution,
                or media outlet and are interested in accessing CTI data or collaborating on methodology
                development, we would like to hear from you.
              </p>
              <a href="mailto:data@citixen.tech" className="btn-primary">
                Contact us &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
