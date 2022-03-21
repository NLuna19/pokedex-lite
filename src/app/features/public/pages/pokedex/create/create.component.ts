import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { user } from '@app/core/models/user.models';
import { getControl as getControlForm} from '@core/util/getControlForm'
import { AuthStorageService } from '@app/core/services/auth.service';
import { PokemonActions } from '@app/core/redux/pokemon/pokemon.index';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { pokemonState } from '@app/core/models/pokemons-state.models';
import { Pokemon } from '@app/core/models/pokemon.models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public formLogin: FormGroup;
  public title: string = 'Pokedex - lite';

  private namePokemonFormControl: FormControl = new FormControl( '', [ Validators.required ] );
  private levelPokemonFormControl: FormControl = new FormControl( '', [ Validators.required ] );
  private typePokemonFormControl: FormControl = new FormControl('' , [Validators.required ] );

  public getControl = getControlForm;

  constructor( 
    private formBuilder: FormBuilder, 
    private Store: Store<{pokemonState: pokemonState}>,
    private router: Router,
    private authservices: AuthStorageService
  ){ 
    this.formLogin = this.loginForm();
  }

  ngOnInit(): void { 
  }

  loginForm(): FormGroup {
    return this.formBuilder.group(
      {
        name: this.namePokemonFormControl,
        level: this.levelPokemonFormControl,
        types: this.typePokemonFormControl,
      }
    );
  }

  submit() {
    const id = this.authservices.getUser().userId+'';
    const name = this.formLogin.get('name')?.value;
    const level = this.formLogin.get('level')?.value;
    const types = this.formLogin.get('level')?.value;

    const pokemon: Pokemon = {
      name: name,
      lvl: level,
      type: types,
      evolutionId: 0,
      abilities: []
    }
  
    this.Store.dispatch(PokemonActions.insertPokemon( { pokemon, id }) )

    this.router.navigate(['/pokedex'])

  }

  controlForm(controlname: string){
    return this.getControl(this.formLogin, controlname);
  }

  requiredError(): string{
    return 'Campo requerido';
  }


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  types: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.types.push(value);
    }

    event.chipInput!.clear();
  }

  remove(value: string): void {
    const index = this.types.indexOf(value);

    if (index >= 0) {
      this.types.splice(index, 1);
    }
  }



}
