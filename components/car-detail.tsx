"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowUpRight, Heart } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryForm } from "@/components/enquiry-form";
import { GalleryLightbox, type GalleryImage } from "@/components/gallery-lightbox";
import type { Car } from "@/data/cars";

export function CarDetail({ car }: { car: Car }) {
  const [favorite, setFavorite] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("velocity-favourites") || "[]") as string[];
    setFavorite(saved.includes(car.slug));
  }, [car.slug]);
  const images: GalleryImage[] = [{ src: car.image, alt: car.imageAlt, caption: car.displayName }];
  function toggleFavorite() {
    setFavorite((current) => {
      const saved = JSON.parse(localStorage.getItem("velocity-favourites") || "[]") as string[];
      const next = current ? saved.filter((slug) => slug !== car.slug) : Array.from(new Set([...saved, car.slug]));
      localStorage.setItem("velocity-favourites", JSON.stringify(next));
      return !current;
    });
  }
  return (
    <div className="detail-page">
      <SiteNav rootPrefix="/" dark />
      <main>
        <section className="detail-hero"><img src={car.image} alt={car.imageAlt} /><div className="detail-hero__shade" /><div className="container detail-hero__content"><Link className="back-link" href="/#collection"><ArrowLeft size={14} /> Back to collection</Link><span className="eyebrow">{car.brand} · {car.year}</span><h1>{car.model}</h1><p>{car.trim}</p><div className="detail-hero__actions"><a className="btn btn-primary" href="#request">Request details <ArrowDown size={14} /></a><button className={`btn ${favorite ? "btn-primary" : ""}`} onClick={toggleFavorite}><Heart size={15} fill={favorite ? "currentColor" : "none"} /> {favorite ? "Saved to favourites" : "Save favourite"}</button></div></div></section>
        <section className="detail-specs container section-pad"><div className="detail-specs__heading"><span className="section-kicker">Performance, precisely stated</span><h2 className="section-title">The <i>essentials.</i></h2></div><div className="detail-specs__grid"><div><span>POWER</span><strong>{car.horsepower}</strong><small>{car.powerUnitNote}</small></div><div><span>TOP SPEED</span><strong>{car.topSpeed}</strong><small>Factory figure for the specified trim</small></div><div><span>0–100 KM/H</span><strong>{car.zeroTo100}</strong><small>Factory-published acceleration</small></div><div><span>ENGINE</span><strong>{car.engine}</strong><small>{car.trim}</small></div></div><p className="spec-qualification">{car.specificationNote}</p><p className="source-note">Source: <a href={car.sourceUrl} target="_blank" rel="noreferrer">{car.sourceName} <ArrowUpRight size={12} /></a></p></section>
        <section className="detail-story"><div className="detail-story__image" role="button" tabIndex={0} onClick={() => setLightbox(true)} onKeyDown={(event) => event.key === "Enter" && setLightbox(true)}><img src={car.image} alt={car.imageAlt} /><span>View photograph <ArrowUpRight size={13} /></span></div><div className="detail-story__copy"><span className="section-kicker">An automotive point of view</span><h2 className="section-title">Designed to<br /><i>stay with you.</i></h2><p className="section-copy">{car.summary}</p><p className="section-copy">{car.engineDetail}</p><button className="text-link" onClick={() => setLightbox(true)}>Open image <ArrowUpRight size={13} /></button></div></section>
        <section className="detail-request container section-pad" id="request"><div><span className="section-kicker">By private appointment</span><h2 className="section-title">Start the<br /><i>conversation.</i></h2><p className="section-copy">Pricing and availability are confirmed on request. Tell us what matters to you.</p></div><div className="detail-request__form"><EnquiryForm initialCar={car.displayName} /></div></section>
      </main>
      <SiteFooter />
      {lightbox && <GalleryLightbox images={images} onClose={() => setLightbox(false)} />}
    </div>
  );
}
