import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Usuario } from "./usuario";
import {AuthService} from "../auth.service";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: string[];

  public backgroundImg: SafeStyle;
  @Input() myObject: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit() {
    this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(' + "../../../assets/img/imageLogin.png" + ')');
  }

  onSubmit(){

    this.authService
          .tentarLogar(this.username, this.password)
          .subscribe(response => {
            const access_token = JSON.stringify(response);
            localStorage.setItem('access_token', access_token)
            this.router.navigate(['/'])
          }, errorResponse => {
              this.errors = ['Usuário e/ou senha incorreto(s).']
          })

  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
      .salvar(usuario)
      .subscribe( response => {
        this.mensagemSucesso = "Cadastro realizado com sucesso!"
      }, errorResponse => {
        this.mensagemSucesso = null;
        this.errors = errorResponse.error.errors;
      });
  }

}
