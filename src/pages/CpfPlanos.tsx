import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    title: "SIMPLES",
    description: "Confira a situação atual do CPF",
    price: "1,99",
    features: [
      "Situação do CPF",
      "Nome",
      "Genero",
      "Idade",
    ],
  },
  {
    title: "PROCESSOS JUDICIAIS",
    description: "Relatório completo de processos judiciais",
    price: "4,99",
    features: [
      "Dados cadastrais do CPF",
      "Lista de processos judiciais",
      "Detalhes de cada processo",
      "Partes envolvidas",
      "Histórico de movimentações",
      "Relatório online exclusivo",
    ],
  },
];

const CpfPlanos = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Planos de Consulta de CPF | Info no Zap"
        description="Consulte dados cadastrais de um CPF. Plano Simples R$1,99 ou Processos Judiciais R$4,99 com relatório completo."
        path="/cpf/planos"
      />
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Planos de Consulta de CPF
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Consulte dados cadastrais de um CPF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <CardDescription className="text-xl text-primary font-bold uppercase">
                    {plan.title}
                  </CardDescription>
                  <CardDescription className="text-xs font-semibold text-muted-foreground tracking-wider mb-2">
                    {plan.description}
                  </CardDescription>
                  <CardTitle className="text-5xl font-bold">
                    <span className="text-2xl align-top">R$</span> {plan.price}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="border-t border-border pt-6 flex-1">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-left">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CpfPlanos;
