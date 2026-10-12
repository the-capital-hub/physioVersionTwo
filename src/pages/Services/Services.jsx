import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Activity,
  HeartPulse,
  Dumbbell,
  Bone,
  Accessibility,
  Brain,
  ShieldCheck,
  UserRoundCheck,
  CalendarCheck,
  ClipboardCheck,
  ChevronDown,
  MoveRight,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";

import "./Services.css";

const services = [
  {
    number: "01",
    icon: Activity,
    title: "Back and Neck Pain",
    category: "PAIN MANAGEMENT",
    description:
      "Personalised physiotherapy to help manage back pain, neck stiffness, posture related discomfort and movement limitations.",
    benefits: [
      "Improve flexibility and mobility",
      "Build strength and stability",
      "Learn better movement habits",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    alt: "Physiotherapist guiding a patient through treatment",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Sports Injury Rehabilitation",
    category: "ACTIVE RECOVERY",
    description:
      "Structured rehabilitation designed to support recovery from sports injuries and help you return to physical activities safely.",
    benefits: [
      "Restore strength and control",
      "Improve balance and coordination",
      "Build confidence during recovery",
    ],
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85",
    alt: "Athlete performing a fitness exercise",
  },
  {
    number: "03",
    icon: Bone,
    title: "Joint and Mobility Care",
    category: "BETTER MOVEMENT",
    description:
      "Support for joint stiffness, reduced flexibility and everyday movement difficulties through guided exercises and individual care.",
    benefits: [
      "Improve joint movement",
      "Develop everyday strength",
      "Support comfortable movement",
    ],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
    alt: "Person performing a guided mobility exercise",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Post Surgical Rehabilitation",
    category: "RECOVERY SUPPORT",
    description:
      "A progressive rehabilitation plan designed around your procedure, recovery stage and the guidance of your treating clinician.",
    benefits: [
      "Follow a structured recovery plan",
      "Gradually rebuild strength",
      "Work towards daily activities",
    ],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85",
    alt: "Patient working on a supervised rehabilitation exercise",
  },
  {
    number: "05",
    icon: Accessibility,
    title: "Geriatric Physiotherapy",
    category: "HEALTHY AGEING",
    description:
      "Individualised care for older adults to support balance, mobility, strength and greater confidence with everyday activities.",
    benefits: [
      "Practice balance and stability",
      "Maintain functional strength",
      "Support independent movement",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85",
    alt: "Person practising a gentle guided movement exercise",
  },
  {
    number: "06",
    icon: Brain,
    title: "Neurological Rehabilitation",
    category: "FUNCTIONAL RECOVERY",
    description:
      "Guided rehabilitation focused on movement, coordination, balance and functional goals for people with neurological conditions.",
    benefits: [
      "Practise functional movements",
      "Work on balance and coordination",
      "Build a personalised exercise routine",
    ],
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85",
    alt: "Healthcare professional assisting with a recovery session",
  },
];

const careSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Understand Your Needs",
    description:
      "Discuss your concerns, health history, movement difficulties and personal recovery goals.",
  },
  {
    number: "02",
    icon: UserRoundCheck,
    title: "Personalised Assessment",
    description:
      "Your physiotherapist evaluates relevant movement, strength and functional abilities.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Your Care Plan",
    description:
      "Receive a structured plan with suitable exercises, guidance and realistic milestones.",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Review Your Progress",
    description:
      "Review progress with your physiotherapist and adjust your plan when needed.",
  },
];

const approachFeatures = [
  {
    icon: UserRoundCheck,
    title: "Individual Attention",
    description:
      "Care recommendations are shaped around your needs, abilities and goals.",
  },
  {
    icon: ShieldCheck,
    title: "Guided Recovery",
    description:
      "Understand each exercise and how it supports your rehabilitation plan.",
  },
  {
    icon: Activity,
    title: "Movement Focus",
    description:
      "Work towards improving strength, mobility and everyday function.",
  },
  {
    icon: HeartPulse,
    title: "Progress Reviews",
    description:
      "Review your progress and discuss the next steps with your physiotherapist.",
  },
];

