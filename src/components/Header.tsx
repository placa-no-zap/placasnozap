import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Placa no Zap" className="h-16 w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;

