import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpresasComponent } from './pages/lista-empresas/lista-empresas.component';
import { AddEmpresaComponent } from './pages/add-empresa/add-empresa.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListaEmpresasComponent
  },
  {
    path: 'registro',
    component: AddEmpresaComponent
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
