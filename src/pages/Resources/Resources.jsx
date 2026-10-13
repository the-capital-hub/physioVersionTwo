import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Activity,
  HeartPulse,
  PersonStanding,
  Brain,
  ShieldCheck,
  Clock3,
  Search,
  Plus,
  Minus,
  Lightbulb,
  MoveRight,
} from "lucide-react";

import "./Resources.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CTASection from "../../components/CTASection/CTASection";

const categories = [
  "All Resources",
  "Pain Management",
  "Movement",
  "Posture",
  "Recovery",
];

const resources = [
  {
    category: "Pain Management",
    readTime: "5 min read",
    title: "Understanding Everyday Back Pain",
    description:
      "Learn about common contributors to back discomfort and when professional guidance may help.",
    icon: HeartPulse,
    label: "PAIN MANAGEMENT",
  },
  {
    category: "Posture",
    readTime: "4 min read",
    title: "Building Healthier Posture Habits",
    description:
      "Simple ways to review your sitting setup and bring more movement into your workday.",
    icon: PersonStanding,
    label: "POSTURE",
  },
  {
    category: "Movement",
    readTime: "6 min read",
    title: "Why Everyday Movement Matters",
    description:
      "Explore how regular, appropriate movement can support mobility and everyday function.",
    icon: Activity,
    label: "MOVEMENT",
  },
  {
    category: "Recovery",
    readTime: "5 min read",
    title: "Making Sense of Your Recovery Journey",
    description:
      "Understand why progress can vary and how realistic goals can support your rehabilitation.",
    icon: Brain,
    label: "RECOVERY",
  },
  {
    category: "Pain Management",
    readTime: "4 min read",
    title: "Managing Neck Discomfort at Work",
    description:
      "Review workstation habits, regular movement breaks and signs that need professional advice.",
    icon: HeartPulse,
    label: "PAIN MANAGEMENT",
  },
  {
    category: "Movement",
    readTime: "5 min read",
    title: "Staying Active at Your Own Pace",
    description:
      "Discover practical ways to build activity gradually around your current abilities.",
    icon: PersonStanding,
    label: "MOVEMENT",
  },
];

const quickTips = [
  {
    number: "01",
    title: "Take regular movement breaks",
    description:
      "Change positions regularly during long periods of sitting or working.",
  },
  {
    number: "02",
    title: "Listen to your body",
    description:
      "Adjust an activity if it causes unusual or increasing discomfort.",
  },
  {
    number: "03",
    title: "Build habits gradually",
    description:
      "Start with manageable activities and increase them according to your ability and professional advice.",
  },
];

