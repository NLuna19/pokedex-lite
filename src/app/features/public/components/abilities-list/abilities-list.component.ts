import { Component, Input, OnInit } from '@angular/core';
import { Pokemon_abilities } from '@app/core/models/pokemon.models';

@Component({
  selector: 'abilities-list',
  templateUrl: './abilities-list.component.html',
  styleUrls: ['./abilities-list.component.scss']
})
export class AbilitiesListComponent implements OnInit {

  @Input() abilities?:Pokemon_abilities[];

  constructor() { }

  ngOnInit(): void {
  }

}
