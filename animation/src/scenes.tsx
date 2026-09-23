import React from "react";
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Footer, H2, Page, Radio, Stepper, Tap, clamp, typed, usePress } from "./ui";
import { C, FOOTER_BTN_Y } from "./theme";

// Alle Namen und Daten sind Platzhalter – keine echten Ärzt:innen- oder Patient:innendaten.

const BTN_X_SINGLE = 187.5;
const BTN_X_WITH_BACK = 72 + 283 / 2;

/* ---------------- Karte (Praxis / Behandlung) ---------------- */

const OptionCard: React.FC<{ title: string; lines: string[]; selected: boolean; pressAt?: number }> = ({
  title,
  lines,
  selected,
  pressAt = -99,
}) => {
  const press = usePress(pressAt);
  return (
    <div
      style={{
        width: 335,
        boxSizing: "border-box",
        padding: "16px 16px 16px 20px",
        borderRadius: 16,
        background: C.white,
        border: `1px solid ${selected ? C.selected : C.a08}`,
        boxShadow: "0 0 20px rgba(0,0,0,0.02)",
        display: "flex",
        alignItems: "flex-start",
        gap: 8,
        marginBottom: 12,
        transform: `scale(${1 - press * 0.015})`,
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingLeft: 2 }}>
        <p style={{ margin: 0, fontSize: 16, fontWeight: 600, lineHeight: "16px", letterSpacing: -0.24, color: C.a80 }}>
          {title}
        </p>
        <div style={{ marginTop: lines.length > 1 ? 4 : 8 }}>
          {lines.map((l) => (
            <p key={l} style={{ margin: 0, fontSize: 14, fontWeight: 500, lineHeight: "16px", letterSpacing: -0.32, color: C.a60 }}>
              {l}
            </p>
          ))}
        </div>
      </div>
      <Radio checked={selected} />
    </div>
  );
};

/* ---------------- 1: Praxis auswählen ---------------- */

export const SceneLocation: React.FC = () => (
  <AbsoluteFill>
    <Page>
      <Stepper active={1} />
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          background: "#eceef2",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <svg width="46" height="46" viewBox="0 0 24 24" fill="#c3c8d1">
          <circle cx="12" cy="9" r="4.2" />
          <path d="M3.5 22c.6-4.6 4.2-7.6 8.5-7.6s7.9 3 8.5 7.6z" />
        </svg>
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 16, fontWeight: 500, lineHeight: "16px", color: C.black }}>Dr.</p>
      <p style={{ margin: "2px 0 0", fontSize: 20, fontWeight: 600, lineHeight: "20px", color: C.black }}>Max Mustermann</p>
      <p style={{ margin: "4px 0 0", fontSize: 16, fontWeight: 500, lineHeight: "16px", color: C.a40 }}>
        Facharzt für Allgemeinmedizin
      </p>
      <H2 style={{ marginTop: 48, marginBottom: 20 }}>Praxis auswählen</H2>
      <OptionCard title="Ordination Musterstadt" lines={["Musterstraße 1", "1010 Wien"]} selected pressAt={18} />
    </Page>
    <Footer back={false} enabled pressAt={44} />
    <Tap x={200} y={354} at={18} />
    <Tap x={BTN_X_SINGLE} y={FOOTER_BTN_Y} at={44} />
  </AbsoluteFill>
);

/* ---------------- 2: Behandlung auswählen ---------------- */

const TREATMENTS: [string, string][] = [
  ["Erstordination", "Erstordinationsbesuch"],
  ["Folgeordination", "Befundbesprechung"],
  ["Kontrolle", "Kontrolltermin nach Behandlung"],
  ["Vorsorgeuntersuchung", "Gesundenuntersuchung"],
  ["Therapie", "Therapietermin gewünscht"],
];

export const SceneTreatment: React.FC = () => {
  const frame = useCurrentFrame();
  const chosen = frame >= 22;
  return (
    <AbsoluteFill>
      <Page>
        <Stepper active={2} />
        <H2 style={{ marginBottom: 28 }}>Behandlung auswählen</H2>
        {TREATMENTS.map(([t, d], i) => (
          <OptionCard key={t} title={t} lines={[d]} selected={chosen && i === 0} pressAt={i === 0 ? 22 : -99} />
        ))}
      </Page>
      <Footer enabled={chosen} pressAt={52} />
      <Tap x={180} y={179} at={22} />
      <Tap x={BTN_X_WITH_BACK} y={FOOTER_BTN_Y} at={52} />
    </AbsoluteFill>
  );
};

