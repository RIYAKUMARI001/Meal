
"use client";

import { Drumstick, Leaf, Droplets, Flame, Sparkles } from "lucide-react";

const CashewIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21a9 9 0 0 1 0-18c2.5 0 4.5 2 4.5 4.5S14.5 12 12 12s-4.5 2-4.5 4.5 2 4.5 4.5 4.5Z" />
    <path d="M12 12c1.5 0 3-1.5 3-3" />
  </svg>
);

const OnionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="14" r="8" />
    <path d="M12 2v4" />
    <path d="M9 10c0 1.5.5 3 2 4" />
    <path d="M15 10c0 1.5-.5 3-2 4" />
  </svg>
);

const GarlicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M12 22a8 8 0 0 0 8-8c0-5-8-12-8-12s-8 7-8 12a8 8 0 0 0 8 8Z" />
    <path d="M8 14c0 3 2 6 4 6s4-3 4-6" />
  </svg>
);

const ingredients = [
  { icon: <Drumstick className="w-8 h-8" />, name: "Chicken", quantity: "500g" },
  { icon: <CashewIcon />, name: "Cashews", quantity: "100g" },
  { icon: <Leaf className="w-8 h-8" />, name: "Curry Leaves", quantity: "2 Sprigs" },
  { icon: <Sparkles className="w-8 h-8" />, name: "Saffron", quantity: "1 Pinch" },
  { icon: <Droplets className="w-8 h-8" />, name: "Cream", quantity: "1/2 Cup" },
  { icon: <OnionIcon />, name: "Onions", quantity: "2 Medium" },
  { icon: <GarlicIcon />, name: "Ginger Garlic", quantity: "2 Tbsp" },
  { icon: <Flame className="w-8 h-8" />, name: "Spices", quantity: "Chef's Mix" },
];

export function Ingredients() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The Essence</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-xs">Ingredients for our Signature Chicken Korma</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ingredients.map((item, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl border border-white/5 flex flex-col items-center text-center space-y-4 hover:bg-zinc-900 transition-all group">
              <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className="font-bold text-sm tracking-wide uppercase text-white">{item.name}</p>
                <p className="text-primary/80 text-xs font-medium">{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
