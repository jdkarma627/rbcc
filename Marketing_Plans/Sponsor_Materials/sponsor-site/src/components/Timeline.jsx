import { timeline } from "../data/content";
import "./Timeline.css";

export default function Timeline() {
  return (
    <section className="section timeline-section">
      <div className="section-inner">
        <h2 className="timeline-heading">12 Months of Activation</h2>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div
              className={`tl-item${item.highlight ? " tl-highlight" : ""}`}
              key={i}
            >
              <div className="tl-dot" />
              <div className="tl-content">
                <span className="tl-month">{item.month}</span>
                <span className="tl-text">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
