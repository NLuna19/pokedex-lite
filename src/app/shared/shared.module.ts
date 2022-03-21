import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/shared/materials/material.module';
import { SharedTitleComponent } from './components/title/shared-title.component';
import { InlineChipComponent } from './components/inline-chip/inline-chip.component';
import { CustomImageComponent } from './components/custom-image/custom-image.component';

const modules = [ MaterialModule ];
const components = [ SharedTitleComponent, InlineChipComponent, CustomImageComponent,];

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
