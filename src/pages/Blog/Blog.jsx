import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  ArrowUpRight,
  Clock3,
  BookOpen,
  HeartPulse,
  Activity,
  PersonStanding,
  MoveRight,
} from "lucide-react";

import "./Blog.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CTASection from "../../components/CTASection/CTASection";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Back Pain and How to Manage It",
    excerpt:
      "Learn about common causes of back pain, everyday habits that may affect your spine, and when to seek professional guidance.",
    category: "Pain Management",
    date: "October 10, 2026",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg",
    icon: HeartPulse,
    featured: true,
  },
  {
    id: 2,
    title: "Simple Exercises to Improve Daily Mobility",
    excerpt:
      "Discover how gentle movement and consistent exercise can support flexibility, balance and everyday activities.",
    category: "Movement",
    date: "October 06, 2026",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg",
    icon: Activity,
  },
  {
    id: 3,
    title: "Better Posture During Long Working Hours",
    excerpt:
      "Explore practical workstation habits and movement breaks that can make long hours at your desk more comfortable.",
    category: "Posture",
    date: "October 02, 2026",
    readTime: "4 min read",
    image:
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    icon: PersonStanding,
  },
  {
    id: 4,
    title: "Returning to Activity After an Injury",
    excerpt:
      "Understand why a gradual return to activity and professional guidance can be important during recovery.",
    category: "Recovery",
    date: "September 26, 2026",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    icon: HeartPulse,
  },
  {
    id: 5,
    title: "Why Movement Breaks Matter Every Day",
    excerpt:
      "Small movement breaks throughout the day can help you build a more active routine around work and home life.",
    category: "Movement",
    date: "September 20, 2026",
    readTime: "4 min read",
    image:
      "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
    icon: Activity,
  },
  {
    id: 6,
    title: "What to Expect at Your First Physiotherapy Visit",
    excerpt:
      "Get familiar with the assessment process, goal setting and the conversations that can shape your care plan.",
    category: "Recovery",
    date: "September 14, 2026",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/7659560/pexels-photo-7659560.jpeg",
    icon: BookOpen,
  },
];

