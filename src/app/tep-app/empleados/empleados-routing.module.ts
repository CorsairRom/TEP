import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ListaEmpleadosComponent
  },
  {
    path: 'registro',
    component: AddEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
