import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoFormComponent } from './pagamento-form/pagamento-form.component';
import { PagamentoListaComponent } from './pagamento-lista/pagamento-lista.component';
import {RouterModule} from "@angular/router";
import { PagamentoListaUsersComponent } from './pagamento-lista-users/pagamento-lista-users.component';


@NgModule({
  declarations: [
    PagamentoFormComponent,
    PagamentoListaComponent,
    PagamentoListaUsersComponent
  ],
  imports: [
    CommonModule,
    PagamentoRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    PagamentoFormComponent,
    PagamentoListaComponent,
    PagamentoListaUsersComponent
  ]
})
export class PagamentoModule { }
