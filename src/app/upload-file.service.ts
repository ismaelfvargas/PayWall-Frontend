import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UploadFileService {

  /* Acessa o REST API, http/postman. */
  constructor( private http: HttpClient ) {
  }

  upload(file: File, idSolicitacao: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('idSolicitacao', idSolicitacao.toString());

    const req = new HttpRequest('POST', `http://localhost:8080/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`http://localhost:8080/files`);
  }

}
