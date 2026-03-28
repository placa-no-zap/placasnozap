import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale } from "lucide-react";
import { Lawsuit } from "@/types/report";
import { getLawsuitStatusColor } from "@/components/report/lawsuit-utils";

interface LawsuitsSummaryProps {
  lawsuits: Lawsuit[];
}

const LawsuitsSummary = ({ lawsuits }: LawsuitsSummaryProps) => {
  const statusCounts = lawsuits.reduce<Record<string, number>>((acc, l) => {
    acc[l.Status] = (acc[l.Status] || 0) + 1;
    return acc;
  }, {});

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">
            Processos Judiciais
          </h2>
          <Badge variant="secondary" className="ml-auto">
            {lawsuits.length} {lawsuits.length === 1 ? "processo" : "processos"}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.entries(statusCounts).map(([status, count]) => (
            <Badge key={status} className={getLawsuitStatusColor(status)}>
              {status}: {count}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LawsuitsSummary;
