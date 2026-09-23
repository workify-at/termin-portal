import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C, FOOTER_H } from "./theme";

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** 0..1 für einen kurzen "Drück"-Effekt um Frame `at`. */
export const usePress = (at: number) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [at - 2, at, at + 6], [0, 1, 0], clamp);
};

export const typed = (text: string, frame: number, from: number, to: number) => {
  const n = Math.round(interpolate(frame, [from, to], [0, text.length], clamp));
  return text.slice(0, n);
};

/** Tipp-Indikator (Finger) an Position (x, y) im Seitenbereich. */
export const Tap: React.FC<{ x: number; y: number; at: number }> = ({ x, y, at }) => {
  const frame = useCurrentFrame();
  const local = frame - at;
  if (local < -4 || local > 14) return null;
  const scale = interpolate(local, [-4, 0, 14], [0.9, 0.7, 1.5], clamp);
  const opacity = interpolate(local, [-4, 0, 14], [0, 0.45, 0], clamp);
  return (
    <div
      style={{
        position: "absolute",
        left: x - 22,
        top: y - 22,
        width: 44,
        height: 44,
        borderRadius: 22,
        background: C.primary,
        opacity,
        transform: `scale(${scale})`,
        zIndex: 60,
      }}
    />
  );
};

/** Radio-Icons 1:1 aus /check-empty.svg und /check-filled.svg */
export const Radio: React.FC<{ checked: boolean }> = ({ checked }) => (
  <div style={{ position: "relative", width: 20, height: 20, flexShrink: 0 }}>
    <svg style={{ position: "absolute", inset: "8.748%" }} width="16.5" height="16.5" viewBox="0 0 14 14" fill="none">
      {checked ? (
        <path
          d="M7.00016 0.399902C10.6452 0.399902 13.6004 3.35508 13.6004 7.00016C13.6004 10.6452 10.6452 13.6004 7.00016 13.6004C3.35508 13.6004 0.399902 10.6452 0.399902 7.00016C0.399902 3.35508 3.35508 0.399902 7.00016 0.399902ZM7.00016 1.60042C4.01783 1.60042 1.60042 4.01783 1.60042 7.00016C1.60042 9.9825 4.01783 12.3999 7.00016 12.3999C9.9825 12.3999 12.3999 9.9825 12.3999 7.00016C12.3999 4.01783 9.9825 1.60042 7.00016 1.60042ZM7.00016 2.66683C9.3934 2.66683 11.3335 4.60693 11.3335 7.00016C11.3335 9.3934 9.3934 11.3335 7.00016 11.3335C4.60693 11.3335 2.66683 9.3934 2.66683 7.00016C2.66683 4.60693 4.60693 2.66683 7.00016 2.66683Z"
          fill={C.dark}
        />
      ) : (
        <path
          d="M12.3999 7.00016C12.3999 4.01783 9.9825 1.60042 7.00016 1.60042C4.01783 1.60042 1.60042 4.01783 1.60042 7.00016C1.60042 9.9825 4.01783 12.3999 7.00016 12.3999C9.9825 12.3999 12.3999 9.9825 12.3999 7.00016ZM13.6004 7.00016C13.6004 10.6452 10.6452 13.6004 7.00016 13.6004C3.35508 13.6004 0.399902 10.6452 0.399902 7.00016C0.399902 3.35508 3.35508 0.399902 7.00016 0.399902C10.6452 0.399902 13.6004 3.35508 13.6004 7.00016Z"
          fill={C.dark}
        />
      )}
    </svg>
  </div>
);

/** Fortschrittsanzeige 1–4 (18px-Kreise, Abstand 12px) */
export const Stepper: React.FC<{ active: number }> = ({ active }) => (
  <div style={{ height: 74, display: "flex", justifyContent: "center", paddingTop: 28, gap: 12 }}>
    {[1, 2, 3, 4].map((n) => {
      const done = n < active;
      const current = n === active;
      return (
        <div
          key={n}
          style={{
            width: 18,
            height: 18,
            borderRadius: 14,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 500,
            lineHeight: "16px",
            background: done ? C.primary : current ? C.primary8 : C.a05,
            border: current ? `1px solid ${C.primary}` : "none",
            color: done ? C.white : current ? C.primary : C.a60,
          }}
        >
          {n}
        </div>
      );
    })}
  </div>
);

export const H2: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, lineHeight: "40px", color: C.text, ...style }}>{children}</h2>
);

/** Seitenbereich einer Buchungsseite; `scroll` verschiebt den Inhalt. */
export const Page: React.FC<{ children: React.ReactNode; scroll?: number }> = ({ children, scroll = 0 }) => (
  <AbsoluteFill style={{ background: C.white, overflow: "hidden" }}>
    <div style={{ transform: `translateY(${-scroll}px)`, padding: "0 20px" }}>{children}</div>
  </AbsoluteFill>
);

const Spinner: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={C.white}
      strokeWidth="2.5"
      strokeLinecap="round"
      style={{ position: "absolute", right: 12, transform: `rotate(${frame * 14}deg)` }}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

/** Fixierte Fußleiste mit Zurück- und Weiter-Button */
export const Footer: React.FC<{
  label?: string;
  back?: boolean;
  enabled: boolean;
  pressAt?: number;
  loading?: boolean;
  book?: boolean;
}> = ({ label = "Weiter", back = true, enabled, pressAt = -99, loading = false, book = false }) => {
  const press = usePress(pressAt);
  const bg = enabled ? (press > 0 ? "#2460b3" : C.primary) : book ? C.bookDisabled : C.disabledBg;
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: FOOTER_H,
        boxSizing: "border-box",
        padding: "8px 20px",
        background: "rgba(255,255,255,0.88)",
        borderTop: `1px solid ${C.a08}`,
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        zIndex: 40,
      }}
    >
      {back ? (
        <div
          style={{
            width: 40,
            height: 40,
            boxSizing: "border-box",
            flexShrink: 0,
            background: C.white,
            border: `1px solid ${C.a08}`,
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5.58 10.64l4.45 4.45a.833.833 0 0 1-1.18 1.18L3.6 11.02a1.25 1.25 0 0 1 0-1.77L8.85 3.99a.833.833 0 1 1 1.18 1.18L5.58 9.62l.94-.04H16a.833.833 0 1 1 0 1.67H6.52l-.94-.04Z"
              fill="#081628"
            />
          </svg>
        </div>
      ) : null}
      <div
        style={{
          position: "relative",
          flex: 1,
          height: 40,
          boxSizing: "border-box",
          borderRadius: book ? 14 : 10,
          background: bg,
          border: enabled ? `1px solid ${C.a10}` : book ? "none" : `1px solid ${C.a06}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${1 - press * 0.03})`,
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "20px",
            letterSpacing: -0.24,
            color: enabled || book ? C.white : C.disabledText,
          }}
        >
          {label}
        </span>
        {loading ? <Spinner /> : null}
      </div>
    </div>
  );
};
