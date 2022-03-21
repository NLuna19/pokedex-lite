
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component'
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokedex/pokemon/pokemon.component';
import { CreateComponent } from './pages/pokedex/create/create.component';
import { UpdateComponent } from './pages/pokedex/update/update.component';
import { AuthGuard } from '@core/guards/auth.guards';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
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
          { path: 'pokemon', component: PokemonComponent },
          { path: 'crear', component: CreateComponent },
          { path: 'modificar', component: UpdateComponent },
        ],
        canActivate: [AuthGuard],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
