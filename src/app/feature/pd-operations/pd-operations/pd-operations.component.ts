import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pd-operations',
  templateUrl: './pd-operations.component.html',
  styleUrls: ['./pd-operations.component.scss']
})
export class PdOperationsComponent implements OnInit {

  assetLocation : string =' thrissur '
  pdOperationData:any;
  podInterval: any;
  next: number = 0;
  capPosition: any;

  constructor() { }

  assetIdList=['one','two','three'];

  ngOnInit(): void {
    this.setDefaultCapPosition();
    this.setDefaultValues();
  }

  onChnageOfAsset(e:any){
    console.log(e);
    
  }
  openDialog(){
    console.log('hi');
    
  }

  get randomNumberInteval() {
    return  Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }

  setDefaultCapPosition() {
    this.capPosition = [
      {
        name: 'Vanilla',
        value: this.randomNumberInteval,
      },
      {
        name: 'Strawberry ShortCake',
        value: this.randomNumberInteval,
      },
      {
        name: 'Chocolate',
        value: this.randomNumberInteval,
      },
      {
        name: 'Mint & Chocolate',
        value: this.randomNumberInteval,
      },
      {
        name: 'Cookies & Cream',
        value: this.randomNumberInteval,
      },
      {
        name: 'Salty Caramel',
        value: this.randomNumberInteval,
      },
    ];
  }



  setDefaultValues() {
    this.pdOperationData = {
      machineStatus: 'Online',
      capPositionData: {
        capPosition: 'Down',
        status: 'FAULT',
      },
      ramPositionData: {
        min: '55',
        max: '95',
        ramPosition: '75',
        status: 'OK',
      },
      cupDetect: 'No',
      assetHealthData: {
        needleValue: 95,
        assetHealth: 'Very Good',
      },
      podBinDoor: 'Closed',
      dispensePressureData: {
        min: '5',
        needleValue: 46,
        max: '40',
        dispensePressure: '46',
      },
      freezerTemperatureData: {
        freezerTemperature: '5',
        min: '-50',
        needleValue: 5,
        max: '5',
      },
      maxRamLoadData: {
        min: '10',
        ramLoad: '50',
        max: '25',
        status: 'FAULT',
      },
      cycleTimeData: {
        cycleTime: '13',
        min: '5',
        needleValue: 13,
        max: '60',
      },
      customerDoor: 'Open',
      assetLocation: 'Cleveland',
      assetId: 'PD_01',
      podCode: '85025',
      cycleStatusData: {
        cycleStatus: 'Complete',
        status: 'OK',
      },
    };
    this.generatePodData(); // Set interval
  }
  
  generatePodData() {
    this.podInterval = setInterval(() => {
      if (this.pdOperationData.machineStatus === 'Online') {
        if (this.next >= this.capPosition.length) this.next = 0;
        const current = this.next;
        const value = this.capPosition[current].value;
        this.capPosition[current].value = value <= 1 ? 10 : value - 1;
        this.next += 1;
      }
    }, 2 * 60 * 1000);
  }


}
