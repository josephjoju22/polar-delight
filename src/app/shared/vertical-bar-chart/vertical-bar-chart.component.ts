import { Component, HostListener, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent implements OnInit {

  @Input() yLabelName: string = 'Energy Consumption(kwh)';
  @Input() xLabelName:string= 'Location';
    view: any[] | undefined;
    single: any[] | undefined;
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel: any;
    showYAxisLabel = true;
    yAxisLabel:any;
    barPadding = 10;
    legendPosition: string = 'top';
    rotateXAxisTicks = true;
    trimXAxisTicks = true;
    trimYAxisTicks = true;
    maxXAxisTickLength = 8;
    maxYAxisTickLength = 8;
    @Input() results: any;
    colorScheme: any;
    domain: String[] = [];
    // colorScheme = {
    //   domain: ['red', 'red','yellow','green']
    // };
    scrHeight: any;
    scrWidth: any;
    @HostListener('window:orientationchange', ['$event'])
    onOrientationChange(event?:any) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      console.log(this.scrWidth);
      if (this.scrWidth > 641 && this.scrWidth <= 961) {
        this.view = [255, 200];
      } else if (this.scrWidth > 961 && this.scrWidth <= 1025) {
        this.view = [197, 200];
      } else if (this.scrWidth > 1025 && this.scrWidth <= 1112) {
        this.view = [197, 200];
      }
    }
  
    constructor() {
      //Object.assign(this, { single })
      Object.assign(this, this.results);
    }
  
    onSelect(event:any) {
      console.log(event);
    }
  
    ngOnInit(): void {
      this.yAxisLabel = this.yLabelName;
      this.xAxisLabel = this.xLabelName;
      // console.log("results: "+JSON.stringify(this.results))
      //Color of Bars based on value
      this.results.forEach((element:any) => {
        if (element.value >= 20) {
          this.domain.push('green');
        } else {
          this.domain.push('green');
        }
      });
      this.colorScheme = { domain: this.domain };
      this.onOrientationChange();
      if (this.scrWidth > 641 && this.scrWidth <= 961) {
        this.view = [181, 178];
      } else if (this.scrWidth > 961 && this.scrWidth <= 1025) {
        this.view = [255, 200];
      } else if (this.scrWidth > 1025 && this.scrWidth <= 1112) {
        this.view = [255, 200];
      } else if (this.scrWidth > 1025 && this.scrWidth <= 1600) {
        this.view = [335, 195];
      } else {
        this.view = [520, 280];
      }
    }

}
