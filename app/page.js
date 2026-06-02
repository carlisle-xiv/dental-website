import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  HeartPulse,
  Menu,
  Phone,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const serviceCards = [
  {
    title: "General Dentistry",
    description:
      "Preventive dental check-ups, cleaning, fluoride treatments, sealants, fillings, root canals, dental X-rays, and extractions.",
    detail: "Primary oral health care",
    note: "Tailored to client needs",
  },
  {
    title: "Restorative Dentistry",
    description:
      "Dentures, bridges, implants, custom mouth-guards, braces, and Invisalign planned around your oral health requirements.",
    detail: "Basic and complex solutions",
    note: "Built around health and financial needs",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Teeth whitening and veneers supported by custom-made solutions for a healthier, more confident smile.",
    detail: "Smile-focused care",
    note: "Delivered with clinical integrity",
  },
  {
    title: "Other Services",
    description:
      "Biopsy, tongue-tie support, dental emergencies, and dental home care for patients and stakeholders.",
    detail: "Supportive environment",
    note: "Compassionate ubuntu care",
  },
];

const treatments = [
  {
    title: "General Dentistry",
    image: "/images/ebus-general-dentistry.jpg",
    description:
      "Preventive care including check-ups, cleaning, fluoride treatments, sealants, fillings, root canals, X-rays, and extractions.",
  },
  {
    title: "Restorative & Cosmetic Care",
    image: "/images/ebus-restorative-care.jpg",
    description:
      "Dentures, bridges, implants, custom mouth-guards, braces, Invisalign, whitening, and veneers tailored to each client.",
  },
];

const otherTreatments = [
  "Dental Check-ups",
  "Cleaning",
  "Fluoride Treatments",
  "Dental Sealants / Fillings",
  "Root Canal Treatments",
  "Dental X-rays",
  "Extractions",
  "Dentures",
  "Bridges",
  "Implants",
  "Custom Mouth-guards",
  "Braces & Invisalign",
  "Biopsy",
  "Tongue-Tie",
  "Dental Emergencies",
  "Dental Home Care",
];

