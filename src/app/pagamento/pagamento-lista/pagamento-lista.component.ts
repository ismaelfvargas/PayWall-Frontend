import { Component, OnInit } from '@angular/core';
import {Solicitacao} from "../../solicitacoes/solicitacao";

@Component({
  selector: 'app-pagamento-lista',
  templateUrl: './pagamento-lista.component.html',
  styleUrls: ['./pagamento-lista.component.css']
})
export class PagamentoListaComponent implements OnInit {

  tributo: string;
  solicitacao: Solicitacao;


  constructor() {

  }

  ngOnInit(): void {
  }

  consultar(){
    console.log(this.solicitacao.dataEmissao, this.solicitacao.nomeFornecedor);
  }

}
