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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PolarDelightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
