import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de consultar um CPF.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <ShieldCheck className="h-4 w-4" />
            Consulta Rápida e Segura
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Consulte
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> CPF </span>
            Direto no WhatsApp
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nome, idade e situação cadastral de qualquer CPF. Tudo direto no WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          <div className="flex items-center gap-8 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
              Resposta em segundos
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
              100% via WhatsApp
            </div>
          </div>

          <p className="text-sm font-semibold text-muted-foreground italic max-w-2xl mx-auto">
            Dados disponibilizados conforme as diretrizes da LGPD para sua segurança e a do titular.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
