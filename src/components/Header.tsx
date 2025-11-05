import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Placas no Zap" className="h-16 w-auto" />
          <span className="font-bold text-xl">Placas no Zap</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

