import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { SharedModule } from '@app/shared/shared.module';

const modules = [];
const components = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[],
  declarations: [PublicComponent]
})
export class PublicModule { }
