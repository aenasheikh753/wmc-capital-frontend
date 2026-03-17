export default function DscrLoansPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            DSCR Loans
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Cash‑flow focused financing for rental portfolios.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            DSCR (Debt Service Coverage Ratio) loans are designed for investors who
            want to qualify based primarily on the property&apos;s income instead of
            traditional tax‑return underwriting. Ideal for long‑term and short‑term
            rentals, these loans can support both single properties and portfolios.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Best for</p>
              <p className="mt-2 text-sm text-slate-600">
                Long‑term rentals, short‑term rentals, and investor portfolios.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">How you qualify</p>
              <p className="mt-2 text-sm text-slate-600">
                Primarily based on property cash flow (DSCR), not W‑2 income.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Investor advantage</p>
              <p className="mt-2 text-sm text-slate-600">
                Streamlined documentation pathways for experienced sponsors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand sm:text-3xl">
              Common DSCR scenarios we review
            </h2>
            <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
              <li>Purchase of a cash‑flowing rental property</li>
              <li>Refinance to stabilize long‑term debt</li>
              <li>Cash‑out to fund renovations or the next acquisition</li>
              <li>Short‑term rental underwriting with market rent support</li>
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
                Quick checklist
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Property address & rental strategy</li>
                <li>Estimated rent / rent roll</li>
                <li>Loan amount target and timing</li>
                <li>Entity structure (individual / LLC)</li>
              </ul>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
              >
                Request DSCR review
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

