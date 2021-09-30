import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdiantamentosFormComponent} from "./adiantamentos-form/adiantamentos-form.component";
import {LayoutComponent} from "../layout/layout.component";

const routes: Routes = [
  { path: '' , component: LayoutComponent, children: [
  { path: 'adiantamentos-form' , component: AdiantamentosFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdiantamentosRoutingModule { }
