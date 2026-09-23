"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <div className="phone-wrap" aria-hidden="true">
      <div className="phone">
        <div className="screen">
          <div className="island" />
          <video
            ref={videoRef}
            className="screen-video"
            src="/assets/booking.mp4"
            poster="/assets/booking-poster.jpg"
            autoPlay
            muted
            playsInline
            preload="auto"
          />
          <div className="home-bar" />
        </div>
      </div>
    </div>
  );
}
