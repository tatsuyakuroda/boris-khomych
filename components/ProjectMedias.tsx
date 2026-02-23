"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/lib/projects";

interface ProjectMediasProps {
  medias?: readonly ProjectMedia[] | null;
  /** "grid" = 3×3 grid of all items; default = carousel */
  layout?: "carousel" | "grid";
}

function preventMediaContextMenu(e: React.MouseEvent) {
  e.preventDefault();
}

function MediaItem({
  media,
  onContextMenu,
  gridItem,
}: {
  media: ProjectMedia;
  onContextMenu: (e: React.MouseEvent) => void;
  gridItem?: boolean;
}) {
  const imageContainerClass = gridItem
    ? "relative flex min-h-[10rem] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-surface"
    : "relative flex min-h-[10rem] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border border-border bg-surface select-none";
  const videoContainerClass = gridItem
    ? "relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface"
    : "relative aspect-video w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-surface";
  if (media.type === "image") {
    return (
      <div
        className={gridItem ? imageContainerClass + " select-none" : imageContainerClass}
        onContextMenu={onContextMenu}
      >
        <Image
          src={media.src}
          alt={media.alt ?? ""}
          width={400}
          height={800}
          className="max-h-[70vh] w-auto max-w-full object-contain"
          sizes="(max-width: 768px) 100vw, 672px"
          draggable={false}
          onContextMenu={onContextMenu}
        />
      </div>
    );
  }
  if (media.type === "video") {
    return (
      <div className={videoContainerClass} onContextMenu={onContextMenu}>
        <video
          src={media.src}
          controls
          controlsList="nodownload"
          className="h-full w-full object-contain"
          preload="auto"
          autoPlay
          muted
          playsInline
          loop
          onContextMenu={onContextMenu}
        />
      </div>
    );
  }
  if (media.type === "youtube") {
    return (
      <div className={videoContainerClass} onContextMenu={onContextMenu}>
        <iframe
          src={`https://www.youtube.com/embed/${media.id}`}
          title="YouTube video"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return null;
}

const CAROUSEL_INTERVAL_MS = 3000;

export default function ProjectMedias({ medias, layout = "carousel" }: ProjectMediasProps) {
  const [index, setIndex] = useState(0);
  const length = medias?.length ?? 0;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + length) % length);
  }, [length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % length);
  }, [length]);

  useEffect(() => {
    if (layout !== "carousel" || length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [layout, length]);

  if (!length) return null;

  if (layout === "grid") {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {medias!.map((media, i) => (
          <MediaItem
            key={i}
            media={media}
            onContextMenu={preventMediaContextMenu}
            gridItem
          />
        ))}
      </div>
    );
  }

  if (length === 1) {
    return (
      <div className="flex flex-col gap-4">
        <MediaItem media={medias![0]} onContextMenu={preventMediaContextMenu} />
      </div>
    );
  }

  const current = medias![index];

  return (
    <div className="relative flex flex-col gap-4">
      <div className="relative flex min-h-[200px] items-center justify-center">
        <div key={index} className="w-full flex justify-center">
          <MediaItem media={current} onContextMenu={preventMediaContextMenu} />
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-bg/90 p-2 text-muted shadow-md transition-colors hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          aria-label="Previous media"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-bg/90 p-2 text-muted shadow-md transition-colors hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          aria-label="Next media"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {medias!.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue ${
              i === index
                ? "w-6 bg-blue"
                : "w-2 bg-border hover:bg-muted"
            }`}
            aria-label={`Go to media ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
