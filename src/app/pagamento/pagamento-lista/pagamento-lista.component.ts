import { Component, OnInit } from '@angular/core';
import {Solicitacao} from "../../solicitacoes/solicitacao";
import {PagamentosService} from "../../pagamentos.service";
import {UploadFileService} from "../../upload-file.service";
import {TipoPedidoService} from "../../tipoPedido.service";
import {Pagamento} from "../Pagamento";
import {TipoPedido} from "../TipoPedido";

@Component({
  selector: 'app-pagamento-lista',
  templateUrl: './pagamento-lista.component.html',
  styleUrls: ['./pagamento-lista.component.css']
})
export class PagamentoListaComponent implements OnInit {

  pagamento : Pagamento;
  tipoPedido : TipoPedido[] = [];

  constructor( private pagamentosService: PagamentosService,
               private uploadFileService: UploadFileService,
               private tipoPedidoService: TipoPedidoService
             ) {}

  ngOnInit(): void {
    this.pagamento.fileInfos = this.uploadFileService.getFiles();
    this.tipoPedidoService
      .getTipoPedido()
      .subscribe( response => this.tipoPedido = response )
  }

}
