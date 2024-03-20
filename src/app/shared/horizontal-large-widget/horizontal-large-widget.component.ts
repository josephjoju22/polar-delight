import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-large-widget',
  templateUrl: './horizontal-large-widget.component.html',
  styleUrls: ['./horizontal-large-widget.component.scss']
})
export class HorizontalLargeWidgetComponent implements OnInit {

  @Input() widgetName : string | undefined;
  @Input() leftFooterName : string | undefined;
  @Input() rightFooterName : string | undefined;
  @Input() widgetType : string | undefined;
  @Input() widgetData : any;
  @Input() xAxisLabelName: string | undefined;
  @Input() yAxisLabelName: string | undefined;
  @Input() isIssuesLoaded: boolean | undefined;
  @Input() series:any;


  constructor() { }

  ngOnInit(): void {
  }

}
