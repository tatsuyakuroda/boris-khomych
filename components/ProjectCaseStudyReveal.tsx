"use client";

import Image from "next/image";
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
                {feature.table ? (
                  <div className="mt-3 overflow-x-auto rounded-lg border border-border">
                    <table className="w-full min-w-[32rem] text-sm">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          {feature.table.headers.map((h, k) => (
                            <th
                              key={k}
                              className="text-muted px-3 py-2 text-left font-medium"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {feature.table.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className="text-text border-b border-border last:border-0"
                          >
                            {row.map((cell, ci) => (
                              <td key={ci} className="px-3 py-2">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : feature.images?.length ? (
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {feature.images.map((src, k) => (
                      <div
                        key={k}
                        className="overflow-hidden rounded-lg border border-border bg-surface"
                      >
                        <Image
                          src={src}
                          alt={`${feature.title} ${k + 1}`}
                          width={512}
                          height={288}
                          className="h-auto w-full object-contain"
                          sizes="(max-width: 640px) 50vw, 400px"
                        />
                      </div>
                    ))}
                  </div>
                ) : feature.image ? (
                  <div className="mt-3 overflow-hidden rounded-lg border border-border bg-surface">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={800}
                      height={400}
                      className="w-full max-w-2xl object-contain"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                ) : null}
                {feature.items?.length ? (
                  <ul className="text-muted text-base leading-relaxed sm:text-lg list-disc pl-5 space-y-2 mt-2">
                    {feature.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
