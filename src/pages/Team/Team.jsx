import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  HeartPulse,
  ShieldCheck,
  UsersRound,
  Activity,
  Target,
  MessageCircleHeart,
  GraduationCap,
} from "lucide-react";


import "./Team.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CTASection from "../../components/CTASection/CTASection";

const teamMembers = [
  {
    name: "Dr. Team Member One",
    role: "Senior Physiotherapist",
    qualification: "Add verified qualification",
    specialty: "Movement and pain management",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
  },
  {
    name: "Dr. Team Member Two",
    role: "Musculoskeletal Physiotherapist",
    qualification: "Add verified qualification",
    specialty: "Muscle and joint rehabilitation",
    image:
      "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg",
  },
  {
    name: "Dr. Team Member Three",
    role: "Rehabilitation Specialist",
    qualification: "Add verified qualification",
    specialty: "Mobility and functional recovery",
    image:
      "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg",
  },
];

const values = [
  {
    icon: HeartPulse,
    title: "Patient first",
    description:
      "We listen to your concerns and work around your needs, comfort and recovery goals.",
  },
  {
    icon: Target,
    title: "Personalised care",
    description:
      "Your care plan should reflect your abilities, daily routine and individual progress.",
  },
  {
    icon: MessageCircleHeart,
    title: "Clear communication",
    description:
      "We explain exercises, answer your questions and help you understand the next steps.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible guidance",
    description:
      "We consider your symptoms and safety when recommending treatment and movement activities.",
  },
];

export default function Team() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.5 },
      };

  return (
    <main className="rehabTeamPage">
      <HeroSection
        eyebrow="THE PEOPLE BEHIND YOUR PROGRESS"
        title="Care built around"
        highlight="you and your goals."
        description="Meet the people who support your journey towards better movement. Our approach centres on listening, personalised guidance and helping you take practical steps towards recovery."
        buttonText="Book an Appointment"
        buttonLink="/appointment"
        secondaryText="Our Approach"
        secondaryLink="#teamApproach"
        image="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
        imageAlt="Healthcare professionals working together"
        imageLabel="Your wellbeing matters"
        imageDescription="Thoughtful care for your movement and recovery"
        features={[
          "Patient focused guidance",
          "Personalised care plans",
          "Support at every step",
        ]}
      />

      <section className="rtSection rtIntroduction">
        <div className="rtContainer rtIntroductionGrid">
          <motion.div className="rtIntroCopy" {...reveal}>
            <span className="rtEyebrow">MORE THAN TREATMENT</span>
            <h2>
              A team that listens,
              <span> guides and supports.</span>
            </h2>
            <p>
              Every recovery journey is different. Understanding your concerns,
              daily routine and goals helps shape a more meaningful approach to
              physiotherapy.
            </p>
            <p>
              We believe good care combines clear communication, thoughtful
              guidance and a plan that works for your everyday life.
            </p>
            <Link className="rtTextLink" to="/services">
              Explore our services
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div className="rtIntroVisual" {...reveal}>
            <img
              src="https://images.pexels.com/photos/7551656/pexels-photo-7551656.jpeg"
              alt="Physiotherapy professional supporting a patient"
              loading="lazy"
            />
            <div className="rtImageCaption">
              <HeartPulse size={22} />
              <div>
                <strong>Your goals guide the journey</strong>
                <span>Care that starts with listening</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="rtSection rtMembers" id="teamMembers">
        <div className="rtContainer">
          <motion.div className="rtSectionHeading" {...reveal}>
            <span className="rtEyebrow">MEET THE TEAM</span>
            <h2>
              People dedicated to
              <span> better movement</span>
            </h2>
            <p>
              Get to know the professionals who help make your care journey
              more personal and supportive.
            </p>
          </motion.div>

          <div className="rtMemberGrid">
            {teamMembers.map((member, index) => (
              <motion.article
                className="rtMemberCard"
                key={member.name}
                {...reveal}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
              >
                <div className="rtMemberImage">
                  <img
                    src={member.image}
                    alt={`Profile image for ${member.role}`}
                    loading="lazy"
                  />
                  <span className="rtMemberNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="rtMemberInfo">
                  <span className="rtMemberRole">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p className="rtQualification">
                    <GraduationCap size={16} />
                    {member.qualification}
                  </p>
                  <div className="rtMemberSpecialty">
                    <Activity size={16} />
                    <span>{member.specialty}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="rtProfileNote">
            Sample profiles for layout preview only. Replace names, photographs,
            qualifications and specialties with verified team information
            before publishing.
          </p>
        </div>
      </section>

      <section className="rtSection rtApproach" id="teamApproach">
        <div className="rtContainer">
          <motion.div className="rtSectionHeading" {...reveal}>
            <span className="rtEyebrow">HOW WE WORK</span>
            <h2>
              The values behind
              <span> every care journey</span>
            </h2>
            <p>
              Our approach is centred on understanding people, not just
              symptoms.
            </p>
          </motion.div>

          <div className="rtValuesGrid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  className="rtValueCard"
                  key={value.title}
                  {...reveal}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.07,
                  }}
                >
                  <span className="rtValueIcon">
                    <Icon size={25} strokeWidth={1.8} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rtSection rtCommitment">
        <div className="rtContainer rtCommitmentGrid">
          <motion.div className="rtCommitmentVisual" {...reveal}>
            <img
              src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg"
              alt="Physiotherapist guiding a patient during rehabilitation"
              loading="lazy"
            />
          </motion.div>

          <motion.div className="rtCommitmentCopy" {...reveal}>
            <span className="rtEyebrow">YOUR JOURNEY MATTERS</span>
            <h2>
              Small steps can lead
              <span> to meaningful progress.</span>
            </h2>
            <p>
              We aim to make every interaction clear, supportive and relevant
              to your needs. Together, you and your physiotherapist can work
              towards practical goals and review progress along the way.
            </p>

            <div className="rtCommitmentPoints">
              <div>
                <UsersRound size={21} />
                <span>Care shaped around your needs</span>
              </div>
              <div>
                <Activity size={21} />
                <span>Guidance for everyday movement</span>
              </div>
              <div>
                <ShieldCheck size={21} />
                <span>Thoughtful and responsible support</span>
              </div>
            </div>

            <Link className="rtButton" to="/appointment">
              Meet us through a consultation
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection
        eyebrow="LET US TAKE THE NEXT STEP TOGETHER"
        title="Your recovery journey starts with a conversation."
        description="Tell us about your movement goals and discover the care options that may be right for you."
        buttonText="Book an Appointment"
        buttonLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
      />
    </main>
  );
}
