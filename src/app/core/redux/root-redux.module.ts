import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PokemonReducer, PokemonEffects } from '@app/core/redux/pokemon/pokemon.index';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      pokemonState : PokemonReducer._pokemonReducer
    }),
    EffectsModule.forRoot([
      PokemonEffects
    ]),
    StoreDevtoolsModule.instrument({
      name: 'REDUX STATES - devtools',
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: []
})
export class RootReduxModule { }
