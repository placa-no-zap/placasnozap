import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quais as formas de pagamento da consulta?",
    answer: "Qualquer consulta pode ser paga com PIX.",
  },
  {
    question: "Em quanto tempo receberei o resultado após o pagamento?",
    answer:
      "Na grande maioria dos casos o resultado é enviado em poucos minutos após a confirmação do pagamento. Em raros casos, pode ocorrer indisponibilidade no serviço de alguma de nossas fontes. Neste caso, o resultado será gerado e enviado para seu WhatsApp assim que o serviço for restabelecido.",
  },
  {
    question:
      "Caso eu não receba o resultado após o pagamento, como devo proceder?",
    answer: (
      <>
        Você poderá abrir um chamado utilizando o{" "}
        <a
          href="https://placanozap.com.br/contato"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          formulário de contato
        </a>
        .
      </>
    ),
  },
  {
    question: "Quais informações são retornadas na consulta de CPF?",
    answer:
      "Você recebe: nome completo, gênero, idade, situação do CPF junto à Receita Federal, e cidade e estado de nascimento.",
  },
];

const FAQ = () => {
  return (
    <section id="perguntas-frequentes" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre como funciona nossa consulta de CPF.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border px-4 py-2"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
