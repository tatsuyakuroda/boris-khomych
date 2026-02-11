"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const reducedMotionConfig = {
  initial: false,
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0 },
};

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const textMotion = reducedMotion
    ? reducedMotionConfig
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
      };

  const portraitMotion = reducedMotion
    ? reducedMotionConfig
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 },
      };

  return (
    <section
      id="hero"
      className="relative border-b border-border/50 py-16 sm:py-24 md:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="container-custom flex min-h-[60vh] flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
        <div className="flex max-w-xl flex-1 flex-col gap-6 text-center md:text-left">
          <motion.h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl"
            {...textMotion}
          >
            Andrii Palamarchuk
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-gold"
            {...textMotion}
            transition={{ ...(textMotion as { transition?: object }).transition, delay: 0.08 }}
          >
            Senior Software Engineer
          </motion.p>
          <motion.p
            className="text-muted text-base leading-relaxed"
            {...textMotion}
            transition={{ ...(textMotion as { transition?: object }).transition, delay: 0.12 }}
          >
            Ukrainian developer building reliable, scalable systems across Europe.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:justify-start"
            {...textMotion}
            transition={{ ...(textMotion as { transition?: object }).transition, delay: 0.18 }}
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue px-5 py-2.5 text-sm font-medium text-white no-underline transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View Projects
            </Link>
            
          </motion.div>
        </div>

        <motion.div
          className="relative shrink-0"
          {...portraitMotion}
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-border bg-surface sm:h-72 sm:w-72">
            <Image
              src="/Andrii.jpg"
              alt="Andrii Palamarchuk — portrait"
              width={288}
              height={288}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 224px, 288px"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              className="hidden h-full w-full items-center justify-center bg-surface text-muted text-[1.3125rem]"
              style={{ display: "none" }}
              aria-hidden
            >
              Portrait
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
