import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/shared/materials/material.module';

const modules = [ MaterialModule ];
const components = [];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports:[
    ...modules
  ],
  declarations: [
  ]
})
export class SharedModule { }
