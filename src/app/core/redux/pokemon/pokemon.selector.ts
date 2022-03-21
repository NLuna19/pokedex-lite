import { createSelector } from "@ngrx/store";
import { pokemonState } from '@core/models/pokemons-state.models';

export interface appState {
    pokemonState: pokemonState
}

const selectFeature = (state: appState) => state.pokemonState

const selectAllData = (state: pokemonState) => state.pokemons;
const selectOneData = (state: pokemonState) => state.pokemon;
const selectErrorActivity = (state: pokemonState) => state.error;

const SelectStateAllData = createSelector(
    (state: appState) => state.pokemonState, selectAllData
);
const SelectStateOneData = createSelector(
    (state: appState) => state.pokemonState, selectOneData
);
const SelectStateError = createSelector(
    (state: appState) => state.pokemonState, selectErrorActivity
);

export { 
    SelectStateAllData, 
    SelectStateOneData, 
    SelectStateError,
};
