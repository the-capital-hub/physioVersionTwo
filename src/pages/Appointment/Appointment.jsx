
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  UserRound,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  Phone,
  Mail,
  MapPin,
  ClipboardCheck,
  RotateCcw,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";
import "./Appointment.css";

const services = [
  {
    title: "Musculoskeletal Physiotherapy",
    description: "Support for joint, muscle and movement concerns",
    icon: HeartPulse,
  },
  {
    title: "Sports Rehabilitation",
    description: "Guided recovery and return to activity",
    icon: ActivityIcon,
  },
  {
    title: "Post Surgery Rehabilitation",
    description: "Support with recovery after surgery",
    icon: ClipboardCheck,
  },
  {
    title: "Neurological Physiotherapy",
    description: "Movement support tailored to individual needs",
    icon: UserRound,
  },
];

function ActivityIcon({ size = 24, strokeWidth = 2 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </svg>
  );
}

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const steps = [
  { number: 1, title: "Treatment", icon: HeartPulse },
  { number: 2, title: "Date and Time", icon: CalendarDays },
  { number: 3, title: "Your Details", icon: UserRound },
];

function getToday() {
  const date = new Date();
  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  );
  return localDate.toISOString().split("T")[0];
}

function Appointment() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patient, setPatient] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "",
    consent: false,
  });
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const updatePatient = (event) => {
    const { name, value, type, checked } = event.target;

    setPatient((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const goNext = () => {
    setError("");

    if (step === 1 && !selectedService) {
      setError("Please select a treatment to continue.");
      return;
    }

    if (step === 2 && (!selectedDate || !selectedTime)) {
      setError("Please select your preferred date and time.");
      return;
    }

    setStep((previous) => Math.min(previous + 1, 3));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!patient.name.trim() || !patient.phone.trim() || !patient.email.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    if (!patient.consent) {
      setError("Please agree to be contacted about your enquiry.");
      return;
    }

    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
    setPatient({
      name: "",
      phone: "",
      email: "",
      concern: "",
      consent: false,
    });
    setConfirmed(false);
    setError("");
  };

  return (
    <main className="appointment-page">
      <HeroSection
        eyebrow="YOUR HEALTH JOURNEY STARTS HERE"
        title="Make Time for"
        highlight="Your Wellbeing"
        description="Take the first step towards better movement. Choose a physiotherapy service, select a preferred time and tell us how our team can reach you."
        primaryText="Start Booking"
        primaryLink="#booking-form"
        secondaryText="Explore Services"
        secondaryLink="/services"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Physiotherapy professional supporting a patient during care"
        imageLabel="Care That Starts With You"
        imageDescription="A thoughtful approach to your movement and recovery goals."
        showStats={false}
        showImage={true}
      />

      <section className="appointment-booking-section" id="booking-form">
        <div className="appointment-container">
          <SectionHeading
            eyebrow="BOOK AN APPOINTMENT"
            title="Your Next Step"
            highlight="Starts Here"
            description="Complete the steps below to share your appointment preferences with our team."
          />

          {confirmed ? (
            <motion.div
              className="appointment-success"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="appointment-success-icon">
                <CheckCircle2 size={38} />
              </div>

              <span className="appointment-eyebrow">ENQUIRY COMPLETED</span>
              <h2>Thank You, {patient.name.split(" ")[0]}!</h2>
              <p>
                Your appointment preferences are ready. Please contact the
                clinic to verify availability and receive final confirmation.
              </p>

              <div className="appointment-summary">
                <div>
                  <span>Selected treatment</span>
                  <strong>{selectedService}</strong>
                </div>
                <div>
                  <span>Preferred date</span>
                  <strong>{selectedDate}</strong>
                </div>
                <div>
                  <span>Preferred time</span>
                  <strong>{selectedTime}</strong>
                </div>
                <div>
                  <span>Patient name</span>
                  <strong>{patient.name}</strong>
                </div>
              </div>

              <p className="appointment-demo-note">
                This is a frontend confirmation only. No appointment has been
                saved or confirmed by a clinic server.
              </p>

              <div className="appointment-success-actions">
                <button
                  type="button"
                  className="appointment-primary-button"
                  onClick={resetBooking}
                >
                  <RotateCcw size={17} />
                  Book Another Visit
                </button>
                <Link to="/" className="appointment-secondary-button">
                  Return Home
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="appointment-layout">
              <div className="appointment-main-card">
                <div className="appointment-progress">
                  {steps.map((item, index) => {
                    const StepIcon = item.icon;
                    const isComplete = step > item.number;
                    const isActive = step === item.number;

                    return (
                      <div className="appointment-progress-item" key={item.number}>
                        <div
                          className={`appointment-progress-icon ${
                            isActive ? "active" : ""
                          } ${isComplete ? "complete" : ""}`}
                        >
                          {isComplete ? (
                            <CheckCircle2 size={20} />
                          ) : (
                            <StepIcon size={20} />
                          )}
                        </div>
                        <div className="appointment-progress-copy">
                          <span>STEP {item.number}</span>
                          <strong>{item.title}</strong>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="appointment-progress-line" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="service"
                        className="appointment-step-content"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="appointment-step-heading">
                          <span className="appointment-eyebrow">
                            STEP 01
                          </span>
                          <h2>Choose Your Treatment</h2>
                          <p>
                            Select the service that best matches your needs.
                          </p>
                        </div>

                        <div className="appointment-service-grid">
                          {services.map((service) => {
                            const ServiceIcon = service.icon;
                            const isSelected =
                              selectedService === service.title;

                            return (
                              <button
                                type="button"
                                key={service.title}
                                className={`appointment-service-card ${
                                  isSelected ? "selected" : ""
                                }`}
                                onClick={() => {
                                  setSelectedService(service.title);
                                  setError("");
                                }}
                                aria-pressed={isSelected}
                              >
                                <div className="appointment-service-icon">
                                  <ServiceIcon size={23} />
                                </div>
                                <div className="appointment-service-copy">
                                  <strong>{service.title}</strong>
                                  <span>{service.description}</span>
                                </div>
                                <span className="appointment-service-check">
                                  {isSelected && <CheckCircle2 size={19} />}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        <div className="appointment-step-tip">
                          <ShieldCheck size={19} />
                          <p>
                            Not sure which service to choose? Select the closest
                            option or contact the clinic for guidance.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="date"
                        className="appointment-step-content"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="appointment-step-heading">
                          <span className="appointment-eyebrow">
                            STEP 02
                          </span>
                          <h2>Select Date and Time</h2>
                          <p>
                            Choose your preferred date and one time slot.
                          </p>
                        </div>

                        <div className="appointment-date-field">
                          <label htmlFor="appointment-date">
                            <CalendarDays size={18} />
                            Preferred Date
                          </label>
                          <input
                            id="appointment-date"
                            type="date"
                            min={getToday()}
                            value={selectedDate}
                            onChange={(event) => {
                              setSelectedDate(event.target.value);
                              setError("");
                            }}
                            required
                          />
                        </div>

                        <div className="appointment-slot-heading">
                          <h3>
                            <Clock3 size={19} />
                            Preferred Time
                          </h3>
                          <span>Local clinic time</span>
                        </div>

                        <div className="appointment-time-grid">
                          {timeSlots.map((time) => (
                            <button
                              type="button"
                              key={time}
                              className={`appointment-time-slot ${
                                selectedTime === time ? "selected" : ""
                              }`}
                              onClick={() => {
                                setSelectedTime(time);
                                setError("");
                              }}
                              aria-pressed={selectedTime === time}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        <p className="appointment-slot-disclaimer">
                          These are example time preferences, not live
                          availability. The clinic must confirm your slot.
                        </p>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="details"
                        className="appointment-step-content"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="appointment-step-heading">
                          <span className="appointment-eyebrow">
                            STEP 03
                          </span>
                          <h2>Your Contact Details</h2>
                          <p>
                            Add your details so the clinic can follow up.
                          </p>
                        </div>

                        <div className="appointment-input-grid">
                          <div className="appointment-field">
                            <label htmlFor="patient-name">Full Name *</label>
                            <input
                              id="patient-name"
                              name="name"
                              value={patient.name}
                              onChange={updatePatient}
                              placeholder="Enter your name"
                              autoComplete="name"
                              required
                            />
                          </div>

                          <div className="appointment-field">
                            <label htmlFor="patient-phone">
                              Phone Number *
                            </label>
                            <input
                              id="patient-phone"
                              name="phone"
                              type="tel"
                              value={patient.phone}
                              onChange={updatePatient}
                              placeholder="Enter phone number"
                              autoComplete="tel"
                              required
                            />
                          </div>

                          <div className="appointment-field appointment-field-full">
                            <label htmlFor="patient-email">
                              Email Address *
                            </label>
                            <input
                              id="patient-email"
                              name="email"
                              type="email"
                              value={patient.email}
                              onChange={updatePatient}
                              placeholder="Enter email address"
                              autoComplete="email"
                              required
                            />
                          </div>

                          <div className="appointment-field appointment-field-full">
                            <label htmlFor="patient-concern">
                              Tell Us About Your Concern
                            </label>
                            <textarea
                              id="patient-concern"
                              name="concern"
                              rows="3"
                              value={patient.concern}
                              onChange={updatePatient}
                              placeholder="Share a brief description if you wish"
                            />
                          </div>
                        </div>

                        <label className="appointment-consent">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={patient.consent}
                            onChange={updatePatient}
                            required
                          />
                          <span>
                            I agree to be contacted about this appointment
                            enquiry.
                          </span>
                        </label>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {error && (
                    <p className="appointment-error" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="appointment-form-actions">
                    {step > 1 ? (
                      <button
                        type="button"
                        className="appointment-back-button"
                        onClick={() => {
                          setStep((previous) => previous - 1);
                          setError("");
                        }}
                      >
                        <ArrowLeft size={17} />
                        Back
                      </button>
                    ) : (
                      <span className="appointment-secure-label">
                        <ShieldCheck size={16} />
                        Your details stay private
                      </span>
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        className="appointment-primary-button"
                        onClick={goNext}
                      >
                        Continue <ArrowRight size={17} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="appointment-primary-button"
                      >
                        Submit Enquiry <ArrowRight size={17} />
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <aside className="appointment-sidebar">
                <div className="appointment-summary-card">
                  <div className="appointment-summary-heading">
                    <div className="appointment-summary-icon">
                      <ClipboardCheck size={22} />
                    </div>
                    <div>
                      <span>YOUR SELECTION</span>
                      <h3>Booking Summary</h3>
                    </div>
                  </div>

                  <div className="appointment-summary-row">
                    <span>Treatment</span>
                    <strong>{selectedService || "Not selected"}</strong>
                  </div>

                  <div className="appointment-summary-row">
                    <span>Preferred date</span>
                    <strong>{selectedDate || "Not selected"}</strong>
                  </div>

                  <div className="appointment-summary-row">
                    <span>Preferred time</span>
                    <strong>{selectedTime || "Not selected"}</strong>
                  </div>

                  <div className="appointment-summary-divider" />

                  <div className="appointment-summary-note">
                    <Clock3 size={18} />
                    <p>
                      Your selected time is a preference until the clinic
                      confirms availability.
                    </p>
                  </div>
                </div>

                <div className="appointment-support-card">
                  <div className="appointment-support-icon">
                    <Phone size={21} />
                  </div>
                  <h3>Need Assistance?</h3>
                  <p>
                    Contact the clinic if you need help choosing a service or
                    arranging your visit.
                  </p>
                  <Link to="/contact">
                    Contact Our Team <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="appointment-trust-note">
                  <ShieldCheck size={20} />
                  <p>
                    Your enquiry should be handled with care and respect.
                    Please avoid entering sensitive medical details.
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <section className="appointment-bottom-section">
        <div className="appointment-container">
          <div className="appointment-bottom-inner">
            <div className="appointment-bottom-icon">
              <MapPin size={22} />
            </div>
            <div>
              <h3>Have questions before your visit?</h3>
              <p>
                Our Contact page has the information you need to reach the
                Rehabics team.
              </p>
            </div>
            <Link to="/contact">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="YOUR JOURNEY MATTERS"
        title="Take the Next Step Towards Better Movement"
        description="Reach out to our team for help with your appointment preferences and questions about physiotherapy."
        buttonText="Contact Our Team"
        buttonLink="/contact"
        secondaryText="Explore Services"
        secondaryLink="/services"
      />
    </main>
  );
}

export default Appointment;
