import { Pokemon } from '@core/models/pokemon.models';
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector: 'inline-pokemon-info',
  templateUrl: './inline-pokemon-info.component.html',
  styleUrls: ['./inline-pokemon-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlinePokemonInfoComponent implements OnInit {
  @Input() data?: Pokemon[];
  @Output() selectPokemon = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit(): void {
  }

  emitSelect(pokemon: Pokemon){
    this.selectPokemon.emit(pokemon);
  }

}
