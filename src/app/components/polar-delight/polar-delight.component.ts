import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';

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

  ngOnDestroy(): void {
    clearInterval(this.timeInterval);

  }

}
