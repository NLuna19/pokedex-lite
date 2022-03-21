import { createAction, props } from '@ngrx/store';
import { Pokemon, post_Pokemon } from '@core/models/pokemon.models'


export enum type {
    GET_ALL_POKEMONS = '[POKEMONS] Get All Pokemons',
    GET_ALL_POKEMONS_FAIL = '[POKEMONS] Get All Pokemons Fail',
    GET_ALL_POKEMONS_SUCCESS = '[POKEMONS] Get All Pokemons Success',

    GET_ONE_POKEMON = '[POKEMONS] Get One Pokemon',
    GET_ONE_POKEMON_FAIL = '[POKEMONS] Get One Pokemon Fail',
    GET_ONE_POKEMON_SUCCESS = '[POKEMONS] Get One Pokemon Success',

    INSERT_POKEMON = '[POKEMONS] Insert Pokemon',
    INSERT_POKEMON_FAIL = '[POKEMONS] Insert Pokemon Fail',
    INSERT_POKEMON_SUCCESS = '[POKEMONS] Insert Pokemon Success',

    UPDATE_POKEMON = '[POKEMONS] Update Pokemon',    
    UPDATE_POKEMON_FAIL = '[POKEMONS] Update Pokemon Fail',
    UPDATE_POKEMON_SUCCESS = '[POKEMONS] Update Pokemon Success',
}

export const getAllPokemons = createAction(type.GET_ALL_POKEMONS, props<{ id: string }>());
export const GetAllPokemons_Fail= createAction(type.GET_ALL_POKEMONS_FAIL, props<{ error: any }>());
export const GetAllPokemons_Success = createAction(type.GET_ALL_POKEMONS_SUCCESS, props<{ pokemons: Pokemon[] }>());

export const getOnePokemon = createAction(type.GET_ONE_POKEMON, props<{pokemon: Pokemon}>());
export const GetOnePokemon_Fail= createAction(type.GET_ONE_POKEMON_FAIL, props<{ error: any }>());
export const GetOnePokemon_Success = createAction(type.GET_ONE_POKEMON_SUCCESS, props<{ pokemon: Pokemon }>());

export const insertPokemon = createAction(type.INSERT_POKEMON, props<{pokemon: Pokemon, id: string}>());
export const InsertPokemon_Fail = createAction(type.INSERT_POKEMON_FAIL , props<{ error: any }>());
export const InsertPokemon_Success = createAction(type.INSERT_POKEMON_SUCCESS , props<{ pokemon: Pokemon }>());

export const updatePokemon = createAction(type.UPDATE_POKEMON, props<{pokemon: Pokemon}>());
export const UpdatePokemon_Fail = createAction(type.UPDATE_POKEMON_FAIL, props<{ error: any }>());
export const UpdatePokemon_Success = createAction(type.UPDATE_POKEMON_SUCCESS, props<{ pokemon: Pokemon }>());
