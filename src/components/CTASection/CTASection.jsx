
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CTASection.css";

export default function CTASection({
  eyebrow = "YOUR JOURNEY STARTS HERE",
  title = "Ready to Move Better and Live Better?",
  description = "Take the first step towards better movement and a healthier life. Our physiotherapy team is here to help you.",
  buttonText = "Book Your Appointment",
  buttonLink = "/contact",
  secondaryText = "Explore Our Services",
  secondaryLink = "/services",
}) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-orb cta-orb-one" aria-hidden="true" />
        <div className="cta-orb cta-orb-two" aria-hidden="true" />
        <div className="cta-dot-pattern" aria-hidden="true" />

        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="cta-eyebrow">
            <span className="cta-eyebrow-line" />
            {eyebrow}
          </div>

          <h2 className="cta-title">{title}</h2>

          <p className="cta-description">{description}</p>

          <div className="cta-actions">
            {buttonText && buttonLink && (
              <Link
                to={buttonLink}
                className="cta-button cta-button-primary"
              >
                {buttonText}

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </Link>
            )}

            {secondaryText && secondaryLink && (
              <Link
                to={secondaryLink}
                className="cta-button cta-button-secondary"
              >
                {secondaryText}
              </Link>
            )}
          </div>

          <div className="cta-trust">
            <span className="cta-trust-item">
              <span className="cta-check" aria-hidden="true">✓</span>
              Personalised Care
            </span>

            <span className="cta-trust-divider" aria-hidden="true" />

            <span className="cta-trust-item">
              <span className="cta-check" aria-hidden="true">✓</span>
              Expert Guidance
            </span>

            <span className="cta-trust-divider" aria-hidden="true" />

            <span className="cta-trust-item">
              <span className="cta-check" aria-hidden="true">✓</span>
              Better Movement
            </span>
          </div>
        </motion.div>

        <motion.div
          className="cta-side-mark"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          aria-hidden="true"
        >
          <div className="cta-mark-ring cta-mark-ring-one" />
          <div className="cta-mark-ring cta-mark-ring-two" />

          <div className="cta-mark-center">
            <svg viewBox="0 0 48 48">
              <path d="M24 7v34M7 24h34" />
              <circle cx="24" cy="24" r="17" />
            </svg>
          </div>

          <span className="cta-mark-label">YOUR WELLBEING MATTERS</span>
        </motion.div>
      </div>
    </section>
  );
}
