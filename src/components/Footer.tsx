import { SITE_CONFIG } from "@/lib/config";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-background/70 font-body text-sm">
        <div>
          <h3 className="font-display text-lg font-semibold text-background mb-3">🌿 {SITE_CONFIG.name}</h3>
          <p>Fruits et légumes frais, livrés directement chez vous.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-background mb-3">Liens rapides</h4>
          <ul className="space-y-2">
            <li><a href="#accueil" className="hover:text-background transition-colors">Accueil</a></li>
            <li><a href="#produits" className="hover:text-background transition-colors">Produits</a></li>
            <li><a href="#apropos" className="hover:text-background transition-colors">À propos</a></li>
            <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-background mb-3">Contact</h4>
          <p>{SITE_CONFIG.address}</p>
          <p className="mt-1">{SITE_CONFIG.phone}</p>
          <p className="mt-1">{SITE_CONFIG.email}</p>
          <div className="flex gap-4 mt-4">
            <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Facebook</a>
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-6 text-center text-background/50 font-body text-xs">
        © {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