const faqs = [
  {
    question: "How do I choose the right physiotherapy service?",
    answer:
      "Start by discussing your symptoms, medical history and goals with a qualified physiotherapist. They can assess your needs and recommend an appropriate care plan.",
  },
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Booking an appointment is recommended so the team can understand your needs and plan your consultation. Contact Rehabics to discuss available appointment options.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your condition, goals, progress and clinical assessment. Your physiotherapist can discuss a suitable plan with you.",
  },
  {
    question: "Can physiotherapy help with long term pain?",
    answer:
      "Physiotherapy may help improve movement, strength and daily function for some persistent pain conditions. The appropriate approach depends on your individual assessment.",
  },
  {
    question: "Can I exercise between sessions?",
    answer:
      "Your physiotherapist may recommend suitable home exercises based on your assessment. Follow their guidance and discuss any new or worsening symptoms before continuing.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Bring relevant medical reports, prescriptions or scan results if available, along with a list of medicines and details about your symptoms.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      className="services-card"
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="services-card-image">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
        />

        <span className="services-card-number">
          {service.number}
        </span>

        <span className="services-card-category">
          {service.category}
        </span>
      </div>

      <div className="services-card-content">
        <div className="services-card-icon">
          <Icon size={23} strokeWidth={1.8} />
        </div>

        <h3>{service.title}</h3>

        <p className="services-card-description">
          {service.description}
        </p>

        <div className="services-card-benefits">
          {service.benefits.map((benefit) => (
            <div className="services-benefit" key={benefit}>
              <CheckCircle2 size={16} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <Link
          to="/appointment"
          className="services-card-link"
          aria-label={`Book an appointment for ${service.title}`}
        >
          Discuss Your Needs
          <ArrowRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}

function Services() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="services-page">
      {/* Hero Section */}

      <HeroSection
        eyebrow="OUR PHYSIOTHERAPY SERVICES"
        title="Care That Helps You"
        highlight="Move Better"
        description="Explore personalised physiotherapy services designed to support pain management, improve mobility and help you work towards a more active life."
        primaryText="Book Your Appointment"
        primaryLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="#all-services"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Physiotherapist supporting a patient during rehabilitation"
        imageLabel="PERSONALISED PHYSIOTHERAPY"
        imageDescription="Professional guidance shaped around your recovery goals"
        showStats={false}
        showImage={true}
      />

      {/* Introduction */}

      <section className="services-introduction">
        <div className="services-container">
          <motion.div
            className="services-intro-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.span
              className="services-eyebrow"
              variants={itemVariants}
            >
              CARE THAT STARTS WITH YOU
            </motion.span>

            <motion.h2 variants={itemVariants}>
              Every recovery journey deserves{" "}
              <span>the right support.</span>
            </motion.h2>

            <motion.p variants={itemVariants}>
              Pain, stiffness or limited movement can affect the
              activities that matter to you. Our approach starts
              with understanding your concerns and identifying
              suitable steps towards better movement.
            </motion.p>

            <motion.div
              className="services-intro-note"
              variants={itemVariants}
            >
              <CheckCircle2 size={19} />
              <span>
                Individual care guided by assessment and your goals
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="services-intro-panel"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="services-intro-panel-icon">
              <HeartPulse size={27} />
            </div>

            <span className="services-panel-label">
              OUR CARE PHILOSOPHY
            </span>

            <h3>
              Understand your body. Work towards better movement.
            </h3>

            <p>
              We focus on clear guidance, appropriate exercises
              and meaningful progress throughout your care journey.
            </p>

            <Link to="/about" className="services-text-link">
              Discover Rehabics
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Services */}

      <section
        className="services-list-section"
        id="all-services"
      >
        <div className="services-container">
          <SectionHeading
            eyebrow="HOW WE CAN HELP"
            title="Physiotherapy for"
            highlight="Your Needs"
            description="Explore our care areas and find out how physiotherapy may support your movement and recovery goals."
            align="center"
            size="large"
          />

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {services.map((service, index) => (
              <ServiceCard
                service={service}
                index={index}
                key={service.number}
              />
            ))}
          </motion.div>

          <p className="services-grid-note">
            Your suitability for treatment will be discussed
            during an individual assessment.
          </p>
        </div>
      </section>

      {/* Our Approach */}

      <section className="services-approach-section">
        <div className="services-container services-approach-layout">
          <motion.div
            className="services-approach-visual"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1100&q=85"
              alt="Guided movement practice in a physiotherapy setting"
              loading="lazy"
            />

            <div className="services-visual-caption">
              <span className="services-caption-icon">
                <Activity size={21} />
              </span>

              <div>
                <strong>Movement With Purpose</strong>
                <p>Care built around your individual goals</p>
              </div>
            </div>
          </motion.div>

          <div className="services-approach-copy">
            <SectionHeading
              eyebrow="THE REHABICS APPROACH"
              title="Care that looks beyond"
              highlight="the symptoms"
              description="Physiotherapy is about more than a single exercise. It is about understanding your needs and working towards the activities you want to enjoy."
              align="left"
              size="large"
            />

            <div className="services-approach-features">
              {approachFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    className="services-approach-feature"
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                  >
                    <div className="services-feature-icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Care Journey */}

      <section className="services-journey-section">
        <div className="services-container">
          <SectionHeading
            eyebrow="YOUR CARE JOURNEY"
            title="A clearer path to"
            highlight="better movement"
            description="Understand the steps that may form part of your physiotherapy journey."
            align="center"
            size="large"
          />

          <motion.div
            className="services-journey-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {careSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="services-journey-card"
                  variants={itemVariants}
                  key={step.number}
                >
                  <div className="services-journey-top">
                    <span>{step.number}</span>

                    <div className="services-journey-icon">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="services-journey-action">
            <Link
              to="/appointment"
              className="services-primary-button"
            >
              Start Your Journey
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* First Appointment */}

      <section className="services-appointment-section">
        <div className="services-container">
          <div className="services-appointment-box">
            <div className="services-appointment-content">
              <span className="services-eyebrow">
                YOUR FIRST VISIT
              </span>

              <h2>
                Start with a conversation about your goals.
              </h2>

              <p>
                Tell us what you are experiencing, what activities
                are difficult and what you hope to achieve. Your
                physiotherapist can help you understand suitable
                next steps.
              </p>

              <Link
                to="/appointment"
                className="services-primary-button"
              >
                Book Your Appointment
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="services-appointment-checklist">
              <h3>Helpful things to bring</h3>

              {[
                "Relevant medical reports",
                "Current prescriptions if available",
                "Details about your symptoms",
                "Questions about your recovery goals",
              ].map((item) => (
                <div
                  className="services-checklist-item"
                  key={item}
                >
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}

      <section className="services-faq-section">
        <div className="services-container services-faq-layout">
          <div className="services-faq-intro">
            <SectionHeading
              eyebrow="COMMON QUESTIONS"
              title="Things you may"
              highlight="want to know"
              description="Learn more about choosing a service, preparing for your visit and understanding your care plan."
              align="left"
              size="large"
            />

            <Link
              to="/contact"
              className="services-text-link"
            >
              Have another question?
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="services-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  className={`services-faq-item ${
                    isOpen ? "is-open" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    className="services-faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setActiveFaq(isOpen ? -1 : index)
                    }
                  >
                    <span>{faq.question}</span>

                    <ChevronDown
                      size={20}
                      className="services-faq-chevron"
                    />
                  </button>

                  {isOpen && (
                    <div className="services-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Medical Note */}

      <section className="services-medical-note">
        <div className="services-container services-medical-note-inner">
          <ShieldCheck size={21} />

          <p>
            Treatment recommendations depend on your individual
            assessment and medical history. Seek urgent medical
            attention for severe or sudden symptoms.
          </p>
        </div>
      </section>

      {/* Reusable CTA Section */}

      <CTASection
        eyebrow="YOUR JOURNEY STARTS HERE"
        title="Ready to Move Better and Live Better?"
        description="Take the first step towards better movement and a healthier life. Our physiotherapy team is here to help you."
        buttonText="Book Your Appointment"
        buttonLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="#all-services"
      />
    </main>
  );
}

export default Services;