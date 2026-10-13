
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

import "./Contact.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CTASection from "../../components/CTASection/CTASection";

const contactDetails = [
  {
    icon: Phone,
    title: "Call our team",
    description: "Speak with us about your care and appointments.",
    value: "Add your phone number",
    href: null,
  },
  {
    icon: Mail,
    title: "Email us",
    description: "Send your questions and general enquiries.",
    value: "Add your email address",
    href: null,
  },
  {
    icon: MapPin,
    title: "Visit our clinic",
    description: "Find us and plan your visit.",
    value: "Add your clinic address",
    href: null,
  },
  {
    icon: Clock,
    title: "Clinic hours",
    description: "Contact our team to confirm availability.",
    value: "Add your working hours",
    href: null,
  },
];

const faqs = [
  {
    question: "How can I book a physiotherapy appointment?",
    answer:
      "Send us a message using the form on this page or contact our team directly. We can help you understand the available appointment options.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Bring any relevant medical reports, previous assessment notes and a list of medicines if applicable. Comfortable clothing can help during movement assessments.",
  },
  {
    question: "Can I ask a question before booking?",
    answer:
      "Yes. Use the contact form to share your general enquiry. Our team can help you understand the next steps and available services.",
  },
  {
    question: "Can I receive physiotherapy online?",
    answer:
      "Online physiotherapy may be suitable for some concerns. Our team can discuss whether a remote consultation may be appropriate for your needs.",
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Rehabics enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Service: ${formData.service || "Not selected"}\n\n` +
        `Message:\n${formData.message}`
    );

    const emailAddress = "yourclinic@example.com";

    window.location.href =
      `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <main className="rcPage">
      <HeroSection
        eyebrow="WE ARE HERE TO HELP"
        title="Let’s start"
        highlight="a conversation."
        description="Have a question about physiotherapy, recovery or our services? Reach out to our team and take the next step towards better movement."
        buttonText="Send an Enquiry"
        buttonLink="#contactForm"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
        image="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
        imageAlt="Physiotherapist supporting a patient during a rehabilitation session"
        imageLabel="Your wellbeing matters"
        imageDescription="Personal guidance for your movement journey"
        features={[
          "Friendly support from our team",
          "Guidance about available services",
          "Help with your appointment enquiry",
        ]}
      />

      <section className="rcIntro rhSection">
        <div className="rhContainer">
          <div className="rcIntroContent">
            <span className="rhEyebrow">GET IN TOUCH</span>
            <h2 className="rhSectionHeading">
              We would love to
              <span> hear from you.</span>
            </h2>
            <p>
              Tell us what you need help with. We will help you find the right
              information and understand your next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="rcDetails rhSection">
        <div className="rhContainer">
          <div className="rcDetailsGrid">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="rcDetailCard"
                  key={item.title}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 18 }
                  }
                  whileInView={
                    reduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                >
                  <div className="rcDetailIcon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="rcDetailValue">{item.value}</span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rcFormSection rhSection" id="contactForm">
        <div className="rhContainer">
          <div className="rcFormLayout">
            <div className="rcFormAside">
              <span className="rhEyebrow">CONTACT REHABICS</span>
              <h2 className="rhSectionHeading">
                Tell us how
                <span> we can help.</span>
              </h2>

              <p>
                Complete the form with your details and enquiry. Share only
                the information needed for our team to understand your request.
              </p>

              <div className="rcAsideNote">
                <div className="rcAsideNoteIcon">
                  <MessageCircle size={21} />
                </div>
                <div>
                  <h3>Not sure where to begin?</h3>
                  <p>
                    Tell us about your general concern and ask which service
                    may be suitable for you.
                  </p>
                </div>
              </div>

              <div className="rcTrustList">
                <div>
                  <CheckCircle2 size={17} />
                  <span>Clear communication</span>
                </div>
                <div>
                  <CheckCircle2 size={17} />
                  <span>Guidance about available services</span>
                </div>
                <div>
                  <CheckCircle2 size={17} />
                  <span>Support with appointment enquiries</span>
                </div>
              </div>
            </div>

            <form className="rcContactForm" onSubmit={handleSubmit}>
              <div className="rcFormHeading">
                <span className="rhEyebrow">SEND AN ENQUIRY</span>
                <h3>How can we help you?</h3>
                <p>Fields marked with an asterisk are required.</p>
              </div>

              <div className="rcFieldGrid">
                <label className="rcField">
                  <span>Full name *</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="rcField">
                  <span>Email address *</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="rcField">
                  <span>Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </label>

                <label className="rcField">
                  <span>Service of interest</span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Choose a service</option>
                    <option value="Physiotherapy">
                      Physiotherapy
                    </option>
                    <option value="Online Physiotherapy">
                      Online Physiotherapy
                    </option>
                    <option value="Pain Management">
                      Pain Management
                    </option>
                    <option value="Movement and Mobility">
                      Movement and Mobility
                    </option>
                    <option value="General Enquiry">
                      General Enquiry
                    </option>
                  </select>
                </label>
              </div>

              <label className="rcField rcMessageField">
                <span>Your message *</span>
                <textarea
                  name="message"
                  placeholder="Tell us briefly how we can help"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </label>

              <p className="rcPrivacyNote">
                Please do not include sensitive medical or personal
                information in this form.
              </p>

              <button type="submit" className="rcSubmitButton">
                Send Enquiry
                <Send size={16} />
              </button>

              {submitted && (
                <p className="rcFormFeedback" role="status">
                  Your email application has been opened. Please review and
                  send the message from your email application.
                </p>
              )}

              <p className="rcFormDisclaimer">
                This form opens your email application. It does not send
                information directly to our servers.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="rcVisitSection rhSection">
        <div className="rhContainer">
          <div className="rcVisitCard">
            <div className="rcVisitContent">
              <span className="rhEyebrow">PLAN YOUR VISIT</span>
              <h2 className="rhSectionHeading">
                Your next step starts
                <span> with a conversation.</span>
              </h2>
              <p>
                Contact us to confirm the clinic location, working hours and
                available appointment options before your visit.
              </p>

              <a href="#contactForm" className="rcVisitLink">
                Send an Enquiry
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="rcVisitVisual">
              <img
                src="https://images.pexels.com/photos/7659560/pexels-photo-7659560.jpeg"
                alt="Healthcare professional assisting a patient"
                loading="lazy"
              />
              <div className="rcVisitImageLabel">
                <MapPin size={17} />
                <span>Find the care that suits you</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rcFaqSection rhSection">
        <div className="rhContainer">
          <div className="rcFaqLayout">
            <div className="rcFaqIntro">
              <span className="rhEyebrow">COMMON QUESTIONS</span>
              <h2 className="rhSectionHeading">
                A few things
                <span> you may want to know.</span>
              </h2>
              <p>
                Find answers to common questions before contacting our team.
              </p>
            </div>

            <div className="rcFaqList">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div className="rcFaqItem" key={faq.question}>
                    <button
                      type="button"
                      className="rcFaqQuestion"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenFaq(isOpen ? -1 : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={19}
                        className={isOpen ? "rcFaqChevron open" : "rcFaqChevron"}
                      />
                    </button>

                    {isOpen && (
                      <div className="rcFaqAnswer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="TAKE THE NEXT STEP"
        title="Ready to talk about your care?"
        description="Reach out to our team to discuss your questions and explore the available options for your needs."
        buttonText="Book an Appointment"
        buttonLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
      />
    </main>
  );
}
