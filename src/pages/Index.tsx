import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Placas no Zap - Consulta de Placas de Veículos no WhatsApp"
        description="Consulte placas de veículos direto no WhatsApp. Verifique débitos, sinistros, restrições e histórico completo antes de comprar. Rápido, seguro e 100% online."
        path="/"
        ogDescription="Descubra a real situação do veículo antes de comprar. Consulta rápida via WhatsApp."
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

export default Index;
