
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Activity,
  Dumbbell,
  UserRound,
  Mail,
  CheckCircle2,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";

import "./Blog.css";

const articles = [
  {
    id: 1,
    category: "Back Pain",
    title: "Understanding Lower Back Pain",
    description:
      "Explore common reasons for lower back discomfort, helpful daily habits, and when to seek professional support.",
    date: "Oct 08, 2026",
    readTime: "6 min read",
    author: "Rehabics Care Team",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    featured: true,
    content: [
      {
        heading: "Why can back pain happen?",
        text: "Lower back pain can be associated with muscle strain, changes in activity, prolonged positions, or a range of other causes. The right approach depends on your symptoms and individual health history.",
      },
      {
        heading: "What daily habits may help?",
        text: "Where comfortable, keep moving, change positions regularly, and return gradually to everyday activities. Avoid forcing movements that significantly worsen your symptoms.",
      },
      {
        heading: "When should you seek help?",
        text: "Speak with a healthcare professional if pain persists, returns often, or affects daily activities. New bladder or bowel problems, numbness around the groin, or sudden significant leg weakness with back pain require urgent medical attention.",
      },
    ],
  },
  {
    id: 2,
    category: "Posture",
    title: "Simple Ways to Improve Your Posture at Work",
    description:
      "Practical workstation habits and movement breaks to help you feel more comfortable throughout your working day.",
    date: "Oct 05, 2026",
    readTime: "5 min read",
    author: "Rehabics Care Team",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    featured: false,
    content: [
      {
        heading: "Find a comfortable position",
        text: "Arrange your screen, chair, and frequently used items so you can work comfortably. There is no single perfect posture for everyone.",
      },
      {
        heading: "Make movement part of your routine",
        text: "Take regular breaks to stand, walk, or gently move your shoulders and back. Changing position can be more useful than trying to hold one posture all day.",
      },
      {
        heading: "Pay attention to ongoing discomfort",
        text: "If discomfort continues or interferes with your work, consider seeking an assessment from a qualified healthcare professional.",
      },
    ],
  },
  {
    id: 3,
    category: "Sports Injury",
    title: "Knee Injury Prevention for Active People",
    description:
      "Learn general principles for warming up, building strength, and increasing exercise demands gradually.",
    date: "Oct 01, 2026",
    readTime: "7 min read",
    author: "Rehabics Care Team",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    featured: false,
    content: [
      {
        heading: "Build up gradually",
        text: "Increase the duration and intensity of exercise in manageable steps. Sudden changes in training demands can be difficult for the body to adapt to.",
      },
      {
        heading: "Include suitable strength work",
        text: "A well planned exercise routine can include strength, balance, and movement practice suited to your activity and current ability.",
      },
      {
        heading: "Do not ignore symptoms",
        text: "Persistent swelling, instability, severe pain, or difficulty bearing weight should be assessed by an appropriate healthcare professional.",
      },
    ],
  },
  {
    id: 4,
    category: "Neck Pain",
    title: "Understanding Neck Pain and Stiffness",
    description:
      "Learn about common contributing factors, comfortable movement, and signs that may need professional assessment.",
    date: "Sep 26, 2026",
    readTime: "6 min read",
    author: "Rehabics Care Team",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    featured: false,
    content: [
      {
        heading: "Common contributing factors",
        text: "Neck discomfort may relate to muscle strain, sustained positions, activity changes, or other health conditions. Symptoms alone cannot confirm the cause.",
      },
      {
        heading: "Keep movements comfortable",
        text: "Try changing position regularly and moving gently within a comfortable range. Avoid aggressive stretching or movements that worsen symptoms.",
      },
      {
        heading: "Know when to get checked",
        text: "Seek professional advice for persistent symptoms. Severe pain after an injury, new weakness, or other sudden neurological symptoms may need urgent assessment.",
      },
    ],
  },
  {
    id: 5,
    category: "Senior Health",
    title: "Staying Active and Independent as You Age",
    description:
      "Discover how suitable movement, balance activities, and strength work can support everyday function.",
    date: "Sep 20, 2026",
    readTime: "5 min read",
    author: "Rehabics Care Team",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    featured: false,
    content: [
      {
        heading: "Choose activities you enjoy",
        text: "Walking, chair based movement, and other suitable activities can help people stay active. The best choice depends on health, balance, and mobility.",
      },
      {
        heading: "Practise strength and balance safely",
        text: "A suitable programme may help support daily tasks and confidence. People with falls, dizziness, or mobility difficulties should seek individual guidance.",
      },
      {
        heading: "Make your environment safer",
        text: "Good lighting, clear walkways, and suitable footwear may help reduce common hazards at home.",
      },
    ],
  },
  {
    id: 6,
    category: "General Wellness",
    title: "Daily Habits That Support Your Recovery",
    description:
      "Understand the role of activity, sleep, pacing, and consistency in a balanced approach to wellbeing.",
    date: "Sep 14, 2026",
    readTime: "6 min read",
    author: "Rehabics Care Team",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85",
    featured: false,
    content: [
      {
        heading: "Build a consistent routine",
        text: "Regular routines for movement, rest, and everyday tasks may make it easier to manage your activity and energy.",
      },
      {
        heading: "Give recovery enough time",
        text: "Recovery varies by person and condition. Allow time for rest and follow the plan recommended by your healthcare professional.",
      },
      {
        heading: "Keep your goals realistic",
        text: "Small, achievable goals can help you track progress. Adjust your routine if symptoms change or your care team recommends a different approach.",
      },
    ],
  },
  {
    id: 7,
    category: "Rehabilitation",
    title: "What to Expect at Your First Physiotherapy Visit",
    description:
      "Prepare for your appointment and learn what information can help your physiotherapist understand your needs.",
    date: "Sep 09, 2026",
    readTime: "4 min read",
    author: "Rehabics Care Team",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    featured: false,
    content: [
      {
        heading: "Talk about your symptoms",
        text: "Your physiotherapist may ask when your symptoms started, what makes them better or worse, and how they affect your daily routine.",
      },
      {
        heading: "Discuss your goals",
        text: "Share the activities you would like to improve. These may include walking, working comfortably, returning to sport, or managing household tasks.",
      },
      {
        heading: "Understand your plan",
        text: "Ask about assessment findings, treatment options, home activities, and how progress will be reviewed.",
      },
    ],
  },
  {
    id: 8,
    category: "Workplace Health",
    title: "Healthy Movement During a Busy Workday",
    description:
      "Simple ideas for adding movement breaks and managing long periods of desk based work.",
    date: "Sep 03, 2026",
    readTime: "4 min read",
    author: "Rehabics Care Team",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    featured: false,
    content: [
      {
        heading: "Break up long sitting periods",
        text: "Where possible, change position regularly and include short walking or standing breaks in your day.",
      },
      {
        heading: "Make your workspace practical",
        text: "Keep essential items within easy reach and adjust your chair and screen for comfort. Small changes can make your setup easier to use.",
      },
      {
        heading: "Listen to your body",
        text: "If symptoms persist or become more troublesome, seek advice rather than relying only on general online information.",
      },
    ],
  },
  {
    id: 9,
    category: "Knee Pain",
    title: "Understanding Knee Pain During Everyday Activities",
    description:
      "Explore possible contributors to knee discomfort and learn when an assessment may be helpful.",
    date: "Aug 28, 2026",
    readTime: "5 min read",
    author: "Rehabics Care Team",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
    featured: false,
    content: [
      {
        heading: "Look at the whole picture",
        text: "Knee pain can have several causes. Recent activity, previous injuries, other health conditions, and the nature of the symptoms all matter.",
      },
      {
        heading: "Adapt activity to your comfort",
        text: "Consider reducing activities that clearly aggravate symptoms while maintaining comfortable movement where appropriate.",
      },
      {
        heading: "Get an assessment when needed",
        text: "A hot and swollen knee, major injury, deformity, or inability to bear weight may require urgent medical assessment.",
      },
    ],
  },
];

