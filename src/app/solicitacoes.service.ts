import { Injectable } from '@angular/core';
import {Solicitacao} from './solicitacoes/solicitacao';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  /* Acessa o REST API, http/postman. */
  constructor( private http: HttpClient ) {
  }

  salvar( solicitacao: Solicitacao ): Observable<Solicitacao> {
    return this.http.post<Solicitacao>('http://localhost:8080/api/solicitacoes' , solicitacao);
  }
}
