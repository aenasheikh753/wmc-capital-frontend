export default function InvestmentCalculatorPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Investment Calculator
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Explore potential returns before you structure your loan.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            This simple calculator layout is designed to help you think through income,
            expenses, and potential cash flow on a new investment property. Connect with
            WMC Capital Group to review the numbers and align them with the right loan
            program.
          </p>
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
    </main>
  );
}

