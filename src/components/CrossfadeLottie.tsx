"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useLottieJson } from "@/lib/useLottieJson";

const FADE_MS = 250;

type Layer = { key: string; file: string; speed: number; loop: boolean };

export default function CrossfadeLottie({
  file,
  speed,
  loop = true,
  className = "",
}: {
  file: string;
  speed: number;
  loop?: boolean;
  className?: string;
}) {
  const [current, setCurrent] = useState<Layer>({
    key: file,
    file,
    speed,
    loop,
  });
  const [previous, setPrevious] = useState<Layer | null>(null);

  // Adjust state during render when `file` changes (React's documented
  // pattern for this) rather than in an effect — avoids an extra render and
  // keeps the setState call synchronous with the prop change that caused it.
  if (file !== current.file) {
    setPrevious(current);
    setCurrent({ key: file, file, speed, loop });
  }

  useEffect(() => {
    if (!previous) return;
    const id = setTimeout(() => setPrevious(null), FADE_MS);
    return () => clearTimeout(id);
  }, [previous]);

  return (
    <div className={`relative ${className}`}>
      {previous && <CrossfadeLayer layer={previous} fadingOut />}
      <CrossfadeLayer key={current.key} layer={current} />
    </div>
  );
}

function CrossfadeLayer({
  layer,
  fadingOut = false,
}: {
  layer: Layer;
  fadingOut?: boolean;
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const animationData = useLottieJson(layer.file);

  return (
    <div
      className={`absolute inset-0 ${
        fadingOut
          ? "animate-[crossfade-out_250ms_ease-in-out_forwards]"
          : "animate-[crossfade-in_250ms_ease-in-out_forwards]"
      }`}
    >
      {animationData ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={layer.loop}
          autoplay
          onDOMLoaded={() => lottieRef.current?.setSpeed(layer.speed)}
          className="h-full w-full"
        />
      ) : null}
    </div>
  );
}
