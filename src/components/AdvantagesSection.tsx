import { Leaf, Truck, BadgeDollarSign, ShieldCheck } from "lucide-react";

const advantages = [
  { icon: Leaf, title: "Produits frais", desc: "Récoltés et livrés dans les plus brefs délais pour une fraîcheur maximale." },
  { icon: Truck, title: "Livraison rapide", desc: "Recevez vos commandes rapidement, directement à votre porte." },
  { icon: BadgeDollarSign, title: "Prix abordables", desc: "Des tarifs compétitifs pour des produits de qualité supérieure." },
  { icon: ShieldCheck, title: "Qualité garantie", desc: "Chaque produit est soigneusement sélectionné et contrôlé." },
];

const AdvantagesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-4">
      <div className="scroll-animate text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Pourquoi nous choisir ?</h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Nous mettons tout en œuvre pour vous offrir le meilleur de la nature.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {advantages.map((a, i) => (
          <div key={i} className="scroll-animate bg-card rounded-lg p-6 md:p-8 text-center border border-border hover:shadow-lg transition-shadow duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground mb-5">
              <a.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{a.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
