import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {Pagamento} from "./pagamento/Pagamento";

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  /* Acessa o REST API, http/postman. */
  constructor( private http: HttpClient ) {
  }

  salvar( pagamento: Pagamento ): Observable<Pagamento> {

    return this.http.post<Pagamento>('http://localhost:8080/api/pagamentos' , pagamento);
  }
}
