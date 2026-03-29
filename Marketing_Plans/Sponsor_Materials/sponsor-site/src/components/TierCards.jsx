import { tiers } from "../data/content";
import "./TierCards.css";

export default function TierCards() {
  return (
    <section className="section tiers">
      <div className="section-inner">
        <h2 className="tiers-heading">2026 Partnership Tiers</h2>
        <div className="tiers-grid">
          {tiers.map((tier, i) => (
            <div
              className={`tier-card${tier.highlight ? " tier-featured" : ""}`}
              key={i}
            >
              <span className="tier-badge">{tier.badge}</span>
              <h3 className="tier-name">{tier.name}</h3>
              <div className="tier-price">
                <span className="tier-amount">{tier.price}</span>
                <span className="tier-period">{tier.period}</span>
              </div>
              <ul className="tier-list">
                {tier.deliverables.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <p className="tier-funds">
                <strong>What this funds:</strong> {tier.funds}
              </p>
              <a
                href="#contact"
                className={`btn ${tier.highlight ? "btn-primary" : "btn-outline"}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
