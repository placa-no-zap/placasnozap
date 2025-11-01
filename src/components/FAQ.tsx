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
      "Na grande maioria dos casos o relatório completo é enviado em poucos minutos após a confirmação do pagamento. Em raros os casos, pode ocorrer indisponibilidade no serviço de alguma de nossas fontes, neste caso, o relatório será gerado e enviado para seu email assim que restabelecido o serviço.",
  },
  {
    question:
      "Caso eu não receba o relatório completo após o pagamento, como devo proceder?",
    answer:
      "Como o relatório é encaminhado automaticamente para o email cadastrado na consulta, é importante verificar se o mesmo não caiu na caixa de SPAM. Caso contrário, você poderá abrir um chamado enviando email para contato@consultarplaca.com.br solicitando o reenvio.",
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

