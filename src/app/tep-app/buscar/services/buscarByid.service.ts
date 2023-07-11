import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empleados } from '../../empleados/interfaces/empleados.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BuscarByRutService {
  private baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getEmpleadosByRutEmpresa(empresa_rut: string):Observable<Empleados[]>{
    return this.http.get<Empleados[]>(`${this.baseUrl}/api/empleados?empresa=${empresa_rut}`)
  }
}
