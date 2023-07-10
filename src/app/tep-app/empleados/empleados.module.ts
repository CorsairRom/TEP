import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';


@NgModule({
  declarations: [
    AddEmpleadoComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
