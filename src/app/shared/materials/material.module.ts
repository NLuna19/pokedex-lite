import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const modules = [ 
  MatCardModule, 
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatDividerModule,
  MatListModule,
  MatGridListModule,
  MatTableModule,
  ScrollingModule,
  MatChipsModule,
  MatToolbarModule,
  MatIconModule,

]

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules,
  ],
  declarations: []
})
export class MaterialModule { }
