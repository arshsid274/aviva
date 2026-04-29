"use client";

import { useRef, useEffect } from "react";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import HeroTextOverlay from "./HeroTextOverlay";

export default function AircraftScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fast first paint: draw frame 1 immediately so the canvas isn't black
  // while the rest of the sequence loads.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
    img.src = "/sequence-1/001.webp";
  }, []);

  const { images, loaded } = useImagePreloader("/sequence-1", 120);

  useEffect(() => {
    if (!loaded || images.length === 0) return;

    let animationId: number;

    const drawImage = (img: HTMLImageElement) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx || !canvas) return;
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });

    const render = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) {
        animationId = requestAnimationFrame(render);
        return;
      }

      const rect = container.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      const scrollProgress =
        scrollableHeight > 0
          ? Math.max(0, Math.min(1, -rect.top / scrollableHeight))
          : 0;

      const frame = Math.floor(scrollProgress * (images.length - 1));
      const img = images[frame];
      if (img) drawImage(img);

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [loaded, images]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          aria-label="Architectural design transformation animation"
          className="absolute inset-0 w-full h-full"
        />
        <HeroTextOverlay containerRef={containerRef} />
      </div>
    </div>
  );
}
