import { Component, OnInit } from '@angular/core';

import { Adiantamento } from "../adiantamento";
import {Solicitacao} from "../../solicitacoes/solicitacao";
import {AdiantamentosService} from "../../adiantamentos.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadFileService} from "../../upload-file.service";

@Component({
  selector: 'app-adiantamentos-form',
  templateUrl: './adiantamentos-form.component.html',
  styleUrls: ['./adiantamentos-form.component.css']
})
export class AdiantamentosFormComponent implements OnInit {

  adiantamento: Adiantamento;
  success: boolean = false;

  constructor( private adiantamentosService: AdiantamentosService, private uploadFileService: UploadFileService) {
    this.adiantamento = new Adiantamento();
    this.adiantamento.solicitacao = new Solicitacao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.adiantamento);
    this.adiantamentosService
      .salvar(this.adiantamento)
      .subscribe( response => {
        this.success = true;
      } );
  }

  selectFiles(event): void {
    this.adiantamento.progressInfos = [];
    this.adiantamento.selectedFiles = event.target.files;
  }

  uploadFiles(idSolicitacao): void {
    this.adiantamento.message = '';

    for (let i = 0; i < this.adiantamento.selectedFiles.length; i++) {
      this.upload(i, this.adiantamento.selectedFiles[i], idSolicitacao);
    }
  }

  upload(idx, file, idSolicitacao): void {
    this.adiantamento.progressInfos[idx] = { value: 0, fileName: file.name };

    this.uploadFileService.upload(file, idSolicitacao).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.adiantamento.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.adiantamento.fileInfos = this.uploadFileService.getFiles();
        }
      },
      err => {
        this.adiantamento.progressInfos[idx].value = 0;
        this.adiantamento.message = 'Não foi possível fazer upload do arquivo:' + file.name;
      });
  }

}
