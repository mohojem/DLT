import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What happens during the first consultation?",
    answer:
      "During the first consultation, an attorney will assess your legal matter, gather the relevant facts, and explain your legal position and available options. This consultation allows the firm to determine how best to assist you and whether the matter falls within its areas of expertise. All information shared during the consultation is treated as strictly confidential.",
  },
  {
    question: "Do I need an appointment to see an attorney?",
    answer:
      "Yes. Consultations are conducted by appointment to ensure that an attorney is available to give your matter the necessary attention. Appointments can be arranged by contacting the firm via telephone or email.",
  },
  {
    question: "What documents should I bring to my consultation?",
    answer:
      "You should bring all documents relevant to your matter, such as contracts, correspondence, court papers, identity documents, or any other supporting information. Providing complete documentation helps the attorney assess your matter accurately and efficiently.",
  },
  {
    question: "How long does a legal matter usually take?",
    answer:
      "The duration of a legal matter depends on its nature, complexity, and external factors such as court processes or third-party involvement. While some matters can be resolved quickly, others may take several months or longer. Your attorney will provide guidance on expected timelines once the matter has been assessed.",
  },
  {
    question: "Are consultations and communications confidential?",
    answer:
      "Yes. All consultations and communications between you and the firm are protected by attorney-client confidentiality, in accordance with South African law and professional ethical standards.",
  },
  {
    question: "Do you handle matters outside your office locations?",
    answer:
      "Yes. While the firm has offices in Bloemfontein, Mossel Bay, and Cape Town, it may assist clients in other areas depending on the nature of the matter. This can be discussed during the initial consultation.",
  },
  {
    question: "How are legal fees structured?",
    answer:
      "Legal fees are structured in accordance with professional guidelines and depend on the nature and complexity of the matter. Fee arrangements will be discussed transparently with you before work begins, ensuring that you understand the expected costs involved.",
  },
  {
    question: "Will I deal directly with an attorney?",
    answer:
      "Yes. Clients deal directly with qualified attorneys who are responsible for handling their matters. This ensures accountability, professional oversight, and clear communication throughout the process.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our legal services and consultation process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-accent/50"
            >
              <AccordionTrigger className="text-left font-serif font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
