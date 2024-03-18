import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-pd-insights',
  templateUrl: './pd-insights.component.html',
  styleUrls: ['./pd-insights.component.scss']
})
export class PdInsightsComponent implements OnInit {

  PRIORITY_LIST: any = [];
  MACHINE_ISSUES_LIST: any = [];

  public xAxisLabelName = 'Problem Cause';
  public yAxisLabelName = 'Count';


  isPriorityLoaded: boolean = false;
  isProblemsLoaded: boolean = false;
  isIssuesLoaded: boolean = false;


  innerWidth:any;
  innerHeight:any;
  height: number | any;
  offsetX: number | any;

  @HostListener('window:resize', ['$event'])

  onResize() {
    this.innerWidth = window.innerWidth-200;
    this.innerHeight = window.innerHeight-150;
    if(window.innerWidth <= 768) {
      this.height = 330;
      this.offsetX = 3;
    } else if (window.innerWidth === 820) {
      this.height = 352;
      this.offsetX = 3;
    } else if (window.innerWidth < 1025) {
      this.height = 357;
      this.offsetX = -15;
    } else {
      this.height = 412;
      this.offsetX = -55;
    }
    
  }

  constructor() { }

  ngOnInit(): void {
    this.onResize();
    this.finishLoading();

    this.PRIORITY_LIST = [
      { name: "Freezer temp out of range", value: 60 },
      { name: "Dispenser force out of range", value: 20 },
      { name: "Dispense stalled", value: 18 },
      { name: "Software Failure", value: 18 },

    ];
    this.MACHINE_ISSUES_LIST = [
      { name: "Freezer temp out of range", value: 8700 },
      { name: "Dispenser force out of range", value: 8000 },
      { name: "Dispense stalled", value: 7444 },
      { name: "Software Failure", value: 6855 },

    ];
  }

  finishLoading(){
    setTimeout(() => {
      this.isPriorityLoaded = true;
      this.isProblemsLoaded = true;
      this.isIssuesLoaded = true;
    }, 2000);
  }

}
