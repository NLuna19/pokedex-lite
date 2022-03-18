import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { SharedModule } from '@app/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

const components = [ PublicComponent, LoginComponent ]
@NgModule({
  providers: [],
  imports: [
    CommonModule, 
    PublicRoutingModule, 
    SharedModule
  ],
  exports:[ ],
  declarations: [ ...components  ]
})
export class PublicModule { }
