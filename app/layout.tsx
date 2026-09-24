import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.termin-portal.com"),
  title: "Termin Portal – Online-Terminbuchung und Terminversand",
  description:
    "Termin Portal ist ausschließlich eine Plattform zum Versand und zur Online-Buchung von Terminen. Bei Fragen zu Ihrem Termin wenden Sie sich bitte an Ihren behandelnden Arzt bzw. Ihre Praxis.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Termin Portal – Online-Terminbuchung und Terminversand",
    description: "Plattform zum Versand und zur Online-Buchung von Terminen. Bei Fragen wenden Sie sich bitte an Ihren behandelnden Arzt.",
    type: "website",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#3a6bc9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT">
      <body>
        <a className="skip-link" href="#main">
          Zum Inhalt springen
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
