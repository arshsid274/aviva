import AircraftScroll from "@/components/ui/AircraftScroll";
import { playfairDisplay } from "@/lib/fonts";

const services = [
  {
    title: "Residential Architecture",
    body: "Custom homes designed for how you live. Spaces that balance aesthetic ambition with practical livability.",
    items: [
      "New Build Homes",
      "Coastal & Mountain Residences",
      "Urban Infill Projects",
      "Garden Studios",
    ],
  },
  {
    title: "Commercial Projects",
    body: "Boutique workspaces and retail environments that reflect your brand. Small-scale projects where attention to detail makes a difference.",
    items: ["Creative Workspaces", "Retail Interiors", "Showrooms", "Hospitality Design"],
  },
  {
    title: "Interior Architecture",
    body: "Thoughtful interiors that enhance function and atmosphere. Complete transformations that honor character while meeting contemporary needs.",
    items: [
      "Full Interior Design",
      "Space Planning",
      "Custom Millwork Design",
      "Material & Finish Selection",
    ],
  },
  {
    title: "Renovations & Additions",
    body: "Transforming existing spaces with sensitivity to their character. Careful interventions that respect what exists while creating something new.",
    items: ["Heritage Renovations", "Home Extensions", "Adaptive Reuse", "Building Upgrades"],
  },
];

const portfolio = [
  { title: "Khalifa Airport", location: "Zwitina, Libya", type: "Government", year: "2025" },
  { title: "Aviva Hospital", location: "Benghazi, Libya", type: "Healthcare", year: "2025" },
  { title: "Oil & Gas Headquarters", location: "Jebal Ali, UAE", type: "Office", year: "2025" },
  { title: "Hala Hypermarket", location: "Jedabiya, Libya", type: "Commercial", year: "2024" },
  { title: "Pathos Gold Boutique", location: "—", type: "Commercial", year: "2022" },
  { title: "BNG Hills Villa 01", location: "Benghazi, Libya", type: "Residential", year: "2024" },
  { title: "BNG Hills Villa 02", location: "Benghazi, Libya", type: "Residential", year: "2022" },
  { title: "Isle of Dog Tower", location: "London, UK", type: "—", year: "—" },
];

const offices = [
  {
    country: "United Kingdom — Sheffield",
    address: "25 Woodbourn Business Centre, Jessell Street, S9 3HY, Sheffield, UK",
    phone: "+44 778 548 3840",
  },
  {
    country: "United Arab Emirates — Dubai",
    address: "410 Burlington Tower, Business Bay, Dubai, UAE",
    phone: "+971 52 215 6092",
  },
  {
    country: "China — Qingdao",
    address: "Hualuxe Hotel, Licang, Qingdao, China",
    phone: "+86 138 6399 8224",
  },
  {
    country: "Libya — Benghazi",
    address: "Al Qawarshah, Benghazi, Libya",
    phone: "+218 901 798 200",
  },
  {
    country: "Turkey — Istanbul",
    address:
      "176 Zeytinburnu, Maltepe Mah. Esk Cirpici Yolu Sk. Parima, Kat 14, Kapi 8, Istanbul, Turkey",
    phone: "+90 536 432 69 03",
  },
];

const team = [
  { name: "Rawan Emgawer", role: "CEO / Founder" },
  { name: "Vincient Bi", role: "Architect" },
  { name: "Song Qixia", role: "Interior Designer" },
  { name: "Yun Li", role: "Structural Engineer" },
  { name: "Zhao Yan", role: "Detailing Engineer" },
  { name: "Nancy Liu", role: "International Relations Manager" },
  { name: "Maggie Wang", role: "Office Manager" },
];

