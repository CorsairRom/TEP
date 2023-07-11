import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { AddEmpleadoComponent } from './pages/add-empleado/add-empleado.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListaEmpleadosComponent
  },
  {
    path: 'registro',
    component: AddEmpleadoComponent
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
