# Helena's Digital Menu - https://helenas-burger-order-app.lovable.app/

Crie um site de cardápio digital e pedidos online para a hamburgueria "Helena's Burger", em português do Brasil, mobile-first, com visual moderno, premium e apetitoso.

## Estrutura
1. Hero fullscreen: nome da loja, slogan curto e chamativo, botão "Fazer pedido" e indicador de status "Aberto agora / Fechado" com horário de funcionamento.
2. Barra de categorias fixa (sticky), com scroll horizontal no mobile e destaque automático da categoria visível: [Hambúrgueres, Combos, Porções, Bebidas, Sobremesas].
3. Lista de produtos por categoria, em cards com foto grande, nome, descrição, preço e botão "+". Ao clicar abre um modal/bottom sheet com detalhes, adicionais (ex.: bacon extra, queijo extra), observações e seletor de quantidade.
4. Carrinho flutuante (botão fixo no rodapé com contador e total) que abre um drawer lateral: editar itens, remover, ver subtotal e taxa de entrega.
5. Checkout em etapas: dados do cliente (nome, telefone), entrega ou retirada, endereço, forma de pagamento (Pix, cartão, dinheiro com troco) e resumo. Ao finalizar, gerar a mensagem do pedido formatada e abrir o WhatsApp da loja [número] com o pedido pronto.
6. Seção "Sobre nós" curta, com endereço, mapa, horários e redes sociais (Instagram).
7. Rodapé simples com contato.

## Visual e design
- Estilo moderno e gastronômico: fundo escuro elegante (preto/grafite) com cores quentes de destaque [laranja queimado / amarelo mostarda / vermelho ketchup]. Ajuste à identidade da marca.
- Tipografia: títulos com fonte display marcante (Bebas Neue, Anton ou Playfair Display) e textos com Inter ou Poppins. Hierarquia clara e bom espaçamento.
- Fotos grandes dos produtos com cantos arredondados, sombras suaves e leve efeito glassmorphism nos elementos flutuantes.
- Modo claro/escuro opcional.

## Animações
- Animação de entrada no hero (texto surgindo com fade + slide, imagem com leve parallax).
- Cards de produto aparecendo com fade-in e stagger ao rolar a página.
- Hover/tap nos cards com leve zoom na imagem e elevação.
- Botão "+" com microinteração, e o carrinho com animação de "bounce" quando um item é adicionado.
- Transições suaves ao abrir modais, drawer e trocar de categoria.
- Skeleton loading nas imagens.
- Use Framer Motion e respeite prefers-reduced-motion.

## Técnico
- React + Tailwind CSS + shadcn/ui, componentes reutilizáveis.
- Dados do cardápio em um arquivo JSON/TypeScript separado, fácil de editar.
- Estado do carrinho persistido (localStorage).
- Totalmente responsivo, com ótima performance e acessibilidade (contraste, foco, labels).
- Imagens com lazy loading.

## Conteúdo de exemplo
Crie ao menos 4 categorias com 3 a 5 produtos cada, com nomes, descrições e preços realistas de hamburgueria artesanal, e use imagens placeholder de alta qualidade até eu substituir pelas reais.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/45341cb6-63d6-46b2-9792-b74af584f08a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
