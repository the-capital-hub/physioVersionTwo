
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Search,
  Clock3,
  HeartPulse,
  Activity,
  Dumbbell,
  ShieldCheck,
  X,
  ChevronDown,
  CalendarDays,
  Sparkles,
  Bookmark,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";

import "./Resources.css";

const resources = [
  {
    id: 1,
    category: "Pain Management",
    title: "Understanding Back Pain",
    description:
      "Learn about common causes of back discomfort, daily habits that may affect your spine, and when to seek professional care.",
    readTime: "6 min read",
    type: "Patient Guide",
    icon: HeartPulse,
    color: "blue",
    featured: true,
    content: [
      {
        heading: "Understand the possible causes",
        text: "Back discomfort can have several causes, including muscle strain, prolonged sitting, changes in activity, or other medical conditions. A proper assessment helps identify what may be contributing to your symptoms.",
      },
      {
        heading: "Build healthier daily habits",
        text: "Take regular movement breaks, change positions comfortably, and gradually return to activities that feel manageable. Avoid forcing movements that significantly increase your symptoms.",
      },
      {
        heading: "When to seek professional advice",
        text: "Consult a qualified healthcare professional if pain persists, repeatedly returns, or affects everyday activities. Seek urgent medical attention for severe back pain with new bladder or bowel problems, numbness around the groin, or significant new leg weakness.",
      },
    ],
  },
  {
    id: 2,
    category: "Posture and Mobility",
    title: "A Practical Guide to Better Posture",
    description:
      "Explore comfortable sitting positions, workstation habits, and simple ways to add movement to your day.",
    readTime: "5 min read",
    type: "Wellness Guide",
    icon: Activity,
    color: "purple",
    featured: false,
    content: [
      {
        heading: "Focus on comfortable movement",
        text: "There is no single perfect posture for everyone. Aim for a comfortable position and change it regularly rather than holding one rigid position throughout the day.",
      },
      {
        heading: "Improve your workspace",
        text: "Keep frequently used items within easy reach, position your screen comfortably, and support your feet when practical. Adjust your setup to suit your body.",
      },
      {
        heading: "Take regular breaks",
        text: "Short movement breaks can help reduce stiffness. Try standing, walking, or gently moving your shoulders according to your comfort and ability.",
      },
    ],
  },
  {
    id: 3,
    category: "Exercise and Recovery",
    title: "Returning to Exercise Safely",
    description:
      "Understand the importance of gradual progression, recovery time, and adapting activity to your current ability.",
    readTime: "7 min read",
    type: "Recovery Guide",
    icon: Dumbbell,
    color: "orange",
    featured: false,
    content: [
      {
        heading: "Start at a manageable level",
        text: "Begin with activity that suits your current fitness, symptoms, and functional ability. Increase duration or intensity gradually instead of changing everything at once.",
      },
      {
        heading: "Pay attention to your response",
        text: "Notice how you feel during activity and afterwards. If symptoms worsen significantly or do not settle, reduce the activity and seek advice when needed.",
      },
      {
        heading: "Personalise your recovery",
        text: "Recovery plans vary according to injury, surgery, health history, and goals. A physiotherapist can help you choose suitable exercises and progress them safely.",
      },
    ],
  },
  {
    id: 4,
    category: "Injury Prevention",
    title: "Everyday Habits for Injury Prevention",
    description:
      "Discover practical principles for preparing for activity, managing workload, and building strength over time.",
    readTime: "4 min read",
    type: "Prevention Guide",
    icon: ShieldCheck,
    color: "green",
    featured: false,
    content: [
      {
        heading: "Prepare for your activity",
        text: "Begin unfamiliar or demanding activities at an appropriate level. Use a gradual warm up that suits the activity and your physical abilities.",
      },
      {
        heading: "Increase workload gradually",
        text: "Avoid sudden large increases in training volume or physical demands. Allow time to adapt and recover between demanding sessions.",
      },
      {
        heading: "Respond to warning signs",
        text: "Do not ignore persistent pain, swelling, instability, or reduced function. A healthcare professional can assess your symptoms and guide your next steps.",
      },
    ],
  },
  {
    id: 5,
    category: "Pain Management",
    title: "Living Better with Joint Stiffness",
    description:
      "Learn about gentle movement, pacing daily activities, and seeking support for ongoing joint symptoms.",
    readTime: "6 min read",
    type: "Patient Guide",
    icon: HeartPulse,
    color: "blue",
    featured: false,
    content: [
      {
        heading: "Keep movement comfortable",
        text: "Gentle movement may help some people manage stiffness. Choose activities suited to your ability and avoid pushing through severe or unusual pain.",
      },
      {
        heading: "Balance activity and rest",
        text: "Break demanding tasks into manageable parts and adjust your routine according to your symptoms, energy, and recovery needs.",
      },
      {
        heading: "Get the right assessment",
        text: "Persistent or unexplained joint stiffness deserves professional assessment, particularly when accompanied by warmth, redness, swelling, or significant loss of function.",
      },
    ],
  },
  {
    id: 6,
    category: "Exercise and Recovery",
    title: "Preparing for Physiotherapy",
    description:
      "Find out what information to bring to an appointment and how to make the most of your first assessment.",
    readTime: "3 min read",
    type: "Getting Started",
    icon: BookOpen,
    color: "purple",
    featured: false,
    content: [
      {
        heading: "Share your health history",
        text: "Be ready to discuss your symptoms, when they started, relevant medical conditions, previous injuries, medicines, and any treatment you have received.",
      },
      {
        heading: "Describe your goals",
        text: "Tell your physiotherapist which everyday activities you want to improve, such as walking comfortably, returning to sport, or managing work tasks.",
      },
      {
        heading: "Ask questions",
        text: "Ask about your assessment, treatment options, expected progress, home exercises, and when you should seek further medical advice.",
      },
    ],
  },
];

