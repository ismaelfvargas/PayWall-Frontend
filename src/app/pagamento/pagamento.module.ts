import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoFormComponent } from './pagamento-form/pagamento-form.component';
import { PagamentoListaComponent } from './pagamento-lista/pagamento-lista.component';
import {RouterModule} from "@angular/router";
import { AdiantamentosFormComponent } from './adiantamentos-form/adiantamentos-form.component';


@NgModule({
  declarations: [
    PagamentoFormComponent,
    PagamentoListaComponent,
    AdiantamentosFormComponent
  ],
  imports: [
    CommonModule,
    PagamentoRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    PagamentoFormComponent,
    PagamentoListaComponent,
    AdiantamentosFormComponent
  ]
})
export class PagamentoModule { }
