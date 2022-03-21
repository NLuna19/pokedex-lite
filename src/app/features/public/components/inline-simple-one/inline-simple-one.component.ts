import { Pokemon } from '@core/models/pokemon.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inline-simple-one',
  templateUrl: './inline-simple-one.component.html',
  styleUrls: ['./inline-simple-one.component.scss']
})
export class InlineSimpleOneComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
