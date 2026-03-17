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
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Programs
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Capital programs tailored to real estate investors.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            WMC Capital Group focuses on asset‑based programs designed for income‑producing
            properties, experienced investors, and bank‑turndown scenarios. Explore our core
            programs below and connect with our team to review your specific deal.
          </p>
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
    </main>
  );
}

