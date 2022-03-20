import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthControllerService } from '@core/controllers/auth.controller.service';
import { HttpErrorResponse } from '@angular/common/http';
import { user } from '@app/core/models/user.models';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public title: string = 'Pokedex - lite';

  private usernameFormControl: FormControl = new FormControl( '', [ Validators.required ] );
  private passwordFormControl: FormControl = new FormControl( '', [ Validators.required ] );
  private loginObserver$: Observable<user>;

  constructor( 
    private formBuilder: FormBuilder, 
    private authController: AuthControllerService,
    private router: Router
  ){ 
    this.formLogin = this.loginForm();  
    this.loginObserver$ = new Observable<user>();
  }

  ngOnInit(): void { 
  }

  loginForm(): FormGroup {
    return this.formBuilder.group(
      {
        username: this.usernameFormControl,
        password: this.passwordFormControl,
      }
    );
  }

  submit() {
    const username = this.formLogin.get('username')?.value;
    const password = this.formLogin.get('password')?.value;
    this.loginObservable(username, password);
    this.loginSubscribe();

  }

  loginObservable(username:string , password:string){
    this.loginObserver$ = this.authController.auth({username: username, password: password});
  }

  loginSubscribe(){
    this.loginObserver$.subscribe({
      next: (response) => { console.log(response); },
      error: (error:HttpErrorResponse)=> { console.log(error.statusText) },
      complete: () => { console.log('COMPLETE'); this.router.navigate(['/home']) }
    })
  }



}
