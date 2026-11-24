"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronRight, Heart, Volume2, VolumeX, Zap } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CarCard } from "@/components/car-card";
import { EnquiryForm } from "@/components/enquiry-form";
import { cars, brands, categories, priceBandLabels, type Car, type CarCategory, type PriceBand } from "@/data/cars";

function playEngineStart(): GainNode | null {
  const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return null;
  const context = new AudioContextClass();
  void context.resume();
  const master = context.createGain();
  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(180, context.currentTime);
  filter.frequency.exponentialRampToValueAtTime(1800, context.currentTime + .55);
  filter.frequency.exponentialRampToValueAtTime(720, context.currentTime + 1.65);
  master.gain.setValueAtTime(.0001, context.currentTime);
  master.gain.exponentialRampToValueAtTime(.18, context.currentTime + .18);
  master.gain.exponentialRampToValueAtTime(.0001, context.currentTime + 1.9);
  filter.connect(master); master.connect(context.destination);
  const low = context.createOscillator(); low.type = "sawtooth"; low.frequency.setValueAtTime(48, context.currentTime); low.frequency.exponentialRampToValueAtTime(108, context.currentTime + .55); low.frequency.exponentialRampToValueAtTime(63, context.currentTime + 1.9); low.connect(filter); low.start(); low.stop(context.currentTime + 2);
  const high = context.createOscillator(); high.type = "triangle"; high.frequency.setValueAtTime(94, context.currentTime); high.frequency.exponentialRampToValueAtTime(220, context.currentTime + .55); high.frequency.exponentialRampToValueAtTime(126, context.currentTime + 1.9); high.connect(filter); high.start(); high.stop(context.currentTime + 2);
  window.setTimeout(() => void context.close(), 2400);
  return master;
}

function LoadingMark() {
  return <div className="opening-loader" aria-label="Loading VELOCITY MOTORS"><div className="opening-loader__mark"><span>V</span><i /></div><div className="opening-loader__line"><span /></div><small>PREPARING THE COLLECTION</small></div>;
}

function Reveal({ image, title, spec, onSelect, active }: { image: string; title: string; spec: string; onSelect: () => void; active: boolean }) {
  return <button className={`showroom-select ${active ? "is-active" : ""}`} onClick={onSelect} aria-pressed={active}><img src={image} alt="" loading="lazy" /><span>{title}</span><small>{spec}</small><ChevronRight size={14} /></button>;
}

