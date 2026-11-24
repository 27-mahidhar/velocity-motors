"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface GalleryImage { src: string; alt: string; caption?: string; }

export function GalleryLightbox({ images, onClose, initialIndex = 0 }: { images: GalleryImage[]; onClose: () => void; initialIndex?: number }) {
  const [index, setIndex] = useState(initialIndex);
  const move = (step: number) => setIndex((current) => (current + step + images.length) % images.length);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [onClose, images.length]);
  const image = images[index];
  return (
    <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Full-screen vehicle gallery" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <button className="lightbox-close icon-button" onClick={onClose} aria-label="Close gallery"><X /></button>
      <button className="lightbox-prev icon-button" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></button>
      <figure className="lightbox-figure"><img src={image.src} alt={image.alt} /><figcaption>{image.caption || image.alt}<span>{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span></figcaption></figure>
      <button className="lightbox-next icon-button" onClick={() => move(1)} aria-label="Next image"><ChevronRight /></button>
    </div>
  );
}
