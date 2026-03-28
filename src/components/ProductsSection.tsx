import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

const filters = [
  { label: "Tous", value: "all" },
  { label: "🍎 Fruits", value: "fruit" },
  { label: "🥬 Légumes", value: "legume" },
] as const;

const ProductsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  const popular = products.filter((p) => p.popular);
  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="produits" className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
      <div className="container px-4">
        {/* Popular */}
        <div className="scroll-animate mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            ⭐ Produits populaires
          </h2>
          <p className="font-body text-muted-foreground text-center mb-10">Les favoris de nos clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {popular.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* All products */}
        <div className="scroll-animate">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Nos produits
          </h2>
          <p className="font-body text-muted-foreground text-center mb-8">Fruits et légumes frais du jour</p>

          <div className="flex justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`font-body text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-foreground/70 border border-border hover:border-primary/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
