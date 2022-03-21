import { post_Pokemon } from './../models/pokemon.models';
import { Pokemon } from '@core/models/pokemon.models';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PokemonControllerService {

    private pokemonInitia:Pokemon = { id: 0, name: '', lvl: 0, evolutionId: 0, abilities: [], type: [], image: '' };

    private url = 'pokedex-api/pokemon';

    private pokemonObservable: BehaviorSubject<Pokemon> = new BehaviorSubject<Pokemon>(this.pokemonInitia);
    
    constructor(private http:HttpService) { }

    getByUserId(userId:string): Observable<Pokemon[]>{
        const _url = `${this.url}?userId=${userId}`;
        return this.http.get<Pokemon[]>(_url);
    }

    insertPokemon(pokemon: Pokemon, id: string): Observable<Pokemon>{
        const body: post_Pokemon = { pokemon: pokemon, userId: id }
        return this.http.post(this.url, body)
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon>{
        return this.http.put(this.url, pokemon)
    }

    get pokemonObserver(): Observable<Pokemon> {
        return this.pokemonObservable.asObservable();   
    }

    pokemon(pokemon: Pokemon): Observable<Pokemon>{
        this.pokemonObservable.next(pokemon);
        return this.pokemonObservable.asObservable(); 
    }


}
    
    
