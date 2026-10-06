// Dados de funcionamento da loja (confirmados pela dona em 2026-10-05).
// Conteúdo de catálogo (produtos, preços, adicionais) fica em ./menu.ts.

export const STORE = {
  name: "Helena's Burger",
  whatsapp: "5521986368357", // wa.me exige DDI + DDD sem símbolos
  phoneDisplay: "(21) 98636-8357",
  instagram: "hamburgueria_helenasburger",
  deliveryFee: 6,
  deliveryRadiusKm: 10,
  openHour: 18,
  closeHour: 23,
  closedDays: [1], // 1 = segunda-feira
};

const dayNames = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const weekdayKeys = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Horário da loja sempre calculado no fuso America/Sao_Paulo, não no relógio do visitante.
const storeTime = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find(part => part.type === type)?.value ?? "";
  return { day: weekdayKeys.indexOf(get("weekday")), minutes: Number(get("hour")) * 60 + Number(get("minute")) };
};

export const isOpenNow = (date = new Date()) => {
  const { day, minutes } = storeTime(date);
  if (STORE.closedDays.includes(day)) return false;
  return minutes >= STORE.openHour * 60 && minutes < STORE.closeHour * 60;
};

export const nextOpeningLabel = (date = new Date()) => {
  const { day, minutes } = storeTime(date);
  for (let offset = 0; offset < 8; offset++) {
    const nextDay = (day + offset) % 7;
    if (STORE.closedDays.includes(nextDay)) continue;
    if (offset === 0 && minutes >= STORE.closeHour * 60) continue;
    const when = offset === 0 ? "hoje" : offset === 1 ? "amanhã" : dayNames[nextDay] ?? "novamente";
    return `abrimos ${when} às ${STORE.openHour}h`;
  }
  return "abrimos em breve";
};

export const whatsappOrderUrl = (message: string) => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;

export const instagramUrl = `https://instagram.com/${STORE.instagram}`;