export default function Home() {
  return (
    <main>
      <div className="offer-bar">
        {"Welcome "}
        <span>New Guest</span>
        {" – Your Exclusive Offer Awaits!"}
      </div>

      <header className="nav-shell">
        <a className="brand" href="#home" aria-label="Ebus Dental Clinic home">
          Ebus Dental Clinic
        </a>
        <nav className="nav-actions" aria-label="Primary navigation">
          <a className="nav-cta" href="#appointment">
            Book an Appointment
          </a>
        </nav>
        <button className="mobile-menu" type="button" aria-label="Open menu">
          <Menu size={23} strokeWidth={2.4} />
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-image-wrap">
          <Image
            src="/images/dentiva-hero.png"
            alt="Hero Image"
            fill
            priority
            className="hero-image"
            sizes="100vw"
          />
        </div>

        <div className="hero-copy">
          <h1>Fix Your Smile, Restore Your Confidence</h1>
          <p>
            Whether it&apos;s a routine checkup or an urgent dental concern, our
            experienced professionals are just a call away
          </p>
          <a className="button button-primary" href="#appointment">
            Book an Appointment
          </a>

          <div className="hero-stats">
            <div>
              <strong>20+</strong>
              <span>Years of combined medical field and management experience</span>
            </div>
            <div>
              <strong>Ubuntu</strong>
              <span>Compassionate care for clients and stakeholders</span>
            </div>
          </div>
        </div>
      </section>

      <section className="care-section" id="services">
        <div className="center-heading">
          <h2>Oral Health Care Built Around You</h2>
          <p>
            We provide quality oral health care that improves patient lives
            while preserving integrity and meeting professional obligations.
          </p>
        </div>

        <div className="service-table">
          {serviceCards.map((service) => (
            <article className="service-cell" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <strong>{service.detail}</strong>
              <span>{service.note}</span>
              <a href="#appointment">Book Now</a>
            </article>
          ))}
        </div>
      </section>

      <section className="treatments-section" id="treatments">
        <div className="section-intro">
          <h2>Select Your Treatment</h2>
          <p>
            Ebus Dental Clinic combines clinical skill, administration, and
            technology to deliver basic and complex oral health solutions.
          </p>
        </div>

        <div className="treatment-grid">
          {treatments.map((treatment) => (
            <article className="treatment-card" key={treatment.title}>
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                className="cover-image"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div className="treatment-overlay" />
              <span>{treatment.title}</span>
              <p>{treatment.description}</p>
            </article>
          ))}
        </div>

        <div className="other-services">
          <div>
            <h3>Other major treatments</h3>
            <p>
              Preventive, restorative, cosmetic, and emergency options are
              custom-made around your oral health, financial, and care needs.
            </p>
          </div>
          <ul>
            {otherTreatments.map((item) => (
              <li key={item}>
                {item}
                <ArrowRight size={18} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="results-section">
        <h2>Custom-Made Oral Health Solutions</h2>
        <div className="results-pair">
          <div className="result-image">
            <Image
              src="/images/treatment-closeup.jpg"
              alt="Dental treatment in progress"
              fill
              className="cover-image"
            />
            <span>Care</span>
          </div>
          <div className="result-image">
            <Image
              src="/images/inspo-smile.jpg"
              alt="Healthy confident smile"
              fill
              className="cover-image"
            />
            <span>Smile</span>
          </div>
        </div>
        <p>Preventive care | Restorative services | Cosmetic dentistry</p>
      </section>

      <section className="dentist-section" id="about">
        <div className="dentist-image">
          <Image
            src="/images/chair-suite.webp"
            alt="Ebus Dental treatment suite"
            fill
            className="cover-image"
          />
        </div>
        <div className="dentist-copy">
          <h2>Flexible Care That Works for You</h2>
          <p>
            We provide quality oral health care to improve the lives of patients
            in the community we serve and beyond, preserving our integrity while
            delivering compassionate care.
          </p>
          <div className="divider" />
          <blockquote>
            “Providing compassionate ubuntu care to our clients and stakeholders
            defines us.”
          </blockquote>
          <div className="proof-row">
            <span>
              <HeartPulse size={19} />
              Supportive environment
            </span>
            <span>
              <ShieldCheck size={19} />
              Integrity-led care
            </span>
            <span>
              <CalendarCheck size={19} />
              Tailored planning
            </span>
          </div>
        </div>
      </section>

      <section className="confidence-section" id="team">
        <div className="confidence-copy">
          <h2>Reasons for Lasting Results</h2>
          <div className="reason-list">
            <article>
              <SmilePlus size={22} />
              <h3>Smile With Confidence</h3>
              <p>
                Care plans are built to help your teeth stay healthy, bright,
                and beautifully cared for.
              </p>
            </article>
            <article>
              <Stethoscope size={22} />
              <h3>Experienced Team</h3>
              <p>
                Seasoned professionals bring clinical and administrative
                experience from both public and private sectors.
              </p>
            </article>
            <article>
              <Sparkles size={22} />
              <h3>Personalized Care Plans</h3>
              <p>
                Each solution is tailored to your needs, financial realities,
                and oral health requirements.
              </p>
            </article>
          </div>
        </div>
        <div className="confidence-image">
          <Image
            src="/images/clinic-entrance.jpg"
            alt="Ebus Dental Clinic entrance"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section className="appointment-section" id="appointment">
        <div>
          <h2>Ready to restore your smile?</h2>
          <p>
            Book a visit for check-ups, cleaning, whitening, restorative care,
            Invisalign, emergencies, and home care guidance.
          </p>
        </div>
        <div className="appointment-actions">
          <a className="button button-primary" href="tel:+233503532625">
            <Phone size={18} />
            050 353 2625
          </a>
          <a className="button button-light" href="#home">
            Visit the Clinic
          </a>
        </div>
      </section>
    </main>
  );
}
