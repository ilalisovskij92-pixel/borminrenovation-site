"use client";

// Обёртка для scroll-reveal анимаций. Использует IntersectionObserver,
// чтобы добавлять класс .in когда элемент появляется во viewport.
// Базовые стили .reveal/.reveal.in живут в globals.css.

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms — задержка перед появлением
  threshold?: number; // 0..1 — доля видимости для триггера
  as?: "div" | "section" | "article" | "header" | "footer" | "span";
  once?: boolean; // запускать только один раз
};

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  as: Tag = "div",
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion — сразу показываем без анимации
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              window.setTimeout(() => setVisible(true), delay);
            } else {
              setVisible(true);
            }
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  const combined = `reveal ${visible ? "in" : ""} ${className}`.trim();

  // TS-workaround: ref на generic-элемент
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={combined}
    >
      {children}
    </Tag>
  );
}
