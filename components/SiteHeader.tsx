import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <Link className="logo" href="/" aria-label="Termin Portal Startseite">
          <img className="logo-mark" src="/favicon.svg" alt="" width={32} height={32} />
          <b>
            Termin <span>Portal</span>
          </b>
        </Link>
      </div>
    </header>
  );
}
