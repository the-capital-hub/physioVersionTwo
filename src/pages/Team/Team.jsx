
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  HeartPulse,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";

import "./Team.css";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Aditi Sharma",
    role: "Senior Physiotherapist",
    qualification: "BPT, MPT",
    experience: "8 years of experience",
    specialty: "Orthopedic Care",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85",
    bio: "Focuses on movement assessment, joint mobility and personalized rehabilitation planning.",
    interests: ["Joint mobility", "Pain management", "Rehabilitation"],
  },
  {
    id: 2,
    name: "Dr. Rohan Verma",
    role: "Sports Physiotherapist",
    qualification: "BPT, Sports Rehabilitation",
    experience: "6 years of experience",
    specialty: "Sports Rehabilitation",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85",
    bio: "Supports recovery planning for sports related injuries and gradual return to physical activity.",
    interests: ["Sports injuries", "Strength", "Movement training"],
  },
  {
    id: 3,
    name: "Dr. Neha Kapoor",
    role: "Neurological Physiotherapist",
    qualification: "BPT, MPT",
    experience: "7 years of experience",
    specialty: "Neurological Care",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85",
    bio: "Works with individualized rehabilitation goals involving balance, coordination and daily function.",
    interests: ["Balance training", "Coordination", "Mobility"],
  },
  {
    id: 4,
    name: "Dr. Arjun Mehta",
    role: "Rehabilitation Physiotherapist",
    qualification: "BPT, Rehabilitation",
    experience: "5 years of experience",
    specialty: "Recovery and Mobility",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    bio: "Helps patients work towards improved movement, flexibility and confidence in daily activities.",
    interests: ["Functional movement", "Flexibility", "Recovery"],
  },
];

const specialties = [
  "All Specialists",
  "Orthopedic Care",
  "Sports Rehabilitation",
  "Neurological Care",
  "Recovery and Mobility",
];

const values = [
  {
    icon: HeartPulse,
    title: "Patient First",
    description:
      "We listen to your concerns and keep your goals at the centre of your care.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Care",
    description:
      "We value appropriate assessment, clear communication and safe progression.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description:
      "We recognise that each person has different needs, abilities and priorities.",
  },
];

