const posts = [
  {
    title: "Structuring DSCR Loans for Short-Term Rentals",
    summary:
      "How investors can position cash‑flowing STR assets to qualify for DSCR loans and scale their portfolios.",
    tag: "DSCR Strategy"
  },
  {
    title: "Financing Small Multifamily in Competitive Markets",
    summary:
      "Key considerations when acquiring 2–10 unit properties, from underwriting to timing and leverage.",
    tag: "Multi-Unit"
  },
  {
    title: "Foreign National Investors: Getting Comfortable with U.S. Lending",
    summary:
      "What international investors should know about building a lending relationship in the U.S.",
    tag: "Foreign National"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Insights
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h1 className="text-3xl font-semibold text-brand sm:text-4xl">
            Articles and insights for real estate investors.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore concepts, strategies, and examples that can help you make more
            confident decisions about leverage, structure, and long‑term portfolio
            planning.
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
                  Investor education
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Clear guidance on programs, cash flow, and deal structure—built for investment properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid gap-6 px-4 sm:px-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm shadow-slate-200/80 sm:p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-parrot">
                {post.tag}
              </p>
              <h2 className="mt-2 text-base font-semibold text-brand">
                {post.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {post.summary}
              </p>
              <p className="mt-4 text-[11px] font-semibold text-brand underline-offset-2 hover:underline">
                Coming soon
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-neutral-light p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
                  Have a deal in motion?
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-brand sm:text-3xl">
                  Get program fit in a quick review.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Send your property type, timeline, and target loan amount. We’ll respond with the best-fit path.
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
                  Explore programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

