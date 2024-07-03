import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as atlas from 'azure-maps-control';
// import { locationData } from './locationDetails';
// import { environment } from '@env';
import { Observable } from 'rxjs';
// import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit,OnDestroy {
  // ASSETS_STATUS_LIST: AssetsStatus[] = [];
  // apiUrlOnlineOfflineStatus: string = environment.coreApiBaseUrl + environment.onlineOfflineStatus;
  assetStatusMap = new Map();
  assetLongitudeMap = new Map();
  assetLatitudeMap = new Map();
  assetAddressMap = new Map();
  interval: any;
  // autoRefreshPeriod = environment.azureMapAutoRefreshPeriodInSeconds * 1000;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.assetsStatus();
    // Set a 1 second delay in loading azure map
    // setTimeout(() => {
    //  this.rendermap(this.assetMap);
    // },1000);
    //  this.interval = setInterval(() => {
    //   this.assetsStatus();
    //   this.rendermap(this.assetMap);
    
    // }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  rendermap(assetMap:any, assetLongitudeMap:any, assetLatitudeMap:any, assetAddressMap:any){
     /* Instantiate map to the div with id "map" */
     var map = new atlas.Map('myMap', {
      style: 'night',


    center: [-92.779633, 40.543682],
    zoom: 3,
    view: "Auto",
    language: 'en-US',
    showLogo: false,
    showFeedbackLink: false,
    showBuildingModels: true,
    interactive: true,
    authOptions: {
      authType: atlas.AuthenticationType.subscriptionKey,
      subscriptionKey: 'xwQqZiixARe22S3Yq7BP5qY3i-Q1TGP3pDDEqU9EsLc'
    }
  });

  //Update the copyright information on Azure Map
  var x = document.getElementsByClassName("map-copyright");
  x[0].innerHTML="<div style=\"display: flex;flex-direction: row;position: relative;bottom: 1px;right: 5px;\">©2021 EY IoT All Rights Reserved, ©2019 Microsoft</div>"

  //Add controls on Azure Map
  map.controls.add([
    new atlas.control.ZoomControl(),
    new atlas.control.PitchControl(),
    new atlas.control.CompassControl(),
    new atlas.control.StyleControl()
  ], {
    position: atlas.ControlPosition.TopRight
  });
  let _$ = this;
  //Wait until the map resources are ready.
  map.events.add('ready', function () {

    //Define an HTML template for a custom popup content laypout.
    var popupTemplate = '<div style="max-width: 240px;font-size: 6px;"><div style="max-width: 240px;font-size: 10px;"font-weight: bold;>{name}&nbsp;&nbsp;&nbsp;<img src="assets/images/online.png"/></div>{description}</div>';

    //Create a data source and add it to the map.
    var dataSource = new atlas.source.DataSource();
    map.sources.add(dataSource);

    let locations : any[] = [];
    var assets = assetMap.keys();
    for(var assetName of assets ){

      var point = new atlas.data.Feature(new atlas.data.Point([assetLongitudeMap.get(assetName), assetLatitudeMap.get(assetName)]), {
        name: assetName,
        description: assetAddressMap.get(assetName),
      //  status : locationData[i].status,
        available: assetMap.get(assetName),
                
      });
      locations.push(point);
    }

    dataSource.add(locations);
    //Create a layer to render point data.
    let symbolLayer = new atlas.layer.SymbolLayer(dataSource, undefined, {
      iconOptions: {
        image: [
            'case',
            ['get', 'available'], 'pin-darkblue',
            'pin-red'
        ]
    }
    });

    //Add the polygon and line the symbol layer to the map.
    map.layers.add(symbolLayer);

    //Create a popup but leave it closed so we can update it and display it later.
    var popup = new atlas.Popup({
      pixelOffset: [0, -18],
      closeButton: false,
      fillColor: 'rgba(0,0,0,0.8)',
    });

    //Add a hover event to the symbol layer.
    map.events.add('mouseover', symbolLayer, function (e) {
      //Make sure that the point exists.
      if (e.shapes && e.shapes.length > 0 && e.shapes[0] instanceof atlas.Shape) {
        var content, coordinate;
        var properties = e.shapes[0].getProperties();
        if(properties.available == true){
          content = '<div style="max-width: 240px;font-size: 6px;"><div style="max-width: 240px;font-size: 10px;"font-weight: bold;>'+properties.name+': Online&nbsp;&nbsp;&nbsp;<img src="assets/images/online.png"/></div>'+properties.description+'</div>';
        }else{
          content = '<div style="max-width: 240px;font-size: 6px;"><div style="max-width: 240px;font-size: 10px;"font-weight: bold;>'+properties.name+': Offline&nbsp;&nbsp;&nbsp;<img src="assets/images/offline.png"/></div>'+properties.description+'</div>';
        }

        coordinate = e.shapes[0].getCoordinates();
        console.log(e.shapes[0])
        popup.setOptions({
          //Update the content of the popup.
          content: content,

          //Update the popup's position with the symbol's coordinate.
          // position: coordinate

        });
        //Open the popup.
        popup.open(map);
        console.log(popup.isOpen());
      }
    });

    map.events.add('mouseleave', symbolLayer, function () {
      popup.close();
    });

    map.events.add('click', symbolLayer, function (e) {
      if (e.shapes && e.shapes.length > 0 && e.shapes[0] instanceof atlas.Shape) {
        var properties = e.shapes[0].getProperties();
        console.log(properties.name);
        _$.router.navigate(["/home/polar-delight"], { queryParams: { tabIndex: 0,assetId : properties.name  } });
      }
      popup.close();
    });

  });
  }
  assetsStatus(){  
    // this.getAssetsStatus().subscribe(
  //     (response) => {
  //          response.forEach((element:any) => {
  //         //console.log("Data: " + JSON.stringify(element));
  //         this.ASSETS_STATUS_LIST.push(element);
  //       });
  //       this.ASSETS_STATUS_LIST.forEach(element =>{
  //         if(element.displayName == 'MachineStatus')
  //         this.assetStatusMap.set(element.folder, element.serverEnableFlag);
  //         else if(element.displayName == 'Longitude')
  //         this.assetLongitudeMap.set(element.folder, element.value)
  //         else if(element.displayName == 'Latitude')
  //         this.assetLatitudeMap.set(element.folder, element.value)
  //         else if(element.displayName == 'Address')
  //         this.assetAddressMap.set(element.folder, element.value)
  //       });
       
        // this.rendermap('polar', 42, 42, 'kansas');
  //     },
  //     (error) => {
  //       console.log("There Was A Problem")
  //     });
  // }
  // getAssetsStatus(): Observable<any> {
  //   let idToken = localStorage.getItem('msal.idtoken');
  //   const headers = {
  //     'content-type': 'application/json',
  //     'Authorization':'Bearer '+idToken

  //   }
  //   return this.http.post(this.apiUrlOnlineOfflineStatus, "", { 'headers': headers })
  // }
  }
}
export interface AssetsStatus {
  displayName: string;
  folder: string;
  serverEnableFlag: boolean;
  value: number;
  address: string;
}

