"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationEntry } from "@/lib/animations";
import CrossfadeLottie from "./CrossfadeLottie";
import ShimmerText from "./ShimmerText";

export default function PreviewPanel({
  animation,
}: {
  animation: AnimationEntry;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();

  // Same technique as legaleo-ai's ExtractionProgressWidget .sizer/.content:
  // .content is never width-constrained, so its measured size is always the
  // "natural" width of whatever's currently inside it; the wrapper below
  // just animates toward that value via a plain CSS width transition.
  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setWidth(entry.contentRect.width);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto mb-10 flex h-[34px] w-fit items-center overflow-hidden rounded-[7px] bg-[#00383C] px-[11px]">
      <div
        className="flex overflow-hidden transition-[width] duration-300 ease-in-out"
        style={{ width }}
      >
        <div
          ref={contentRef}
          className="inline-flex items-center gap-[8px] whitespace-nowrap"
        >
          <div
            className="flex h-[20px] w-[20px] shrink-0 items-center justify-center"
            style={
              animation.previewOffsetY
                ? { transform: `translateY(${animation.previewOffsetY}px)` }
                : undefined
            }
          >
            <CrossfadeLottie
              file={animation.file}
              speed={animation.speed ?? 1}
              loop={animation.previewLoop ?? true}
              className="h-full w-full"
            />
          </div>
          {animation.previewText &&
            (animation.previewShimmer === false ? (
              <span className="text-[14px] font-medium text-[#d0f5f8]">
                {animation.previewText}
              </span>
            ) : (
              <ShimmerText
                text={animation.previewText}
                className="text-[14px] font-medium"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
