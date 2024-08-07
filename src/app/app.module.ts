import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './feature/header/header.component';
import { PolarDelightComponent } from './components/polar-delight/polar-delight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { DatePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';  
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RolePipe } from './shared/custom-pipe/role.pipe';
import { PdOperationsComponent } from './feature/pd-operations/pd-operations/pd-operations.component';
import { CustomNumberCardComponent } from './shared/custom-number-card/custom-number-card/custom-number-card.component';
import { GaugeChartWidgetComponent } from './shared/gauge-chart-widget/gauge-chart-widget/gauge-chart-widget.component';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { CardWidgetComponent } from './shared/card-widget/card-widget/card-widget.component';
import { PdInsightsComponent } from './feature/pd-insights/pd-insights.component';
import { HorizontalLargeWidgetComponent } from './shared/horizontal-large-widget/horizontal-large-widget.component';
import { NgxVerticalBarComponent } from './shared/ngx-charts/ngx-vertical-bar/ngx-vertical-bar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { NgxPieChartComponent } from './shared/ngx-charts/ngx-pie-chart/ngx-pie-chart.component';
import { PlantPerformanceComponent } from './feature/plant-performance/plant-performance.component';
import { MapComponent } from './shared/map/map.component';
import { VerticalBarChartComponent } from './shared/vertical-bar-chart/vertical-bar-chart.component';
import { ChartjsPieComponent } from './shared/chartjs-pie/chartjs-pie.component';
import { LoginComponent } from './components/login/login.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PolarDelightComponent,
    RolePipe,
    PdOperationsComponent,
    CustomNumberCardComponent,
    GaugeChartWidgetComponent,
    CardWidgetComponent,
    PdInsightsComponent,
    HorizontalLargeWidgetComponent,
    NgxVerticalBarComponent,
    NgxPieChartComponent,
    PlantPerformanceComponent,
    MapComponent,
    VerticalBarChartComponent,
    ChartjsPieComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule,
    GaugesModule,
    NgxChartsModule,
    ChartsModule

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
