import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {AreaComponent} from "./widgets/area/area.component";
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    AreaComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgApexchartsModule
  ],
  exports: [
    AreaComponent
  ]
})
export class SharedModule { }
