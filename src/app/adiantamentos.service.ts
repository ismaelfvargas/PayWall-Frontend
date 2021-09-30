import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Adiantamento} from "./adiantamentos/adiantamento";

@Injectable({
  providedIn: 'root'
})
export class AdiantamentosService {

  /* Acessa o REST API, http/postman. */
  constructor( private http: HttpClient ) {
  }

  salvar( adiantamento: Adiantamento ): Observable<Adiantamento> {
    return this.http.post<Adiantamento>('http://localhost:8080/api/adiantamentos' , adiantamento);
  }

}
