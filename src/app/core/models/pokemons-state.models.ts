import { Pokemon } from '@core/models/pokemon.models';

export interface pokemonState {
    pokemons: Pokemon[],
    pokemon: Pokemon,
    error: {  },
}