import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Party } from "@/types/report";
import { getPolarityColor, getPolarityLabel } from "@/components/report/lawsuit-utils";

interface LawsuitPartiesProps {
  parties: Party[];
}

const LawsuitParties = ({ parties }: LawsuitPartiesProps) => {
  if (!parties || parties.length === 0) return null;

  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">
        Partes ({parties.length})
      </h4>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Polo</TableHead>
              <TableHead>Tipo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parties.map((party, i) => (
              <TableRow key={`${party.Name}-${i}`}>
                <TableCell className="font-medium">{party.Name}</TableCell>
                <TableCell>
                  <Badge className={getPolarityColor(party.Polarity)}>
                    {getPolarityLabel(party.Polarity)}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">
                  {party.PartyDetails?.SpecificType || party.Type}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile stacked list */}
      <div className="md:hidden space-y-2">
        {parties.map((party, i) => (
          <div
            key={`${party.Name}-${i}`}
            className="flex items-center justify-between gap-2 py-2 border-b border-border last:border-0"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{party.Name}</p>
              <p className="text-xs text-muted-foreground">
                {party.PartyDetails?.SpecificType || party.Type}
              </p>
            </div>
            <Badge className={getPolarityColor(party.Polarity)}>
              {getPolarityLabel(party.Polarity)}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawsuitParties;
