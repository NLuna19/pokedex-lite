import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'login',
      //   component: LoginComponent
      // },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
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
