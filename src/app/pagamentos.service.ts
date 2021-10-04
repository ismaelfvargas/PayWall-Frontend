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
    const token = JSON.parse(localStorage.getItem('access_token') || '{}')
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.post<Pagamento>('http://localhost:8080/api/pagamentos' , pagamento, {headers});
  }

  /*
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `http://localhost:8080/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`http://localhost:8080/files`);
  }
  */
}
