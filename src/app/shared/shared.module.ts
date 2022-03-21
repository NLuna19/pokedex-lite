import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/shared/materials/material.module';
import { SharedTitleComponent } from './components/title/shared-title.component';
import { InlineChipComponent } from './components/inline-chip/inline-chip.component';

const modules = [ MaterialModule ];
const components = [ SharedTitleComponent, InlineChipComponent ];

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
    ...components,
  ]
})
export class SharedModule { }
