import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagamentoFormComponent} from "./pagamento-form/pagamento-form.component";
import {PagamentoListaComponent} from "./pagamento-lista/pagamento-lista.component";
import {LayoutComponent} from "../layout/layout.component";
import {AdiantamentosFormComponent} from "./adiantamentos-form/adiantamentos-form.component";

const routes: Routes = [
  { path: '' , component: LayoutComponent, children: [
      { path: 'pagamento-form', component: PagamentoFormComponent },
      { path: 'pagamento-listagem', component: PagamentoListaComponent },
      { path: 'adiantamentos-form', component: AdiantamentosFormComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
