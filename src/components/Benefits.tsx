import { Shield, AlertTriangle, FileText, TrendingDown } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Restrições de Seguro",
    description: "Identifique se o veículo possui restrições que impedem a contratação de seguro nas principais seguradoras.",
  },
  {
    icon: AlertTriangle,
    title: "Débitos Pendentes",
    description: "Verifique multas, IPVA, seguro obrigatório e outros débitos que precisam ser quitados antes da transferência.",
  },
  {
    icon: FileText,
    title: "Histórico de Sinistros",
    description: "Descubra se o veículo já foi registrado como perda total ou teve sinistros graves que desvalorizam o bem.",
  },
  {
    icon: TrendingDown,
    title: "Veracidade das Informações",
    description: "Confirme se os dados fornecidos pelo vendedor são verdadeiros e correspondem aos registros oficiais.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">O Que Você Descobre</h2>
          <p className="text-xl text-muted-foreground">
            Informações essenciais para tomar a melhor decisão na compra de um veículo usado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border border-border hover:border-primary/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <benefit.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
