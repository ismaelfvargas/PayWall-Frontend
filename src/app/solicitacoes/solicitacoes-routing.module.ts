import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitacoesFormComponent } from './solicitacoes-form/solicitacoes-form.component';
import {LayoutComponent} from "../layout/layout.component";

const routes: Routes = [
  { path: '' , component: LayoutComponent, children: [
      { path: 'solicitacoes-form' , component: SolicitacoesFormComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitacoesRoutingModule { }
