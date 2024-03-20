import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-polar-delight',
  templateUrl: './polar-delight.component.html',
  styleUrls: ['./polar-delight.component.scss'],
  encapsulation: ViewEncapsulation.None

})


export class PolarDelightComponent implements OnInit,OnDestroy {

  currentDate: any;
  timeInterval: any;
  innerWidth: any;
  innerHeight: any;
  currentTabIndex: number =0;
  userRole: any = 'Admin';




  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth - 200;
    this.innerHeight = window.innerHeight - 150;
    if(window.innerHeight < 600) {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }


  constructor(
    private datepipe: DatePipe

  ) 
  {}

  ngOnInit(): void {
    this.onResize();

    var curr = new Date(); // get current date

    this.currentDate = this.datepipe.transform(curr.getDate(), 'medium');

    this.timeInterval = setInterval(() => {
      this.currentDate = this.datepipe.transform(new Date, 'medium');
    }, 1000);

    console.log(this.currentDate);
    

  
  }
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // if (tabChangeEvent.tab.textLabel === 'Predictions') {
    //   document.body.style.overflowY = 'hidden';
    // } else if (
    //   window.matchMedia('(max-height: 580px)').matches &&
    //   tabChangeEvent.tab.textLabel != 'Predictions'
    // ) {
    //   document.body.style.overflowY = 'scroll';
    // } else {
    //   document.body.style.overflowY = 'hidden';
    // }
    // if (tabChangeEvent.tab.textLabel == 'Operations Summary') {
    //   if (this.isParams) {
    //     this.router.navigate(['.'], {
    //       relativeTo: this.route,
    //       queryParams: { tabIndex: 1 },
    //     });
    //   }
    //   this.service.currentData.subscribe((data) => {
    //     this.isOperationSummary = data;
    //   });
    // } else {
    //   this.service.currentData.subscribe((data) => {
    //     this.isOperationSummary = false;
    //   });
    // }

    // this.currentTabIndex = tabChangeEvent.index;
  };

  getSelectedIndex(): number {
    // console.log(this.currentTabIndex);
    
    return this.currentTabIndex;
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval);

  }

}
