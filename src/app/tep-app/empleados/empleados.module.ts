import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { AddEmpleadoComponent } from './pages/add-empleado/add-empleado.component';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmpleadoComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmpleadosModule { }
