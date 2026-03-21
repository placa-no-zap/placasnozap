import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Placas = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Consulta de Placas de Veículos no WhatsApp | Info no Zap"
        description="Consulte placas de veículos direto no WhatsApp. Verifique débitos, sinistros, restrições e histórico completo antes de comprar. Rápido, seguro e 100% online."
        path="/placas"
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

export default Placas;
