import { ExternalLink } from "lucide-react";

/**
 * A link to the official source / help page for a guide step.
 * Adds credibility and lets users verify information directly.
 */
export function SourceLink({
  url,
  label = "Official guide",
}: {
  url: string;
  label?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:underline"
    >
      <ExternalLink className="h-3 w-3" />
      {label}
    </a>
  );
}
