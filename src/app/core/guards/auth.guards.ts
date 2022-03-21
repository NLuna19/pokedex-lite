import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService } from '@app/core/services/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private localstorage:LocalStorageService, private router: Router ){}

  canActivate(): Observable<boolean> | boolean {
    let login = this.localstorage.getUser();
    if ( login.userId != '' ) {
      return true;
    }
    else{
      return false;
    }
  }

}
