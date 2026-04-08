
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const heritageImage = PlaceHolderImages.find(img => img.id === "heritage-feast");

  return (
    <section id="about" className="w-full bg-black overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[700px]">
        {/* Text Column */}
        <div className="flex flex-col justify-center py-20 px-8 md:px-16 lg:px-24 space-y-8 bg-black">
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
            Our Story
          </h2>
          <div className="space-y-6 font-body text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl">
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
        
        {/* Image Column - Full Height with Rounded Corners */}
        <div className="relative h-full min-h-[600px] w-full p-4 md:p-6 lg:p-8">
          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden group border border-white/10 shadow-2xl">
            {heritageImage && (
              <Image
                src={heritageImage.imageUrl}
                alt={heritageImage.description}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint={heritageImage.imageHint}
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
