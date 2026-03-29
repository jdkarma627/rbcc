import { whyRbcc } from "../data/content";
import "./WhyRBCC.css";

export default function WhyRBCC() {
  return (
    <section className="section why">
      <div className="section-inner why-grid">
        <div className="why-text">
          <h2>Why RBCC</h2>
          {whyRbcc.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="why-proof">
          {whyRbcc.proofPoints.map((pt, i) => (
            <div className="proof-item" key={i}>
              <strong>{pt.lead}</strong>
              {Array.isArray(pt.detail) ? (
                <ul className="proof-list">
                  {pt.detail.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{pt.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
