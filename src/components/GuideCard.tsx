import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { GuideArt } from "@/components/illustrations";
import { LastUpdated } from "@/components/LastUpdated";
import type { Guide } from "@/lib/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
    >
      <GuideArt slug={guide.slug} className="h-36 w-full object-cover" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-brand-600">
          <Icon name={guide.icon} className="h-5 w-5" />
          <h3 className="text-lg font-semibold text-neutral-900">{guide.title}</h3>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
          {guide.summary}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <LastUpdated date={guide.lastUpdated} />
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 opacity-0 transition group-hover:opacity-100">
            Read <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
