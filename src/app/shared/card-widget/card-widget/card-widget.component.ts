import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-widget',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.scss']
})
export class CardWidgetComponent implements OnInit {
  @Input() widgetName : string | any;
  @Input() leftFooterName : string | any;
  @Input() rightFooterName : string | any;
  @Input() widgetType : string | any;
  @Input() widgetData : any;
  @Input() min : string | any;
  @Input() max : string | any;
  @Input() type: string | any;
  @Input() module: string | any;

  footerColor = "red";
  widget_1: string[] = ['Max RAM Load', 'Power Supply', 'Hydraulic Pressure', 'Coolant Capacity', 'Hydraulic Oil NAS', 'Water Usage', 'Avg energy Usage/day', 'Actual Current', 'Thermostat', 'Power','Battery Charge','Bike Speed','Bike Power','Bike RPM','Bike Current','Battery Voltage','Trip','Odometer','Battery Current','App Mode','Distance To Empty'];
  widget_2: string[] = ['Cycle Status', 'Charge Cycle Status'];
  widget_3: string[] = ['RAM Position'];
  widget_4: string[] = ['Cap Position', 'Temperature'];
  widget_5: string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("SOC",this.widgetName);
  }

}
