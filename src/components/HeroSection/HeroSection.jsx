
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  ShieldCheck,
  UserRound,
  Activity,
  Heart,
} from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="rehabHero">
      <div className="rehabHeroContainer">
        <motion.div
          className="rehabHeroContent"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="rehabHeroEyebrow">
            <span className="rehabHeroEyebrowIcon">
              <HeartPulse size={18} />
            </span>
            PERSONALIZED PHYSIOTHERAPY
          </div>

          <h1 className="rehabHeroTitle">
            Feel better.
            <span>Move with confidence.</span>
          </h1>

          <p className="rehabHeroDescription">
            Personalised physiotherapy care to help you build strength,
            improve mobility and return to the activities you love.
            Your journey to better movement starts here.
          </p>

          <div className="rehabHeroActions">
            <Link to="/appointment" className="rehabHeroPrimary">
              Book an Appointment
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/services" className="rehabHeroSecondary">
              Explore Our Services
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rehabHeroFeatures">
            <div className="rehabHeroFeature">
              <span className="rehabHeroRoundIcon">
                <UserRound size={19} />
              </span>
              <div>
                <strong>Personalised</strong>
                <span>Care for your needs</span>
              </div>
            </div>

            <div className="rehabHeroFeature">
              <span className="rehabHeroRoundIcon">
                <Heart size={19} />
              </span>
              <div>
                <strong>One to one</strong>
                <span>Individual attention</span>
              </div>
            </div>

            <div className="rehabHeroFeature">
              <span className="rehabHeroRoundIcon">
                <Activity size={19} />
              </span>
              <div>
                <strong>Better movement</strong>
                <span>Support at every step</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rehabHeroVisual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease: "easeOut",
          }}
        >
          <div className="rehabHeroLeaf" aria-hidden="true">
            <svg viewBox="0 0 120 160" fill="none">
              <path
                d="M20 145C20 95 48 43 101 15"
                stroke="#B85C38"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M28 116C0 94 8 65 38 67C44 88 40 103 28 116Z"
                fill="#DFA58B"
                fillOpacity=".8"
              />
              <path
                d="M54 74C44 42 66 19 92 26C89 50 74 66 54 74Z"
                fill="#B85C38"
                fillOpacity=".45"
              />
              <path
                d="M25 139L38 91M53 75L74 41"
                stroke="#B85C38"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="rehabHeroImageFrame">
            <img
              src="https://images.pexels.com/photos/5793700/pexels-photo-5793700.jpeg"
              alt="Healthcare professional providing attentive patient care"
              className="rehabHeroImage"
              fetchPriority="high"
            />

            <div className="rehabHeroImageShade" />

            <div className="rehabHeroImageLabel">
              <span className="rehabHeroRoundIcon">
                <ShieldCheck size={19} />
              </span>
              <div>
                <strong>Care designed around you</strong>
                <span>Support for your recovery journey</span>
              </div>
            </div>
          </div>

          <div className="rehabHeroPhotoNote">
            <span />
            Every step towards feeling better matters
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
