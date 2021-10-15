import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {TipoPedido} from "./pagamento/TipoPedido";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TipoPedidoService {

  apiURL: string = environment.apiURLBase + '/api/tipoPedido';

  /* Acessa o REST API, http/postman. */
  constructor( private http: HttpClient ) {
  }

  salvar( tipoPedido: TipoPedido ): Observable<TipoPedido> {
    return this.http.post<TipoPedido>('http://localhost:8080/api/tipoPedido' , tipoPedido);
  }

  getTipoPedido() : Observable<TipoPedido[]> {
    return this.http.get<TipoPedido[]>(this.apiURL);
  }

  getTipoPedidoById(id: number) : Observable<TipoPedido> {
    return this.http.get<any>(`http://localhost:8080/api/tipoPedido/${id}`)
  }

  atualizar( cliente: TipoPedido ) : Observable<any> {
    return this.http.put<TipoPedido>(`${this.apiURL}/${cliente.id}` , cliente);
  }
}
