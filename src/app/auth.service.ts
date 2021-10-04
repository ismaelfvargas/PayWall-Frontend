import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Usuario} from "./login/usuario";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/api/usuarios"
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario) : Observable<any> {
    const token = JSON.parse(localStorage.getItem('access_token') || '{}')
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    console.log(token)
    return this.http.post<any>(this.apiURL, usuario, { headers });
  }

  tentarLogar(username: string, password: string) : Observable<any>{
    const params = new HttpParams()
                    .set('username', username)
                    .set('password', password)
                    .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type' : 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.tokenURL, params.toString(), { headers })
  }
}