const categories = [
  "All Articles",
  "Pain Management",
  "Movement",
  "Posture",
  "Recovery",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function BlogCard({ post, reduceMotion }) {
  const Icon = post.icon;

  return (
    <motion.article
      className="rbBlogCard"
      variants={itemVariants}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <Link
        to="/contact"
        className="rbBlogImageLink"
        aria-label={`Ask our team about ${post.title}`}
      >
        <img
          src={post.image}
          alt={post.title}
          className="rbBlogImage"
          loading="lazy"
        />

        <span className="rbBlogImageIcon">
          <Icon size={18} />
        </span>
      </Link>

      <div className="rbBlogCardBody">
        <div className="rbBlogMeta">
          <span className="rbBlogCategory">{post.category}</span>
          <span className="rbBlogReadTime">
            <Clock3 size={13} />
            {post.readTime}
          </span>
        </div>

        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>

        <div className="rbBlogCardFooter">
          <span className="rbBlogDate">{post.date}</span>

          <Link
            to="/contact"
            className="rbBlogReadLink"
            aria-label={`Ask our team about ${post.title}`}
          >
            Explore topic
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const reduceMotion = useReducedMotion();

  const featuredPost = blogPosts.find((post) => post.featured);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Articles" ||
        post.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visiblePosts = filteredPosts.filter(
    (post) => post.id !== featuredPost?.id
  );

  return (
    <main className="rbBlogPage">
      <HeroSection
        eyebrow="THE REHABICS JOURNAL"
        title="Move better."
        highlight="Live with confidence."
        description="Explore practical insights about physiotherapy, movement, posture and recovery. Learn more about your body and make informed choices for your wellbeing."
        buttonText="Explore Articles"
        buttonLink="#blogLibrary"
        secondaryText="Book an Appointment"
        secondaryLink="/appointment"
        image="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
        imageAlt="Physiotherapist supporting a patient during rehabilitation"
        imageLabel="Knowledge supports recovery"
        imageDescription="Practical guidance for everyday movement"
        features={[
          "Insights about movement",
          "Everyday wellbeing guidance",
          "Information about recovery",
        ]}
      />

      <section className="rbBlogIntro rhSection">
        <div className="rhContainer">
          <div className="rbBlogIntroInner">
            <span className="rhEyebrow">THE LATEST THINKING</span>
            <h2 className="rhSectionHeading">
              Understand your body.
              <br />
              <span>Take your next step.</span>
            </h2>
            <p>
              Explore helpful topics, discover new perspectives and learn
              questions you may want to discuss with your physiotherapist.
            </p>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="rbFeaturedSection rhSection">
          <div className="rhContainer">
            <div className="rbSectionTop">
              <div>
                <span className="rhEyebrow">EDITOR'S PICK</span>
                <h2 className="rhSectionHeading">Featured article</h2>
              </div>

              <span className="rbFeaturedLabel">
                <BookOpen size={15} />
                Recommended reading
              </span>
            </div>

            <div className="rbFeaturedCard">
              <div className="rbFeaturedImageWrap">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="rbFeaturedImage"
                  loading="lazy"
                />
              </div>

              <div className="rbFeaturedContent">
                <span className="rbBlogCategory">
                  {featuredPost.category}
                </span>

                <h3>{featuredPost.title}</h3>

                <p>{featuredPost.excerpt}</p>

                <div className="rbFeaturedMeta">
                  <span>{featuredPost.date}</span>
                  <span>
                    <Clock3 size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link to="/contact" className="rhButton rhButtonPrimary">
                  Ask About This Topic
                  <MoveRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        className="rbBlogLibrary rhSection"
        id="blogLibrary"
      >
        <div className="rhContainer">
          <div className="rbSectionTop rbLibraryHeading">
            <div>
              <span className="rhEyebrow">EXPLORE THE JOURNAL</span>
              <h2 className="rhSectionHeading">Latest articles</h2>
              <p className="rbSectionDescription">
                Find topics that match your interests and everyday needs.
              </p>
            </div>

            <span className="rbArticleCount">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          <div className="rbBlogToolbar">
            <div className="rbCategoryFilters" aria-label="Filter articles">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`rbFilterButton ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="rbBlogSearch">
              <Search size={18} />
              <input
                type="search"
                placeholder="Search articles"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                aria-label="Search blog articles"
              />
            </label>
          </div>

          {visiblePosts.length > 0 ? (
            <motion.div
              className="rbBlogGrid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              key={`${activeCategory}-${searchQuery}`}
            >
              {visiblePosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          ) : (
            <div className="rbBlogEmpty">
              <Search size={28} />
              <h3>No matching articles found</h3>
              <p>Try another search or select a different category.</p>
              <button
                type="button"
                className="rhButton rhButtonOutline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Articles");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

          <p className="rbBlogDisclaimer">
            These topics provide general educational information. They do not
            replace an individual assessment or advice from a qualified
            healthcare professional.
          </p>
        </div>
      </section>

      <section className="rbBlogTopics rhSection">
        <div className="rhContainer">
          <div className="rbTopicsPanel">
            <div className="rbTopicsContent">
              <span className="rhEyebrow">START WITH WHAT MATTERS</span>
              <h2 className="rhSectionHeading">
                What would you like to learn about?
              </h2>
              <p>
                Choose a topic to discover relevant articles from the Rehabics
                journal.
              </p>
            </div>

            <div className="rbTopicButtons">
              {categories.slice(1).map((category) => (
                <button
                  type="button"
                  key={category}
                  className="rbTopicButton"
                  onClick={() => {
                    setActiveCategory(category);
                    document
                      .getElementById("blogLibrary")
                      ?.scrollIntoView({
                        behavior: reduceMotion ? "auto" : "smooth",
                      });
                  }}
                >
                  {category}
                  <ArrowUpRight size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="YOUR WELLBEING MATTERS"
        title="Have a question about your recovery?"
        description="Our team can help you understand the available care options and guide you towards an appropriate next step."
        buttonText="Book an Appointment"
        buttonLink="/appointment"
        secondaryText="Contact Our Team"
        secondaryLink="/contact"
      />
    </main>
  );
}