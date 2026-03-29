import { hero } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <img
          src="/rbcc-logo.png"
          alt="Royal Bengal Cricket Club logo"
          className="hero-logo"
        />
        <h1 className="hero-headline">{hero.headline}</h1>
        <p className="hero-sub">{hero.subheadline}</p>
        <a href={hero.ctaHref} className="btn btn-primary hero-cta">
          {hero.cta}
        </a>
      </div>
    </section>
  );
}
