import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public router:Router) {
  }

  ngOnInit() {

  }

  login(){
    this.router.navigate(['/login']);
  }

  pokedex(){
    this.router.navigate(['/pokedex']);
  }

  pokemon(){
    this.router.navigate(['pokedex/pokemon'])
  }

}
