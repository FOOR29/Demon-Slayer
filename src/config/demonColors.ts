// colors for cards
export const CARD_BG_BY_ID: Record<number, string> = {
    1: "from-red-600 to-red-800",
    2: "from-emerald-500 to-emerald-700",
    4: "from-indigo-500 to-indigo-700",
    6: "from-amber-500 to-amber-700",
    7: "from-fuchsia-500 to-fuchsia-700",
    8: "from-sky-500 to-sky-700",
}

export const getCardGradientById = (id: number) =>
    CARD_BG_BY_ID[id] || "from-red-600 to-red-800"
