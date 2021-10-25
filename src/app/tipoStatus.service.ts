import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {TipoStatus} from "./pagamento/TipoStatus";

@Injectable({
  providedIn: 'root'
})
export class TipoStatusService {

  apiURL: string = environment.apiURLBase + '/api/tipoStatus';

  /* Acessa o REST API, http/postman. */
  constructor( private http: HttpClient ) {
  }

  salvar( tipoStatus: TipoStatus ): Observable<TipoStatus> {
    return this.http.post<TipoStatus>('http://localhost:8080/api/tipoStatus' , tipoStatus);
  }

  getTipoStatus() : Observable<TipoStatus[]> {
    return this.http.get<TipoStatus[]>(this.apiURL);
  }

  getTipoStatusById(id: number) : Observable<TipoStatus> {
    return this.http.get<any>(`http://localhost:8080/api/tipoStatus/${id}`)
  }

  atualizar( tipoStatus: TipoStatus ) : Observable<any> {
    return this.http.put<TipoStatus>(`${this.apiURL}/${tipoStatus.id}` , tipoStatus);
  }
}
