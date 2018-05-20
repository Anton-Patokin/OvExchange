import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material-module";


import { AppComponent } from './app.component';
import {ExchangeHttpDataService} from "./exchange-http-data.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    ExchangeHttpDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
