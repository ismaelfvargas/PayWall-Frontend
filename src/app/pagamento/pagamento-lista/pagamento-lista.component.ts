import { Component, OnInit } from '@angular/core';
import {PagamentoBusca} from "./pagamentoBusca";
import {PagamentosService} from "../../pagamentos.service";

@Component({
  selector: 'app-pagamento-lista',
  templateUrl: './pagamento-lista.component.html',
  styleUrls: ['./pagamento-lista.component.css']
})
export class PagamentoListaComponent implements OnInit {

  nomeFornecedor: string;
  nomeStatus: string;
  lista: PagamentoBusca[];

  constructor(
      private service: PagamentosService
  ) {}

  ngOnInit(): void {

  }

  consultar(){
    this.service
      .buscar(this.nomeFornecedor, this.nomeStatus)
      .subscribe(response => this.lista = response);
  }

}
