import { ArrowRight, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-background text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-parrot">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
            Start a conversation about your next investment.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Share a brief overview of your scenario—asset type, market, loan
            amount, and timing—and a WMC Capital Group advisor will follow up
            with next steps and potential options.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-parrot/10 text-parrot ring-1 ring-parrot/40">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-brand">
                  Call WMC Capital Group
                </p>
                <p className="text-xs text-slate-600">708‑372‑0242</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-brand sm:text-2xl">
              Tell us about your scenario.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Whether you&apos;re facing a bank turndown, structuring a new
              acquisition, or reviewing options on an existing asset, we&apos;ll
              use your information to quickly outline potential paths forward.
            </p>
          </div>

          <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80 sm:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                  placeholder="First and last name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Loan Amount (Approx.)
                </label>
                <input
                  type="text"
                  className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                  placeholder="$1,250,000"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Property Type
                </label>
                <input
                  type="text"
                  className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                  placeholder="DSCR, multi‑unit, land, etc."
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                Brief Scenario
              </label>
              <textarea
                className="min-h-[96px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-parrot focus:ring-1 focus:ring-parrot/70"
                placeholder="Share a quick overview of your transaction, timing, and goals."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
            >
              Request Scenario Review
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <p className="text-[10px] text-slate-500">
              By submitting, you agree to be contacted by WMC Capital Group
              regarding your inquiry. No personal financial data is required to
              start the conversation.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

