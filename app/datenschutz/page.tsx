import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Termin Portal",
  robots: { index: false },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <main id="main" className="legal">
      <div className="container">
        <Link className="back-link" href="/">
          ← Zur Startseite
        </Link>
        <h1>Datenschutzerklärung</h1>

        <p>
          Termin Portal ist eine Marke der Doc Media GmbH. Verantwortlich für die Verarbeitung
          personenbezogener Daten im Zusammenhang mit dieser Website ist die Doc Media GmbH.
        </p>

        <h2>Verantwortlicher</h2>
        <p>
          Doc Media GmbH
          <br />
          Oberndorfer Straße 35
          <br />
          5020 Salzburg, Österreich
          <br />
          Tel.: <a href="tel:+436644032143">+43 664 40 32 143</a>
          <br />
          E-Mail: <a href="mailto:office@doc-media.at">office@doc-media.at</a>
        </p>

        <h2>Rollenverteilung bei der Terminbuchung</h2>
        <p>
          Bei der Online-Terminbuchung über Termin Portal ist die jeweilige Praxis Verantwortliche im Sinne der
          DSGVO für die Verarbeitung Ihrer Buchungsdaten. Die Doc Media GmbH verarbeitet diese Daten als
          Auftragsverarbeiterin im Auftrag der Praxis (Art. 28 DSGVO). Anfragen zu Ihren Buchungsdaten (z.&nbsp;B.
          Auskunft oder Löschung) richten Sie bitte direkt an die Praxis, bei der Sie den Termin gebucht haben.
        </p>

        <h2>Verarbeitete Daten bei der Buchung</h2>
        <ul>
          <li>Name und Kontaktdaten (E-Mail-Adresse, Telefonnummer)</li>
          <li>Gewählter Termin, Terminart und Praxis</li>
          <li>Optionale Angaben, die Sie im Buchungsformular machen</li>
        </ul>

        <h2>Zweck der Verarbeitung</h2>
        <p>
          Die Daten werden ausschließlich zur Durchführung der Terminvereinbarung, zur Übermittlung an die
          Praxis sowie zum Versand der Terminbestätigung per E-Mail verwendet. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
        </p>

        <h2>Besuch dieser Website</h2>
        <p>
          Diese Informationsseite verwendet keine Cookies und keine Analyse- oder Marketing-Tools und bindet
          keine Inhalte von Drittanbietern ein. Schriftarten, Video und Bilder sind lokal eingebunden.
        </p>
        <p>
          Der Hosting-Dienstleister ist:
          <br />
          Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, Vereinigte Staaten von Amerika
          <br />
          EU-Vertreter: c/o EDPO, Avenue Huart Hamoir 71, 1030 Brüssel, Belgien
        </p>
        <p>
          Beim Aufruf werden durch den Hosting-Dienstleister automatisch technisch notwendige Server-Logfiles
          verarbeitet, die Ihr Browser automatisch übermittelt (z.&nbsp;B. IP-Adresse, Browsertyp und -version,
          Betriebssystem, Referrer-URL, Uhrzeit der Serveranfrage). Dies erfolgt auf Grundlage unseres
          berechtigten Interesses an einer sicheren und effizienten Bereitstellung unserer Website (Art. 6
          Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Vercel kann personenbezogene Daten auch in den USA verarbeiten. Die Übermittlung erfolgt auf
          Grundlage geeigneter Garantien, insbesondere Standardvertragsklauseln der EU-Kommission. Weitere
          Informationen finden Sie in der Datenschutzerklärung von Vercel unter:
          <br />
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            vercel.com/legal/privacy-policy
          </a>
        </p>

        <h2>Sicherheit</h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie
          zum Beispiel Ihrer Buchungsdaten, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
          erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns bzw. an die Praxis übermitteln, nicht von Dritten mitgelesen werden.
        </p>

        <h2>Speicherdauer</h2>
        <p>
          Buchungsbezogene Daten werden gelöscht, sobald der Verarbeitungszweck entfällt und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen. Server-Logdaten werden durch den Hosting-Dienstleister
          automatisiert nach kurzer Zeit gelöscht bzw. anonymisiert.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
          Datenübertragbarkeit und Widerspruch zu. Anfragen zu Ihren Buchungsdaten richten Sie bitte direkt an
          die jeweilige Praxis (siehe „Rollenverteilung“). Für alle sonstigen Anliegen erreichen Sie uns über
          die oben genannten Kontaktdaten der Doc Media GmbH.
        </p>
        <p>
          Sie haben darüber hinaus das Recht, eine Beschwerde bei einer Datenschutzaufsichtsbehörde
          einzureichen. Zuständig ist grundsätzlich die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts oder
          des Orts des mutmaßlichen Verstoßes. Für Betroffene stehen insbesondere die folgenden
          Aufsichtsbehörden zur Verfügung:
        </p>
        <ul>
          <li>
            <strong>Österreich:</strong> Österreichische Datenschutzbehörde (DSB), Barichgasse 40–42, 1030 Wien,{" "}
            <a href="https://www.dsb.gv.at" rel="noopener">
              www.dsb.gv.at
            </a>
          </li>
          <li>
            <strong>Deutschland:</strong> zuständige Aufsichtsbehörde des jeweiligen Bundeslandes. Eine
            Übersicht finden Sie unter:{" "}
            <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" rel="noopener">
              www.bfdi.bund.de
            </a>
          </li>
        </ul>

        <h2>Änderung dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns das Recht vor, unsere Sicherheits- und Datenschutzmaßnahmen zu verändern, soweit dies
          wegen der technischen Entwicklung erforderlich wird. In diesen Fällen passen wir auch diese
          Datenschutzerklärung entsprechend an. Bitte beachten Sie daher die jeweils aktuelle Version.
        </p>
        <p>Stand: September 2026</p>
      </div>
    </main>
  );
}
