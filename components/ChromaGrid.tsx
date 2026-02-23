"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { getTechIconUrl } from "@/lib/tech-icons";
import "./ChromaGrid.css";

export interface ChromaGridItem {
  image: string;
  title: string;
  subtitle: string;
  stack: readonly string[];
  borderColor: string;
  gradient: string;
  /** Optional: pass through for click handler (e.g. full project) */
  data?: unknown;
}

interface ChromaGridProps {
  items: ChromaGridItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
  onCardClick?: (item: ChromaGridItem) => void;
  disabled?: boolean;
}

export function ChromaGrid({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  onCardClick,
  disabled = false,
}: ChromaGridProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<((value: number) => void) | null>(null);
  const setY = useRef<((value: number) => void) | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as (value: number) => void;
    setY.current = gsap.quickSetter(el, "--y", "px") as (value: number) => void;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    el.style.setProperty("--x", `${pos.current.x}px`);
    el.style.setProperty("--y", `${pos.current.y}px`);
  }, []);

  const moveTo = (x: number, y: number) => {
    if (disabled) return;
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const el = rootRef.current;
    if (!el || disabled) return;
    const r = el.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, {
        opacity: 1,
        duration: fadeOut,
        overwrite: true,
      });
    }
  };

  const handleCardClick = (item: ChromaGridItem) => {
    if (onCardClick) onCardClick(item);
  };

  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${disabled ? "chroma-grid--disabled" : ""} ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--cols": columns,
          "--rows": rows,
        } as React.CSSProperties
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map((c, i) => (
        <article
          key={c.title + i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c)}
          style={
            {
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              cursor: onCardClick ? "pointer" : "default",
            } as React.CSSProperties
          }
        >
          <div className="chroma-img-wrapper">
            <div className="chroma-img-inner">
              <Image
                src={c.image}
                alt={c.title}
                fill
                className="chroma-img object-cover"
                sizes="(max-width: 480px) 320px, (max-width: 1124px) 320px, 320px"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div
                className="chroma-img-fallback"
                style={{ display: "none" }}
                aria-hidden
              >
                Preview
              </div>
            </div>
          </div>
          <footer className="chroma-info">
            <h3 className="chroma-name">{c.title}</h3>
            <p className="chroma-role">{c.subtitle}</p>
            {c.stack?.length > 0 && (
              <div className="chroma-stack">
                {c.stack.map((tech) => {
                  const iconUrl = getTechIconUrl(tech);
                  return (
                    <span key={tech} className="chroma-stack-tag">
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt=""
                          width={14}
                          height={14}
                          className="chroma-stack-icon"
                          aria-hidden
                        />
                      ) : null}
                      {tech}
                    </span>
                  );
                })}
              </div>
            )}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
}

export default ChromaGrid;
