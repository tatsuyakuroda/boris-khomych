import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, PROJECTS } from "@/lib/projects";
import { getTechIconUrl } from "@/lib/tech-icons";
import ProjectMedias from "@/components/ProjectMedias";
import ProjectCaseStudyReveal from "@/components/ProjectCaseStudyReveal";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="container-custom mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/"
          className="text-muted hover:text-text mb-6 inline-flex items-center gap-2 text-sm transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to projects
        </Link>

        <article className="flex flex-col gap-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src={project.image}
              alt={`${project.title} — preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <header>
            <h1 className="text-2xl font-semibold text-text sm:text-3xl">
              {project.title}
            </h1>
            <p className="text-muted mt-2 text-base leading-relaxed sm:text-lg">
              {project.impact}
            </p>
          </header>

          <div>
            <h2 className="text-muted mb-2 text-sm font-medium uppercase tracking-wide">
              Tech stack
            </h2>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {project.stack.map((tech) => {
                const iconUrl = getTechIconUrl(tech);
                return (
                  <li key={tech}>
                    <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-sm text-muted">
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt=""
                          width={18}
                          height={18}
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
          </div>

          <div>
            <h2 className="text-muted mb-2 text-sm font-medium uppercase tracking-wide">
              Medias
            </h2>
            <ProjectMedias medias={project.medias} layout={project.mediaLayout} />
          </div>

          <ProjectCaseStudyReveal
            overview={project.overview}
            features={project.features}
          />
        </article>
      </div>
    </div>
  );
}
