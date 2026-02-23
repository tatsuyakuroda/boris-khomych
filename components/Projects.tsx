"use client";

import { PROJECTS } from "@/lib/projects";
import { getTechIconUrl } from "@/lib/tech-icons";
import { motion, useReducedMotion } from "framer-motion";

export default function Projects() {
  const reducedMotion = useReducedMotion();

  const cardMotion = reducedMotion
    ? {}
    : {
        whileHover: { y: -4, scale: 1.02 },
        transition: { duration: 0.2, ease: [0.2, 0.8, 0.2, 1] },
      };

  return (
    <div>
      <ul className="grid list-none gap-6 p-0 m-0 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <li key={project.title}>
            <motion.article
              className="group h-full rounded-xl border border-border bg-surface p-6 shadow-none transition-shadow hover:shadow-lg focus-within:ring-2 focus-within:ring-blue focus-within:ring-offset-2 focus-within:ring-offset-bg rounded-lg"
              {...cardMotion}
            >
              <h3 className="text-lg font-semibold text-text mb-2">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {project.impact}
              </p>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {project.stack.map((tech) => {
                  const iconUrl = getTechIconUrl(tech);
                  return (
                    <li key={tech}>
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg px-2 py-1 font-mono text-xs text-muted">
                        {iconUrl ? (
                          <img
                            src={iconUrl}
                            alt=""
                            width={14}
                            height={14}
                            className="shrink-0"
                            aria-hidden
                          />
                        ) : null}
                        {tech}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          </li>
        ))}
      </ul>
    </div>
  );
}
