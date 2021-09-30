import { Component, OnInit } from '@angular/core';

import { Solicitacao } from '../solicitacao';
import { SolicitacoesService } from '../../solicitacoes.service';

@Component({
  selector: 'app-solicitacoes-form',
  templateUrl: './solicitacoes-form.component.html',
  styleUrls: ['./solicitacoes-form.component.css']
})
export class SolicitacoesFormComponent implements OnInit {

  solicitacao: Solicitacao;
  success: boolean = false;

  constructor( private service: SolicitacoesService ) {
    this.solicitacao = new Solicitacao();
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.solicitacao)
      .subscribe( response => {
          this.success = true;
      } );
  }

}
