import { User, Calendar, ShieldCheck, MapPin } from "lucide-react";

const benefits = [
  {
    icon: User,
    title: "Nome e Gênero",
    description: "Descubra o nome completo e gênero associados ao CPF consultado.",
  },
  {
    icon: Calendar,
    title: "Idade",
    description: "Saiba a idade da pessoa vinculada ao CPF.",
  },
  {
    icon: ShieldCheck,
    title: "Situação do CPF",
    description: "Verifique se o CPF está regular, suspenso, cancelado ou com pendências junto à Receita Federal.",
  },
];

const Benefits = () => {
  return (
    <section id="o-que-consultamos" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">O Que Você Descobre</h2>
          <p className="text-xl text-muted-foreground">
            Informações cadastrais essenciais para verificar a identidade de qualquer pessoa.
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