export function HomePage() {
  const reduceMotion = useReducedMotion();
  const engineGain = useRef<GainNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [intro, setIntro] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");
  const [favourites, setFavourites] = useState<string[]>([]);
  const [featured, setFeatured] = useState<Car>(cars[0]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saved = JSON.parse(localStorage.getItem("velocity-favourites") || "[]") as string[];
    setFavourites(saved);
    if (reduced) { setLoading(false); setIntro(false); return; }
    const loader = window.setTimeout(() => setLoading(false), 1250);
    const reveal = window.setTimeout(() => setIntro(false), 8200);
    return () => { window.clearTimeout(loader); window.clearTimeout(reveal); };
  }, []);

  const visibleCars = useMemo(() => cars.filter((car) => {
    const text = `${car.brand} ${car.model} ${car.engine}`.toLowerCase();
    const brandMatch = brand === "all" || car.brand === brand;
    const categoryMatch = category === "all" || car.category === category;
    const priceMatch = price === "all" || car.priceBand === price;
    return brandMatch && categoryMatch && priceMatch && text.includes(search.toLowerCase());
  }), [brand, category, price, search]);

  function toggleFavourite(slug: string) {
    setFavourites((current) => {
      const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
      localStorage.setItem("velocity-favourites", JSON.stringify(next));
      return next;
    });
  }
  function toggleSound() {
    setSoundOn((current) => {
      if (current) {
        const gain = engineGain.current;
        if (gain) {
          const now = gain.context.currentTime;
          gain.gain.cancelScheduledValues(now);
          gain.gain.setValueAtTime(Math.max(gain.gain.value, .0001), now);
          gain.gain.exponentialRampToValueAtTime(.0001, now + .06);
        }
      } else {
        engineGain.current = playEngineStart();
      }
      return !current;
    });
  }

  return (
    <div className="page-shell">
      {loading && <div className="loading-screen"><LoadingMark /></div>}
      <SiteNav onEnquire={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} onSearch={setSearch} />
      <main>
        <section id="home" className={`hero ${intro ? "hero--sequence" : "hero--settled"}`}>
          <img className="hero__image" src={cars[0].image} alt="Guards Red Porsche 918 Spyder revealed in a dramatic three-quarter front view" fetchPriority="high" />
          <div className="hero__vignette" /><div className="hero__floor" /><div className="hero__beam" />
          <div className="container hero__content">
            <div className="hero__topline"><span className="eyebrow">A considered collection · Private appointment</span><span className="hero__index">01 / 08</span></div>
            <motion.div className="hero__headline" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: intro ? .95 : 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 1.2, delay: intro && !reduceMotion ? 1.1 : 0 }}>
              <span className="hero__overline">PORSCHE · 918 SPYDER</span><h1>Born to <i>perform.</i></h1><p>Designed to inspire.</p>
              <div className="hero__actions"><Link className="btn btn-primary" href="/918-spyder">Explore the car <ArrowUpRight size={15} /></Link><a className="btn" href="#collection">View collection <ArrowDown size={14} /></a></div>
            </motion.div>
            <div className="hero__side-caption"><span>HYBRID POWER · 887 PS</span><span>0–100 KM/H · 2.6 S</span></div>
            <div className="hero__bottomline"><span>THE FUTURE, AS IT WAS FIRST IMAGINED.</span><button className="sound-control" onClick={toggleSound} aria-pressed={soundOn}>{soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}{soundOn ? "Sound on" : "Engine sound"}</button></div>
          </div>
          {intro && !loading && <button className="skip-intro" onClick={() => setIntro(false)}>Skip opening <ArrowUpRight size={12} /></button>}
          <a className="hero__scroll" href="#collection"><span>Scroll to discover</span><i /></a>
        </section>

        <section className="collection-section section-pad" id="collection">
          <div className="container">
            <div className="section-heading-row"><div><span className="section-kicker">Eight icons. One considered collection.</span><h2 className="section-title">The <i>collection.</i></h2></div><p className="section-copy">Performance, design and engineering—selected for the way each car makes you feel.</p></div>
            <div className="collection-toolbar" id="supercars">
              <div className="collection-toolbar__intro"><span className="collection-count">{String(visibleCars.length).padStart(2, "0")}</span><span>VEHICLES</span>{favourites.length > 0 && <span className="collection-faves"><Heart size={13} fill="currentColor" /> {favourites.length} saved</span>}</div>
              <div className="collection-filters">
                <label className="filter-wrap"><span className="sr-only">Filter by brand</span><select className="filter-control" value={brand} onChange={(e) => setBrand(e.target.value)}><option value="all">All brands</option>{brands.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
                <label className="filter-wrap"><span className="sr-only">Filter by category</span><select className="filter-control" value={category} onChange={(e) => setCategory(e.target.value)}><option value="all">All categories</option>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
                <label className="filter-wrap"><span className="sr-only">Filter by indicative price tier</span><select className="filter-control" value={price} onChange={(e) => setPrice(e.target.value)}><option value="all">All value tiers</option>{Object.entries(priceBandLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
              </div>
            </div>
            <p className="price-disclaimer">Indicative USD value tiers for browsing only. Not asking prices; actual market values vary by year, condition and region.</p>
            {visibleCars.length ? <div className="collection-grid">{visibleCars.map((car) => <CarCard key={car.slug} car={car} favorite={favourites.includes(car.slug)} onFavorite={toggleFavourite} />)}</div> : <div className="collection-empty"><span>No cars match those filters.</span><button className="text-link" onClick={() => { setBrand("all"); setCategory("all"); setPrice("all"); setSearch(""); }}>Clear filters <ArrowRight size={13} /></button></div>}
          </div>
        </section>

        <section className="showroom-section" id="luxurycars">
          <div className="showroom-section__image"><img src={featured.image} alt={`${featured.displayName} in the VELOCITY virtual showroom`} loading="lazy" /><div className="showroom-section__wash" /></div>
          <div className="showroom-section__spotlight" />
          <div className="container showroom-section__content"><div className="showroom-section__heading"><span className="section-kicker">The virtual showroom</span><h2 className="section-title">Make space<br />for <i>the extraordinary.</i></h2><p>Choose a marque. Discover the details.</p></div><div className="showroom-section__selection">{cars.map((car) => <Reveal key={car.slug} image={car.image} title={car.displayName} spec={`${car.horsepower} · ${car.topSpeed}`} active={featured.slug === car.slug} onSelect={() => setFeatured(car)} />)}</div><Link className="showroom-section__explore" href={featured.slug === "porsche-918-spyder" ? "/918-spyder" : `/cars/${featured.slug}`}>Explore {featured.model} <ArrowUpRight size={15} /></Link></div>
          <div className="showroom-section__plate"><span>VELOCITY MOTORS</span><span>PRIVATE VIEWING · BY APPOINTMENT</span></div>
        </section>

        <section className="manifesto-section container section-pad" id="about"><div className="manifesto-section__left"><span className="section-kicker">Our point of view</span><h2 className="section-title">Not simply<br />fast. <i>Felt.</i></h2></div><div className="manifesto-section__right"><p className="manifesto-lead">VELOCITY MOTORS is a destination for people who see more than a badge. We bring together exceptional performance cars for their engineering, their character and the emotion that stays long after the road ends.</p><div className="manifesto-details"><div><span>01</span><p>Independent by nature.<br />Considered in every detail.</p></div><div><span>02</span><p>Private viewings, arranged<br />around the individual.</p></div><div><span>03</span><p>Eight distinct machines.<br />One shared pursuit.</p></div></div><Link className="text-link" href="/#contact">Begin a conversation <ArrowUpRight size={14} /></Link></div></section>

        <section className="contact-section" id="contact"><div className="container contact-section__grid"><div className="contact-section__intro"><span className="section-kicker">Private appointments</span><h2 className="section-title">A closer<br /><i>look.</i></h2><p className="section-copy">Tell us which car has caught your eye. Our team will follow up with availability, specification and viewing details.</p><div className="contact-facts"><div><span>Showroom</span><strong>Location shared on confirmation</strong></div><div><span>Visit</span><strong>By private appointment</strong></div><div><span>Prefer a message?</span><a href={`https://wa.me/?text=${encodeURIComponent("Hello VELOCITY MOTORS, I would like to enquire about the collection.")}`} target="_blank" rel="noreferrer">Open WhatsApp <ArrowUpRight size={13} /></a></div></div></div><div className="contact-section__form"><span className="section-kicker">Enquiry / test drive</span><EnquiryForm /></div></div></section>

        <section className="closing-banner"><img src={cars[0].image} alt="Red Porsche 918 Spyder, rear wing and body detail" loading="lazy"/><div className="closing-banner__overlay"/><div className="container closing-banner__content"><span className="section-kicker">The 918 Spyder</span><h2>Born to perform.<br /><i>Designed to inspire.</i></h2><Link className="btn btn-primary" href="/918-spyder">Enter the showcase <ArrowUpRight size={14} /></Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
