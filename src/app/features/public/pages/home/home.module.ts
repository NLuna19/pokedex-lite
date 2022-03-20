import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/public/pages/home/home.component';
import { LoginComponent } from '@features/public/pages/login/login.component';
import { PokedexComponent } from '@features/public/pages/pokedex/pokedex.component';

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
        component: PokedexComponent,
      }
    ],
  }
];

@NgModule({
  providers: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class HomeModule { }
