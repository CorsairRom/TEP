import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarPageComponent } from './pages/buscar-page/buscar-page.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    BuscarPageComponent
  ],
  imports: [
    CommonModule,
    BuscarRoutingModule,
    MaterialModule
  ]
})
export class BuscarModule { }
