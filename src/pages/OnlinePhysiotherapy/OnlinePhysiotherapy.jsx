
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Video,
  Clock3,
  ShieldCheck,
  HeartPulse,
  CalendarCheck,
  ClipboardCheck,
  MonitorSmartphone,
  UserRoundCheck,
  CheckCircle2,
  ArrowRight,
  CircleHelp,
  Activity,
  MessageCircle,
  Laptop,
  Stethoscope,
  PlayCircle,
  ChevronDown,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";

import "./OnlinePhysiotherapy.css";

const benefits = [
  {
    icon: MonitorSmartphone,
    title: "Care from home",
    description:
      "Connect with a physiotherapist from a comfortable and familiar environment.",
  },
  {
    icon: Clock3,
    title: "Flexible scheduling",
    description:
      "Choose an appointment time that works with your daily routine.",
  },
  {
    icon: UserRoundCheck,
    title: "Personal guidance",
    description:
      "Receive exercises and movement guidance based on your individual needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Progress reviews",
    description:
      "Review your movement, discuss concerns and adjust your plan with your therapist.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    description:
      "Ask questions and understand how to practise your recommended exercises safely.",
  },
  {
    icon: HeartPulse,
    title: "Support for daily life",
    description:
      "Learn practical ways to manage movement challenges during everyday activities.",
  },
];

const conditions = [
  {
    title: "Back and neck discomfort",
    description:
      "Movement guidance, posture advice and exercises when appropriate.",
    icon: Activity,
  },
  {
    title: "Joint stiffness",
    description:
      "Guidance for improving comfortable movement and daily function.",
    icon: HeartPulse,
  },
  {
    title: "Sports related concerns",
    description:
      "Initial movement guidance and recovery planning for suitable injuries.",
    icon: Activity,
  },
  {
    title: "Posture and mobility",
    description:
      "Practical advice for movement habits, flexibility and mobility.",
    icon: UserRoundCheck,
  },
  {
    title: "Recovery after treatment",
    description:
      "Follow up support when remote care is suitable for your recovery plan.",
    icon: ShieldCheck,
  },
  {
    title: "Exercise guidance",
    description:
      "Help understanding and performing prescribed exercises correctly.",
    icon: ClipboardCheck,
  },
];

const steps = [
  {
    number: "01",
    title: "Book your session",
    description:
      "Choose a convenient appointment time and share a brief description of your concern.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Meet your therapist",
    description:
      "Join your video consultation and discuss your symptoms, history and goals.",
    icon: Video,
  },
  {
    number: "03",
    title: "Get your care plan",
    description:
      "Receive suitable exercise guidance and practical recommendations for your needs.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Review your progress",
    description:
      "Attend follow up sessions when needed and discuss any changes or difficulties.",
    icon: CheckCircle2,
  },
];

const faqs = [
  {
    question: "What do I need for an online physiotherapy session?",
    answer:
      "You generally need a phone, tablet or computer with a camera, a stable internet connection and a quiet space where you can move comfortably. Your therapist may suggest a chair or other simple equipment.",
  },
  {
    question: "Can online physiotherapy help with my condition?",
    answer:
      "It can help with many movement related concerns, but suitability depends on your symptoms, medical history and individual assessment. Your physiotherapist can discuss whether remote care is appropriate or an in person assessment is needed.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "The duration depends on the type of appointment and your individual needs. Please confirm the expected duration when booking your session.",
  },
  {
    question: "Do I need to exercise during the video call?",
    answer:
      "Your therapist may ask you to demonstrate simple movements if it is safe and relevant. Wear comfortable clothing and ensure you have enough space to move. Do not perform movements that cause severe pain or feel unsafe.",
  },
  {
    question: "Is online physiotherapy a replacement for an in person visit?",
    answer:
      "Not always. Some concerns require a physical examination, hands on assessment or in person treatment. Your therapist can advise you about the most appropriate option.",
  },
];

