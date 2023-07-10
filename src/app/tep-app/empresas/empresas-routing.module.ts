import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { AddEmpresaComponent } from './add-empresa/add-empresa.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListaEmpresasComponent
  },
  {
    path: 'registro',
    component: AddEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
