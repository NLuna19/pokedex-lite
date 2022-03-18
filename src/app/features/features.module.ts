import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@app/core/core.module';

const modules = [ CoreModule,  AppRoutingModule,  SharedModule,]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ...modules
  ],
  declarations: [ 

  ]
})
export class FeaturesModule { }
