export function WebsiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-neutral-light py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-[11px] text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} WMC Capital Group. All rights reserved.</p>
        <div className="flex gap-4">
          <button className="underline-offset-2 hover:underline">Disclosures</button>
          <button className="underline-offset-2 hover:underline">Privacy</button>
        </div>
      </div>
    </footer>
  );
}

