"use client";

import { useState } from "react";
import { ImageLightbox } from "@/components/ImageLightbox";

/**
 * A step-level image: shows a thumbnail that opens a full-screen lightbox on click.
 * Used inside guide item cards to illustrate a specific action or screen.
 */
export function StepImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-h-40 cursor-zoom-in rounded-lg border border-neutral-200 object-cover transition hover:border-brand-300 hover:shadow-md sm:max-h-48"
        onClick={() => setOpen(true)}
      />
      {caption && (
        <p className="mt-1.5 text-xs text-neutral-500">{caption}</p>
      )}
      {open && <ImageLightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </div>
  );
}
