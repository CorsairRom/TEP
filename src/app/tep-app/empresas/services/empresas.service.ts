import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Empresas } from '../interfaces/empresas.interface';

@Injectable({ providedIn: 'root' })

export class EmpresasServices {

  private baseUrl:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getEmpresas():Observable<Empresas[]> {
    return this.http.get<Empresas[]>( `${this.baseUrl}/api/empresas` )
  }

  addEmpresa(empresa:Empresas):Observable<Empresas> {
    return this.http.post<Empresas>(`${this.baseUrl}/api/empresas/`, empresa)
  }

}
