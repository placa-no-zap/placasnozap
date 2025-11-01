import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quais as formas de pagamento da consulta?",
    answer: "Qualquer consulta pode ser paga PIX",
  },
  {
    question: "Em quanto tempo receberei o relatório após o pagamento?",
    answer:
      "Na grande maioria dos casos o relatório completo é enviado em poucos minutos após a confirmação do pagamento. Em raros os casos, pode ocorrer indisponibilidade no serviço de alguma de nossas fontes, neste caso, o relatório será gerado e enviado para seu WhatsApp assim que restabelecido o serviço.",
  },
  {
    question:
      "Caso eu não receba o relatório completo após o pagamento, como devo proceder?",
    answer:
      "Você poderá abrir um chamado utilizando o formulário de contato no endereço https://placanozap.com.br/contato.",
  },
];

const FAQ = () => {
  return (
    <section id="perguntas-frequentes" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre como funciona nossa consulta de placas de veículos.
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

