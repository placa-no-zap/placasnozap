import { useParams } from "react-router-dom";
import { useReport } from "@/hooks/use-report";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion } from "@/components/ui/accordion";
import ReportHeader from "@/components/report/ReportHeader";
import LawsuitsSummary from "@/components/report/LawsuitsSummary";
import LawsuitCard from "@/components/report/LawsuitCard";
import ReportSkeleton from "@/components/report/ReportSkeleton";
import ReportError from "@/components/report/ReportError";

const Report = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useReport(id!);

  if (isLoading) return <ReportSkeleton />;
  if (isError) return <ReportError error={error} />;
  if (!data) return null;

  const registration = data.registrationData.Result[0]?.RegistrationData;
  const lawsuits = data.lawsuits.Result[0]?.Processes.Lawsuits ?? [];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Relatorio | Info no Zap"
        description="Relatorio de processos judiciais"
        noindex
      />
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-6 max-w-4xl">
        {registration && (
          <ReportHeader
            basicData={registration.BasicData}
            queryDate={data.registrationData.QueryDate}
          />
        )}
        <LawsuitsSummary lawsuits={lawsuits} />
        <Accordion type="single" collapsible className="space-y-0">
          {lawsuits.map((lawsuit, i) => (
            <LawsuitCard key={`${lawsuit.Number}-${i}`} lawsuit={lawsuit} index={i} />
          ))}
        </Accordion>
      </div>
      <Footer />
    </main>
  );
};

export default Report;
