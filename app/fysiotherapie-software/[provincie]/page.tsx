import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/og";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Database, MapPin, Smartphone, Stethoscope } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FactsBox, LandingClosingCta, LandingFaq, SectionIntro } from "@/components/landing/Landing";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import { NL_MAP, projectLatLng } from "@/lib/nl-map";
import { dialectTranslation, getProvince, provinces, type Province } from "@/lib/provinces";
import { euro, PRICING, priceSentence, TRIAL_DAYS } from "@/lib/pricing";
import { pilotOffer, pilotSentence } from "@/lib/offer";
import { pageDates } from "@/lib/page-dates";

type Props = { params: Promise<{ provincie: string }> };

const SITE = "https://www.reva-app.nl";
const pathFor = (p: Province) => `/fysiotherapie-software/${p.slug}`;

export const dynamicParams = false;

export function generateStaticParams() {
  return provinces.map((p) => ({ provincie: p.slug }));
}

/** "Maastricht, Venlo en Heerlen" */
const list = (names: string[]) => (names.length < 2 ? names.join("") : `${names.slice(0, -1).join(", ")} en ${names.at(-1)}`);

function texts(p: Province) {
  const top = p.cities.slice(0, 3).map((c) => c.name);
  return {
    title: `Fysiotherapie software in ${p.name}`,
    h1: `Software voor fysiopraktijken in ${p.name}`,
    description: `REVA voor fysiopraktijken in ${list(top)}: patiënten loggen hun herstel, jij ziet wie aandacht nodig heeft. Werkt naast elk EPD.`,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { provincie } = await params;
  const p = getProvince(provincie);
  if (!p) return {};
  const t = texts(p);
  const url = `${SITE}${pathFor(p)}`;
  return {
    title: t.title,
    description: t.description,
    keywords: [
      `fysiotherapie software ${p.name}`,
      `software fysiopraktijk ${p.name}`,
      `patiëntenportaal fysiotherapie ${p.name}`,
      ...p.cities.slice(0, 4).map((c) => `fysiotherapie software ${c.name}`),
    ],
    openGraph: {
    images: OG_IMAGES, title: t.title, description: t.description, locale: "nl_NL", type: "website", url },
    alternates: { canonical: url },
  };
}

function faqFor(p: Province) {
  const cities = list(p.cities.slice(0, 4).map((c) => c.name));
  return [
    {
      q: `Werkt REVA voor fysiotherapiepraktijken in ${p.name}?`,
      a: `Ja. REVA is software voor fysiopraktijken in heel Nederland, dus ook in ${cities} en de rest van ${p.name}. REVA werkt online in de browser, naast het EPD dat je al gebruikt, zonder koppeling en zonder installatie.`,
    },
    {
      q: `Moet iemand van REVA langskomen in ${p.name} om te starten?`,
      a: "Nee. De onboarding is persoonlijk, maar online. We richten samen je huisstijl, team en locaties in, en je importeert je patiëntenlijst in één keer via een CSV-bestand. Daarna nodig je direct je eerste patiënten uit.",
    },
    {
      q: "Wat kost REVA?",
      a: `${priceSentence} Je probeert REVA ${TRIAL_DAYS} dagen gratis.`,
    },
    {
      q: `Is er een pilotplek voor een praktijk in ${p.name}?`,
      a: pilotOffer.active && pilotOffer.spotsLeft > 0
        ? `${pilotSentence} Praktijken uit ${p.name} kunnen zich aanmelden via de pilotpagina.`
        : "Op dit moment zijn alle pilotplekken vergeven. Je kunt REVA wel gewoon gebruiken en eerst 30 dagen gratis proberen.",
    },
    {
      q: "Vervangt REVA mijn EPD?",
      a: "Nee. REVA is een Recovery Management Platform: het werkt naast je EPD. Agenda, verslaglegging en declaratie blijven daar. REVA richt zich op het herstel van je patiënten tussen de behandelingen door.",
    },
  ];
}

function ProvinceMap({ p }: { p: Province }) {
  return (
    <svg viewBox={`0 0 ${NL_MAP.width} ${NL_MAP.height}`} className="w-full h-auto max-h-[460px] mx-auto" role="img" aria-label={`Kaart van Nederland met ${p.name} uitgelicht en de steden ${list(p.cities.map((c) => c.name))}`}>
      {NL_MAP.provinces.map((prov) => {
        const active = prov.name === p.mapName;
        return (
          <path key={prov.name} d={prov.d} fill={active ? "#fff3ee" : "#ffffff"} stroke={active ? "#e8632a" : "#e1ddd5"} strokeWidth={active ? 2 : 1.2} strokeLinejoin="round">
            <title>{prov.name}</title>
          </path>
        );
      })}
      {p.cities.map((c, i) => {
        const { x, y } = projectLatLng(c.lat, c.lng);
        return (
          <g key={c.name}>
            {i === 0 && <circle cx={x} cy={y} r={13} fill="#e8632a" opacity={0.15} />}
            <circle cx={x} cy={y} r={i === 0 ? 6 : 4.5} fill="#e8632a" stroke="#ffffff" strokeWidth={2}>
              <title>{c.name}</title>
            </circle>
          </g>
        );
      })}
    </svg>
  );
}

export default async function ProvinciePage({ params }: Props) {
  const { provincie } = await params;
  const p = getProvince(provincie);
  if (!p) notFound();
  const t = texts(p);
  const path = pathFor(p);
  const url = `${SITE}${path}`;
  const faq = faqFor(p);
  const others = provinces.filter((o) => o.slug !== p.slug);

  const facts = [
    `REVA is software voor fysiopraktijken in ${p.name}: een Recovery Management Platform en patiëntenportaal voor herstelbegeleiding tussen de behandelingen door, beschikbaar in ${list(p.cities.map((c) => c.name))}.`,
    "REVA werkt naast elk EPD, zonder koppeling. Agenda, verslaglegging en declaratie blijven in het EPD, dus er is geen dubbele invoer.",
    "Patiënten doen thuis een dagelijkse check-in van ongeveer 30 seconden en volgen hun oefenschema in de app. De fysiotherapeut ziet in één overzicht wie aandacht nodig heeft.",
    priceSentence,
  ];

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `REVA voor fysiotherapiepraktijken in ${p.name}`,
    serviceType: "Software voor fysiotherapiepraktijken (Recovery Management Platform)",
    description: t.description,
    url,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: p.name,
      containedInPlace: { "@type": "Country", name: "Nederland" },
      containsPlace: p.cities.map((c) => ({ "@type": "City", name: c.name, geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lng } })),
    },
    audience: { "@type": "BusinessAudience", audienceType: "Fysiotherapiepraktijken" },
    offers: {
      "@type": "Offer",
      price: PRICING.seatPrice,
      priceCurrency: PRICING.currency,
      priceSpecification: { "@type": "UnitPriceSpecification", price: PRICING.seatPrice, priceCurrency: PRICING.currency, unitText: PRICING.unit, valueAddedTaxIncluded: true },
      url: `${SITE}/prijzen`,
    },
  };

  return (
    <>
      <JsonLd data={{ ...webPageJsonLd({ url, name: t.title, description: t.description }), dateModified: pageDates[path] }} />
      <JsonLd data={service} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE}/` },
          { name: "Fysiotherapie software", url: `${SITE}/fysiotherapie-software` },
          { name: p.name, url },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-14 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
            <AnimateIn direction="up">
              <nav aria-label="Kruimelpad" className="text-xs mb-5" style={{ color: "#9ca3af" }}>
                <Link href="/" className="hover-orange">Home</Link>
                <span className="mx-1.5">/</span>
                <Link href="/fysiotherapie-software" className="hover-orange">Fysiotherapie software</Link>
                <span className="mx-1.5">/</span>
                <span style={{ color: "#6b7280" }}>{p.name}</span>
              </nav>
              <p className="text-sm font-semibold mb-3" style={{ color: "#e8632a" }}>Fysiotherapie software in {p.name}</p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>{t.h1}</h1>
              <p className="text-base md:text-lg leading-relaxed mb-7" style={{ color: "#6b7280" }}>
                Voor fysiotherapeuten in {list(p.cities.slice(0, 4).map((c) => c.name))}: REVA laat zien hoe het je patiënten
                tussen de behandelingen door vergaat. Patiënten loggen thuis hun herstel, jij ziet wie aandacht nodig heeft.
                Naast je EPD, zonder dubbele invoer.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/demo-aanvragen" className="group btn-primary px-5 py-3 text-sm justify-center">
                  Plan een demo van 30 minuten
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/besparing-berekenen"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-[#f1ede8]"
                  style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
                >
                  Bereken je besparing
                </Link>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: "#6b7280" }}>
                {[`${euro(PRICING.seatPrice)} per behandelaar, incl. btw`, "Naast elk EPD", `${TRIAL_DAYS} dagen gratis proberen`].map((x) => (
                  <li key={x} className="inline-flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#e8632a" }} />
                    {x}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <div className="rounded-3xl border p-6 md:p-8" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                <ProvinceMap p={p} />
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs" style={{ color: "#9ca3af" }}>
                  <MapPin className="w-3.5 h-3.5" style={{ color: "#e8632a" }} /> {p.name}, met hoofdstad {p.capital}
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Dialect */}
        <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <figure className="rounded-2xl p-6 md:p-8" style={{ background: "#1c1c1e" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#e8632a" }}>
                  REVA in het {p.dialect.label}
                </p>
                <blockquote lang={p.dialect.lang} className="text-lg md:text-xl leading-relaxed text-white">
                  {p.dialect.text}
                </blockquote>
                <details className="mt-5 group">
                  <summary className="cursor-pointer text-sm font-medium list-none inline-flex items-center gap-1.5" style={{ color: "#c9c9ce" }}>
                    <span className="underline underline-offset-4">Lees het in het Nederlands</span>
                  </summary>
                  <p lang="nl" className="mt-3 text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{dialectTranslation}</p>
                </details>
              </figure>
            </AnimateIn>
          </div>
        </section>

        <FactsBox title={`REVA in ${p.name} in het kort`} facts={facts} path={path} />

        {/* Regio */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-start">
            <AnimateIn direction="up">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-5" style={{ color: "#1a1a1a" }}>
                Fysiotherapie in {p.name}: herstel tussen de behandelingen door
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4b5563" }}>
                {p.regional.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <div className="rounded-2xl border p-6" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                <h3 className="text-sm font-semibold mb-4" style={{ color: "#1a1a1a" }}>REVA voor fysiopraktijken in onder andere</h3>
                <ul className="flex flex-wrap gap-2">
                  {p.cities.map((c) => (
                    <li key={c.name} className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full" style={{ background: "#f8f7f4", color: "#1a1a1a" }}>
                      <MapPin className="w-3.5 h-3.5" style={{ color: "#e8632a" }} />
                      {c.name}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                  REVA werkt online, dus ook voor praktijken in de dorpen en kernen rondom deze steden.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Drie stations */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <SectionIntro
              title="Zo werkt REVA naast je EPD"
              text="REVA is een Recovery Management Platform: het platform voor herstelbegeleiding tussen de behandelingen door. Elk systeem doet waar het goed in is."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Database, title: "EPD", text: "Agenda, verslaglegging en declaratie blijven in het EPD dat je al gebruikt. Zonder koppeling en zonder dubbele invoer." },
                { icon: Stethoscope, title: "Fysiotherapeut", text: "Je begeleidt het herstel in het REVA-praktijkportaal: herstelplannen in fases, schema's, testen en de lijst Aandacht nodig." },
                { icon: Smartphone, title: "Patiënt", text: "Je patiënt houdt thuis zijn herstel bij in de REVA-app, in de huisstijl van jouw praktijk. Gratis voor de patiënt." },
              ].map(({ icon: Icon, title, text }, i) => (
                <AnimateIn key={title} direction="up" delay={i * 70} className="h-full">
                  <div className="h-full rounded-2xl border p-6" style={{ background: i === 1 ? "#1c1c1e" : "#ffffff", borderColor: i === 1 ? "#1c1c1e" : "#e8e5df" }}>
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: i === 1 ? "rgba(232,99,42,0.16)" : "#fff3ee" }}>
                      <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                    </span>
                    <h3 className="text-base font-semibold mb-2" style={{ color: i === 1 ? "#ffffff" : "#1a1a1a" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: i === 1 ? "#c9c9ce" : "#6b7280" }}>{text}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn direction="up" delay={220}>
              <p className="mt-8 text-sm" style={{ color: "#6b7280" }}>
                Meer over{" "}
                <Link href="/fysiotherapie-software" className="font-medium hover-orange" style={{ color: "#e8632a" }}>fysiotherapie software naast je EPD</Link>, de{" "}
                <Link href="/functies" className="font-medium hover-orange" style={{ color: "#e8632a" }}>functies van REVA</Link> en de{" "}
                <Link href="/prijzen" className="font-medium hover-orange" style={{ color: "#e8632a" }}>prijzen</Link>.
              </p>
            </AnimateIn>
          </div>
        </section>

        <LandingFaq title={`Vragen van praktijken in ${p.name}`} items={faq} />

        {/* Andere provincies */}
        <section className="py-14 md:py-16" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>REVA in andere provincies</h2>
            <ul className="flex flex-wrap gap-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={pathFor(o)}
                    className="inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors hover:bg-[#f1ede8]"
                    style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
                  >
                    Fysiotherapie software in {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <LandingClosingCta
          title={`Zie in 30 minuten of REVA bij je praktijk in ${p.name} past`}
          text="We laten REVA online zien, met jouw patiënten en werkwijze in gedachten. Daarna probeer je het 30 dagen gratis."
        />
      </SiteLayout>
    </>
  );
}
