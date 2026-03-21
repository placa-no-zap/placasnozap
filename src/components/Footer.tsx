import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Info no Zap" className="h-16 w-auto" />
              <span className="font-bold text-xl">Info no Zap</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Consultas rápidas, seguras e 100% online via WhatsApp.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Informações</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/placas" className="hover:text-foreground transition-colors">
                  Consulta de Placas
                </Link>
              </li>
              <li>
                <Link to="/placas/planos" className="hover:text-foreground transition-colors">
                  Planos de Placas
                </Link>
              </li>
              <li>
                <Link to="/cpf" className="hover:text-foreground transition-colors">
                  Consulta de CPF
                </Link>
              </li>
              <li>
                <Link to="/cpf/planos" className="hover:text-foreground transition-colors">
                  Planos de CPF
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
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
          <p>&copy; {new Date().getFullYear()} Info no Zap. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
