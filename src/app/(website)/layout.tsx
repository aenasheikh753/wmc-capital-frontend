import type { ReactNode } from "react";

// Segment layout for (website) group.
// Root layout already renders the global navbar and footer,
// so this layout just provides a wrapper for page content.

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-slate-900">{children}</div>;
}

