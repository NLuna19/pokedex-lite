import { AuthControllerService } from '@core/controllers/auth.mock.controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth:AuthControllerService) { }

  ngOnInit() {
    console.log('home');
    
    this.auth.auth({username: 'trainer',password: 'password'})
    .subscribe(
      resp => console.log('response:' ,resp)      
    )

  }


}
