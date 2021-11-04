import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Usuario} from "./login/usuario";
import {Observable} from "rxjs";

import { JwtHelperService } from '@auth0/angular-jwt'


@Injectable({
    providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/api/usuarios"
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) { }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
      const token = JSON.parse(tokenString).access_token
      return token;
    }
    return null;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token')
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if(token){
      const usuario = this.jwtHelper.decodeToken(token).user_name
      return usuario;
    }
    return null;
  }

  estaAutenticado() : boolean{
    const token = this.obterToken();
    if(token){
      const estaExpirado = this.jwtHelper.isTokenExpired(token)
      return !estaExpirado;
    }
    return false;
  }

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

  permissaoUsuariosMenu() : Observable<any> {
    const token = JSON.parse(localStorage.getItem('access_token') || '{}')
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.get<any>('http://localhost:8080/api/usuarios/permissao/menu' , {headers});
  }
}
