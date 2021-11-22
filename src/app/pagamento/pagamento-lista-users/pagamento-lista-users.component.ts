import {Component, Input, OnInit} from '@angular/core';
import {PagamentoBusca} from "../pagamento-lista/pagamentoBusca";
import {PagamentosService} from "../../pagamentos.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-pagamento-lista-users',
  templateUrl: './pagamento-lista-users.component.html',
  styleUrls: ['./pagamento-lista-users.component.css']
})
export class PagamentoListaUsersComponent implements OnInit {

  nomeFornecedor: string;
  nomeStatus: string;
  lista: PagamentoBusca[];
  botaoPrestacaoAtivo: boolean = true;

  constructor(
    private service: PagamentosService,
    private userService : AuthService
  ) {}

  ngOnInit(): void {

  }

  consultarListaUsers(){
    this.service
      .buscarUser(this.nomeFornecedor, this.nomeStatus)
      .subscribe(response => this.lista = response);
  }

  trocaStatusAdto(idPedido, idStatusAdto){
    this.botaoPrestacaoAtivo = false;
    this.service
      .trocaStatusAdto(idPedido, idStatusAdto)
      .subscribe(response => {
        this.consultarListaUsers();
        this.botaoPrestacaoAtivo = true;
      })
  }


}
