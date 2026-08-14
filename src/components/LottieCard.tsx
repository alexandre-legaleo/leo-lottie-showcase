"use client";

import { useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import type { AnimationEntry } from "@/lib/animations";
import { useLottieJson } from "@/lib/useLottieJson";

type LottieCardProps = AnimationEntry & {
  selected: boolean;
  onSelect: () => void;
};

export default function LottieCard({
  title,
  file,
  speed = 1,
  selected,
  onSelect,
}: LottieCardProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [playing, setPlaying] = useState(true);
  const [loop, setLoop] = useState(true);
  const animationData = useLottieJson(file);

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
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`flex cursor-pointer items-center gap-4 overflow-hidden rounded-xl border bg-white p-4 text-left shadow-sm dark:bg-white/5 ${
        selected
          ? "border-[#00383C] ring-1 ring-[#00383C] dark:border-[#5fa8ad] dark:ring-[#5fa8ad]"
          : "border-black/10 dark:border-white/10"
      }`}
    >
      <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-[#00383C]">
        {animationData ? (
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={loop}
            autoplay
            onDOMLoaded={() => lottieRef.current?.setSpeed(speed)}
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
            onClick={(e) => {
              e.stopPropagation();
              togglePlaying();
            }}
            className="rounded-md px-2 py-1 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10"
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleLoop();
            }}
            className={`rounded-md px-2 py-1 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10 ${
              loop ? "text-blue-600 dark:text-blue-400" : ""
            }`}
          >
            Loop
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              restart();
            }}
            className="rounded-md px-2 py-1 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
