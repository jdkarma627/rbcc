import { stats } from "../data/content";
import "./ClubSnapshot.css";

export default function ClubSnapshot() {
  return (
    <section className="section snapshot">
      <div className="section-inner snapshot-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
