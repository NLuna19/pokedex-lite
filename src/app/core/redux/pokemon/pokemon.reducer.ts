import * as pokemonAction from './pokemon.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { pokemonState } from '@app/core/models/pokemons-state.models';
import { Pokemon } from '@app/core/models/pokemon.models';

const emptyPokemon: Pokemon =  { id: 0, name: '', lvl: 0, evolutionId: 0, abilities: [], type: [], image: '' };
const errorEmpty = { };

const initialState: pokemonState = {
  pokemons: [],
  pokemon: emptyPokemon,
  error: errorEmpty,
};
 
export const _pokemonReducer = createReducer( initialState,
  on( pokemonAction.GetAllPokemons_Success, (state, action) => { return {...state, pokemons: action.pokemons } }),
  on( pokemonAction.GetAllPokemons_Fail, (state, action) =>  { return {...state, error: action.error } }  ),
  on( pokemonAction.GetOnePokemon_Success, (state, action) => { return {...state, pokemon: action.pokemon } }  ),
  on( pokemonAction.GetOnePokemon_Fail, (state, action) => { return {...state, error: action.error } } ),
  on( pokemonAction.InsertPokemon_Success, (state, action) => { return {...state, pokemon: action.pokemon } }  ),
  on( pokemonAction.InsertPokemon_Fail, (state, action) => { return {...state, error: action.error } } ),
  on( pokemonAction.UpdatePokemon_Success, (state, action) => { return {...state, pokemon: action.pokemon } }  ),
  on( pokemonAction.UpdatePokemon_Fail, (state, action) => { return {...state, error: action.error } } ),
);
 
export function pokemonReducer( state: pokemonState | undefined, action: Action ) {
  return _pokemonReducer(state, action);
}
