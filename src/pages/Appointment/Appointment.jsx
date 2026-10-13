
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  UserRound,
  Phone,
  Mail,
  HeartPulse,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";


import "./Appointment.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CTASection from "../../components/CTASection/CTASection";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  concern: "",
  appointmentDate: "",
  preferredTime: "",
  message: "",
};

const concerns = [
  "Back Pain",
  "Neck Pain",
  "Shoulder Pain",
  "Knee Pain",
  "Sports Injury",
  "Post Surgery Recovery",
  "Muscle and Joint Stiffness",
  "Balance and Mobility",
  "Other Concern",
];

const timeSlots = [
  "Morning",
  "Afternoon",
  "Evening",
];

export default function Appointment() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    setSubmitted(true);

    // Connect your appointment API here to save the booking.
  };

  return (
    <main className="rehabAppointment">
      <HeroSection
        eyebrow="PERSONALISED PHYSIOTHERAPY"
        title="Your recovery."
        highlight="Your next step."
        description="Start a conversation with our physiotherapy team. Share your concerns and preferred appointment details so we can guide you on the next steps."
        buttonText="Book an Appointment"
        buttonLink="#appointmentForm"
        secondaryText="Explore Conditions"
        secondaryLink="/conditions"
        image="https://images.pexels.com/photos/5793700/pexels-photo-5793700.jpeg"
        imageAlt="Physiotherapy professional supporting patient care"
        imageLabel="Your wellbeing matters"
        imageDescription="Care that considers your needs"
        features={[
          {
            title: "Personal care",
            description: "Focused on your needs",
            icon: "user",
          },
          {
            title: "Expert guidance",
            description: "Support at every step",
            icon: "shield",
          },
          {
            title: "Better movement",
            description: "Work towards your goals",
            icon: "activity",
          },
        ]}
      />

      <section className="appointmentSection" id="appointmentForm">
        <div className="appointmentContainer">
          <motion.div
            className="appointmentIntro"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              ease: "easeOut",
            }}
          >
            <span className="appointmentEyebrow">
              <CalendarDays size={17} />
              APPOINTMENT REQUEST
            </span>

            <h2>
              Let us understand
              <span> how we can help.</span>
            </h2>

            <p>
              Complete the form with your details and preferred
              appointment time. Our team can then review your request
              and follow up with you.
            </p>

            <div className="appointmentBenefits">
              <div className="appointmentBenefit">
                <span>
                  <ShieldCheck size={20} />
                </span>
                <div>
                  <strong>Individual attention</strong>
                  <p>Your concerns and goals matter.</p>
                </div>
              </div>

              <div className="appointmentBenefit">
                <span>
                  <HeartPulse size={20} />
                </span>
                <div>
                  <strong>Care focused on movement</strong>
                  <p>Discuss suitable options for your needs.</p>
                </div>
              </div>

              <div className="appointmentBenefit">
                <span>
                  <MessageCircle size={20} />
                </span>
                <div>
                  <strong>Clear next steps</strong>
                  <p>Share your preferred contact details.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="appointmentFormCard"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: "easeOut",
            }}
          >
            {submitted ? (
              <div className="appointmentSuccess" role="status">
                <span className="appointmentSuccessIcon">
                  <CheckCircle2 size={34} />
                </span>

                <h2>Request details completed</h2>

                <p>
                  Your details have been validated in this form.
                  No appointment has been sent or confirmed yet.
                  Connect the form to your booking backend to submit
                  the request to your team.
                </p>

                <button
                  type="button"
                  className="appointmentSubmit"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                >
                  Make Another Request
                  <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <>
                <div className="appointmentFormHeading">
                  <span className="appointmentFormIcon">
                    <CalendarDays size={22} />
                  </span>

                  <div>
                    <h2>Request an Appointment</h2>
                    <p>Fill in your details below.</p>
                  </div>
                </div>

                <form
                  className="appointmentForm"
                  onSubmit={handleSubmit}
                >
                  <div className="appointmentField">
                    <label htmlFor="fullName">
                      Full Name <span>*</span>
                    </label>
                    <div className="appointmentInputWrap">
                      <UserRound size={17} />
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={form.fullName}
                        onChange={handleChange}
                        autoComplete="name"
                        minLength={2}
                        required
                      />
                    </div>
                  </div>

                  <div className="appointmentField">
                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>
                    <div className="appointmentInputWrap">
                      <Phone size={17} />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        pattern="[0-9+() ]{8,18}"
                        title="Enter a valid phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="appointmentField appointmentFieldFull">
                    <label htmlFor="email">
                      Email Address
                    </label>
                    <div className="appointmentInputWrap">
                      <Mail size={17} />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="appointmentField appointmentFieldFull">
                    <label htmlFor="concern">
                      What would you like help with? <span>*</span>
                    </label>
                    <select
                      id="concern"
                      name="concern"
                      value={form.concern}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a concern</option>
                      {concerns.map((concern) => (
                        <option key={concern} value={concern}>
                          {concern}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="appointmentField">
                    <label htmlFor="appointmentDate">
                      Preferred Date <span>*</span>
                    </label>
                    <div className="appointmentInputWrap">
                      <CalendarDays size={17} />
                      <input
                        id="appointmentDate"
                        name="appointmentDate"
                        type="date"
                        min={minDate}
                        value={form.appointmentDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="appointmentField">
                    <label htmlFor="preferredTime">
                      Preferred Time <span>*</span>
                    </label>
                    <div className="appointmentInputWrap">
                      <Clock3 size={17} />
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={form.preferredTime}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="appointmentField appointmentFieldFull">
                    <label htmlFor="message">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Share any details you would like us to know"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <p className="appointmentRequiredNote">
                    Fields marked with * are required.
                  </p>

                  <button
                    type="submit"
                    className="appointmentSubmit"
                  >
                    Submit Appointment Request
                    <ArrowRight size={18} />
                  </button>

                  <p className="appointmentPrivacyNote">
                    Submitting this form does not confirm an
                    appointment. The team will need to review and
                    confirm your preferred time.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <CTASection
        eyebrow="WE ARE HERE TO HELP"
        title="Have Questions Before Booking?"
        description="Explore our physiotherapy services or learn more about the conditions we support before choosing your next step."
        buttonText="Explore Our Services"
        buttonLink="/services"
        secondaryText="Explore Conditions"
        secondaryLink="/conditions"
      />
    </main>
  );
}
