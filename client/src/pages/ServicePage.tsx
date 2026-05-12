/*
Design Philosophy: Contemporary Organic Editorial.
This service landing page must preserve the warm, holistic, premium, practitioner-led identity through refined serif headings, editorial asymmetry, tactile cards, botanical imagery, careful wellness language, and calm conversion pathways. Each section should reinforce service-specific SEO while keeping claims ethical, supportive, and scope-aware.
*/

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  Home,
  Leaf,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Sprout,
} from "lucide-react";
import { useEffect } from "react";

const nutritionImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031827886/HNvGRD7GF74HBApAYpur7f/nutritional-therapy-service-editorial-ekYJuKHHcJru4TGAXnYXUM.webp";
const coachingImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031827886/HNvGRD7GF74HBApAYpur7f/psychological-coaching-service-editorial-ii6rXPt5YCczumHXfd9eew.webp";
const rrhImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031827886/HNvGRD7GF74HBApAYpur7f/rrh-homeopathy-service-editorial-G46eEssxuiNBzFQ2m9WjDo.webp";

const calendlyUrl = "https://calendly.com/your-client/discovery-call?hide_gdpr_banner=1&primary_color=6f7d47";

type ServiceKey = "nutrition" | "coaching" | "rrh";

type ServicePageContent = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  heroTitle: string;
  intro: string;
  image: string;
  imageAlt: string;
  Icon: typeof Leaf;
  proofPoints: string[];
  supportiveFor: string[];
  includes: { title: string; copy: string }[];
  process: { title: string; copy: string }[];
  integrationCopy: string;
  faqs: { question: string; answer: string }[];
};

