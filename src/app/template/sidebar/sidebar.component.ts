import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string;
  permissaoUsuario: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.permissaoUsuario = false;
    this.authService
      .permissaoUsuariosMenu()
      .subscribe(response => {
        this.permissaoUsuario = true;
      })
  }


}
