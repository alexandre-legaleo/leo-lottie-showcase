export type AnimationEntry = {
  id: string;
  title: string;
  /** Path under /public, e.g. exported from After Effects via the Bodymovin plugin. */
  file: string;
  /** Playback speed multiplier, e.g. 2 for 2x. Defaults to 1. */
  speed?: number;
  /** Copy shown next to the animation in the preview panel. */
  previewText?: string;
  /**
   * Manual vertical nudge (px) for the preview panel icon only. Some
   * compositions aren't vertically centered within their own square canvas
   * (e.g. a drawn stroke anchored low, blank pause frames) — box-level CSS
   * centering can't compensate for that, so this exists as a per-animation
   * escape hatch. Negative = up, positive = down. Defaults to 0.
   */
  previewOffsetY?: number;
  /** Shimmer sweep on the preview text. Defaults to true — set false for
   *  terminal states (done/error) where "loading" motion doesn't make sense. */
  previewShimmer?: boolean;
  /** Loop the animation in the preview panel. Defaults to true — set false
   *  for terminal states, which should play once and hold their last frame. */
  previewLoop?: boolean;
};

// Drop your After Effects → Bodymovin JSON exports into public/lottie/
// and add an entry here to show them up in the gallery.
export const animations: AnimationEntry[] = [
  {
    id: "annotate",
    title: "Annotate",
    file: "/lottie/annotate.json",
    previewText: "Édition en cours…",
  },
  {
    id: "check",
    title: "Check",
    file: "/lottie/check.json",
    previewText: "Extraction terminée",
    previewShimmer: false,
    previewLoop: false,
  },
  {
    id: "error",
    title: "Error",
    file: "/lottie/error.json",
    previewText: "Oops, une erreur est survenue",
    previewShimmer: false,
    previewLoop: false,
  },
  {
    id: "fetch-external",
    title: "Fetch External",
    file: "/lottie/fetch-external.json",
    previewText: "Recherche sur Légifrance…",
  },
  {
    id: "generating",
    title: "Generating",
    file: "/lottie/generating.json",
    previewText: "Génération de votre contrat en cours…",
  },
  {
    id: "generating-rotate",
    title: "Generating Rotate",
    file: "/lottie/generating-rotate.json",
    previewText: "Génération de votre contrat en cours…",
  },
  { id: "hammer", title: "Hammer", file: "/lottie/hammer.json" },
  { id: "idle", title: "Idle", file: "/lottie/idle.json" },
  {
    id: "idle-appear",
    title: "Idle Appear",
    file: "/lottie/idle-appear.json",
  },
  { id: "scale", title: "Scale", file: "/lottie/scale.json" },
  {
    id: "scan-extended",
    title: "Scan Extended",
    file: "/lottie/scan-extended.json",
    previewText: "Analyse de votre contrat…",
  },
  {
    id: "scan",
    title: "Scan",
    file: "/lottie/scan.json",
    previewText: "Analyse de votre contrat…",
  },
  {
    id: "sign-loop",
    title: "Sign Loop",
    file: "/lottie/sign-loop.json",
    speed: 1.6,
    previewText: "Signature numérique en cours…",
  },
];
