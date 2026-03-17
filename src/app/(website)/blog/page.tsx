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
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Insights
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Articles and insights for real estate investors.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore concepts, strategies, and examples that can help you make more
            confident decisions about leverage, structure, and long‑term portfolio
            planning.
          </p>
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
    </main>
  );
}

