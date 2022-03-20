import { Pokemon } from '@core/models/pokemon.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'inline-pokemon-info',
  templateUrl: './inline-pokemon-info.component.html',
  styleUrls: ['./inline-pokemon-info.component.scss']
})
export class InlinePokemonInfoComponent implements OnInit {
  @Input() data?: Pokemon[];
  @Output() selectPokemon = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  emitSelect(id: number){
    this.selectPokemon.emit(id);
  }

}