/* ---------------- 3: Termin auswählen ---------------- */

const Chevron: React.FC<{ dir: "left" | "right" }> = ({ dir }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.dark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={dir === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
  </svg>
);

const NavBtn: React.FC<{ dir: "left" | "right" }> = ({ dir }) => (
  <div
    style={{
      width: 32,
      height: 70,
      boxSizing: "border-box",
      borderRadius: 14,
      border: `1px solid ${C.line}`,
      background: C.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <Chevron dir={dir} />
  </div>
);

const Day: React.FC<{ d: string; date: string; info: string; state: "selected" | "free" | "full" }> = ({ d, date, info, state }) => (
  <div
    style={{
      width: 83,
      height: 70,
      boxSizing: "border-box",
      padding: "10px 0 12px",
      borderRadius: 14,
      background: state === "full" ? C.disabledBg : C.white,
      border: state === "full" ? "none" : `1px solid ${state === "selected" ? C.dark : C.line}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      color: C.black,
      opacity: state === "full" ? 0.45 : 1,
    }}
  >
    <span style={{ fontSize: 12, fontWeight: 500, lineHeight: "12px", letterSpacing: -0.32 }}>{d}</span>
    <span style={{ fontSize: 14, fontWeight: 600, lineHeight: "16px", letterSpacing: -0.24 }}>{date}</span>
    <span style={{ fontSize: 10, fontWeight: 500, lineHeight: "12px", letterSpacing: -0.32, opacity: state === "full" ? 1 : 1 }}>
      {info}
    </span>
  </div>
);

const Slot: React.FC<{ time: string; selected: boolean }> = ({ time, selected }) => (
  <div
    style={{
      width: 73,
      height: 36,
      boxSizing: "border-box",
      borderRadius: 14,
      border: `1px solid ${selected ? C.primary : C.a08}`,
      background: selected ? C.primary : C.white,
      color: selected ? C.white : C.slotText,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "16px",
      letterSpacing: -0.32,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {time}
  </div>
);

const SlotSection: React.FC<{ label: string; times?: string[]; selected?: string; last?: boolean }> = ({
  label,
  times,
  selected,
  last,
}) => (
  <div style={{ padding: "10px 12px 12px", borderBottom: last ? "none" : `1px solid ${C.line}` }}>
    <p style={{ margin: 0, fontSize: 14, fontWeight: 500, lineHeight: "16px", letterSpacing: -0.28, color: C.label }}>{label}</p>
    {times ? (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 6px", marginTop: 10 }}>
        {times.map((t) => (
          <Slot key={t} time={t} selected={t === selected} />
        ))}
      </div>
    ) : (
      <p style={{ margin: "10px 0 0", fontSize: 14, fontWeight: 500, lineHeight: "20px", letterSpacing: -0.32, color: C.muted }}>
        Keine Termine verfügbar
      </p>
    )}
  </div>
);

export const SceneTime: React.FC = () => {
  const frame = useCurrentFrame();
  const picked = frame >= 28 ? "09:40" : undefined;
  return (
    <AbsoluteFill>
      <Page>
        <Stepper active={3} />
        <H2 style={{ marginBottom: 16 }}>Termin auswählen</H2>
        <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
          <NavBtn dir="left" />
          <Day d="DI." date="06.10." info="8 Termine" state="selected" />
          <Day d="MI." date="07.10." info="6 Termine" state="free" />
          <Day d="DO." date="08.10." info="Ausgebucht" state="full" />
          <NavBtn dir="right" />
        </div>
        <div style={{ border: `1px solid ${C.line}`, borderRadius: 14, overflow: "hidden" }}>
          <div style={{ background: C.a06, padding: "10px 12px", height: 45, boxSizing: "border-box", borderBottom: `1px solid ${C.line}` }}>
            <span style={{ fontSize: 14, fontWeight: 600, lineHeight: "24px", letterSpacing: -0.32, color: C.a80 }}>
              Dienstag 06.10.
            </span>
          </div>
          <SlotSection label="Vormittag" times={["08:20", "09:40", "11:00"]} selected={picked} />
          <SlotSection label="Nachmittag" times={["12:00", "12:20", "12:40", "13:00", "13:20", "13:40"]} />
          <SlotSection label="Abend" last />
        </div>
      </Page>
      <Footer enabled={Boolean(picked)} pressAt={58} />
      <Tap x={148} y={312} at={28} />
      <Tap x={BTN_X_WITH_BACK} y={FOOTER_BTN_Y} at={58} />
    </AbsoluteFill>
  );
};

/* ---------------- 4: Persönliche Daten ---------------- */

const Label: React.FC<{ children: React.ReactNode; right?: string }> = ({ children, right }) => (
  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
    <span style={{ fontSize: 16, fontWeight: 500, lineHeight: "16px", letterSpacing: -0.32, color: C.label }}>{children}</span>
    {right ? <span style={{ fontSize: 14, fontWeight: 500, lineHeight: "16px", color: C.muted }}>{right}</span> : null}
  </div>
);

const inputBox = (focused: boolean): React.CSSProperties => ({
  height: 44,
  boxSizing: "border-box",
  borderRadius: 10,
  border: `1px solid ${focused ? C.primary : C.line}`,
  background: C.white,
  padding: "0 12px",
  display: "flex",
  alignItems: "center",
  fontSize: 16,
  fontWeight: 500,
  letterSpacing: -0.32,
  color: C.black,
});

const Caret: React.FC<{ show: boolean }> = ({ show }) => {
  const frame = useCurrentFrame();
  const on = show && Math.floor(frame / 8) % 2 === 0;
  return <span style={{ width: 1.5, height: 18, marginLeft: 1, background: on ? C.primary : "transparent" }} />;
};

const Input: React.FC<{ value: string; focused: boolean }> = ({ value, focused }) => (
  <div style={inputBox(focused)}>
    {value}
    <Caret show={focused} />
  </div>
);

export const SceneData: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = (a: number, b: number) => frame >= a && frame < b;

  const first = typed("Maria", frame, 10, 20);
  const last = typed("Muster", frame, 26, 38);
  const mail = typed("maria.muster@email.at", frame, 44, 72);
  const phone = typed("660 1234567", frame, 80, 98);
  const birth = typed("12.05.1988", frame, 106, 124);
  // Geschlecht: Liste öffnet bei 130, "Weiblich" wird bei 148 gewählt
  const menu = spring({ frame: frame - 130, fps, config: { damping: 200 }, durationInFrames: 8 });
  const menuOpen = frame >= 130 && frame < 152;
  const gender = frame >= 150 ? "Weiblich" : "";
  const optionPress = usePress(148);
  const scroll = interpolate(frame, [158, 172], [0, 90], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  const checked = frame >= 178;
  const check = spring({ frame: frame - 178, fps, config: { damping: 14, stiffness: 220 } });

  return (
    <AbsoluteFill>
      <Page scroll={scroll}>
        <Stepper active={4} />
        <H2 style={{ marginBottom: 20 }}>Persönliche Daten</H2>

        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1 }}>
            <Label>Vorname</Label>
            <Input value={first} focused={f(6, 23)} />
          </div>
          <div style={{ flex: 1 }}>
            <Label>Nachname</Label>
            <Input value={last} focused={f(23, 41)} />
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <Label>E-Mail</Label>
          <Input value={mail} focused={f(41, 76)} />
        </div>

        <div style={{ marginBottom: 24 }}>
          <Label>Mobiltelefon</Label>
          <div style={{ ...inputBox(f(76, 102)), padding: 0 }}>
            <div
              style={{
                width: 64,
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "0 10px",
                boxSizing: "border-box",
                borderRight: `1px solid ${C.line}`,
              }}
            >
              <div style={{ width: 20, height: 13, display: "flex", flexDirection: "column", borderRadius: 1, overflow: "hidden" }}>
                <div style={{ flex: 1, background: "#c8102e" }} />
                <div style={{ flex: 1, background: "#fff" }} />
                <div style={{ flex: 1, background: "#c8102e" }} />
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.dark} strokeWidth="2.5" strokeLinecap="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div style={{ paddingLeft: 12, display: "flex", alignItems: "center" }}>
              <span style={{ color: phone ? C.black : C.muted }}>+43</span>
              {phone ? <span>&nbsp;{phone}</span> : null}
              <Caret show={f(76, 102)} />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1 }}>
            <Label>Geburtsdatum</Label>
            <div style={{ ...inputBox(f(102, 127)), height: 42, justifyContent: "space-between", color: birth ? C.black : C.muted }}>
              <span style={{ display: "flex", alignItems: "center" }}>
                {birth || "TT.MM.JJJJ"}
                <Caret show={f(102, 127)} />
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.muted} strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
          </div>
          <div style={{ flex: 1, position: "relative" }}>
            <Label>Geschlecht</Label>
            <div style={{ ...inputBox(menuOpen), justifyContent: "space-between", color: gender ? C.black : C.muted }}>
              {gender || "Auswählen"}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={C.dark}
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ transform: `rotate(${menuOpen ? 180 : 0}deg)` }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {menuOpen ? (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 70,
                  zIndex: 30,
                  opacity: menu,
                  transform: `translateY(${(1 - menu) * -6}px)`,
                  background: C.white,
                  border: `1px solid ${C.line}`,
                  borderRadius: 10,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  padding: 4,
                }}
              >
                {["Weiblich", "Männlich", "Divers"].map((o, i) => (
                  <div
                    key={o}
                    style={{
                      height: 40,
                      borderRadius: 8,
                      padding: "0 10px",
                      display: "flex",
                      alignItems: "center",
                      fontSize: 16,
                      fontWeight: 500,
                      letterSpacing: -0.32,
                      color: C.black,
                      background: i === 0 && frame >= 142 ? `rgba(0,0,0,${0.05 + optionPress * 0.05})` : "transparent",
                    }}
                  >
                    {o}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div style={{ marginBottom: 8 }}>
          <Label right="Optional">Nachricht</Label>
          <div style={{ ...inputBox(false), height: 60, alignItems: "flex-start", padding: 12, color: C.muted, lineHeight: "16px" }}>
            Hier können Sie optional eine Nachricht hinterlassen...
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, paddingTop: 6 }}>
          <div
            style={{
              width: 22,
              height: 22,
              flexShrink: 0,
              boxSizing: "border-box",
              borderRadius: 6,
              border: `1px solid ${checked ? C.primary : C.line}`,
              background: checked ? C.primary : C.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {checked ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `scale(${check})` }}>
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
            ) : null}
          </div>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 500, lineHeight: "16px", letterSpacing: -0.32, color: C.dark }}>
            Ich akzeptiere die <span style={{ color: C.primary, textDecoration: "underline" }}>Nutzungsbedingungen</span> und die{" "}
            <span style={{ color: C.primary, textDecoration: "underline" }}>Datenschutzerklärung</span> der Medizinwelt.
          </p>
        </div>
      </Page>
      <Footer label="Termin buchen" book enabled={checked} pressAt={196} loading={frame >= 197} />
      <Tap x={100} y={447} at={102} />
      <Tap x={275} y={448} at={130} />
      <Tap x={260} y={499} at={148} />
      <Tap x={31} y={601 - 90} at={178} />
      <Tap x={BTN_X_WITH_BACK} y={FOOTER_BTN_Y} at={196} />
    </AbsoluteFill>
  );
};

/* ---------------- 5: Bestätigung (nach Original-Screenshot) ---------------- */

const fadeUp = (frame: number, at: number) => {
  const o = interpolate(frame, [at, at + 10], [0, 1], clamp);
  return { opacity: o, transform: `translateY(${(1 - o) * 8}px)` };
};

const IconCircle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      width: 52,
      height: 52,
      flexShrink: 0,
      borderRadius: 26,
      background: "#ececec",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const CalendarIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="1.5" y="2.5" width="17" height="15" rx="3" stroke="#111" strokeWidth="1.6" />
    <path d="M1.5 6.5h17" stroke="#111" strokeWidth="1.6" />
    {[0, 1, 2, 3, 4].flatMap((c) =>
      [0, 1, 2].map((r) =>
        r === 2 && c === 4 ? null : <circle key={`${c}-${r}`} cx={5 + c * 2.5} cy={9.5 + r * 2.4} r="0.85" fill="#111" />,
      ),
    )}
  </svg>
);

const BuildingIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#111" strokeWidth="1.6" strokeLinejoin="round">
    <rect x="2" y="2" width="9" height="16" rx="1" />
    <rect x="11" y="8" width="7" height="10" rx="1" />
    <g fill="#111" stroke="none">
      <rect x="4.2" y="4.5" width="1.6" height="1.6" />
      <rect x="7.2" y="4.5" width="1.6" height="1.6" />
      <rect x="4.2" y="7.8" width="1.6" height="1.6" />
      <rect x="7.2" y="7.8" width="1.6" height="1.6" />
      <rect x="4.2" y="11.1" width="1.6" height="1.6" />
      <rect x="7.2" y="11.1" width="1.6" height="1.6" />
      <rect x="13.7" y="10.5" width="1.6" height="1.6" />
      <rect x="13.7" y="13.5" width="1.6" height="1.6" />
      <rect x="5.4" y="14.5" width="2.2" height="3.5" />
    </g>
  </svg>
);

const SummaryRow: React.FC<{ icon: React.ReactNode; title: React.ReactNode; lines: string[]; style?: React.CSSProperties }> = ({
  icon,
  title,
  lines,
  style,
}) => (
  <div style={{ display: "flex", gap: 20, ...style }}>
    <IconCircle>{icon}</IconCircle>
    <div style={{ flex: 1, paddingTop: 6, paddingBottom: 12, borderBottom: "1px solid #eeeeee" }}>
      <div style={{ fontSize: 15, fontWeight: 600, lineHeight: "20px", letterSpacing: -0.24, color: C.black }}>{title}</div>
      {lines.map((l) => (
        <div key={l} style={{ fontSize: 13, fontWeight: 500, lineHeight: "16px", letterSpacing: -0.2, color: "#666666", marginTop: 2 }}>
          {l}
        </div>
      ))}
    </div>
  </div>
);

export const SceneSuccess: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - 4, fps, config: { damping: 12, stiffness: 170 } });
  const draw = interpolate(frame, [10, 24], [0, 1], clamp);

  return (
    <AbsoluteFill>
      <Page>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 28 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              background: "#deebe4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${pop})`,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="m5 12.5 4.5 4.5L19 7.5"
                stroke="#111"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={1 - draw}
              />
            </svg>
          </div>
          <h2
            style={{
              margin: "22px 0 0",
              fontSize: 20,
              fontWeight: 700,
              lineHeight: "28px",
              letterSpacing: -0.5,
              color: C.black,
              textAlign: "center",
              ...fadeUp(frame, 12),
            }}
          >
            Ihr Arzttermin wurde bestätigt
          </h2>
        </div>

        <div
          style={{
            marginTop: 36,
            border: "1px solid #e3e3e3",
            borderRadius: 26,
            padding: "28px 28px 28px",
            ...fadeUp(frame, 18),
          }}
        >
          <SummaryRow
            icon={<CalendarIcon />}
            title={
              <>
                06.10.2026 <span style={{ color: "#bbbbbb", margin: "0 4px", fontSize: 6, verticalAlign: 3 }}>●</span> 09:40
              </>
            }
            lines={["Erstordination"]}
            style={{ ...fadeUp(frame, 24), marginBottom: 20 }}
          />
          <SummaryRow
            icon={<BuildingIcon />}
            title="Ordination Musterstadt"
            lines={["Musterstraße 1", "1010 Wien"]}
            style={fadeUp(frame, 30)}
          />
        </div>

        <p
          style={{
            margin: "40px 8px 0",
            textAlign: "center",
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "18px",
            letterSpacing: -0.32,
            color: "#999999",
            ...fadeUp(frame, 38),
          }}
        >
          Sie haben eine Terminbestätigung per E-Mail an <span style={{ color: C.primary }}>maria.muster@email.at</span> erhalten.
          Bitte eventuell auch den Spam-Ordner prüfen.
        </p>
        <p
          style={{
            margin: "40px 8px 0",
            textAlign: "center",
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "18px",
            letterSpacing: -0.32,
            color: "#999999",
            ...fadeUp(frame, 44),
          }}
        >
          Ihr Termin wurde erfolgreich gebucht. Sie können diese Seite nun schließen.
        </p>
      </Page>
    </AbsoluteFill>
  );
};
