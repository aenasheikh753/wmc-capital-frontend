const terms = [
  {
    term: "DSCR (Debt Service Coverage Ratio)",
    definition:
      "A ratio comparing a property’s net operating income to its total debt payments. Investors often target DSCR of 1.0–1.25+ depending on program."
  },
  {
    term: "LTV (Loan-to-Value)",
    definition:
      "The loan amount divided by the property value or purchase price. Higher LTV means lower down payment and more leverage."
  },
  {
    term: "LTC (Loan-to-Cost)",
    definition:
      "The loan amount divided by the total project cost, commonly used on value‑add or construction deals."
  },
  {
    term: "NOI (Net Operating Income)",
    definition:
      "Income a property generates after operating expenses, before debt service. A key input to DSCR‑based underwriting."
  },
  {
    term: "Interest-Only Period",
    definition:
      "A period during which the borrower pays interest but no principal, improving short‑term cash flow and flexibility."
  }
];

export default function MortgageTermsPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Mortgage Terms
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Key terms every real estate investor should know.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Understanding a few core concepts can make it easier to evaluate loan options
            and structure deals that match your investment strategy. Use this glossary as a
            quick reference when reviewing scenarios with our team.
          </p>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-4 px-4 sm:px-6">
          {terms.map((item) => (
            <div
              key={item.term}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/80 sm:p-5"
            >
              <h2 className="text-sm font-semibold text-brand sm:text-base">
                {item.term}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

