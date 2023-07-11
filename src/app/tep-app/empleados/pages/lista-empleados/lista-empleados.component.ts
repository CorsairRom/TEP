import { Component, OnInit } from '@angular/core';
import { EmpleadosServices } from '../../services/empleados.service';
import { Empleados } from '../../interfaces/empleados.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styles: [
  ]
})
export class ListaEmpleadosComponent implements OnInit {



  public empleados:Empleados[] = [];


  constructor(
    private empleadosServices: EmpleadosServices,
    private router: Router,

    ){}

  ngOnInit(): void {
    this.empleadosServices.getEmpleados()
    .subscribe(empleados => this.empleados = empleados);

  }

  navigate(): void {
    this.router.navigateByUrl('empleados/registro')
  }

  public displayedColumns: string[] = ['id', 'Nombre', 'Rut', 'Email', 'Empresa', 'Acciones'];
  public dataSource = this.empleados;



}
