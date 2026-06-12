import { Clock } from "lucide-react";
import { formatDate } from "@/lib/format";

export function LastUpdated({ date }: { date: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
      <Clock className="h-3.5 w-3.5" aria-hidden />
      Last updated {formatDate(date)}
    </span>
  );
}
