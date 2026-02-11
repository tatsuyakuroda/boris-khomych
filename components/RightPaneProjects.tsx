"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import ShinyText from "@/components/ShinyText";
import ChromaGrid, { type ChromaGridItem } from "@/components/ChromaGrid";

const CHROMA_COLORS = [
  { borderColor: "#2768FF", gradient: "linear-gradient(145deg, #2768FF, #1c1e22)" },
  { borderColor: "#C5A059", gradient: "linear-gradient(180deg, #C5A059, #1c1e22)" },
  { borderColor: "#10B981", gradient: "linear-gradient(210deg, #10B981, #1c1e22)" },
  { borderColor: "#8B5CF6", gradient: "linear-gradient(165deg, #8B5CF6, #1c1e22)" },
  { borderColor: "#EF4444", gradient: "linear-gradient(195deg, #EF4444, #1c1e22)" },
  { borderColor: "#06B6D4", gradient: "linear-gradient(135deg, #06B6D4, #1c1e22)" },
  { borderColor: "#F59E0B", gradient: "linear-gradient(225deg, #F59E0B, #1c1e22)" },
  { borderColor: "#EC4899", gradient: "linear-gradient(150deg, #EC4899, #1c1e22)" },
  { borderColor: "#6366F1", gradient: "linear-gradient(120deg, #6366F1, #1c1e22)" },
  { borderColor: "#14B8A6", gradient: "linear-gradient(240deg, #14B8A6, #1c1e22)" },
];

function projectToChromaItem(project: Project, index: number): ChromaGridItem & { data: Project } {
  const colors = CHROMA_COLORS[index % CHROMA_COLORS.length];
  return {
    image: project.image,
    title: project.title,
    subtitle: project.impact,
    stack: project.stack,
    borderColor: colors.borderColor,
    gradient: colors.gradient,
    data: project,
  };
}

export default function RightPaneProjects() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const chromaItems = PROJECTS.map((p, i) => projectToChromaItem(p, i));

  const handleCardClick = (item: ChromaGridItem) => {
    const project = (item as ChromaGridItem & { data: Project }).data;
    if (project?.slug) router.push(`/projects/${project.slug}`);
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="split-right flex min-h-screen min-w-0 w-full flex-col overflow-x-hidden lg:ml-[50%] lg:min-h-0 lg:h-screen lg:overflow-y-auto"
      aria-labelledby="projects-heading"
    >
      <div className="container-custom flex min-w-0 flex-col gap-8 py-8 sm:gap-10 sm:py-12 lg:py-16">
        <h2
          id="projects-heading"
          className="sticky top-0 z-10 -mx-4 -mt-8 bg-bg px-4 pt-8 pb-3 text-xl font-semibold sm:-mx-6 sm:-mt-12 sm:px-6 sm:pt-12 sm:pb-4 sm:text-2xl lg:-mt-16 lg:pt-16 lg:text-3xl"
        >
          <ShinyText
            text="🔰 My Recent Projects "
            speed={2}
            delay={0}
            color="#a4a7ac"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={reducedMotion ?? false}
          />
        </h2>

        <div className="min-h-[400px] w-full min-w-0 sm:min-h-[500px]" style={{ position: "relative" }}>
          <ChromaGrid
            items={chromaItems}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            columns={2}
            rows={Math.ceil(PROJECTS.length / 2)}
            onCardClick={handleCardClick}
            disabled={reducedMotion ?? false}
          />
        </div>
      </div>
    </section>
  );
}
