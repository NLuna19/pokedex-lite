import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '@core/models/pokemon.models';
import { PokemonControllerService } from '@app/core/controllers/pokemon.controller.service';
import { AuthStorageService } from '@app/core/services/auth.service';
import { Store } from '@ngrx/store';
import { pokemonState } from '@app/core/models/pokemons-state.models';
import { PokemonSelector, PokemonActions } from '@core/redux/pokemon/pokemon.index'
import { user } from '@app/core/models/user.models';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  public pokemons$: Observable<Pokemon[]> = new Observable<Pokemon[]>();
  public items!: Pokemon[];
  public user: user;

  constructor(
    private router: Router,
    private authservice: AuthStorageService,
    private store: Store<{pokemonState: pokemonState}>,
  ) {
    this.user = this.authservice.getUser();
  }

  ngOnInit(): void {    
    this.pokemons$ = this.store.select(PokemonSelector.SelectStateAllData);
    
    this.store.dispatch(PokemonActions.getAllPokemons({ id: this.user?.userId+'' }));
    this.pokemons$.subscribe({
      next: (resp) => {
        this.items = resp.filter(x => x!= null)
      },
      complete: () => {
      }
    })
  }

  select(pokemon: Pokemon){
    console.log('in pokedex: ', pokemon.id);    
    this.store.dispatch(PokemonActions.getOnePokemon({pokemon: pokemon}))
    this.router.navigate(['pokedex/pokemon'])
  }

}
