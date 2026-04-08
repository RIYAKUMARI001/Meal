
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is the food prepared fresh daily?",
    a: "Absolutely. Every dish is prepared in small batches daily using the finest fresh ingredients and hand-ground spices to maintain our signature flavor profile."
  },
  {
    q: "Do you offer vegan or vegetarian options?",
    a: "Yes, we have a curated selection of vegetarian dishes like our signature Aloo Sabzi and Saffron Rice. We can also adapt many recipes for vegan diets upon request."
  },
  {
    q: "How spicy are the meals?",
    a: "Our Mughlai classics like Chicken Korma are mild to medium, focusing on aroma rather than heat. However, we can adjust the spice levels to your preference."
  },
  {
    q: "Do you provide catering for special events?",
    a: "We specialize in cinematic catering for weddings, corporate events, and private dinners. Contact our team to create a custom menu for your occasion."
  },
  {
    q: "Can I order for home delivery?",
    a: "Yes, we partner with premium delivery services to ensure your meal arrives with the same cinematic presentation we provide in-house."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h2 className="font-headline text-4xl font-bold uppercase tracking-widest">Inquiries</h2>
        <p className="text-muted-foreground text-sm font-body">Common questions about the Rasa experience</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
            <AccordionTrigger className="font-body text-lg hover:text-primary transition-colors text-left py-6">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground leading-relaxed text-base pb-6">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
