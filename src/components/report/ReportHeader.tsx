import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, ShieldCheck, Calendar, Users } from "lucide-react";
import { BasicData } from "@/types/report";
import { maskCPF, calculateAge, formatGender } from "@/lib/formatters";

interface ReportHeaderProps {
  basicData: BasicData;
}

const ReportHeader = ({ basicData }: ReportHeaderProps) => {
  const isRegular = basicData.TaxIdStatus === "REGULAR";

  return (
    <Card className="overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {basicData.Name}
          </h1>
          <Badge
            className={
              isRegular
                ? "bg-green-100 text-green-700 border-green-200"
                : "bg-red-100 text-red-700 border-red-200"
            }
          >
            <ShieldCheck className="h-3 w-3 mr-1" />
            {basicData.TaxIdStatus}
          </Badge>
        </div>

        <Separator className="mb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-muted-foreground text-xs">CPF</p>
              <p className="font-medium font-mono">{maskCPF(basicData.TaxIdNumber)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-muted-foreground text-xs">Genero</p>
              <p className="font-medium">{formatGender(basicData.Gender)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-muted-foreground text-xs">Idade</p>
              <p className="font-medium">{calculateAge(basicData.BirthDate)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-muted-foreground text-xs">Situacao CPF</p>
              <p className="font-medium">{basicData.TaxIdStatus}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportHeader;
