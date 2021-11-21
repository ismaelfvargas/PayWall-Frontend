import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {MatDividerModule} from "@angular/material/divider";
import {HighchartsChartModule} from "highcharts-angular";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatDividerModule,
    HighchartsChartModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
