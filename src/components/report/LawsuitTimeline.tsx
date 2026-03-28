import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LawsuitUpdate } from "@/types/report";
import { formatDate } from "@/lib/formatters";

interface LawsuitTimelineProps {
  updates: LawsuitUpdate[];
}

const INITIAL_COUNT = 10;

const LawsuitTimeline = ({ updates }: LawsuitTimelineProps) => {
  const [expanded, setExpanded] = useState(false);

  if (!updates || updates.length === 0) return null;

  const sorted = [...updates].sort(
    (a, b) => new Date(b.PublishDate).getTime() - new Date(a.PublishDate).getTime()
  );

  const visible = expanded ? sorted : sorted.slice(0, INITIAL_COUNT);
  const hasMore = sorted.length > INITIAL_COUNT;

  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-3">
        Movimentacoes ({updates.length})
      </h4>

      <div className="relative pl-4 border-l-2 border-primary/20 space-y-4">
        {visible.map((update, i) => (
          <div key={`${update.PublishDate}-${i}`} className="relative">
            <div className="absolute -left-[calc(1rem+5px)] top-1.5 h-2 w-2 rounded-full bg-primary" />
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">
                {formatDate(update.PublishDate)}
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {update.Content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <Button
          variant="ghost"
          size="sm"
          className="mt-3 w-full text-muted-foreground"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Mostrar menos
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              Mostrar todas as {sorted.length} movimentacoes
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default LawsuitTimeline;
