"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      // console.log(e);
    });

    function ref(time: number) {
      lenis.raf(time);
      requestAnimationFrame(ref);
    }

    requestAnimationFrame(ref);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
