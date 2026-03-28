import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  useScrollAnimation();

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <ProductsSection />
        <AdvantagesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Index;
