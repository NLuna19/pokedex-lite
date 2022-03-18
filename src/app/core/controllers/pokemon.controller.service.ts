import { Pokemon } from '@core/models/pokemon.models';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PokemonControllerService {

    private url: string = 'https://testing.certant.com/pokedex-api/pokemon';

    constructor(private http:HttpService) { }

    getByUserId(id:number): Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(this.url, id);
    }

}
    
    
