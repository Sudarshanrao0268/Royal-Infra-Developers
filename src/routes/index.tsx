import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Crown, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-towers.jpg";
import poolImg from "@/assets/amenity-pool.jpg";
import gymImg from "@/assets/amenity-gym.jpg";
import kidsImg from "@/assets/amenity-kids.jpg";
import contactImg from "@/assets/project-pride.jpg";
import {
  projects,
  promises,
  locations,
  amenities,
  marqueeChips,
} from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Infra Developers — 2 & 3BHK Homes at Shamirpet" },
      {
        name: "description",
        content:
          "Premium 2BHK & 3BHK apartments at ORR Exit 7, Karimnagar Highway, Shamirpet. Flat ₹4,499/SFT, 20% down payment and a free lifetime Celebrity Club membership.",
      },
      { property: "og:title", content: "Royal Infra Developers — Premium Living, Shamirpet" },
      {
        property: "og:description",
        content:
          "Three signature residential projects with world-class amenities and lifetime Celebrity Club membership.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  ["Projects", "#projects"],
  ["Location", "#location"],
  ["Amenities", "#amenities"],
  ["Offers", "#offers"],
  ["Enquire", "#contact"],
] as const;

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <Crown className="size-7 text-gold" strokeWidth={1.5} />
            <span className="leading-none">
              <span className="block font-display text-lg tracking-wide">ROYAL</span>
              <span className="block text-[0.6rem] tracking-[0.28em] text-muted-foreground">
                INFRA DEVELOPERS
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-gold">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-sm bg-gold px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a Visit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Royal Infra Developers luxury residences lit at night"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-32 pb-20 md:px-10">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Celebrity Resort — Shamirpet</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            Premium Living
            <br />
            at Affordable
            <br />
            <em className="text-gold">Prices.</em>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            Three signature residential projects on ORR Exit No. 7, Karimnagar Highway —
            world-class amenities, a lifetime Celebrity Club membership, and a fast-growing
            address.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-border px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:border-gold hover:text-gold"
            >
              Book Your Dream Home
            </a>
          </div>
          <p className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-gold" />
            Shamirpet, Near Celebrity Resort, Exit-7, Karimnagar Highway, Hyderabad
          </p>
        </div>
      </section>

      {/* Promise */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <span className="eyebrow">The Royal Promise</span>
        <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight md:text-5xl">
          Better location. Better lifestyle. Better investment.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {promises.map((p) => (
            <div key={p.n} className="bg-surface p-8 md:p-10">
              <span className="font-display text-3xl text-gold/60">{p.n}</span>
              <h3 className="mt-6 text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 md:px-10 md:pb-32">
        <span className="eyebrow">4 Premium Projects · 1 Trusted Name</span>
        <h2 className="mt-5 font-display text-3xl md:text-5xl">Choose your Royal address</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Residences from a flat ₹4,200 per SFT — with 20% down payment and up to 80% bank loan
          assistance.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-sm border border-border bg-surface"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.type}`}
                  width={700}
                  height={900}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.tag && (
                  <span className="absolute top-4 left-4 rounded-sm bg-gold px-3 py-1 text-[0.65rem] font-medium tracking-widest text-primary-foreground uppercase">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-1 text-xs tracking-widest text-gold uppercase">{p.type}</p>
                <p className="mt-4 text-sm text-muted-foreground">{p.blurb}</p>
                <dl className="mt-6 grid grid-cols-2 gap-y-4 border-t border-border pt-6 text-sm">
                  {p.specs.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs text-muted-foreground">{k}</dt>
                      <dd className="mt-0.5">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex items-end justify-between border-t border-border pt-6">
                  <div>
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-display text-2xl text-gold">{p.price}</p>
                    <p className="text-xs text-muted-foreground">/ SFT</p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm transition-colors hover:border-gold hover:text-gold"
                  >
                    Enquire <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-surface py-5">
        <div className="flex w-max animate-marquee gap-10 pr-10 whitespace-nowrap">
          {[...marqueeChips, ...marqueeChips].map((c, i) => (
            <span key={i} className="flex items-center gap-10 text-sm text-muted-foreground">
              {c}
              <span className="size-1 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>

      {/* Location */}
      <section id="location" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
        <span className="eyebrow">Location Highlights</span>
        <h2 className="mt-5 font-display text-3xl md:text-5xl">Everything, minutes away.</h2>
        <div className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map(([place, dist]) => (
            <div
              key={place}
              className="flex items-center justify-between gap-4 border-b border-border py-4 text-sm"
            >
              <span>{place}</span>
              <span className="shrink-0 text-gold">{dist}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 md:px-10 md:pb-32">
        <span className="eyebrow">5X Luxury Amenities</span>
        <h2 className="mt-5 font-display text-3xl md:text-5xl">World-class living, every day.</h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center rounded-sm border border-gold/35 bg-surface p-9">
            <span className="eyebrow">Lifetime · Free</span>
            <h3 className="mt-4 font-display text-3xl">Celebrity Club Membership</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Complimentary lifetime access for every home owner — a privilege that stays with
              your family forever.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              [poolImg, "Swimming Pool"],
              [gymImg, "Gym"],
              [kidsImg, "Kids Play Area"],
            ].map(([src, label], i) => (
              <figure
                key={label as string}
                className={`relative overflow-hidden rounded-sm border border-border ${i === 2 ? "col-span-2" : ""}`}
              >
                <img
                  src={src as string}
                  alt={label as string}
                  width={940}
                  height={650}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-background/70 px-4 py-2 text-xs tracking-widest uppercase backdrop-blur">
                  {label as string}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {amenities.map((a) => (
            <span
              key={a}
              className="rounded-sm border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="scroll-mt-24 border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <span className="eyebrow">Ownership Made Easy</span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl">Premium living, smarter terms.</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["20%", "Down Payment"],
              ["80%", "Bank Loan Assistance"],
              ["₹4,499", "Per SFT · Flat Rate"],
              ["Free", "Lifetime Celebrity Club"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="font-display text-4xl text-gold md:text-5xl">{big}</p>
                <p className="mt-2 text-sm text-muted-foreground">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl">Let's find your Royal home.</h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Share your details and our team will reach out with floor plans, pricing and a
              site-visit slot.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href="tel:+919000000000" className="flex items-center gap-3 hover:text-gold">
                <Phone className="size-4 text-gold" /> +91 90000 00000
              </a>
              <a href="mailto:sales@royalinfra.com" className="flex items-center gap-3 hover:text-gold">
                <Mail className="size-4 text-gold" /> sales@royalinfra.com
              </a>
              <p className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                Shamirpet, Near Celebrity Resort, Exit-7, Karimnagar Highway, Hyderabad
              </p>
            </div>
            <img
              src={contactImg}
              alt="Royal Infra residences"
              width={700}
              height={900}
              loading="lazy"
              className="mt-10 hidden h-64 w-full rounded-sm border border-border object-cover lg:block"
            />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-5 rounded-sm border border-border bg-surface p-7 md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name *">
                <input required className={inputCls} placeholder="Your name" />
              </Field>
              <Field label="Phone *">
                <input required type="tel" className={inputCls} placeholder="+91" />
              </Field>
            </div>
            <Field label="Email">
              <input type="email" className={inputCls} placeholder="you@email.com" />
            </Field>
            <Field label="Interested Project">
              <select className={inputCls} defaultValue="Not sure yet">
                <option>Royal County (3BHK)</option>
                <option>Royal Pride (3BHK)</option>
                <option>Royal Avenue (3BHK)</option>
                <option>Royal Kingdom (2BHK)</option>
                <option>Not sure yet</option>
              </select>
            </Field>
            <Field label="Message">
              <textarea rows={4} className={inputCls} placeholder="Tell us what you're looking for" />
            </Field>
            <button
              type="submit"
              className="w-full rounded-sm bg-gold py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book Your Dream Home
            </button>
            {sent && (
              <p className="text-center text-sm text-gold">
                Thank you — our team will call you shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Royal Infra Developers. All rights reserved.</p>
          <p>ORR Exit No. 7 · Karimnagar Highway · Hyderabad</p>
        </div>
      </footer>
    </div>
  );
}

const inputCls =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
