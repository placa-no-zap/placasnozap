import { Button } from "@/components/ui/button";
import { MessageCircle, Shield } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de consultar uma placa de veículo.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            Proteja Seu Investimento
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Não Compre um Veículo Sem Consultar a Placa
          </h2>
          
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Evite surpresas desagradáveis e prejuízos. Faça sua consulta agora mesmo e tenha total segurança na sua compra.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="xl" 
              variant="default"
              className="bg-primary hover:bg-primary/90 shadow-[var(--shadow-elegant)] hover:scale-105 transition-all duration-300 group"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Iniciar Consulta no WhatsApp
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
