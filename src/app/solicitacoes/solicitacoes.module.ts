import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SolicitacoesRoutingModule} from './solicitacoes-routing.module';
import {SolicitacoesFormComponent} from './solicitacoes-form/solicitacoes-form.component';


@NgModule({
  declarations: [
    SolicitacoesFormComponent
  ],
  imports: [
    CommonModule,
    SolicitacoesRoutingModule,
    FormsModule
  ],
  exports: [
    SolicitacoesFormComponent
  ]
})
export class SolicitacoesModule {
}
