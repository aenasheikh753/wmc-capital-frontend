import {
  ArrowRight,
  Building2,
  Globe2,
  Landmark,
  Layers3,
  Building,
  Phone
} from "lucide-react";

const programs = [
  {
    name: "DSCR Loans",
    description:
      "Debt Service Coverage Ratio loans designed for experienced investors focused on cash‑flowing rental assets.",
    icon: Building2,
    points: [
      "Qualification based on property cash flow",
      "Ideal for long‑term and short‑term rentals",
      "Streamlined underwriting for investors"
    ]
  },
  {
    name: "Foreign National Loans",
    description:
      "Flexible options for non‑U.S. residents investing in U.S. real estate with simplified documentation.",
    icon: Globe2,
    points: [
      "No U.S. credit history required",
      "Multiple entity structures accepted",
      "Tailored solutions for global investors"
    ]
  },
  {
    name: "Land Loans",
    description:
      "Financing for infill lots, entitled land, and development opportunities in key growth markets.",
    icon: Landmark,
    points: [
      "Urban and suburban land strategies",
      "Bridge, interest‑only and flexible terms",
      "Can pair with future construction exit"
    ]
  },
  {
    name: "Multi‑Unit Loans (up to 10 units)",
    description:
      "Capital for small multifamily, townhome clusters, and mixed‑use assets up to 10 units.",
    icon: Layers3,
    points: [
      "Portfolio and single‑asset options",
      "Stabilized and value‑add business plans",
      "Competitive leverage for investors"
    ]
  },
  {
    name: "Jumbo Investor Loans",
    description:
      "Larger balance financing for high‑value investment properties and sophisticated portfolios.",
    icon: Building,
    points: [
      "Higher loan amounts for premium assets",
      "Cash‑out for reinvestment and growth",
      "Designed for seasoned investors"
    ]
  }
];

const stats = [
  { label: "Years of Lending Experience", value: "20+" },
  { label: "Investor Relationships", value: "1,000+" },
  { label: "Loans Funded", value: "$500M+" }
];

