import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {TipoStatusAdto} from "./pagamento/TipoStatusAdto";

@Injectable({
  providedIn: 'root'
})
export class TipoStatusAdtoService {

  apiURL: string = environment.apiURLBase + '/api/tipoStatusAdto';

  /* Acessa o REST API, http/postman. */
  constructor( private http: HttpClient ) {
  }

  salvar( tipoStatusAdto: TipoStatusAdto ): Observable<TipoStatusAdto> {
    return this.http.post<TipoStatusAdto>('http://localhost:8080/api/tipoStatusAdto' , tipoStatusAdto);
  }

  getTipoStatusAdto() : Observable<TipoStatusAdto[]> {
    return this.http.get<TipoStatusAdto[]>(this.apiURL);
  }

  getTipoStatusAdtoById(id: number) : Observable<TipoStatusAdto> {
    return this.http.get<any>(`http://localhost:8080/api/tipoStatusAdto/${id}`)
  }

  atualizar( tipoStatusAdto: TipoStatusAdto ) : Observable<any> {
    return this.http.put<TipoStatusAdto>(`${this.apiURL}/${tipoStatusAdto.id}` , tipoStatusAdto);
  }
}
