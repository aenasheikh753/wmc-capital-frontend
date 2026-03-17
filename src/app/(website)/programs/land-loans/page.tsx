export default function LandLoansPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Land Loans
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Strategic capital for entitled and infill land.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Land loans from WMC Capital Group help investors and developers acquire or
            refinance lots and parcels positioned for future construction, assemblage,
            or long‑term hold. We evaluate the market, entitlement status, and exit
            strategy to structure a make‑sense solution.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Best for</p>
              <p className="mt-2 text-sm text-slate-600">
                Infill lots, entitled land, and strategic parcels with a clear exit plan.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">How we underwrite</p>
              <p className="mt-2 text-sm text-slate-600">
                We evaluate the market, entitlement status, and borrower execution plan.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-neutral-light p-5">
              <p className="text-xs font-semibold text-brand">Investor advantage</p>
              <p className="mt-2 text-sm text-slate-600">
                Flexible bridge structures that align to development timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand sm:text-3xl">
              Land financing aligned to your exit strategy
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Land is unique—there&apos;s no rent roll and timelines vary. We focus on the
              feasibility of your plan and help structure leverage that makes sense for the
              stage of the project.
            </p>
            <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
              <li>Acquire land for future build</li>
              <li>Hold entitled land while preparing permits</li>
              <li>Bridge into construction or a long‑term refinance</li>
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
                What to send
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Parcel address, acreage, and status</li>
                <li>Entitlements and timeline (if applicable)</li>
                <li>Loan amount target and exit strategy</li>
                <li>Borrower experience summary</li>
              </ul>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
              >
                Request land scenario review
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

