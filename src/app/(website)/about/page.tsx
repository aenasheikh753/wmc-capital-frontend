export default function AboutPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            About WMC Capital Group
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            When traditional banks say no, we look at the deal differently.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            WMC Capital Group is a specialized mortgage firm focused on investors,
            entrepreneurs, and borrowers who don&apos;t fit the narrow boxes of
            traditional underwriting. For more than two decades, our team has
            structured financing for bank turndowns, complex income, and
            investment properties that need a common‑sense capital partner.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-neutral-light py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand sm:text-3xl">
              Built for real estate investors and complex scenarios.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              From DSCR loans on short‑term rentals to foreign national financing
              and small balance commercial, we underwrite based on the strength of
              the asset, the market, and the business plan—not just tax returns.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Our approach is simple: respond quickly, explain options clearly,
              and deliver terms that help you close on time. Whether you&apos;re
              acquiring, refinancing, or pulling cash out for the next deal, WMC
              is structured to move at your pace.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80 sm:p-6">
            <h3 className="text-sm font-semibold text-brand">
              What sets WMC Capital Group apart
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Asset‑focused underwriting for income‑producing real estate</li>
              <li>Fast answers and realistic terms from day one</li>
              <li>Experience with investors, foreign nationals, and entrepreneurs</li>
              <li>Coverage across urban, suburban, and select rural markets</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

