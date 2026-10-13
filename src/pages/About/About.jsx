
import HeroSection from "../../components/HeroSection/HeroSection";
import CTASection from "../../components/CTASection/CTASection";
import "./About.css";

const values = [
  {
    number: "01",
    title: "Patient First",
    description:
      "Every recovery journey is different. We focus on your goals, comfort and individual needs.",
    icon: "♡",
  },
  {
    number: "02",
    title: "Expert Guidance",
    description:
      "Get structured physiotherapy guidance designed to help you move with confidence.",
    icon: "✳",
  },
  {
    number: "03",
    title: "Consistent Progress",
    description:
      "Build better habits through guided exercises, clear routines and steady progress.",
    icon: "↗",
  },
];

const principles = [
  {
    title: "Care that understands you",
    description:
      "We believe effective physiotherapy starts with understanding your challenges, lifestyle and recovery goals.",
  },
  {
    title: "Movement with purpose",
    description:
      "Every exercise should have a purpose. We encourage mindful movement that supports everyday activities.",
  },
  {
    title: "Progress you can trust",
    description:
      "We value consistency, realistic goals and guidance that helps you stay committed to your recovery.",
  },
];

function AboutPage() {
  return (
    <main className="rehabAbout">
      <HeroSection />

      <section className="rhAboutIntro rhSection">
        <div className="rhContainer rhAboutIntroGrid">
          <div className="rhAboutIntroVisual">
            <div className="rhAboutImageMain">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85"
                alt="Physiotherapy and guided movement session"
              />
            </div>

            <div className="rhAboutImageNote">
              <span className="rhAboutNoteIcon">✳</span>
              <div>
                <strong>Move better. Feel better.</strong>
                <p>Your journey, your pace.</p>
              </div>
            </div>
          </div>

          <div className="rhAboutIntroContent">
            <span className="rhEyebrow">ABOUT REHABICS</span>

            <h2>
              Helping you move towards a <em>better you.</em>
            </h2>

            <p>
              Recovery is more than getting back on your feet. It is about
              rebuilding confidence, improving movement and feeling comfortable
              in your everyday life.
            </p>

            <p>
              Rehabics brings a thoughtful approach to physiotherapy, combining
              guided movement, personalised goals and consistent support to
              make your recovery journey feel more manageable.
            </p>

            <a className="rhButton rhButtonPrimary" href="/contact">
              Start Your Journey <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="rhAboutStory rhSection">
        <div className="rhContainer rhAboutStoryGrid">
          <div className="rhAboutStoryHeading">
            <span className="rhEyebrow">OUR STORY</span>
            <h2>
              A more thoughtful way to approach <em>recovery.</em>
            </h2>
          </div>

          <div className="rhAboutStoryContent">
            <p>
              Physiotherapy can feel overwhelming when you are unsure where
              to begin or how to stay consistent. We believe the experience
              should feel clearer, more supportive and easier to follow.
            </p>

            <p>
              That belief shapes Rehabics. Our focus is on helping people
              understand their movement, follow purposeful routines and take
              practical steps towards their recovery goals.
            </p>

            <div className="rhAboutStoryQuote">
              <span aria-hidden="true">“</span>
              <p>
                Small steps, taken consistently, can make a meaningful
                difference in the way you move and live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rhAboutMission rhSection">
        <div className="rhContainer">
          <div className="rhAboutMissionCard">
            <div className="rhAboutMissionTop">
              <span className="rhEyebrow">OUR MISSION</span>
              <span className="rhAboutMissionMark" aria-hidden="true">
                ✳
              </span>
            </div>

            <h2>
              Making better movement part of <em>everyday life.</em>
            </h2>

            <p>
              Our mission is to make physiotherapy guidance more approachable
              and help people build confidence through purposeful movement,
              consistent practice and a clearer understanding of their bodies.
            </p>
          </div>
        </div>
      </section>

      <section className="rhAboutValues rhSection">
        <div className="rhContainer">
          <div className="rhAboutSectionHeading">
            <span className="rhEyebrow">WHAT MATTERS TO US</span>
            <h2>
              Care built around <em>you.</em>
            </h2>
            <p>
              The principles that shape how we think about your recovery.
            </p>
          </div>

          <div className="rhAboutValuesGrid">
            {values.map((value) => (
              <article className="rhAboutValueCard" key={value.number}>
                <div className="rhAboutValueTop">
                  <span className="rhAboutValueNumber">{value.number}</span>
                  <span className="rhAboutValueIcon" aria-hidden="true">
                    {value.icon}
                  </span>
                </div>

                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <span className="rhAboutValueLine" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rhAboutPrinciples rhSection">
        <div className="rhContainer rhAboutPrinciplesGrid">
          <div className="rhAboutPrinciplesIntro">
            <span className="rhEyebrow">OUR APPROACH</span>
            <h2>
              Thoughtful care. <em>Meaningful progress.</em>
            </h2>
            <p>
              We keep the focus on what matters most: understanding your needs,
              building consistency and supporting your next step.
            </p>
          </div>

          <div className="rhAboutPrinciplesList">
            {principles.map((principle, index) => (
              <article className="rhAboutPrinciple" key={principle.title}>
                <span className="rhAboutPrincipleNumber">
                  0{index + 1}
                </span>

                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

export default AboutPage;
