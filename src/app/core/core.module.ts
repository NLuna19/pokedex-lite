import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { PokemonService } from './services/pokemon.service';

const service = [ AuthService, HttpService, PokemonService ]
const modules = [];
const components = [];

@NgModule({
  providers: [...service],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [

  ],
  declarations: [

  ]
})
export class CoreModule { }
