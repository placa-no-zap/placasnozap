import { MessageCircle, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Envie o CPF",
    description: "Abra uma conversa no WhatsApp e envie o número do CPF que deseja consultar.",
  },
  {
    icon: Search,
    title: "Análise Completa",
    description: "Nosso sistema busca informações cadastrais em bases de dados oficiais em tempo real.",
  },
  {
    icon: CheckCircle,
    title: "Receba o Resultado",
    description: "Em poucos minutos, você recebe os dados cadastrais do CPF direto no WhatsApp.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-xl text-muted-foreground">
            Consultar um CPF nunca foi tão simples. Apenas 3 passos e você tem todas as informações.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-background rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 h-full border border-border hover:border-primary/50">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {index + 1}
                </div>

                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-primary/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
