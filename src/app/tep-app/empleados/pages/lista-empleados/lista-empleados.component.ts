import { Component, OnInit } from '@angular/core';
import { EmpleadosServices } from '../../services/empleados.service';
import { Empleados } from '../../interfaces/empleados.interface';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styles: [
  ]
})
export class ListaEmpleadosComponent implements OnInit {



  public empleados:Empleados[] = [];


  constructor( private empleadosServices: EmpleadosServices){}

  ngOnInit(): void {
    this.empleadosServices.getEmpleados()
    .subscribe(empleados => this.empleados = empleados);

  }

  public displayedColumns: string[] = ['id', 'Nombre', 'Rut', 'Email', 'Empresa', 'Acciones'];
  public dataSource = this.empleados;



}
