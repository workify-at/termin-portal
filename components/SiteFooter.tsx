import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="logo" href="/">
              <img className="logo-mark" src="/favicon.svg" alt="" width={32} height={32} />
              <b>
                Termin <span>Portal</span>
              </b>
            </Link>
            <p className="footer-about">Schnell online zum passenden Arzttermin.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Rechtliches</h4>
              <ul>
                <li>
                  <Link href="/impressum">Impressum</Link>
                </li>
                <li>
                  <Link href="/datenschutz">Datenschutz</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 termin-portal.com</span>
          <span>Termin Portal erteilt keine medizinische Beratung.</span>
        </div>
      </div>
    </footer>
  );
}