function Team() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("All Specialists");
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return teamMembers.filter((member) => {
      const matchesSpecialty =
        activeSpecialty === "All Specialists" ||
        member.specialty === activeSpecialty;

      const searchableText = [
        member.name,
        member.role,
        member.qualification,
        member.specialty,
        ...member.interests,
      ]
        .join(" ")
        .toLowerCase();

      return matchesSpecialty && searchableText.includes(search);
    });
  }, [searchTerm, activeSpecialty]);

  return (
    <main className="team-page">
      <HeroSection
        eyebrow="MEET YOUR CARE TEAM"
        title="People Who Care About"
        highlight="Your Progress"
        description="Meet the professionals who help you understand your movement, work towards your goals and make informed decisions about your physiotherapy journey."
        primaryText="Book an Appointment"
        primaryLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90"
        imageAlt="Healthcare professionals in a clinical setting"
        imageLabel="Care begins with listening"
        imageDescription="A supportive approach built around your needs"
        showStats={false}
        showImage={true}
      />

      <section className="team-intro team-shell">
        <div className="team-intro-copy">
          <span className="team-eyebrow">
            <Sparkles size={15} />
            THE PEOPLE BEHIND YOUR CARE
          </span>

          <h2>
            Expertise with a
            <span> human touch.</span>
          </h2>

          <p>
            Good physiotherapy starts with understanding the person, not just
            the symptoms. Our approach brings together attentive listening,
            thoughtful assessment and care shaped around individual goals.
          </p>
        </div>

        <div className="team-intro-stat">
          <div className="team-stat-icon">
            <Users size={25} />
          </div>
          <div>
            <strong>One shared purpose</strong>
            <p>Helping people move with greater confidence.</p>
          </div>
        </div>
      </section>

      <section className="team-directory team-shell" id="team-directory">
        <SectionHeading
          eyebrow="OUR SPECIALISTS"
          title="Meet Your Physiotherapy"
          highlight="Team"
          description="Explore our team by area of focus and find out more about each professional."
          align="center"
        />

        <div className="team-tools">
          <label className="team-search">
            <Search size={19} aria-hidden="true" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search name or specialization"
              aria-label="Search team members"
            />
            {searchTerm && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchTerm("")}
              >
                <X size={17} />
              </button>
            )}
          </label>

          <span className="team-result-count">
            {filteredMembers.length}{" "}
            {filteredMembers.length === 1 ? "specialist" : "specialists"}
          </span>
        </div>

        <div className="team-filters" aria-label="Filter by specialization">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              type="button"
              className={`team-filter ${
                activeSpecialty === specialty ? "is-active" : ""
              }`}
              aria-pressed={activeSpecialty === specialty}
              onClick={() => setActiveSpecialty(specialty)}
            >
              {specialty}
            </button>
          ))}
        </div>

        {filteredMembers.length > 0 ? (
          <div className="team-grid">
            {filteredMembers.map((member, index) => (
              <motion.article
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div className="team-card-image-wrap">
                  <img
                    src={member.image}
                    alt={`Sample portrait for ${member.name}`}
                    className="team-card-image"
                    loading="lazy"
                  />
                  <span className="team-card-specialty">
                    {member.specialty}
                  </span>
                </div>

                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>

                  <div className="team-card-details">
                    <span>
                      <Award size={16} />
                      {member.qualification}
                    </span>
                    <span>
                      <CalendarDays size={16} />
                      {member.experience}
                    </span>
                  </div>

                  <p className="team-card-bio">{member.bio}</p>

                  <button
                    type="button"
                    className="team-profile-link"
                    onClick={() => setSelectedMember(member)}
                  >
                    View Profile
                    <ArrowRight size={17} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="team-empty">
            <Search size={30} />
            <h3>No specialists found</h3>
            <p>Try a different name or select another specialization.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveSpecialty("All Specialists");
              }}
            >
              View All Specialists
            </button>
          </div>
        )}
      </section>

      <section className="team-values team-shell">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="Care Built Around"
          highlight="You"
          description="Our values guide how we listen, communicate and support your goals."
          align="center"
        />

        <div className="team-values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                className="team-value-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="team-value-icon">
                  <Icon size={23} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="team-journey team-shell">
        <div className="team-journey-panel">
          <div>
            <span className="team-eyebrow">
              <CheckCircle2 size={15} />
              YOUR CARE JOURNEY
            </span>

            <h2>
              The right support starts with
              <span> a conversation.</span>
            </h2>

            <p>
              Tell us about your needs and our team can help you understand the
              next steps for arranging an appointment.
            </p>

            <Link to="/appointment" className="team-primary-button">
              Book an Appointment
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="team-journey-points">
            <div>
              <span>01</span>
              <p>Share your concerns and goals</p>
            </div>
            <div>
              <span>02</span>
              <p>Discuss suitable care options</p>
            </div>
            <div>
              <span>03</span>
              <p>Plan your next step with the team</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="WE ARE HERE TO HELP"
        title="Ready to Take the Next Step?"
        description="Connect with our team to discuss your needs and arrange your physiotherapy appointment."
        buttonText="Book an Appointment"
        buttonLink="/appointment"
        secondaryText="Contact Our Team"
        secondaryLink="/contact"
      />

      {selectedMember && (
        <div
          className="team-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedMember(null);
            }
          }}
        >
          <motion.div
            className="team-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-title"
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22 }}
          >
            <button
              type="button"
              className="team-modal-close"
              aria-label="Close profile"
              onClick={() => setSelectedMember(null)}
            >
              <X size={21} />
            </button>

            <img
              src={selectedMember.image}
              alt=""
              className="team-modal-image"
            />

            <div className="team-modal-content">
              <span className="team-card-specialty">
                {selectedMember.specialty}
              </span>
              <h2 id="team-modal-title">{selectedMember.name}</h2>
              <p className="team-modal-role">{selectedMember.role}</p>

              <div className="team-modal-info">
                <span>
                  <Award size={17} />
                  {selectedMember.qualification}
                </span>
                <span>
                  <CalendarDays size={17} />
                  {selectedMember.experience}
                </span>
              </div>

              <p className="team-modal-bio">{selectedMember.bio}</p>

              <h3>Areas of Focus</h3>
              <div className="team-interest-list">
                {selectedMember.interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>

              <Link
                to="/appointment"
                className="team-primary-button"
              >
                Book an Appointment
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

export default Team;
