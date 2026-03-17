export default function ForeignNationalLoansPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Foreign National Loans
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Investment property financing for global investors.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Foreign national loans at WMC Capital Group are built for non‑U.S. residents
            purchasing or refinancing investment properties in the United States. We offer
            flexible documentation paths and understand the unique needs of international
            investors building U.S. portfolios.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Best for</p>
              <p className="mt-2 text-sm text-slate-600">
                Non‑U.S. residents purchasing or refinancing U.S. investment properties.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Typical structure</p>
              <p className="mt-2 text-sm text-slate-600">
                Flexible documentation paths and clear guidance for international borrowers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Investor advantage</p>
              <p className="mt-2 text-sm text-slate-600">
                Designed to help global investors build and scale U.S. portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand sm:text-3xl">
              What we evaluate for foreign national scenarios
            </h2>
            <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
              <li>Property type, market, and rental strategy</li>
              <li>Down payment / leverage targets</li>
              <li>Entity structure and ownership goals</li>
              <li>Timeline to close and documentation pathway</li>
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
                Start with the basics
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Property address and purchase/refi goals</li>
                <li>Estimated rent / expected income</li>
                <li>Loan amount target and timing</li>
                <li>Country of residence and entity structure</li>
              </ul>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
              >
                Request foreign national review
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

