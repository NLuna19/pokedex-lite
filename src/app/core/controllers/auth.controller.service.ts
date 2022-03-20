import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '@core/models/login.models';
import { IAuthService } from '@core/interfaces/auth.service.interface';
import { user }from '@core/models/user.models';

@Injectable({
    providedIn: 'root'
})
export class AuthControllerService implements IAuthService {
    
    private url = 'pokedex-api/login';

    constructor(private http:HttpClient) { }

    auth(body:login): Observable<user> {
        return this.http.post(this.url, body) as Observable<user>;
    }

}
