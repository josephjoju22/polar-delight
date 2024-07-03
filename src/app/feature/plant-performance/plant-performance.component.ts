import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plant-performance',
  templateUrl: './plant-performance.component.html',
  styleUrls: ['./plant-performance.component.scss']
})
export class PlantPerformanceComponent implements OnInit {

  displayedColumns: string[] = [
    'VendorId',
    'VendorName',
    'Location',
    'OpenTickets',
    'TotalTickets',
  ];
  // @ViewChild('paginator') paginator: MatPaginator;
  @Output() nextPageEvent = new EventEmitter<{
    offset: string;
    limit: string;
  }>();
  dataSourceTotalSize: any;
  CUSTOMER_DETAILS: CustomerInfo[] = [];
  showWidgets = false;
  OPERATION_SUMMARY_LIST: OperationSummary[] = [];
  TOP_POWER_LIST: PowerConsumption[] = [];
  ASSETS_STATUS_LIST: AssetsStatus[] = [];
  public barChartInput: any[] = [];
  public lineChartInput: any[] = [];
  isPieLoad: boolean = false;
  isParetoLoaded: boolean = false;
  loadingSpin: boolean = true;
  // apiUrl: string =
  //   environment.coreApiBaseUrl + environment.operationSummaryEndPoint;
  // apiUrlTopPowerConsumptions: string =
  //   environment.coreApiBaseUrl + environment.topPowerConsumptions;
  // apiUrlOnlineOfflineStatus: string =
  //   environment.coreApiBaseUrl + environment.onlineOfflineStatus;
  // fetchAll = environment.coreApiBaseUrl + environment.opeartionSummaryApiUrl;
  // totalOnlineAssets: number = 0;
  // totalOfflineAssets: number = 0;
  // avgMaintSpent: string;
  // avgMaintTime: string;
  // serviceTicketsOpen: string;
  // private updateSubscription: Subscription;
  // @Input() screenName: string;
  isOperationSummary: any;
  inputPieGridData: any= 83;
  inputPieGridData1: any=17;
  inputPieGridDataInventory:any=73;
  inputPieGridDataInventory1:any=27;
  inputPieGridStock: any;
  inputPieGridConsumed: any;
  maintenancePlanned: any;
  maintenanceBreakdown: any;
  maintenancePredictive: any;
  label: string = 'Total';
  public colors: any[] = [
    {
      to: 30,
      color: '#e44d25',
    },
    {
      from: 25,
      to: 100,
      color: 'green',
    },
  ];
  data: any;
  // dataSource: MatTableDataSource<unknown>;
  // currentUserRole: string;
  // timeoutConfig: string;
  duration: any;
  MACHINE_ISSUES_LIST = [
    { name: "Freezer temp out of range", value: 87 },
    { name: "Dispenser force out of range", value: 80 },
    { name: "Dispense stalled", value: 44 },

  ];

  series = [{
    name: 'temp out of range',
    value: 28.04,
    label: '28.04%'
}, 
{
    name: 'out of range',
    value: 25.90,
    label: '25.90%'
},
{
  name: 'stalled',
  value: 24.00,
  label: '24.00%'
}]

  constructor(
    // public dialog: MatDialog,
    // private service: DataService,
    // private authService: MsalService,
    // private http: HttpClient,
    // private auth: MsalService,
    // private cd: ChangeDetectorRef
  ) { }

  

