import { Component, OnInit } from '@angular/core';
import { EmpleadosServices } from '../../services/empleados.service';
import { Empleados } from '../../interfaces/empleados.interface';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


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



  public empleados:Empleados[] = [];
  public displayedColumns: string[] = ['id', 'Nombre', 'Rut', 'Email', 'Empresa', 'Acciones'];
  public dataSource:any

  constructor(
    private empleadosServices: EmpleadosServices,
    private router: Router,

    ){}

  ngOnInit(): void {
    this.empleadosServices.getEmpleados()
    .subscribe(empleados => this.empleados = empleados);
    this.dataSource = new MatTableDataSource(this.empleados);
  }

  navigate(): void {
    this.router.navigateByUrl('empleados/registro')
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    console.log(filtro);

    this.dataSource.filter = filtro;
  }

}
