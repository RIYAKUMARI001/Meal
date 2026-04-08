
import Link from "next/link";
import { Instagram, Youtube, Pin as Pinterest } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href="/" className="font-headline text-3xl font-bold tracking-[0.2em] text-primary">
            RASA KITCHEN
          </Link>
          <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs">
            Authentic Indian recipes with a modern cinematic presentation, bringing restaurant-quality meals to your home.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white">Experience</h4>
          <ul className="space-y-3 font-body text-sm text-muted-foreground">
            <li><Link href="#about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link href="#menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
            <li><Link href="#recipe" className="hover:text-primary transition-colors">Mastering Korma</Link></li>
            <li><Link href="#reviews" className="hover:text-primary transition-colors">Testimonials</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white">Connect</h4>
          <ul className="space-y-3 font-body text-sm text-muted-foreground">
            <li><Link href="#contact" className="hover:text-primary transition-colors">Reservations</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">Private Dining</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Gift Cards</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Franchise</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Youtube className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Pinterest className="w-5 h-5" />
            </Link>
          </div>
          <div className="pt-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Join the kitchen newsletter</p>
            <div className="flex mt-2">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-2 text-xs w-full focus:outline-none focus:border-primary" />
              <button className="bg-primary text-black px-4 font-bold text-[10px] uppercase tracking-widest">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">
          &copy; 2026 Rasa Kitchen. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-muted-foreground font-body">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
