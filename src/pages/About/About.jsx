
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Target,
  Eye,
  UsersRound,
  ShieldCheck,
  Activity,
  HandHeart,
  ClipboardCheck,
  Stethoscope,
  CalendarCheck,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";

import "./About.css";

const values = [
  {
    icon: HeartPulse,
    number: "01",
    title: "Patient First",
    description:
      "We begin by listening to your concerns and understanding the activities that matter most to you.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Thoughtful Care",
    description:
      "We value careful assessment, clear guidance and suitable care recommendations for each individual.",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Care Together",
    description:
      "We believe good communication helps patients understand their care and participate in their recovery.",
  },
  {
    icon: Activity,
    number: "04",
    title: "Everyday Movement",
    description:
      "We focus on practical movement goals that can support your daily activities and independence.",
  },
];

const journey = [
  {
    number: "01",
    icon: HandHeart,
    title: "We Listen",
    description:
      "Share your concerns, symptoms and the goals you would like to work towards.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "We Assess",
    description:
      "A suitable assessment helps your physiotherapist understand your movement and individual needs.",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "We Plan",
    description:
      "Discuss a care plan with appropriate exercises, guidance and achievable milestones.",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "We Review",
    description:
      "Review your progress and discuss any changes needed as your needs evolve.",
  },
];

