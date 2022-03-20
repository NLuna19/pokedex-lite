import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/shared/materials/material.module';
import { SharedTitleComponent } from './components/title/shared-title.component';

const modules = [ MaterialModule ];
const components = [ SharedTitleComponent ];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports:[
    ...modules,
    ...components,
  ],
  declarations: [
    ...components
  ]
})
export class SharedModule { }
