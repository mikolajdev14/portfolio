import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const HOVER_SELECTOR =
  'a[href], button, input, textarea, select, label, [role="button"], .VMWbutton, .project-link, .project-image-button, .skills-chip, .language-btn, .MenuToggle';

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isFinePointer() {
  return window.matchMedia("(pointer: fine)").matches;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) {
      return;
    }
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const ringEl = ringRef.current;
    const dotEl = dotRef.current;

    const applyDot = (x, y) => {
      if (!dotEl) return;
      dotEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const applyRing = (x, y) => {
      if (!ringEl) return;
      ringEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const loop = () => {
      const { x: tx, y: ty } = target.current;
      const { x: rx, y: ry } = ringPos.current;
      const nextX = rx + (tx - rx) * 0.14;
      const nextY = ry + (ty - ry) * 0.14;
      ringPos.current = { x: nextX, y: nextY };
      applyRing(nextX, nextY);
      applyDot(tx, ty);
      rafRef.current = requestAnimationFrame(loop);
    };

    const onPointerMove = (e) => {
      if (!e.isPrimary) return;
      target.current = { x: e.clientX, y: e.clientY };
      root.classList.add("custom-cursor-ready");
    };

    const onPointerOver = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      root.classList.toggle("cursor-hover", !!t.closest(HOVER_SELECTOR));
    };

    const onPointerDown = (e) => {
      if (e.isPrimary) root.classList.add("cursor-press");
    };

    const onPointerUp = () => {
      root.classList.remove("cursor-press");
    };

    const onLeaveWindow = () => {
      root.classList.remove("custom-cursor-ready");
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, true);
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("pointerup", onPointerUp, true);
    document.addEventListener("pointercancel", onPointerUp, true);
    document.addEventListener("mouseleave", onLeaveWindow);

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver, true);
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("pointerup", onPointerUp, true);
      document.removeEventListener("pointercancel", onPointerUp, true);
      document.removeEventListener("mouseleave", onLeaveWindow);
      root.classList.remove(
        "custom-cursor-active",
        "custom-cursor-ready",
        "cursor-hover",
        "cursor-press",
      );
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className="custom-cursor" aria-hidden>
      <div ref={ringRef} className="custom-cursor__ring" />
      <div ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
}