export default function Home() {
  return (
    <main className="relative bg-white text-zinc-900">
      <AircraftScroll />

      {/* Architecture as a Dialogue */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <span className="block text-xs uppercase tracking-[0.4em] text-amber-700/80">
          About REA
        </span>
        <h2
          className={`${playfairDisplay.className} mt-4 text-3xl font-light leading-tight md:text-5xl`}
        >
          Architecture as a Dialogue
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
          At Rawan Emgawer Architect, we believe architecture is a dialogue between
          space, context, and human experience. We design spaces that respond to
          their surroundings, focusing on natural materials, light, and a balance
          between function and emotion.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
          Each project is an opportunity to create refined, meaningful, and
          timeless environments that reflect their context and serve the people
          who inhabit them.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900">
              Philosophy
            </h3>
            <p className="mt-3 text-zinc-600">
              Blending function, emotion, and timeless aesthetics to create
              meaningful, enduring spaces.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900">
              Approach
            </h3>
            <p className="mt-3 text-zinc-600">
              Context-driven design that integrates materials and light to create
              balanced, responsive architecture.
            </p>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 text-center md:grid-cols-3">
          <div>
            <div
              className={`${playfairDisplay.className} text-5xl font-light text-zinc-900 md:text-6xl`}
            >
              50+
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Talented Employees
            </div>
          </div>
          <div>
            <div
              className={`${playfairDisplay.className} text-5xl font-light text-zinc-900 md:text-6xl`}
            >
              15+
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Years of Experience
            </div>
          </div>
          <div>
            <div
              className={`${playfairDisplay.className} text-5xl font-light text-zinc-900 md:text-6xl`}
            >
              ∞
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Happy Clients
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <span className="block text-xs uppercase tracking-[0.4em] text-amber-700/80">
          What we do
        </span>
        <h2
          className={`${playfairDisplay.className} mt-4 text-3xl font-light leading-tight md:text-5xl`}
        >
          Services
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="border-t border-zinc-200 pt-8"
            >
              <h3 className={`${playfairDisplay.className} text-2xl font-medium`}>
                {s.title}
              </h3>
              <p className="mt-3 text-zinc-600">{s.body}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-zinc-500">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber-700/70">—</span>
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-t border-zinc-200 bg-zinc-50 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <span className="block text-xs uppercase tracking-[0.4em] text-amber-700/80">
            Selected works
          </span>
          <h2
            className={`${playfairDisplay.className} mt-4 text-3xl font-light leading-tight md:text-5xl`}
          >
            Portfolio
          </h2>
          <p className="mt-6 max-w-2xl text-zinc-600">
            A curated selection of projects exploring light, proportion, and the
            balance between nature and structure.
          </p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((p) => (
              <article key={p.title} className="bg-white p-6">
                <h3 className={`${playfairDisplay.className} text-lg font-medium`}>
                  {p.title}
                </h3>
                <dl className="mt-4 space-y-1 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <div className="flex justify-between">
                    <dt>Location</dt>
                    <dd className="text-zinc-700">{p.location}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Type</dt>
                    <dd className="text-zinc-700">{p.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Year</dt>
                    <dd className="text-zinc-700">{p.year}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <span className="block text-xs uppercase tracking-[0.4em] text-amber-700/80">
          Our Team
        </span>
        <h2
          className={`${playfairDisplay.className} mt-4 text-3xl font-light leading-tight md:text-5xl`}
        >
          International expertise, local insight
        </h2>
        <p className="mt-6 max-w-2xl text-zinc-600">
          Our team brings extensive international expertise, delivering innovative
          design solutions shaped by global experience and local insight.
        </p>
        <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {team.map((t) => (
            <li
              key={t.name}
              className="flex items-baseline justify-between border-b border-zinc-200 py-3"
            >
              <span className="text-zinc-900">{t.name}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {t.role}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-200 bg-zinc-950 py-24 text-zinc-100 md:py-32"
      >
        <div className="mx-auto max-w-5xl px-6">
          <span className="block text-xs uppercase tracking-[0.4em] text-amber-400/80">
            Contact
          </span>
          <h2
            className={`${playfairDisplay.className} mt-4 text-3xl font-light leading-tight md:text-5xl`}
          >
            Let&apos;s create something timeless together.
          </h2>
          <p className="mt-6 max-w-2xl text-zinc-400">
            Whether you&apos;re at the beginning of your architectural journey or
            ready to start construction, we&apos;re here to listen and explore
            possibilities together.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Email
              </div>
              <a
                className="mt-2 block text-zinc-100 hover:text-amber-300"
                href="mailto:rawan@rawanemgawer.com"
              >
                rawan@rawanemgawer.com
              </a>
              <a
                className="mt-1 block text-zinc-300 hover:text-amber-300"
                href="mailto:info@rawanemgawer.com"
              >
                info@rawanemgawer.com
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Phone
              </div>
              <a
                className="mt-2 block text-zinc-100 hover:text-amber-300"
                href="tel:+447785473840"
              >
                +44 778 547 3840
              </a>
              <div className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                Primary Location
              </div>
              <div className="mt-2 text-zinc-300">
                Dubai, United Arab Emirates
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden bg-zinc-800/60 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <div key={o.country} className="bg-zinc-950 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                  {o.country}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {o.address}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Mon – Fri, 9am – 6pm
                </p>
                <a
                  href={`tel:${o.phone.replace(/\s+/g, "")}`}
                  className="mt-1 block text-sm text-zinc-200 hover:text-amber-300"
                >
                  {o.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 py-8 text-center text-xs text-zinc-500">
        © 2026 Rawan Emgawer. All rights reserved.
      </footer>
    </main>
  );
}
