
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const chefImage = PlaceHolderImages.find(img => img.id === "chef-portrait");

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Story</h2>
          <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground">
            <p>
              At Rasa Kitchen, we believe that food is not just nourishment—it's a story told through fire, spice, and heritage. Our journey began with a simple mission: to preserve the soul of authentic Indian cooking while presenting it with a modern, cinematic elegance that captures the imagination.
            </p>
            <p>
              Every dish we serve is a tribute to centuries of Mughlai tradition, refined through generations. From the slow-cooked richness of our curries to the delicate infusion of saffron in our rice, we bring restaurant-quality masterpieces directly to your home.
            </p>
            <p>
              Join us in celebrating a world of flavors where every bite is a scene from a vibrant culinary epic. Welcome to the Rasa experience.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group">
          {chefImage && (
            <Image
              src={chefImage.imageUrl}
              alt={chefImage.description}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              data-ai-hint={chefImage.imageHint}
            />
          )}
          <div className="absolute inset-0 ring-1 ring-primary/20 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