const services: Record<ServiceKey, ServicePageContent> = {
  nutrition: {
    slug: "/nutritional-therapy",
    navLabel: "Nutritional Therapy",
    eyebrow: "Food, lifestyle, and functional insight",
    title: "Nutritional Therapy",
    seoTitle: "Nutritional Therapy | Personalised Nutrition Support | Nourish & Align",
    metaDescription:
      "Explore personalised nutritional therapy for energy, digestion, hormones, stress resilience, and whole-person wellbeing. Book a discovery call with Nourish & Align.",
    keywords:
      "nutritional therapy, nutritional therapist, personalised nutrition, digestion support, hormone wellbeing, fatigue support, holistic nutrition UK",
    heroTitle: "Personalised nutritional therapy for a clearer, calmer relationship with your body.",
    intro:
      "This service page positions nutritional therapy as a thoughtful, whole-person route for clients who want to understand how food, lifestyle, stress, symptoms, and daily rhythms may be influencing their wellbeing. The copy is designed to feel professional and reassuring while leaving space for the practitioner’s real credentials, specialist interests, and scope of practice.",
    image: nutritionImage,
    imageAlt: "Editorial still life with nourishing food, herbs, notes, and warm natural light for nutritional therapy",
    Icon: Leaf,
    proofPoints: ["Whole-person intake", "Personalised food and lifestyle plan", "Supportive follow-up rhythm"],
    supportiveFor: [
      "Clients who feel tired, depleted, or unsure where to begin",
      "People noticing digestive discomfort, bloating, or changing food tolerance",
      "Those wanting support around hormone shifts, skin patterns, or stress resilience",
      "Visitors who want practical nutrition guidance that fits real life rather than rigid rules",
    ],
    includes: [
      {
        title: "Detailed wellbeing review",
        copy: "The page explains that nutritional therapy begins with a careful review of food patterns, lifestyle, health history, stress load, sleep, symptoms, and goals, rather than focusing on one isolated concern.",
      },
      {
        title: "Personalised nutrition guidance",
        copy: "Recommendations are framed as practical, manageable next steps that can be refined over time. The wording avoids cure claims and keeps the service positioned as supportive wellbeing guidance.",
      },
      {
        title: "Lifestyle and supplement context",
        copy: "Where appropriate, the page can mention lifestyle routines and gentle supplement guidance, with final wording reviewed against the practitioner’s qualifications and professional boundaries.",
      },
    ],
    process: [
      {
        title: "Discovery call",
        copy: "A no-pressure conversation to understand what the client is looking for and whether nutritional therapy is the right starting point.",
      },
      {
        title: "Initial consultation",
        copy: "A deeper discussion of symptoms, food patterns, lifestyle, medical context, goals, and what support would feel realistic.",
      },
      {
        title: "Personalised plan",
        copy: "A practical nutrition and lifestyle plan designed to support steady change without overwhelming the client.",
      },
      {
        title: "Review and refine",
        copy: "Follow-up sessions help assess what is working, adapt the plan, and maintain progress with compassionate accountability.",
      },
    ],
    integrationCopy:
      "Nutritional therapy can stand alone or connect naturally with psychological coaching when emotional patterns, stress, motivation, or behaviour change need more support.",
    faqs: [
      {
        question: "Is nutritional therapy suitable if I do not know what is causing my symptoms?",
        answer:
          "Yes. The page positions nutritional therapy as a structured way to explore patterns in food, lifestyle, stress, and wellbeing. It should not be presented as diagnosis or a replacement for medical care.",
      },
      {
        question: "Will I receive a strict meal plan?",
        answer:
          "The placeholder copy favours practical personalised guidance rather than rigid dieting. This can be adjusted if the practitioner offers meal planning, recipe ideas, or phased nutrition plans.",
      },
      {
        question: "Can nutritional therapy work alongside psychological coaching?",
        answer:
          "Yes. The site explains that nutrition and coaching can complement one another when clients need both practical health guidance and support with habits, stress, emotions, or consistency.",
      },
    ],
  },
  coaching: {
    slug: "/psychological-coaching",
    navLabel: "Psychological Coaching",
    eyebrow: "Mindset, emotions, and behaviour change",
    title: "Psychological Coaching",
    seoTitle: "Psychological Coaching | Stress & Behaviour Change Support | Nourish & Align",
    metaDescription:
      "Psychological coaching for stress, emotional overwhelm, values-led clarity, and sustainable behaviour change. Book a discovery call with Nourish & Align.",
    keywords:
      "psychological coaching, psychological coach, stress coaching, emotional wellbeing, behaviour change coach, resilience support, holistic coaching UK",
    heroTitle: "Psychological coaching for clarity, resilience, and sustainable change.",
    intro:
      "This service page gives psychological coaching its own clear pathway for visitors who feel stuck, overwhelmed, disconnected from their needs, or ready to change patterns with compassionate support. The tone is grounded, reflective, and practical rather than clinical or overpromising.",
    image: coachingImage,
    imageAlt: "Calm coaching workspace with journal, herbal tea, textured paper, and warm botanical details",
    Icon: Brain,
    proofPoints: ["Values-led reflection", "Nervous-system-aware pacing", "Supportive accountability"],
    supportiveFor: [
      "Clients feeling emotionally overwhelmed, stuck, or unsure what needs to shift",
      "People wanting support with habits, motivation, boundaries, or self-trust",
      "Visitors seeking a reflective space that is practical, compassionate, and forward-looking",
      "Clients who want health and wellbeing changes to feel more sustainable in daily life",
    ],
    includes: [
      {
        title: "Clarifying patterns and priorities",
        copy: "The page frames coaching as a structured space to understand what is getting in the way, what matters most, and what kind of change feels aligned and realistic.",
      },
      {
        title: "Practical behaviour support",
        copy: "Visitors are reassured that sessions can help translate insight into everyday action through manageable steps, reflection, and accountability.",
      },
      {
        title: "Stress and resilience tools",
        copy: "The copy can include supportive tools for stress awareness, emotional regulation, and resilience, while avoiding claims that coaching treats mental health conditions.",
      },
    ],
    process: [
      {
        title: "Discovery call",
        copy: "A first conversation to explore the client’s current challenges and decide whether psychological coaching is a good-fit route.",
      },
      {
        title: "Coaching focus",
        copy: "Together, practitioner and client define meaningful priorities such as resilience, habits, confidence, boundaries, or life transitions.",
      },
      {
        title: "Reflective sessions",
        copy: "Sessions combine compassionate enquiry with practical tools that help clients understand patterns and take supported next steps.",
      },
      {
        title: "Integrated progress",
        copy: "Ongoing review helps the client notice shifts, refine actions, and integrate insight into daily wellbeing choices.",
      },
    ],
    integrationCopy:
      "Psychological coaching can be especially useful alongside nutritional therapy when clients know what they want to change but need support with stress, emotions, consistency, or self-compassion.",
    faqs: [
      {
        question: "Is psychological coaching the same as therapy?",
        answer:
          "No. The page should clarify that coaching is a reflective and practical support process, not emergency care, psychotherapy, or medical treatment. The practitioner’s exact scope should be reviewed before launch.",
      },
      {
        question: "What can coaching help me explore?",
        answer:
          "The placeholder copy focuses on stress patterns, behaviour change, values, habits, emotional overwhelm, confidence, and sustainable wellbeing routines.",
      },
      {
        question: "Can coaching be combined with nutrition work?",
        answer:
          "Yes. The site positions the services as complementary when a client wants both body-focused support and a reflective coaching space for change.",
      },
    ],
  },
  rrh: {
    slug: "/rapid-relief-homeopathy-rrh",
    navLabel: "RRH™ Homeopathy",
    eyebrow: "Rapid Relief Homeopathy support",
    title: "Rapid Relief Homeopathy RRH™",
    seoTitle: "Rapid Relief Homeopathy RRH™ | Holistic Support | Nourish & Align",
    metaDescription:
      "Rapid Relief Homeopathy RRH™ support offered as part of a warm, whole-person wellbeing practice. Book a discovery call to explore fit and next steps.",
    keywords:
      "Rapid Relief Homeopathy, RRH homeopathy, RRH™, homeopathy support, holistic homeopathy, rapid relief homeopathy practitioner UK",
    heroTitle: "Rapid Relief Homeopathy RRH™ support within a whole-person wellbeing approach.",
    intro:
      "This service page gives RRH™ a careful, scope-aware explanation for visitors who are curious about a targeted homeopathy-informed pathway. The copy preserves the exact RRH™ wording supplied by the user while keeping claims measured, ethical, and ready for the practitioner to refine based on certification and permitted language.",
    image: rrhImage,
    imageAlt: "Warm editorial homeopathy still life with amber bottle, botanicals, linen, and handwritten notes",
    Icon: Sparkles,
    proofPoints: ["Targeted support pathway", "Holistic case context", "Clear suitability conversation"],
    supportiveFor: [
      "Clients curious about RRH™ as part of a broader wellbeing plan",
      "People who want a gentle, targeted support conversation before committing",
      "Visitors seeking a practitioner who can consider physical, emotional, and lifestyle context together",
      "Clients who value careful explanation, boundaries, and a collaborative approach",
    ],
    includes: [
      {
        title: "Suitability discussion",
        copy: "The page explains that RRH™ begins with a fit conversation so the practitioner can understand the client’s context and clarify whether this route is appropriate.",
      },
      {
        title: "Holistic context review",
        copy: "Rather than presenting RRH™ in isolation, the copy connects it with the client’s wider wellbeing picture, including lifestyle, stress, nutrition, and emotional context where relevant.",
      },
      {
        title: "Integrated recommendations",
        copy: "The section keeps recommendations positioned as supportive and practitioner-led, with final details to be aligned with certified RRH™ scope and professional guidance.",
      },
    ],
    process: [
      {
        title: "Discovery call",
        copy: "A calm conversation to understand interest in RRH™ and whether it should be explored alone or alongside other services.",
      },
      {
        title: "Context gathering",
        copy: "The practitioner considers the client’s situation, goals, current support, and relevant wellbeing context before suggesting next steps.",
      },
      {
        title: "RRH™ pathway",
        copy: "Where suitable, the practitioner can outline what the RRH™ support process may involve within their professional boundaries.",
      },
      {
        title: "Follow-up clarity",
        copy: "Follow-up can help review the experience, refine broader wellbeing support, and decide whether nutrition or coaching would be useful additions.",
      },
    ],
    integrationCopy:
      "RRH™ can be presented as one part of the wider practice, with nutritional therapy and psychological coaching available when clients also need practical wellbeing planning or reflective change support.",
    faqs: [
      {
        question: "What does RRH™ stand for?",
        answer:
          "RRH™ refers to Rapid Relief Homeopathy, as supplied in the brief. The final website should use the practitioner’s approved explanation of the modality and any required trademark or certification wording.",
      },
      {
        question: "Is RRH™ offered on its own or with other services?",
        answer:
          "The landing page allows RRH™ to be presented either as a standalone support route or as part of an integrated wellbeing plan with nutritional therapy and coaching.",
      },
      {
        question: "Does RRH™ replace medical advice?",
        answer:
          "No. The copy should clearly state that RRH™ support does not replace medical diagnosis, emergency care, or treatment from a qualified medical professional.",
      },
    ],
  },
};

