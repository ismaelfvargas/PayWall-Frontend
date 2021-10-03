import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";
import {Usuario} from "../../login/usuario";

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  menssagemErro: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.router.navigate(['/home'])
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
        this.menssagemErro = null;
        this.username = '';
        this.password = '';
      }, errorResponse => {
        this.mensagemSucesso = null;
        this.menssagemErro = "Esse usuário já possui login!"
        return this.menssagemErro;
      });
  }

}