const faqs = [
  {
    question: "Who are these resources for?",
    answer:
      "These educational resources are intended for people who want to learn more about movement, posture, pain and rehabilitation. Individual needs vary, so a resource may not be suitable for every person.",
  },
  {
    question: "Can these articles replace physiotherapy?",
    answer:
      "No. General information cannot replace an individual assessment or treatment plan. A qualified healthcare professional can help you understand your specific needs.",
  },
  {
    question: "Can I start an exercise after reading an article?",
    answer:
      "Choose activities appropriate for your abilities and existing advice from your healthcare professional. Stop if you experience concerning symptoms and seek guidance when needed.",
  },
  {
    question: "When should I seek medical help?",
    answer:
      "Seek urgent medical assessment for severe or sudden symptoms, significant new weakness, or other alarming changes. Do not delay urgent care while reading online information.",
  },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.5 },
      };

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All Resources" ||
      resource.category === activeCategory;

    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query ||
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="rehabResourcesPage">
      <HeroSection
        eyebrow="LEARN. MOVE. FEEL BETTER."
        title="Knowledge for"
        highlight="your recovery journey."
        description="Explore practical information about movement, posture, pain management and rehabilitation. Build your understanding and take informed steps towards better everyday movement."
        buttonText="Explore Resources"
        buttonLink="#resourceLibrary"
        secondaryText="Book an Appointment"
        secondaryLink="/appointment"
        image="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg"
        imageAlt="Physiotherapy professional guiding a patient through movement"
        imageLabel="Small steps make a difference"
        imageDescription="Learn more about your movement and wellbeing"
        features={[
          "Practical educational guides",
          "Everyday movement advice",
          "Information for informed choices",
        ]}
      />

      <section className="rrSection rrIntro">
        <div className="rrContainer rrIntroGrid">
          <motion.div className="rrIntroCopy" {...reveal}>
            <span className="rrEyebrow">YOUR LEARNING SPACE</span>
            <h2>
              Understand your body.
              <span> Make informed choices.</span>
            </h2>
            <p>
              Finding reliable information can help you ask better questions
              and understand your care options. Our resource library brings
              movement and rehabilitation topics together in one place.
            </p>
            <p>
              Use these guides as a starting point for learning, not as a
              substitute for individual medical advice.
            </p>
            <Link className="rrTextLink" to="/appointment">
              Discuss your concerns
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div className="rrIntroVisual" {...reveal}>
            <img
              src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
              alt="Healthcare professional discussing a movement exercise"
              loading="lazy"
            />
            <div className="rrIntroNote">
              <span className="rrIntroNoteIcon">
                <BookOpen size={22} />
              </span>
              <div>
                <strong>Learn at your own pace</strong>
                <p>Information to support better conversations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="rrSection rrLibrary" id="resourceLibrary">
        <div className="rrContainer">
          <motion.div className="rrSectionHeading" {...reveal}>
            <span className="rrEyebrow">RESOURCE LIBRARY</span>
            <h2>
              Find information
              <span> that matters to you</span>
            </h2>
            <p>
              Browse educational topics and choose what you would like to learn
              about today.
            </p>
          </motion.div>

          <motion.div className="rrLibraryTools" {...reveal}>
            <label className="rrSearchBox">
              <Search size={19} aria-hidden="true" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search resources"
                aria-label="Search resources"
              />
            </label>

            <div className="rrCategoryFilters" aria-label="Filter resources">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`rrFilterButton ${
                    activeCategory === category ? "active" : ""
                  }`}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="rrResourceGrid" aria-live="polite">
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <motion.article
                  className="rrResourceCard"
                  key={resource.title}
                  {...reveal}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                >
                  <div className="rrResourceCardTop">
                    <span className="rrResourceIcon">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <span className="rrReadTime">
                      <Clock3 size={14} />
                      {resource.readTime}
                    </span>
                  </div>

                  <span className="rrResourceCategory">
                    {resource.label}
                  </span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>

                  <Link
                    className="rrResourceLink"
                    to="/contact"
                    aria-label={`Ask our team about ${resource.title}`}
                  >
                    Ask our team about this topic
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="rrEmptyState">
              <BookOpen size={28} />
              <h3>No matching resources found</h3>
              <p>Try another search or choose a different topic.</p>
              <button
                type="button"
                className="rrResetButton"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Resources");
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          <p className="rrLibraryNote">
            These are introductory topic cards. Replace them with links to
            reviewed and published articles when your resource library is ready.
          </p>
        </div>
      </section>

      <section className="rrSection rrTopics">
        <div className="rrContainer">
          <motion.div className="rrSectionHeading" {...reveal}>
            <span className="rrEyebrow">EXPLORE BY INTEREST</span>
            <h2>
              Start with a topic
              <span> that feels relevant</span>
            </h2>
            <p>
              Choose an area to explore related educational resources.
            </p>
          </motion.div>

          <div className="rrTopicsGrid">
            {[
              {
                title: "Pain Management",
                description: "Learn about common pain concerns and care options.",
                icon: HeartPulse,
                category: "Pain Management",
              },
              {
                title: "Movement and Mobility",
                description: "Explore movement habits and functional mobility.",
                icon: Activity,
                category: "Movement",
              },
              {
                title: "Posture and Work",
                description: "Review sitting habits and workplace movement.",
                icon: PersonStanding,
                category: "Posture",
              },
              {
                title: "Recovery and Wellbeing",
                description: "Understand rehabilitation goals and progress.",
                icon: ShieldCheck,
                category: "Recovery",
              },
            ].map((topic, index) => {
              const Icon = topic.icon;

              return (
                <motion.button
                  className="rrTopicCard"
                  type="button"
                  key={topic.title}
                  {...reveal}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                  onClick={() => {
                    setActiveCategory(topic.category);
                    setSearchQuery("");
                    document
                      .getElementById("resourceLibrary")
                      ?.scrollIntoView({
                        behavior: reduceMotion ? "auto" : "smooth",
                      });
                  }}
                >
                  <span className="rrTopicIcon">
                    <Icon size={24} />
                  </span>
                  <span className="rrTopicTitle">{topic.title}</span>
                  <span className="rrTopicDescription">
                    {topic.description}
                  </span>
                  <span className="rrTopicArrow">
                    Explore topic <MoveRight size={17} />
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rrSection rrTips">
        <div className="rrContainer rrTipsGrid">
          <motion.div className="rrTipsCopy" {...reveal}>
            <span className="rrEyebrow">EVERYDAY WELLNESS</span>
            <h2>
              Small habits.
              <span> More mindful movement.</span>
            </h2>
            <p>
              Simple changes can help you pay more attention to how you move
              throughout the day. Adapt any activity to your comfort and
              abilities.
            </p>
            <Link className="rrTextLink" to="/online-physiotherapy">
              Learn about online physiotherapy
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <div className="rrTipsList">
            {quickTips.map((tip, index) => (
              <motion.article
                className="rrTipItem"
                key={tip.number}
                {...reveal}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
              >
                <span className="rrTipNumber">{tip.number}</span>
                <div>
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                </div>
              </motion.article>
            ))}
            <div className="rrTipDisclaimer">
              <Lightbulb size={19} />
              <p>
                Stop activities that cause concerning symptoms and seek
                professional guidance when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rrSection rrFaq">
        <div className="rrContainer rrFaqGrid">
          <motion.div className="rrFaqIntro" {...reveal}>
            <span className="rrEyebrow">HELPFUL ANSWERS</span>
            <h2>
              Questions about
              <span> our resources?</span>
            </h2>
            <p>
              Understand how to use educational information and when to seek
              personalised guidance.
            </p>
            <Link className="rrTextLink" to="/contact">
              Contact our team
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div className="rrFaqList" {...reveal}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`rrFaqItem ${isOpen ? "isOpen" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="rrFaqQuestion"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="rrFaqToggle">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="rrFaqAnswer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTASection
        eyebrow="YOUR NEXT STEP"
        title="Have questions about your movement?"
        description="Speak with our team to discuss your concerns and explore the care options that may suit your needs."
        buttonText="Book an Appointment"
        buttonLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
      />
    </main>
  );
}
