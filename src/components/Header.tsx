import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Placas no Zap" className="h-16 w-auto" />
            <span className="font-bold text-xl">Placas no Zap</span>
          </Link>
          <Link to="/planos">
            <Button variant="outline">Ver Planos</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

