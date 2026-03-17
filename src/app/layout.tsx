import type { Metadata } from "next";
import "./globals.css";
import { WebsiteNavbar } from "./(website)/components/layout/Navbar";
import { WebsiteFooter } from "./(website)/components/layout/Footer";

export const metadata: Metadata = {
  title: "WMC Capital Group | Investment & Mortgage Programs",
  description:
    "WMC Capital Group offers DSCR, foreign national, land, multi‑unit and jumbo investor loan programs for investment properties nationwide."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-slate-900">
        <div className="min-h-screen flex flex-col bg-background">
          <WebsiteNavbar />
          <div className="flex-1">{children}</div>
          <WebsiteFooter />
        </div>
      </body>
    </html>
  );
}

