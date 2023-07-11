import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Empresas } from '../interfaces/empresas.interface';

@Injectable({ providedIn: 'root' })

export class ServiceNameService {

  private baseUrl:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getEmpleados():Observable<Empresas[]> {
    return this.http.get<Empresas[]>( `${this.baseUrl}/api/empresas` )
  }

}
