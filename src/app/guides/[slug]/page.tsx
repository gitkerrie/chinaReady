import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lightbulb, HelpCircle, CheckCircle2 } from "lucide-react";
import {
  getAllGuideSlugs,
  getGuideBySlug,
} from "@/lib/guides";
import { Icon } from "@/components/Icon";
import { GuideArt } from "@/components/illustrations";
import { LastUpdated } from "@/components/LastUpdated";
import { StepImage } from "@/components/StepImage";
import { SourceLink } from "@/components/SourceLink";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.summary,
    openGraph: { title: guide.title, description: guide.summary },
  };
}

export default function GuidePage({ params }: { params: Params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-brand-600"
      >
        <ArrowLeft className="h-4 w-4" /> All guides
      </Link>

      {/* Banner illustration */}
      <GuideArt
        slug={guide.slug}
        className="mt-6 h-44 w-full rounded-2xl object-cover sm:h-56"
      />

      {/* Header */}
      <header className="mt-6">
        <div className="flex items-center gap-3 text-brand-600">
          <Icon name={guide.icon} className="h-6 w-6" />
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            {guide.title}
          </h1>
        </div>
        <p className="mt-3 text-lg text-neutral-600">{guide.summary}</p>
        <div className="mt-4">
          <LastUpdated date={guide.lastUpdated} />
        </div>
      </header>

      {/* TL;DR */}
      <section className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
        <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-700">
          <Lightbulb className="h-4 w-4" /> The short version
        </h2>
        <ul className="mt-3 space-y-2">
          {guide.tldr.map((point) => (
            <li key={point} className="flex gap-2 text-neutral-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Sections */}
      <div className="mt-10 space-y-10">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold text-neutral-900">
              {section.heading}
            </h2>
            {section.body && (
              <p className="mt-2 text-neutral-600">{section.body}</p>
            )}
            {/* Section-level image */}
            {section.image && (
              <div className="mt-3">
                <StepImage
                  src={section.image.src}
                  alt={section.image.alt}
                  caption={section.image.caption}
                />
              </div>
            )}
            {/* Section-level source */}
            {section.source && (
              <SourceLink
                url={section.source.url}
                label={section.source.label}
              />
            )}
            {section.items && (
              <ul className="mt-4 space-y-2.5">
                {section.items.map((item) => (
                  <li
                    key={item.text}
                    className="flex gap-3 rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-3 text-neutral-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    <div className="flex-1">
                      <span>{item.text}</span>
                      {/* Item-level image */}
                      {item.image && (
                        <StepImage
                          src={item.image.src}
                          alt={item.image.alt}
                          caption={item.image.caption}
                        />
                      )}
                      {/* Item-level source link */}
                      {item.source && (
                        <SourceLink
                          url={item.source.url}
                          label={item.source.label}
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* FAQ */}
      {guide.faq.length > 0 && (
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-bold text-neutral-900">
            <HelpCircle className="h-5 w-5 text-brand-500" /> Common questions &amp; pitfalls
          </h2>
          <dl className="mt-5 space-y-5">
            {guide.faq.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-neutral-200 p-5"
              >
                <dt className="font-semibold text-neutral-900">{item.q}</dt>
                <dd className="mt-2 text-neutral-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Footer note */}
      <div className="mt-12 rounded-xl bg-neutral-100 p-5 text-sm text-neutral-500">
        Things change fast in China. This guide was last reviewed on{" "}
        {guide.lastUpdated}. Always double-check time-sensitive details (especially
        visas) against official sources before you rely on them.
      </div>
    </article>
  );
}
