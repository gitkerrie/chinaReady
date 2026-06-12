import Link from "next/link";
import { ArrowRight, Plane, CheckCircle2 } from "lucide-react";
import { getAllGuides } from "@/lib/guides";
import { GuideCard } from "@/components/GuideCard";
import { HeroArt } from "@/components/illustrations";

export default function HomePage() {
  const guides = getAllGuides();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-sm font-medium text-brand-700">
              <Plane className="h-4 w-4" /> Made for first-time visitors to China
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
              Land in China and don&apos;t get stuck.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-600 lg:mx-0">
              Mobile payments, VPN &amp; SIM, taxis, menus, visas — the practical,
              up-to-date essentials no one tells you before you arrive.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/first-24-hours"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-600"
              >
                Your first 24 hours <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#guides"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 font-semibold text-neutral-700 transition hover:border-neutral-400"
              >
                Browse all guides
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500">
              <CheckCircle2 className="h-4 w-4 text-brand-500" />
              Every tip is dated, so you always know it&apos;s current.
            </p>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <HeroArt className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* Star page callout */}
      <section className="mx-auto max-w-5xl px-4">
        <Link
          href="/first-24-hours"
          className="group -mt-8 flex flex-col items-start gap-4 rounded-2xl border border-brand-200 bg-brand-600 p-6 text-white shadow-lg transition hover:bg-brand-700 sm:flex-row sm:items-center sm:p-8"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <Plane className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">First 24 Hours in China</h2>
            <p className="mt-1 text-sm text-brand-50">
              A step-by-step checklist from before you board to settling into the
              city — VPN, eSIM, payments, taxi and registration, in the right order.
            </p>
          </div>
          <ArrowRight className="h-6 w-6 shrink-0 transition group-hover:translate-x-1" />
        </Link>
      </section>

      {/* Guides grid */}
      <section id="guides" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold text-neutral-900">Survival guides</h2>
        <p className="mt-1 text-neutral-600">
          The six things that trip up almost every first-time visitor.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>
    </>
  );
}
