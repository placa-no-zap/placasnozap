import Header from "@/components/Header";
import HeroSection from "@/components/cpf/HeroSection";
import HowItWorks from "@/components/cpf/HowItWorks";
import Benefits from "@/components/cpf/Benefits";
import CTASection from "@/components/cpf/CTASection";
import FAQ from "@/components/cpf/FAQ";
import Footer from "@/components/Footer";

const Cpf = () => {
  return (
    <main className="min-h-screen">
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
