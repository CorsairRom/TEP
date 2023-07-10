import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { AddEmpresaComponent } from './add-empresa/add-empresa.component';


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
