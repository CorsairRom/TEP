import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Empleados } from '../../empleados/interfaces/empleados.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BuscarByRutService {
  private baseUrl:string = environments.baseUrl;
  constructor(private http: HttpClient) { }

  getEmpleadosByRutEmpresa(empresa_rut: string):Observable<Empleados[]>{
    return this.http.get<Empleados[]>(`${this.baseUrl}/api/empleados?empresa=${empresa_rut}`)
  }
}
