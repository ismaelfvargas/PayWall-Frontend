import { Component, OnInit } from '@angular/core';
import {Pagamento} from "../Pagamento";
import {PagamentosService} from "../../pagamentos.service";
import {UploadFileService} from "../../upload-file.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-adiantamentos-form',
  templateUrl: './adiantamentos-form.component.html',
  styleUrls: ['./adiantamentos-form.component.css']
})
export class AdiantamentosFormComponent implements OnInit {

  pagamento: Pagamento;
  success: boolean = false;

  constructor( private pagamentosService: PagamentosService, private uploadFileService: UploadFileService) {
    this.pagamento = new Pagamento();
  }

  ngOnInit(): void {
    this.pagamento.fileInfos = this.uploadFileService.getFiles();
  }

  onSubmit(){
    console.log(this.pagamento);
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