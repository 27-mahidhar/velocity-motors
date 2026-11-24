"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { SiteBrand } from "@/components/site-brand";

const navItems = [
  ["Home", "home"],
  ["Our Collection", "collection"],
  ["Supercars", "supercars"],
  ["Luxury Cars", "luxurycars"],
  ["About Us", "about"],
  ["Contact", "contact"]
] as const;

export function SiteNav({ onEnquire, onSearch, rootPrefix = "", dark = false }: {
  onEnquire?: () => void;
  onSearch?: (value: string) => void;
  rootPrefix?: string;
  dark?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const base = rootPrefix ? `${rootPrefix.replace(/\/$/, "")}/#` : "#";
  return (
    <header className={`site-nav ${dark ? "site-nav--solid" : ""}`}>
      <div className="site-nav__inner container">
        <SiteBrand />
        <nav className={`site-nav__links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`${base}${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="site-nav__actions">
          <button className="icon-button search-trigger" aria-label={searchOpen ? "Close search" : "Search cars"} onClick={() => setSearchOpen((open) => !open)}>
            {searchOpen ? <X size={17} /> : <Search size={17} />}
          </button>
          <button className="nav-enquiry" onClick={() => onEnquire ? onEnquire() : document.getElementById("request")?.scrollIntoView({ behavior: "smooth" })}>Enquire <ArrowUpRight size={14} /></button>
          <button className="icon-button mobile-menu-trigger" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {searchOpen && <div className="nav-search"><Search size={15} /><input autoFocus placeholder="Search the collection" onChange={(event) => onSearch?.(event.target.value)} aria-label="Search cars" /></div>}
      </div>
    </header>
  );
}
