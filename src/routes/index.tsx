import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const services = [
  {
    title: "Anxiety & Panic Therapy",
    text: "Support for chronic worry, panic, overthinking, and the physical tension that can accompany anxiety, using CBT and mindfulness-based practices.",
    fit: "For adults experiencing anxiety, panic, persistent worry, or racing thoughts.",
  },
  {
    title: "Trauma & EMDR Therapy",
    text: "Carefully paced trauma work that emphasizes safety, stabilization, and regulation while using EMDR and body-oriented techniques when appropriate.",
    fit: "For adults working through single-incident or more complex, long-standing trauma patterns.",
  },
  {
    title: "Burnout & Perfectionism",
    text: "A collaborative space to slow down, understand high internal pressure, and develop more sustainable ways of living and working.",
    fit: "For high-achieving adults, including professionals, entrepreneurs, and creatives navigating burnout or perfectionism.",
  },
];

const faqs = [
  ["Who does Dr. Reynolds work with?", "Dr. Reynolds works with adults, particularly thoughtful, capable, and high-achieving people who are navigating anxiety, stress, trauma, burnout, perfectionism, or the lingering effects of past experiences."],
  ["What is her approach to therapy?", "Her approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive while leaving room for reflection and depth. She integrates CBT, EMDR, mindfulness-based practices, and body-oriented techniques."],
  ["Does she offer in-person and telehealth therapy?", "Yes. The practice offers in-person therapy from a Santa Monica office and secure telehealth sessions for clients located in California."],
  ["What concerns are commonly addressed?", "Her work often focuses on anxiety, panic, trauma, burnout, chronic stress, perfectionism, overthinking, and the effects of earlier life experiences."],
];

function Visual({ variant = "soft" }: { variant?: "soft" | "portrait" | "office" }) {
  return (
    <div className={`visual visual-${variant}`} aria-hidden="true">
      <span className="visual-orb orb-a" />
      <span className="visual-orb orb-b" />
      <span className="visual-line line-a" />
      <span className="visual-line line-b" />
      {variant === "portrait" && <span className="portrait-silhouette" />}
      {variant === "office" && <><span className="chair" /><span className="plant" /></>}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica" },
    { name: "description", content: "Therapy for adults in Santa Monica and across California, with a warm, collaborative focus on anxiety, trauma, burnout, and perfectionism." },
    { property: "og:title", content: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica" },
    { property: "og:description", content: "Warm, collaborative therapy for adults navigating anxiety, trauma, burnout, and perfectionism." },
    { property: "og:type", content: "website" },
  ] }),
  component: HomePage,
});

