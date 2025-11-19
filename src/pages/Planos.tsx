import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const planos = [
  {
    titulo: "CONSULTA SIMPLES",
    preco: "29,90",
    recursos: [
      "Informações gerais",
      "(Chassi, Nº Motor, Marca, Modelo e Ano)",
      "",
      "Verificação junto a Base Estadual (DETRANS) como Renavam e Restrições",
      "",
      "Verificação junto ao Registro Nacional de Infrações de Trânsito (RENAINF)",
    ],
  },
  {
    titulo: "CONSULTA INTERMEDIÁRIA",
    preco: "49,90",
    recursos: [
      "Todas informações da consulta simples",
      "",
      "Histórico de Roubo e Furto",
      "",
      "Registro de Ofertas em Leilões (Simples)",
    ],
  },
  {
    titulo: "CONSULTA AVANÇADA",
    preco: "59,90",
    recursos: [
      "Todas informações da consulta intermediária",
      "",
      "Registro de Ofertas em Leilões Prime (Com Classificação)",
      "",
      "Registro de Remarketing / Desmobilização de Frota",
      "",
      "Informações sobre a ocorrência de sinistros com Perda Total (PT)",
      "",
      "Verificação junto a Base Federal (DENATRAN) sobre Restrições Financeiras e Judiciais (RENAJUD)",
    ],
  },
  {
    titulo: "CONSULTA COMPLETA",
    preco: "74,90",
    recursos: [
      "Todas informações da consulta avançada",
      "",
      "Referência de Preço (Fipe)",
      "",
      "Histórico Recall",
      "",
      "Guia de Imagens",
      "",
      "Ficha Técnica Comparativa",
      "",
      "Custo Médio de Manutenção",
    ],
  },
];

const Planos = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nossos Planos
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Escolha o plano ideal para consultar o histórico do seu veículo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {planos.map((plano, index) => (
              <Card 
                key={index} 
                className="flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <CardDescription className="text-xs font-semibold text-muted-foreground tracking-wider mb-2">
                    {plano.titulo}
                  </CardDescription>
                  <CardTitle className="text-5xl font-bold">
                    <span className="text-2xl align-top">R$</span> {plano.preco}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="border-t border-border pt-6 flex-1">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {plano.recursos.map((recurso, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {recurso ? (
                            <>
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-left">{recurso}</span>
                            </>
                          ) : (
                            <span className="h-3"></span>
                          )}
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

export default Planos;
