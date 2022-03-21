import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { user } from '../models/user.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private loggedObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  private _userId: string = 'userId';
  private _name: string = 'username';

  constructor(private router: Router) { 
  }

  getUser():user {
    let ret:user ={
      userId: localStorage.getItem(this._userId) || undefined,
      username: localStorage.getItem(this._name) || undefined,
    }
    return ret;
  }

  isLogged(): Observable<boolean>{
    return this.loggedObservable.asObservable();   
  }

  login(user:user):void{
    localStorage.setItem(this._userId,user.userId+'');
    localStorage.setItem(this._name, user.username+'');
    this.loggedObservable.next(true);
  }

  logout(){
    localStorage.removeItem(this._userId);
    localStorage.removeItem(this._name);
    this.loggedObservable.next(false);
    this.router.navigate(['/home'])
  }

}
