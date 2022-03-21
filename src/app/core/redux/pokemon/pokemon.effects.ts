import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { PokemonControllerService } from '@app/core/controllers/pokemon.controller.service'; 
import * as pokemonAction from '@core/redux/pokemon/pokemon.actions';

@Injectable()
export class PokemonEffects {

  getAllPokemons$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(pokemonAction.getAllPokemons),
      mergeMap((action) => {  
        return this.pokemonService.getByUserId(action.id).pipe(
          tap(()=> console.log('effect'),
          ),
          map( response => pokemonAction.GetAllPokemons_Success( {
            pokemons: response
          })),
          catchError( (error) => of( pokemonAction.GetAllPokemons_Fail ({ error: error })))
        )
      })
    )
  });

  getOneActivities$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(pokemonAction.getOnePokemon),
      mergeMap((action) => {  
        return this.pokemonService.pokemon(action.pokemon).pipe(
          map( response => pokemonAction.GetOnePokemon_Success ( {
            pokemon: response
          } ) ),
          catchError( (error) => of( pokemonAction.GetOnePokemon_Fail ({ error: error })))
        )
      })
    )
  });

  insertActivity$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(pokemonAction.insertPokemon),
      mergeMap((action) => {  
        return this.pokemonService.insertPokemon(action.pokemon, action.id).pipe(
          map( response => pokemonAction.InsertPokemon_Success( {
            pokemon: response
          } ) ),
          catchError( (error) => of( pokemonAction.InsertPokemon_Fail ({ error: error })))
        )
      })
    )
  });

  updateActivity$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(pokemonAction.updatePokemon),
      mergeMap((action) => {  
        return this.pokemonService.updatePokemon(action.pokemon).pipe(
          map( response => pokemonAction.UpdatePokemon_Success( {
            pokemon: response
          } ) ),
          catchError( (error) => of( pokemonAction.UpdatePokemon_Fail ({ error: error })))
        )
      })
    )
  });

  constructor( 
    private actions$: Actions, 
    private pokemonService: PokemonControllerService 
  ) {}

}

// Luna Nicolas