// Dados de funcionamento da loja (confirmados pela dona em 2026-10-05).
// Conteúdo de catálogo (produtos, preços, adicionais) fica em ./menu.ts.

export const STORE = {
  name: "Helena's Burger",
  whatsapp: "5521986368357", // wa.me exige DDI + DDD sem símbolos
  phoneDisplay: "(21) 98636-8357",
  deliveryFee: 6,
  deliveryRadiusKm: 10,
  openHour: 18,
  closeHour: 23,
  closedDays: [1], // 1 = segunda-feira
};

const dayNames = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

export const isOpenNow = (date = new Date()) => {
  if (STORE.closedDays.includes(date.getDay())) return false;
  const minutes = date.getHours() * 60 + date.getMinutes();
  return minutes >= STORE.openHour * 60 && minutes < STORE.closeHour * 60;
};

export const nextOpeningLabel = (date = new Date()) => {
  for (let offset = 0; offset < 8; offset++) {
    const day = (date.getDay() + offset) % 7;
    if (STORE.closedDays.includes(day)) continue;
    if (offset === 0 && date.getHours() >= STORE.closeHour) continue;
    const when = offset === 0 ? "hoje" : offset === 1 ? "amanhã" : dayNames[day] ?? "novamente";
    return `abre ${when} às ${STORE.openHour}h`;
  }
  return "abra em breve";
};

export const whatsappOrderUrl = (message: string) => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
