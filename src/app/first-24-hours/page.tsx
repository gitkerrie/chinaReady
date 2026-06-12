import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Plane } from "lucide-react";
import { first24Hours } from "@/lib/first24";
import { getGuideBySlug } from "@/lib/guides";
import { JourneyArt } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Your First 24 Hours in China — A Step-by-Step Checklist",
  description:
    "A practical, ordered checklist for foreign travelers landing in China: what to set up before you board, what to do at the airport, and how to get into the city.",
};

export default function First24Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-brand-600"
      >
        <ArrowLeft className="h-4 w-4" /> Home
      </Link>

      <header className="mt-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <Plane className="h-6 w-6" />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Your first 24 hours in China
        </h1>
        <p className="mt-3 text-lg text-neutral-600">
          Do these in order and you&apos;ll glide from the plane to your hotel
          without getting stuck on payments, internet or transport.
        </p>
        <JourneyArt className="mt-6 h-auto w-full rounded-2xl" />
      </header>

      <div className="mt-10 space-y-12">
        {first24Hours.map((phase, phaseIndex) => (
          <section key={phase.phase}>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                {phaseIndex + 1}
              </span>
              <h2 className="text-xl font-bold text-neutral-900">{phase.phase}</h2>
            </div>
            <p className="mt-2 pl-11 text-neutral-600">{phase.description}</p>

            <ol className="mt-5 space-y-3 pl-11">
              {phase.items.map((item) => {
                const guide = item.guideSlug
                  ? getGuideBySlug(item.guideSlug)
                  : undefined;
                return (
                  <li
                    key={item.title}
                    className="rounded-xl border border-neutral-200 p-4"
                  >
                    <p className="font-semibold text-neutral-900">{item.title}</p>
                    <p className="mt-1 text-sm text-neutral-600">{item.detail}</p>
                    {guide && (
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline"
                      >
                        Full {guide.title} guide
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-3 rounded-2xl bg-neutral-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-neutral-700">
          That&apos;s the hard part done. Now dive into any topic in detail.
        </p>
        <Link
          href="/#guides"
          className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 font-semibold text-white transition hover:bg-brand-600"
        >
          Browse all guides <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
