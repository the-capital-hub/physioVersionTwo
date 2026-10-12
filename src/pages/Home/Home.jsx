import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Activity,
  PersonStanding,
  Dumbbell,
  Brain,
  Bone,
  Video,
  CalendarDays,
  ClipboardCheck,
  MessageCircle,
  Star,
  ShieldCheck,
  Clock3,
  ChevronDown,
  Play,
  MoveRight,
  Stethoscope,
  Users,
  Sparkles,
} from "lucide-react";

import "./Home.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CTASection from "../../components/CTASection/CTASection";
import why from "../../assets/why.jpeg";
import condition from "../../assets/condition.png";
import online from "../../assets/online.png";

const services = [
  {
    icon: Bone,
    title: "Orthopaedic Physiotherapy",
    description:
      "Personalised care for joint pain, back pain, neck pain and movement difficulties.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=85",
    link: "/services/orthopaedic-physiotherapy",
  },
  {
    icon: Activity,
    title: "Sports Rehabilitation",
    description:
      "Recover from sports injuries and build strength for a confident return to activity.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=85",
    link: "/services/sports-rehabilitation",
  },
  {
    icon: Brain,
    title: "Neurological Physiotherapy",
    description:
      "Support for balance, coordination and everyday movement through guided therapy.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    link: "/services/neurological-physiotherapy",
  },
  {
    icon: HeartPulse,
    title: "Post Surgery Recovery",
    description:
      "A structured rehabilitation plan to help you regain mobility after surgery.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=85",
    link: "/services/post-surgery-recovery",
  },
  {
    icon: PersonStanding,
    title: "Mobility and Strength",
    description:
      "Improve flexibility, posture, strength and confidence in your daily movements.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=85",
    link: "/services/mobility-and-strength",
  },
  {
    icon: Video,
    title: "Online Physiotherapy",
    description:
      "Receive expert guidance and exercise support from the comfort of your home.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=85",
    link: "/online-physiotherapy",
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Understand your needs",
    description:
      "Tell us about your symptoms, goals and the challenges you face every day.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Get your assessment",
    description:
      "Work with a physiotherapist to understand your movement and recovery needs.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Follow your plan",
    description:
      "Get guided exercises and a personalised plan designed around your goals.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Track your progress",
    description:
      "Review your progress and adapt your care plan as your needs change.",
  },
];

const conditions = [
  "Back and neck pain",
  "Knee and shoulder pain",
  "Sports injuries",
  "Post surgery recovery",
  "Poor posture",
  "Muscle stiffness",
  "Balance difficulties",
  "Reduced mobility",
];

const benefits = [
  {
    icon: Users,
    title: "Care centred on you",
    description:
      "Your goals, comfort and daily routine guide your rehabilitation journey.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalised treatment",
    description:
      "A structured care plan based on your assessment and individual needs.",
  },
  {
    icon: Clock3,
    title: "Flexible appointments",
    description:
      "Explore suitable appointment options around your daily schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Guided recovery",
    description:
      "Understand your exercises and progress with professional guidance.",
  },
];

