import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoForecastComponent } from './components/meteo-forecast/meteo-forecast.component';
import { CodePipe } from './code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MeteoForecastComponent,
    CodePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
