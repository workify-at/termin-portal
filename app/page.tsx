import { HeroVideo } from "@/components/HeroVideo";

export default function HomePage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div>
            <h1>Fragen zu Ihrem Termin?</h1>
            <p className="lead">
              Termin Portal ist <strong>ausschließlich eine Plattform zum Versand und zur Online-Buchung
              von Terminen</strong> im Auftrag Ihrer Praxis. Bitte melden Sie sich bei Fragen nicht bei Termin Portal,
              sondern direkt bei Ihrem behandelnden Arzt.
            </p>
            <div className="hero-actions">
              <a className="btn btn-dark" href="#faq">
                Häufige Fragen
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn btn-outline" href="#gut-zu-wissen">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx={12} cy={12} r={9} />
                  <path d="M12 11v5M12 7.5v.01" />
                </svg>
                Gut zu wissen
              </a>
            </div>
          </div>

          <HeroVideo />
        </div>
      </section>

      {/* Kernbotschaft */}
      <section className="notice-section" aria-labelledby="notice-title">
        <div className="container">
          <div className="notice" role="note">
            <div className="ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={9} />
                <path d="M12 11v5M12 7.5v.01" />
              </svg>
            </div>
            <div>
              <h2 id="notice-title">Bitte wenden Sie sich an Ihre Praxis – nicht an Termin Portal.</h2>
              <p>
                Termin Portal ist lediglich die Plattform für die Online-Buchung und den automatisierten Versand Ihrer
                Terminbestätigung. Termin Portal kann Ihre
                Termine weder einsehen noch ändern oder absagen und erteilt keine medizinische Auskunft. Für alle Anliegen
                ist ausschließlich Ihr behandelnder Arzt bzw. Ihre Praxis zuständig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="section" id="gut-zu-wissen" aria-labelledby="vorteile-title">
        <div className="container">
          <div className="section-head">
            <h2 id="vorteile-title">Gut zu wissen</h2>
          </div>

          <ul className="benefits">
            <li className="benefit">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx={12} cy={12} r={9} />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3>Nur eine Plattform</h3>
              <p>Termin Portal dient der Online-Buchung und dem Versand von Terminen im Auftrag Ihrer Praxis.</p>
            </li>
            <li className="benefit">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x={3} y={5} width={18} height={14} rx={2} />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <h3>Bestätigung per E-Mail</h3>
              <p>Nach der Buchung erhalten Sie automatisch alle Details zu Ihrem Termin.</p>
            </li>
            <li className="benefit">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx={12} cy={8} r={4} />
                  <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <h3>Keine Auskunft durch Termin Portal</h3>
              <p>Termin Portal sieht Ihre Termine nicht und erteilt keine medizinische Auskunft.</p>
            </li>
            <li className="benefit">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
              </div>
              <h3>Ihr Arzt ist Ansprechpartner</h3>
              <p>Absagen, Änderungen und alle Fragen zum Termin klären Sie direkt mit Ihrer Praxis.</p>
            </li>
            <li className="benefit">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x={4} y={11} width={16} height={10} rx={2} />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </div>
              <h3>Ihre Daten sind sicher</h3>
              <p>Ihre Angaben werden verschlüsselt übertragen.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" id="faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-head">
            <h2 id="faq-title">Häufige Fragen</h2>
          </div>
          <div className="faq">
            <details open>
              <summary>
                An wen wende ich mich bei Fragen zu meinem Termin?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div className="answer">
                <p>
                  Immer an Ihre behandelnde Ärztin bzw. Ihren behandelnden Arzt. Termin Portal ist nur die Plattform
                  für Online-Buchung und Versand von Terminen und kann Ihnen bei Anliegen zu Ihrem Termin
                  nicht weiterhelfen.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Wie kann ich meinen Termin absagen oder verschieben?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div className="answer">
                <p>
                  In Ihrer Terminbestätigung finden Sie einen Stornolink, über den Sie den Termin direkt selbst
                  absagen können. Alternativ wenden Sie sich einfach direkt an Ihre Praxis.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Ich habe eine Frage zu meiner Behandlung. Wer hilft mir weiter?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div className="answer">
                <p>
                  Ausschließlich Ihre behandelnde Ärztin bzw. Ihr behandelnder Arzt. Termin Portal ist keine
                  medizinische Einrichtung und erteilt keine medizinische Auskunft.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Ich habe keine Bestätigungs-E-Mail erhalten.
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div className="answer">
                <p>
                  Bitte prüfen Sie zunächst Ihren Spam- bzw. Werbung-Ordner. Findet sich dort keine Nachricht,
                  wurde eventuell die E-Mail-Adresse bei der Buchung falsch eingegeben.
                </p>
                <p>Kontaktieren Sie in diesem Fall bitte die Praxis, um Ihren Termin zu bestätigen.</p>
              </div>
            </details>
            <details>
              <summary>
                Kann ich auf die Bestätigungs-E-Mail antworten?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div className="answer">
                <p>
                  Nein. Die Bestätigung wird automatisch versendet – Antworten darauf erreichen die Praxis nicht.
                  Bitte nutzen Sie die in der E-Mail angegebenen Kontaktdaten der Praxis.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Ich habe keinen Termin gebucht, aber eine E-Mail erhalten.
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div className="answer">
                <p>
                  Möglicherweise hat jemand bei der Buchung versehentlich Ihre E-Mail-Adresse angegeben. Bitte
                  informieren Sie die in der E-Mail genannte Praxis, damit der Termin storniert und die Daten
                  korrigiert werden können.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
