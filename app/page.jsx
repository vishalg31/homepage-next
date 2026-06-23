"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const products = [
  {
    name: "Product Interview QnA",
    status: "New",
    category: "Interview Prep",
    href: "https://interview.vishalbuilds.com",
    theme: {
      glow: "rgba(79, 70, 229, 0.16)",
      panel: "linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(255,255,255,0) 55%)",
      accent: "#4f46e5",
    },
    tagline: "Fully-worked product interview answers. Read, or listen.",
    summary:
      "A library of worked product and product-strategy interview answers. Each one structures the problem, reasons out loud, makes real tradeoffs, and holds up under pushback. Read them, or listen with built-in narration.",
    details: [
      { label: "Worked answers across all 9 product and strategy question types" },
      { label: "Read or listen: narration with a draggable play bar" },
      { label: "An S&O method guide, plus the framework behind every answer" },
    ],
  },
  {
    name: "Echoes",
    status: "New",
    category: "Music Discovery",
    href: "https://echoes.vishalbuilds.com",
    theme: {
      glow: "rgba(180, 70, 160, 0.18)",
      panel: "linear-gradient(135deg, rgba(168, 53, 154, 0.14), rgba(255,255,255,0) 55%)",
      accent: "#a8359a",
    },
    tagline: "A music discovery game shaped entirely by your taste.",
    summary:
      "Answer a few quick questions and Echoes builds you a world of music to explore. Chase a song's vibe across artists, or dig into one artist's deep cuts and best-known tracks. Every page is art-led and shifts colour with whatever is playing.",
    details: [
      { label: "Two ways to play: Taste Match and Artist Deep Dive" },
      { label: "Album-art colours theme every page as you listen" },
      { label: "A taste profile that grows with what you discover" },
    ],
  },
  {
    name: "Dak",
    status: "Live",
    category: "Productivity",
    href: "https://dak.vishalbuilds.com",
    theme: {
      glow: "rgba(255, 153, 0, 0.16)",
      panel: "linear-gradient(135deg, rgba(10, 61, 98, 0.14), rgba(255,153,0,0.06) 55%)",
      accent: "#c87800",
    },
    tagline: "Beautiful internal emails. One paste away.",
    summary:
      "Paste your raw content, pick a template, and export Outlook-ready PNG images in seconds. No design skills needed. Built for teams that send weekly updates, launch announcements, and progress reports.",
    details: [
      { label: "AI structures your content into a polished email" },
      { label: "Multi-part export for Outlook image size limits" },
      { label: "Inline editing, themes, logo upload, no regeneration needed" },
    ],
  },
  {
    name: "Tailor",
    status: "Live",
    category: "Career AI",
    href: "https://tailor.vishalbuilds.com",
    theme: {
      glow: "rgba(16, 185, 129, 0.18)",
      panel: "linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(255,255,255,0) 55%)",
      accent: "#0f9f6e",
    },
    tagline: "ATS-ready CV tailored to any job in 60 seconds.",
    summary:
      "Paste a job description. Get an ATS-optimised CV with rewritten bullets, a match score, and a one-click PDF export. Your data never leaves your browser.",
    details: [
      { label: "ATS scoring against real job descriptions" },
      { label: "Word-level diff with before/after view" },
      { label: "PDF export — zero data stored" },
    ],
  },
  {
    name: "InvestCore",
    status: "Live",
    category: "Finance",
    href: "https://invest.vishalbuilds.com",
    theme: {
      glow: "rgba(13, 148, 136, 0.18)",
      panel: "linear-gradient(135deg, rgba(13, 148, 136, 0.12), rgba(255,255,255,0) 55%)",
      accent: "#0d9488",
    },
    tagline: "See exactly what your investments will be worth, post-tax.",
    summary:
      "Compare every major Indian investment instrument post-tax and inflation-adjusted, build a portfolio, or track your actual holdings and see the real projected value of what you own. FY 2025-26 rules.",
    details: [
      { label: "My Portfolio: track real holdings with per-instrument tax treatment" },
      { label: "Add more money per holding — lump sum or SIP — and model the impact" },
      { label: "Step-by-step tax breakdown for every instrument and your full portfolio" },
    ],
  },
  {
    name: "Tax Finder",
    status: "Live",
    category: "Finance",
    href: "https://tax.vishalbuilds.com",
    theme: {
      glow: "rgba(245, 158, 11, 0.18)",
      panel: "linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(255,255,255,0) 55%)",
      accent: "#d97706",
    },
    tagline: "A calmer way to compare old vs new regime tax outcomes.",
    summary:
      "An income tax calculator for FY 2026-27 with HRA support, surcharge handling, and NRI mode for Indian salary scenarios.",
    details: [
      { label: "Compares both regimes instantly" },
      { label: "Supports HRA, deductions, and exports" },
      { label: "Includes FY 2026-27 and NRI updates" },
    ],
  },
  {
    name: "Cricket Hub",
    status: "Live",
    category: "Sports Data",
    href: "https://cricket.vishalbuilds.com",
    theme: {
      glow: "rgba(59, 130, 246, 0.16)",
      panel: "linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(255,255,255,0) 55%)",
      accent: "#2563eb",
    },
    tagline: "Cricket products that feel more playful and more data-driven.",
    summary:
      "A home for interactive cricket experiences built on real data, with a card game and a product to view stats for your favorite cricketer.",
    details: [
      { label: "Trump Cards", href: "https://cricket.vishalbuilds.com/ipl-trump-cards" },
      { label: "Stat Engine", href: "https://cricket.vishalbuilds.com/stat-engine" },
      { label: "Built around cricket data and utility" },
    ],
  },
  {
    name: "Weather Dashboard",
    status: "Live",
    category: "Utilities",
    href: "https://weather.vishalbuilds.com",
    theme: {
      glow: "rgba(14, 165, 233, 0.16)",
      panel: "linear-gradient(135deg, rgba(14, 165, 233, 0.12), rgba(255,255,255,0) 55%)",
      accent: "#0284c7",
    },
    tagline: "Readable weather intelligence without dashboard noise.",
    summary:
      "A weather alert dashboard for North America focusing on severe and extreme alerts with clearer, faster decision support.",
    details: [
      { label: "Real-time updates" },
      { label: "Severe and extreme alerts" },
      { label: "Easy to use" },
    ],
  },
  {
    name: "Movie DNA",
    status: "Upcoming",
    category: "Entertainment Data",
    href: "#",
    theme: {
      glow: "rgba(139, 92, 246, 0.18)",
      panel: "linear-gradient(135deg, rgba(139, 92, 246, 0.14), rgba(255,255,255,0) 55%)",
      accent: "#7c3aed",
    },
    tagline: "A way to break down what makes films feel the way they do.",
    summary:
      "An upcoming product direction exploring films through structured signals, identity, and taste, with a more personal and data-led lens.",
    details: [
      { label: "Upcoming product in the lab" },
      { label: "Explores films through structured attributes" },
      { label: "Designed to feel more distinctive than a generic movie database" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-all"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
        color: "var(--text)",
      }}
      aria-label="Toggle dark mode"
    >
      <span className="text-xs">{dark ? "Dark" : "Light"}</span>
      <span
        className="relative inline-flex h-5 w-9 rounded-full transition-colors"
        style={{ background: dark ? "var(--accent)" : "var(--surface-soft)" }}
      >
        <span
          className="absolute top-0.5 h-4 w-4 rounded-full transition-all"
          style={{
            left: dark ? "18px" : "2px",
            background: dark ? "#0c111d" : "#ffffff",
          }}
        />
      </span>
    </button>
  );
}

