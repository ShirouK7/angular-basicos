import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './Heroe/heroe.component';
import { ListadoComponent } from './Listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        HeroeComponent,
        ListadoComponent,
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {}
