// tipado de persinajes

export interface Characters {
    id: number
    name: string
    age?: number
    gender?: string
    race?: string
    description?: string
    img: string
    quote?: string
    combat_style?: CombatStyle[]
}

export interface CombatStyle {
    id: number
    name: string
    description?: string
    img?: string
}