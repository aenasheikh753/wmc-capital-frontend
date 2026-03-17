export default function JumboInvestorLoansPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Jumbo Investor Loans
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Larger balance financing for premium investment properties.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Jumbo investor loans are designed for higher loan amounts on single assets or
            portfolios, including luxury rentals, larger multifamily, and mixed‑use
            properties. We help investors unlock equity and scale portfolios with
            thoughtful, long‑term capital.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Best for</p>
              <p className="mt-2 text-sm text-slate-600">
                Higher value rentals, premium assets, and sophisticated investor portfolios.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Use cases</p>
              <p className="mt-2 text-sm text-slate-600">
                Purchase, refinance, and cash‑out to redeploy capital into the next deal.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Investor advantage</p>
              <p className="mt-2 text-sm text-slate-600">
                Terms structured for speed, leverage, and long‑term portfolio growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand sm:text-3xl">
              Jumbo structures built around the asset
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Jumbo investor scenarios often move quickly—contract dates, appraisal timing,
              and documentation expectations matter. We focus on clarity early so you have
              a realistic path to close.
            </p>
            <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
              <li>Higher loan amounts for premium investment properties</li>
              <li>Cash‑out options for reinvestment and portfolio velocity</li>
              <li>Designed for experienced sponsors and repeat investors</li>
            </ul>
          </div>
          <aside className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div
              className="h-36 w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(36,47,102,0.10), rgba(124,217,146,0.10)), url('/images/house-bg.jpg')"
              }}
            />
            <div className="p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Fast start
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Property and market overview</li>
                <li>Target leverage and timeline</li>
                <li>Entity structure and experience</li>
                <li>Income strategy (LTR/STR)</li>
              </ul>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
              >
                Request jumbo review
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

