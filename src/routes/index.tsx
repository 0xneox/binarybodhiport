import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Binary Bodhi — Independent Software Builder & Philosopher" },
      {
        name: "description",
        content: "Binary Bodhi (Gokul Ravindran) — Independent software builder, developer, and philosophical writer. Building systems across software, algorithms, decentralized technology, and contemplative inquiry. Explore projects like Racana, JennyDoku, Sai Protocol, Stillpoint, and 21B Labs.",
      },
      { name: "keywords", content: "Binary Bodhi, Gokul Ravindran, software developer, quantitative systems, algorithms, Web3, blockchain, philosophy, Advaita Vedanta, Kashmir Shaivism, consciousness, independent builder, open source" },
      { name: "author", content: "Binary Bodhi" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Binary Bodhi — Independent Software Builder & Philosopher" },
      {
        property: "og:description",
        content: "Independent software builder, developer, and philosophical writer. Building systems across software, algorithms, decentralized technology, and contemplative inquiry." },
      { property: "og:url", content: "https://jennydoko.fun" },
      { property: "og:site_name", content: "Binary Bodhi" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://jennydoko.fun/logo.jpg" },
      { property: "og:image:alt", content: "Binary Bodhi Logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Binary Bodhi — Independent Software Builder & Philosopher" },
      {
        name: "twitter:description",
        content: "Independent software builder, developer, and philosophical writer. Building systems across software, algorithms, decentralized technology, and contemplative inquiry." },
      { name: "twitter:image", content: "https://jennydoko.fun/logo.jpg" },
      { name: "twitter:image:alt", content: "Binary Bodhi Logo" },
      { name: "twitter:site", content: "@binarybodhi" },
      { name: "twitter:creator", content: "@binarybodhi" },
      { rel: "canonical", href: "https://jennydoko.fun" },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: "/logo.jpg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Binary Bodhi",
          "alternateName": "Gokul Ravindran",
          "url": "https://jennydoko.fun",
          "image": "https://jennydoko.fun/logo.jpg",
          "sameAs": [
            "https://github.com/0xneox",
            "https://x.com/binarybodhi",
            "https://www.youtube.com/@binarybodhi",
            "https://www.quora.com/profile/0xneox",
            "https://binarybodi.substack.com",
          ],
          "jobTitle": "Independent Software Builder",
          "description": "Independent software builder, developer, and philosophical writer exploring the intersection of technology, consciousness, and contemplative traditions.",
          "knowsAbout": [
            "Software Development",
            "Quantitative Systems",
            "Algorithms",
            "Blockchain",
            "Web3",
            "Philosophy",
            "Advaita Vedanta",
            "Kashmir Shaivism",
            "Consciousness Studies"
          ]
        })
      }
    ]
  }),
  component: Index,
});

// Theme toggle component
function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "light" ? "light" : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-[11px] uppercase-tight dim uppercase hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-150 px-2 py-1"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}

// Uptime since DOB: Dec 16, 1993 11:30 AM
function useUptime() {
  const [hours, setHours] = useState<number | null>(null);
  useEffect(() => {
    const start = new Date("1993-12-16T11:30:00").getTime();
    setHours(Math.floor((Date.now() - start) / 3_600_000));
  }, []);
  return hours;
}

function TopBar() {
  const hours = useUptime();
  return (
    <div className="flex items-baseline justify-between text-[11px] uppercase-tight dim uppercase">
      <span>Gokul Ravindran</span>
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="hidden sm:inline" aria-label={`Alive since: ${hours} hours`}>
          {hours !== null ? `alive since ${hours.toLocaleString()} HOURS` : "alive since ——"}
        </span>
        <ThemeToggle />
      </div>
    </div>
  );
}

function SectionMark({ n, label }: { n: string; label: string }) {
  return (
    <div className="my-12 sm:my-16 flex items-center gap-4 text-[11px] uppercase-tight dim uppercase">
      <span>§ {n}</span>
      <span className="rule flex-1" />
      <span>{label}</span>
    </div>
  );
}

function Meta({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[5rem_1fr] sm:grid-cols-[6.5rem_1fr] items-baseline gap-x-3 sm:gap-x-4 gap-y-1">
      <span className="dim text-[11px] uppercase-tight uppercase">{k}</span>
      <span className="break-words">{v}</span>
    </div>
  );
}

