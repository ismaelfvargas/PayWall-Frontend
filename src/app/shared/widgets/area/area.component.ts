import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  // @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Gráfico'
      },
      subtitle: {
        text: 'Total de pagamentos, adiantamentos e prestação de contas'
      },
      tooltip: {
        split: true,
        valueSuffix: ' Reais'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      // series: this.data
      series: [{
        name: 'Pagamentos',
        data: [32000.00, 40386.00, 22310.00, 39200.00, 19900.00]
        }, {
        name: 'Adiantamentos',
        data: [14000.00, 6360.00, 2310.00, 9200.00, 1900.00]
      }, {
        name: 'Prestação de Contas',
        data: [2000.00, 3860.00, 2310.00, 3200.00, 1900.00]
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
