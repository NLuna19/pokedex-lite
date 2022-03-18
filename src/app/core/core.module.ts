import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '@core/services/http.service';

const providers = [ HttpService ];
const modules = [ HttpClientModule ];
const components: never[] = [];

@NgModule({
  providers: [ ...providers],
  imports: [
    CommonModule,
    RouterModule,
    ...modules
  ],
  exports: [ ...components ],
  declarations: [ ...components ]
})
export class CoreModule { }
