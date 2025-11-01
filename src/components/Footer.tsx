import { MessageCircle, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Placa no Zap</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Consulta de placas de veículos rápida, segura e 100% online via WhatsApp.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Informações</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li 
                className="cursor-pointer hover:text-foreground transition-colors"
                onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Como Funciona
              </li>
              <li>O Que Consultamos</li>
              <li>Perguntas Frequentes</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Placa no Zap. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
