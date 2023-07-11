import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { EmpleadosServices } from 'src/app/tep-app/empleados/services/empleados.service';
import { EmpresasServices } from 'src/app/tep-app/empresas/services/empresas.service';
import { BuscarByRutService } from '../../services/buscarByid.service';
import { Empleados } from 'src/app/tep-app/empleados/interfaces/empleados.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-buscar-page',
  templateUrl: './buscar-page.component.html',
  styles: [
  ]
})
export class BuscarPageComponent implements OnInit {

  public empresasRut:string[] =[]
  public selectedEmpresa: boolean = false;
  public empleados:Empleados[] = [];
  public displayedColumns: string[] = ['id', 'Nombre', 'Rut', 'Email', 'Empresa', 'Acciones'];
  public dataSource = new MatTableDataSource(this.empleados);

  constructor(
    private empresasService: EmpresasServices,
    private buscarByidService: BuscarByRutService
  ){}

  ngOnInit(): void {
    this.empresasService.getEmpresas().pipe(
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
  onEmpresaSelected(evt:string){
    this.selectedEmpresa = true
    const filtro = evt
    this.buscarByidService.getEmpleadosByRutEmpresa(filtro)
      .subscribe(empleados => this.empleados = empleados)
  }

}
