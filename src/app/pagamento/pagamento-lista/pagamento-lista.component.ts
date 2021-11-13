import { Component, OnInit } from '@angular/core';
import {PagamentoBusca} from "./pagamentoBusca";
import {PagamentosService} from "../../pagamentos.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-pagamento-lista',
  templateUrl: './pagamento-lista.component.html',
  styleUrls: ['./pagamento-lista.component.css']
})
export class PagamentoListaComponent implements OnInit {

  nomeFornecedor: string;
  nomeStatus: string;
  lista: PagamentoBusca[];
  usuarioLogado: string;
  permissaoUsuario: boolean;
  permissaoAssistente: boolean;
  botaoAprovadoAtivo: boolean = true;

  constructor(
      private service: PagamentosService,
      private authService: AuthService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.permissaoUsuario = false;
    this.permissaoAssistenteTeste();
    this.authService
      .permissaoUsuariosMenu()
      .subscribe(response => {
        this.permissaoUsuario = true;
      });
  }

  permissaoAssistenteTeste(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.permissaoAssistente = false;
    this.authService
      .permissaoUsuarioAssistente()
      .subscribe(response => {
        this.permissaoAssistente = true;
      })
  }

  consultar(){
    this.service
      .buscar(this.nomeFornecedor, this.nomeStatus)
      .subscribe(response => this.lista = response);
  }

  novoPagamento(){
    this.router.navigate(['/pagamento-form'])
  }

  trocaStatus(idPedido, idStatus){
    this.botaoAprovadoAtivo = false;
    this.service
      .trocaStatus(idPedido, idStatus)
      .subscribe(response => {
        this.consultar();
        this.botaoAprovadoAtivo = true;
      })
  }

}
