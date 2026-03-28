import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fatima B.",
    rating: 5,
    text: "Des fruits et légumes d'une fraîcheur exceptionnelle ! Je commande chaque semaine et je ne suis jamais déçue.",
    avatar: "FB",
  },
  {
    name: "Karim M.",
    rating: 5,
    text: "Livraison rapide via WhatsApp, produits bio de qualité. Green Market est devenu mon fournisseur préféré.",
    avatar: "KM",
  },
  {
    name: "Amina S.",
    rating: 4,
    text: "Excellent rapport qualité-prix. Les tomates et les herbes aromatiques sont incroyables, on sent la différence !",
    avatar: "AS",
  },
  {
    name: "Youssef L.",
    rating: 5,
    text: "Service client au top et produits toujours frais. Je recommande à 100% pour une alimentation saine.",
    avatar: "YL",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 scroll-fade">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Ce que disent nos <span className="text-primary">clients</span>
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-xl mx-auto">
            Découvrez les avis de ceux qui nous font confiance au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="scroll-fade bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-display font-bold text-sm flex items-center justify-center shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-card-foreground text-sm">{t.name}</p>
                  <Stars count={t.rating} />
                </div>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
