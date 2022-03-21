import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from '@features/public/public.component';
import { SharedModule } from '@app/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PokedexComponent } from '@features/public/pages/pokedex/pokedex.component';
import { LoginComponent } from '@features/public/pages/login/login.component';
import { HomeComponent } from '@features/public/pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component'
import { TitleComponent } from '../public/components/title/title.component';
import { InlinePokemonInfoComponent } from '@features/public/components/inline-pokemon-info/inline-pokemon-info.component';
import { InlineSimpleOneComponent } from '@features/public/components/inline-simple-one/inline-simple-one.component'

const components = [ 
  PublicComponent, 
  HomeComponent, 
  LoginComponent, 
  PokedexComponent, 
  PokemonComponent, 
  TitleComponent, 
  InlinePokemonInfoComponent,
  InlineSimpleOneComponent,
];
const modules = [ CommonModule, PublicRoutingModule, ReactiveFormsModule, SharedModule ];

@NgModule({
  providers: [],
  imports: [...modules ],
  exports:[],
  declarations: [ ...components ]
})
export class PublicModule { }
