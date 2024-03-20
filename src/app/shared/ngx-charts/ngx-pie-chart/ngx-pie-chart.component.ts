import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-pie-chart',
  templateUrl: './ngx-pie-chart.component.html',
  styleUrls: ['./ngx-pie-chart.component.scss']
})
export class NgxPieChartComponent implements OnInit {

  @Input() series: any;
  @Input() isIssuesLoaded: boolean | undefined;
  view: any=[];


  legendPosition: any = 'top';
  colorScheme: any;
  domain: String[] = [];

  scrHeight: any;
  scrWidth: any;
  
    labelFormatting(name:any){
      let self: any = this;
      let data = self.series.filter((x:any) => x.name == name);
      if(data.length > 0) {
        return `${data[0].value}`;
      } else {
        return name;
      }

    }

    @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event:any) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if (this.scrWidth > 641 && this.scrWidth <= 820) {
      this.view = [19, 200];
    } else if (this.scrWidth > 820 && this.scrWidth <= 961) {
      this.view = [20, 200];
    } else if (this.scrWidth > 961 && this.scrWidth <= 1025) {
      this.view = [97, 200];
    } else if (this.scrWidth > 1025 && this.scrWidth <= 1112) {
      this.view = [17, 200];
    }
  }




  constructor() { }

  ngOnInit(): void {

    if (this.isIssuesLoaded) {
      // this.xAxisLabel = this.xAxisLabelName;
      // this.yAxisLabel = this.yAxisLabelName;
      for(let i=0;i<this.series.length;i++) {
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
      // this.xAxisLabel = 'Problem Cause';
      // this.yAxisLabel = 'Risk Priority Number';
    // this.results.forEach((element) => {
    //   if (element.value >= 20) {
    //     this.domain.push('red');
    //   } else {
    //     this.domain.push('yellow');
    //   }
      
    // });

    for(let i=0;i<this.series.length;i++) {
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
      console.log('hi')
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
