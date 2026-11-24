import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteBrand } from "@/components/site-brand";
import { imageCredits } from "@/data/image-credits";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top"><div><SiteBrand /><p>Exceptional performance cars, considered with care.</p></div><div className="site-footer__links"><Link href="/#collection">Collection</Link><Link href="/918-spyder">918 Spyder</Link><Link href="/#about">Our story</Link><Link href="/#contact">Enquire <ArrowUpRight size={12} /></Link></div></div>
        <details className="image-credits"><summary>Image credits & reuse licenses</summary><div className="image-credits__list">{imageCredits.map((credit) => <p key={credit.image}><a href={credit.source} target="_blank" rel="noreferrer">{credit.title}</a> · {credit.creator} · <a href={credit.licenseUrl} target="_blank" rel="noreferrer">{credit.license}</a>. Resized and converted to WebP for the site; image framing is via CSS.</p>)}</div></details>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} VELOCITY MOTORS</span><span>Private viewings by appointment</span><Link href="/#home">Back to top ↑</Link></div>
      </div>
    </footer>
  );
}
