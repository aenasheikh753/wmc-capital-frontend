import type { ReactNode } from "react";
import { WebsiteNavbar } from "./components/layout/Navbar";
import { WebsiteFooter } from "./components/layout/Footer";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <WebsiteNavbar />
      <div className="flex-1">{children}</div>
      <WebsiteFooter />
    </div>
  );
}

