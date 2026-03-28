import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, FileText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Info no Zap - Consultas no WhatsApp"
        description="Consulte placas de veículos e CPF direto no WhatsApp. Rápido, seguro e 100% online."
        path="/"
        ogDescription="Consultas de placas e CPF com resposta em minutos, tudo pelo WhatsApp."
      />
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <ShieldCheck className="h-4 w-4" />
            Consultas rápidas e seguras
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto mb-6">
            Consultas de{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              placas e CPF
            </span>{" "}
            direto no WhatsApp
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o serviço que precisa: histórico de veículos ou dados cadastrais de CPF. Tudo pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Nossos produtos</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Duas formas de obter informações confiáveis sem sair do WhatsApp.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300 border-border">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <Car className="h-6 w-6" />
                </div>
                <CardTitle>Consulta de placas</CardTitle>
                <CardDescription>
                  Débitos, sinistros, restrições e histórico do veículo antes de comprar ou vender.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <Button variant="hero" size="xl" className="w-full" asChild>
                  <Link to="/placas">Saiba mais</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300 border-border">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>Consulta de CPF</CardTitle>
                <CardDescription>
                  Nome, idade e situação cadastral de forma rápida e segura.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <Button variant="hero" size="xl" className="w-full" asChild>
                  <Link to="/cpf">Saiba mais</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
