import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { login } from '@core/models/login.models';
import { IAuthService } from '@core/interfaces/auth.service.interface';
import { user }from '@core/models/user.models';

@Injectable({
    providedIn: 'root'
})
export class AuthControllerService implements IAuthService {

    auth(body:login): Observable<user> {
        let user: user = {};
        if (body.username == 'trainer' && body.password == 'password') {
             user = { userId: 1, username: 'trainer' }
        }
        if (body.username == 'master' && body.password == 'password') {
            user = { userId: 1, username: 'trainer' }
        }
        return of(
            user
        );
    }

}
