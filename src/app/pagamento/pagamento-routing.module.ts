import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagamentoFormComponent} from "./pagamento-form/pagamento-form.component";
import {PagamentoListaComponent} from "./pagamento-lista/pagamento-lista.component";
import {LayoutComponent} from "../layout/layout.component";
import { AuthGuard } from '../auth.guard';
import {PagamentoListaUsersComponent} from "./pagamento-lista-users/pagamento-lista-users.component";

const routes: Routes = [
  { path: '' , component: LayoutComponent,
    canActivate: [AuthGuard], children: [

      { path: 'pagamento-form', component: PagamentoFormComponent },
      { path: 'pagamento-form/:id', component: PagamentoFormComponent },
      { path: 'pagamento-listagem', component: PagamentoListaComponent },
      { path: 'pagamento-lista-users', component: PagamentoListaUsersComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
