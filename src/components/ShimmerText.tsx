"use client";

import { GradientShimmer } from "gradient-shimmer";

// Mirrors legaleo-ai's components/design-system/ShimmerText — same
// gradient-shimmer lib, but a plain white sweep band (custom stops) instead
// of a preset.
export default function ShimmerText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <GradientShimmer
      gradient={[
        { position: 0, color: "#FFFFFF" },
        { position: 1, color: "#FFFFFF" },
      ]}
      baseColor="#9edbe0"
      className={className}
    >
      {text}
    </GradientShimmer>
  );
}
