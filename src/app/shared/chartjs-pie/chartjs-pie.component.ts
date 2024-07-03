import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
// import * as pluginLabels from 'chartjs-plugin-labels';
@Component({
  selector: 'app-chartjs-pie',
  templateUrl: './chartjs-pie.component.html',
  styleUrls: ['./chartjs-pie.component.scss']
})
export class ChartjsPieComponent implements OnInit {

  @Input() maintenancePlanned: any;
  @Input() maintenanceBreakdown: any;
  @Input() maintenancePredictive: any;
  canvas: any;
  ctx: any;
  pluginLabels: any;
  @ViewChild('mainteChart') mychart: any;
  
  
  public data: any;
  constructor() {
    // this.pluginLabels = pluginLabels;
  }
  // ngAfterViewInit() {
  //   var mainteData = {
  //     labels: [
  //       "Planned",
  //       "Breakdown",
  //       "Predictive",
  //     ],

  //     datasets: [
  //       {
  //         data: [30, 30, 40],
  //         backgroundColor: [
  //           "#085f01",
  //           "#E44D25",
  //           "rgba(255, 166, 0, 0.805)",
  //         ],
  //         borderWidth: 0,
  //       }]
  //   };
  //   this.canvas = this.mychart.nativeElement;
  //   this.ctx = this.canvas.getContext('2d');
  //   var oilCanvas = document.getElementById("mainteChart");
  //   var pieChart = new Chart(this.ctx, {
  //     type: 'doughnut',
  //     data: mainteData,
  //     options: {
  //       legend: {
  //         display: false
  //       },
  //       cutoutPercentage: 60,
  //       plugins: {
  //         labels: [
  //           {
  //             render: 'label',
  //             position: 'outside',
  //             fontColor: 'rgb(209, 209, 209)',
  //           },
  //           {
  //             render: 'percentage',
  //             fontColor: 'rgb(209, 209, 209)',
  //           }
  //         ]
  //       }
  //     }
  //   });
  // }
  ngOnInit(): void {
    this.data = [{
      kind: 'Planned', share: this.maintenancePlanned
    }, {
      kind: 'Breakdown', share: this.maintenanceBreakdown
    }, {
      kind: 'Predictive', share: this.maintenancePredictive
    }];
  }
  public autofit = true;
 

  public labelContent(e: any): string {
    // console.log(e);
    return e.category+ ":" + " " + e.value + "%";
  }
}
