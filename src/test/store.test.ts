import { describe, expect, it } from "vitest";

import { STORE, instagramUrl, isOpenNow, nextOpeningLabel, whatsappOrderUrl } from "@/data/store";

// A loja funciona no fuso America/Sao_Paulo (UTC-3). Os horários abaixo são UTC:
// 2026-10-05 foi uma segunda-feira; 2026-10-06 uma terça e 2026-10-11 um domingo.
describe("Funcionamento da loja", () => {
  it("manda o pedido para o WhatsApp da Helena", () => {
    expect(whatsappOrderUrl("Oi")).toBe("https://wa.me/5521986368357?text=Oi");
  });

  it("leva ao perfil verdadeiro do Instagram", () => {
    expect(instagramUrl).toBe("https://instagram.com/hamburgueria_helenasburger");
  });

  it("não abre na segunda, mesmo dentro do horário", () => {
    // Segunda 20h em São Paulo = 23h UTC
    expect(isOpenNow(new Date("2026-10-05T23:00:00Z"))).toBe(false);
  });

  it("abre de terça a domingo, das 18h às 23h (horário de São Paulo)", () => {
    expect(isOpenNow(new Date("2026-10-06T21:00:00Z"))).toBe(true); // terça 18h SP
    expect(isOpenNow(new Date("2026-10-06T20:59:00Z"))).toBe(false); // terça 17h59 SP
    expect(isOpenNow(new Date("2026-10-07T02:00:00Z"))).toBe(false); // terça 23h SP
    expect(isOpenNow(new Date("2026-10-12T01:59:00Z"))).toBe(true); // domingo 22h59 SP
  });

  it("avisa quando reabre", () => {
    expect(nextOpeningLabel(new Date("2026-10-05T15:00:00Z"))).toBe("abrimos amanhã às 18h"); // segunda 12h SP
    expect(nextOpeningLabel(new Date("2026-10-06T18:00:00Z"))).toBe("abrimos hoje às 18h"); // terça 15h SP
    expect(nextOpeningLabel(new Date("2026-10-07T02:30:00Z"))).toBe("abrimos amanhã às 18h"); // terça 23h30 SP
    expect(nextOpeningLabel(new Date("2026-10-12T02:30:00Z"))).toBe("abrimos terça às 18h"); // domingo 23h30 SP
  });

  it("cobra taxa de entrega e raio de 10km", () => {
    expect(STORE.deliveryFee).toBe(6);
    expect(STORE.deliveryRadiusKm).toBe(10);
  });
});
