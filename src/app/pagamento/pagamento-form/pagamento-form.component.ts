import { Component, OnInit } from '@angular/core';
import { PagamentosService } from "../../pagamentos.service";
import { Pagamento } from "../Pagamento";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import { UploadFileService } from "../../upload-file.service";
import { TipoPedido } from "../TipoPedido";
import { TipoPedidoService } from "../../tipoPedido.service";
import { TipoStatus } from "../TipoStatus";
import { TipoStatusService } from "../../tipoStatus.service";

@Component({
  selector: 'app-pagamento-form',
  templateUrl: './pagamento-form.component.html',
  styleUrls: ['./pagamento-form.component.css']
})
export class PagamentoFormComponent implements OnInit {

  pagamento: Pagamento;
  success: boolean = false;
  tipoPedido: TipoPedido[] = [];
  tipoStatus: TipoStatus[] = [];

  constructor( private pagamentosService: PagamentosService,
               private uploadFileService: UploadFileService,
               private tipoPedidoService: TipoPedidoService,
               private tipoStatusService: TipoStatusService
              )
    {
      this.pagamento = new Pagamento();
    }

  ngOnInit(): void {
    this.pagamento.fileInfos = this.uploadFileService.getFiles();
    this.tipoPedidoService
      .getTipoPedido()
      .subscribe( response => this.tipoPedido = response );
    this.tipoStatusService
      .getTipoStatus()
      .subscribe(response => this.tipoStatus = response );
  }

  onSubmit(){
    this.pagamentosService
      .salvar(this.pagamento)
      .subscribe( response => {
        this.success = true;
        this.uploadFiles(response.id);
      } );
  }

  selectFiles(event): void {
    this.pagamento.progressInfos = [];
    this.pagamento.selectedFiles = event.target.files;
  }

  uploadFiles(idSolicitacao): void {
    this.pagamento.message = '';

    console.log(this.pagamento.selectedFiles.length)
    console.log('id_solicitacao')
    console.log(idSolicitacao)

    for (let i = 0; i < this.pagamento.selectedFiles.length; i++) {
      this.upload(i, this.pagamento.selectedFiles[i], idSolicitacao);
    }
  }

  upload(idx, file, idSolicitacao): void {
    this.pagamento.progressInfos[idx] = { value: 0, fileName: file.name };

    this.uploadFileService.upload(file, idSolicitacao).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.pagamento.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.pagamento.fileInfos = this.uploadFileService.getFiles();
        }
      },
      err => {
        this.pagamento.progressInfos[idx].value = 0;
        this.pagamento.message = 'Não foi possível fazer upload do arquivo:' + file.name;
      });
  }

}
