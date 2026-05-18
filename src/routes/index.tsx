import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/profile.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const skills = [
  "Computer Applications",
  "Microsoft Office",
  "Digital Marketing",
  "Communication",
  "Customer Handling",
  "Canva Design",
  "Fluent English",
];

const education = [
  { title: "Higher Secondary Certificate", school: "Cantonment College Jashore", meta: "Science · GPA 4.50", year: "2021 — 2022" },
  { title: "Secondary School Certificate", school: "Gobra Parbati Vidyapith", meta: "Science · GPA 5.00", year: "2015 — 2020" },
  { title: "Digital Marketing — Basic to Advance", school: "SR Dream IT", meta: "Major in Digital Marketing", year: "2025" },
  { title: "National Skill Standard Basic Course", school: "ICT Training Institute, Narail", meta: "Database Programming · Grade 5.00", year: "2018" },
];

const experience = [
  {
    role: "E-commerce Page Owner",
    org: "Self-initiated",
    period: "2025 — Present",
    points: [
      "Run an online business end-to-end — promotions, orders, customer communication.",
      "Generated profit while building hands-on experience in client handling and sales.",
    ],
  },
  {
    role: "Pharmacy Assistant",
    org: "Narail",
    period: "2023 — 2025",
    points: [
      "Assisted customers and handled queries in a fast-paced environment.",
      "Sharpened communication and interpersonal skills through daily interaction.",
    ],
  },
];

function SplitText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((c, i) => (
        <span key={i} className="char-rise" style={{ transitionDelay: `${i * 8}ms` }}>
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

function Index() {
  return (
    <div className="grain relative min-h-screen">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight reveal-line">Moon.</a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {["about", "work", "education", "contact"].map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="reveal-line capitalize hover:text-foreground transition-colors">{s}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="text-sm px-4 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all magnetic">
            Say hi →
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Narail · Bangladesh</p>
            <h1 className="font-display text-[14vw] md:text-[8.5vw] leading-[0.9] text-balance">
              <SplitText text="Hasanul" />
              <br />
              <span className="italic text-primary"><SplitText text="Haque Moon" /></span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              A motivated, quick learner building a foundation in <span className="text-foreground">digital marketing</span>,
              computer applications, and clear communication. Adapting fast — growing slower, on purpose.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="magnetic px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium glow-ring">
                See my work
              </a>
              <a href="mailto:hasanulhaquemoon@gmail.com" className="magnetic px-6 py-3 rounded-full border border-border hover:border-foreground transition-colors">
                hasanulhaquemoon@gmail.com
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-2xl border border-border tilt-card">
                <img
                  src={profile}
                  alt="Portrait of Hasanul Haque Moon"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">A life without</p>
                  <p className="font-display text-2xl italic">plot armour.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-border/50 py-6 overflow-hidden bg-background/40">
        <div className="marquee flex whitespace-nowrap gap-12 font-display text-3xl md:text-5xl text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["Digital Marketing", "★", "Computer Applications", "★", "Canva Design", "★", "Client Handling", "★", "Microsoft Office", "★"].map((w, j) => (
                <span key={j} className="hover:text-primary transition-colors cursor-default italic">{w}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">01 — About</p>
            <h2 className="font-display text-5xl md:text-6xl mt-4">Hello there.</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a motivated and quick learner with a strong foundation in computer applications,
              marketing strategies, and communication. I enjoy adapting to new technologies and
              fast-paced environments.
            </p>
            <p>
              My goal is to use my skills to settle into new settings quickly, keep developing
              myself, and contribute positively to every team I'm part of.
            </p>
            <div className="pt-6 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-4 py-2 text-sm rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 magnetic cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work / Experience */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-border/50">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">02 — Experience</p>
            <h2 className="font-display text-5xl md:text-7xl mt-4">What I've done.</h2>
          </div>
        </div>

        <div className="space-y-4">
          {experience.map((e) => (
            <article key={e.role} className="tilt-card group border border-border rounded-2xl p-8 md:p-10 bg-card/40">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl group-hover:text-primary transition-colors">{e.role}</h3>
                  <p className="text-muted-foreground mt-1">{e.org}</p>
                </div>
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{e.period}</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-4">
                    <span className="text-primary mt-2">—</span>
                    <span className="text-lg leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <a
          href="https://drive.google.com/drive/u/4/folders/1CEvtjbGyf-XL_8CUQ9gc6RV2JTDPubwh"
          target="_blank"
          rel="noreferrer"
          className="mt-10 group block tilt-card border border-border rounded-2xl p-10 bg-card/40 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Portfolio archive</p>
              <h3 className="font-display text-4xl md:text-5xl mt-3 italic">Get all my works →</h3>
            </div>
            <span className="hidden md:block text-6xl font-display text-primary group-hover:rotate-45 transition-transform duration-500">↗</span>
          </div>
        </a>
      </section>

      {/* Education */}
      <section id="education" className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-border/50">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">03 — Education</p>
          <h2 className="font-display text-5xl md:text-7xl mt-4">Where I've learned.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((e) => (
            <div key={e.title} className="tilt-card group border border-border rounded-2xl p-8 bg-card/40">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{e.year}</span>
                <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl group-hover:text-primary transition-colors">{e.title}</h3>
              <p className="text-muted-foreground mt-2">{e.school}</p>
              <p className="text-sm text-muted-foreground/70 mt-1">{e.meta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 md:py-40 border-t border-border/50">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">04 — Contact</p>
        <h2 className="font-display text-6xl md:text-[10vw] leading-[0.9] mt-6">
          Let's <span className="italic text-primary">talk.</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <a href="mailto:hasanulhaquemoon@gmail.com" className="arrow-link block text-2xl md:text-3xl font-display border-b border-border pb-4">
              hasanulhaquemoon@gmail.com <span>→</span>
            </a>
            <a href="tel:+8801823444069" className="arrow-link block text-2xl md:text-3xl font-display border-b border-border pb-4">
              01823 444069 <span>→</span>
            </a>
            <a href="tel:+8801521758718" className="arrow-link block text-2xl md:text-3xl font-display border-b border-border pb-4">
              01521 758718 <span>→</span>
            </a>
            <p className="text-muted-foreground pt-4">Narail Sadar, Narail · Bangladesh</p>
          </div>
          <div className="flex md:justify-end items-end">
            <ul className="space-y-3 text-right">
              {[
                { l: "Facebook", h: "https://www.facebook.com/hasanulmoon" },
                { l: "Instagram", h: "https://www.instagram.com/hasanulmoon" },
                { l: "WhatsApp", h: "https://wa.link/rifzjt" },
                { l: "Telegram", h: "https://t.me/hasanulmoon" },
              ].map((s) => (
                <li key={s.l}>
                  <a href={s.h} target="_blank" rel="noreferrer" className="reveal-line text-xl hover:text-primary transition-colors">
                    {s.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hasanul Haque Moon</p>
          <p className="italic font-display text-base">A life without plot armour 💛</p>
        </div>
      </footer>
    </div>
  );
}
