import { Pokemon } from '@core/models/pokemon.models';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PokemonControllerService {

    private url = 'pokedex-api/pokemon';

    constructor(private http:HttpService) { }

    getByUserId(userId:number): Observable<Pokemon[]>{
        const _url = `${this.url}?userId=${userId}`;
        return this.http.get<Pokemon[]>(_url);
    }

}
    
    
