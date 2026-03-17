const reviews = [
  {
    quote:
      "Thanks again for all the help on my no doc loan, it was done very quickly and efficiently. I found the process to be the most I can ask for—fast, friendly, knowledgeable, and responsive.",
    name: "Marcus Y.",
    role: "Borrower"
  },
  {
    quote:
      "I am a Realtor for over 25 years and had the best experience. The staff are courteous and fast. I trust them with my borrowers and to do the things they say they will do.",
    name: "Amanda M.",
    role: "Realtor®"
  },
  {
    quote:
      "I want to thank you for the fast close. All your hard work was needed to close both my transactions on time. You delivered the terms of the deal, regardless of what was discovered.",
    name: "Dong L.",
    role: "Investor"
  }
];

export default function ClientReviewsPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Client Reviews
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h1 className="text-3xl font-semibold text-brand sm:text-4xl">
            What investors, borrowers, and partners say about WMC Capital Group.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            WMC Capital Group has helped clients close complex and time‑sensitive
            transactions after traditional lenders stepped away. Here’s what some of them
            have shared about working with our team.
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
                  Trusted by investors
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Our focus is clarity, speed, and confidence—especially when timelines are
                  tight and traditional banks are slow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid gap-6 px-4 sm:px-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm shadow-slate-200/80 sm:p-6"
            >
              <p className="leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
              <div className="mt-4 text-xs font-medium text-brand">
                {review.name}
                <span className="block text-[11px] font-normal text-slate-500">
                  {review.role}
                </span>
              </div>
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
                  Ready to move?
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-brand sm:text-3xl">
                  Let’s review your scenario.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Share your property type, loan amount, and timeline. We’ll respond with
                  next steps and the best-fit program.
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

