import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de consultar uma placa de veículo.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <ShieldCheck className="h-4 w-4" />
              Consulta Rápida e Segura
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Consulte Placas de
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Veículos </span>
              Direto no WhatsApp
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Descubra a real situação do veículo antes de comprar. Verificamos débitos, sinistros, restrições e muito mais direto no WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="xl"
                variant="hero"
                className="group"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Consultar Agora
              </Button>
              <Button
                size="xl"
                variant="outline"
                onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Como Funciona
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                Resposta em minutos
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                100% via WhatsApp
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Consulta de veículos via WhatsApp"
              className="relative rounded-3xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
