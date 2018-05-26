import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material-module";


import { AppComponent } from './app.component';
import {ExchangeHttpDataService} from "./currency_overview/exchange-http-data.service";
import {HttpClientModule} from "@angular/common/http";
import { CurrencyOverviewComponent } from './currency_overview/currency-overview/currency-overview.component';
import {HistoryOverviewComponent} from "./currency_overview/history-overview/history-overview.component";


@NgModule({
  declarations: [
    AppComponent,
    CurrencyOverviewComponent,
    HistoryOverviewComponent,
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
