import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { SceneData, SceneLocation, SceneSuccess, SceneTime, SceneTreatment } from "./scenes";
import { clamp } from "./ui";
import { C, FONT, PAGE_H, S1, S2, S3, S4, S5, SAFARI_H, SCALE, START5, STATUS_H, T, VIEW_H, VIEW_W } from "./theme";

const StatusBar: React.FC = () => (
  <div
    style={{
      height: STATUS_H,
      padding: "0 30px 0 44px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 17,
      fontWeight: 600,
      color: C.black,
      background: C.white,
    }}
  >
    <span>9:41</span>
    <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <svg height="12" viewBox="0 0 18 12" fill={C.black}>
        <rect x="0" y="8" width="3" height="4" rx="1" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
        <rect x="10" y="3" width="3" height="9" rx="1" />
        <rect x="15" y="0" width="3" height="12" rx="1" />
      </svg>
      <svg height="12" viewBox="0 0 16 12" fill={C.black}>
        <path d="M8 2.2c2.3 0 4.4.9 5.9 2.4l1.3-1.3A10.1 10.1 0 0 0 8 .4 10.1 10.1 0 0 0 .8 3.3l1.3 1.3A8.3 8.3 0 0 1 8 2.2zm0 3.6c1.3 0 2.5.5 3.4 1.4l1.3-1.3A6.6 6.6 0 0 0 8 4a6.6 6.6 0 0 0-4.7 1.9l1.3 1.3c.9-.9 2.1-1.4 3.4-1.4zM8 9.4l-2 2 2 2 2-2-2-2z" />
      </svg>
      <svg height="13" viewBox="0 0 27 12" fill="none">
        <rect x=".5" y=".5" width="22" height="11" rx="3" stroke={C.black} opacity=".4" />
        <rect x="2" y="2" width="19" height="8" rx="1.8" fill={C.black} />
        <path d="M24.5 4v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2z" fill={C.black} opacity=".5" />
      </svg>
    </span>
  </div>
);

const SafariBar: React.FC = () => (
  <div
    style={{
      height: SAFARI_H,
      boxSizing: "border-box",
      background: "#f7f7f8",
      borderTop: `1px solid ${C.a08}`,
      padding: "10px 16px 0",
    }}
  >
    <div
      style={{
        height: 42,
        borderRadius: 21,
        background: C.white,
        boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        fontSize: 16,
        fontWeight: 500,
        color: C.black,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="2.6">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
      termin-portal.com
    </div>
  </div>
);

/** iOS-Mitteilung der Bestätigungs-E-Mail */
const Notification: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const at = START5 + 60;
  // iOS-Banner: fällt herein und verschwindet nach ~2 s wieder
  const enter = spring({ frame: frame - at, fps, config: { damping: 16, stiffness: 140 } });
  const leave = spring({ frame: frame - (at + 60), fps, config: { damping: 200 }, durationInFrames: 14 });
  const p = enter - leave;
  if (frame < at - 1 || leave >= 0.999) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: 10,
        right: 10,
        top: 58,
        transform: `translateY(${(1 - p) * -150}px) scale(${0.94 + p * 0.06})`,
        opacity: interpolate(p, [0, 0.4], [0, 1], clamp),
        borderRadius: 24,
        padding: "13px 14px",
        background: "rgba(250,250,250,0.94)",
        boxShadow: "0 12px 36px -8px rgba(0,0,0,0.28), 0 0 0 1px rgba(0,0,0,0.05)",
        display: "flex",
        gap: 12,
        alignItems: "center",
        zIndex: 80,
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 38,
          height: 38,
          borderRadius: 9,
          background: "linear-gradient(180deg,#3d8bfd,#1f6fe5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0, lineHeight: "18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
          <span style={{ fontWeight: 600, color: C.black }}>Termin Portal</span>
          <span style={{ color: "#8a8a8e", fontSize: 13 }}>jetzt</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: C.black }}>Ihre Terminbestätigung</div>
        <div style={{ fontSize: 14, color: "#3c3c43", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          Dienstag, 06.10.2026 um 09:40 Uhr
        </div>
      </div>
    </div>
  );
};

const transition = <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />;

export const BookingFlow: React.FC = () => {
  const frame = useCurrentFrame();
  // Nur einblenden – das letzte Bild bleibt auf der Website als Standbild stehen
  const opacity = interpolate(frame, [0, 8], [0, 1], clamp);

  return (
    <AbsoluteFill style={{ background: C.white }}>
      <div
        style={{
          width: VIEW_W,
          height: VIEW_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          fontFamily: FONT,
          position: "relative",
          overflow: "hidden",
          background: C.white,
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div style={{ opacity, position: "absolute", inset: 0 }}>
          <StatusBar />
          <div style={{ position: "absolute", top: STATUS_H, left: 0, right: 0, height: PAGE_H, overflow: "hidden" }}>
            <TransitionSeries>
              <TransitionSeries.Sequence durationInFrames={S1}>
                <SceneLocation />
              </TransitionSeries.Sequence>
              {transition}
              <TransitionSeries.Sequence durationInFrames={S2}>
                <SceneTreatment />
              </TransitionSeries.Sequence>
              {transition}
              <TransitionSeries.Sequence durationInFrames={S3}>
                <SceneTime />
              </TransitionSeries.Sequence>
              {transition}
              <TransitionSeries.Sequence durationInFrames={S4}>
                <SceneData />
              </TransitionSeries.Sequence>
              {transition}
              <TransitionSeries.Sequence durationInFrames={S5}>
                <SceneSuccess />
              </TransitionSeries.Sequence>
            </TransitionSeries>
          </div>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
            <SafariBar />
          </div>
          <Notification />
        </div>
      </div>
    </AbsoluteFill>
  );
};
