import { Component } from '@angular/core';
import { EmpresasServices } from '../../services/empresas.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styles: [
  ]
})
export class AddEmpresaComponent {

  constructor(
    private empresasServices: EmpresasServices,
    private router:Router,
    private snackbar: MatSnackBar
  ){}


}
