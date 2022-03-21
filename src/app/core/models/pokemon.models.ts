export interface Pokemons {
    pokemons: Pokemon[]
}

export interface Pokemon {
    id: number,
    name: string,
    lvl: number | null,
    evolutionId: number,
    abilities: Pokemon_abilities[],
    type: string[],
    image?: string,
}

export interface Pokemon_abilities {
    name: string,
    description: string,
}

export interface post_Pokemon{
    pokemon: Pokemon,
    userId: string,
}