function Index() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--fg)] text-[var(--bg)] px-4 py-2 z-50"
      >
        Skip to main content
      </a>

      <main id="main-content" className="mx-auto max-w-[720px] px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="mandala-bg" aria-hidden="true" />
        <TopBar />

      <div className="rule mt-6 mb-12 sm:mb-16" />

      {/* HERO */}
      <header className="section-fade-in">
        <div className="dim text-[11px] uppercase-tight uppercase mb-6">§ 00 — index</div>
        <h1 className="text-[clamp(2rem,6vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.02em] uppercase">
          Binary
          <br />
          Bodhi<span className="cursor" aria-hidden="true" />
        </h1>

        <div className="mt-10 space-y-3">
          <Meta k="Role" v="Developer | Quant | Algos | Philosophy" />
          <Meta k="Focus" v="Effective Altruism & Collective consciousness" />
          <Meta
            k="Building"
            v={
              <span>
                <a href="https://www.binarybodhi.xyz/" target="_blank" rel="noreferrer" className="underline">binarybodhi.xyz</a>
                <span className="dim"> · </span>
                <a href="https://saiprotocol.xyz" target="_blank" rel="noreferrer" className="underline">saiprotocol.xyz</a>
                <span className="dim"> · </span>
                <a href="https://21b.fun" target="_blank" rel="noreferrer" className="underline">21b.fun</a>
                <span className="dim"> · </span>
                <a href="https://zigma.pro" target="_blank" rel="noreferrer" className="underline">zigma.pro</a>
                <span className="dim"> · </span>
                <a href="https://stillpoint.fun" target="_blank" rel="noreferrer" className="underline">stillpoint.fun</a>
              </span>
            }
          />
          <Meta
            k="Location"
            v={
              <span>
                Kerala · Bangalore · Delhi · Hyderabad · Uttarakhand · Dubai
              </span>
            }
          />
        </div>
      </header>

      <SectionMark n="01" label="selected work" />

      <section className="section-fade-in">
        <div className="space-y-8">
          {/* Racana */}
          <div className="border-t border-[var(--line)] pt-6">
            <div className="dim text-[11px] uppercase-tight uppercase mb-2">Live</div>
            <h3 className="text-xl mb-2">Racana</h3>
            <p className="max-w-[65ch] text-[var(--dim)] mb-3">
              Manuscript in. Book out. A publishing tool that turns manuscripts into print-ready book interiors, making professional typesetting more accessible without requiring specialist design software.
            </p>
            <a href="https://racana.pro/" target="_blank" rel="noreferrer" className="underline text-sm">
              Visit Racana
            </a>
          </div>

          {/* JennyDoku */}
          <div className="border-t border-[var(--line)] pt-6">
            <div className="dim text-[11px] uppercase-tight uppercase mb-2">Live</div>
            <h3 className="text-xl mb-2">JennyDoku</h3>
            <p className="max-w-[65ch] text-[var(--dim)] mb-3">
              A puppy-themed logic puzzle built around deduction, constraint solving, and progressive difficulty.
            </p>
            <a href="https://jennydoko.fun" target="_blank" rel="noreferrer" className="underline text-sm">
              Play JennyDoku
            </a>
          </div>

          {/* Sai Protocol */}
          <div className="border-t border-[var(--line)] pt-6">
            <div className="dim text-[11px] uppercase-tight uppercase mb-2">In development</div>
            <h3 className="text-xl mb-2">Sai Protocol</h3>
            <p className="max-w-[65ch] text-[var(--dim)] mb-3">
              Exploring decentralized collective intelligence. Research and development into protocols for coordination, shared intelligence, and decentralized systems.
            </p>
            <a href="https://saiprotocol.xyz/" target="_blank" rel="noreferrer" className="underline text-sm">
              Explore the project
            </a>
          </div>

          {/* Stillpoint */}
          <div className="border-t border-[var(--line)] pt-6">
            <div className="dim text-[11px] uppercase-tight uppercase mb-2">Open-source</div>
            <h3 className="text-xl mb-2">Stillpoint</h3>
            <p className="max-w-[65ch] text-[var(--dim)] mb-3">
              A space for contemplative inquiry, without the financial layer. Stillpoint explores the relationship between attention, awareness, and direct experience. It is intended to remain free and open source, built for inquiry rather than token speculation, fundraising, or monetization.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="https://stillpoint.fun/" target="_blank" rel="noreferrer" className="underline">
                Explore Stillpoint
              </a>
              <a href="https://github.com/0xneox" target="_blank" rel="noreferrer" className="underline">
                View source
              </a>
            </div>
          </div>

          {/* 21B Labs */}
          <div className="border-t border-[var(--line)] pt-6">
            <div className="dim text-[11px] uppercase-tight uppercase mb-2">Live</div>
            <h3 className="text-xl mb-2">21B Labs</h3>
            <p className="max-w-[65ch] text-[var(--dim)] mb-3">
              Independent experiments in quantitative methods, algorithms, and software systems.
            </p>
            <a href="https://21b.fun/" target="_blank" rel="noreferrer" className="underline text-sm">
              Explore 21B Labs
            </a>
          </div>

          {/* Zigma */}
          <div className="border-t border-[var(--line)] pt-6">
            <div className="dim text-[11px] uppercase-tight uppercase mb-2">Experimental</div>
            <h3 className="text-xl mb-2">Zigma</h3>
            <p className="max-w-[65ch] text-[var(--dim)] mb-3">
              A project exploring prediction markets, information, and probabilistic reasoning.
            </p>
            <a href="https://zigma.pro/" target="_blank" rel="noreferrer" className="underline text-sm">
              Explore Zigma
            </a>
          </div>
        </div>
      </section>

      <SectionMark n="02" label="prior work" />

      <section className="section-fade-in">
        <p className="max-w-[62ch] mb-6">
          Before that: an independent Web3 practice. Smart contracts for
          seven-plus cryptocurrencies. An order book and matching engine
          for an exchange. Four whitepapers. On-chain analysis and technical research.
          Code that outlives the client relationship.
        </p>

        <p className="mt-6 max-w-[62ch] text-[var(--dim)]">
          No résumé filler. No thought-leadership.
        </p>
      </section>

      <SectionMark n="03" label="the inquiry continues" />

      <section className="section-fade-in">
        <p className="max-w-[62ch] mb-6">
          The technical work is only one part of the inquiry.
        </p>

        <p className="max-w-[62ch] mb-6 text-[var(--dim)]">
          My interests include Advaita Vedanta, Kashmir Shaivism, contemplative practice, and the nature of consciousness. I am less interested in collecting philosophical ideas than in examining what they reveal in experience.
        </p>

        <p className="max-w-[62ch] mb-6 text-[var(--dim)]">
          I write about the Self, attention, identity, and the intersections between ancient philosophical traditions and contemporary technology.
        </p>

        <a href="https://quora.com/profile/0xneox" target="_blank" rel="noreferrer" className="underline text-sm">
          Read my writing on Quora
        </a>
      </section>

      <SectionMark n="04" label="Root Access" />

      <section className="section-fade-in">
        <div className="border border-[var(--line)] p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl mb-2">Root Access</h3>
          <p className="dim text-[11px] uppercase-tight uppercase mb-6">Binary Bodhi</p>

          <p className="max-w-[62ch] mb-6">
            Written between Kerala and the hills of Nepal, Root Access explores the distance between insight and embodiment — where philosophical understanding meets the demands of lived experience.
          </p>

          <p className="dim text-sm">
            Coming soon
          </p>
        </div>
      </section>

      <SectionMark n="05" label="about" />

      <section className="section-fade-in">
        <h3 className="text-xl sm:text-2xl mb-6">A practice of building and seeing clearly.</h3>

        <p className="max-w-[62ch] mb-6">
          I work across software, algorithms, and decentralized systems. Alongside this work runs a longer inquiry into consciousness, non-duality, and contemplative traditions.
        </p>

        <p className="max-w-[62ch] mb-6 text-[var(--dim)]">
          I am interested in systems that can be tested, ideas that withstand scrutiny, and experiences that change how a question is understood.
        </p>

        <p className="max-w-[62ch] text-[var(--dim)]">
          Some of that work becomes software. Some becomes writing. Some remains an open question.
        </p>
      </section>

      <SectionMark n="06" label="signal" />

      <section className="section-fade-in">
        <p className="max-w-[62ch] mb-10">
          No permission asked. No middlemen required. No platform owns
          this identity.
        </p>

        <ul className="space-y-3">
          {[
            ["binarybodhi.xyz", "https://www.binarybodhi.xyz/"],
            ["GitHub", "https://github.com/0xneox"],
            ["X", "https://x.com/binarybodhi"],
            ["Telegram", "https://t.me/binarybodhi"],
            ["Signal", "mailto:neohex@pm.me"],
            ["Quora", "https://www.quora.com/profile/0xneox"],
            ["Instagram", "https://www.instagram.com/binarybodhi"],
            ["Imgur", "https://imgur.com/user/0xbodi"],
            ["Keybase", "https://keybase.io/neohex"],
            ["YouTube", "https://www.youtube.com/@binarybodhi"],
            ["Substack", "https://binarybodi.substack.com/"],
          ].map(([label, href]) => (
            <li
              key={label}
              className="grid grid-cols-[5rem_1fr_auto] sm:grid-cols-[6.5rem_1fr_auto] items-baseline gap-x-3 sm:gap-x-4"
            >
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-150"
              >
                {label}
              </a>
              <span className="dim text-[11px] hidden sm:inline">↗</span>
            </li>
          ))}
        </ul>

        <div className="rule mt-16 sm:mt-24 mb-6" />

        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 text-[11px] uppercase-tight dim uppercase">
          <span>Binary Bodhi — Gokul Ravindran</span>
          <span>Independent work. Open inquiry.</span>
        </div>

        <div className="text-[11px] uppercase-tight dim uppercase mt-4">
          No tracking. No cookies. No analytics.
        </div>
      </section>
    </main>
    </>
  );
}
