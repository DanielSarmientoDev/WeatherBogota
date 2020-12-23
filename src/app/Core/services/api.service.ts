import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherModel } from '../models/weather.model';
import { ForecastModel } from '../models/forecast.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  id = 3688689;
  private API_KEY = "a0a95a5630d21f698ec56900d8cf22db";
  private API_URL_DATA = 'https://api.openweathermap.org';
  private API_URL_FORECAST = 'https://api.openweathermap.org/';
  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get<WeatherModel[]>(`${this.API_URL_DATA}/data/2.5/weather?id=${this.id}&appid=${this.API_KEY}`);
  }
  public getForecast(){
    return this.http.get<ForecastModel[]>(`${this.API_URL_FORECAST}/data/2.5/forecast?id=${this.id}&appid=${this.API_KEY}&cnt=3`)
  }

  public getWeatherById(id:number){
    return this.http.get<WeatherModel[]>(`${this.API_URL_DATA}/data/2.5/weather?id=${id}&appid=${this.API_KEY}`);
  }
}

