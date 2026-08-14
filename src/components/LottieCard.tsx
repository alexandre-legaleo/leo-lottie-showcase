"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import type { AnimationEntry } from "@/lib/animations";
import { basePath } from "@/lib/basePath";

export default function LottieCard({ title, file }: AnimationEntry) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [playing, setPlaying] = useState(true);
  const [loop, setLoop] = useState(true);
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${basePath}${file}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      });
    return () => {
      cancelled = true;
    };
  }, [file]);

  function togglePlaying() {
    if (playing) {
      lottieRef.current?.pause();
    } else {
      lottieRef.current?.play();
    }
    setPlaying(!playing);
  }

  function toggleLoop() {
    setLoop(!loop);
  }

  function restart() {
    lottieRef.current?.goToAndPlay(0);
    setPlaying(true);
  }

  return (
    <div className="flex items-center gap-4 overflow-hidden rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-[#00383C]">
        {animationData ? (
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={loop}
            autoplay
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full animate-pulse rounded-lg bg-white/10" />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <span className="truncate text-sm font-medium">{title}</span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={togglePlaying}
            className="rounded-md px-2 py-1 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10"
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={toggleLoop}
            className={`rounded-md px-2 py-1 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10 ${
              loop ? "text-blue-600 dark:text-blue-400" : ""
            }`}
          >
            Loop
          </button>
          <button
            type="button"
            onClick={restart}
            className="rounded-md px-2 py-1 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
