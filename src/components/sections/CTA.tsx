
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="py-32 px-6 text-center bg-zinc-950 border-y border-white/5">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">An Epic Evening Awaits</h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Reserve your table now for a night of authentic flavors and cinematic atmosphere.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-widest px-12 py-8 rounded-none transition-all hover:scale-105">
            Book a Table Tonight
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:border-primary text-white font-bold uppercase tracking-widest px-12 py-8 rounded-none transition-all">
            Contact Concierge
          </Button>
        </div>
      </div>
    </section>
  );
}
