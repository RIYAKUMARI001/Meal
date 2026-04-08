
import { Badge } from "@/components/ui/badge";

const steps = [
  { title: "Marination", desc: "Soak chicken in yogurt and spices for 2 hours for maximum tenderness." },
  { title: "Base Preparation", desc: "Sauté onions until golden brown, then blend with roasted cashews for the creamy base." },
  { title: "Slow Cooking", desc: "Cook the chicken in the cashew paste on a low flame until oils begin to separate." },
  { title: "Infusion", desc: "Add warm saffron-infused milk and slow simmer for the final 10 minutes." },
  { title: "The Finish", desc: "Temper curry leaves and whole spices in ghee and pour over the hot korma." },
];

export function Recipe() {
  return (
    <section id="recipe" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3 space-y-6">
          <h2 className="font-headline text-4xl font-bold text-primary">Mastering the Korma</h2>
          <p className="text-muted-foreground font-body leading-relaxed">A royal Mughlai recipe requires patience and precision. Follow these curated steps to recreate the magic.</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-sm uppercase tracking-widest">Prep Time</span>
              <Badge className="bg-primary/20 text-primary border-none">30 Min</Badge>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-sm uppercase tracking-widest">Cook Time</span>
              <Badge className="bg-primary/20 text-primary border-none">45 Min</Badge>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm uppercase tracking-widest">Difficulty</span>
              <Badge className="bg-primary/20 text-primary border-none">Advanced</Badge>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3 space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-8 group">
              <span className="font-headline text-5xl font-black text-white/5 transition-colors group-hover:text-primary/20">{idx + 1}</span>
              <div className="space-y-2 pt-2">
                <h3 className="font-bold text-lg uppercase tracking-wider">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
