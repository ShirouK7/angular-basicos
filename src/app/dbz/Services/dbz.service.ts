import {Injectable} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    constructor () {
        console.log("Servicio Inicializado");
    }

    // Se usa _ como un estándar para indicar que una propiedad es privada, sin embargo, es opcional el uso.
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ]

    get personajes(): Personaje[] {
        /* 
            El [...] rompe la referencia del objeto, de esta manera tenemos acceso a la información,
            pero no se esta pasando la referencia del arreglo original.
        */
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}
