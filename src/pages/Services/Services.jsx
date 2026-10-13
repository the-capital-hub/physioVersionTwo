
import React from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Bone,
  Brain,
  CheckCircle2,
  HeartPulse,
  PersonStanding,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Timer,
  Video,
} from "lucide-react";

import "./Services.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CTASection from "../../components/CTASection/CTASection";
import servicesImg from '../../assets/services.png'
const services = [
  {
    icon: Activity,
    number: "01",
    title: "Personalised Physiotherapy",
    description:
      "Individual treatment plans designed around your movement, comfort, goals and recovery needs.",
    tags: ["Movement assessment", "Recovery planning"],
  },
  {
    icon: Bone,
    number: "02",
    title: "Musculoskeletal Care",
    description:
      "Support for joint pain, muscle stiffness, back discomfort and movement limitations.",
    tags: ["Joint mobility", "Pain management"],
  },
  {
    icon: PersonStanding,
    number: "03",
    title: "Sports Rehabilitation",
    description:
      "Progressive rehabilitation to help you rebuild strength, improve mobility and return to activity.",
    tags: ["Strength building", "Movement training"],
  },
  {
    icon: Brain,
    number: "04",
    title: "Neurological Rehabilitation",
    description:
      "Guided rehabilitation focused on balance, coordination, functional movement and independence.",
    tags: ["Balance training", "Functional mobility"],
  },
  {
    icon: HeartPulse,
    number: "05",
    title: "Post Surgery Rehabilitation",
    description:
      "Structured recovery support to help you gradually regain movement and confidence after surgery.",
    tags: ["Guided exercises", "Progress tracking"],
  },
  {
    icon: Video,
    number: "06",
    title: "Online Physiotherapy",
    description:
      "Connect with a physiotherapist remotely and receive guided support from the comfort of home.",
    tags: ["Online consultation", "Home exercise guidance"],
  },
];

const benefits = [
  "Care tailored to your individual goals",
  "Clear guidance at every stage of recovery",
  "Exercises suited to your ability and progress",
  "Support to build confidence in everyday movement",
];

const steps = [
  {
    icon: Stethoscope,
    title: "Understand your needs",
    description:
      "Discuss your concerns, movement goals and daily challenges with your physiotherapist.",
  },
  {
    icon: Activity,
    title: "Build your care plan",
    description:
      "Receive a personalised approach based on your assessment and recovery priorities.",
  },
  {
    icon: Timer,
    title: "Progress with guidance",
    description:
      "Follow your plan, review your progress and adjust your exercises when needed.",
  },
];

export default function Services() {
  return (
    <main className="rh-services-page">
      <HeroSection
  eyebrow="OUR SERVICES"
  title="Care That Helps You Move With Confidence"
  description="Explore personalised physiotherapy services designed to support better movement, recovery and everyday wellbeing."
  primaryButton="Explore Services"
  primaryLink="#service-list"
  secondaryButton="Book Appointment"
  secondaryLink="/appointment"
  image= {servicesImg}
/>

      <section className="rh-services-intro">
        <div className="rh-services-container rh-services-intro-grid">
          <div className="rh-services-intro-copy">
            <span className="rh-services-eyebrow">
              YOUR RECOVERY, YOUR GOALS
            </span>

            <h2>
              Physiotherapy that puts <em>you first.</em>
            </h2>

            <p>
              Every person moves differently. We focus on understanding your
              needs and helping you work towards meaningful progress through
              thoughtful guidance and personalised care.
            </p>

            <Link to="/about" className="rh-services-text-link">
              Get to know Rehabics
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="rh-services-intro-visual">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
              alt="Physiotherapist supporting a patient during a consultation"
              loading="lazy"
            />

            <div className="rh-services-image-note">
              <span className="rh-services-note-icon">
                <HeartPulse size={21} aria-hidden="true" />
              </span>
              <div>
                <strong>Care built around you</strong>
                <span>Personal attention at every step</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="rh-services-list-section"
        id="service-list"
      >
        <div className="rh-services-container">
          <div className="rh-services-section-heading">
            <span className="rh-services-eyebrow">HOW WE CAN HELP</span>
            <h2>Explore our <em>services</em></h2>
            <p>
              Find the right kind of support for your movement, recovery and
              daily activity goals.
            </p>
          </div>

          <div className="rh-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="rh-service-card"
                  key={service.number}
                >
                  <div className="rh-service-card-top">
                    <span className="rh-service-icon">
                      <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="rh-service-number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="rh-service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link
                    to="/appointment"
                    className="rh-service-card-link"
                    aria-label={`Book an appointment for ${service.title}`}
                  >
                    Discuss this service
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rh-services-approach">
        <div className="rh-services-container rh-services-approach-grid">
          <div className="rh-services-approach-visual">
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1100&q=85"
              alt="Physiotherapy professional guiding a rehabilitation exercise"
              loading="lazy"
            />
            <div className="rh-services-visual-badge">
              <Sparkles size={19} aria-hidden="true" />
              <span>A thoughtful approach to recovery</span>
            </div>
          </div>

          <div className="rh-services-approach-copy">
            <span className="rh-services-eyebrow">THE REHABICS APPROACH</span>
            <h2>
              Your journey deserves <em>personal attention.</em>
            </h2>
            <p>
              Good physiotherapy is about more than exercises. It is about
              understanding your concerns, setting realistic goals and
              supporting you as you make progress.
            </p>

            <ul className="rh-services-benefit-list">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={19} aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to="/appointment" className="rh-services-button">
              Start Your Journey
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="rh-services-process">
        <div className="rh-services-container">
          <div className="rh-services-section-heading">
            <span className="rh-services-eyebrow">A CLEAR PATH FORWARD</span>
            <h2>How your care <em>works</em></h2>
            <p>
              A simple, guided process that keeps your needs at the centre of
              every decision.
            </p>
          </div>

          <div className="rh-services-steps">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="rh-services-step" key={step.title}>
                  <div className="rh-services-step-top">
                    <span className="rh-services-step-icon">
                      <Icon size={23} aria-hidden="true" />
                    </span>
                    <span className="rh-services-step-number">
                      STEP {index + 1}
                    </span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rh-services-trust">
        <div className="rh-services-container rh-services-trust-inner">
          <div className="rh-services-trust-icon">
            <ShieldCheck size={28} aria-hidden="true" />
          </div>

          <div className="rh-services-trust-copy">
            <h2>Care guided by your needs</h2>
            <p>
              Your treatment plan should reflect your goals, comfort and
              individual circumstances. Your physiotherapist can help you
              understand suitable options for your needs.
            </p>
          </div>

          <Link to="/appointment" className="rh-services-trust-link">
            Talk to us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTASection
        eyebrow="TAKE THE NEXT STEP"
        title="Ready to Move Better?"
        description="Let us help you explore the right physiotherapy support for your goals."
        buttonText="Book Your Appointment"
        buttonLink="/appointment"
      />
    </main>
  );
}
