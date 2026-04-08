
const ingredients = [
  { emoji: "🍗", name: "Chicken", quantity: "500g" },
  { emoji: "🌰", name: "Cashews", quantity: "100g" },
  { emoji: "🌿", name: "Curry Leaves", quantity: "2 Sprigs" },
  { emoji: "🧂", name: "Saffron", quantity: "1 Pinch" },
  { emoji: "🥥", name: "Cream", quantity: "1/2 Cup" },
  { emoji: "🧅", name: "Onions", quantity: "2 Medium" },
  { emoji: "🧄", name: "Ginger Garlic", quantity: "2 Tbsp" },
  { emoji: "🌶️", name: "Spices", quantity: "Chef's Mix" },
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
            <div key={idx} className="bg-card p-6 rounded-xl border border-white/5 flex flex-col items-center text-center space-y-3 hover:bg-zinc-900 transition-colors">
              <span className="text-4xl">{item.emoji}</span>
              <div className="space-y-1">
                <p className="font-bold text-sm tracking-wide uppercase">{item.name}</p>
                <p className="text-primary text-xs font-medium">{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