function HomePage() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);

  const nav = ["About", "Services", "Approach", "FAQs"];

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dr. Maya Reynolds home">
          <span className="brand-name">Dr. Maya Reynolds</span>
          <span className="brand-subtitle">PsyD · Clinical Psychology</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
          <a className="nav-cta" href="#contact">Book an Appointment <ArrowRight size={15} /></a>
        </nav>
        <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
        {open && <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
          <a href="#contact" onClick={() => setOpen(false)}>Book an Appointment</a>
        </nav>}
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy-wrap">
            <p className="eyebrow">Santa Monica, California · Adults</p>
            <h1 id="hero-title">Anxiety &amp; trauma therapy for adults in Santa Monica.</h1>
            <p className="hero-lead">A warm, collaborative space for adults who feel overwhelmed by anxiety, stress, past experiences, burnout, or the pressure to keep everything together.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Book an Appointment <ArrowRight size={17} /></a>
              <a className="text-link" href="#approach">Learn about my approach</a>
            </div>
            <p className="hero-note">In-person therapy in Santa Monica and secure telehealth sessions for clients in California.</p>
          </div>
          <Visual variant="portrait" />
        </section>

        <section className="intro section" id="about">
          <div className="section-kicker">A place to slow down</div>
          <div className="intro-grid">
            <h2>You can look like you’re handling everything and still feel exhausted inside.</h2>
            <div className="body-copy">
              <p>Many of the adults I work with are thoughtful, capable, and self-aware. From the outside, life may look functional. Internally, there can be constant worry, overthinking, tension, difficulty relaxing, or the lingering impact of experiences that still feel present.</p>
              <p>Therapy can offer a space to understand what you’re carrying, work at a pace that feels safe, and develop a more sustainable relationship with yourself.</p>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div><div className="section-kicker">How I can help</div><h2>Focused support for what you’re carrying.</h2></div>
            <p>Three areas of work drawn directly from Dr. Reynolds’ practice focus.</p>
          </div>
          <div className="service-grid">
            {services.map((service, i) => <article className="service-card" key={service.title}>
              <span className="service-number">0{i + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-fit"><strong>Who it may fit:</strong> {service.fit}</div>
            </article>)}
          </div>
        </section>

        <section className="statement">
          <Visual />
          <div className="statement-copy"><p className="eyebrow">Therapy that is warm, grounded, and collaborative</p><h2>Practical tools, with room for depth and reflection.</h2></div>
        </section>

        <section className="about section">
          <div className="about-visual"><Visual variant="portrait" /><div className="photo-note">A professional portrait can be placed here when the profile’s image file is supplied.</div></div>
          <div className="about-copy"><div className="section-kicker">About Dr. Maya Reynolds</div><h2>Evidence-based care that keeps the person in the room.</h2>
            <p>Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist based in Santa Monica, California. She works with adults experiencing anxiety, trauma, burnout, chronic stress, perfectionism, and the effects of earlier life experiences.</p>
            <p>Her approach is warm, collaborative, and grounded. She integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to consider both emotional and physiological experiences.</p>
            <p>Trauma work is paced carefully, with an emphasis on safety and stabilization. Clients are actively involved in the process, with space for practical tools as well as deeper reflection.</p>
          </div>
        </section>

        <section className="approach section" id="approach">
          <div className="section-kicker">My approach</div>
          <div className="approach-grid"><h2>Personalized, evidence-based, and paced with care.</h2><div className="method-list">
            <div><strong>CBT</strong><span>Understanding patterns of thinking and behavior and developing practical tools for anxiety and stress.</span></div>
            <div><strong>EMDR</strong><span>A structured approach for processing trauma and distressing memories at a pace that feels safe.</span></div>
            <div><strong>Mindfulness</strong><span>Building present-moment awareness and self-compassion while reducing reactivity.</span></div>
            <div><strong>Body-oriented work</strong><span>Recognizing and working with physical manifestations of anxiety and trauma.</span></div>
          </div></div>
        </section>

        <section className="office section">
          <div className="office-copy"><div className="section-kicker">A calm setting</div><h2>In-person in Santa Monica, with telehealth across California.</h2><p>The practice is described as a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.</p><p>For clients who are not meeting in person, secure telehealth sessions are available for clients located in California.</p></div><Visual variant="office" /></section>

        <section className="faq section" id="faqs">
          <div className="section-kicker">Questions</div><div className="faq-grid"><h2>Frequently asked questions</h2><div>{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}><span>{q}</span><ChevronDown className={faq === i ? "rotate" : ""} size={20} /></button>{faq === i && <p>{a}</p>}</div>)}</div></div>
        </section>

        <section className="contact" id="contact"><div className="contact-inner"><p className="eyebrow">Take the next step</p><h2>Book an appointment with Dr. Maya Reynolds.</h2><p>If you’re looking for a warm, collaborative therapist who works with adults navigating anxiety, trauma, burnout, or perfectionism, reach out to begin a conversation.</p><a className="button button-light" href="mailto:contact@drmayareynolds.com">Book an Appointment <ArrowRight size={17} /></a></div></section>
      </main>

      <footer className="footer"><div><div className="footer-brand">Dr. Maya Reynolds, PsyD</div><p>Licensed Clinical Psychologist</p></div><div><strong>Practice</strong><a href="#about">About</a><a href="#services">Services</a><a href="#approach">Approach</a><a href="#faqs">FAQs</a></div><div><strong>Contact</strong><span>Santa Monica, California</span><a href="mailto:contact@drmayareynolds.com">contact@drmayareynolds.com</a><a href="#contact">Book an Appointment</a></div><div className="footer-bottom">© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</div></footer>
    </div>
  );
}
