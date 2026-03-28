import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, clearCart, totalItems } = useCart();

  const buildWhatsAppMessage = () => {
    const lines = items.map((i) => `• ${i.product.name} x${i.quantity}${i.product.price ? ` (${i.product.price})` : ""}`);
    const msg = `Bonjour, je souhaite commander :\n\n${lines.join("\n")}\n\nMerci !`;
    return `https://wa.me/${SITE_CONFIG.phone.replace(/\+/g, "")}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" /> Mon panier ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="font-body text-muted-foreground text-center">Votre panier est vide</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 items-center bg-muted/50 rounded-lg p-3">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-md object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm font-semibold text-foreground truncate">{item.product.name}</h4>
                    {item.product.price && <p className="font-body text-xs text-primary font-medium">{item.product.price}</p>}
                    <div className="flex items-center gap-2 mt-1.5">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-body text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <Button asChild className="w-full py-5 text-base gap-2">
                <a href={buildWhatsAppMessage()} target="_blank" rel="noopener noreferrer">
                  📲 Commander via WhatsApp
                </a>
              </Button>
              <Button variant="outline" onClick={clearCart} className="w-full text-sm">
                Vider le panier
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
