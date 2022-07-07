import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HourlyForecast } from '../modal/daily-forecast';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private BASE_URL = "https://api.open-meteo.com/v1/forecast?latitude=41.8955&longitude=12.4823&hourly=temperature_2m,relativehumidity_2m,pressure_msl,rain,weathercode,cloudcover,windspeed_10m,winddirection_10m"


  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<HourlyForecast[]>(this.BASE_URL).pipe(
      map (data => this.parseMeteoData(data))
    );
  }

  parseMeteoData(data: any){
    const temperatureArray = data.hourly.temperature_2m;
    const timeArray = data.hourly.time;
    const humidityArray = data.hourly.relativehumidity_2m;
    const rainArray = data.hourly.rain;
    const cloudCoverArray = data.hourly.cloudcover;
    const pressureArray = data.hourly.pressure_msl;
    const windDirectionArray = data.hourly.winddirection_10m;
    const codeArray = data.hourly.weathercode;
    const windSpeedArray = data.hourly.windspeed_10m

    const newHourlyForecast = [];
    for (let i = 0; i < temperatureArray.length; i++) {
      const temp = temperatureArray[i];
      const time = timeArray[i];
      const rain = rainArray[i]
      const cloudCover = cloudCoverArray[i]
      const pressure = pressureArray[i]
      const windDirection = windDirectionArray[i]
      const code = codeArray[i]
      const windSpeed = windSpeedArray[i]
      const humidity = humidityArray[i]
      const forecast: HourlyForecast = {date: time, temperature: temp, humidity: humidity, rain: rain, 
                                        cloudCover: cloudCover, pressure: pressure, windDirection: windDirection,
                                        code: code, windSpeed: windSpeed}
      newHourlyForecast.push(forecast);
    }
    return newHourlyForecast;

    // return data.hourly.time.map(time: string, index: number) => {
    //   return{date: time, temperature: data.hourly.temperature_2m[index]}
    // }
  }
}
