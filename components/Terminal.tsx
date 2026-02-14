"use client";

import { useState, useEffect } from "react";

const LINES = [
  "Welcome. Building reliable systems, one commit at a time.",
  "$ cat skills.txt → TypeScript · React · Node · AWS",
  "Location: Europe · Timezone: flexible",
  "🇺🇦 Stand with Ukraine.",
];

const VERSION = "1.0.0";

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReduced);
    if (prefersReduced) {
      setVisibleLines(LINES);
      setIsComplete(true);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion !== false || isComplete) return;

    const line = LINES[currentLineIndex];
    if (!line) {
      if (currentLineIndex >= LINES.length) setIsComplete(true);
      return;
    }

    if (charIndex < line.length) {
      const t = setTimeout(() => {
        setVisibleLines((prev) => {
          const next = [...prev];
          if (!next[currentLineIndex]) next[currentLineIndex] = "";
          next[currentLineIndex] = line.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, 35);
      return () => clearTimeout(t);
    }

    if (charIndex === line.length) {
      setCurrentLineIndex((i) => i + 1);
      setCharIndex(0);
      setVisibleLines((prev) => [...prev.slice(0, currentLineIndex + 1), line]);
      if (currentLineIndex + 1 >= LINES.length) setIsComplete(true);
    }
  }, [currentLineIndex, charIndex, isComplete, reducedMotion]);

  const displayLines = reducedMotion === true ? LINES : visibleLines;
  const showCursor =
    reducedMotion === false &&
    visibleLines.length > 0 &&
    !isComplete &&
    currentLineIndex === visibleLines.length - 1;

  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-surface font-mono text-sm"
      role="region"
      aria-label="Terminal"
    >
      <div className="flex items-center justify-between border-b border-border bg-bg/50 px-4 py-3">
        <span className="text-muted">
          juan@portfolio:~{" "}
          <span role="img" aria-label="Ukrainian flag">
            🇺🇦
          </span>{" "}
          <span className="text-text">v{VERSION}</span>
        </span>
      </div>

      <div className="min-h-[140px] p-4 text-text">
        {displayLines.map((line, i) => (
          <div key={i} className="leading-7">
            {line}
            {showCursor && i === visibleLines.length - 1 && (
              <span className="animate-pulse" aria-hidden>
                |
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
