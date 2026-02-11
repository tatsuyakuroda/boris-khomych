"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  titleSuffix?: React.ReactNode;
  children: React.ReactNode;
}

export default function Section({ id, title, titleSuffix, children }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) {
      setHasBeenVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasBeenVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  if (reducedMotion || !hasBeenVisible) {
    return (
      <section
        id={id}
        ref={ref}
        className="border-b border-border/50 py-16 sm:py-20"
        aria-labelledby={`${id}-heading`}
      >
        <div className="container-custom">
          <h2
            id={`${id}-heading`}
            className="mb-10 text-2xl font-semibold text-text sm:text-3xl"
          >
            {title}
            {titleSuffix != null && <> {titleSuffix}</>}
          </h2>
          {children}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      className="border-b border-border/50 py-16 sm:py-20"
      aria-labelledby={`${id}-heading`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container-custom">
        <motion.h2
          id={`${id}-heading`}
          className="mb-10 text-2xl font-semibold text-text sm:text-3xl"
          variants={itemVariants}
        >
          {title}
          {titleSuffix != null && <> {titleSuffix}</>}
        </motion.h2>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
