import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PagamentosService} from "../../../pagamentos.service";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  constructor(private service: PagamentosService)
  {
    this.service
      .dashboard()
      .subscribe(response => {
        console.log(this.logicaDash(response))
        let d = this.logicaDash(response)
        this.chartOptions = {
          series: d[0],
          chart: {
            height: 350,
            type: "line",
            dropShadow: {
              enabled: true,
              color: "#000",
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2
            },
            toolbar: {
              show: false
            }
          },
          // colors: ["#77B6EA", "#545454"],
          dataLabels: {
            enabled: true
          },
          stroke: {
            curve: "smooth"
          },
          title: {
            text: "Pedidos",
            align: "left"
          },
          grid: {
            borderColor: "#e7e7e7",
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: d[1],
            title: {
              text: "Data do vencimento"
            }
          },
          yaxis: {
            title: {
              text: "Total"
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
        };
      })
  }

  ngOnInit() {
    }

  logicaDash(data){
    // Lets
    let categories = []
    let finalData = {}

// Create basic structure
    for(let n = 0; n <= data.length-1; n++){
      let r = data[n]

      let t = r[0]
      let d = r[1]
      let c = r[2]

      categories.push(d)

      if(!finalData[t]){
        finalData[t] = {}
      }

      finalData[t][d] = c
    }
//

// Unique dates
    let uniqueCategories = Array.from(new Set(categories).values())
//

// Fill if 0 when data not exist
    for(let n = 0; n <= uniqueCategories.length-1; n++){
      let d0 = uniqueCategories[n]

      for (let d1 in finalData) {
        if(!finalData[d1][d0]){
          finalData[d1][d0] = 0
        }
      }
    }
//

// Final graphic data
    let graphicData = []

    for(let d in finalData){
      let f = {
        "name": d,
        "data": []
      }

      for(let n = 0; n <= uniqueCategories.length-1; n++){
        f["data"].push(finalData[d][uniqueCategories[n]])
      }

      graphicData.push(f)
    }

    let humanData = []

    for(let n in uniqueCategories){
      humanData.push(uniqueCategories[n].split("T")[0])
    }

    return [graphicData, humanData];
  }

}
