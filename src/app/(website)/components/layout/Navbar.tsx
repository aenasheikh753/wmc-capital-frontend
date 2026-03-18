 "use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function WebsiteNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(true);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(true);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/wmc-logo.png"
            alt="WMC Capital Group"
            width={130}
            height={40}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          <Link
            href="/"
            className={`border-b-2 pb-0.5 transition ${
              isActive("/") ? "border-parrot text-parrot" : "border-transparent hover:border-parrot hover:text-parrot"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`border-b-2 pb-0.5 transition ${
              isActive("/about")
                ? "border-parrot text-parrot"
                : "border-transparent hover:border-parrot hover:text-parrot"
            }`}
          >
            About
          </Link>

          <div className="relative group">
            <button
              className={`flex items-center gap-1 border-b-2 pb-0.5 text-slate-600 transition group-hover:border-parrot group-hover:text-parrot ${
                pathname.startsWith("/programs") ? "border-parrot text-parrot" : "border-transparent"
              }`}
            >
              Programs
              <span className="text-[9px]">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full mt-1 w-56 rounded-xl border border-slate-200 bg-white py-2 text-xs text-slate-700 shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
              <Link
                href="/programs"
                className="block px-4 py-2 hover:bg-neutral-light"
              >
                All Programs
              </Link>
              <div className="my-1 h-px bg-slate-100" />
              <Link
                href="/programs/dscr-loans"
                className="block px-4 py-1.5 hover:bg-neutral-light"
              >
                DSCR Loans
              </Link>
              <Link
                href="/programs/foreign-national-loans"
                className="block px-4 py-1.5 hover:bg-neutral-light"
              >
                Foreign National Loans
              </Link>
              <Link
                href="/programs/land-loans"
                className="block px-4 py-1.5 hover:bg-neutral-light"
              >
                Land Loans
              </Link>
              <Link
                href="/programs/multi-unit-loans"
                className="block px-4 py-1.5 hover:bg-neutral-light"
              >
                Multi-Unit Loans (up to 10)
              </Link>
              <Link
                href="/programs/jumbo-investor-loans"
                className="block px-4 py-1.5 hover:bg-neutral-light"
              >
                Jumbo Investor Loans
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button
              className={`flex items-center gap-1 border-b-2 pb-0.5 text-slate-600 transition group-hover:border-parrot group-hover:text-parrot ${
                pathname.startsWith("/resources") || pathname.startsWith("/blog")
                  ? "border-parrot text-parrot"
                  : "border-transparent"
              }`}
            >
              Resources
              <span className="text-[9px]">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full mt-1 w-56 rounded-xl border border-slate-200 bg-white py-2 text-xs text-slate-700 shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
              <Link
                href="/resources/mortgage-terms"
                className="block px-4 py-1.5 hover:bg-neutral-light"
              >
                Mortgage Terms
              </Link>
              <Link
                href="/resources/client-reviews"
                className="block px-4 py-1.5 hover:bg-neutral-light"
              >
                Client Reviews
              </Link>
              <Link
                href="/resources/calculator"
                className="block px-4 py-1.5 hover:bg-neutral-light"
              >
                Investment Calculator
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-1.5 hover:bg-neutral-light"
              >
                Blog / Insights
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className={`border-b-2 pb-0.5 transition ${
              isActive("/contact")
                ? "border-parrot text-parrot"
                : "border-transparent hover:border-parrot hover:text-parrot"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-brand shadow-sm shadow-slate-300 transition hover:bg-slate-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-700 shadow-sm shadow-slate-200/70 transition hover:bg-slate-50 lg:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          {mobileOpen ? (
            <span className="text-lg font-semibold leading-none text-slate-700">
              ×
            </span>
          ) : (
            <span className="flex flex-col gap-[3px]">
              <span className="block h-[2px] w-4 rounded-full bg-slate-700" />
              <span className="block h-[2px] w-4 rounded-full bg-slate-700" />
              <span className="block h-[2px] w-4 rounded-full bg-slate-700" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 text-sm text-slate-700 shadow-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-1">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="py-1">
              About
            </Link>
            <button
              type="button"
              onClick={() => setMobileProgramsOpen((v) => !v)}
              className="flex items-center justify-between pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              <span>Programs</span>
              <span className="text-[10px]">
                {mobileProgramsOpen ? "▴" : "▾"}
              </span>
            </button>
            {mobileProgramsOpen && (
              <>
                <Link
                  href="/programs"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  All Programs
                </Link>
                <Link
                  href="/programs/dscr-loans"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  DSCR Loans
                </Link>
                <Link
                  href="/programs/foreign-national-loans"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  Foreign National Loans
                </Link>
                <Link
                  href="/programs/land-loans"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  Land Loans
                </Link>
                <Link
                  href="/programs/multi-unit-loans"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  Multi-Unit Loans (up to 10)
                </Link>
                <Link
                  href="/programs/jumbo-investor-loans"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  Jumbo Investor Loans
                </Link>
              </>
            )}

            <button
              type="button"
              onClick={() => setMobileResourcesOpen((v) => !v)}
              className="flex items-center justify-between pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              <span>Resources</span>
              <span className="text-[10px]">
                {mobileResourcesOpen ? "▴" : "▾"}
              </span>
            </button>
            {mobileResourcesOpen && (
              <>
                <Link
                  href="/resources/mortgage-terms"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  Mortgage Terms
                </Link>
                <Link
                  href="/resources/client-reviews"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  Client Reviews
                </Link>
                <Link
                  href="/resources/calculator"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  Investment Calculator
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 pl-3"
                >
                  Blog / Insights
                </Link>
              </>
            )}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-slate-300 transition hover:bg-brand-light"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

