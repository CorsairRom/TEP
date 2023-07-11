import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments.pro';
import { Observable } from 'rxjs';
import { Empleados } from '../interfaces/empleados.interface';

@Injectable({ providedIn: 'root' })

export class EmpleadosServices {

  private baseUrl:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getEmpleados():Observable<Empleados[]> {
    return this.http.get<Empleados[]>( `${this.baseUrl}/api/empleados` )
  }

  addEmpleados(empleado:Empleados):Observable<Empleados[]> {
    return this.http.post<Empleados[]>(`${this.baseUrl}/api/empleados/`, empleado)
  }



}
