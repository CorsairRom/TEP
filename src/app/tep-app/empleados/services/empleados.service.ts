import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Empleados } from '../interfaces/empleados.interface';

@Injectable({ providedIn: 'root' })

export class EmpleadosServices {

  private baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getEmpleados():Observable<Empleados[]> {
    return this.http.get<Empleados[]>( `${this.baseUrl}/api/empleados` )
  }

  addEmpleados(empleado:Empleados):Observable<Empleados[]> {
    return this.http.post<Empleados[]>(`${this.baseUrl}/api/empleados/`, empleado)
  }



}
