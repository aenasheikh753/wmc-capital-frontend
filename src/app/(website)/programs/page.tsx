import Link from "next/link";

const programs = [
  {
    slug: "dscr-loans",
    name: "DSCR Loans",
    summary:
      "Loans qualified primarily on the property’s debt service coverage ratio—ideal for long‑term and short‑term rentals.",
    bullet: "Cash‑flow based underwriting"
  },
  {
    slug: "foreign-national-loans",
    name: "Foreign National Loans",
    summary:
      "Financing for non‑U.S. residents investing in U.S. real estate with flexible documentation paths.",
    bullet: "No U.S. credit history required"
  },
  {
    slug: "land-loans",
    name: "Land Loans",
    summary:
      "Capital for infill lots, entitled land, and future development opportunities in strategic markets.",
    bullet: "Bridge financing with flexible exit options"
  },
  {
    slug: "multi-unit-loans",
    name: "Multi-Unit Loans (up to 10 units)",
    summary:
      "Financing for small multifamily, townhome clusters, and mixed‑use properties up to 10 units.",
    bullet: "Supports value‑add and stabilized strategies"
  },
  {
    slug: "jumbo-investor-loans",
    name: "Jumbo Investor Loans",
    summary:
      "Larger balance loans for high‑value investment properties and sophisticated portfolios.",
    bullet: "Higher loan amounts and cash‑out options"
  }
];

export default function ProgramsPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Programs
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h1 className="text-3xl font-semibold text-brand sm:text-4xl">
            Capital programs tailored to real estate investors.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            WMC Capital Group focuses on asset‑based programs designed for income‑producing
            properties, experienced investors, and bank‑turndown scenarios. Explore our core
            programs below and connect with our team to review your specific deal.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
                >
                  Request a scenario review
                </Link>
                <Link
                  href="/resources/mortgage-terms"
                  className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-brand shadow-sm shadow-slate-200 transition hover:bg-slate-200"
                >
                  Explore mortgage terms
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-neutral-light">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage: "url('/images/investment-pattern.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <div className="relative p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Core investor programs
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  These programs represent the most common scenarios we structure for investors—
                  rental cash flow, global sponsors, land positions, and small multifamily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:space-y-10 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.slug}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:border-parrot hover:shadow-lg hover:shadow-parrot/30 sm:p-6"
              >
                <h2 className="text-sm font-semibold text-brand sm:text-base">
                  {program.name}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {program.summary}
                </p>
                <p className="mt-3 text-[11px] font-medium text-slate-500">
                  {program.bullet}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="text-[11px] font-semibold text-brand underline-offset-2 hover:text-parrot hover:underline"
                  >
                    View program details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-neutral-light p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
                  Not sure which program fits?
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-brand sm:text-3xl">
                  We&apos;ll match your deal to the right structure.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Send a short overview of your scenario and we&apos;ll respond with next steps,
                  program fit, and what we need to move forward.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
                >
                  Contact WMC Capital Group
                </Link>
                <Link
                  href="/resources/client-reviews"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-sm shadow-slate-200 transition hover:bg-slate-50"
                >
                  Read client reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

