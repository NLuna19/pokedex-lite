import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '@core/models/pokemon.models';
import { PokemonControllerService } from '@app/core/controllers/pokemon.controller.service';
import { AuthStorageService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  public pokemons$: Observable<Pokemon[]> = new Observable<Pokemon[]>();
  public items!: Pokemon[];

  constructor(private pokemonService: PokemonControllerService, private router: Router, private authservice: AuthStorageService) {
    const user = this.authservice.getUser();
    this.pokemons$ = this.pokemonService.getByUserId(user.userId as number); 
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
    this.router.navigate(['pokedex/pokemon'])
  }

}