function StatusPill({ children }) {
  return (
    <span
      className="inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-secondary)",
        background: "var(--surface-soft)",
      }}
    >
      {children}
    </span>
  );
}

function NewSpark() {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65], rotate: [0, 10, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      className="inline-flex text-[12px]"
    >
      {"*"}
    </motion.span>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 10h10M11 6l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CricketCardIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <rect x="2.5" y="3.5" width="9" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12.5 12.5 16 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <circle cx="16.4" cy="13.8" r="1.3" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function StatIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path d="M3 16.5h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <rect x="4.2" y="10.5" width="2.4" height="4.5" rx="0.8" fill="currentColor" />
      <rect x="8.8" y="7.5" width="2.4" height="7.5" rx="0.8" fill="currentColor" />
      <rect x="13.4" y="5" width="2.4" height="10" rx="0.8" fill="currentColor" />
    </svg>
  );
}

function PlusIcon({ open }) {
  return (
    <span className="relative inline-flex h-5 w-5 items-center justify-center">
      <span className="absolute h-[1.5px] w-4 rounded-full bg-current" />
      <span className={`absolute h-4 w-[1.5px] rounded-full bg-current transition-transform ${open ? "scale-y-0" : "scale-y-100"}`} />
    </span>
  );
}

export default function HomePage() {
  const [dark, setDark] = useState(false);
  const [openProducts, setOpenProducts] = useState([]);
  const [updatesOpen, setUpdatesOpen] = useState(true);

  const scrollToProducts = () => {
    if (typeof window !== "undefined") {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setUpdatesOpen(false);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <div
        className="sticky top-0 z-20 border-b backdrop-blur-xl"
        style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 86%, transparent)" }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="https://www.vishalbuilds.com" className="text-[15px] font-semibold tracking-tight">
            Vishal Builds
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden items-center gap-6 text-sm sm:flex" style={{ color: "var(--text-secondary)" }}>
              <button
                type="button"
                onClick={scrollToProducts}
                className="transition-colors hover:text-[var(--text)]"
              >
                Products
              </button>
            </nav>
            <a
              href="https://blog.vishalbuilds.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm transition-colors hover:opacity-80 font-semibold"
              style={{ color: "var(--accent)" }}
            >
              Blog ✦
            </a>
            <ThemeToggle dark={dark} onToggle={() => setDark((v) => !v)} />
          </div>
        </div>
      </div>

      <section className="px-5 pb-10 pt-12 sm:px-8 sm:pb-16 sm:pt-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start"
          >
            <div className="max-w-[760px]">
              <StatusPill>Product Studio</StatusPill>
              <h1 className="mt-6 text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-[64px] lg:leading-[1.02]">
                Vishal Builds
              </h1>
              <div className="mt-5 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl" style={{ color: "var(--text)" }}>
                Experiments in AI, data, and automation.
              </div>
              <p className="mt-6 max-w-[650px] text-lg leading-8" style={{ color: "var(--text-secondary)" }}>
                I build products for daily use, lifestyle, and fun. This site is where I share what I&apos;m building and learning along the way.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToProducts}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--accent)" }}
                >
                  Explore Products
                  <ArrowIcon />
                </button>
                <a
                  href="https://about.vishalbuilds.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:text-[var(--text)]"
                  style={{
                    borderColor: "color-mix(in srgb, var(--accent) 38%, var(--border))",
                    background: "color-mix(in srgb, var(--surface) 84%, var(--accent) 16%)",
                    boxShadow: "0 10px 28px color-mix(in srgb, var(--accent) 12%, transparent)",
                    color: "var(--text)",
                  }}
                >
                  About Vishal
                </a>
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              className="rounded-[28px] border p-5 shadow-soft"
              style={{
                borderColor: "color-mix(in srgb, var(--accent) 28%, var(--border))",
                background: "color-mix(in srgb, var(--surface) 90%, var(--accent) 10%)",
                boxShadow: "0 18px 42px color-mix(in srgb, var(--accent) 10%, transparent)",
              }}
            >
              <button
                type="button"
                onClick={() => setUpdatesOpen((value) => !value)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
                  <div className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                    Latest Updates
                  </div>
                  <div className="mt-1 text-xs lg:mt-0" style={{ color: "var(--text-secondary)" }}>
                    Fresh changes and what is coming next
                  </div>
                </div>
                <div className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
                  {updatesOpen ? "Hide" : "Show"}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {updatesOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-4">
                      <motion.a
                        href="https://interview.vishalbuilds.com"
                        target="_blank"
                        rel="noreferrer"
                        animate={{ scale: [1, 1.025, 1], boxShadow: ["0 0 0px rgba(79,70,229,0)", "0 0 18px rgba(79,70,229,0.32)", "0 0 0px rgba(79,70,229,0)"] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                        className="block rounded-[24px] border p-4"
                        style={{ borderColor: "rgba(79,70,229,0.45)", background: "color-mix(in srgb, var(--surface-soft) 85%, rgba(79,70,229,0.12))" }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-sm font-semibold sm:text-base">Product Interview QnA</div>
                            <div className="mt-1 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>Interview Prep · Just launched</div>
                          </div>
                          <StatusPill>New</StatusPill>
                        </div>
                        <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                          A library of fully-worked product and strategy interview answers. Each one structures the problem, reasons out loud, makes real tradeoffs, and holds up under pushback. Read them, or listen.
                        </p>
                      </motion.a>
                      <motion.a
                        href="https://echoes.vishalbuilds.com"
                        target="_blank"
                        rel="noreferrer"
                        animate={{ scale: [1, 1.025, 1], boxShadow: ["0 0 0px rgba(168,53,154,0)", "0 0 18px rgba(168,53,154,0.32)", "0 0 0px rgba(168,53,154,0)"] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                        className="block rounded-[24px] border p-4"
                        style={{ borderColor: "rgba(168,53,154,0.45)", background: "color-mix(in srgb, var(--surface-soft) 85%, rgba(168,53,154,0.12))" }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-sm font-semibold sm:text-base">Echoes</div>
                            <div className="mt-1 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>Music Discovery · Just launched</div>
                          </div>
                          <StatusPill>New</StatusPill>
                        </div>
                        <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                          A music discovery game shaped by your taste. Answer a few questions, then chase a track across artists or dig into a single artist for deep cuts. Every page reacts to the music playing.
                        </p>
                      </motion.a>
                      <motion.a
                        href="https://dak.vishalbuilds.com"
                        target="_blank"
                        rel="noreferrer"
                        animate={{ scale: [1, 1.025, 1], boxShadow: ["0 0 0px rgba(255,153,0,0)", "0 0 18px rgba(255,153,0,0.30)", "0 0 0px rgba(255,153,0,0)"] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                        className="block rounded-[24px] border p-4"
                        style={{ borderColor: "rgba(200,120,0,0.45)", background: "color-mix(in srgb, var(--surface-soft) 85%, rgba(10,61,98,0.10))" }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-sm font-semibold sm:text-base">Dak</div>
                            <div className="mt-1 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>Productivity · Live</div>
                          </div>
                          <StatusPill>Live</StatusPill>
                        </div>
                        <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                          Paste your raw content, pick a template, and export Outlook-ready PNG images in seconds. Built for teams sending weekly updates, launch emails, and progress reports.
                        </p>
                      </motion.a>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="products" className="px-5 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1200px]">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="grid gap-4 px-1 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <button
                type="button"
                onClick={() => setOpenProducts([products[0].name])}
                onDoubleClick={() => setOpenProducts(products.map((product) => product.name))}
                className="w-fit text-left text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
                style={{ color: "var(--accent)" }}
              >
                Products
              </button>
              <div className="max-w-[520px] text-sm leading-7 lg:justify-self-end lg:text-right" style={{ color: "var(--text-secondary)" }}>
                Live experiments, shipped products, and space for what comes next.
              </div>
            </div>
          </motion.div>

          <div className="mt-10 overflow-hidden rounded-[32px] border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            {products.map((product, index) => {
              const isOpen = openProducts.includes(product.name);
              return (
                <div key={product.name} className={index !== products.length - 1 ? "border-b" : ""} style={{ borderColor: "var(--border)" }}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenProducts((current) =>
                        current.includes(product.name)
                          ? current.filter((name) => name !== product.name)
                          : [...current, product.name]
                      )
                    }
                    className="relative isolate flex w-full items-center justify-between gap-5 overflow-hidden px-6 py-5 text-left transition-transform duration-300 hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${product.theme.glow}, transparent 55%)`,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-24 opacity-70 blur-2xl"
                      style={{ background: product.theme.glow }}
                    />
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-y-0 -left-1/3 w-2/5"
                      style={{
                        background: dark
                          ? "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.18) 28%, rgba(255,255,255,0.42) 50%, rgba(255,255,255,0.18) 72%, transparent 100%)"
                          : "linear-gradient(100deg, transparent 0%, rgba(15,23,42,0.06) 28%, rgba(15,23,42,0.14) 50%, rgba(15,23,42,0.06) 72%, transparent 100%)",
                        transform: "skewX(-20deg)",
                        opacity: isOpen ? 0.44 : 0.7,
                      }}
                      animate={{ x: ["-155%", "245%"] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: index * 0.16 }}
                    />
                    <div className="relative z-10 grid min-w-0 flex-1 gap-3 sm:grid-cols-[110px_minmax(0,1fr)_140px] sm:items-center sm:gap-4">
                      <span className="inline-flex items-center gap-1.5 sm:w-[110px]">
                        <StatusPill>{product.status}</StatusPill>
                        {product.status === "New" || product.status === "Upcoming" ? <NewSpark /> : null}
                      </span>
                      <div className="flex min-w-0 items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="hidden h-2.5 w-2.5 shrink-0 rounded-full sm:inline-flex"
                          style={{ background: product.theme.accent, boxShadow: `0 0 22px ${product.theme.glow}` }}
                        />
                        <div className="truncate text-2xl font-semibold tracking-[-0.03em]" style={{ color: isOpen ? product.theme.accent : "var(--text)" }}>
                          {product.name}
                        </div>
                      </div>
                      <div className="text-sm sm:text-right" style={{ color: "var(--text-secondary)" }}>{product.category}</div>
                    </div>
                    <div className="relative z-10 flex items-center gap-4" style={{ color: "var(--text-secondary)" }}>
                      <span className="hidden text-sm lg:inline">{product.tagline}</span>
                      <PlusIcon open={isOpen} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="grid gap-6 border-t px-6 py-5 lg:grid-cols-[1.15fr_0.85fr]"
                          style={{
                            borderColor: "var(--border)",
                            backgroundImage: product.theme.panel,
                          }}
                        >
                          <div className="rounded-[24px] p-1" style={{ boxShadow: `0 20px 48px ${product.theme.glow}` }}>
                            <div className="rounded-[22px] p-5 sm:p-5" style={{ background: "color-mix(in srgb, var(--surface) 92%, transparent)" }}>
                              <div className="text-sm font-semibold" style={{ color: product.theme.accent }}>
                                {product.category}
                              </div>
                              <div className="mt-3 text-3xl font-bold tracking-[-0.05em] sm:text-[42px]">
                                {product.name}
                              </div>
                              <p className="mt-3 max-w-[560px] text-base leading-7 sm:text-[17px]" style={{ color: "var(--text-secondary)" }}>
                                {product.summary}
                              </p>
                              <div className="mt-6 flex flex-wrap items-center gap-4">
                                {product.href === "#" ? (
                                  <span
                                    aria-disabled="true"
                                    className="inline-flex cursor-not-allowed items-center rounded-full px-5 py-3 text-sm font-semibold"
                                    style={{
                                      background: "color-mix(in srgb, var(--surface-soft) 82%, white 18%)",
                                      color: "var(--text-secondary)",
                                      border: "1px solid var(--border)",
                                    }}
                                  >
                                    Coming Soon
                                  </span>
                                ) : (
                                  <a
                                    href={product.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
                                    style={{ background: product.theme.accent }}
                                  >
                                    Open Product
                                    <ArrowIcon />
                                  </a>
                                )}
                                <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                                  {product.status}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="px-1 py-2">
                            <div className="text-sm font-semibold" style={{ color: product.theme.accent }}>
                              Features
                            </div>
                            <div className="mt-4 space-y-3">
                              {product.details.map((detail) =>
                                detail.href ? (
                                  <a
                                    key={detail.label}
                                    href={detail.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-between gap-4 border-b pb-3 text-sm font-medium leading-7 transition-colors"
                                    style={{ borderColor: "var(--border)" }}
                                  >
                                    <span
                                      className="flex items-center gap-2.5"
                                      style={{ color: dark ? "var(--text)" : product.theme.accent }}
                                    >
                                      {detail.label === "Trump Cards" ? <CricketCardIcon /> : <StatIcon />}
                                      <span>{detail.label}</span>
                                    </span>
                                    <span
                                      className="text-xs transition-transform group-hover:translate-x-1"
                                      style={{ color: dark ? "#7dd3fc" : product.theme.accent }}
                                    >
                                      Open
                                    </span>
                                  </a>
                                ) : (
                                  <div
                                    key={detail.label}
                                    className="border-b pb-3 text-sm leading-7"
                                    style={{ borderColor: "var(--border)" }}
                                  >
                                    {detail.label}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="story" className="px-5 pt-4 pb-5 sm:px-8 sm:pt-6 sm:pb-8">
        <div
          className="mx-auto max-w-[1200px] rounded-[32px] border px-6 py-8 sm:px-8"
          style={{ borderColor: dark ? "var(--border)" : "#3355a6", background: "var(--surface)" }}
        >
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl" style={{ color: "var(--accent)" }}>About</div>
            <div className="mt-4 max-w-none text-base leading-8" style={{ color: "var(--text-secondary)" }}>
              <p>Product manager and builder exploring AI tools, automation, and data-driven products.</p>
              <p className="mt-3">This site is my playground for experiments and small tools. You can find my professional background and portfolio on the About page.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer id="footer" className="px-5 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-4">
        <div
          className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 rounded-[20px] border px-4 py-3 text-center sm:grid sm:grid-cols-3 sm:items-center sm:text-left"
          style={{ borderColor: dark ? "var(--border)" : "#3355a6", background: "var(--surface)" }}
        >
          <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
            <button type="button" onClick={scrollToTop} className="transition-colors hover:text-[var(--text)]">Home</button>
          </div>
          <div className="text-sm font-medium text-center" style={{ color: "var(--text-secondary)" }}>
            Made by Vishal
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:justify-end" style={{ color: "var(--text-secondary)" }}>
            <a href="https://github.com/vishalg31" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vishalgayakwar/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:vgvishal31@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
