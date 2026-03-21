import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Info no Zap" className="h-16 w-auto" />
            <span className="font-bold text-xl">Info no Zap</span>
          </Link>
          <nav aria-label="Planos">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Ver Planos
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/placas/planos">Consulta de Placas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/cpf/planos">Consulta de CPF</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

