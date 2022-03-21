import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthStorageService } from '@app/core/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthGuard } from '@app/core/guards/auth.guards';

@Component({
  selector: 'shared-title',
  templateUrl: './shared-title.component.html',
  styleUrls: ['./shared-title.component.scss']
})
export class SharedTitleComponent implements OnInit {
  
  @Input() title!: string;
  public loggedObservable:Observable<boolean>;
  public logged:boolean = false

  constructor(private authservice:AuthStorageService, private router:Router) { 
    this.loggedObservable = authservice.isLogged();
  }

  ngOnInit(): void {
    this.loggedObservable.subscribe(
      resp => this.logged = resp
    )
  }

  logout(){
    this.authservice.logout();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
