import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ReportErrorProps {
  error: Error;
}

const ReportError = ({ error }: ReportErrorProps) => {
  const isNotFound = error?.message === "REPORT_NOT_FOUND";

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20 max-w-md">
        <Card className="text-center">
          <CardContent className="pt-8 pb-8 space-y-4">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto" />
            <h1 className="text-xl font-bold text-foreground">
              {isNotFound ? "Relatorio nao encontrado" : "Erro ao carregar relatorio"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isNotFound
                ? "O relatorio que voce esta procurando nao existe ou ja expirou."
                : "Ocorreu um erro ao carregar o relatorio. Tente novamente mais tarde."}
            </p>
            <Button asChild>
              <Link to="/">Voltar ao inicio</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </main>
  );
};

export default ReportError;
