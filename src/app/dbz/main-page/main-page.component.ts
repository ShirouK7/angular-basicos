import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor() { }

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 3500
  }

  /*
  Forma de vincular personajes con el servicio.
  get personajes () {
    return this.dbzService.personajes;
  }
  */

  /*agregarNuevoPersonaje(event:Personaje):void {
    // console.log('Main page component');
    // console.log(event);
    this.personajes.push(event);
  }*/

}
