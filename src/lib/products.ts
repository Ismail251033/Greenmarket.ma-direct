// ============================================================
// PRODUITS - Ajoutez ou modifiez facilement vos produits ici
// ============================================================

import imgTomatoes from "@/assets/product-tomatoes.jpg";
import imgLettuce from "@/assets/product-lettuce.jpg";
import imgOranges from "@/assets/product-oranges.jpg";
import imgAvocados from "@/assets/product-avocados.jpg";
import imgStrawberries from "@/assets/product-strawberries.jpg";
import imgPeppers from "@/assets/product-peppers.jpg";
import imgBananas from "@/assets/product-bananas.jpg";
import imgCarrots from "@/assets/product-carrots.jpg";

export interface Product {
  id: string;
  name: string;
  price?: string;
  image: string;
  category: "fruit" | "legume";
  popular?: boolean;
}

export const products: Product[] = [
  { id: "1", name: "Tomates fraîches", price: "2,50 €/kg", image: imgTomatoes, category: "legume", popular: true },
  { id: "2", name: "Salade verte", price: "1,20 €", image: imgLettuce, category: "legume" },
  { id: "3", name: "Oranges", price: "3,00 €/kg", image: imgOranges, category: "fruit", popular: true },
  { id: "4", name: "Avocats", price: "1,80 €/pièce", image: imgAvocados, category: "fruit" },
  { id: "5", name: "Fraises", price: "4,50 €/barquette", image: imgStrawberries, category: "fruit", popular: true },
  { id: "6", name: "Poivrons", price: "3,20 €/kg", image: imgPeppers, category: "legume" },
  { id: "7", name: "Bananes", price: "1,90 €/kg", image: imgBananas, category: "fruit", popular: true },
  { id: "8", name: "Carottes", price: "1,50 €/kg", image: imgCarrots, category: "legume" },
];
