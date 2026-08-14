"use client";

import { useState } from "react";
import type { AnimationEntry } from "@/lib/animations";
import LottieCard from "./LottieCard";
import PreviewPanel from "./PreviewPanel";

export default function Gallery({
  animations,
}: {
  animations: AnimationEntry[];
}) {
  const [selectedId, setSelectedId] = useState(animations[0]?.id);
  const selected =
    animations.find((animation) => animation.id === selectedId) ??
    animations[0];

  return (
    <>
      {selected && <PreviewPanel animation={selected} />}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {animations.map((animation) => (
          <LottieCard
            key={animation.id}
            {...animation}
            selected={animation.id === selectedId}
            onSelect={() => setSelectedId(animation.id)}
          />
        ))}
      </div>
    </>
  );
}
