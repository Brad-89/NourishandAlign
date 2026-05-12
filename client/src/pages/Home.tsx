/*
Design Philosophy: Contemporary Organic Editorial.
This page must feel warm, holistic, premium, and trust-building through earthy tones, refined serif headings, editorial asymmetry, botanical motifs, tactile card surfaces, and calm conversion pathways. When making layout choices, ask whether each choice reinforces or dilutes the warm practitioner-led consultation journey.
*/

import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  HeartPulse,
  Leaf,
  Mail,
  MessageCircleHeart,
  Quote,
  ShieldCheck,
  Sparkles,
  Sprout,
} from "lucide-react";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031827886/HNvGRD7GF74HBApAYpur7f/wellness-hero-organic-editorial-eGwMznqmeMxeHTdUoQT3r3.webp";
const nutritionImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031827886/HNvGRD7GF74HBApAYpur7f/nutritional-therapy-service-editorial-ekYJuKHHcJru4TGAXnYXUM.webp";
const coachingImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031827886/HNvGRD7GF74HBApAYpur7f/psychological-coaching-service-editorial-ii6rXPt5YCczumHXfd9eew.webp";
const rrhImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031827886/HNvGRD7GF74HBApAYpur7f/rrh-homeopathy-service-editorial-G46eEssxuiNBzFQ2m9WjDo.webp";

const calendlyUrl = "https://calendly.com/your-client/discovery-call?hide_gdpr_banner=1&primary_color=6f7d47";

const services = [
  {
    eyebrow: "Food, lifestyle, and functional insight",
    title: "Nutritional Therapy",
    description:
      "Personalised nutritional support for clients who want to understand the deeper patterns behind fatigue, digestive discomfort, hormone shifts, skin concerns, stress resilience, and long-term wellbeing.",
    image: nutritionImage,
    icon: Leaf,
    href: "/nutritional-therapy",
    cta: "Explore nutritional therapy",
    outcomes: ["Whole-person intake", "Personalised nutrition plan", "Gentle supplement guidance"],
  },
  {
    eyebrow: "Mindset, emotions, and behaviour change",
    title: "Psychological Coaching",
    description:
      "Compassionate coaching for people who feel stuck, overwhelmed, disconnected from themselves, or ready to create sustainable change with thoughtful support and practical reflection.",
    image: coachingImage,
    icon: Brain,
    href: "/psychological-coaching",
    cta: "Explore psychological coaching",
    outcomes: ["Values-led clarity", "Stress and resilience tools", "Supportive accountability"],
  },
  {
    eyebrow: "Rapid Relief Homeopathy support",
    title: "RRH™ Homeopathy",
    description:
      "A gentle, targeted approach for clients seeking short-term supportive care alongside broader nutritional and emotional wellbeing work. Placeholder copy can be refined to match your client’s certified RRH™ scope.",
    image: rrhImage,
    icon: Sparkles,
    href: "/rapid-relief-homeopathy-rrh",
    cta: "Learn about RRH™ support",
    outcomes: ["Rapid support pathway", "Holistic case context", "Integrated wellbeing plan"],
  },
];

const concerns = [
  "Low energy or burnout patterns",
  "Digestive discomfort and bloating",
  "Hormone shifts and cycle changes",
  "Stress, overwhelm, or emotional stuckness",
  "Skin flare-ups and inflammatory patterns",
  "A desire for a clearer mind-body plan",
];

const steps = [
  {
    title: "Discovery call",
    copy: "A calm conversation to understand what is happening, what support you are looking for, and whether the approach is the right fit.",
  },
  {
    title: "Whole-person assessment",
    copy: "Your health history, lifestyle, symptoms, food patterns, stress load, and emotional context are reviewed together rather than treated separately.",
  },
  {
    title: "Personalised plan",
    copy: "You receive practical nutrition, coaching, lifestyle, and where appropriate RRH™ recommendations that fit your everyday life.",
  },
  {
    title: "Supported progress",
    copy: "Follow-up sessions help refine the plan, celebrate progress, and adjust support as your body and life begin to respond.",
  },
];

