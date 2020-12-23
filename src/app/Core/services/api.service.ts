import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherModel } from '../models/weather.model';
import { ForecastModel } from '../models/forecast.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get<WeatherModel>(`${environment.API_URL_DATA}/data/2.5/weather?id=${environment.id}&appid=${environment.API_KEY}`);
  }
  public getForecast(){
    return this.http.get<ForecastModel[]>(`${environment.API_URL_FORECAST}/data/2.5/forecast?id=${environment.id}&appid=${environment.API_KEY}&cnt=3`)
  }

  public getWeatherById(id:number){
    return this.http.get<WeatherModel>(`${environment.API_URL_DATA}/data/2.5/weather?id=${id}&appid=${environment.API_KEY}`);
  }
}

