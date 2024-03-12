import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-number-card',
  templateUrl: './custom-number-card.component.html',
  styleUrls: ['./custom-number-card.component.scss']
})
export class CustomNumberCardComponent implements OnInit {

  @Input() cardFooterColor : string | any;
  @Input() attribute : string | any;
  @Input() attributeValue : string | any;
  @Input() imageName : string | any;
  @Input() screenName : string | any;
  @Input() unit: string = '';
  @Input() attributeValue1: string | any;

  constructor() { }

  ngOnInit(): void {
  }

}
