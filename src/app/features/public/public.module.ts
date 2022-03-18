import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { SharedModule } from '@app/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  providers: [],
  imports: [
    CommonModule, 
    PublicRoutingModule, 
    SharedModule
  ],
  exports:[ SharedModule ],
  declarations: [ PublicComponent ]
})
export class PublicModule { }
