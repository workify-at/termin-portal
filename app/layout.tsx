import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.termin-portal.com"),
  title: "Termin Portal – Online-Terminbuchung bei Ihrer Praxis",
  description:
    "Sie haben eine Terminbestätigung von Termin Portal erhalten? Termin Portal ist das Online-Buchungssystem Ihrer Praxis. Bei Fragen zu Ihrem Termin wenden Sie sich bitte direkt an Ihre Praxis.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Termin Portal – Online-Terminbuchung",
    description: "Arzttermine einfach online buchen. Fragen zu Ihrem Termin klären Sie bitte direkt mit Ihrer Praxis.",
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