  openDialog() {
    // this.dialog.open(PlantTwinDialogComponent);
  }
  innerWidth: any;
  innerHeight: any;
  height:any;
  width:any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth - 200;
    this.innerHeight = window.innerHeight - 150;
  }
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event?:any) {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 641 && this.innerWidth <= 961) {
      this.height = '100';
      this.width = '100';
    } else if (this.innerWidth > 961 && this.innerWidth <= 1025) {
      this.height = '90';
      this.width = '90';
    } else {
      this.height = '110';
      this.width = '110';
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isPieLoad=true
      this.loadingSpin=false
    }, 1200);

    // if (localStorage.getItem('slideshow') === null) {
    //   this.timeoutConfig = localStorage.getItem('slideshowlist');
    // } else {
    //   this.timeoutConfig = localStorage.getItem('slideshow');
    // }
    // this.parseConfiguration(JSON.parse(this.timeoutConfig));
    // this.currentUserRole = localStorage.getItem('role');
    // if (this.currentUserRole === 'TV User') {
    //   setTimeout(() => {
    //     if (this.showWidgets) {
    //       this.showWidgets = false;
    //     } else {
    //       this.showWidgets = true;
    //     }
    //   }, this.duration * 1000 - 2000);
    // }
    // this.loadCustomerTable();
    this.onOrientationChange();
    this.onResize();
    this.label = 'Total(hrs)';
    this.isOperationSummary = true;
    // this.service.setData(this.isOperationSummary);
    // this.getOperationSummary();
    // setTimeout(() => this.loadData(), 2000);
    // this.topPowerConsumptions();
    // this.assetsStatus();
  }

  // getOperationSummary() {
  //   this.getData().subscribe((res:any) => {
  //     this.isPieLoad = true;
  //     this.data = res;
  //     this.avgMaintSpent = '$' + res.AvgMaintSpend;
  //     this.avgMaintTime = res.AvgMaintTime + ' Hrs';
  //     this.serviceTicketsOpen = res.ServiceTicketOpen;
  //     this.maintenancePlanned = this.data.PlannedPrcnt;
  //     this.maintenanceBreakdown = this.data.BreakdownPrcnt;
  //     this.maintenancePredictive = this.data.CorrectivePrcnt;
  //   });
  // }

  // loadCustomerTable() {
  //   custome_table_data.forEach((element) => {
  //     this.CUSTOMER_DETAILS.push(element);
  //   });
  //   this.dataSource = new MatTableDataSource(this.CUSTOMER_DETAILS);
  // }

  showCustomerInfo() {
    if (this.showWidgets) {
      this.showWidgets = false;
    } else {
      this.showWidgets = true;
    }
  }

  parseConfiguration(config:any) {
    config.forEach((element:any) => {
      if (element.screen === 'Polar Delight') {
        this.duration = element.duration;
      }
    });
  }

  pageChanged(event:any) {
    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;

    // this.alertTable = new AlertTableComponent(null,this.http,null,null);
    //this.alertTable.pageChanged(event);
    this.nextPageEvent.emit({
      offset: pageIndex.toString(),
      limit: pageSize.toString(),
    });
  }
  // loadData() {
  //   this.getOperationSummaryDetails().subscribe(
  //     (response:any) => {
  //       this.isPieLoad = true;

  //       response.operations.forEach((element:any) => {
  //         console.log("Data: " + JSON.stringify(element));
  //         this.OPERATION_SUMMARY_LIST.push(element);
  //       });
  //       //console.log("this.OPERATION_SUMMARY_LIST: " + JSON.stringify(this.OPERATION_SUMMARY_LIST))
  //       this.OPERATION_SUMMARY_LIST.forEach((element) => {
  //         this.totalOnlineAssets = element.assetsOnline;
  //         this.totalOfflineAssets = element.assetsOffline;
  //          this.avgMaintSpent = "$"+element.avgMaintenanceSpend;
  //          this.avgMaintTime = element.avgMaintenanceTime + " Mins";
  //          this.serviceTicketsOpen = element.serviceTicketsOpen;
  //         this.inputPieGridData = element.uptime;
  //         this.inputPieGridData1 = element.downtime;
  //         this.inputPieGridStock = element.instock;
  //         this.inputPieGridConsumed = element.consumed;
  //         //  this.maintenancePlanned = this.data.PlannedPrcnt;
  //         //  this.maintenanceBreakdown = this.data.BreakdownPrcnt;
  //          this.maintenancePredictive = this.data.CorrectivePrcnt;
  //       });
  //     },
  //     (error) => {
  //       // this.isPieLoad = true;
  //       console.log('There Was A Problem');
  //     }
  //   );
  // }

  // getData(): Observable<any> {
  //   let idToken = localStorage.getItem('msal.idtoken');
  //   const headers = {
  //     'content-type': 'application/json',
  //     Authorization: 'Bearer ' + idToken,
  //   };
  //   return this.http.post(this.fetchAll, '', { headers: headers });
  // }

  // getOperationSummaryDetails(): Observable<any> {
  //   let idToken = localStorage.getItem('msal.idtoken');
  //   const headers = {
  //     'content-type': 'application/json',
  //     Authorization: 'Bearer ' + idToken,
  //   };
  //   return this.http.post(this.apiUrl, '', { headers: headers });
  // }

  // topPowerConsumptions() {
  //   this.loadingSpin = true;

  //   this.getTopPowerConsumptions().subscribe(
  //     (response) => {
  //       this.isParetoLoaded = true;

  //       response.forEach((element) => {
  //         //console.log("Data: " + JSON.stringify(element));
  //         this.TOP_POWER_LIST.push(element);
  //       });
  //       this.TOP_POWER_LIST.forEach((element) => {
  //         this.barChartInput.push({
  //           name: element.cityName,
  //           value: element.unitConsumption,
  //         });
  //         this.lineChartInput.push({
  //           name: element.cityName,
  //           value: element.consumptionPercentage,
  //         });
  //       });
  //       this.loadingSpin = false;
  //       hideloader();
  //       //console.log("Data: " + JSON.stringify(this.barChartInput))
  //     },
  //     (error) => {
  //       console.log('There Was A Problem');
  //     }
  //   );
  //   function hideloader() {
  //     //document.getElementById('loading').style.display = 'none';
  //   }
  // }
  // getTopPowerConsumptions(): Observable<any> {
  //   let idToken = localStorage.getItem('msal.idtoken');
  //   const headers = {
  //     'content-type': 'application/json',
  //     Authorization: 'Bearer ' + idToken,
  //   };
  //   return this.http.post(this.apiUrlTopPowerConsumptions, '', {
  //     headers: headers,
  //   });
  // }
  // assetsStatus() {
  //   this.loadingSpin = true;

  //   this.getAssetsStatus().subscribe(
  //     (response) => {
  //       response.forEach((element) => {
  //         //console.log("Data: " + JSON.stringify(element));
  //         this.ASSETS_STATUS_LIST.push(element);
  //       });
  //       this.ASSETS_STATUS_LIST.forEach((element) => {
  //         if (element.displayName == 'MachineStatus') {
  //           if (element.serverEnableFlag == true) {
  //             this.totalOnlineAssets = this.totalOnlineAssets + 1;
  //           } else {
  //             this.totalOfflineAssets = this.totalOfflineAssets + 1;
  //           }
  //         }
  //       });

  //       console.log('totalOnlineAssets: ' + this.totalOnlineAssets);
  //       console.log('totalOfflineAssets: ' + this.totalOfflineAssets);
  //     },
  //     (error) => {
  //       console.log('There Was A Problem');
  //     }
  //   );
  // }
