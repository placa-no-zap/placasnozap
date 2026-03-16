import Header from "@/components/Header";
import HeroSection from "@/components/cpf/HeroSection";
import HowItWorks from "@/components/cpf/HowItWorks";
import Benefits from "@/components/cpf/Benefits";
import CTASection from "@/components/cpf/CTASection";
import FAQ from "@/components/cpf/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Cpf = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Consulta de CPF no WhatsApp | Placas no Zap"
        description="Consulte CPF direto no WhatsApp. Descubra nome, idade, situação cadastral e cidade de nascimento. Rápido, seguro e 100% online."
        path="/cpf"
        ogDescription="Descubra nome, idade, situação cadastral e cidade de nascimento de qualquer CPF. Tudo direto no WhatsApp."
      />
      <Header />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Cpf;
