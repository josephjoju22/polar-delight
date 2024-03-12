import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge-chart-widget',
  templateUrl: './gauge-chart-widget.component.html',
  styleUrls: ['./gauge-chart-widget.component.scss']
})
export class GaugeChartWidgetComponent implements OnInit {
  @Input() widgetName : string|any;
  @Input() leftFooterName : string|any;
  @Input() rightFooterName : string|any;
  @Input() widgetType : string|any;
  @Input() widgetData : string|any;
  @Input() needleValue : string|any;
  @Input() min : string|any;
  @Input() max : string|any;
  scaleRange = DEFAULT_RANGE; 
  @Input() module: string|any;

  public canvasWidth = 125;
  // public needleValue = 80;
  public centralLabel = '';
  public name = '';
  public bottomLabel = 'Good';
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['darkred', 'orange', 'yellow', 'lightgreen', 'green'],
        arcDelimiters: [15, 40, 60, 90],
        rangeLabel: ['', ''],
      needleStartValue: 50,
  }

  footerColor = "red";
  defaultMax: number = 100;

  constructor() { }

  ngOnInit(): void {
  this.scaleRange = DEFAULT_RANGE; 

  } 

}

const DEFAULT_RANGE = [
  {
    from: "0",
    to: "10",
    color: "darkred"
  },
  {
    from: "10",
    to: "25",
    color: "orange"
  },
  {
    from: "25",
    to: "45",
    color: "yellow"
  },
  {
    from: "45",
    to: "80",
    color: "lightgreen"
  },
  {
    from: "80",
    to: "100",
    color: "green"
  }
]
