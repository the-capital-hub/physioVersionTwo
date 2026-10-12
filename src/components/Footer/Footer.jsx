
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Heart,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import "./Footer.css";

const exploreLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Team", path: "/team" },
  { label: "Resources", path: "/resources" },
  { label: "Our Blog", path: "/blog" },
];

const serviceLinks = [
  { label: "Physiotherapy", path: "/services" },
  { label: "Online Physiotherapy", path: "/online-physiotherapy" },
  { label: "Conditions We Treat", path: "/conditions" },
  { label: "Book an Appointment", path: "/appointment" },
];

const socialLinks = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/",
    Icon: FaFacebookF,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rehabics-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">

            {/* Brand Section */}

            <div className="footer-brand">
              <Link
                to="/"
                className="footer-logo"
                aria-label="Rehabics home"
              >
                <span className="footer-logo-mark">R</span>

                <span className="footer-logo-text">
                  rehabics
                  <small>MOVE BETTER. LIVE BETTER.</small>
                </span>
              </Link>

              <p className="footer-description">
                Helping you move with confidence through personalised
                physiotherapy, expert guidance, and thoughtful care
                throughout your recovery journey.
              </p>

              <div className="footer-socials">
                {socialLinks.map(({ label, url, Icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`footer-social-link footer-social-${label.toLowerCase()}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore Links */}

            <nav
              className="footer-column"
              aria-label="Explore"
            >
              <h3 className="footer-heading">Explore</h3>

              <ul className="footer-link-list">
                {exploreLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="footer-link"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}

            <nav
              className="footer-column"
              aria-label="Our services"
            >
              <h3 className="footer-heading">Our Services</h3>

              <ul className="footer-link-list">
                {serviceLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="footer-link"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Details */}

            <div className="footer-column footer-contact">
              <h3 className="footer-heading">Get in Touch</h3>

              <p className="footer-contact-intro">
                Have a question about physiotherapy? We are here to help.
              </p>

              <a
                href="mailto:hello@rehabics.com"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Mail size={17} />
                </span>

                <span>hello@rehabics.com</span>
              </a>

              <a
                href="tel:+910000000000"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Phone size={17} />
                </span>

                <span>+91 00000 00000</span>
              </a>

              <div className="footer-contact-item footer-address">
                <span className="footer-contact-icon">
                  <MapPin size={17} />
                </span>

                <span>Your clinic address goes here</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}

      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <p className="footer-copyright">
            © {currentYear} Rehabics. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link
              to="/privacy"
              className="footer-legal-link"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="footer-legal-link"
            >
              Terms of Service
            </Link>
          </div>

          <p className="footer-made-with">
            Made with
            <Heart
              size={13}
              fill="currentColor"
              aria-label="love"
            />
            for better movement
          </p>
        </div>
      </div>
    </footer>
  );
}
