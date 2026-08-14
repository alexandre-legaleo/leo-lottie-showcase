"use client";

import { useEffect, useState } from "react";
import { basePath } from "@/lib/basePath";

export function useLottieJson(file: string): unknown {
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${basePath}${file}`)
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setData(json);
      });
    return () => {
      cancelled = true;
    };
  }, [file]);

  return data;
}