//   getAssetsStatus(): Observable<any> {
//     let idToken = localStorage.getItem('msal.idtoken');
//     const headers = {
//       'content-type': 'application/json',
//       Authorization: 'Bearer ' + idToken,
//     };
//     return this.http.post(this.apiUrlOnlineOfflineStatus, '', {
//       headers: headers,
//     });
//   }
}


export interface OperationSummary {
  Id: number;
  serviceTicketsOpen: string;
  avgMaintenanceSpend: string;
  avgMaintenanceTime: string;
  sparesInventoryInStock: string;
  maintenancePlanned: string;
  maintenanceBreakdown: string;
  maintenancePredictive: string;
  powerConsumption: string;
  availabilityUptime: string;
  availabilityDownTime: string;
  assetsOnline: string;
  assetsOffline: string;
  uptime: string;
  downtime: string;
  instock: string;
  consumed: string;
  freeFld1: string;
  freeFld2: string;
  freeFld3: string;
  RModTime: string;
  RCreTime: string;
}
export interface PowerConsumption {
  cityName: string;
  unitConsumption: number;
  consumptionPercentage: number;
}
export interface AssetsStatus {
  displayName: string;
  folder: string;
  serverEnableFlag: boolean;
  value: number;
}

export interface CustomerInfo {
  id: number;
  name: string;
  location: string;
  open: number;
  total: number;
}

const custome_table_data = [
  { id: 1, name: 'Sheetz North', location: 'Seatle', open: 12, total: 50 },
  { id: 2, name: 'Sheetz East', location: 'Chicago', open: 10, total: 35 },
  { id: 3, name: 'Sheetz West', location: 'San Jose', open: 20, total: 100 },
  { id: 4, name: 'Sheetz South', location: 'Louisville', open: 42, total: 155 },
];

