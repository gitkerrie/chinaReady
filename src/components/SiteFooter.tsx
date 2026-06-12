import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-neutral-500">
        <p className="font-semibold text-neutral-700">ChinaReady</p>
        <p className="mt-1 max-w-xl">
          Practical, up-to-date survival guides for foreign travelers in China.
          Information changes fast — always check the &quot;Last updated&quot; date and
          verify visa rules with official sources before you travel.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/first-24-hours" className="hover:text-brand-600">
            First 24 Hours
          </Link>
          <Link href="/guides/payment" className="hover:text-brand-600">
            Payment
          </Link>
          <Link href="/guides/internet-sim" className="hover:text-brand-600">
            Internet &amp; SIM
          </Link>
          <Link href="/guides/visa-entry" className="hover:text-brand-600">
            Visas
          </Link>
        </div>
        <p className="mt-6 text-xs text-neutral-400">
          © {new Date().getFullYear()} ChinaReady. Built for travelers, not as official advice.
        </p>
      </div>
    </footer>
  );
}
