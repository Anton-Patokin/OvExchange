import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material-module";


import { AppComponent } from './app.component';
import {ExchangeHttpDataService} from "./currency_overview/currency-overview/exchange-http-data.service";
import {HttpClientModule} from "@angular/common/http";
import { CurrencyOverviewComponent } from './currency_overview/currency-overview/currency-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyOverviewComponent,
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
