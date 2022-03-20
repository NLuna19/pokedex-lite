import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

const modules = [ FeaturesModule, CoreModule, SharedModule ];
// const components = [ ];

@NgModule({
  declarations: [
    AppComponent,
    // ...components
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...modules,
  ],
  providers: [ BrowserAnimationsModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
