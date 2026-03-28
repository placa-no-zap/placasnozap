import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Lawsuit } from "@/types/report";
import { formatCNJ, formatDate } from "@/lib/formatters";
import { getLawsuitStatusColor } from "@/components/report/lawsuit-utils";
import LawsuitParties from "@/components/report/LawsuitParties";
import LawsuitTimeline from "@/components/report/LawsuitTimeline";

interface LawsuitCardProps {
  lawsuit: Lawsuit;
  index: number;
}

const LawsuitCard = ({ lawsuit, index }: LawsuitCardProps) => {
  return (
    <AccordionItem
      value={`lawsuit-${index}`}
      className="border rounded-lg px-4 mb-3 bg-card"
    >
      <AccordionTrigger className="hover:no-underline py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left w-full mr-4">
          <span className="font-mono text-sm font-medium">
            {formatCNJ(lawsuit.Number)}
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={getLawsuitStatusColor(lawsuit.Status)}>
              {lawsuit.Status}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {lawsuit.CourtName} - {lawsuit.CourtType}
            </span>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        <div className="space-y-4 pb-2">
          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Detail label="Tipo" value={lawsuit.Type} />
            <Detail label="Tribunal" value={`${lawsuit.CourtName} - ${lawsuit.State}`} />
            <Detail label="Vara" value={lawsuit.JudgingBody} />
            <Detail label="Comarca" value={lawsuit.CourtDistrict} />
            <Detail label="Juiz" value={lawsuit.Judge} />
            <Detail label="Tipo de Justica" value={lawsuit.CourtType} />
            <Detail label="Data de Distribuicao" value={formatDate(lawsuit.NoticeDate)} />
            <Detail label="Ultima Movimentacao" value={formatDate(lawsuit.LastMovementDate)} />
          </div>

          <Separator />

          <LawsuitParties parties={lawsuit.Parties} />

          <Separator />

          <LawsuitTimeline updates={lawsuit.Updates} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

function Detail({ label, value }: { label: string; value: string }) {
  if (!value || value === "—") return null;
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

export default LawsuitCard;
