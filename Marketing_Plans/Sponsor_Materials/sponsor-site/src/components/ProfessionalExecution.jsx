import { professionalExecution } from "../data/content";
import "./ProfessionalExecution.css";

export default function ProfessionalExecution() {
  return (
    <section className="section pro-exec">
      <div className="section-inner pro-exec-inner">
        <h2>{professionalExecution.headline}</h2>
        <div className="pro-exec-body">
          {(Array.isArray(professionalExecution.body)
            ? professionalExecution.body
            : [professionalExecution.body]
          ).map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="pro-exec-features">
          {professionalExecution.features.map((f, i) => (
            <div className="pro-exec-feature" key={i}>
              <h3>{f.title}</h3>
              <p>{f.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
