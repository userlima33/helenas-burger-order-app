import { describe, expect, it } from "vitest";

import { STORE, instagramUrl, isOpenNow, nextOpeningLabel, whatsappOrderUrl } from "@/data/store";

// 2026-10-05 foi uma segunda-feira; 2026-10-06 uma terça e 2026-10-11 um domingo.
describe("Funcionamento da loja", () => {
  it("manda o pedido para o WhatsApp da Helena", () => {
    expect(whatsappOrderUrl("Oi")).toBe("https://wa.me/5521986368357?text=Oi");
  });

  it("leva ao perfil verdadeiro do Instagram", () => {
    expect(instagramUrl).toBe("https://instagram.com/hamburgueria_helenasburger");
  });

  it("não abre na segunda, mesmo dentro do horário", () => {
    expect(isOpenNow(new Date(2026, 9, 5, 20, 0))).toBe(false);
  });

  it("abre de terça a domingo, das 18h às 23h", () => {
    expect(isOpenNow(new Date(2026, 9, 6, 18, 0))).toBe(true);
    expect(isOpenNow(new Date(2026, 9, 6, 17, 59))).toBe(false);
    expect(isOpenNow(new Date(2026, 9, 6, 23, 0))).toBe(false);
    expect(isOpenNow(new Date(2026, 9, 11, 22, 59))).toBe(true);
  });

  it("avisa quando reabre", () => {
    expect(nextOpeningLabel(new Date(2026, 9, 5, 12, 0))).toBe("abre amanhã às 18h");
    expect(nextOpeningLabel(new Date(2026, 9, 6, 15, 0))).toBe("abre hoje às 18h");
    expect(nextOpeningLabel(new Date(2026, 9, 6, 23, 30))).toBe("abre amanhã às 18h");
    expect(nextOpeningLabel(new Date(2026, 9, 11, 23, 30))).toBe("abre terça às 18h");
  });

  it("cobra taxa de entrega e raio de 10km", () => {
    expect(STORE.deliveryFee).toBe(6);
    expect(STORE.deliveryRadiusKm).toBe(10);
  });
});
