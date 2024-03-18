import { Component, HostListener, Input, OnInit } from '@angular/core';
// import { single } from './vertical_bar_chart_data.js';

@Component({
  selector: 'app-ngx-vertical-bar',
  templateUrl: './ngx-vertical-bar.component.html',
  styleUrls: ['./ngx-vertical-bar.component.scss']
})
export class NgxVerticalBarComponent implements OnInit {

  @Input() xAxisLabelName: string | undefined;
  @Input() yAxisLabelName: string | undefined;
  @Input() isIssuesLoaded: boolean | undefined;
  view: any;
  single: any[] | undefined;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel: any;
  showYAxisLabel = true;
  yAxisLabel: any;
  barPadding = 10;
  legendPosition: any = 'top';
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
  onOrientationChange() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if (this.scrWidth > 641 && this.scrWidth <= 820) {
      this.view = [197, 200];
    } else if (this.scrWidth > 820 && this.scrWidth <= 961) {
      this.view = [280, 200];
    } else if (this.scrWidth > 961 && this.scrWidth <= 1025) {
      this.view = [197, 200];
    } else if (this.scrWidth > 1025 && this.scrWidth <= 1112) {
      this.view = [197, 200];
    }
  }


  constructor() { }

  onSelect(event:any) {
    console.log(event);
  }

  ngOnInit(): void {
    this.onOrientationChange();

    if (this.isIssuesLoaded) {
      this.xAxisLabel = this.xAxisLabelName;
      this.yAxisLabel = this.yAxisLabelName;
      for(let i=0;i<this.results.length;i++) {
        if(i==0) {
          this.domain.push('rgb(255, 99, 88)');
        } else if (i===1) {
          this.domain.push('rgb(76, 209, 128)');
        } else if (i===2) {
          this.domain.push('rgb(75, 95, 250)');
        } else if (i===3) {
          this.domain.push('rgb(255, 225, 98)');
        }
      }
      // this.results.forEach((element) => {
      //   if (element.value >= 8500) {
      //     this.domain.push('red');
      //   } else if(element.value < 7000){
      //     this.domain.push('green');
      //   } else {
      //     this.domain.push('yellow');
      //   }
      // });
      //this.domain.push('green');
    } else {
      this.xAxisLabel = 'Problem Cause';
      this.yAxisLabel = 'Risk Priority Number';
    // this.results.forEach((element) => {
    //   if (element.value >= 20) {
    //     this.domain.push('red');
    //   } else {
    //     this.domain.push('yellow');
    //   }
      
    // });

    for(let i=0;i<this.results.length;i++) {
      if(i==0) {
        this.domain.push('rgb(255, 99, 88)');
        } else if (i===1) {
          this.domain.push('rgb(76, 209, 128)');
        } else if (i===2) {
          this.domain.push('rgb(75, 95, 250)');
        } else if (i===3) {
          this.domain.push('rgb(255, 225, 98)');
      }
    }
  }
    this.colorScheme = { domain: this.domain };

    
    if (this.scrWidth > 641 && this.scrWidth <= 961) {
      this.view = [197, 200];
    } else if (this.scrWidth > 961 && this.scrWidth <= 1025) {
      this.view = [280, 200];
    } else if (this.scrWidth > 1025 && this.scrWidth <= 1112) {
      this.view = [280, 200];
    } else if (this.scrWidth > 1112 && this.scrWidth <= 1180) {
      this.view = [280, 200];
    } else if (this.scrWidth > 1180 && this.scrWidth <= 1600) {
      this.view = [350, 230];
    } else {
      this.view = [520, 280];
    }
  }

}
