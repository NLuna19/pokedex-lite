import { user } from './../models/user.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  private _userId: string = 'userId';
  private _name: string = 'username';

  constructor() { }

  getlogin():user {
    let ret:user ={
      userId: localStorage.getItem(this._userId) || '',
      username: localStorage.getItem(this._name) || '',
    }    
    return ret;
  }

  login(user:user):void{
    localStorage.setItem(this._userId,user.userId+'');
    localStorage.setItem(this._name, user.username+'');
  }

  logout(){
    localStorage.removeItem(this._userId);
    localStorage.removeItem(this._name);
  }

}