const orderedServiceKeys: ServiceKey[] = ["nutrition", "coaching", "rrh"];

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function setPageSeo(service: ServicePageContent) {
  document.title = service.seoTitle;
  setMeta('meta[name="description"]', "content", service.metaDescription);
  setMeta('meta[name="keywords"]', "content", service.keywords);
  setMeta('meta[property="og:title"]', "content", service.seoTitle);
  setMeta('meta[property="og:description"]', "content", service.metaDescription);
  setMeta('meta[property="og:image"]', "content", service.image);
  setMeta('meta[name="twitter:title"]', "content", service.seoTitle);
  setMeta('meta[name="twitter:description"]', "content", service.metaDescription);
  setMeta('meta[name="twitter:image"]', "content", service.image);

  const canonicalUrl = `${window.location.origin}${service.slug}`;
  setMeta('link[rel="canonical"]', "href", canonicalUrl);
  setMeta('meta[property="og:url"]', "content", canonicalUrl);

  const schemaId = "service-page-schema";
  document.getElementById(schemaId)?.remove();
  const schema = document.createElement("script");
  schema.id = schemaId;
  schema.type = "application/ld+json";
  schema.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: canonicalUrl,
    image: service.image,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: "Nourish & Align",
      areaServed: "United Kingdom",
    },
    serviceType: service.title,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://calendly.com/your-client/discovery-call",
    },
  });
  document.head.appendChild(schema);
}

