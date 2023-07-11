import { Component, OnInit } from '@angular/core';
import { EmpresasServices } from '../../services/empresas.service';
import { Empresas } from '../../interfaces/empresas.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styles: [
  ]
})
export class ListaEmpresasComponent implements OnInit {

  public empresas:Empresas[] = [];

  constructor(
    private empresasServices: EmpresasServices,
    private router: Router

    ){}

  ngOnInit(): void {
    this.empresasServices.getEmpresas()
    .subscribe(empresas => this.empresas = empresas)
  }
  public displayedColumns: string[] = ['Rut', 'Nombre', 'Direccion', 'Telefono', 'Acciones'];
  public dataSource = this.empresas;

  //REFACTORIZAR
  navigate(): void {
    this.router.navigateByUrl('empresas/registro')
  }

}
