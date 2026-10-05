import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Check, ChevronRight, Clock3, Instagram, MapPin, Minus, Moon, Plus, ShoppingBag, Sun, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/helena-hero.jpg";
import burgersImage from "@/assets/menu-burgers.jpg";
import sidesImage from "@/assets/menu-sides.jpg";
import drinksImage from "@/assets/menu-drinks-desserts.jpg";
import { categories, extras, formatCurrency, products, type MenuProduct } from "@/data/menu";

type CartItem = { key: string; product: MenuProduct; extras: string[]; notes: string; quantity: number };
type Checkout = { name: string; phone: string; fulfillment: "delivery" | "pickup"; address: string; payment: "Pix" | "Cartão" | "Dinheiro"; change: string };

const images = { burgers: burgersImage, sides: sidesImage, drinks: drinksImage };
const DELIVERY_FEE = 6;

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Helena's Burger — Artesanal de verdade" },
    { name: "description", content: "Peça burgers artesanais, combos, porções e sobremesas da Helena's Burger." },
    { property: "og:title", content: "Helena's Burger — Artesanal de verdade" },
    { property: "og:description", content: "Seu burger favorito, feito na brasa e entregue quentinho." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: MenuPage,
});

function MenuPage() {
  const reduceMotion = useReducedMotion();
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("burgers");
  const [selected, setSelected] = useState<MenuProduct | null>(null);
  const [chosenExtras, setChosenExtras] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [bump, setBump] = useState(false);
  const [form, setForm] = useState<Checkout>({ name: "", phone: "", fulfillment: "delivery", address: "", payment: "Pix", change: "" });

  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  useEffect(() => {
    const saved = window.localStorage.getItem("helenas-cart");
    if (saved) try { setCart(JSON.parse(saved) as CartItem[]); } catch { window.localStorage.removeItem("helenas-cart"); }
  }, []);
  useEffect(() => { window.localStorage.setItem("helenas-cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-25% 0px -65%" });
    categories.forEach(({ id }) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * (item.product.price + extras.filter(e => item.extras.includes(e.id)).reduce((s, e) => s + e.price, 0)), 0);
  const delivery = form.fulfillment === "delivery" ? DELIVERY_FEE : 0;

  const openProduct = (product: MenuProduct) => { setSelected(product); setChosenExtras([]); setNotes(""); setQuantity(1); };
  const addItem = () => {
    if (!selected) return;
    const item: CartItem = { key: `${selected.id}-${Date.now()}`, product: selected, extras: chosenExtras, notes, quantity };
    setCart(current => [...current, item]); setSelected(null); setBump(true); window.setTimeout(() => setBump(false), 450);
  };
  const setItemQuantity = (key: string, next: number) => setCart(current => next < 1 ? current.filter(item => item.key !== key) : current.map(item => item.key === key ? { ...item, quantity: next } : item));
  const finishOrder = () => {
    const lines = cart.map(item => `• ${item.quantity}x ${item.product.name} — ${formatCurrency(item.quantity * item.product.price)}${item.extras.length ? `\n  Adicionais: ${extras.filter(e => item.extras.includes(e.id)).map(e => e.name).join(", ")}` : ""}${item.notes ? `\n  Obs.: ${item.notes}` : ""}`);
    const message = `*Novo pedido — Helena's Burger*\n\n${lines.join("\n")}\n\nSubtotal: ${formatCurrency(subtotal)}\n${form.fulfillment === "delivery" ? `Entrega: ${formatCurrency(delivery)}\nEndereço: ${form.address}` : "Retirada no balcão"}\n*Total: ${formatCurrency(subtotal + delivery)}*\n\nCliente: ${form.name}\nTelefone: ${form.phone}\nPagamento: ${form.payment}${form.payment === "Dinheiro" && form.change ? ` (troco para ${form.change})` : ""}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 sm:px-10">
      <a href="#top" className="font-display text-2xl uppercase text-primary">HB.</a>
      <Button variant="ghost" size="icon" onClick={() => setDark(value => !value)} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"} className="border border-foreground/15 bg-background/30 text-foreground backdrop-blur-md hover:bg-background/50">{dark ? <Sun /> : <Moon />}</Button>
    </header>

    <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden sm:items-center">
      <img src={heroImage} alt="Hambúrguer artesanal Helena com cheddar e bacon" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover object-[68%_center]" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="relative z-10 w-full max-w-7xl px-5 pb-20 sm:px-10 sm:pb-0 lg:px-16">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/55 px-3 py-2 text-xs font-semibold backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-green-500" /> Aberto agora <span className="text-muted-foreground">• até 23h</span></div>
        <p className="mb-2 text-xs font-bold uppercase text-primary sm:text-sm">Artesanal. Suculento. Inesquecível.</p>
        <h1 className="max-w-3xl font-display text-[clamp(4.5rem,13vw,10rem)] leading-[.78] uppercase">Helena's<br/><span className="text-primary">Burger</span></h1>
        <p className="mt-6 max-w-md text-base text-foreground/75 sm:text-lg">Smash burgers feitos na brasa, ingredientes de verdade e aquele sabor que pede bis.</p>
        <Button size="lg" onClick={() => document.getElementById("burgers")?.scrollIntoView()} className="mt-7 h-12 px-6 text-base font-bold">Fazer pedido <ChevronRight /></Button>
      </motion.div>
    </section>

    <nav aria-label="Categorias do cardápio" className="sticky top-0 z-20 border-y border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:justify-center">
        {categories.map(category => <button key={category.id} onClick={() => document.getElementById(category.id)?.scrollIntoView({ behavior: "smooth", block: "start" })} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active === category.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>{category.label}</button>)}
      </div>
    </nav>

    <main className="mx-auto max-w-7xl px-4 pb-28 sm:px-8">
      {categories.map((category, categoryIndex) => {
        const items = products.filter(product => product.category === category.id);
        return <section key={category.id} id={category.id} className="scroll-mt-20 py-14 sm:py-20">
          <div className="mb-7 flex items-end justify-between border-b border-border pb-4">
            <div><span className="text-xs font-bold text-primary">0{categoryIndex + 1}</span><h2 className="font-display text-4xl uppercase sm:text-6xl">{category.label}</h2></div>
            <span className="text-xs text-muted-foreground">{items.length} itens</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product, index) => <motion.article key={product.id} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .07 }} onClick={() => openProduct(product)} className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img src={images[product.image]} alt={product.name} width={1200} height={900} loading="lazy" className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${product.category === "burgers" ? "object-center" : ""}`} />
                {product.featured && <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">Mais pedido</span>}
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 p-5">
                <div className="min-w-0"><h3 className="text-lg font-bold">{product.name}</h3><p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p><p className="mt-4 font-bold text-primary">{formatCurrency(product.price)}</p></div>
                <Button size="icon" aria-label={`Adicionar ${product.name}`} onClick={event => { event.stopPropagation(); openProduct(product); }} className="mt-auto h-11 w-11 rounded-full"><Plus /></Button>
              </div>
            </motion.article>)}
          </div>
        </section>;
      })}
    </main>

    <section className="border-t border-border bg-card px-5 py-16 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div><p className="text-xs font-bold uppercase text-primary">Desde 2021</p><h2 className="mt-2 font-display text-5xl uppercase sm:text-7xl">Feito com alma.<br/>Servido com sabor.</h2><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Na Helena's, cada burger começa com ingredientes selecionados e termina com aquele cuidado de comida feita para quem a gente gosta.</p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary"><Instagram className="h-5 w-5"/> @helenasburger</a></div>
        <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-lg border border-border p-5"><MapPin className="text-primary"/><h3 className="mt-4 font-bold">Onde estamos</h3><p className="mt-2 text-sm text-muted-foreground">Centro, São Paulo — SP<br/>Endereço a confirmar</p></div><div className="rounded-lg border border-border p-5"><Clock3 className="text-primary"/><h3 className="mt-4 font-bold">Horários</h3><p className="mt-2 text-sm text-muted-foreground">Terça a domingo<br/>18h às 23h</p></div></div>
      </div>
    </section>
    <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">© 2026 Helena's Burger • Pedidos e contato pelo WhatsApp</footer>

    <AnimatePresence>{count > 0 && <motion.div initial={{ y: 90 }} animate={{ y: 0, scale: bump ? [1, 1.06, 1] : 1 }} exit={{ y: 90 }} className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-lg"><Button onClick={() => { setCartOpen(true); setStep(0); }} className="h-16 w-full justify-between rounded-lg px-5 shadow-2xl"><span className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground/15 text-sm">{count}</span><ShoppingBag/> Ver carrinho</span><span>{formatCurrency(subtotal)}</span></Button></motion.div>}</AnimatePresence>

    <Dialog open={Boolean(selected)} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="bottom-0 top-auto max-h-[92vh] translate-y-0 overflow-y-auto rounded-t-xl border-border p-0 sm:bottom-auto sm:top-1/2 sm:max-w-2xl sm:-translate-y-1/2 sm:rounded-lg">
        {selected && <><div className="aspect-[16/8] overflow-hidden bg-muted"><img src={images[selected.image]} alt={selected.name} width={1200} height={900} className="h-full w-full object-cover" /></div><div className="p-5 sm:p-7"><DialogTitle className="font-display text-4xl uppercase">{selected.name}</DialogTitle><DialogDescription className="mt-2 leading-relaxed">{selected.description}</DialogDescription>
          <div className="mt-6"><h4 className="font-bold">Quer deixar ainda melhor?</h4><div className="mt-3 space-y-2">{extras.map(extra => <label key={extra.id} className="flex cursor-pointer items-center justify-between rounded-md border border-border p-3"><span className="flex items-center gap-3"><input type="checkbox" checked={chosenExtras.includes(extra.id)} onChange={() => setChosenExtras(current => current.includes(extra.id) ? current.filter(id => id !== extra.id) : [...current, extra.id])} className="h-4 w-4 accent-primary"/>{extra.name}</span><span className="text-sm text-muted-foreground">+ {formatCurrency(extra.price)}</span></label>)}</div></div>
          <label className="mt-5 block text-sm font-bold">Alguma observação?<Textarea value={notes} onChange={event => setNotes(event.target.value)} placeholder="Ex.: sem cebola, ponto da carne..." className="mt-2 font-normal" /></label>
          <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] gap-3"><div className="flex items-center rounded-md border border-border"><Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))} aria-label="Diminuir quantidade"><Minus/></Button><span className="w-8 text-center font-bold">{quantity}</span><Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)} aria-label="Aumentar quantidade"><Plus/></Button></div><Button className="h-full" onClick={addItem}>Adicionar • {formatCurrency(quantity * (selected.price + extras.filter(e => chosenExtras.includes(e.id)).reduce((s, e) => s + e.price, 0)))}</Button></div>
        </div></>}
      </DialogContent>
    </Dialog>

    <Sheet open={cartOpen} onOpenChange={setCartOpen}><SheetContent className="flex w-full flex-col border-border p-0 sm:max-w-md">
      <div className="border-b border-border p-5 pr-12"><SheetTitle className="font-display text-3xl uppercase">{step === 0 ? "Seu pedido" : "Finalizar pedido"}</SheetTitle><SheetDescription>{step === 0 ? `${count} ${count === 1 ? "item" : "itens"} no carrinho` : `Etapa ${step} de 3`}</SheetDescription></div>
      <div className="flex-1 overflow-y-auto p-5">
        {step === 0 && <div className="space-y-4">{cart.map(item => <div key={item.key} className="border-b border-border pb-4"><div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3"><div className="min-w-0"><h3 className="font-bold">{item.product.name}</h3>{item.extras.length > 0 && <p className="mt-1 text-xs text-muted-foreground">{extras.filter(e => item.extras.includes(e.id)).map(e => e.name).join(", ")}</p>}<p className="mt-2 text-sm font-semibold text-primary">{formatCurrency(item.product.price * item.quantity)}</p></div><Button variant="ghost" size="icon" onClick={() => setItemQuantity(item.key, 0)} aria-label={`Remover ${item.product.name}`}><Trash2/></Button></div><div className="mt-2 flex items-center gap-2"><Button variant="outline" size="icon" onClick={() => setItemQuantity(item.key, item.quantity - 1)}><Minus/></Button><span className="w-6 text-center text-sm font-bold">{item.quantity}</span><Button variant="outline" size="icon" onClick={() => setItemQuantity(item.key, item.quantity + 1)}><Plus/></Button></div></div>)}</div>}
        {step === 1 && <div className="space-y-4"><label className="block text-sm font-semibold">Nome<Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Seu nome" className="mt-2 h-11"/></label><label className="block text-sm font-semibold">Telefone<Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(11) 99999-9999" className="mt-2 h-11"/></label><fieldset><legend className="text-sm font-semibold">Como você quer receber?</legend><div className="mt-2 grid grid-cols-2 gap-2">{(["delivery", "pickup"] as const).map(option => <Button key={option} variant={form.fulfillment === option ? "default" : "outline"} onClick={() => setForm({ ...form, fulfillment: option })}>{option === "delivery" ? "Entrega" : "Retirada"}</Button>)}</div></fieldset>{form.fulfillment === "delivery" && <label className="block text-sm font-semibold">Endereço<Input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="Rua, número e complemento" className="mt-2 h-11"/></label>}</div>}
        {step === 2 && <div><h3 className="font-bold">Forma de pagamento</h3><div className="mt-3 space-y-2">{(["Pix", "Cartão", "Dinheiro"] as const).map(payment => <Button key={payment} variant={form.payment === payment ? "default" : "outline"} className="w-full justify-start" onClick={() => setForm({ ...form, payment })}>{form.payment === payment && <Check/>}{payment}</Button>)}</div>{form.payment === "Dinheiro" && <label className="mt-4 block text-sm font-semibold">Troco para<Input value={form.change} onChange={e => setForm({ ...form, change: e.target.value })} placeholder="Ex.: R$ 100,00" className="mt-2"/></label>}</div>}
        {step === 3 && <div><div className="rounded-lg border border-border bg-secondary/50 p-4"><h3 className="font-bold">Resumo</h3><div className="mt-4 space-y-3">{cart.map(item => <div key={item.key} className="flex justify-between gap-4 text-sm"><span>{item.quantity}x {item.product.name}</span><span>{formatCurrency(item.product.price * item.quantity)}</span></div>)}</div><div className="mt-4 space-y-2 border-t border-border pt-4 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div><div className="flex justify-between"><span>Entrega</span><span>{delivery ? formatCurrency(delivery) : "Grátis"}</span></div><div className="flex justify-between text-lg font-bold"><span>Total</span><span className="text-primary">{formatCurrency(subtotal + delivery)}</span></div></div></div><p className="mt-4 text-xs leading-relaxed text-muted-foreground">Ao continuar, seu pedido será preparado em uma mensagem e o WhatsApp será aberto para o envio.</p></div>}
      </div>
      <div className="border-t border-border bg-background p-5"><div className="mb-4 flex justify-between text-sm"><span>Total</span><strong>{formatCurrency(subtotal + delivery)}</strong></div>{step === 0 ? <Button className="h-12 w-full" disabled={!cart.length} onClick={() => setStep(1)}>Ir para checkout <ChevronRight/></Button> : <div className="grid grid-cols-[auto_1fr] gap-2"><Button variant="outline" className="h-12" onClick={() => setStep(s => s - 1)}>Voltar</Button><Button className="h-12" disabled={step === 1 && (!form.name || !form.phone || (form.fulfillment === "delivery" && !form.address))} onClick={() => step < 3 ? setStep(s => s + 1) : finishOrder()}>{step === 3 ? "Enviar no WhatsApp" : "Continuar"}</Button></div>}</div>
    </SheetContent></Sheet>
  </div>;
}
