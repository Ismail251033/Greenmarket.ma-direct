import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/config";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Produits", href: "#produits" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#accueil" className="font-display text-xl md:text-2xl font-bold text-primary">
          🌿 {SITE_CONFIG.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <button onClick={() => setIsOpen(true)} className="relative text-foreground/70 hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <Button onClick={() => setIsOpen(true)}>
            Commander maintenant
          </Button>
        </nav>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={() => setIsOpen(true)} className="relative text-foreground/70 hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container flex flex-col gap-4 py-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <Button className="w-full" onClick={() => { setOpen(false); setIsOpen(true); }}>
              Commander maintenant
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
