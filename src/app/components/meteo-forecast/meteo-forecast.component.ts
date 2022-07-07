import { Component, OnInit } from '@angular/core';
import { HourlyForecast } from 'src/app/modal/daily-forecast';
import { MeteoService } from 'src/app/service/meteo.service';

@Component({
  selector: 'app-meteo-forecast',
  templateUrl: './meteo-forecast.component.html',
  styleUrls: ['./meteo-forecast.component.scss']
})
export class MeteoForecastComponent implements OnInit {

forecastArray: HourlyForecast[] = []

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
    this.meteoService.getData().subscribe({
      next: res => this.forecastArray = res,
      error: err => console.log(err)
    })
  }
}
