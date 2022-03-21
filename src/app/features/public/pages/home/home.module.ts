import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/public/pages/home/home.component';
import { LoginComponent } from '@features/public/pages/login/login.component';
import { PokedexComponent } from '@features/public/pages/pokedex/pokedex.component';
import { PokemonComponent } from '../pokedex/pokemon/pokemon.component';
import { AuthGuard } from '@app/core/guards/auth.guards';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'pokedex',
        children: [
          { path: '', component: PokedexComponent },
          { path: 'pokemon', component: PokemonComponent }
        ],
        canActivate: [AuthGuard],
      },
    ],
  }
];

@NgModule({
  providers: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: []
})
export class HomeModule { }
