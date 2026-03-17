export default function AboutPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            About WMC Capital Group
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h1 className="text-3xl font-semibold text-brand sm:text-4xl">
            When traditional banks say no, we look at the deal differently.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            WMC Capital Group is a specialized mortgage firm focused on investors,
            entrepreneurs, and borrowers who don&apos;t fit the narrow boxes of
            traditional underwriting. For more than two decades, our team has
            structured financing for bank turndowns, complex income, and
            investment properties that need a common‑sense capital partner.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-neutral-light p-4">
                  <p className="text-lg font-semibold text-brand">20+ years</p>
                  <p className="mt-1 text-xs text-slate-600">Experience underwriting complex loans</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-neutral-light p-4">
                  <p className="text-lg font-semibold text-brand">Up to $5M</p>
                  <p className="mt-1 text-xs text-slate-600">Investor financing capacity</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-neutral-light p-4">
                  <p className="text-lg font-semibold text-brand">Nationwide</p>
                  <p className="mt-1 text-xs text-slate-600">Urban, suburban, and select rural markets</p>
                </div>
              </div>
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
                  Investor-first approach
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  We focus on the asset, the rent roll, and the business plan—then structure
                  terms that help you close with confidence.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl bg-white/80 p-3">
                    <p className="font-semibold text-brand">Fast answers</p>
                    <p className="mt-1 text-slate-600">Clear next steps in days, not weeks</p>
                  </div>
                  <div className="rounded-xl bg-white/80 p-3">
                    <p className="font-semibold text-brand">Make‑sense terms</p>
                    <p className="mt-1 text-slate-600">Structures aligned to your strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-neutral-light p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
                  How it works
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-brand sm:text-3xl">
                  A clear process from scenario to close.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  We keep the process simple and transparent—so you can focus on the asset and
                  the acquisition timeline.
                </p>
              </div>
              <div className="grid gap-3">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-semibold text-brand">1) Discovery</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Share the property, loan amount, and timing.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-semibold text-brand">2) Structure</p>
                  <p className="mt-1 text-sm text-slate-600">
                    We match the right program and outline terms.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-semibold text-brand">3) Execute</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Stay aligned through underwriting to closing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

