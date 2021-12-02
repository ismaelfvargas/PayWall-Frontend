import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {Pagamento} from "./pagamento/Pagamento";
import {PagamentoBusca} from "./pagamento/pagamento-lista/pagamentoBusca";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  apiURL: string = environment.apiURLBase + "/api/pagamentos"
  apiURLuser: string = environment.apiURLBase + "/api/pagamentos/teste"

  /* Acessa o REST API, http/postman. */
  constructor( private http: HttpClient ) {
  }

  salvar( pagamento: Pagamento ): Observable<Pagamento> {
    return this.http.post<Pagamento>('http://localhost:8080/api/pagamentos' , pagamento);
  }

  buscar(nomeFornecedor = "", nomeStatus = "") : Observable<PagamentoBusca[]>{

    const httpParams = new HttpParams()
      .set("nomeFornecedor", nomeFornecedor)
      .set("nomeStatus", nomeStatus);

    const url = this.apiURL + "?" + httpParams;
    return this.http.get<any>(url);
  }

  getPagamentoById(id: number) : Observable<Pagamento>{
    return this.http.get<any>(`http://localhost:8080/api/pagamentos/${id}`);
  }

  buscarUser(nomeFornecedor = "", nomeStatus = "") : Observable<PagamentoBusca[]>{

    const httpParams = new HttpParams()
      .set("nomeFornecedor", nomeFornecedor)
      .set("nomeStatus", nomeStatus);

    const url = this.apiURLuser + "?" + httpParams;
    return this.http.get<any>(url);
  }

  trocaStatus(id: number, tipoStatus: number){
    return this.http.put<any>(`http://localhost:8080/api/pagamentos/atualizandoStatus/${id}/${tipoStatus}`, {})
  }

  trocaStatusAdto(id: number, tipoStatusAdto: number){
    return this.http.put<any>(`http://localhost:8080/api/pagamentos/atualizandoStatusAdto/${id}/${tipoStatusAdto}`, {})
  }

  inserindoMensagemReprovacao(id: number, mensagemReprovacao: string){
      return this.http.put<any>(`http://localhost:8080/api/pagamentos/inserirMensagemReprovacao/${id}/${mensagemReprovacao}`, {})
  }

  buscarDocumentos(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/buscarDocumento/${id}`);
  }

  deletar(pagamento: PagamentoBusca) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/pagamentos/${pagamento.id}`);
  }

  dashboard(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/pagamentos/dashboard`);
  }

}
