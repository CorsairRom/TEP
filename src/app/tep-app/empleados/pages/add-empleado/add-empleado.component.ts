import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { EmpleadosServices } from '../../services/empleados.service';
import { EmpresasServices } from 'src/app/tep-app/empresas/services/empresas.service';
import { Empleados } from "../../interfaces/empleados.interface";


@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styles: [
  ]
})
export class AddEmpleadoComponent implements OnInit {

  public empleadoForm = new FormGroup(
    {
      nombre_empleado:  new FormControl(''),
      rut_empleado:     new FormControl(''),
      email:            new FormControl(''),
      empresa:          new FormControl(''),
    });

  public empresasRut:string[] =[]

  constructor(
    private empleadoServices: EmpleadosServices,
    private empresasServices: EmpresasServices,
    private router:Router,
    private snackbar: MatSnackBar,

  ){}
  ngOnInit(): void {
    this.empresasServices.getEmpresas().pipe(
      switchMap(empresas => {
        // Obtener los ruts de las empresas
        const ruts = empresas.map(empresa => empresa.rut_empresa);
        // Asignar los ruts a la variable empresasRut
        this.empresasRut = ruts;
        return empresas;
      })
    ).subscribe(result => {
    }, error => {
      console.error(error);
    });
  }

  get currentEmpleado():Empleados{
    const empleado = this.empleadoForm.value as Empleados;
    return empleado;
  }


  onSubmit(){
    if (this.empleadoForm.invalid) return;

    this.empleadoServices.addEmpleados(this.currentEmpleado)
      .subscribe(
        empleado => {
          this.router.navigateByUrl('empleados/listado');
          this.showSnackbar(`Empleado Creado!`);
        }

      )
  }
  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'Realizado', {
      duration: 2500,
    });
  };


}
