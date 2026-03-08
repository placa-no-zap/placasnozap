import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const planos = [
  {
    titulo: "SIMPLES",
    preco: "1,99",
    recursos: [
      "Nome",
      "Genero",
      "Idade",
      "Situacao do CPF",
      "Cidade e Estado de Nascimento",
    ],
  },
];

const whatsappMessage = encodeURIComponent("Olá! Gostaria de consultar um CPF.");
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const CpfPlanos = () => {
  return (
    <main className="min-h-screen bg-background">
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

          <div className="text-center mb-12">
            <Button
              size="xl"
              variant="hero"
              className="group"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Consultar Agora
            </Button>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <CardDescription className="text-xs font-semibold text-muted-foreground tracking-wider mb-2">
                  {planos[0].titulo}
                </CardDescription>
                <CardTitle className="text-5xl font-bold">
                  <span className="text-2xl align-top">R$</span> {planos[0].preco}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="border-t border-border pt-6 flex-1">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {planos[0].recursos.map((recurso) => (
                      <li key={recurso} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-left">{recurso}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CpfPlanos;
