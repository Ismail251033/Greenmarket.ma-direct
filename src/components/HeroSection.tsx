import { Button } from "@/components/ui/button";
import { getWhatsAppLink, getPhoneLink } from "@/lib/config";
import heroImage from "@/assets/hero-fruits.jpg";
import { Phone } from "lucide-react";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img src={heroImage} alt="Fruits et légumes frais" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 container text-center px-4">
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up">
        Fruits et légumes frais<br />livrés directement chez vous
      </h1>
      <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Produits sélectionnés avec soin, qualité garantie
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <Button size="lg" asChild className="text-base px-8 py-6">
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            📲 Commander via WhatsApp
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
          <a href={getPhoneLink()}>
            <Phone className="mr-2 h-5 w-5" /> Appeler maintenant
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
