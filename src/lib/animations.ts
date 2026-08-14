export type AnimationEntry = {
  id: string;
  title: string;
  /** Path under /public, e.g. exported from After Effects via the Bodymovin plugin. */
  file: string;
  /** Playback speed multiplier, e.g. 2 for 2x. Defaults to 1. */
  speed?: number;
};

// Drop your After Effects → Bodymovin JSON exports into public/lottie/
// and add an entry here to show them up in the gallery.
export const animations: AnimationEntry[] = [
  { id: "annotate", title: "Annotate", file: "/lottie/annotate.json" },
  { id: "check", title: "Check", file: "/lottie/check.json" },
  { id: "error", title: "Error", file: "/lottie/error.json" },
  {
    id: "fetch-external",
    title: "Fetch External",
    file: "/lottie/fetch-external.json",
  },
  { id: "generating", title: "Generating", file: "/lottie/generating.json" },
  {
    id: "generating-rotate",
    title: "Generating Rotate",
    file: "/lottie/generating-rotate.json",
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
  },
  { id: "scan", title: "Scan", file: "/lottie/scan.json" },
  {
    id: "sign-loop",
    title: "Sign Loop",
    file: "/lottie/sign-loop.json",
    speed: 1.6,
  },
];
