import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Termin Portal",
  robots: { index: false },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main id="main" className="legal">
      <div className="container">
        <Link className="back-link" href="/">
          ← Zur Startseite
        </Link>
        <h1>Impressum</h1>

        <p>Informationen gemäß § 5 E-Commerce-Gesetz und Offenlegung gemäß § 25 Mediengesetz.</p>

        <h2>Medieninhaberin und Betreiberin</h2>
        <p>
          Termin Portal ist eine Marke der
          <br />
          <strong>Doc Media GmbH</strong>
          <br />
          Oberndorfer Straße 35
          <br />
          5020 Salzburg, Österreich
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:office@doc-media.at">office@doc-media.at</a>
        </p>
        <p>
          <strong>Hinweis:</strong> Für Fragen zu gebuchten Terminen, Terminänderungen oder Absagen wenden Sie
          sich bitte ausschließlich an die jeweilige Praxis. Wir können keine Termine einsehen, ändern oder
          absagen.
        </p>

        <h2>Unternehmensangaben</h2>
        <p>
          Rechtsform: Gesellschaft mit beschränkter Haftung
          <br />
          UID-Nummer: ATU 70092357
          <br />
          Unternehmensgegenstand: Werbeagentur und Unternehmensberatung für Arztpraxen und Kliniken
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          Termin Portal stellt ausschließlich die technische Infrastruktur zur Online-Terminbuchung bereit. Wir
          erbringen keine medizinischen Leistungen und erteilen keine medizinische Beratung. Für die über die
          Plattform gebuchten Termine sowie für sämtliche Behandlungsleistungen ist ausschließlich die jeweilige
          Praxis verantwortlich.
        </p>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Doc Media GmbH erstellten Inhalte und Werke auf dieser Website unterliegen dem
          österreichischen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der Doc Media GmbH.
        </p>
      </div>
    </main>
  );
}