const categories = [
  "All Resources",
  "Pain Management",
  "Posture and Mobility",
  "Exercise and Recovery",
  "Injury Prevention",
];

const faqs = [
  {
    question: "Are these resources a replacement for physiotherapy?",
    answer:
      "No. These guides provide general educational information. They cannot diagnose a condition or replace an individual assessment and personalised treatment plan.",
  },
  {
    question: "How do I know which guide is right for me?",
    answer:
      "Start with the topic that matches your question. If you have ongoing pain, a recent injury, recent surgery, or uncertainty about exercise, consult a qualified healthcare professional for individual guidance.",
  },
  {
    question: "Can I start exercises from a guide immediately?",
    answer:
      "Not every exercise is suitable for every person. Consider your health history and current symptoms, and ask a physiotherapist for guidance if you are unsure whether an activity is appropriate.",
  },
  {
    question: "When should I seek urgent medical attention?",
    answer:
      "Seek urgent help for symptoms such as new loss of bladder or bowel control with back pain, numbness around the groin, sudden major weakness, severe breathing difficulty, or other sudden severe symptoms.",
  },
];

function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [selectedResource, setSelectedResource] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const filteredResources = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All Resources" ||
        resource.category === activeCategory;

      const matchesSearch =
        !query ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const featuredResource = resources.find((resource) => resource.featured);
  const FeaturedIcon = featuredResource.icon;

  return (
    <main className="resources-page">
      <HeroSection
        eyebrow="PATIENT EDUCATION"
        title="Knowledge for a "
        highlight="Healthier You"
        description="Explore practical physiotherapy guides, recovery insights, and everyday wellness advice to help you make more informed decisions about your health."
        primaryText="Explore Resources"
        primaryLink="#resource-library"
        secondaryText="Book an Appointment"
        secondaryLink="/appointment"
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Physiotherapy and movement training"
        imageLabel="Learn. Move. Recover."
        imageDescription="Reliable guidance for your movement and recovery journey."
        showStats={false}
      />

      <section className="resources-intro section-space">
        <div className="resources-container">
          <SectionHeading
            eyebrow="YOUR WELLNESS LIBRARY"
            title="Understand Your Body"
            highlight="With Confidence"
            description="Explore clear, practical educational content designed to support your conversations with healthcare professionals."
          />

          <div className="resources-benefits">
            <div className="resource-benefit">
              <span className="benefit-icon">
                <BookOpen size={22} />
              </span>
              <div>
                <h3>Easy to Understand</h3>
                <p>Helpful information in simple language.</p>
              </div>
            </div>

            <div className="resource-benefit">
              <span className="benefit-icon">
                <HeartPulse size={22} />
              </span>
              <div>
                <h3>Patient Focused</h3>
                <p>Learn about movement, comfort, and recovery.</p>
              </div>
            </div>

            <div className="resource-benefit">
              <span className="benefit-icon">
                <ShieldCheck size={22} />
              </span>
              <div>
                <h3>Safety First</h3>
                <p>Know when professional guidance matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-resource section-space">
        <div className="resources-container">
          <div className="featured-card">
            <div className="featured-copy">
              <span className="resource-eyebrow">
                <Sparkles size={15} />
                FEATURED PATIENT GUIDE
              </span>

              <h2>{featuredResource.title}</h2>

              <p>{featuredResource.description}</p>

              <div className="resource-meta">
                <span>
                  <BookOpen size={15} />
                  {featuredResource.type}
                </span>
                <span>
                  <Clock3 size={15} />
                  {featuredResource.readTime}
                </span>
              </div>

              <button
                className="resource-button primary-resource-button"
                onClick={() => setSelectedResource(featuredResource)}
                type="button"
              >
                Read the Guide <ArrowRight size={17} />
              </button>
            </div>

            <div className="featured-visual">
              <div className="featured-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85"
                  alt="Person practising a gentle stretching exercise"
                  loading="lazy"
                />
              </div>
              <div className="featured-floating-card">
                <span className="featured-floating-icon">
                  <FeaturedIcon size={20} />
                </span>
                <div>
                  <strong>Start with the basics</strong>
                  <span>Small steps toward better understanding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="resource-library section-space"
        id="resource-library"
      >
        <div className="resources-container">
          <SectionHeading
            eyebrow="RESOURCE LIBRARY"
            title="Find the Guidance"
            highlight="You Need"
            description="Search our educational library or select a category to explore topics that matter to you."
          />

          <div className="resource-search-wrap">
            <Search size={20} />
            <input
              type="search"
              aria-label="Search patient resources"
              placeholder="Search pain, posture, recovery..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            {searchTerm && (
              <button
                className="clear-search"
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="resource-filters" aria-label="Resource categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`resource-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="resource-results-heading">
            <div>
              <span className="resource-results-label">EXPLORE ARTICLES</span>
              <h3>
                {activeCategory === "All Resources"
                  ? "All Patient Resources"
                  : activeCategory}
              </h3>
            </div>
            <span className="resource-count">
              {filteredResources.length}{" "}
              {filteredResources.length === 1 ? "resource" : "resources"}
            </span>
          </div>

          <motion.div layout className="resources-grid">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource) => {
                const ResourceIcon = resource.icon;

                return (
                  <motion.article
                    layout
                    key={resource.id}
                    className="resource-card"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className={`resource-card-icon ${resource.color}`}>
                      <ResourceIcon size={23} strokeWidth={1.8} />
                    </div>

                    <div className="resource-card-topline">
                      <span className="resource-type">{resource.type}</span>
                      <span className="resource-read-time">
                        <Clock3 size={13} />
                        {resource.readTime}
                      </span>
                    </div>

                    <span className="resource-category">
                      {resource.category}
                    </span>

                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>

                    <button
                      className="resource-read-link"
                      type="button"
                      onClick={() => setSelectedResource(resource)}
                    >
                      Read Article <ArrowRight size={16} />
                    </button>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredResources.length === 0 && (
            <div className="resource-empty-state">
              <span>
                <Search size={27} />
              </span>
              <h3>No matching resources found</h3>
              <p>
                Try another search term or choose a different category.
              </p>
              <button
                type="button"
                className="resource-button primary-resource-button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Resources");
                }}
              >
                View All Resources
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="resource-journey section-space">
        <div className="resources-container">
          <div className="resource-journey-panel">
            <div className="journey-icon">
              <CalendarDays size={26} />
            </div>
            <div className="journey-copy">
              <span className="resource-eyebrow">YOUR NEXT STEP</span>
              <h2>Have Questions About Your Recovery?</h2>
              <p>
                Reading can help you understand your options. A personalised
                assessment can help you decide what to do next.
              </p>
            </div>
            <Link className="resource-button journey-button" to="/appointment">
              Book a Consultation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="resources-faq section-space">
        <div className="resources-container resources-faq-layout">
          <div className="resources-faq-intro">
            <span className="resource-eyebrow">HELPFUL ANSWERS</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              A few important things to know before using our patient
              education library.
            </p>
            <Link to="/contact" className="resource-text-link">
              Still have questions? Contact us <ArrowRight size={16} />
            </Link>
          </div>

          <div className="resources-faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`resources-faq-item ${
                  openFaq === index ? "open" : ""
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="resources-faq-question"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={19} />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      className="resources-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resource-disclaimer">
        <div className="resources-container">
          <ShieldCheck size={19} />
          <p>
            <strong>Health information notice:</strong> These resources are
            for general educational purposes only. They are not a diagnosis
            or an individual treatment plan. Consult a qualified healthcare
            professional for advice specific to your situation. Seek urgent
            care for severe or sudden warning symptoms.
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="YOUR HEALTH JOURNEY"
        title="Take the Next Step Towards Better Movement"
        description="Our physiotherapy team can help you understand your needs and explore suitable care options."
        buttonText="Book Your Appointment"
        buttonLink="/appointment"
        secondaryText="Contact Our Team"
        secondaryLink="/contact"
      />

      <AnimatePresence>
        {selectedResource && (
          <motion.div
            className="resource-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedResource(null);
              }
            }}
          >
            <motion.div
              className="resource-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="resource-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              <div className="resource-modal-header">
                <span className="resource-modal-label">
                  <BookOpen size={16} />
                  PATIENT EDUCATION
                </span>
                <button
                  type="button"
                  className="resource-modal-close"
                  onClick={() => setSelectedResource(null)}
                  aria-label="Close article"
                >
                  <X size={21} />
                </button>
              </div>

              <div className="resource-modal-body">
                <span className="resource-category">
                  {selectedResource.category}
                </span>
                <h2 id="resource-modal-title">
                  {selectedResource.title}
                </h2>
                <p className="resource-modal-description">
                  {selectedResource.description}
                </p>

                <div className="resource-modal-meta">
                  <span>
                    <Clock3 size={15} />
                    {selectedResource.readTime}
                  </span>
                  <span>
                    <Bookmark size={15} />
                    {selectedResource.type}
                  </span>
                </div>

                <div className="resource-article-content">
                  {selectedResource.content.map((section, index) => (
                    <section key={section.heading}>
                      <h3>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {section.heading}
                      </h3>
                      <p>{section.text}</p>
                    </section>
                  ))}
                </div>

                <div className="resource-article-notice">
                  This guide provides general information. Your needs may
                  differ, so seek professional advice when appropriate.
                </div>

                <Link
                  className="resource-button primary-resource-button modal-book-button"
                  to="/appointment"
                  onClick={() => setSelectedResource(null)}
                >
                  Discuss Your Needs <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Resources;
