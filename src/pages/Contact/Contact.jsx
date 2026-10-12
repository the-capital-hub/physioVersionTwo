
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  MessageCircle,
  ChevronDown,
  Send,
  ShieldCheck,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";
import "./Contact.css";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Our Team",
    description: "Speak with our care team for assistance.",
    value: "Add your phone number",
    link: "",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions or enquiries.",
    value: "Add your email address",
    link: "",
  },
  {
    icon: MapPin,
    title: "Visit Our Clinic",
    description: "We can help you plan your visit.",
    value: "Add your clinic address",
    link: "",
  },
  {
    icon: Clock,
    title: "Clinic Hours",
    description: "Contact us to confirm your appointment.",
    value: "Add your working hours",
    link: "",
  },
];

const faqs = [
  {
    question: "How can I book a physiotherapy appointment?",
    answer:
      "Complete the enquiry form on this page or contact our team using your clinic's verified contact details. We will help you understand the next steps.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Bring relevant medical reports, prescriptions, previous assessment details and a list of your current concerns, if available.",
  },
  {
    question: "Can I ask about the right treatment before booking?",
    answer:
      "Yes. Share a brief description of your concern with our team. A physiotherapist can advise you about the appropriate assessment and next steps.",
  },
  {
    question: "How will I receive appointment confirmation?",
    answer:
      "Your clinic team can confirm the appointment time and any preparation instructions through the contact method you provide.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    message: "",
    consent: false,
  });

  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Appointment enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Service: ${formData.service || "Not selected"}\n` +
        `Preferred date: ${formData.preferredDate || "Not specified"}\n` +
        `Message: ${formData.message || "No additional message"}`
    );

    const clinicEmail = "yourclinic@example.com";

    window.location.href = `mailto:${clinicEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <HeroSection
        eyebrow="WE ARE HERE TO HELP"
        title="Let's Start Your"
        highlight="Recovery Journey"
        description="Have a question about physiotherapy or want to plan your first visit? Connect with our team and take the next step towards better movement."
        primaryText="Book an Appointment"
        primaryLink="/appointment"
        secondaryText="Explore Services"
        secondaryLink="/services"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Healthcare professional discussing care with a patient"
        imageLabel="Personalised Care"
        imageDescription="Your questions matter. Let us help you find the right next step."
        showStats={false}
        showImage={true}
      />

      <section className="contact-details-section">
        <div className="contact-container">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="We Would Love to"
            highlight="Hear From You"
            description="Choose the contact method that works best for you. Our team can help with general enquiries and appointment planning."
          />

          <div className="contact-details-grid">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="contact-detail-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="contact-detail-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>{item.value}</strong>

                  {item.link && (
                    <a href={item.link} className="contact-detail-link">
                      Contact us <ArrowRight size={15} />
                    </a>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-container contact-form-layout">
          <motion.div
            className="contact-form-intro"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="contact-eyebrow">APPOINTMENT ENQUIRY</span>

            <h2>
              Tell Us How We Can
              <span> Help You</span>
            </h2>

            <p>
              Share your details and preferred appointment date. Our team can
              use your enquiry to follow up and help you plan your visit.
            </p>

            <div className="contact-promise-list">
              <div>
                <CheckCircle2 size={19} />
                <span>Personalised assistance</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Clear appointment guidance</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Respectful handling of your enquiry</span>
              </div>
            </div>

            <div className="contact-help-card">
              <div className="contact-help-icon">
                <MessageCircle size={22} />
              </div>

              <div>
                <h3>Need help choosing a service?</h3>
                <p>
                  Explore our physiotherapy services before sending your
                  enquiry.
                </p>
                <Link to="/services">
                  View Services <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-form-heading">
              <div>
                <span>YOUR DETAILS</span>
                <h3>Send an Enquiry</h3>
              </div>

              <div className="contact-form-heading-icon">
                <CalendarDays size={22} />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-input-grid">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">Service Required</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Musculoskeletal Physiotherapy">
                      Musculoskeletal Physiotherapy
                    </option>
                    <option value="Sports Rehabilitation">
                      Sports Rehabilitation
                    </option>
                    <option value="Post Surgery Rehabilitation">
                      Post Surgery Rehabilitation
                    </option>
                    <option value="Neurological Physiotherapy">
                      Neurological Physiotherapy
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="contact-date">
                    Preferred Appointment Date
                  </label>
                  <input
                    id="contact-date"
                    name="preferredDate"
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="contact-message">How Can We Help?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    placeholder="Tell us briefly about your enquiry"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <label className="contact-consent">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <span>
                  I agree to be contacted about this enquiry.
                </span>
              </label>

              <button type="submit" className="contact-submit-button">
                Send Enquiry <Send size={17} />
              </button>

              {submitted && (
                <p className="contact-form-notice" role="status">
                  Your email application should open with the enquiry details.
                  Please send the email to complete your enquiry.
                </p>
              )}

              <p className="contact-privacy-note">
                <ShieldCheck size={15} />
                Please do not include sensitive medical information in this
                form.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="contact-location-section">
        <div className="contact-container">
          <div className="contact-location-card">
            <div className="contact-location-copy">
              <span className="contact-eyebrow">PLAN YOUR VISIT</span>
              <h2>Find Your Way to Rehabics</h2>
              <p>
                Add your verified clinic address and map location here so
                patients can plan their visit with confidence.
              </p>

              <div className="contact-location-meta">
                <MapPin size={21} />
                <span>Clinic address to be added</span>
              </div>

              <a
                className="contact-map-link"
                href="https://maps.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                Open Google Maps <ArrowRight size={16} />
              </a>
            </div>

            <div className="contact-map-placeholder">
              <div className="contact-map-decoration">
                <MapPin size={30} />
              </div>
              <h3>Our Clinic Location</h3>
              <p>Add your exact clinic location to display directions here.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-faq-section">
        <div className="contact-container contact-faq-layout">
          <div className="contact-faq-intro">
            <SectionHeading
              eyebrow="QUICK ANSWERS"
              title="Questions Before"
              highlight="You Visit?"
              align="left"
              description="Find answers to common questions about your first visit and appointment enquiry."
            />

            <Link to="/appointment" className="contact-faq-cta">
              Plan an Appointment <ArrowRight size={17} />
            </Link>
          </div>

          <div className="contact-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`contact-faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={19} />
                  </button>

                  {isOpen && <p>{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="YOUR NEXT STEP"
        title="Let Us Help You Move Forward"
        description="Reach out to our team to discuss your questions and plan your next step towards better movement."
        buttonText="Book an Appointment"
        buttonLink="/appointment"
        secondaryText="Explore Services"
        secondaryLink="/services"
      />
    </main>
  );
}

export default Contact;
