import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Send, Mail, Phone, MapPin, Menu, X, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profile from "@/assets/profile.png";
import profileJersey from "@/assets/profile-jersey.png";
import profileJacket from "@/assets/profile-jacket.png";

const themeCycle = [
  { theme: "", img: profile },
  { theme: "green", img: profileJersey },
  { theme: "sky", img: profileJacket },
] as const;
import work1 from "@/assets/work-1.png?w=400;800&format=webp&as=srcset";
import work2 from "@/assets/work-2.png?w=400;800&format=webp&as=srcset";
import work3 from "@/assets/work-3.jpg?w=400;800&format=webp&as=srcset";
import work4 from "@/assets/work-4.jpg?w=400;800&format=webp&as=srcset";

export const Route = createFileRoute("/")({
  component: Index,
});

const skills: { name: string; brief: string }[] = [
  {
    name: "Computer Applications",
    brief: "Practical knowledge of everyday software — operating systems, productivity suites, browsers, and file management — used to solve real tasks quickly and confidently in any digital workspace.",
  },
  {
    name: "Microsoft Office",
    brief: "Hands-on with Word, Excel, and PowerPoint — drafting documents, building spreadsheets with formulas and charts, and creating clean presentations for business communication.",
  },
  {
    name: "Digital Marketing",
    brief: "Promoting products and brands online through social media, content, SEO basics, paid ads, and analytics — turning attention into engagement, leads, and sales.",
  },
  {
    name: "Communication",
    brief: "Clear, respectful, and confident exchange of ideas — listening actively, explaining simply, and adapting tone to the audience whether in writing or in person.",
  },
  {
    name: "Customer Handling",
    brief: "Welcoming customers, understanding their needs, resolving concerns patiently, and turning everyday interactions into trust and repeat business.",
  },
  {
    name: "Canva Design",
    brief: "Designing posts, banners, ads, and presentations in Canva — combining typography, color, and layout to produce on-brand visuals fast, without needing complex design software.",
  },
  {
    name: "Fluent English",
    brief: "Comfortable speaking, reading, and writing in English — able to communicate naturally with customers, colleagues, and international audiences in both casual and professional contexts.",
  },
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

function MatrixRain({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);
    const fontSize = 16 * dpr;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(0).map(() => Math.random() * -50);
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJ0123456789@#$%&*<>/\\".split("");
    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = Math.random() > 0.975 ? "#d6ffe0" : "#39ff7a";
        ctx.fillText(ch, x, y);
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active]);
  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,255,120,0.08) 0px, rgba(0,255,120,0.08) 1px, transparent 2px, transparent 4px)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none animate-pulse"
        style={{ boxShadow: "inset 0 0 200px rgba(0,255,120,0.35)" }}
      />
    </>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tagOpen, setTagOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState<(typeof skills)[number] | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [themeIdx, setThemeIdx] = useState(0);
  const lenisRef = useRef<import("lenis").default | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const { theme } = themeCycle[themeIdx];
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }, [themeIdx]);

  useEffect(() => {
    const id = setInterval(() => {
      setThemeIdx((i) => (i + 1) % themeCycle.length);
    }, 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let raf = 0;
    (async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      lenis.on("scroll", (e: { progress: number }) => {
        setScrollProgress(e.progress);
        setShowTopBtn(e.progress > 0.08);
      });

      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();
    return () => {
      cancelAnimationFrame(raf);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || loading || activeSkill ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, loading, activeSkill]);

  useEffect(() => {
    if (!activeSkill) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveSkill(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeSkill]);

  return (
    <div className="grain relative min-h-screen overflow-hidden">
      {/* Opening loader */}
      <div
        className={`fixed inset-0 z-[100] grid place-items-center bg-black overflow-hidden transition-opacity duration-700 ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!loading}
      >
        <MatrixRain active={loading} />
        <div className="relative z-10 flex flex-col items-center gap-6 w-[80%] max-w-md">
          <p
            className={`text-primary text-7xl md:text-8xl leading-none transition-all duration-700 ${loading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
            style={{ fontFamily: '"Allison", cursive' }}
          >
            Charlie
          </p>
          <div className="w-full h-[3px] rounded-full bg-border/60 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{
                width: loading ? "100%" : "100%",
                animation: loading ? "loader-fill 2s ease-out forwards" : "none",
              }}
            />
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Loading</p>
        </div>
      </div>

      <div className="stars" aria-hidden />


      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/50 border-b border-border/40">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
          <a href="#top" className="text-primary text-5xl md:text-6xl leading-none translate-y-1" style={{ fontFamily: '"Allison", cursive' }}>Charlie</a>

          {/* Desktop inline nav */}
          <ul className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full border border-border/60 bg-card/30 backdrop-blur-xl">
            {navItems.map((s) => (
              <li key={s.l}>
                <a
                  href={s.h}
                  className="px-4 py-2 text-sm rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  {s.l}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden relative w-11 h-11 grid place-items-center rounded-full border border-border bg-card/40 backdrop-blur-xl text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all magnetic"
          >
            <Menu size={18} className={`absolute transition-all duration-300 ${menuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
            <X size={18} className={`absolute transition-all duration-300 ${menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
          </button>
        </nav>
      </header>

      {/* Fullscreen menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className={`absolute inset-0 bg-background/70 backdrop-blur-2xl transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`} />
        <div
          className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-card/40 backdrop-blur-xl shadow-[0_20px_80px_-20px_oklch(0_0_0/0.6)]">
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-accent/25 blur-3xl pointer-events-none" />
            <ul className="relative p-3">
              {navItems.map((s, i) => (
                <li
                  key={s.l}
                  className="transition-all duration-500"
                  style={{
                    transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <a
                    href={s.h}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-primary/10 transition-colors"
                  >
                    <span className="font-display text-3xl italic group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 inline-block">
                      {s.l}
                    </span>
                    <span className="text-primary text-xs uppercase tracking-[0.3em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      0{i + 1} →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="relative text-center text-4xl text-primary pb-5" style={{ fontFamily: '"Allison", cursive' }}>
              Charlie
            </p>
          </div>
        </div>
      </div>

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
            {/* Hover glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            <div className="relative overflow-hidden rounded-2xl border border-border tilt-card transition-shadow duration-500 group-hover:glow-primary-hover">
              <img
                key={themeIdx}
                src={themeCycle[themeIdx].img}
                alt="Portrait of Hasanul Haque Moon"
                fetchPriority="high"
                decoding="async"
                onClick={() => setThemeIdx((i) => (i + 1) % themeCycle.length)}
                className="w-full h-auto object-cover animate-fade-in cursor-pointer select-none"
              />
            </div>

            {/* @hasanulmoon liquid glass tag + popover */}
            <div className="mt-3 mx-auto w-fit relative z-30">
              <button
                type="button"
                onClick={() => setTagOpen((v) => !v)}
                aria-expanded={tagOpen}
                aria-label="Toggle social links"
                className="relative rounded-full px-4 py-1.5 border border-primary/50 bg-primary/20 backdrop-blur-2xl glow-primary-md overflow-hidden hover:scale-105 active:scale-95 transition-transform"
              >
                <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/25 to-transparent rotate-45 animate-[shimmer_3s_infinite] opacity-70" />
                <span className="relative text-[11px] md:text-xs uppercase tracking-[0.25em] text-primary font-bold glow-text-primary">@hasanulmoon</span>
              </button>

              {/* Liquid glass social popover */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 transition-all duration-400 ${tagOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
              >
                <div className="relative rounded-2xl border border-primary/40 bg-white/10 backdrop-blur-2xl glow-primary-lg p-3 overflow-hidden">
                  <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/15 to-transparent rotate-45 animate-[shimmer_3s_infinite] opacity-50 pointer-events-none" />
                  <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-accent/30 blur-3xl pointer-events-none" />
                  <ul className="relative flex items-center gap-2">
                    {socials.map((s, i) => (
                      <li
                        key={s.label}
                        className="transition-all duration-500"
                        style={{
                          transitionDelay: tagOpen ? `${80 + i * 60}ms` : "0ms",
                          opacity: tagOpen ? 1 : 0,
                          transform: tagOpen ? "translateY(0)" : "translateY(6px)",
                        }}
                      >
                        <a
                          href={s.h}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={s.label}
                          title={s.label}
                          className="w-10 h-10 grid place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-0.5 hover:glow-primary-sm transition-all"
                        >
                          <s.Icon size={16} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Circular rotating text badge — top-right edge */}
            <div className="absolute -top-8 -right-8 md:-top-10 md:-right-10 w-28 h-28 md:w-36 md:h-36 z-20">
              <div className="relative w-full h-full">
                <svg viewBox="0 0 200 200" className="spin-slow w-full h-full pointer-events-none">
                  <defs>
                    <path id="circlePath" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                  </defs>
                  <text fill="currentColor" className="text-primary" style={{ fontSize: "22px", letterSpacing: "6px", fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                    <textPath href="#circlePath" startOffset="0">MARKETING  •  SPECIALIST  •  </textPath>
                  </text>
                </svg>
                <a
                  href="https://www.facebook.com/hasanulmoon"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook · hasanulmoon"
                  className="absolute inset-0 m-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-md border border-primary/60 grid place-items-center text-primary glow-primary-sm hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                >
                  <Facebook size={20} strokeWidth={2.2} />
                </a>
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
            <button
              key={s.name}
              type="button"
              onClick={() => setActiveSkill(s)}
              className="px-5 py-3 text-sm md:text-base rounded-full border border-border bg-card/40 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 magnetic cursor-pointer"
            >
              {s.name}
            </button>
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
      <section id="works" className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <SectionTitle kicker="Stuff I made" title="Works" />

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {/* First card — clickable, opens drive */}
          <a
            href="https://drive.google.com/drive/u/4/folders/1CEvtjbGyf-XL_8CUQ9gc6RV2JTDPubwh"
            target="_blank" rel="noreferrer"
            className="group tilt-card relative rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-xl p-4 flex flex-col items-center text-center transition-all hover:border-primary hover:shadow-[0_20px_60px_-20px_oklch(0_0_0/0.5)]"
          >
            <div className="w-full aspect-square overflow-hidden rounded-xl bg-background/40 grid place-items-center">
              <img srcSet={work1} sizes="(max-width: 640px) 90vw, 400px" alt="All projects" loading="lazy" decoding="async" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="mt-5 font-display text-2xl md:text-3xl italic group-hover:text-primary transition-colors">All Project Here</p>
            <span className="mt-2 text-xs uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">Open drive ↗</span>
          </a>

          {[
            { img: work2, title: "Active Projects" },
            { img: work3, title: "Reach" },
            { img: work4, title: "Details" },
          ].map((w) => (
            <div
              key={w.title}
              className="group tilt-card relative rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-xl p-4 flex flex-col items-center text-center transition-all hover:border-primary hover:shadow-[0_20px_60px_-20px_oklch(0_0_0/0.5)]"
            >
              <div className="w-full aspect-square overflow-hidden rounded-xl bg-background/40 grid place-items-center">
                <img srcSet={w.img} sizes="(max-width: 640px) 90vw, 400px" alt={w.title} loading="lazy" decoding="async" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-5 font-display text-2xl md:text-3xl italic group-hover:text-primary transition-colors">{w.title}</p>
            </div>
          ))}
        </div>
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
              { Icon: Phone, label: "Phone", value: "01823444069", href: "tel:+8801823444069" },
              { Icon: MessageCircle, label: "WhatsApp", value: "01823 444069", href: "https://api.whatsapp.com/send?phone=8801823444069&text=Hello%20Charlie!!" },
              { Icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: null as string | null },
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
          <p className="text-3xl text-primary" style={{ fontFamily: '"Allison", cursive' }}>Charlie</p>
        </div>
      </footer>

      {/* Skill brief modal */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-400 ${activeSkill ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setActiveSkill(null)}
      >
        <div className={`absolute inset-0 bg-background/60 backdrop-blur-md transition-opacity duration-400 ${activeSkill ? "opacity-100" : "opacity-0"}`} />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md transition-all duration-400 ${activeSkill ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-3xl overflow-hidden border border-primary/40 bg-white/10 backdrop-blur-2xl glow-primary-xl p-7">
            <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/15 to-transparent rotate-45 animate-[shimmer_3s_infinite] opacity-50 pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-accent/25 blur-3xl pointer-events-none" />

            <button
              onClick={() => setActiveSkill(null)}
              aria-label="Close"
              className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full border border-white/20 bg-white/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
            >
              <X size={16} />
            </button>

            <p className="relative text-[10px] uppercase tracking-[0.35em] text-primary mb-3">Skill</p>
            <h3 className="relative font-display text-3xl md:text-4xl italic text-foreground glow-text-primary">{activeSkill?.name}</h3>
            <p className="relative mt-5 text-sm md:text-base text-foreground/85 leading-relaxed">{activeSkill?.brief}</p>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => lenisRef.current?.scrollTo(0)}
        aria-label="Scroll to top"
        className={`fixed bottom-5 right-5 z-50 w-11 h-11 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_30px_-6px_oklch(0_0_0/0.4)] transition-all duration-500 grid place-items-center overflow-hidden group hover:scale-110 hover:glow-primary-md ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
      >
        {/* Liquid glass shimmer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/15 to-transparent rotate-45 animate-[shimmer_3s_infinite] opacity-60" />

        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-white/10"
          />
          <circle
            cx="50" cy="50" r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-primary transition-all duration-150"
            strokeDasharray={2 * Math.PI * 44}
            strokeDashoffset={2 * Math.PI * 44 * (1 - scrollProgress)}
          />
        </svg>
        <ArrowUp size={18} className="relative text-primary group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
