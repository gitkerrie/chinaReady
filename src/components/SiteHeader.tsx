import Link from "next/link";
import { Compass } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-neutral-900">
          <Compass className="h-6 w-6 text-brand-500" aria-hidden />
          <span>
            China<span className="text-brand-500">Ready</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-neutral-600">
          <Link href="/first-24-hours" className="hidden hover:text-brand-600 sm:inline">
            First 24 Hours
          </Link>
          <Link
            href="/first-24-hours"
            className="rounded-full bg-brand-500 px-4 py-2 text-white transition hover:bg-brand-600"
          >
            Just landed?
          </Link>
        </nav>
      </div>
    </header>
  );
}
