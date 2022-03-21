import { Pokemon, Pokemon_abilities } from '@core/models/pokemon.models';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { pokemonState } from '@app/core/models/pokemons-state.models';
import { PokemonSelector } from '@core/redux/pokemon/pokemon.index'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  private pokemon$ : Observable<Pokemon>;
  public header?: {};
  public abilities?: Pokemon_abilities[];
  public image: string;
  public evolution: number

  constructor(private store: Store<{pokemonState: pokemonState}>) {
    this.pokemon$ = this.store.select(PokemonSelector.SelectStateOneData);
    this.image = '';
    this.evolution = 0;
  }

  ngOnInit(): void {
    this.pokemon$.subscribe({
      next: resp => {
        this.header = {
          type : resp.type,
          name: resp.name,
          lvl: resp.lvl
        };
        this.image = resp.image || '';
        this.abilities = resp.abilities,
        this.evolution = resp.evolutionId
      }
    })
  }

}
