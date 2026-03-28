import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/config";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Produits", href: "#produits" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

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
          <Button asChild>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Commander maintenant
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
            <Button asChild className="w-full">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Commander maintenant
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
