import { Component, Input } from '@angular/core';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent {

  constructor (private dbzService:DbzService) {}

  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }
}
