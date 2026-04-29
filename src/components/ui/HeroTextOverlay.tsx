"use client";

import { useEffect, useRef } from "react";
import { playfairDisplay } from "@/lib/fonts";
import styles from "./HeroTextOverlay.module.css";

interface Props {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const EXIT_BY = 0.12;
const HIDE_BY = 0.22;

export default function HeroTextOverlay({ containerRef }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      const left = leftRef.current;
      const right = rightRef.current;

      if (!container || !wrapper || !left || !right) {
        rafId = requestAnimationFrame(update);
        return;
      }

      const rect = container.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      const scrollProgress =
        scrollableHeight > 0
          ? Math.max(0, Math.min(1, -rect.top / scrollableHeight))
          : 0;

      if (scrollProgress >= HIDE_BY) {
        wrapper.style.display = "none";
        rafId = requestAnimationFrame(update);
        return;
      }

      wrapper.style.display = "";

      const p = Math.min(1, scrollProgress / EXIT_BY);

      left.style.transform = `translateX(${-p * 110}px)`;
      right.style.transform = `translateX(${p * 110}px)`;
      wrapper.style.opacity = String(1 - p);

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [containerRef]);

  return (
    <div ref={wrapperRef} className={styles.overlay} aria-hidden="true">
      <div ref={leftRef} className={styles.leftContent}>
        <span className={styles.tagline}>Rawan Emgawer Architects</span>
        <h1 className={`${playfairDisplay.className} ${styles.headline}`}>
          <span className={styles.headlineItalic}>Where Design</span>
          <span className={styles.headlineMain}>Becomes Legacy</span>
        </h1>
        <div className={styles.divider} />
        <p className={styles.body}>
          A multidisciplinary design consultancy creating architecture,
          interiors, and large-scale environments with clarity, purpose,
          and longevity.
        </p>
      </div>

      <div ref={rightRef} className={styles.rightContent}>
        <span className={styles.ctaLabel}>Begin a project</span>
        <a
          href="#contact"
          className={styles.ctaButton}
          aria-hidden="false"
          tabIndex={0}
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
