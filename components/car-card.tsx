"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import type { Car } from "@/data/cars";

export function CarCard({ car, favorite, onFavorite }: { car: Car; favorite: boolean; onFavorite: (slug: string) => void }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article className="car-card" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: reduceMotion ? 0 : .55, ease: [.2, .7, .2, 1] }}>
      <div className="car-card__image card-photo">
        <Link href={car.slug === "porsche-918-spyder" ? "/918-spyder" : `/cars/${car.slug}`} aria-label={`Explore ${car.displayName}`}>
          <img src={car.image} alt={car.imageAlt} loading="lazy" />
        </Link>
        <span className="car-card__category">{car.category}</span>
        <button className={`favorite-button ${favorite ? "is-active" : ""}`} onClick={() => onFavorite(car.slug)} aria-label={favorite ? `Remove ${car.displayName} from favourites` : `Add ${car.displayName} to favourites`} aria-pressed={favorite}>
          <Heart size={16} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="car-card__meta"><span>{car.brand}</span><span>{car.year}</span></div>
      <div className="car-card__title-row"><h3>{car.model}</h3><span className="car-card__price">Price on request</span></div>
      <div className="car-card__specs">
        <div><strong>{car.horsepower}</strong><small>POWER</small></div>
        <div><strong>{car.topSpeed}</strong><small>TOP SPEED</small></div>
        <div><strong>{car.zeroTo100}</strong><small>0–100 KM/H</small></div>
      </div>
      <p className="car-card__engine">{car.engine}</p>
      <p className="car-card__note">{car.powerUnitNote}</p>
      <Link className="car-card__link" href={car.slug === "porsche-918-spyder" ? "/918-spyder" : `/cars/${car.slug}`}>
        Explore details <ArrowUpRight size={14} />
      </Link>
    </motion.article>
  );
}