function OnlinePhysiotherapy() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="online-physio-page">
      <HeroSection
        eyebrow="PHYSIOTHERAPY THAT FITS YOUR LIFE"
        title="Expert Physiotherapy, Wherever You"
        highlight="Feel at Home"
        description="Get personalised movement guidance, exercise support and follow up care through online consultations with a physiotherapist."
        primaryText="Book Online Consultation"
        primaryLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Healthcare professional discussing care with a patient"
        imageLabel="Personalised care, made accessible"
        imageDescription="Connect with a physiotherapist from your own space."
        showStats={false}
        showImage={true}
      />

      <section className="op-trust-strip">
        <div className="op-container op-trust-grid">
          <div className="op-trust-item">
            <Video />
            <span>Convenient video sessions</span>
          </div>
          <div className="op-trust-item">
            <UserRoundCheck />
            <span>Individual care guidance</span>
          </div>
          <div className="op-trust-item">
            <ShieldCheck />
            <span>Care based on your needs</span>
          </div>
        </div>
      </section>

      <section className="op-section op-benefits">
        <div className="op-container">
          <SectionHeading
            eyebrow="WHY CHOOSE ONLINE CARE"
            title="Physiotherapy That Works Around"
            highlight="Your Day"
            description="Get professional guidance without making travel the first step. Online care helps you focus on movement, education and progress from home."
            align="center"
            size="large"
          />

          <div className="op-benefit-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  className="op-benefit-card"
                  key={benefit.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="op-icon-box">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="op-section op-how">
        <div className="op-container op-how-grid">
          <motion.div
            className="op-how-visual"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1100&q=85"
              alt="Healthcare professional preparing for a consultation"
              loading="lazy"
            />

            <div className="op-visual-note">
              <div className="op-visual-note-icon">
                <Video size={20} />
              </div>
              <div>
                <strong>Care that meets you where you are</strong>
                <span>Personal guidance through video consultation</span>
              </div>
            </div>
          </motion.div>

          <div className="op-how-content">
            <SectionHeading
              eyebrow="SIMPLE AND CONVENIENT"
              title="How Online Physiotherapy"
              highlight="Works"
              description="Your journey starts with a conversation. Together, you and your therapist can explore your concerns and discuss the next steps."
              align="left"
              size="large"
            />

            <div className="op-check-list">
              <div>
                <CheckCircle2 />
                <span>Discuss your symptoms and movement goals</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Review suitable movements through video</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Understand your exercise recommendations</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Plan follow up care based on your needs</span>
              </div>
            </div>

            <Link to="/appointment" className="op-primary-button">
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="op-section op-conditions">
        <div className="op-container">
          <SectionHeading
            eyebrow="CARE FOR YOUR MOVEMENT"
            title="When Could Online Physiotherapy"
            highlight="Help?"
            description="Remote consultations may be useful for several movement concerns. Your therapist will first consider whether online care is suitable for you."
            align="center"
            size="large"
          />

          <div className="op-condition-grid">
            {conditions.map((condition, index) => {
              const Icon = condition.icon;

              return (
                <motion.article
                  className="op-condition-card"
                  key={condition.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <div className="op-condition-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{condition.title}</h3>
                    <p>{condition.description}</p>
                  </div>
                  <ArrowRight className="op-condition-arrow" size={18} />
                </motion.article>
              );
            })}
          </div>

          <p className="op-condition-note">
            Online physiotherapy is not suitable for every condition. Your
            therapist may recommend an in person assessment when necessary.
          </p>
        </div>
      </section>

      <section className="op-section op-process">
        <div className="op-container">
          <SectionHeading
            eyebrow="YOUR CARE JOURNEY"
            title="Four Steps Towards Better"
            highlight="Movement"
            description="A clear process helps you understand what to expect before, during and after your consultation."
            align="center"
            size="large"
          />

          <div className="op-process-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="op-process-card"
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="op-process-top">
                    <span className="op-step-number">{step.number}</span>
                    <div className="op-process-icon">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="op-section op-preparation">
        <div className="op-container op-preparation-grid">
          <div className="op-preparation-content">
            <SectionHeading
              eyebrow="BEFORE YOUR SESSION"
              title="Get Ready for Your"
              highlight="Consultation"
              description="A few simple preparations can help your online session run more smoothly."
              align="left"
              size="large"
            />

            <ul className="op-preparation-list">
              <li>
                <CheckCircle2 />
                <span>Keep your phone or computer charged.</span>
              </li>
              <li>
                <CheckCircle2 />
                <span>Choose a quiet space with good lighting.</span>
              </li>
              <li>
                <CheckCircle2 />
                <span>Wear comfortable clothing that allows movement.</span>
              </li>
              <li>
                <CheckCircle2 />
                <span>Keep your relevant medical information available.</span>
              </li>
              <li>
                <CheckCircle2 />
                <span>Prepare a few questions about your concerns.</span>
              </li>
            </ul>
          </div>

          <div className="op-preparation-card">
            <div className="op-preparation-card-icon">
              <Laptop size={27} />
            </div>
            <h3>Your simple session checklist</h3>
            <p>
              A stable internet connection, a camera and enough room to move
              are usually a good place to start.
            </p>
            <div className="op-device-row">
              <span><MonitorSmartphone size={17} /> Phone or tablet</span>
              <span><Video size={17} /> Camera enabled</span>
              <span><Stethoscope size={17} /> Questions ready</span>
            </div>
            <Link to="/appointment" className="op-text-link">
              Plan your appointment <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="op-section op-faq-section">
        <div className="op-container op-faq-layout">
          <div className="op-faq-intro">
            <div className="op-faq-icon">
              <CircleHelp size={28} />
            </div>
            <SectionHeading
              eyebrow="NEED TO KNOW MORE?"
              title="Frequently Asked"
              highlight="Questions"
              description="Find answers to common questions about online physiotherapy and getting started."
              align="left"
              size="large"
            />
            <Link to="/contact" className="op-text-link">
              Still have questions? Contact us <ArrowRight size={17} />
            </Link>
          </div>

          <div className="op-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  className={`op-faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="op-faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={19}
                      className="op-faq-chevron"
                    />
                  </button>

                  {isOpen && (
                    <div className="op-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="op-final-cta">
        <div className="op-container">
          <div className="op-final-cta-inner">
            <div className="op-final-cta-copy">
              <span className="op-final-eyebrow">TAKE YOUR FIRST STEP</span>
              <h2>Make Time for Better Movement</h2>
              <p>
                Start with a conversation about your goals and find out whether
                online physiotherapy is right for you.
              </p>
            </div>

            <div className="op-final-actions">
              <Link to="/appointment" className="op-final-button">
                Book Your Appointment <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="op-final-secondary">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OnlinePhysiotherapy;