const categories = [
  "All Articles",
  "Back Pain",
  "Neck Pain",
  "Sports Injury",
  "Knee Pain",
  "Rehabilitation",
  "Posture",
  "Workplace Health",
  "Senior Health",
  "General Wellness",
];

const popularTopics = [
  "Back Pain",
  "Knee Pain",
  "Posture",
  "Sports Injury",
  "Rehabilitation",
  "Workplace Health",
  "Senior Health",
  "General Wellness",
];

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const articlesPerPage = 6;

  const filteredArticles = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Articles" ||
        article.category === activeCategory;

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / articlesPerPage)
  );

  const visibleArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const featuredArticle = articles.find((article) => article.featured);

  function updateCategory(category) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function updateSearch(value) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  function subscribeNewsletter(event) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterMessage(
      "Thank you! Newsletter delivery needs to be connected to the clinic email service."
    );
  }

  return (
    <main className="blog-page">
      <HeroSection
        eyebrow="BLOG AND ARTICLES"
        title="Expert Insights for "
        highlight="Your Healthier Tomorrow"
        description="Explore practical advice, physiotherapy education, rehabilitation insights, and everyday wellness information from the Rehabics team."
        primaryText="Explore Articles"
        primaryLink="#blog-library"
        secondaryText="Book an Appointment"
        secondaryLink="/appointment"
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Physiotherapy professional helping a patient with movement"
        imageLabel="Learn. Move. Recover."
        imageDescription="Helpful information to support informed conversations about your health."
        showStats={false}
      />

      <section className="blog-featured-section">
        <div className="blog-container">
          <div className="blog-featured-card">
            <div className="blog-featured-image">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                loading="lazy"
              />
              <span className="blog-featured-badge">
                <BookOpen size={14} />
                Featured Article
              </span>
            </div>

            <div className="blog-featured-copy">
              <span className="blog-eyebrow">
                {featuredArticle.category}
              </span>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.description}</p>

              <div className="blog-card-meta">
                <span>
                  <CalendarDays size={15} />
                  {featuredArticle.date}
                </span>
                <span>
                  <Clock3 size={15} />
                  {featuredArticle.readTime}
                </span>
              </div>

              <button
                type="button"
                className="blog-primary-button"
                onClick={() => setSelectedArticle(featuredArticle)}
              >
                Read Featured Article <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-main-section" id="blog-library">
        <div className="blog-container">
          <SectionHeading
            eyebrow="THE REHABICS JOURNAL"
            title="Explore Our Latest"
            highlight="Articles"
            description="Find useful information on pain, movement, rehabilitation, and healthier everyday habits."
          />

          <div className="blog-category-list" aria-label="Article categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`blog-category-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => updateCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-content-layout">
            <div className="blog-articles-column">
              <div className="blog-list-heading">
                <div>
                  <span className="blog-eyebrow">HEALTH AND WELLNESS</span>
                  <h3>
                    {activeCategory === "All Articles"
                      ? "Latest Articles"
                      : activeCategory}
                  </h3>
                </div>
                <span className="blog-result-count">
                  {filteredArticles.length} articles
                </span>
              </div>

              <motion.div layout className="blog-articles-grid">
                <AnimatePresence mode="popLayout">
                  {visibleArticles.map((article) => (
                    <motion.article
                      layout
                      key={article.id}
                      className="blog-article-card"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22 }}
                    >
                      <button
                        type="button"
                        className="blog-card-image-button"
                        onClick={() => setSelectedArticle(article)}
                        aria-label={`Read ${article.title}`}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                        />
                      </button>

                      <div className="blog-article-body">
                        <span className="blog-eyebrow">
                          {article.category}
                        </span>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>

                        <div className="blog-card-meta">
                          <span>
                            <CalendarDays size={14} />
                            {article.date}
                          </span>
                          <span>
                            <Clock3 size={14} />
                            {article.readTime}
                          </span>
                        </div>

                        <button
                          type="button"
                          className="blog-read-link"
                          onClick={() => setSelectedArticle(article)}
                        >
                          Read Article <ArrowRight size={16} />
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredArticles.length === 0 && (
                <div className="blog-empty-state">
                  <Search size={30} />
                  <h3>No articles found</h3>
                  <p>Try another topic or select a different category.</p>
                  <button
                    type="button"
                    className="blog-primary-button"
                    onClick={() => {
                      updateSearch("");
                      updateCategory("All Articles");
                    }}
                  >
                    Show All Articles
                  </button>
                </div>
              )}

              {filteredArticles.length > articlesPerPage && (
                <nav className="blog-pagination" aria-label="Article pages">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) => Math.max(1, page - 1))
                    }
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      type="button"
                      key={index + 1}
                      className={
                        currentPage === index + 1 ? "active" : ""
                      }
                      onClick={() => setCurrentPage(index + 1)}
                      aria-current={
                        currentPage === index + 1 ? "page" : undefined
                      }
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(totalPages, page + 1)
                      )
                    }
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    <ChevronRight size={18} />
                  </button>
                </nav>
              )}
            </div>

            <aside className="blog-sidebar">
              <div className="blog-sidebar-card blog-search-card">
                <h3>Search Articles</h3>
                <label className="blog-search-field">
                  <Search size={18} />
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => updateSearch(event.target.value)}
                    placeholder="Search articles or topics"
                    aria-label="Search articles or topics"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => updateSearch("")}
                      aria-label="Clear search"
                    >
                      <X size={16} />
                    </button>
                  )}
                </label>
              </div>

              <div className="blog-sidebar-card">
                <h3>Popular Topics</h3>
                <div className="blog-popular-topics">
                  {popularTopics.map((topic) => {
                    const count = articles.filter(
                      (article) => article.category === topic
                    ).length;

                    return (
                      <button
                        key={topic}
                        type="button"
                        className={
                          activeCategory === topic ? "active" : ""
                        }
                        onClick={() => updateCategory(topic)}
                      >
                        <span>{topic}</span>
                        <span className="blog-topic-count">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="blog-sidebar-card blog-newsletter-card">
                <div className="blog-newsletter-icon">
                  <Mail size={22} />
                </div>
                <h3>Wellness Newsletter</h3>
                <p>
                  Get new health articles and practical wellness tips in your
                  inbox.
                </p>

                <form onSubmit={subscribeNewsletter}>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setNewsletterMessage("");
                    }}
                    placeholder="Your email address"
                    aria-label="Your email address"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>

                {newsletterMessage && (
                  <p
                    className="blog-newsletter-message"
                    role="status"
                  >
                    {newsletterMessage}
                  </p>
                )}

                <span className="blog-privacy-note">
                  Subscription service connection required.
                </span>
              </div>

              <div className="blog-sidebar-cta">
                <span className="blog-sidebar-cta-icon">
                  <HeartPulse size={22} />
                </span>
                <h3>Need Personal Guidance?</h3>
                <p>
                  Online articles cannot replace an individual assessment.
                  Talk with our care team about your needs.
                </p>
                <Link to="/appointment">
                  Book an Appointment <ArrowRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="blog-trust-strip">
        <div className="blog-container blog-trust-content">
          <span className="blog-trust-icon">
            <CheckCircle2 size={23} />
          </span>
          <div>
            <h3>Clear Information for Better Decisions</h3>
            <p>
              Our blog offers general educational information. Your care
              should always reflect your individual health needs.
            </p>
          </div>
          <Link to="/resources">
            Visit Patient Resources <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTASection
        eyebrow="YOUR HEALTH JOURNEY"
        title="Ready to Take the Next Step?"
        description="Learn about your options and speak with our team about care suited to your needs."
        buttonText="Book Your Appointment"
        buttonLink="/appointment"
        secondaryText="Contact Our Team"
        secondaryLink="/contact"
      />

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="blog-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedArticle(null);
              }
            }}
          >
            <motion.article
              className="blog-article-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="blog-modal-title"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              <div className="blog-modal-topbar">
                <span>
                  <BookOpen size={16} />
                  REHABICS JOURNAL
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                >
                  <X size={21} />
                </button>
              </div>

              <div className="blog-modal-scroll">
                <img
                  className="blog-modal-image"
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                />

                <div className="blog-modal-content">
                  <span className="blog-eyebrow">
                    {selectedArticle.category}
                  </span>
                  <h2 id="blog-modal-title">{selectedArticle.title}</h2>
                  <p className="blog-modal-description">
                    {selectedArticle.description}
                  </p>

                  <div className="blog-modal-meta">
                    <span>
                      <UserRound size={15} />
                      {selectedArticle.author}
                    </span>
                    <span>
                      <CalendarDays size={15} />
                      {selectedArticle.date}
                    </span>
                    <span>
                      <Clock3 size={15} />
                      {selectedArticle.readTime}
                    </span>
                  </div>

                  <div className="blog-modal-article-content">
                    {selectedArticle.content.map((section, index) => (
                      <section key={section.heading}>
                        <h3>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          {section.heading}
                        </h3>
                        <p>{section.text}</p>
                      </section>
                    ))}
                  </div>

                  <div className="blog-medical-notice">
                    This article is for general educational purposes only.
                    It does not provide a diagnosis or personalised
                    treatment. Consult a qualified healthcare professional
                    about your own symptoms.
                  </div>

                  <Link
                    to="/appointment"
                    className="blog-primary-button blog-modal-cta"
                    onClick={() => setSelectedArticle(null)}
                  >
                    Discuss Your Needs <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Blog;
