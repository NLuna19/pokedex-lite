import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { SharedModule } from '@app/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [ PublicComponent, HomeComponent, LoginComponent ]
@NgModule({
  providers: [],
  imports: [
    CommonModule, 
    PublicRoutingModule,
    ReactiveFormsModule, 
    SharedModule
  ],
  exports:[ ],
  declarations: [ ...components  ]
})
export class PublicModule { }
