
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Activity,
  Bone,
  PersonStanding,
  HeartPulse,
  Dumbbell,
  Monitor,
} from "lucide-react";
import "./ServicesSection.css";

const defaultServices = [
  {
    id: 1,
    title: "Orthopaedic Physiotherapy",
    description:
      "Personalised support for joint pain, muscle injuries and improved everyday movement.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=85",
    icon: Bone,
    link: "/services/orthopaedic-physiotherapy",
    category: "PAIN AND MOBILITY",
  },
  {
    id: 2,
    title: "Sports Rehabilitation",
    description:
      "Build strength, restore mobility and work towards returning to your favourite activities.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=85",
    icon: Activity,
    link: "/services/sports-rehabilitation",
    category: "STRENGTH AND RECOVERY",
  },
  {
    id: 3,
    title: "Neurological Physiotherapy",
    description:
      "Guided rehabilitation focused on balance, coordination and functional movement.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=85",
    icon: PersonStanding,
    link: "/services/neurological-physiotherapy",
    category: "BALANCE AND MOVEMENT",
  },
  {
    id: 4,
    title: "Post Surgery Recovery",
    description:
      "Structured rehabilitation to support mobility, strength and daily activities after surgery.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=700&q=85",
    icon: HeartPulse,
    link: "/services/post-surgery-recovery",
    category: "RECOVERY AND CARE",
  },
  {
    id: 5,
    title: "Strength and Mobility",
    description:
      "Improve flexibility, movement quality and physical confidence with guided exercises.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=85",
    icon: Dumbbell,
    link: "/services/strength-and-mobility",
    category: "MOVEMENT AND FITNESS",
  },
  {
    id: 6,
    title: "Online Physiotherapy",
    description:
      "Connect with a physiotherapist remotely for guided sessions and personalised exercise plans.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=85",
    icon: Monitor,
    link: "/online-physiotherapy",
    category: "CARE FROM HOME",
  },
];

export default function ServicesSection({
  eyebrow = "HOW WE CAN HELP",
  title = "Care that helps you",
  highlight = "move forward.",
  description = "Explore personalised physiotherapy services designed around your movement, recovery and everyday goals.",
  services = defaultServices,
  viewAllLink = "/services",
  viewAllText = "Explore all services",
}) {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="rehabServices" id="services">
      <div className="rehabServicesContainer">
        <motion.div
          className="rehabServicesHeader"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="rehabServicesIntro">
            <span className="rehabServicesEyebrow">
              <span className="rehabServicesEyebrowDot" />
              {eyebrow}
            </span>

            <h2 className="rehabServicesTitle">
              {title}
              <span>{highlight}</span>
            </h2>
          </div>

          <div className="rehabServicesHeaderRight">
            <p className="rehabServicesDescription">
              {description}
            </p>

            <Link
              to={viewAllLink}
              className="rehabServicesViewAll"
            >
              {viewAllText}
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="rehabServicesGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {services.map((service) => {
            const ServiceIcon = service.icon || Activity;

            return (
              <motion.article
                className="rehabServiceCard"
                key={service.id || service.title}
                variants={cardVariants}
              >
                <Link
                  to={service.link || "/services"}
                  className="rehabServiceCardLink"
                  aria-label={`Explore ${service.title}`}
                >
                  <div className="rehabServiceImageWrap">
                    <img
                      className="rehabServiceImage"
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      loading="lazy"
                    />

                    <span className="rehabServiceCategory">
                      {service.category || "PERSONALISED CARE"}
                    </span>

                    <span className="rehabServiceIcon">
                      <ServiceIcon size={21} strokeWidth={1.8} />
                    </span>
                  </div>

                  <div className="rehabServiceCardBody">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <span className="rehabServiceLearnMore">
                      Learn more
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="rehabServicesBottom">
          <span className="rehabServicesBottomLine" />
          <p>
            Your goals matter. Your recovery deserves individual care.
          </p>
          <span className="rehabServicesBottomLine" />
        </div>
      </div>
    </section>
  );
}
