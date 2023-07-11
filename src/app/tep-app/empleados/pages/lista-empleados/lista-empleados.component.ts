import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpleadosServices } from '../../services/empleados.service';
import { Empleados } from '../../interfaces/empleados.interface';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styles: [
    `
    .texto{
      margin-top: 15px
    }
    .input{
      margin-top:10px
    }

    `
  ]
})
export class ListaEmpleadosComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;

  public empleados:Empleados[] = [];
  public displayedColumns: string[] = ['id', 'Nombre', 'Rut', 'Email', 'Empresa', 'Acciones'];
  public dataSource = new MatTableDataSource(this.empleados);

  constructor(
    private empleadosServices: EmpleadosServices,
    private router: Router,

    ){}

  ngOnInit(): void {
    this.empleadosServices.getEmpleados()
    .subscribe(empleados => {
      this.empleados = empleados
    });
  }

  navigate(): void {
    this.router.navigateByUrl('empleados/registro')
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filtro.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.table.renderRows();
  };


}
