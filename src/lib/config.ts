// ============================================================
// CONFIGURATION FACILE À MODIFIER
// Modifiez les valeurs ci-dessous pour personnaliser votre site
// ============================================================

export const SITE_CONFIG = {
  name: "Green Market",
  phone: "+33612345678",
  whatsappMessage: "Bonjour, je souhaite passer une commande de fruits et légumes frais !",
  email: "contact@fraichezvous.com",
  address: "123 Rue du Marché, 75001 Paris",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
};

export const getWhatsAppLink = (productName?: string) => {
  const message = productName
    ? `Bonjour, je souhaite commander : ${productName}`
    : SITE_CONFIG.whatsappMessage;
  return `https://wa.me/${SITE_CONFIG.phone.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;
};

export const getPhoneLink = () => `tel:${SITE_CONFIG.phone}`;
