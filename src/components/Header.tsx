import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3">
          <Shield className="h-10 w-10 text-primary" />
          <span className="font-bold text-3xl">Placa no Zap</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

