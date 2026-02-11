"use client";

import { motion, useReducedMotion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Senior Software Engineer",
    company: "Current / Previous",
    period: "2022 — Present",
    description:
      "Building reliable, scalable systems. Focus on full-stack development, APIs, and cloud infrastructure.",
  },
  {
    role: "Software Engineer",
    company: "Earlier role",
    period: "2019 — 2022",
    description:
      "Shipped features across the stack. Contributed to architecture decisions and developer experience.",
  },
  {
    role: "Junior Developer",
    company: "First role",
    period: "2017 — 2019",
    description:
      "Started career in web development. Learned best practices and collaboration in agile teams.",
  },
];

export default function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-[11px] top-2 bottom-2 w-px bg-border sm:left-4"
        aria-hidden
      />
      <ul className="list-none space-y-8 p-0 m-0">
        {EXPERIENCES.map((exp, i) => (
          <li key={exp.role + exp.period} className="relative pl-10 sm:pl-12">
            {/* Dot on timeline */}
            <div
              className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-blue bg-bg sm:left-1 sm:h-4 sm:w-4"
              aria-hidden
            />
            <motion.div
              className="rounded-lg border border-border bg-surface p-4 sm:p-5"
              initial={reducedMotion ? undefined : "initial"}
              whileInView={reducedMotion ? undefined : "animate"}
              viewport={{ once: true, margin: "-40px" }}
              variants={
                reducedMotion
                  ? undefined
                  : {
                      initial: { opacity: 0, y: 12 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: [0.2, 0.8, 0.2, 1],
                          delay: i * 0.06,
                        },
                      },
                    }
              }
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-text">
                  {exp.role}
                </h3>
                <span className="text-muted text-sm">{exp.period}</span>
              </div>
              <p className="text-gold text-sm mt-0.5">{exp.company}</p>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}
