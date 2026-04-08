
"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-svh w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/RIYAKUMARI001/Meal/main/karahi.webp"
          alt="Cinematic Karahi Cooking"
          className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center space-y-8 px-6">
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-[0.15em] text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
          RASA KITCHEN
        </h1>
        <p className="font-body text-xl md:text-2xl tracking-widest text-primary italic font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Authentic Indian Flavors, Cinematic Experience
        </p>
        <div className="pt-8 animate-in fade-in zoom-in duration-1000 delay-500">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-widest px-10 py-7 text-lg rounded-none transition-transform hover:scale-105"
            asChild
          >
            <a href="#menu">Explore Our Menu</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
}