export default function HomePage() {
  return (
    <main className="bg-background text-slate-900">
      {/* Hero */}
      <section
        className="border-b border-slate-200 bg-cover bg-center bg-no-repeat py-16 text-white sm:py-20 md:py-24"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,24,39,0.72), rgba(17,24,39,0.58)), url('/images/house-bg.jpg')"
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
          <div className="space-y-7 sm:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="uppercase tracking-[0.25em] text-[10px]">
                Investment‑Focused Mortgage Capital
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Financing built for{" "}
                <span className="bg-gradient-to-r from-parrot via-emerald-300 to-parrot bg-clip-text text-transparent">
                  real estate investors.
                </span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-100/90 md:text-base">
                WMC Capital Group structures mortgage solutions around the
                asset, not the bureaucracy. From DSCR and foreign national
                loans to land and multi‑unit strategies, we underwrite with an
                investor&apos;s mindset.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-sm shadow-slate-300 transition hover:bg-slate-100"
              >
                Speak with Capital Advisor
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Investor Programs
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-slate-100/90 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-slate-800/80 ring-2 ring-slate-700/70 flex items-center justify-center text-[10px]">
                  DSCR
                </span>
                Purpose‑built for rental cash flow
              </div>
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-slate-800/80 ring-2 ring-slate-700/70 flex items-center justify-center text-[10px]">
                  INV
                </span>
                Non‑owner occupied & investor‑driven
              </div>
            </div>
          </div>

          {/* Right visual: investment imagery, no personal photos */}
          <div className="relative mt-8 w-full max-w-md justify-self-center rounded-2xl bg-white/5 p-0 backdrop-blur sm:mt-10 lg:mt-0 lg:max-w-none lg:justify-self-auto">
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/20 bg-white/5 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.75)] sm:p-6">
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-[0.2em] text-parrot uppercase">
                  Investment Property Focus
                </p>
                <p className="text-sm text-slate-100/90">
                  We specialize in loans secured by income‑producing real
                  estate: single‑family rentals, small multifamily, urban
                  infill, and strategic land positions.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-4 text-center sm:gap-4 sm:text-left">
                {stats.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p className="text-base font-semibold text-white sm:text-lg md:text-xl">
                      {item.value}
                    </p>
                    <p className="text-[10px] leading-snug text-slate-200 sm:text-[11px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.16em] text-slate-100/80 uppercase">
                  Recent Capital Deployments
                </p>
                <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
                  <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3">
                    <p className="text-[11px] font-medium text-white">
                      DSCR – Short‑Term Rental
                    </p>
                    <p className="mt-1 text-[10px] text-slate-100/80">
                      Coastal market single‑family, 75% LTV, 30‑year fixed, cash
                      flow qualified.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3">
                    <p className="text-[11px] font-medium text-white">
                      Foreign National – 8‑Unit
                    </p>
                    <p className="mt-1 text-[10px] text-slate-100/80">
                      Urban multifamily, foreign sponsor, stated income,
                      10‑day close.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section
        id="programs"
        className="border-b border-slate-200 bg-white py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:space-y-10 sm:px-6">
          <header className="max-w-3xl space-y-3 sm:space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
              Programs
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-brand sm:mt-3 sm:text-3xl md:text-4xl">
              Investor‑driven loan programs built around your strategy.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Whether you&apos;re scaling a rental portfolio, entering a new
              market, or unlocking equity from stabilized assets, WMC Capital
              Group brings capital solutions that align with your investment
              thesis.
            </p>
          </header>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.name}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-neutral-light p-5 shadow-sm shadow-slate-200/80 transition hover:-translate-y-1 hover:border-parrot hover:shadow-lg hover:shadow-parrot/30 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-brand md:text-base lg:text-lg">
                      {program.name}
                    </h3>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-parrot/10 text-parrot ring-1 ring-parrot/40 sm:h-9 sm:w-9">
                    <program.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 md:text-sm">
                  {program.description}
                </p>
                <ul className="mt-4 space-y-2 text-[11px] text-slate-600/90">
                  {program.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[4px] h-1 w-3 rounded-full bg-parrot" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <button className="inline-flex items-center text-[11px] font-semibold text-brand transition group-hover:text-parrot">
                    Discuss this program
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why WMC section */}
      <section
        id="why-wmc"
        className="border-b border-slate-200 bg-neutral-softer py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
              Why WMC Capital Group
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-brand sm:mt-3 sm:text-3xl md:text-4xl">
              Underwriting with an investor&apos;s perspective.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Your time‑to‑close, leverage targets, and long‑term hold strategy
              matter more than bank bureaucracy. WMC Capital Group is built for
              investors who need clear terms, fast answers, and a capital
              partner that understands the deal.
            </p>
            <dl className="grid gap-4 text-sm sm:grid-cols-2">
              <div className="space-y-1 rounded-xl border border-slate-200 bg-white p-4">
                <dt className="text-xs font-semibold text-brand">
                  Asset‑based approach
                </dt>
                <dd className="text-[12px] text-slate-600">
                  Focused on the strength of the property, rent roll, and
                  sponsor experience—not just tax returns.
                </dd>
              </div>
              <div className="space-y-1 rounded-xl border border-slate-200 bg-white p-4">
                <dt className="text-xs font-semibold text-brand">
                  Fast, transparent process
                </dt>
                <dd className="text-[12px] text-slate-600">
                  Direct communication, realistic term sheets, and certainty of
                  execution throughout the transaction.
                </dd>
              </div>
              <div className="space-y-1 rounded-xl border border-slate-200 bg-white p-4">
                <dt className="text-xs font-semibold text-brand">
                  Nationwide lending footprint
                </dt>
                <dd className="text-[12px] text-slate-600">
                  Capital solutions for investors in primary, secondary, and
                  select tertiary markets.
                </dd>
              </div>
              <div className="space-y-1 rounded-xl border border-slate-200 bg-white p-4">
                <dt className="text-xs font-semibold text-brand">
                  Long‑term capital partner
                </dt>
                <dd className="text-[12px] text-slate-600">
                  Structured to finance your next acquisition, your next phase,
                  and your long‑term portfolio growth.
                </dd>
              </div>
            </dl>
          </div>

          {/* Simple testimonial-style block without personal photos */}
          <aside className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80 sm:p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-parrot uppercase">
              Investors We Serve
            </p>
            <p className="text-sm leading-relaxed text-slate-700">
              “We came to WMC Capital Group after a traditional bank turned
              down our multi‑unit acquisition days before closing. Their team
              understood the deal, moved quickly, and structured terms that
              allowed us to protect the contract and expand our portfolio.”
            </p>
            <p className="text-xs text-slate-500">
              Asset Manager, Midwest Multifamily Sponsor
            </p>
          </aside>
        </div>
      </section>

      {/* Contact / CTA */}
      <section
        id="contact"
        className="bg-white py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
              Connect With WMC Capital Group
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-brand sm:mt-3 sm:text-3xl md:text-4xl">
              Start a conversation about your next investment.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Share a brief overview of your scenario—asset type, market, loan
              amount, and timing—and a WMC Capital Group advisor will follow up
              with next steps and potential options.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-parrot/10 text-parrot ring-1 ring-parrot/40">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand">
                    Call WMC Capital Group
                  </p>
                  <p className="text-xs text-slate-600">
                    {/* Replace with final preferred number */}
                    708‑372‑0242
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4 rounded-2xl border border-slate-200 bg-neutral-light p-5 shadow-sm shadow-slate-200/80 sm:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                  placeholder="First and last name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Loan Amount (Approx.)
                </label>
                <input
                  type="text"
                  className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                  placeholder="$1,250,000"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Property Type
                </label>
                <input
                  type="text"
                  className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                  placeholder="DSCR, multi‑unit, land, etc."
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                Brief Scenario
              </label>
              <textarea
                className="min-h-[96px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                placeholder="Share a quick overview of your transaction, timing, and goals."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand text-white px-5 py-2.5 text-sm font-semibold shadow-sm shadow-slate-300 transition hover:bg-brand-light"
            >
              Request Scenario Review
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <p className="text-[10px] text-slate-500">
              By submitting, you agree to be contacted by WMC Capital Group
              regarding your inquiry. No personal financial data is required to
              start the conversation.
            </p>
          </form>
        </div>
      </section>

    </main>
  );
}