function scrollToBooking() {
  const target = document.getElementById("book");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = services[serviceKey];
  const Icon = service.Icon;
  const relatedServices = orderedServiceKeys.filter((key) => key !== serviceKey).map((key) => services[key]);

  useEffect(() => {
    setPageSeo(service);
  }, [service]);

  return (
    <div className="site-shell min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-cacao/10 bg-ivory/88 backdrop-blur-xl">
        <nav className="container flex items-center justify-between py-4" aria-label="Service page navigation">
          <a href="/" className="group flex items-center gap-3" aria-label="Return to homepage">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-ivory shadow-botanical transition-transform duration-300 group-hover:rotate-6">
              <Sprout className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-xl tracking-wide text-cacao">Nourish & Align</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-olive">Therapy · Coaching · RRH™</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-cacao/75 lg:flex">
            <a className="nav-link" href="/nutritional-therapy">Nutritional Therapy</a>
            <a className="nav-link" href="/psychological-coaching">Coaching</a>
            <a className="nav-link" href="/rapid-relief-homeopathy-rrh">RRH™</a>
            <a className="nav-link" href="/#services">All services</a>
          </div>

          <Button onClick={scrollToBooking} className="rounded-full bg-cacao px-5 text-ivory shadow-botanical hover:bg-olive">
            Book a discovery call
          </Button>
        </nav>
      </header>

      <main>
        <section className="relative isolate overflow-hidden border-b border-cacao/10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(210,151,99,0.2),transparent_34%),linear-gradient(135deg,#fbf4ea_0%,#f1eadc_48%,#dfe4cf_100%)]" />
          <div className="container grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-olive/20 bg-ivory/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-olive shadow-sm">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {service.eyebrow}
              </div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.94] tracking-[-0.045em] text-cacao md:text-7xl lg:text-8xl">
                {service.heroTitle}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-cacao/75 md:text-xl">{service.intro}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button onClick={scrollToBooking} size="lg" className="rounded-full bg-sage px-8 py-7 text-base text-ivory shadow-botanical hover:bg-olive">
                  Book a discovery call
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-cacao/20 bg-ivory/70 px-8 py-7 text-base text-cacao hover:bg-honey/30">
                  <a href="/#services">Compare all services</a>
                </Button>
              </div>
              <div className="mt-10 grid max-w-3xl gap-4 text-sm text-cacao/70 sm:grid-cols-3">
                {service.proofPoints.map((point) => (
                  <div className="proof-card" key={point}>
                    <strong>{point}</strong>
                    <span>{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-6">
              <div className="service-hero-frame">
                <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
              </div>
              <div className="floating-note hidden md:block">
                <MessageCircleHeart className="mb-4 h-6 w-6 text-sage" aria-hidden="true" />
                <p className="font-serif text-2xl leading-tight text-cacao">A service-specific page gives visitors clarity before they book.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-ivory" aria-labelledby="support-heading">
          <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="section-kicker">Who this supports</p>
              <h2 id="support-heading" className="heading-lg">A clearer route for people considering {service.title.toLowerCase()}.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {service.supportiveFor.map((item) => (
                <article key={item} className="concern-row rounded-[1.5rem]">
                  <CheckCircle2 className="h-5 w-5 flex-none text-sage" aria-hidden="true" />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-paper-texture" aria-labelledby="includes-heading">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="section-kicker">What sessions can include</p>
                <h2 id="includes-heading" className="heading-lg">Practical, personalised support without overpromising outcomes.</h2>
              </div>
              <p className="text-lg leading-8 text-cacao/72">
                These sections are written as professional placeholders. They should be refined with the practitioner’s exact qualifications, appointment format, pricing, and professional body guidance before launch.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {service.includes.map((item) => (
                <article key={item.title} className="service-detail-card">
                  <span className="mb-5 inline-flex rounded-full bg-sage/12 p-3 text-sage">
                    <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-cacao">{item.title}</h3>
                  <p className="mt-4 leading-7 text-cacao/72">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-sage text-ivory" aria-labelledby="process-heading">
          <div className="container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="section-kicker text-honey">How it works</p>
              <h2 id="process-heading" className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">A calm pathway from curiosity to supported next steps.</h2>
              <p className="mt-6 text-lg leading-8 text-ivory/78">{service.integrationCopy}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {service.process.map((step, index) => (
                <article key={step.title} className="process-card">
                  <span className="font-serif text-5xl text-honey/70">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-bold text-ivory">{step.title}</h3>
                  <p className="mt-3 leading-7 text-ivory/72">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-ivory" aria-labelledby="related-heading">
          <div className="container">
            <div className="max-w-3xl">
              <p className="section-kicker">Integrated care</p>
              <h2 id="related-heading" className="heading-lg">Explore related services.</h2>
              <p className="mt-5 text-lg leading-8 text-cacao/72">
                Internal links between service pages help visitors compare options and help search engines understand the practice’s service structure.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {relatedServices.map((related) => (
                <a key={related.slug} href={related.slug} className="related-service-card group">
                  <span className="section-kicker">Also available</span>
                  <h3 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.035em] text-cacao">{related.title}</h3>
                  <p className="mt-4 leading-7 text-cacao/72">{related.metaDescription}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-sage transition group-hover:translate-x-1">
                    View service page <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="section-spacing bg-paper-texture" aria-labelledby="book-heading">
          <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="sticky-booking-copy">
              <p className="section-kicker">Book a call</p>
              <h2 id="book-heading" className="heading-lg">Start with a discovery call for {service.title.toLowerCase()}.</h2>
              <p className="mt-5 text-lg leading-8 text-cacao/72">
                The booking CTA is intentionally service-specific so a visitor landing from search can move directly from interest to a no-pressure fit conversation.
              </p>
              <div className="mt-8 rounded-[2rem] border border-cacao/10 bg-ivory/80 p-6 shadow-botanical">
                <CalendarDays className="h-7 w-7 text-sage" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-cacao">Suggested call format</h3>
                <p className="mt-3 leading-7 text-cacao/70">A 20-minute discovery call to explore current concerns, goals, support needs, and whether this service is the right next step.</p>
              </div>
            </div>
            <div className="calendly-shell" aria-label={`Calendly booking embed for ${service.title}`}>
              <iframe src={calendlyUrl} title={`Book a ${service.title} discovery call via Calendly`} className="h-[740px] w-full rounded-[1.5rem] bg-ivory" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section-spacing bg-ivory" aria-labelledby="faq-heading">
          <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="section-kicker">Service FAQ</p>
              <h2 id="faq-heading" className="heading-lg">Questions about {service.title.toLowerCase()}.</h2>
            </div>
            <div className="space-y-5">
              {service.faqs.map((faq) => (
                <article key={faq.question} className="faq-card">
                  <h3 className="text-xl font-bold text-cacao">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-cacao/70">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-cacao/10 bg-cacao py-12 text-ivory">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-3xl">Nourish & Align</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-ivory/68">
              Placeholder service-page content for a Nutritional Therapist, Psychological Coach, and RRH™ practitioner. Replace the brand, biography, credentials, Calendly link, and compliance wording before launch.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline" className="rounded-full border-ivory/25 bg-transparent px-7 text-ivory hover:bg-ivory hover:text-cacao">
              <a href="/">
                <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                Home
              </a>
            </Button>
            <Button onClick={scrollToBooking} className="rounded-full bg-honey px-7 text-cacao hover:bg-ivory">
              Book a discovery call
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function NutritionalTherapyPage() {
  return <ServicePage serviceKey="nutrition" />;
}

export function PsychologicalCoachingPage() {
  return <ServicePage serviceKey="coaching" />;
}

export function RapidReliefHomeopathyPage() {
  return <ServicePage serviceKey="rrh" />;
}
