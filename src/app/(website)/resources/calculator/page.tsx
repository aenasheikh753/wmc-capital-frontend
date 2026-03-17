export default function InvestmentCalculatorPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Investment Calculator
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h1 className="text-3xl font-semibold text-brand sm:text-4xl">
            Explore potential returns before you structure your loan.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            This simple calculator layout is designed to help you think through income,
            expenses, and potential cash flow on a new investment property. Connect with
            WMC Capital Group to review the numbers and align them with the right loan
            program.
              </p>
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
                  Investor mindset
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Start with cash flow, then match leverage and terms to your acquisition strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Calculator (layout only)
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                Purchase Price
              </label>
              <input
                type="number"
                className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                placeholder="$500,000"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                Estimated Monthly Rent
              </label>
              <input
                type="number"
                className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                placeholder="$3,500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                Monthly Operating Expenses
              </label>
              <input
                type="number"
                className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                placeholder="$1,200"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                Estimated Loan Amount
              </label>
              <input
                type="number"
                className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                placeholder="$400,000"
              />
            </div>
          </div>
          <p className="mt-4 text-[11px] text-slate-500">
            For an exact scenario review and program fit, please contact WMC Capital Group.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-neutral-light p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
                  Next step
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-brand sm:text-3xl">
                  Turn estimates into a term sheet.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Share your scenario and we’ll review leverage options and program fit based on your
                  property type and timeline.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
                >
                  Contact WMC Capital Group
                </a>
                <a
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-sm shadow-slate-200 transition hover:bg-slate-50"
                >
                  Browse programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

