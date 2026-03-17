import Image from "next/image";
import Link from "next/link";

export function WebsiteNavbar() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
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
        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-600 md:flex">
          <a
            href="#programs"
            className="border-b-2 border-transparent pb-0.5 hover:border-parrot hover:text-parrot"
          >
            Programs
          </a>
          <a
            href="#why-wmc"
            className="border-b-2 border-transparent pb-0.5 hover:border-parrot hover:text-parrot"
          >
            Why WMC
          </a>
          <a
            href="#contact"
            className="border-b-2 border-transparent pb-0.5 hover:border-parrot hover:text-parrot"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-brand shadow-sm shadow-slate-300 transition hover:bg-slate-200 md:inline-flex md:items-center md:justify-center"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}

