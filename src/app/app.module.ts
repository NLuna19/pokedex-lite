import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './features/app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module'

const modules = [ FeaturesModule ];
const components = [  ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules
  ],
  providers: [ BrowserAnimationsModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
