
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Food Critic",
    content: "The Chicken Korma at Rasa Kitchen is a revelation. The balance of cashew richness and saffron aroma is something you rarely find outside of high-end Lucknowi kitchens.",
    rating: 5,
    avatar: "AM"
  },
  {
    name: "Sarah Jenkins",
    role: "Culinary Blogger",
    content: "I've tried hundreds of Indian places, but the cinematic presentation here matched with the depth of flavor is unparalleled. Truly a royal experience.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Vikram Singh",
    role: "Home Chef",
    content: "Authenticity is hard to come by, but Rasa Kitchen nails it. The Saffron Rice was perfectly fluffy and fragrant. My family loved it!",
    rating: 5,
    avatar: "VS"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="font-headline text-4xl md:text-5xl text-center mb-16 font-bold">What Our Guests Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-card border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-primary/20 transition-all">
            <div className="space-y-6">
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-lg italic text-muted-foreground leading-relaxed">"{review.content}"</p>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <Avatar className="w-12 h-12 border border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary">{review.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-sm uppercase tracking-wider">{review.name}</p>
                <p className="text-primary text-[10px] uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
