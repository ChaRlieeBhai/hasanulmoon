import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Send, Mail, Phone, MapPin } from "lucide-react";
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

const navItems = [
  { l: "About", h: "#about" },
  { l: "Education", h: "#education" },
  { l: "Experience", h: "#work" },
  { l: "Skills", h: "#skills" },
  { l: "Works", h: "#works" },
  { l: "Contact", h: "#contact" },
];

const socials = [
  { Icon: Facebook, h: "https://www.facebook.com/hasanulmoon", label: "Facebook" },
  { Icon: Instagram, h: "https://www.instagram.com/hasanulmoon", label: "Instagram" },
  { Icon: MessageCircle, h: "https://wa.link/rifzjt", label: "WhatsApp" },
  { Icon: Send, h: "https://t.me/hasanulmoon", label: "Telegram" },
];

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center mb-16">
      {kicker && <p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">{kicker}</p>}
      <h2 className="font-display text-6xl md:text-8xl italic">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="grain relative min-h-screen overflow-hidden">
      <div className="stars" aria-hidden />

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/50 border-b border-border/40">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl tracking-[0.25em] text-primary font-semibold">MOON</a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
            {navItems.map((s) => (
              <li key={s.l}>
                <a href={s.h} className="reveal-line hover:text-primary transition-colors">{s.l}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="md:hidden text-primary text-sm">Menu</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-2">
              A life without plot armour <span>💛</span>
            </p>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance">
              <span className="text-primary italic">Hasanul</span>
              <br />
              <span>Haque Moon</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed">
              Motivated quick learner with a foundation in <span className="text-primary">computer applications</span>,
              <span className="text-primary"> digital marketing</span>, and clear communication. Building, learning, growing.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="magnetic px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium glow-ring">
                Get in touch
              </a>
              <a
                href="https://drive.google.com/drive/folders/1F5nYRVJbCxbIn1A8pSW5xEQ4um9MQbM8?usp=sharing"
                target="_blank" rel="noreferrer"
                className="magnetic px-7 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                Get CV
              </a>
            </div>
          </div>

          <div className="relative group justify-self-center md:justify-self-end w-full max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-2xl border border-border tilt-card">
              <img src={profile} alt="Portrait of Hasanul Haque Moon" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              {/* floating socials */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-2 rounded-full bg-background/60 backdrop-blur-md border border-border">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.h}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 grid place-items-center rounded-full text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all magnetic"
                  >
                    <s.Icon size={16} strokeWidth={2} />
                  </a>
                ))}
              </div>
              {/* music off pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-md border border-border text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground" /> Music Off
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        <SectionTitle title="About" />
        <div className="space-y-6 text-center text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          <p>
            I'm a motivated and quick learner with a strong foundation in{" "}
            <span className="text-primary">computer applications</span>,{" "}
            <span className="text-primary">marketing strategies</span>, and communication. I enjoy adapting to
            new technologies and fast-paced environments.
          </p>
          <p>
            My goal is to use my skills to settle into new settings quickly, keep developing myself, and contribute
            positively to every team I'm part of.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        <SectionTitle kicker="Where I learned" title="Education" />
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.title} className="tilt-card group border border-border rounded-2xl p-6 md:p-8 bg-card/40 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl md:text-3xl group-hover:text-primary transition-colors">{e.title}</h3>
                <p className="text-muted-foreground mt-1">{e.school}</p>
                <p className="text-sm text-muted-foreground/70 mt-0.5">{e.meta}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-primary shrink-0">{e.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        <SectionTitle kicker="What I've done" title="Experience" />
        <div className="space-y-4">
          {experience.map((e) => (
            <article key={e.role} className="tilt-card group border border-border rounded-2xl p-8 md:p-10 bg-card/40">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-5">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl group-hover:text-primary transition-colors">{e.role}</h3>
                  <p className="text-muted-foreground mt-1">{e.org}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-primary">{e.period}</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-primary mt-2">—</span>
                    <span className="text-base md:text-lg leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        <SectionTitle kicker="Things I do well" title="Skills" />
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <span key={s} className="px-5 py-3 text-sm md:text-base rounded-full border border-border bg-card/40 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 magnetic cursor-default">
              {s}
            </span>
          ))}
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

      {/* Works */}
      <section id="works" className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        <SectionTitle kicker="Stuff I made" title="Works" />
        <a
          href="https://drive.google.com/drive/u/4/folders/1CEvtjbGyf-XL_8CUQ9gc6RV2JTDPubwh"
          target="_blank" rel="noreferrer"
          className="group block tilt-card border border-border rounded-2xl p-10 md:p-14 bg-card/40 overflow-hidden relative text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/15 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Portfolio archive</p>
            <h3 className="font-display text-4xl md:text-6xl italic">Get all my works here</h3>
            <span className="mt-6 inline-flex items-center gap-2 text-primary text-lg arrow-link">
              Open the folder <span>↗</span>
            </span>
          </div>
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="relative max-w-3xl mx-auto px-6 py-24 md:py-32">
        <SectionTitle kicker="Say hello" title="Contact" />

        {/* Liquid glass card */}
        <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-card/30 backdrop-blur-xl shadow-[0_20px_80px_-20px_oklch(0_0_0/0.5)]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          <ul className="relative divide-y divide-border/40">
            {[
              { Icon: Mail, label: "Email", value: "hasanulhaquemoon@gmail.com", href: "mailto:hasanulhaquemoon@gmail.com" },
              { Icon: Phone, label: "Phone", value: "01823 444069", href: "tel:+8801823444069" },
              { Icon: Phone, label: "Phone", value: "01521 758718", href: "tel:+8801521758718" },
              { Icon: MapPin, label: "Location", value: "Narail Sadar, Narail · Bangladesh", href: null as string | null },
            ].map((row, i) => {
              const Inner = (
                <div className="flex items-center gap-4 p-5 md:p-6 group transition-colors hover:bg-primary/5">
                  <span className="w-11 h-11 shrink-0 grid place-items-center rounded-full bg-background/60 border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all">
                    <row.Icon size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{row.label}</p>
                    <p className="text-base md:text-lg font-display truncate group-hover:text-primary transition-colors">{row.value}</p>
                  </div>
                  {row.href && <span className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all">→</span>}
                </div>
              );
              return (
                <li key={i}>
                  {row.href ? <a href={row.href}>{Inner}</a> : Inner}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Socials */}
        <ul className="mt-10 flex justify-center gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.h}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="w-14 h-14 md:w-16 md:h-16 grid place-items-center rounded-full border border-border bg-card/30 backdrop-blur-xl text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all magnetic shadow-lg"
              >
                <s.Icon size={22} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-border/50 relative">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hasanul Haque Moon</p>
          <p className="italic font-display text-base">A life without plot armour 💛</p>
        </div>
      </footer>
    </div>
  );
}
