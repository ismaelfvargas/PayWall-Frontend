import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {AreaComponent} from "./widgets/area/area.component";
import {HighchartsChartModule} from "highcharts-angular";


@NgModule({
  declarations: [
    AreaComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HighchartsChartModule
  ],
  exports: [
    AreaComponent
  ]
})
export class SharedModule { }
