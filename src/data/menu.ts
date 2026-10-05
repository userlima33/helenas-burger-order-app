export type MenuCategory = "burgers" | "combos" | "sides" | "drinks" | "desserts";

export type MenuProduct = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  image: "burgers" | "sides" | "drinks";
  featured?: boolean;
};

export const categories: { id: MenuCategory; label: string }[] = [
  { id: "burgers", label: "Hambúrgueres" },
  { id: "combos", label: "Combos" },
  { id: "sides", label: "Porções" },
  { id: "drinks", label: "Bebidas" },
  { id: "desserts", label: "Sobremesas" },
];

export const products: MenuProduct[] = [
  { id: "helena", category: "burgers", name: "Helena", description: "Smash 160g, cheddar inglês, bacon crocante, picles e molho da casa no brioche.", price: 36.9, image: "burgers", featured: true },
  { id: "classic", category: "burgers", name: "Clássico da Casa", description: "Carne 160g, queijo prato, alface, tomate, cebola roxa e maionese de ervas.", price: 32.9, image: "burgers" },
  { id: "brasa", category: "burgers", name: "Brasa BBQ", description: "Duplo smash, cheddar, cebola caramelizada, bacon e barbecue defumado.", price: 39.9, image: "burgers" },
  { id: "veggie", category: "burgers", name: "Horta", description: "Burger de grão-de-bico, queijo, rúcula, tomate confit e maionese verde.", price: 31.9, image: "burgers" },
  { id: "combo-helena", category: "combos", name: "Combo Helena", description: "Burger Helena, fritas individuais e refrigerante lata.", price: 49.9, image: "burgers", featured: true },
  { id: "combo-duplo", category: "combos", name: "Combo Brasa", description: "Brasa BBQ, fritas rústicas e refrigerante lata.", price: 53.9, image: "burgers" },
  { id: "combo-casal", category: "combos", name: "Combo a Dois", description: "2 Clássicos da Casa, fritas grandes e 2 refrigerantes.", price: 89.9, image: "burgers" },
  { id: "fries", category: "sides", name: "Fritas Rústicas", description: "Batatas crocantes com sal de ervas e maionese da casa.", price: 18.9, image: "sides" },
  { id: "loaded-fries", category: "sides", name: "Fritas Helena", description: "Fritas cobertas com cheddar cremoso, bacon e cebolinha.", price: 27.9, image: "sides", featured: true },
  { id: "onion", category: "sides", name: "Onion Rings", description: "Anéis de cebola empanados e sequinhos, com molho barbecue.", price: 22.9, image: "sides" },
  { id: "cola", category: "drinks", name: "Refrigerante", description: "Lata 350 ml. Escolha o sabor nas observações.", price: 7.5, image: "drinks" },
  { id: "lemonade", category: "drinks", name: "Pink Lemonade", description: "Limão-siciliano, frutas vermelhas e água com gás. 400 ml.", price: 13.9, image: "drinks", featured: true },
  { id: "shake", category: "drinks", name: "Milk-shake", description: "Cremoso, 400 ml. Chocolate, morango ou baunilha.", price: 19.9, image: "drinks" },
  { id: "brownie", category: "desserts", name: "Brownie Helena", description: "Brownie quente, sorvete de baunilha e calda de chocolate.", price: 21.9, image: "drinks", featured: true },
  { id: "churros", category: "desserts", name: "Mini Churros", description: "Oito unidades com açúcar e canela, acompanhadas de doce de leite.", price: 17.9, image: "drinks" },
  { id: "pudding", category: "desserts", name: "Pudim da Casa", description: "Pudim de leite condensado, cremoso e com calda de caramelo.", price: 14.9, image: "drinks" },
];

export const extras = [
  { id: "bacon", name: "Bacon extra", price: 5 },
  { id: "cheese", name: "Queijo extra", price: 4 },
  { id: "patty", name: "Smash extra", price: 10 },
];

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);