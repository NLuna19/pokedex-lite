import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { login } from '@core/models/login.models';
import { IAuthService } from '@core/interfaces/auth.service.interface';
import { user }from '@core/models/user.models';

@Injectable({
    providedIn: 'root'
})
export class AuthControllerService implements IAuthService {

    constructor(private http:HttpService) { }

    auth(body:login): Observable<user> {
        return this.http.post('api/auth', body) as Observable<user>;
    }

}
