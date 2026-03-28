import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/config";
import type { Product } from "@/lib/products";

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="aspect-square overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={640}
        height={640}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-4 md:p-5">
      <h3 className="font-display text-lg font-semibold text-card-foreground">{product.name}</h3>
      {product.price && <p className="font-body text-primary font-semibold mt-1">{product.price}</p>}
      <Button asChild size="sm" className="w-full mt-3">
        <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
          👉 Commander
        </a>
      </Button>
    </div>
  </div>
);

export default ProductCard;
