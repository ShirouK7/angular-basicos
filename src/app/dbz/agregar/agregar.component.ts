import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor (private dbzService: DbzService) {}

  // Esta es la sintaxis para el uso del decorador Output. Y se añade que se va a emitir un personaje.
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  /*
  Ya no es necesario ya que ngModule permite actualizar directamente sobre el valor de nuevo.nombre
  cambiarNombre(event:any):void {
    console.log(event.target.value);
  }
  */

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log(this.nuevo);

    // Se esta emitiendo un nuevo personaje.
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
