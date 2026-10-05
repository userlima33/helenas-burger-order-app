export type MenuCategory = "burgers" | "combos" | "sides" | "drinks" | "desserts";

export type MenuProduct = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
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
  { id: "helena", category: "burgers", name: "Helena", description: "Smash 160g, cheddar inglês, bacon crocante, picles e molho da casa no brioche.", price: 36.9, image: "/images/menu/helena.jpg", imageAlt: "Burger Helena com smash, cheddar, bacon crocante e picles", featured: true },
  { id: "classic", category: "burgers", name: "Clássico da Casa", description: "Carne 160g, queijo prato, alface, tomate, cebola roxa e maionese de ervas.", price: 32.9, image: "/images/menu/classico-da-casa.jpg", imageAlt: "Clássico da Casa com queijo, alface, tomate e cebola roxa" },
  { id: "brasa", category: "burgers", name: "Brasa BBQ", description: "Duplo smash, cheddar, cebola caramelizada, bacon e barbecue defumado.", price: 39.9, image: "/images/menu/brasa-bbq.jpg", imageAlt: "Brasa BBQ com dois smashs, cheddar, cebola crispy e barbecue" },
  { id: "veggie", category: "burgers", name: "Horta", description: "Burger de grão-de-bico, queijo, rúcula, tomate confit e maionese verde.", price: 31.9, image: "/images/menu/horta.jpg", imageAlt: "Burger Horta de grão-de-bico com rúcula e tomate confit" },
  { id: "combo-helena", category: "combos", name: "Combo Helena", description: "Burger Helena, fritas individuais e refrigerante lata.", price: 49.9, image: "/images/menu/combo-helena.jpg", imageAlt: "Combo Helena com burger de bacon, fritas e refrigerante", featured: true },
  { id: "combo-duplo", category: "combos", name: "Combo Brasa", description: "Brasa BBQ, fritas rústicas e refrigerante lata.", price: 53.9, image: "/images/menu/combo-brasa.jpg", imageAlt: "Combo Brasa com burger barbecue, fritas rústicas e refrigerante" },
  { id: "combo-casal", category: "combos", name: "Combo a Dois", description: "2 Clássicos da Casa, fritas grandes e 2 refrigerantes.", price: 89.9, image: "/images/menu/combo-a-dois.jpg", imageAlt: "Combo a Dois com dois burgers, fritas grandes e duas bebidas" },
  { id: "fries", category: "sides", name: "Fritas Rústicas", description: "Batatas crocantes com sal de ervas e maionese da casa.", price: 18.9, image: "/images/menu/fritas-rusticas.jpg", imageAlt: "Porção de fritas rústicas com ervas e maionese da casa" },
  { id: "loaded-fries", category: "sides", name: "Fritas Helena", description: "Fritas cobertas com cheddar cremoso, bacon e cebolinha.", price: 27.9, image: "/images/menu/fritas-helena.jpg", imageAlt: "Fritas Helena cobertas com cheddar, bacon e cebolinha", featured: true },
  { id: "onion", category: "sides", name: "Onion Rings", description: "Anéis de cebola empanados e sequinhos, com molho barbecue.", price: 22.9, image: "/images/menu/onion-rings.jpg", imageAlt: "Porção de onion rings crocantes com molho barbecue" },
  { id: "cola", category: "drinks", name: "Refrigerante", description: "Lata 350 ml. Escolha o sabor nas observações.", price: 7.5, image: "/images/menu/refrigerante.jpg", imageAlt: "Refrigerante em lata gelada acompanhado de copo com gelo" },
  { id: "lemonade", category: "drinks", name: "Pink Lemonade", description: "Limão-siciliano, frutas vermelhas e água com gás. 400 ml.", price: 13.9, image: "/images/menu/pink-lemonade.jpg", imageAlt: "Pink lemonade com limão-siciliano, frutas vermelhas e gelo", featured: true },
  { id: "shake", category: "drinks", name: "Milk-shake", description: "Cremoso, 400 ml. Chocolate, morango ou baunilha.", price: 19.9, image: "/images/menu/milk-shake.jpg", imageAlt: "Milk-shake de chocolate com chantilly e calda" },
  { id: "brownie", category: "desserts", name: "Brownie Helena", description: "Brownie quente, sorvete de baunilha e calda de chocolate.", price: 21.9, image: "/images/menu/brownie-helena.jpg", imageAlt: "Brownie Helena com sorvete de baunilha e calda de chocolate", featured: true },
  { id: "churros", category: "desserts", name: "Mini Churros", description: "Oito unidades com açúcar e canela, acompanhadas de doce de leite.", price: 17.9, image: "/images/menu/mini-churros.jpg", imageAlt: "Oito mini churros com açúcar, canela e doce de leite" },
  { id: "pudding", category: "desserts", name: "Pudim da Casa", description: "Pudim de leite condensado, cremoso e com calda de caramelo.", price: 14.9, image: "/images/menu/pudim-da-casa.jpg", imageAlt: "Pudim da Casa cremoso com calda de caramelo" },
];

export const extras = [
  { id: "bacon", name: "Bacon extra", price: 5 },
  { id: "cheese", name: "Queijo extra", price: 4 },
  { id: "patty", name: "Smash extra", price: 10 },
];

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);