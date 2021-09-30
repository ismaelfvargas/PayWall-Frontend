import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdiantamentosRoutingModule } from './adiantamentos-routing.module';
import { AdiantamentosFormComponent } from './adiantamentos-form/adiantamentos-form.component';


@NgModule({
  declarations: [AdiantamentosFormComponent],
  imports: [
    CommonModule,
    AdiantamentosRoutingModule,
    FormsModule
  ], exports: [
    AdiantamentosFormComponent
  ]
})
export class AdiantamentosModule { }
