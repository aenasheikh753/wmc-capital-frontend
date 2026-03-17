export default function MultiUnitLoansPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Multi-Unit Loans (up to 10 units)
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Financing for small multifamily and mixed‑use properties.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Our multi‑unit loan programs support acquisitions and refinances of 2–10 unit
            properties, including townhome clusters and select mixed‑use assets. Whether
            your strategy is value‑add repositioning or long‑term cash flow, we tailor
            structures to match your business plan.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Best for</p>
              <p className="mt-2 text-sm text-slate-600">
                2–10 unit multifamily, townhome clusters, and select mixed‑use assets.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Strategy fit</p>
              <p className="mt-2 text-sm text-slate-600">
                Stabilized cash flow, value‑add repositioning, and refinance options.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Investor advantage</p>
              <p className="mt-2 text-sm text-slate-600">
                Flexible terms designed to protect timeline and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand sm:text-3xl">
              Small multifamily financing that scales with you
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Underwriting small multifamily requires nuance—rent rolls, vacancy, capex,
              and sponsor experience all matter. We help you structure leverage and timing
              that matches the property profile and your plan.
            </p>
            <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
              <li>Acquisition financing for 2–10 units</li>
              <li>Cash‑out refinance for portfolio expansion</li>
              <li>Value‑add projects with renovation strategy</li>
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
                Helpful details
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Unit count, rent roll, and occupancy</li>
                <li>Purchase price / value and loan request</li>
                <li>Business plan (stabilized vs value‑add)</li>
                <li>Timing and closing requirements</li>
              </ul>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
              >
                Request multi‑unit review
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