const faqs = [
  {
    question: "What is Rehabics?",
    answer:
      "Rehabics is a physiotherapy focused brand centred on movement, rehabilitation guidance and individual care. Contact the team to learn about the services available to you.",
  },
  {
    question: "What makes the Rehabics approach different?",
    answer:
      "Our approach emphasises listening to individual concerns, understanding personal goals and discussing suitable care options with a qualified physiotherapist.",
  },
  {
    question: "Who can benefit from physiotherapy?",
    answer:
      "People experiencing pain, stiffness, mobility difficulties or recovery needs may benefit from an assessment. A qualified professional can help determine which approach is appropriate.",
  },
  {
    question: "How do I get started?",
    answer:
      "Visit our appointment page or contact our team to discuss your concerns and available consultation options.",
  },
  {
    question: "Will my care plan be personalised?",
    answer:
      "Care recommendations can be tailored to your assessment, health history, abilities and goals. Your physiotherapist can explain the options suitable for you.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function About() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="about-page">
      {/* Hero */}

      <HeroSection
        eyebrow="GET TO KNOW REHABICS"
        title="Helping You Move"
        highlight="Towards Better Living"
        description="Every movement matters. Discover our approach to physiotherapy, personalised care and helping people work towards the activities that make life meaningful."
        primaryText="Book Your Appointment"
        primaryLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Healthcare professional supporting a patient"
        imageLabel="CARE THAT STARTS WITH YOU"
        imageDescription="Your goals are an important part of your care journey"
        showStats={false}
        showImage={true}
      />

      {/* Brand Introduction */}

      <section className="about-intro">
        <div className="about-container about-intro-grid">
          <motion.div
            className="about-intro-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.span className="about-eyebrow" variants={fadeUp}>
              OUR STORY
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Better movement begins with{" "}
              <span>understanding you.</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Every person has different needs, challenges and
              goals. Physiotherapy should recognise those
              differences and provide guidance that makes sense
              for the individual.
            </motion.p>

            <motion.p variants={fadeUp}>
              Rehabics is built around a simple idea: listen
              carefully, understand movement challenges and help
              people explore suitable steps towards better
              function and everyday confidence.
            </motion.p>

            <motion.div className="about-intro-points" variants={fadeUp}>
              <span>
                <CheckCircle2 size={18} />
                Individual needs
              </span>

              <span>
                <CheckCircle2 size={18} />
                Guided care
              </span>

              <span>
                <CheckCircle2 size={18} />
                Meaningful goals
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-intro-visual"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85"
              alt="Healthcare professional discussing rehabilitation"
              loading="lazy"
            />

            <div className="about-image-note">
              <span className="about-note-icon">
                <HeartPulse size={22} />
              </span>

              <div>
                <strong>Care With Purpose</strong>
                <p>Focused on your individual journey</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}

      <section className="about-purpose">
        <div className="about-container">
          <SectionHeading
            eyebrow="OUR PURPOSE"
            title="Why"
            highlight="Rehabics"
            description="The principles that guide how we think about movement, rehabilitation and individual care."
            align="center"
            size="large"
          />

          <div className="about-purpose-grid">
            <motion.article
              className="about-purpose-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="about-purpose-icon">
                <Target size={26} />
              </div>

              <span className="about-purpose-label">OUR MISSION</span>

              <h3>Make care more personal</h3>

              <p>
                Our mission is to support people through thoughtful
                physiotherapy guidance, accessible information
                and care recommendations that reflect their needs
                and goals.
              </p>
            </motion.article>

            <motion.article
              className="about-purpose-card about-purpose-card-featured"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              variants={fadeUp}
            >
              <div className="about-purpose-icon">
                <Eye size={26} />
              </div>

              <span className="about-purpose-label">OUR VISION</span>

              <h3>Help people move with confidence</h3>

              <p>
                Our vision is to encourage a future where people
                can better understand their movement, take an
                active role in their care and work towards the
                activities that matter to them.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Core Values */}

      <section className="about-values">
        <div className="about-container">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title="The values behind"
            highlight="our care"
            description="The principles we aim to bring to every interaction, care discussion and recovery goal."
            align="center"
            size="large"
          />

          <motion.div
            className="about-values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.article
                  className="about-value-card"
                  variants={fadeUp}
                  key={value.number}
                  whileHover={{ y: -5 }}
                >
                  <div className="about-value-top">
                    <div className="about-value-icon">
                      <Icon size={23} />
                    </div>

                    <span>{value.number}</span>
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Care Philosophy */}

      <section className="about-philosophy">
        <div className="about-container about-philosophy-grid">
          <motion.div
            className="about-philosophy-visual"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1100&q=85"
              alt="Guided movement and flexibility practice"
              loading="lazy"
            />

            <div className="about-visual-badge">
              <Sparkles size={19} />
              <span>Every person. Every goal.</span>
            </div>
          </motion.div>

          <div className="about-philosophy-copy">
            <SectionHeading
              eyebrow="OUR CARE PHILOSOPHY"
              title="Recovery is personal."
              highlight="Your care should be too."
              description="We believe that good physiotherapy begins with understanding the person, not just the symptoms."
              align="left"
              size="large"
            />

            <div className="about-philosophy-list">
              <div className="about-philosophy-item">
                <span className="about-list-number">01</span>

                <div>
                  <h3>Listen before recommending</h3>
                  <p>
                    Understand the concerns, daily challenges and
                    goals that bring each person to physiotherapy.
                  </p>
                </div>
              </div>

              <div className="about-philosophy-item">
                <span className="about-list-number">02</span>

                <div>
                  <h3>Explain the next steps</h3>
                  <p>
                    Help people understand their care options and
                    the purpose of recommended exercises.
                  </p>
                </div>
              </div>

              <div className="about-philosophy-item">
                <span className="about-list-number">03</span>

                <div>
                  <h3>Review progress together</h3>
                  <p>
                    Encourage open communication and review goals
                    as care needs and abilities change.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/services" className="about-primary-link">
              Explore Our Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Journey */}

      <section className="about-journey">
        <div className="about-container">
          <SectionHeading
            eyebrow="YOUR JOURNEY WITH REHABICS"
            title="A thoughtful approach"
            highlight="at every step"
            description="Here is how a physiotherapy care journey may progress, depending on your individual needs."
            align="center"
            size="large"
          />

          <motion.div
            className="about-journey-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {journey.map((step) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="about-journey-card"
                  variants={fadeUp}
                  key={step.number}
                >
                  <div className="about-journey-top">
                    <span>{step.number}</span>

                    <div className="about-journey-icon">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="about-journey-footer">
            <p>
              Your care plan depends on your assessment and
              individual circumstances.
            </p>

            <Link to="/appointment" className="about-primary-link">
              Take the First Step
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Link */}

      <section className="about-services-prompt">
        <div className="about-container about-services-prompt-inner">
          <div className="about-services-prompt-icon">
            <Activity size={28} />
          </div>

          <div className="about-services-prompt-copy">
            <span className="about-eyebrow">FIND YOUR NEXT STEP</span>

            <h2>Explore care that fits your needs.</h2>

            <p>
              Learn about our physiotherapy service areas and
              discuss suitable options with our team.
            </p>
          </div>

          <Link to="/services" className="about-primary-link">
            View Services
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FAQs */}

      <section className="about-faq">
        <div className="about-container about-faq-grid">
          <div className="about-faq-intro">
            <SectionHeading
              eyebrow="GOOD TO KNOW"
              title="Frequently asked"
              highlight="questions"
              description="A few helpful answers about our approach and getting started."
              align="left"
              size="large"
            />

            <Link to="/contact" className="about-primary-link">
              Contact Our Team
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="about-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  className={`about-faq-item ${
                    isOpen ? "is-open" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="about-faq-question"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setActiveFaq(isOpen ? -1 : index)
                    }
                  >
                    <span>{faq.question}</span>

                    <ChevronDown
                      size={20}
                      className="about-faq-chevron"
                    />
                  </button>

                  {isOpen && (
                    <div className="about-faq-answer">
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

      <section className="about-disclaimer">
        <div className="about-container about-disclaimer-inner">
          <ShieldCheck size={21} />

          <p>
            Information on this page is general in nature and
            does not replace an individual clinical assessment
            or professional medical advice.
          </p>
        </div>
      </section>

      {/* Shared CTA */}

      <CTASection
        eyebrow="YOUR JOURNEY STARTS HERE"
        title="Ready to Move Better and Live Better?"
        description="Take the first step towards better movement. Our team can help you explore the next steps for your physiotherapy journey."
        buttonText="Book Your Appointment"
        buttonLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
      />
    </main>
  );
}

export default About;
