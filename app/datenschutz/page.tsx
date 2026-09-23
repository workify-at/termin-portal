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
          Termin Portal ist eine Marke der Doc Media GmbH. Diese Datenschutzerklärung erläutert, wie
          personenbezogene Daten im Zusammenhang mit dieser Website sowie im Rahmen der Online-Terminbuchung
          verarbeitet werden.
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
          Bei der Online-Terminbuchung über Termin Portal ist die jeweilige Praxis Verantwortliche gemäß Art. 4
          Z 7 DSGVO für die Verarbeitung Ihrer Buchungsdaten. Die Doc Media GmbH verarbeitet diese Daten als
          Auftragsverarbeiter im Auftrag der Praxis (Art. 28 DSGVO), ausschließlich zum Zweck der technischen
          Bereitstellung und des Betriebs von Termin Portal. Eine darüber hinausgehende eigenständige Nutzung
          Ihrer Buchungsdaten durch Termin Portal findet nicht statt. Anfragen zu Ihren Buchungsdaten (z.&nbsp;B.
          Auskunft oder Löschung) richten Sie bitte direkt an die Praxis, bei der Sie den Termin gebucht haben.
        </p>

        <h2>Rechtsgrundlagen der Datenverarbeitung</h2>
        <p>Die Verarbeitung Ihrer Buchungsdaten stützt sich auf folgende Rechtsgrundlagen:</p>
        <ul>
          <li>
            <strong>Vertragserfüllung und vorvertragliche Maßnahmen</strong> (Art. 6 Abs. 1 lit. b DSGVO): zur
            Entgegennahme, Bearbeitung und Durchführung Ihrer Terminanfrage.
          </li>
          <li>
            <strong>Erfüllung rechtlicher Verpflichtungen</strong> (Art. 6 Abs. 1 lit. c DSGVO): soweit
            gesetzliche Aufbewahrungs- und Dokumentationspflichten der Praxis bestehen.
          </li>
          <li>
            <strong>Berechtigtes Interesse</strong> (Art. 6 Abs. 1 lit. f DSGVO): an der ordnungsgemäßen
            Terminkoordination und Patientenverwaltung.
          </li>
        </ul>

        <h2>Verarbeitete Daten bei der Buchung</h2>
        <ul>
          <li>Vor- und Nachname</li>
          <li>Geburtsdatum</li>
          <li>E-Mail-Adresse</li>
          <li>Mobiltelefonnummer</li>
          <li>Ausgewählte Praxis</li>
          <li>Gegebenenfalls ausgewählte Fachkraft bzw. Leistungserbringer</li>
          <li>Art der gewünschten Leistung</li>
          <li>Gewählter Terminzeitpunkt</li>
          <li>Datum und Uhrzeit der Buchungsanfrage</li>
          <li>Gegebenenfalls eine optionale Nachricht (Freitextfeld für ergänzende Angaben)</li>
          <li>Gegebenenfalls Art der Krankenversicherung, sofern von der Praxis für die Abrechnung vorgesehen</li>
        </ul>
        <p>
          Die Eingabe einer Nachricht im Freitextfeld ist freiwillig und für die Buchung nicht erforderlich. Wir
          bitten Sie, dort keine sensiblen Gesundheitsinformationen anzugeben – solche Angaben werden von
          Termin Portal weder angefordert noch benötigt. Sollten Sie dennoch von sich aus gesundheitsbezogene
          Angaben machen, geschieht dies eigenverantwortlich. Sämtliche personenbezogenen Daten werden in
          verschlüsselter Form gespeichert.
        </p>

        <h2>Zweck der Verarbeitung</h2>
        <p>
          Ihre Daten werden für folgende Zwecke verarbeitet: die Entgegennahme, Bearbeitung und Bestätigung
          Ihrer Terminanfrage sowie die Kommunikation im Zusammenhang mit dem Termin; die Weiterverarbeitung im
          Rahmen der Patientenverwaltung und Honorarabrechnung durch die Praxis; sowie die Aufbewahrung Ihrer
          Daten unter Beachtung der einschlägigen gesetzlichen Bestimmungen.
        </p>

        <h2>Versand der Terminbestätigung</h2>
        <p>
          Für den Versand der Terminbestätigung per E-Mail setzen wir den E-Mail-Dienstleister Mailgun
          (Mailgun Technologies, Inc.; Teil der Sinch AB) ein. Dabei werden die zur Bestätigung notwendigen
          Daten (z.&nbsp;B. Name, E-Mail-Adresse, Termindetails) an Mailgun übermittelt.
        </p>
        <p>
          Die Verarbeitung erfolgt über die von Mailgun bereitgestellten Server innerhalb der Europäischen
          Union. Eine Übermittlung personenbezogener Daten in ein Drittland findet im Rahmen des
          E-Mail-Versands nicht statt. Weitere Informationen finden Sie in der Datenschutzerklärung von Mailgun
          unter:
          <br />
          <a href="https://www.mailgun.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
            mailgun.com/legal/privacy-policy
          </a>
        </p>

        <h2>Besuch dieser Website</h2>
        <p>
          Diese Informationsseite verwendet keine Cookies und keine Analyse- oder Marketing-Tools und bindet
          keine Inhalte von Drittanbietern ein. Schriftarten, Video und Bilder sind lokal eingebunden.
        </p>
        <p>
          Der Hosting-Dienstleister ist:
          <br />
          Scaleway SAS, 8 rue de la Ville l&apos;Évêque, 75008 Paris, Frankreich
        </p>
        <p>
          Beim Aufruf werden durch den Hosting-Dienstleister automatisch technisch notwendige Server-Logfiles
          verarbeitet, die Ihr Browser automatisch übermittelt (z.&nbsp;B. IP-Adresse, Browsertyp und -version,
          Betriebssystem, Referrer-URL, Uhrzeit der Serveranfrage). Dies erfolgt auf Grundlage unseres
          berechtigten Interesses an einer sicheren und effizienten Bereitstellung unserer Website (Art. 6
          Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Die Server befinden sich innerhalb der Europäischen Union. Eine Übermittlung personenbezogener Daten
          in ein Drittland findet im Rahmen des Hostings nicht statt. Weitere Informationen finden Sie in der
          Datenschutzerklärung des Hosting-Dienstleisters unter:
          <br />
          <a href="https://www.scaleway.com/en/privacy-policy/" target="_blank" rel="noopener noreferrer">
            scaleway.com/en/privacy-policy
          </a>
        </p>

        <h2>Sicherheit</h2>
        <p>
          Termin Portal setzt geeignete technische und organisatorische Maßnahmen ein, um Ihre
          personenbezogenen Daten vor unbefugtem Zugriff, Verlust, Zerstörung oder Veränderung zu schützen.
          Diese Maßnahmen werden regelmäßig überprüft und dem aktuellen Stand der Technik angepasst.
        </p>
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie
          zum Beispiel Ihrer Buchungsdaten, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
          erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns bzw. an die Praxis übermitteln, nicht von Dritten mitgelesen werden.
        </p>

        <h2>Speicherdauer</h2>
        <p>
          Die Praxis speichert Ihre Buchungsdaten so lange, wie dies zur Erfüllung der beschriebenen
          Verarbeitungszwecke erforderlich ist oder gesetzliche Aufbewahrungs- und Dokumentationspflichten –
          insbesondere aus dem Behandlungsverhältnis und den anwendbaren nationalen Berufs-, Gesundheits- und
          Abgabengesetzen – dies vorsehen. Nach Ablauf der jeweiligen Frist werden die Daten gelöscht oder
          anonymisiert weiterverarbeitet, sofern keine anderweitigen rechtlichen Verpflichtungen entgegenstehen.
          Server-Logdaten werden durch den Hosting-Dienstleister automatisiert nach kurzer Zeit gelöscht bzw.
          anonymisiert.
        </p>

        <h2>Ihre Rechte</h2>
        <p>Als betroffene Person stehen Ihnen insbesondere folgende Rechte zu:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
          <li>Recht auf Kenntnis der Empfänger, an die Ihre Daten übermittelt werden</li>
        </ul>
        <p>
          Anfragen zu Ihren Buchungsdaten richten Sie bitte direkt an die jeweilige Praxis (siehe
          „Rollenverteilung“). Für alle sonstigen Anliegen erreichen Sie uns über die oben genannten
          Kontaktdaten der Doc Media GmbH.
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
