
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const heritageImage = PlaceHolderImages.find(img => img.id === "heritage-feast");

  return (
    <section id="about" className="max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Text Column */}
        <div className="py-24 px-6 md:pl-12 md:pr-0 space-y-8 flex flex-col justify-center">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary">Our Story</h2>
          <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground max-w-xl">
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
        
        {/* Image Column */}
        <div className="relative h-full min-h-[600px] w-full md:rounded-l-[3rem] overflow-hidden group">
          {heritageImage && (
            <Image
              src={heritageImage.imageUrl}
              alt={heritageImage.description}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint={heritageImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20" />
          <div className="absolute inset-0 ring-1 ring-primary/10 md:rounded-l-[3rem]" />
        </div>
      </div>
    </section>
  );
}
