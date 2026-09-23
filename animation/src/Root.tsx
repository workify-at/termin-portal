import React from "react";
import { Composition } from "remotion";
import { BookingFlow } from "./BookingFlow";
import { FPS, OUT_H, OUT_W, TOTAL } from "./theme";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="BookingFlow"
    component={BookingFlow}
    durationInFrames={TOTAL}
    fps={FPS}
    width={OUT_W}
    height={OUT_H}
  />
);
