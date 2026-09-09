import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/hero-lawn.jpg";
import workImage from "../assets/work-lawn.jpg";
import activityHedge from "../assets/activity-hedge.jpg";
import activityCleanup from "../assets/activity-cleanup.jpg";
import activitySprinkler from "../assets/activity-sprinkler.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Smith Bros Mowing & Landscaping | Manhattan, KS Lawn Care",
      },
      {
        name: "description",
        content:
          "Dependable lawn care, mowing, edging, landscaping, irrigation, and snow removal for homeowners and HOAs in Manhattan, Kansas. Free estimates.",
      },
      {
        property: "og:title",
        content: "Smith Bros Mowing & Landscaping | Manhattan, KS Lawn Care",
      },
      {
        property: "og:description",
        content:
          "Dependable lawn care, mowing, edging, landscaping, irrigation, and snow removal for homeowners and HOAs in Manhattan, Kansas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body antialiased">
      {/* STICKY NAV */}
      <header className="sticky top-0 z-50 bg-cream/92 backdrop-blur-md ring-1 ring-black/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative grid size-9 place-items-center rounded-full bg-gloss font-display text-sm font-bold tracking-tight text-cream gloss-top">
              SB
            </span>
            <span className="font-display text-[15px] font-semibold leading-tight text-pine">
              Smith Bros
              <br />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-moss/70">
                Mowing &amp; Landscaping
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-pine md:flex">
            <a href="#services" className="transition-transform hover:text-moss">
              Services
            </a>
            <a href="#work" className="transition-transform hover:text-moss">
              Our Work
            </a>
            <a href="#reviews" className="transition-transform hover:text-moss">
              Reviews
            </a>
            <a href="#contact" className="transition-transform hover:text-moss">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="tel:7857706780"
              className="hidden items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold text-pine ring-1 ring-moss/30 transition-transform hover:bg-moss/5 sm:flex"
            >
              Call (785) 770-6780
            </a>
            <a
              href="#contact"
              className="relative overflow-hidden rounded-full bg-gloss px-4 py-2 text-sm font-semibold text-cream ring-1 ring-lawn/40 gloss-top"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="bg-cream text-ink font-body">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-lawn/15 to-transparent"></div>
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:pb-20 lg:pt-20">
            <div className="animate-rise">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-moss ring-1 ring-moss/25">
                <span className="size-1.5 rounded-full bg-lawn"></span> Serving Manhattan, KS &amp; Riley County
              </span>
              <h1 className="mt-5 max-w-[18ch] text-balance font-display text-4xl font-semibold leading-[1.02] text-pine sm:text-5xl lg:text-6xl">
                A cleaner, sharper lawn <span className="text-chrome">every single visit.</span>
              </h1>
              <p className="mt-5 max-w-[46ch] text-balance text-base text-ink/75 sm:text-lg">
                Neighbors who&apos;ve been keeping Manhattan yards crisp for years. Mowing, edging, trimming and full
                landscaping — dependable folks who show up when they say they will.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="relative overflow-hidden rounded-full bg-gloss px-6 py-3 text-[15px] font-semibold text-cream ring-1 ring-lawn/40 gloss-top"
                >
                  Get a free estimate
                </a>
                <a
                  href="#services"
                  className="rounded-full px-6 py-3 text-[15px] font-semibold text-pine ring-1 ring-moss/30 transition-transform hover:bg-moss/5"
                >
                  See what we do
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-amber text-sm tracking-[0.2em]">★★★★★</span>
                  <span className="text-sm text-ink/70">Loved by local homeowners</span>
                </div>
                <div className="text-sm text-ink/70">
                  <span className="font-semibold text-pine">120+</span> yards on schedule
                </div>
                <div className="text-sm text-ink/70">Weekly &amp; biweekly</div>
              </div>
            </div>
            <div className="animate-rise animation-delay-200 relative">
              <div className="absolute -inset-3 -rotate-2 rounded-[28px] bg-lawn/20"></div>
              <div className="relative overflow-hidden rounded-[22px] outline-1 -outline-offset-1 outline-black/5 ring-1 ring-moss/15">
                <img
                  src={heroImage}
                  alt="Freshly mowed residential lawn with crisp green edges in Manhattan, Kansas"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-card-gloss px-4 py-3 shadow-lg ring-1 ring-black/5 sm:left-6">
                <span className="relative grid size-9 place-items-center rounded-full bg-gloss-amber font-display text-xs font-semibold text-pine gloss-top">
                  SB
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-pine">Trusted since 2016</p>
                  <p className="text-xs text-ink/60">Family-owned &amp; operated</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-cream-soft/60">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <div className="animate-rise max-w-[44ch]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lawn">What we handle</p>
              <h2 className="mt-3 max-w-[26ch] text-balance font-display text-3xl font-semibold leading-tight text-pine sm:text-4xl">
                One crew for the whole yard, all season long.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                letter="M"
                title="Mowing &amp; Edging"
                description="Crisp lines and even cuts, weekly or biweekly — the base of a tidy yard."
                delay="animation-delay-100"
              />
              <ServiceCard
                letter="T"
                title="Trimming &amp; Cleanup"
                description="Weed eating around beds and tall shrubs plus seasonal spring cleanups."
                delay="animation-delay-100"
              />
              <ServiceCard
                letter="L"
                title="Landscaping"
                description="Over-seeding, sodding, aeration and custom planting to boost curb appeal."
                delay="animation-delay-200"
              />
              <ServiceCard
                letter="I"
                title="Irrigation Systems"
                description="Sprinkler and drip install plus seasonal tune-ups to keep it green."
                delay="animation-delay-200"
              />
              <ServiceCard
                letter="F"
                title="Fertilization &amp; Weed Control"
                description="Feeding, disease and insect control for a healthy, thick lawn."
                delay="animation-delay-300"
              />
              <ServiceCard
                letter="S"
                title="Snow Removal"
                description="Driveways, walkways and HOA lots cleared for the 2025–26 winter."
                amber
                delay="animation-delay-300"
              />
            </div>
          </div>
        </section>

        {/* WORK / ACTIVITY */}
        <section id="work" className="bg-cream">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-20">
            <div className="animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lawn">On our calendar</p>
              <h2 className="mt-3 max-w-[24ch] text-balance font-display text-3xl font-semibold leading-tight text-pine sm:text-4xl">
                Fresh from the Smith Bros schedule.
              </h2>
              <p className="mt-4 max-w-[44ch] text-balance text-base text-ink/70">
                We&apos;re opening up a few spots this season. Reach out early — availability is limited and we&apos;d
                rather earn your business one clean cut at a time.
              </p>
              <div className="mt-7 overflow-hidden rounded-2xl ring-1 ring-black/5">
                <img
                  src={workImage}
                  alt="Overhead view of a freshly mowed lawn with clean diagonal stripes"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <ActivityCard
                image={activityHedge}
                alt="Sharp green hedge edge beside a fence"
                date="May 25 · New clients"
                title="Professional lawn care you can count on"
                description="Weekly &amp; biweekly mowing, edging, weed trimming and spring cleanups — reliable communication on every route."
                delay="animation-delay-100"
              />
              <ActivityCard
                image={activityCleanup}
                alt="Leaf blower clearing spring debris near a porch"
                date="Mar 20 · Season opening"
                title="Taking on new lawns for 2026"
                description="Warmer weather is here. A few open spots for scheduled mowing and detailed trimming this spring."
                delay="animation-delay-200"
              />
              <ActivityCard
                image={activitySprinkler}
                alt="Sprinkler head watering a lush green lawn"
                date="Apr 24 · Landscaping"
                title="Transform your curb appeal"
                description="Precision mowing, expert trimming and custom planting for a lawn that stands out on the block."
                delay="animation-delay-300"
              />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="bg-moss text-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <div className="animate-rise max-w-[40ch]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lawn">Word around the neighborhood</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                The kind of yard the whole street notices.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <ReviewCard
                quote="They've had our yard for two seasons. The edges are always crisp and they actually call ahead. Couldn't be easier."
                author="D. M."
                location="Northview"
                delay="animation-delay-100"
              />
              <ReviewCard
                quote="Handled our whole HOA for snow last winter and the mowing all summer. Professional and on time every week."
                author="R. T."
                location="Country Meadows HOA"
                delay="animation-delay-200"
              />
              <ReviewCard
                quote="Fair rates, honest work, and they handled the tall weeds nobody else would touch. True neighbors."
                author="L. P."
                location="North County"
                delay="animation-delay-300"
              />
            </div>
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section id="contact" className="bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <div className="animate-rise relative grid gap-10 overflow-hidden rounded-[28px] bg-card-gloss p-7 ring-1 ring-moss/15 sm:p-12 lg:grid-cols-2">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-lawn/20"></div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lawn">Let&apos;s get you on the route</p>
                <h2 className="mt-3 max-w-[16ch] text-balance font-display text-3xl font-semibold leading-[1.05] text-pine sm:text-4xl">
                  Ready for a yard that looks cared for?
                </h2>
                <p className="mt-4 max-w-[42ch] text-balance text-base text-ink/70">
                  Free, no-pressure estimates for homeowners and HOAs across Manhattan. A neighbor will walk your
                  property and give you a straight number.
                </p>
                <div className="mt-7 space-y-3">
                  <a
                    href="tel:7857706780"
                    className="flex items-center gap-3 rounded-2xl bg-cream/70 px-4 py-3 ring-1 ring-moss/20 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="relative grid size-10 place-items-center rounded-full bg-gloss font-display text-xs font-semibold text-cream gloss-top">
                      Tel
                    </span>
                    <span className="leading-tight">
                      <span className="block text-xs uppercase tracking-[0.14em] text-ink/55">Call or text</span>
                      <span className="font-display text-lg font-semibold text-pine">(785) 770-6780</span>
                    </span>
                  </a>
                  <a
                    href="mailto:smithbrosmowing@yahoo.com"
                    className="flex items-center gap-3 rounded-2xl bg-cream/70 px-4 py-3 ring-1 ring-moss/20 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="relative grid size-10 place-items-center rounded-full bg-gloss-amber font-display text-xs font-semibold text-pine gloss-top">
                      @
                    </span>
                    <span className="leading-tight">
                      <span className="block text-xs uppercase tracking-[0.14em] text-ink/55">Email</span>
                      <span className="break-all font-display text-lg font-semibold text-pine">
                        smithbrosmowing@yahoo.com
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <form className="relative space-y-4 rounded-2xl bg-card-gloss p-6 ring-1 ring-black/5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm">
                    <span className="font-medium text-pine">Your name</span>
                    <input
                      type="text"
                      placeholder="Sam Williams"
                      className="mt-1.5 w-full rounded-xl bg-cream px-3.5 py-2.5 text-sm ring-1 ring-moss/20 placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-lawn"
                    />
                  </label>
                  <label className="text-sm">
                    <span className="font-medium text-pine">Phone</span>
                    <input
                      type="tel"
                      placeholder="(785) 000-0000"
                      className="mt-1.5 w-full rounded-xl bg-cream px-3.5 py-2.5 text-sm ring-1 ring-moss/20 placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-lawn"
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="font-medium text-pine">Property / HOA address</span>
                  <input
                    type="text"
                    placeholder="1234 1st St, Manhattan"
                    className="mt-1.5 w-full rounded-xl bg-cream px-3.5 py-2.5 text-sm ring-1 ring-moss/20 placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-lawn"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-pine">What do you need?</span>
                  <textarea
                    rows={3}
                    placeholder="Mowing weekly, plus spring cleanup..."
                    className="mt-1.5 w-full resize-none rounded-xl bg-cream px-3.5 py-2.5 text-sm ring-1 ring-moss/20 placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-lawn"
                  ></textarea>
                </label>
                <button
                  type="button"
                  className="relative w-full overflow-hidden rounded-xl bg-gloss py-3 text-[15px] font-semibold text-cream ring-1 ring-lawn/40 gloss-top"
                >
                  Send my free estimate request
                </button>
                <p className="text-center text-xs text-ink/50">We reply within one business day. No spam, ever.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-pine text-cream/80">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-12 sm:flex-row">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative grid size-9 place-items-center rounded-full bg-gloss font-display text-sm font-bold text-cream gloss-top">
                SB
              </span>
              <span className="font-display text-lg font-semibold text-cream">Smith Bros Mowing &amp; Landscaping</span>
            </div>
            <p className="mt-3 max-w-[34ch] text-balance text-sm text-cream/60">
              Dependable lawn care and landscaping for homeowners and HOAs in Manhattan, Kansas.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
            <div>
              <p className="mb-2 font-display font-semibold text-cream">Get in touch</p>
              <a href="tel:7857706780" className="block transition-transform hover:text-cream">
                (785) 770-6780
              </a>
              <a href="mailto:smithbrosmowing@yahoo.com" className="block transition-transform hover:text-cream">
                smithbrosmowing@yahoo.com
              </a>
            </div>
            <div>
              <p className="mb-2 font-display font-semibold text-cream">Explore</p>
              <a href="#services" className="block transition-transform hover:text-cream">
                Services
              </a>
              <a href="#reviews" className="block transition-transform hover:text-cream">
                Reviews
              </a>
              <a href="#contact" className="block transition-transform hover:text-cream">
                Free estimate
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-cream/50 sm:flex-row">
            <p>&copy; 2026 Smith Bros Mowing &amp; Landscaping &middot; Manhattan, KS</p>
            <p>Family-owned &middot; Licensed &amp; insured &middot; Serving Riley County</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  letter,
  title,
  description,
  amber,
  delay,
}: {
  letter: string;
  title: string;
  description: string;
  amber?: boolean;
  delay: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl bg-card-gloss p-5 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:ring-blade/40 animate-rise ${delay}`}
    >
      <div
        className={`relative grid size-12 place-items-center rounded-xl font-display text-lg font-semibold text-cream gloss-top ${
          amber ? "bg-gloss-amber" : "bg-gloss"
        }`}
      >
        {letter}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-pine">{title}</h3>
      <p className="mt-1.5 text-balance text-sm text-ink/70">{description}</p>
    </div>
  );
}

function ActivityCard({
  image,
  alt,
  date,
  title,
  description,
  delay,
}: {
  image: string;
  alt: string;
  date: string;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <article className={`flex gap-4 rounded-2xl bg-card-gloss p-5 ring-1 ring-black/5 animate-rise ${delay}`}>
      <div className="size-16 shrink-0 overflow-hidden rounded-xl bg-lawn/20">
        <img src={image} alt={alt} className="size-full object-cover" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-lawn">{date}</p>
        <h3 className="mt-1 font-display text-base font-semibold text-pine">{title}</h3>
        <p className="mt-1 text-balance text-sm text-ink/70">{description}</p>
      </div>
    </article>
  );
}

function ReviewCard({
  quote,
  author,
  location,
  delay,
}: {
  quote: string;
  author: string;
  location: string;
  delay: string;
}) {
  return (
    <figure className={`rounded-2xl bg-cream/10 p-5 ring-1 ring-cream/15 animate-rise ${delay}`}>
      <div className="text-amber text-sm tracking-[0.2em]">★★★★★</div>
      <blockquote className="mt-3 text-balance text-sm text-cream/90">{quote}</blockquote>
      <figcaption className="mt-4 text-xs uppercase tracking-[0.14em] text-cream/55">
        {author} &middot; {location}
      </figcaption>
    </figure>
  );
}
