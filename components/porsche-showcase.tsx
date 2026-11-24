"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BatteryCharging, Gauge, Zap } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryForm } from "@/components/enquiry-form";
import { GalleryLightbox, type GalleryImage } from "@/components/gallery-lightbox";
import { cars } from "@/data/cars";

const spyder = cars[0];
const images: GalleryImage[] = [
  { src: spyder.image, alt: "Guards Red Porsche 918 Spyder, front three-quarter view", caption: "Guards Red · 2015 production car" },
  { src: "/images/918-cockpit.webp", alt: "Porsche 918 Spyder cockpit with centre console and touch display", caption: "Cockpit and centre console" },
  { src: "/images/918-rear.webp", alt: "Rear view of a Porsche 918 Spyder at Geneva", caption: "Rear architecture · early show presentation" }
];

export function PorscheShowcase() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  return (
    <div className="showcase-page">
      <SiteNav rootPrefix="/" dark />
      <main>
        <section className="showcase-hero">
          <img src={spyder.image} alt={spyder.imageAlt} />
          <div className="showcase-hero__shade" />
          <div className="container showcase-hero__content"><span className="eyebrow">The plug-in hybrid pioneer · 2014</span><h1>PORSCHE<br /><em>918 SPYDER</em></h1><p>Born to perform.<br />Designed to inspire.</p><a className="btn btn-primary" href="#design">Discover the 918 <ArrowDown size={15} /></a></div>
          <div className="showcase-hero__vertical">WEISSACH ENGINEERING · ROAD-LEGAL PERFORMANCE</div>
        </section>
        <section className="showcase-intro container section-pad" id="design"><div className="showcase-intro__label"><span className="section-kicker">01 / Exterior design</span><span className="mono-note">A shape built around air and intent</span></div><div><h2 className="section-title">Sculpted by<br /><i>performance.</i></h2><p className="section-copy">Every surface on the 918 carries a purpose. The low nose, sculpted flanks and elevated exhausts express a car that was engineered as a complete system—not styled around a single headline figure.</p></div></section>
        <section className="showcase-image-wide"><img src={spyder.image} alt="Red Porsche 918 Spyder exterior profile" /><span>GUARDS RED · PRESENCE WITHOUT EXCESS</span></section>
        <section className="showcase-interior container section-pad"><div className="showcase-interior__photo" role="button" tabIndex={0} onClick={() => setLightboxIndex(1)} onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(1)}><img src={images[1].src} alt={images[1].alt} /><span>VIEW COCKPIT DETAIL <ArrowUpRight size={14} /></span></div><div><span className="section-kicker">02 / Interior design</span><h2 className="section-title">Driver,<br /><i>at the centre.</i></h2><p className="section-copy">A wraparound console organizes the cockpit around the driver. Touch-sensitive controls and clear instrument displays bring the car's hybrid systems into a focused, tactile space.</p><div className="interior-caption"><span>01 — PERFORMANCE COCKPIT</span><span>02 — DRIVER-CENTRIC CONTROL</span></div></div></section>
        <section className="hybrid-section ambient-grid"><div className="container hybrid-section__grid"><div><span className="section-kicker">03 / Hybrid performance</span><h2 className="section-title">Two kinds<br />of <i>power.</i></h2><p className="section-copy">A naturally aspirated 4.6-litre V8 and two electric motors combine in a plug-in hybrid system. Electric drive can work independently at low speeds; together, the powertrains deliver the car's full all-wheel-drive performance.</p><Link className="text-link" href="/cars/porsche-918-spyder">Full 918 specifications <ArrowUpRight size={14} /></Link></div><div className="hybrid-specs"><div><Zap size={19} /><strong>887 <small>PS</small></strong><span>COMBINED SYSTEM OUTPUT</span></div><div><BatteryCharging size={19} /><strong>2 <small>motors</small></strong><span>FRONT + REAR ELECTRIC DRIVE</span></div><div><Gauge size={19} /><strong>2.6 <small>s</small></strong><span>0–100 KM/H · FACTORY FIGURE</span></div></div></div></section>
        <section className="showcase-performance container section-pad"><div><span className="section-kicker">04 / Performance specifications</span><h2 className="section-title">Numbers<br />with <i>purpose.</i></h2><p className="section-copy">Factory-published figures for the production-series road car. Porsche's English page labels the system output 887 hp; the German source identifies 887 PS. The card preserves the manufacturer's stated metric unit.</p></div><div className="spec-table"><div><span>Combined output</span><strong>887 PS <small>652 kW</small></strong></div><div><span>0–100 km/h</span><strong>2.6 s</strong></div><div><span>Top speed</span><strong>345 km/h</strong></div><div><span>Powertrain</span><strong>4.6L V8 + 2 motors</strong></div><div><span>Drive</span><strong>All-wheel drive</strong></div><div><span>System</span><strong>Plug-in hybrid</strong></div></div></section>
        <section className="showcase-gallery container section-pad"><div className="gallery-heading"><div><span className="section-kicker">05 / Gallery</span><h2 className="section-title">Details in <i>motion.</i></h2></div><button className="text-link" onClick={() => setLightboxIndex(0)}>Open gallery <ArrowUpRight size={14} /></button></div><div className="showcase-gallery__grid">{images.map((image, index) => <button key={image.src} className={`gallery-tile gallery-tile--${index + 1}`} onClick={() => setLightboxIndex(index)}><img src={image.src} alt={image.alt} loading="lazy" /><span>{image.caption}</span></button>)}</div></section>
        <section className="technical-section"><div className="container technical-section__grid"><div><span className="section-kicker">06 / Technical details</span><h2 className="section-title">Built as<br /><i>one system.</i></h2><p className="section-copy">The figures below describe the 2014-era production 918 Spyder. Specifications can vary with market, model year and package.</p></div><div className="technical-list"><div><span>Engine</span><strong>4,593 cc naturally aspirated V8</strong></div><div><span>Electric drive</span><strong>Two motors, front and rear</strong></div><div><span>Combined output</span><strong>652 kW / 887 PS</strong></div><div><span>Architecture</span><strong>Plug-in hybrid · all-wheel drive</strong></div><div><span>Source</span><a href={spyder.sourceUrl} target="_blank" rel="noreferrer">Porsche Newsroom <ArrowUpRight size={13} /></a></div></div></div></section>
        <section className="showcase-contact container section-pad" id="request"><div><span className="section-kicker">A considered conversation</span><h2 className="section-title">The 918,<br /><i>in person.</i></h2><p className="section-copy">Request details or arrange a private viewing. Availability and specification are confirmed individually.</p></div><div className="showcase-contact__form"><EnquiryForm initialCar="Porsche 918 Spyder" compact /></div></section>
      </main>
      <SiteFooter />
      {lightboxIndex !== null && <GalleryLightbox images={images} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />}
    </div>
  );
}
