import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "../layout/layout.component";
import {UsuariosFormComponent} from "./usuarios-form/usuarios-form.component";

const routes: Routes = [
  { path: '' , component: LayoutComponent, children: [
      { path: 'usuarios-form', component: UsuariosFormComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
