import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
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
  );
};

export default Index;
