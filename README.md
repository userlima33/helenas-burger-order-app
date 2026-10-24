# 🍔 Helena's Burger — Cardápio Digital

Site de cardápio digital e pedidos online para a **Helena's Burger**, hamburgueria artesanal de Nova Iguaçu/RJ, desenvolvido como **atividade de extensão** da Universidade Iguaçu (UNIG).

🔗 **Site no ar:** https://helenas-burger-order-app.lovable.app/

---

## 📌 Sobre o projeto

A Helena's Burger é um microempreendimento local que vende smash burgers, combos, porções, bebidas e sobremesas. O site dá ao negócio um canal digital próprio para apresentar o cardápio e receber pedidos, gerando uma mensagem formatada que é enviada direto ao WhatsApp da loja.

## 🤝 Parceiro beneficiado

| | |
|---|---|
| **Parceiro** | Helena's Burger (desde 2021) |
| **Endereço** | Estr. de Adrianópolis, 2601 — Loja A, Jardim Corumbá, Nova Iguaçu — RJ |
| **Funcionamento** | Terça a domingo, 18h às 23h |
| **Instagram** | [@hamburgueria_helenasburger](https://instagram.com/hamburgueria_helenasburger) |

## 🌍 ODS da ONU atendidas

- **ODS 8 — Trabalho Decente e Crescimento Econômico:** digitalização de um microempreendedor local.
- **ODS 9 — Indústria, Inovação e Infraestrutura:** uso de IA de desenvolvimento para gerar uma solução acessível.
- **ODS 10 — Redução das Desigualdades:** acesso à tecnologia por quem não teria recursos para contratar um desenvolvimento profissional.

## ✨ Funcionalidades

- Página inicial com indicador de **Aberto agora / Fechado**
- Cardápio por categorias (Hambúrgueres, Combos, Porções, Bebidas e Sobremesas) com barra fixa de navegação
- Cards de produto com foto, descrição, preço e destaque "Mais pedido"
- Carrinho com edição de itens, subtotal e taxa de entrega
- Checkout em etapas (entrega ou retirada, endereço, Pix, cartão ou dinheiro com troco)
- Envio do pedido formatado para o **WhatsApp** da loja
- Seção "Sobre nós" com endereço, horários e área de entrega (até 10 km)
- Layout responsivo, mobile-first, com modo claro/escuro

## 🛠️ Ferramentas e tecnologias

- **IA de desenvolvimento:** [Lovable](https://lovable.dev)
- **Front-end:** React, TypeScript, Tailwind CSS e shadcn/ui
- **Animações:** Framer Motion
- **Build:** Vite
- **Versionamento:** Git e GitHub
- **Hospedagem:** Lovable (link acima)

## 👥 Equipe

- Brunna Moreira
- Pedro Lins
- Caíque Lima

**Curso:** Análise e Desenvolvimento de Sistemas — Universidade Iguaçu (UNIG)
**Disciplina:** Tema Integrador I — Gestão de Carreiras
**Atividade:** Autoconhecimento e carreira (Extensão) — Prof. Hamilcar Silva

## 🚀 Como rodar localmente

Requisitos: [Node.js](https://nodejs.org) instalado.

```bash
git clone https://github.com/userlima33/helenas-burger-order-app.git
cd helenas-burger-order-app
npm i
npm run dev
```

## 📝 Prompt usado na geração com IA

O prompt estruturado usado no Lovable, baseado nos requisitos levantados com o parceiro, descreve a estrutura das páginas, o visual (fundo escuro com cores quentes), as animações e os requisitos técnicos do site.

Crie um site de cardápio digital e pedidos online para a hamburgueria "Helena's Burger", em português do Brasil, mobile-first, com visual moderno, premium e apetitoso.

Estrutura
Hero fullscreen: nome da loja, slogan curto e chamativo, botão "Fazer pedido" e indicador de status "Aberto agora / Fechado" com horário de funcionamento.
Barra de categorias fixa (sticky), com scroll horizontal no mobile e destaque automático da categoria visível: [Hambúrgueres, Combos, Porções, Bebidas, Sobremesas].
Lista de produtos por categoria, em cards com foto grande, nome, descrição, preço e botão "+". Ao clicar abre um modal/bottom sheet com detalhes, adicionais (ex.: bacon extra, queijo extra), observações e seletor de quantidade.
Carrinho flutuante (botão fixo no rodapé com contador e total) que abre um drawer lateral: editar itens, remover, ver subtotal e taxa de entrega.
Checkout em etapas: dados do cliente (nome, telefone), entrega ou retirada, endereço, forma de pagamento (Pix, cartão, dinheiro com troco) e resumo. Ao finalizar, gerar a mensagem do pedido formatada e abrir o WhatsApp da loja [número] com o pedido pronto.
Seção "Sobre nós" curta, com endereço, mapa, horários e redes sociais (Instagram).
Rodapé simples com contato.
Visual e design
Estilo moderno e gastronômico: fundo escuro elegante (preto/grafite) com cores quentes de destaque [laranja queimado / amarelo mostarda / vermelho ketchup]. Ajuste à identidade da marca.
Tipografia: títulos com fonte display marcante (Bebas Neue, Anton ou Playfair Display) e textos com Inter ou Poppins. Hierarquia clara e bom espaçamento.
Fotos grandes dos produtos com cantos arredondados, sombras suaves e leve efeito glassmorphism nos elementos flutuantes.
Modo claro/escuro opcional.
Animações
Animação de entrada no hero (texto surgindo com fade + slide, imagem com leve parallax).
Cards de produto aparecendo com fade-in e stagger ao rolar a página.
Hover/tap nos cards com leve zoom na imagem e elevação.
Botão "+" com microinteração, e o carrinho com animação de "bounce" quando um item é adicionado.
Transições suaves ao abrir modais, drawer e trocar de categoria.
Skeleton loading nas imagens.
Use Framer Motion e respeite prefers-reduced-motion.
Técnico
React + Tailwind CSS + shadcn/ui, componentes reutilizáveis.
Dados do cardápio em um arquivo JSON/TypeScript separado, fácil de editar.
Estado do carrinho persistido (localStorage).
Totalmente responsivo, com ótima performance e acessibilidade (contraste, foco, labels).
Imagens com lazy loading.
Conteúdo de exemplo
Crie ao menos 4 categorias com 3 a 5 produtos cada, com nomes, descrições e preços realistas de hamburgueria artesanal, e use imagens placeholder de alta qualidade até eu substituir pelas reais.

This project was built with Lovable.

Build with Lovable
Continue developing this project in the Lovable editor.

Ship faster: describe what you want to build and Lovable handles the code.
Stay in sync: every change made in Lovable is committed straight to this repository.
Full ownership: this code is yours. Push to main on GitHub and your changes sync back into Lovable, ready for your next prompt.

Projeto desenvolvido com fins de extensão universitária, em benefício da comunidade local.
