import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { ListaEmpresasComponent } from './pages/lista-empresas/lista-empresas.component';
import { AddEmpresaComponent } from './pages/add-empresa/add-empresa.component';


@NgModule({
  declarations: [
    ListaEmpresasComponent,
    AddEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule
  ]
})
export class EmpresasModule { }
