import { Component } from '@angular/core';
import { EmpresasServices } from '../../services/empresas.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';
import { Empresas } from '../../interfaces/empresas.interface';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styles: [
  ]
})
export class AddEmpresaComponent {

  public empresasForm = new FormGroup(
    {
      rut_empresa:      new FormControl(''),
      nombre_empresa:   new FormControl(''),
      direccion_empresa:new FormControl(''),
      telefono:         new FormControl(),
    });

  constructor(
    private empresasServices: EmpresasServices,
    private router:Router,
    private snackbar: MatSnackBar
  ){}

  get currentempresas():Empresas{
    const empresas = this.empresasForm.value as Empresas;
    return empresas;
  }

  onSubmit(){
    if (this.empresasForm.invalid) return;

    this.empresasServices.addEmpresa(this.currentempresas)
      .subscribe(
        empresa => {
          this.router.navigateByUrl('empresas/listado');
          this.showSnackbar(`Empresa Creada!`);
        }

      )
  }
  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'Realizado', {
      duration: 2500,
    });
  };


}
