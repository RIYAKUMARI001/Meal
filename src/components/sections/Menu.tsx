
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const menuItems = [
  {
    id: 1,
    name: "CHICKEN KORMA",
    subtitle: "Mughlai Classic",
    description: "A rich aromatic curry with tender chicken in creamy cashew saffron sauce, garnished with almonds and curry leaves.",
    image: PlaceHolderImages.find(img => img.id === "chicken-korma")?.imageUrl,
    imageHint: "chicken korma"
  },
  {
    id: 2,
    name: "SAFFRON RICE",
    subtitle: "Fragrant Biryani Style",
    description: "Fluffy basmati rice infused with saffron, whole spices, and crispy fried onions — a royal side dish.",
    image: PlaceHolderImages.find(img => img.id === "saffron-rice")?.imageUrl,
    imageHint: "saffron rice"
  },
  {
    id: 3,
    name: "ALOO SABZI",
    subtitle: "Spiced Potato Delight",
    description: "Golden potatoes tossed with mustard seeds, curry leaves, and aromatic spices — simple yet irresistible.",
    image: PlaceHolderImages.find(img => img.id === "aloo-sabzi")?.imageUrl,
    imageHint: "potato curry"
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tight">Our Curated Menu</h2>
        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm">Elegance in every bite</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {menuItems.map((item) => (
          <Card key={item.id} className="bg-card border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="relative aspect-square overflow-hidden">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={item.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            <CardContent className="p-8 space-y-4">
              <div className="space-y-1">
                <Badge variant="outline" className="text-primary border-primary/20 text-[10px] tracking-widest uppercase rounded-none">
                  {item.subtitle}
                </Badge>
                <h3 className="font-headline text-2xl font-bold">{item.name}</h3>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                {item.description}
              </p>
              <button className="text-primary text-xs uppercase tracking-[0.2em] font-bold border-b border-primary/0 hover:border-primary/100 transition-all pt-2">
                Order Now
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
