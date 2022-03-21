import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStorageService } from '@app/core/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private authservice:AuthStorageService, private router: Router ){ }

  canActivate(): Observable<boolean> | boolean {
    let login = this.authservice.getUser();
    if ( login.userId != '' && login.userId != undefined) {      
      return true;
    }
    else{
      this.router.navigate(['/home']);
      return false;

    }
  }

}
