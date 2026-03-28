import { Button } from "@/components/ui/button";
import { getWhatsAppLink, getPhoneLink, SITE_CONFIG } from "@/lib/config";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-background">
    <div className="container px-4">
      <div className="scroll-animate text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Passez votre commande</h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Contactez-nous directement pour passer votre commande ou poser vos questions.
        </p>
      </div>

      <div className="scroll-animate max-w-lg mx-auto space-y-4">
        <Button size="lg" asChild className="w-full text-base py-6 gap-3">
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" /> Commander via WhatsApp
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="w-full text-base py-6 gap-3">
          <a href={getPhoneLink()}>
            <Phone className="w-5 h-5" /> Appeler : {SITE_CONFIG.phone}
          </a>
        </Button>
      </div>

      <div className="scroll-animate mt-14 flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground font-body text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" /> {SITE_CONFIG.address}
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" /> {SITE_CONFIG.email}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
