import { Button } from "@/components/ui/button";
import { MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            Informação e Segurança
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold">
            Consulte Qualquer CPF em Minutos
          </h2>

          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Tenha acesso a dados cadastrais confiáveis. Faça sua consulta agora pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="xl"
              variant="default"
              className="bg-primary hover:bg-primary/90 shadow-[var(--shadow-elegant)] hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link to="/cpf/planos">
                <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Ver Planos e Consultar
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-8 justify-center text-sm text-secondary-foreground/70 pt-4">
            <div className="flex items-center gap-2">
              ✓ Dados Oficiais
            </div>
            <div className="flex items-center gap-2">
              ✓ Resposta Rápida
            </div>
            <div className="flex items-center gap-2">
              ✓ Totalmente Online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
