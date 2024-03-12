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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule,
    GaugesModule

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