const faqs = [
  {
    question: "Is this approach suitable if I have seen several practitioners before?",
    answer:
      "Yes. The site copy positions the practitioner as someone who takes time to understand the full story, which is especially helpful for clients who feel their symptoms have been viewed in isolation.",
  },
  {
    question: "Can sessions be held online?",
    answer:
      "The placeholder content is written to support online discovery calls and virtual consultations. This can be adjusted if your client also offers in-person sessions.",
  },
  {
    question: "Does this replace medical care?",
    answer:
      "No. The website includes careful wording that frames services as supportive wellbeing work and encourages clients to continue appropriate medical care when needed.",
  },
];

function scrollToBooking() {
  const target = document.getElementById("book");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Thank you — you're on the list.", {
      description:
        "This front-end placeholder is ready to connect to Mailchimp, ConvertKit, Flodesk, Brevo, or another email platform before launch.",
    });
    setNewsletterEmail("");
  }

  return (
    <div className="site-shell min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-cacao/10 bg-ivory/85 backdrop-blur-xl">
        <nav className="container flex items-center justify-between py-4" aria-label="Main navigation">
          <a href="#top" className="group flex items-center gap-3" aria-label="Return to homepage">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-ivory shadow-botanical transition-transform duration-300 group-hover:rotate-6">
              <Sprout className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-xl tracking-wide text-cacao">Nourish & Align</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-olive">Therapy · Coaching · RRH™</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-cacao/75 lg:flex">
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="/nutritional-therapy">Nutrition</a>
            <a className="nav-link" href="/psychological-coaching">Coaching</a>
            <a className="nav-link" href="/rapid-relief-homeopathy-rrh">RRH™</a>
            <a className="nav-link" href="#newsletter">Newsletter</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </div>

          <Button onClick={scrollToBooking} className="rounded-full bg-cacao px-5 text-ivory shadow-botanical hover:bg-olive">
            Book a discovery call
          </Button>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-cacao/10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(210,151,99,0.22),transparent_34%),linear-gradient(135deg,#fbf4ea_0%,#f1eadc_45%,#dfe4cf_100%)]" />
          <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-clay/20 blur-3xl" />
          <div className="container grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-olive/20 bg-ivory/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-olive shadow-sm">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Science-informed, whole-person wellbeing
              </div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.94] tracking-[-0.045em] text-cacao md:text-7xl lg:text-8xl">
                Nourishing mind and body with calm, personalised support.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-cacao/75 md:text-xl">
                A warm, holistic practice for people who want to reconnect with their wellbeing through nutritional therapy, psychological coaching, and RRH™ homeopathy support.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button onClick={scrollToBooking} size="lg" className="rounded-full bg-sage px-8 py-7 text-base text-ivory shadow-botanical hover:bg-olive">
                  Start with a discovery call
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-cacao/20 bg-ivory/70 px-8 py-7 text-base text-cacao hover:bg-honey/30">
                  <a href="#services">Explore services</a>
                </Button>
              </div>
              <div className="mt-10 grid max-w-2xl gap-4 text-sm text-cacao/70 sm:grid-cols-3">
                <div className="proof-card"><strong>1:1 care</strong><span>Personalised consultations</span></div>
                <div className="proof-card"><strong>Online-ready</strong><span>Flexible appointment flow</span></div>
                <div className="proof-card"><strong>Integrated</strong><span>Nutrition, mind, and RRH™</span></div>
              </div>
            </div>

            <div className="relative lg:pl-6">
              <div className="hero-image-frame">
                <img src={heroImage} alt="Warm holistic consultation table with herbs, citrus, notebook, and homeopathy bottle" className="h-full w-full object-cover" />
              </div>
              <div className="floating-note hidden md:block">
                <MessageCircleHeart className="mb-4 h-6 w-6 text-sage" aria-hidden="true" />
                <p className="font-serif text-2xl leading-tight text-cacao">A first conversation can bring clarity before commitment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-ivory" aria-labelledby="concerns-heading">
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="section-kicker">When support may help</div>
            <div>
              <h2 id="concerns-heading" className="heading-lg max-w-3xl">For clients who know something needs to change, but need a joined-up path forward.</h2>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {concerns.map((concern) => (
                  <div key={concern} className="concern-row">
                    <CheckCircle2 className="h-5 w-5 flex-none text-sage" aria-hidden="true" />
                    <span>{concern}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-spacing bg-paper-texture" aria-labelledby="services-heading">
          <div className="container">
            <div className="max-w-3xl">
              <p className="section-kicker">Services</p>
              <h2 id="services-heading" className="heading-lg">Three routes into whole-person wellbeing.</h2>
              <p className="mt-5 text-lg leading-8 text-cacao/72">
                The website frames each service clearly while showing how they can work together. This helps visitors understand the offer quickly and choose the right next step with confidence.
              </p>
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="service-card group">
                    <div className="service-image-wrap">
                      <img src={service.image} alt={`${service.title} editorial visual`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-7">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="rounded-full bg-sage/12 p-3 text-sage"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-olive/80">{service.eyebrow}</span>
                      </div>
                      <h3 className="font-serif text-3xl tracking-[-0.03em] text-cacao">{service.title}</h3>
                      <p className="mt-4 leading-7 text-cacao/72">{service.description}</p>
                      <div className="mt-6 space-y-3">
                        {service.outcomes.map((outcome) => (
                          <p key={outcome} className="flex items-center gap-3 text-sm font-semibold text-cacao/75">
                            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                            {outcome}
                          </p>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="mt-7 rounded-full border-cacao/20 bg-ivory/70 text-cacao hover:bg-honey/30">
                        <a href={service.href}>
                          {service.cta}
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="section-spacing bg-sage text-ivory" aria-labelledby="approach-heading">
          <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="section-kicker text-honey">The method</p>
              <h2 id="approach-heading" className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">A consultation pathway that feels thoughtful from the first click.</h2>
              <p className="mt-6 text-lg leading-8 text-ivory/78">
                The site experience is designed to mirror the practitioner’s care: calm, structured, and personal. Visitors are given reassurance, context, and a clear route to book without pressure.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {steps.map((step, index) => (
                <article key={step.title} className="process-card">
                  <span className="font-serif text-5xl text-honey/70">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-bold text-ivory">{step.title}</h3>
                  <p className="mt-3 leading-7 text-ivory/72">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-spacing bg-ivory" aria-labelledby="about-heading">
          <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative rounded-[2.5rem] border border-cacao/10 bg-honey/20 p-8 shadow-botanical md:p-12">
              <p className="section-kicker">About the practitioner</p>
              <h2 id="about-heading" className="heading-lg">A warm professional presence for complex wellbeing stories.</h2>
              <p className="mt-6 text-lg leading-8 text-cacao/74">
                Your client is positioned as a Nutritional Therapist and Psychological Coach trained in nutritional therapy, psychological coaching, and Rapid Relief Homeopathy (RRH™). The placeholder copy communicates professional warmth while leaving room for biography, qualifications, regulatory memberships, and specialist interests to be added later.
              </p>
              <p className="mt-5 text-lg leading-8 text-cacao/74">
                The tone intentionally avoids overclaiming. Instead, it emphasizes careful listening, personalised plans, practical support, and a compassionate understanding of how physical symptoms, stress, habits, and emotions can influence one another.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="pill">Nutritional therapy</span>
                <span className="pill">Psychological coaching</span>
                <span className="pill">RRH™ homeopathy</span>
                <span className="pill">Holistic support</span>
              </div>
            </div>

            <aside className="about-note" aria-label="Professional positioning note">
              <HeartPulse className="h-10 w-10 text-clay" aria-hidden="true" />
              <blockquote className="mt-8 font-serif text-3xl leading-tight text-cacao">
                “You are not a list of symptoms. You are a whole person with a story worth understanding.”
              </blockquote>
              <p className="mt-6 leading-7 text-cacao/70">
                This brand message can become the foundation for homepage copy, social captions, lead magnets, and future service pages.
              </p>
            </aside>
          </div>
        </section>

        <section className="section-spacing bg-cacao text-ivory" aria-labelledby="testimonial-heading">
          <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="section-kicker text-honey">Trust signal</p>
              <h2 id="testimonial-heading" className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">Placeholder testimonial section ready for client stories.</h2>
            </div>
            <div className="rounded-[2.25rem] border border-ivory/10 bg-ivory/8 p-8 shadow-2xl backdrop-blur md:p-12">
              <Quote className="h-10 w-10 text-honey" aria-hidden="true" />
              <p className="mt-6 font-serif text-3xl leading-tight text-ivory">
                “I came away feeling heard, understood, and finally clear on the next steps for my health. The blend of nutritional guidance and coaching helped me make changes that actually felt manageable.”
              </p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-honey">Client testimonial placeholder</p>
            </div>
          </div>
        </section>

        <section id="newsletter" className="section-spacing bg-oat" aria-labelledby="newsletter-heading">
          <div className="container">
            <div className="newsletter-panel">
              <div className="max-w-3xl">
                <p className="section-kicker">Free wellbeing notes</p>
                <h2 id="newsletter-heading" className="heading-lg">Nourishing insights for the season you are in.</h2>
                <p className="mt-6 text-lg leading-8 text-cacao/74">
                  Receive gentle, practical guidance on nutrition, emotional wellbeing, and whole-person self-care. This placeholder keeps the offer ethical and useful while leaving room for a future lead magnet or welcome sequence.
                </p>
              </div>

              <div className="newsletter-form-card" aria-label="Newsletter signup form placeholder">
                <div className="mb-7 flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sage/12 text-sage">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-cacao">A calm inbox ritual</h3>
                    <p className="mt-2 leading-7 text-cacao/70">
                      Seasonal wellness tips, reflective prompts, and supportive education delivered with the same warm tone as the practice.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    className="newsletter-input"
                    placeholder="Your email address"
                    autoComplete="email"
                  />
                  <Button type="submit" className="rounded-full bg-cacao px-7 py-6 text-ivory shadow-botanical hover:bg-olive">
                    Join the list
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </form>

                <p className="mt-5 text-sm leading-6 text-cacao/60">
                  Placeholder form only. Connect Mailchimp, ConvertKit, Flodesk, Brevo, or your preferred email platform before publishing and add the final privacy wording.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="book" className="section-spacing bg-paper-texture" aria-labelledby="book-heading">
          <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="sticky-booking-copy">
              <p className="section-kicker">Book a call</p>
              <h2 id="book-heading" className="heading-lg">Start with a discovery call.</h2>
              <p className="mt-5 text-lg leading-8 text-cacao/72">
                Use this Calendly area for a no-pressure first conversation. Once your client shares their live Calendly link, the placeholder URL can be replaced with the correct booking page.
              </p>
              <div className="mt-8 rounded-[2rem] border border-cacao/10 bg-ivory/80 p-6 shadow-botanical">
                <CalendarDays className="h-7 w-7 text-sage" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-cacao">Suggested call format</h3>
                <p className="mt-3 leading-7 text-cacao/70">A 20-minute discovery call to explore symptoms, goals, support needs, and best-fit service options.</p>
              </div>
            </div>
            <div className="calendly-shell" aria-label="Calendly discovery call booking embed">
              <iframe src={calendlyUrl} title="Book a discovery call via Calendly" className="h-[740px] w-full rounded-[1.5rem] bg-ivory" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="faq" className="section-spacing bg-ivory" aria-labelledby="faq-heading">
          <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="section-kicker">SEO support</p>
              <h2 id="faq-heading" className="heading-lg">Questions prospective clients often ask.</h2>
            </div>
            <div className="space-y-5">
              {faqs.map((faq) => (
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
              Placeholder brand name and content for a Nutritional Therapist, Psychological Coach, and RRH™ practitioner. This website copy should be reviewed before launch to ensure professional scope and compliance.
            </p>
          </div>
          <Button onClick={scrollToBooking} className="rounded-full bg-honey px-7 text-cacao hover:bg-ivory">
            Book a discovery call
          </Button>
        </div>
      </footer>
    </div>
  );
}
