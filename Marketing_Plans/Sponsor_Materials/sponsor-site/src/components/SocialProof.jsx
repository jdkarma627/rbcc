import { socialProof } from "../data/content";
import "./SocialProof.css";

export default function SocialProof() {
  return (
    <section className="section social-proof">
      <div className="section-inner social-proof-inner">
        <blockquote className="proof-quote">
          <p>{socialProof.quote}</p>
          <cite>{socialProof.attribution}</cite>
        </blockquote>
      </div>
    </section>
  );
}
