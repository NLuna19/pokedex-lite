import { user } from '@core/models/user.models';
import { login } from "@core/models/login.models";
import { Observable } from "rxjs";

export interface IAuthService{
    auth(body :login): Observable<user>;
}
