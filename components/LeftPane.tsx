"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.2, 0.8, 0.2, 1];

const BIO_PARTS = [
  "Senior software engineer with over 5 years of experience building reliable systems across Europe and the US. I work with React, Next.js, Node.js, TypeScript, AWS, Docker, and 3D web tools.",
  "I care about clarity, stable systems, and clean, thoughtful design.",
];

const ROTATE_INTERVAL_MS = 5500;

export default function LeftPane() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const fadeUp = reducedMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: EASE },
      };

  const stagger = reducedMotion ? 0 : 0.08;

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % BIO_PARTS.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <aside
      className="split-left flex min-w-0 w-full flex-col overflow-x-hidden overflow-y-auto px-4 py-8 sm:px-6 sm:py-12 lg:fixed lg:inset-y-0 lg:left-0 lg:z-10 lg:w-1/2 lg:px-12"
      aria-label="Introduction"
    >
      <div className="sticky top-0 z-10 flex shrink-0 flex-col items-center gap-6 bg-bg pb-6 pt-0 sm:gap-8 sm:pb-8">
        <motion.div
          className="relative shrink-0 w-full max-w-[min(100%,22rem)] sm:max-w-none sm:w-auto"
          {...fadeUp}
          transition={{ duration: 0.7, ease: EASE, delay: stagger * 0 }}
        >
          <div className="relative aspect-square w-full max-w-[min(100%,22rem)] overflow-hidden rounded-2xl border border-[#3C3F46] bg-surface shadow-lg sm:max-w-none sm:aspect-auto sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[28rem] xl:w-[28rem]">
            <Image
              src="/portrait.jpg"
              alt="Juan Carlos Rios Gamez — portrait"
              width={448}
              height={448}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 288px, (max-width: 1024px) 320px, 448px"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              className="hidden h-full w-full items-center justify-center bg-surface text-muted text-sm"
              style={{ display: "none" }}
              aria-hidden
            >
              Portrait
            </div>
          </div>
        </motion.div>

        <div className="flex w-full max-w-md flex-col items-center gap-3 text-center sm:gap-4">
          <motion.h1
            className="text-xl font-bold tracking-tight text-text sm:text-2xl md:text-3xl"
            {...fadeUp}
            transition={{ duration: 0.7, ease: EASE, delay: stagger * 1 }}
          >
            Juan Carlos Rios Gamez
          </motion.h1>
          <motion.p
            className="text-gold text-lg font-medium"
            {...fadeUp}
            transition={{ duration: 0.7, ease: EASE, delay: stagger * 2 }}
          >
            5+ Years Of Experience In Software Engineering
          </motion.p>
        </div>
      </div>

      <motion.div
          className="text-muted relative min-h-[14rem] min-w-0 overflow-hidden rounded-xl border border-border text-left text-base leading-relaxed p-4 sm:p-5 sm:text-xl md:text-2xl lg:text-3xl"
          {...fadeUp}
          transition={{ duration: 0.7, ease: EASE, delay: stagger * 3 }}
        >
          {reducedMotion ? (
            <div className="flex flex-col gap-4">
              {BIO_PARTS.map((part, i) => (
                <p key={i}>{part}</p>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="absolute inset-0 flex items-center py-4 pr-4 pl-4 sm:py-5 sm:pr-5 sm:pl-5"
              >
                {BIO_PARTS[index]}
              </motion.p>
            </AnimatePresence>
          )}
        </motion.div>
    </aside>
  );
}
