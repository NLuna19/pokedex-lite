import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@core/models/pokemon.models';
import { PokemonControllerService } from '@app/core/controllers/pokemon.controller.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  public pokemons$: Observable<Pokemon[]> = new Observable<Pokemon[]>();
  public items!: Pokemon[];

  constructor(private pokemonService: PokemonControllerService) {
    this.pokemons$ = this.pokemonService.getByUserId(1); 
  }

  ngOnInit(): void {    
    this.pokemons$.subscribe({
      next: (resp) => {
        this.items = resp.filter(x => x!= null)
      },
      complete: () => {
      }
    })
  }

  select(id:number){
    console.log('in pokedex: ', id);
    
  }

}
