"use client";

import type { ProjectFeature } from "@/lib/projects";

interface ProjectCaseStudyRevealProps {
  overview?: string | null;
  features?: readonly ProjectFeature[] | null;
}

export default function ProjectCaseStudyReveal({
  overview,
  features,
}: ProjectCaseStudyRevealProps) {
  return (
    <>
      {overview ? (
        <div>
          <h2 className="text-muted mb-2 text-sm font-medium uppercase tracking-wide">
            Overview
          </h2>
          <p className="text-text text-base leading-relaxed sm:text-lg font-normal">
            {overview}
          </p>
        </div>
      ) : null}

      {features?.length ? (
        <div>
          <h2 className="text-muted mb-3 text-sm font-medium uppercase tracking-wide">
            Key Features
          </h2>
          <ul className="flex flex-col gap-6 list-none p-0 m-0">
            {features.map((feature, i) => (
              <li key={i}>
                <h3 className="text-text text-base leading-relaxed sm:text-lg font-medium mb-2">
                  {feature.title}
                </h3>
                <ul className="text-muted text-base leading-relaxed sm:text-lg list-disc pl-5 space-y-2 mt-2">
                  {feature.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
