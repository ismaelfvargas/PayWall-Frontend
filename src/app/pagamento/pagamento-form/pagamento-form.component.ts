import { Component, OnInit } from '@angular/core';
import { Solicitacao } from "../../solicitacoes/solicitacao";
import { SolicitacoesService } from "../../solicitacoes.service";
import { PagamentosService } from "../../pagamentos.service";
import { Pagamento } from "../Pagamento";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import { UploadFileService } from "../../upload-file.service";

@Component({
  selector: 'app-pagamento-form',
  templateUrl: './pagamento-form.component.html',
  styleUrls: ['./pagamento-form.component.css']
})
export class PagamentoFormComponent implements OnInit {

  pagamento: Pagamento;
  success: boolean = false;

  constructor( private pagamentosService: PagamentosService, private uploadFileService: UploadFileService) {
    this.pagamento = new Pagamento();
    this.pagamento.solicitacao = new Solicitacao();
  }

  ngOnInit(): void {
    this.pagamento.fileInfos = this.uploadFileService.getFiles();
  }

  onSubmit(){
    console.log(this.pagamento);
    this.pagamentosService
      .salvar(this.pagamento)
      .subscribe( response => {
        console.log(response.solicitacao.id);
        this.success = true;
        this.uploadFiles(response.solicitacao.id);
      } );
  }

  selectFiles(event): void {
    this.pagamento.progressInfos = [];
    this.pagamento.selectedFiles = event.target.files;
  }

  uploadFiles(idSolicitacao): void {
    this.pagamento.message = '';

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
