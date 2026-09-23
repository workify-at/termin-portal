// Werte aus termin-portal.com (Buchungsstrecke, mobile Ansicht) übernommen.
export const FONT = 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const C = {
  primary: "#2a6dc8",
  primary8: "rgba(42,109,200,0.08)",
  text: "#0a0a0a",
  black: "#000000",
  a80: "rgba(0,0,0,0.8)",
  a60: "rgba(0,0,0,0.6)",
  a40: "rgba(0,0,0,0.4)",
  a10: "rgba(0,0,0,0.1)",
  a08: "rgba(0,0,0,0.08)",
  a06: "rgba(0,0,0,0.06)",
  a05: "rgba(0,0,0,0.05)",
  line: "#e6e6e6",
  label: "#333333",
  muted: "#999999",
  slotText: "#081628",
  dark: "#1a1a1a",
  selected: "#333333",
  disabledBg: "#f5f5f5",
  disabledText: "#c4c4c4",
  bookDisabled: "#cccccc",
  white: "#ffffff",
};

// Ausgabegröße = Bildschirm des iPhone-Mockups (278 × 598 CSS-px) in 2x.
export const OUT_W = 556;
export const OUT_H = 1196;
// Gerendert wird in der echten mobilen Breite, damit alle Maße 1:1 stimmen.
export const VIEW_W = 375;
export const SCALE = OUT_W / VIEW_W;
export const VIEW_H = OUT_H / SCALE;

export const STATUS_H = 54;
export const SAFARI_H = 80;
export const PAGE_H = VIEW_H - STATUS_H - SAFARI_H;
export const FOOTER_H = 57;
/** Mittelpunkt (y) des Buttons in der fixierten Fußleiste */
export const FOOTER_BTN_Y = PAGE_H - FOOTER_H + 8 + 20;

export const FPS = 30;

// Szenenlängen (Frames) und Übergangsdauer
export const S1 = 70; // Praxis auswählen
export const S2 = 75; // Behandlung auswählen
export const S3 = 90; // Termin auswählen
export const S4 = 230; // Persönliche Daten
export const S5 = 150; // Bestätigung
export const T = 8;
export const TOTAL = S1 + S2 + S3 + S4 + S5 - 4 * T;

export const START5 = S1 + S2 + S3 + S4 - 4 * T;