const faqs = [
  {
    question: "What happens during my first physiotherapy session?",
    answer:
      "Your physiotherapist will discuss your concerns, understand your medical history, assess your movement where appropriate and explain the recommended next steps.",
  },
  {
    question: "Can I receive physiotherapy online?",
    answer:
      "Online physiotherapy may be suitable for many movement concerns and exercise programmes. Your physiotherapist can help determine whether a virtual session is appropriate for your needs.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your condition, goals and progress. Your physiotherapist can discuss a suitable plan after assessing your needs.",
  },
  {
    question: "Do I need a referral to book an appointment?",
    answer:
      "Requirements can vary depending on your circumstances. Contact the clinic to discuss your needs and any existing medical recommendations.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Bring any relevant medical reports, scan results, your current medication details and comfortable clothing that allows you to move easily.",
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="rehabHome">
      {/* Existing hero component */}

      <HeroSection />
      {/* Services */}

      <section className="rhSection rhServices" id="services">
        <div className="rhServicesBackdrop" aria-hidden="true">
          <span className="rhServicesOrb rhServicesOrbOne" />
          <span className="rhServicesOrb rhServicesOrbTwo" />
          <span className="rhServicesRing" />

          <svg
            className="rhServicesLineArt"
            viewBox="0 0 220 220"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="110" cy="110" r="82" />
            <circle cx="110" cy="110" r="59" />
            <path d="M110 18V202M18 110H202" />
            <path d="M46 46L174 174M174 46L46 174" />
          </svg>
        </div>

        <div className="rhContainer rhServicesContainer">
          <div className="rhServicesHeader">
            <div className="rhServicesHeadingCopy">
              <div className="rhServicesEyebrow">
                <span className="rhEyebrowDot" />
                <span>CARE THAT MOVES YOU FORWARD</span>
              </div>

              <h2 className="rhServicesTitle">
                Feel better.
                <br />
                <span>Move beyond limits.</span>
              </h2>
            </div>

            <div className="rhServicesIntro">
              <span className="rhServicesIntroMark">
                <HeartPulse size={23} strokeWidth={1.7} />
              </span>

              <p>
                Thoughtful physiotherapy, personalised to your body, your goals
                and the life you want to live.
              </p>

              <div className="rhServicesIntroBottom">
                <span className="rhIntroLine" />
                <span>YOUR RECOVERY STARTS HERE</span>
              </div>
            </div>
          </div>

          <div className="rhServicesDivider">
            <span>EXPLORE OUR CARE</span>
            <span className="rhServicesDividerLine" />
            <span className="rhServicesCount">0{services.length} SERVICES</span>
          </div>

          <div className="rhServiceGrid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className="rhServiceCard"
                  key={service.title}
                  style={{ "--rh-delay": `${index * 80}ms` }}
                >
                  <Link
                    to={service.link}
                    className="rhServiceImage"
                    aria-label={`Explore ${service.title}`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />

                    <span className="rhServiceImageShade" />

                    <span className="rhServiceIndex">0{index + 1}</span>

                    <span className="rhImageIcon">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>

                    <span className="rhServiceImageLink">
                      <ArrowRight size={19} />
                    </span>
                  </Link>

                  <div className="rhServiceContent">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <Link className="rhTextLink" to={service.link}>
                      <span>Explore service</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="rhServicesFooter">
            <div className="rhServicesFooterNote">
              <span className="rhFooterPulse">
                <HeartPulse size={18} />
              </span>

              <p>
                <strong>Your goals. Your pace. Your recovery.</strong>
                <span>Care designed around what matters to you.</span>
              </p>
            </div>

            <Link to="/services" className="rhButton rhServicesViewAll">
              Discover all services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}

      <section className="rhSection rhProcess" id="how-it-works">
        <div className="rhProcessBackdrop" aria-hidden="true">
          <span className="rhProcessOrb rhProcessOrbOne" />
          <span className="rhProcessOrb rhProcessOrbTwo" />
          <span className="rhProcessRing" />

          <svg
            className="rhProcessPattern"
            viewBox="0 0 220 220"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="110" cy="110" r="85" />
            <circle cx="110" cy="110" r="62" />
            <path d="M110 15V205M15 110H205" />
            <path d="M43 43L177 177M177 43L43 177" />
          </svg>
        </div>

        <div className="rhContainer rhProcessContainer">
          <div className="rhProcessLayout">
            <div className="rhProcessIntro">
              <div className="rhProcessEyebrow">
                <span className="rhProcessEyebrowDot" />
                YOUR RECOVERY JOURNEY
              </div>

              <h2 className="rhProcessTitle">
                Better movement.
                <br />
                <span>One step at a time.</span>
              </h2>

              <p className="rhProcessDescription">
                Your recovery does not need to feel complicated. We guide you
                through every step with personalised care, expert support and a
                plan built around your goals.
              </p>

              <Link
                to="/appointment"
                className="rhButton rhButtonPrimary rhProcessButton"
              >
                Start your recovery <ArrowRight size={17} />
              </Link>

              <div className="rhProcessNote">
                <span className="rhProcessNoteIcon">
                  <CheckCircle2 size={19} />
                </span>
                <span>Your goals stay at the centre of your care.</span>
              </div>

              <div className="rhProcessVisual">
                <div className="rhProcessVisualImage" />
                {/* <div className="rhProcessVisualCard">
            <span className="rhProcessVisualIcon">
              <HeartPulse size={21} />
            </span>
            <span>
              <strong>Care made personal</strong>
              <small>Every body. Every journey.</small>
            </span>
          </div> */}
              </div>
            </div>

            <div className="rhProcessStepsArea">
              <div className="rhProcessStepsHeading">
                <span>YOUR PATH TO RECOVERY</span>
                <span className="rhProcessStepsCount">
                  0{steps.length} STEPS
                </span>
              </div>

              <div className="rhStepList">
                <span className="rhStepConnector" aria-hidden="true" />

                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <article
                      className="rhStep"
                      key={step.number}
                      style={{ "--rh-step-delay": `${index * 130}ms` }}
                    >
                      <div className="rhStepIconWrap">
                        <span className="rhStepIndex">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="rhStepIcon">
                          <Icon size={23} strokeWidth={1.7} />
                        </div>
                      </div>

                      <div className="rhStepContent">
                        <span className="rhStepNumber">STEP {step.number}</span>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>

                      <span className="rhStepArrow">
                        <ArrowRight size={18} />
                      </span>
                    </article>
                  );
                })}
              </div>

              <div className="rhProcessBottomNote">
                <span className="rhProcessBottomDot" />A clearer path to moving
                with confidence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rehabics */}

      <section className="rhSection rhWhy" id="why-rehabics">
        <div className="rhWhyBackdrop" aria-hidden="true">
          <span className="rhWhyOrb rhWhyOrbOne" />
          <span className="rhWhyOrb rhWhyOrbTwo" />

          <svg
            className="rhWhyPattern"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="52" />
            <path d="M100 10V190M10 100H190" />
          </svg>
        </div>

        <div className="rhContainer rhWhyContainer">
          <div className="rhWhyGrid">
            <div className="rhWhyVisual">
              <div className="rhWhyImageFrame">
                <img
                  src={why}
                  alt="Physiotherapist supporting a patient during recovery"
                  loading="lazy"
                />

                <span className="rhWhyImageTint" />
              </div>

              <div className="rhWhyExperience">
                <span className="rhWhyExperienceIcon">
                  <Activity size={22} />
                </span>
                <span>
                  <strong>Move with confidence</strong>
                  <small>One step at a time</small>
                </span>
              </div>

              <span className="rhVisualDecoration" aria-hidden="true" />
            </div>

            <div className="rhWhyContent">
              <div className="rhWhyEyebrow">
                <span />
                THE REHABICS APPROACH
              </div>

              <h2 className="rhWhyTitle">
                Care that sees
                <br />
                <span>the whole you.</span>
              </h2>

              <p className="rhWhyLead">
                Recovery is about more than a painful joint or restricted
                movement. It is about helping you return to the activities that
                make life yours.
              </p>

              <div className="rhWhyDivider">
                <span>WHAT MAKES US DIFFERENT</span>
                <span />
              </div>

              <div className="rhBenefitList">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <article
                      className="rhBenefit"
                      key={benefit.title}
                      style={{ "--rh-benefit-delay": `${index * 100}ms` }}
                    >
                      <span className="rhBenefitNumber">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="rhBenefitIcon">
                        <Icon size={22} strokeWidth={1.7} />
                      </span>

                      <div className="rhBenefitText">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>

                      <span className="rhBenefitArrow">
                        <ArrowRight size={17} />
                      </span>
                    </article>
                  );
                })}
              </div>

              <div className="rhWhyClosing">
                <span className="rhWhyClosingLine" />
                <p>Personalised support for the life you want to live.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}

      <section className="rhSection rhConditions" id="conditions">
        <div className="rhConditionsBackdrop" aria-hidden="true">
          <span className="rhConditionsOrb rhConditionsOrbOne" />
          <span className="rhConditionsOrb rhConditionsOrbTwo" />

          <svg
            className="rhConditionsPattern"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="78" />
            <circle cx="100" cy="100" r="54" />
            <path d="M100 10V190M10 100H190" />
            <path d="M36 36L164 164M164 36L36 164" />
          </svg>
        </div>

        <div className="rhContainer rhConditionsContainer">
          <div className="rhConditionsLayout">
            <div className="rhConditionsContent">
              <div className="rhConditionsEyebrow">
                <span />
                HOW WE CAN HELP
              </div>

              <h2 className="rhConditionsTitle">
                Move beyond
                <br />
                <span>everyday discomfort.</span>
              </h2>

              <p className="rhConditionsIntro">
                Whether movement feels difficult or you are working towards
                recovery, the first step is understanding what your body needs.
              </p>

              <Link
                to="/appointment"
                className="rhButton rhButtonPrimary rhConditionsButton"
              >
                Discuss your needs <ArrowRight size={17} />
              </Link>

              <div className="rhConditionsImage">
                <img
                  src={condition}
                  alt="Physiotherapist helping a patient with a rehabilitation exercise"
                  loading="lazy"
                />
                <span className="rhConditionsImageOverlay" />

                <div className="rhConditionsImageCaption">
                  <span>
                    <HeartPulse size={20} />
                  </span>
                  <p>
                    <strong>Every body is different</strong>
                    <small>Care starts with understanding you</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="rhConditionsPanel">
              <div className="rhConditionsPanelHeader">
                <div>
                  <span className="rhConditionsPanelEyebrow">
                    PERSONALISED SUPPORT
                  </span>
                  <h3>What would you like help with?</h3>
                </div>
                <span className="rhConditionsPanelIcon">
                  <Activity size={23} />
                </span>
              </div>

              <div className="rhConditionGrid">
                {conditions.map((condition, index) => (
                  <div
                    className="rhConditionItem"
                    key={condition}
                    style={{ "--rh-condition-delay": `${index * 65}ms` }}
                  >
                    <span className="rhConditionCheck">
                      <CheckCircle2 size={18} />
                    </span>
                    <span className="rhConditionText">{condition}</span>
                    <ArrowRight className="rhConditionArrow" size={16} />
                  </div>
                ))}
              </div>

              <div className="rhConditionsPanelFooter">
                <span className="rhConditionsFooterIcon">
                  <HeartPulse size={19} />
                </span>
                <p>
                  Not sure where to start? We can help you explore your options.
                </p>
              </div>
            </div>
          </div>

          <div className="rhDisclaimer">
            <ShieldCheck size={17} />
            <p>
              Treatment suitability depends on an individual assessment. Seek
              urgent medical care for severe or sudden symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Online physiotherapy */}

      <section className="rhSection rhOnline" id="online-physiotherapy">
        <div className="rhOnlineBackdrop" aria-hidden="true">
          <span className="rhOnlineOrb rhOnlineOrbOne" />
          <span className="rhOnlineOrb rhOnlineOrbTwo" />

          <svg
            className="rhOnlinePattern"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="78" />
            <circle cx="100" cy="100" r="53" />
            <path d="M100 10V190M10 100H190" />
          </svg>
        </div>

        <div className="rhContainer rhOnlineContainer">
          <div className="rhOnlinePanel">
            <div className="rhOnlineContent">
              <div className="rhOnlineEyebrow">
                <span />
                CARE THAT FITS YOUR LIFE
              </div>

              <h2 className="rhOnlineTitle">
                Expert guidance,
                <br />
                <span>where you feel at home.</span>
              </h2>

              <p className="rhOnlineDescription">
                Connect with a physiotherapist online, understand your exercises
                and work towards your mobility goals from home. Personalised
                support, wherever life takes you.
              </p>

              <div className="rhOnlineFeatures">
                <span>
                  <CheckCircle2 size={18} />
                  Convenient video sessions
                </span>
                <span>
                  <CheckCircle2 size={18} />
                  Guided home exercises
                </span>
                <span>
                  <CheckCircle2 size={18} />
                  Personalised support
                </span>
              </div>

              <Link
                to="/online-physiotherapy"
                className="rhButton rhButtonPrimary rhOnlineButton"
              >
                Explore online care <ArrowRight size={17} />
              </Link>

              <div className="rhOnlineTrust">
                <span className="rhOnlineTrustIcon">
                  <HeartPulse size={19} />
                </span>
                <span>
                  <strong>Care around your routine</strong>
                  <small>Take your next step from home</small>
                </span>
              </div>
            </div>

            <div className="rhOnlineVisual">
              <div className="rhOnlineImageFrame">
                <img
                  src={online}
                  alt="Physiotherapist guiding a patient through an exercise at home"
                  loading="lazy"
                />
                <span className="rhOnlineImageOverlay" />
                
              </div>

              

              <div className="rhOnlineFloatingCard">
                <span className="rhOnlineFloatingIcon">
                  <CalendarCheck size={21} />
                </span>
                <span>
                  <strong>Fits your day</strong>
                  <small>Support from home</small>
                </span>
              </div>

              <span className="rhOnlineVisualRing" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
{/*       
<section className="rhSection rhTeam" id="team">
  <div className="rhContainer">
    <div className="rhSectionHeading">
      <span className="rhEyebrow">YOUR CARE PARTNERS</span>

      <h2>
        Meet the people
        <br />
        <span>behind your progress.</span>
      </h2>

      <p>
        Every recovery journey deserves personal attention, expert guidance
        and a care plan designed around your individual goals.
      </p>
    </div>

    <div className="rhTeamPanel">
      <div className="rhTeamVisual">
        <div className="rhTeamIcon">
          <Users size={30} />
        </div>

        <span className="rhTeamTag">CARE THAT MOVES WITH YOU</span>
      </div>

      <div className="rhTeamContent">
        <span className="rhEyebrow">PERSONALISED PHYSIOTHERAPY</span>

        <h3>
          Your goals matter.
          <br />
          <span>Your care should reflect that.</span>
        </h3>

        <p>
          Meet the qualified professionals dedicated to helping you move
          with confidence. Our approach starts with understanding your
          needs, assessing your movement and building a rehabilitation
          plan around your progress.
        </p>

        <div className="rhTeamHighlights">
          <div className="rhTeamHighlight">
            <span className="rhTeamDot" />
            Individual care plans
          </div>

          <div className="rhTeamHighlight">
            <span className="rhTeamDot" />
            Guided rehabilitation
          </div>

          <div className="rhTeamHighlight">
            <span className="rhTeamDot" />
            Progress focused support
          </div>
        </div>

        <Link to="/about" className="rhTextLink">
          Learn about Rehabics <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  </div>
</section> */}


      {/* Patient stories */}
      <section className="rhSection rhStories" id="patient-stories">
        <div className="rhContainer">
          <div className="rhStoryHeader">
            <div>
              <span className="rhEyebrow">REAL PEOPLE, REAL GOALS</span>
              <h2>
                Every journey
                <br />
                <span>deserves a story.</span>
              </h2>
            </div>
            <p>
              Every person's experience is different. We believe in listening to
              patients and recognising progress at every stage.
            </p>
          </div>

          <div className="rhStoryNotice">
            <span className="rhStoryNoticeIcon">
              <MessageCircle size={22} />
            </span>
            <div>
              <h3>Your experience can inspire someone.</h3>
              <p>
                Verified patient feedback and approved stories will appear here.
                We do not publish invented testimonials or ratings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      
<section className="rhSection rhFaq" id="faq">
  <div className="rhContainer">
    <div className="rhFaqLayout">
      <div className="rhFaqIntro">
        <span className="rhEyebrow">GOOD TO KNOW</span>
        <h2>
          Questions before
          <br />
          <span>you begin?</span>
        </h2>
        <p>
          Find answers to common questions about appointments, assessments
          and physiotherapy.
        </p>

        <Link to="/contact" className="rhTextLink">
          Ask us a question <ArrowRight size={17} />
        </Link>
      </div>

      <div className="rhFaqList">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <article
              className={`rhFaqItem ${isOpen ? "isOpen" : ""}`}
              key={faq.question}
            >
              <button
                type="button"
                className="rhFaqQuestion"
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className="rhFaqChevron"
                />
              </button>

              {isOpen && (
                <div className="rhFaqAnswer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  </div>
</section>


      {/* Existing CTA component */}
      <CTASection />
    </main>
  );
};

export default Home;
