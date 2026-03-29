import { contact } from "../data/content";
import "./ContactCTA.css";

export default function ContactCTA() {
  return (
    <section className="contact" id="contact">
      <div className="section-inner contact-inner">
        <h2>{contact.headline}</h2>
        <p className="contact-body">{contact.body}</p>
        <div className="contact-details">
          <p className="contact-name">{contact.name}</p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>
              {contact.phone}
            </a>
          </p>
        </div>
        <a href={`mailto:${contact.email}`} className="btn btn-primary contact-cta">
          {contact.cta}
        </a>
      </div>
    </section>
  );
}
