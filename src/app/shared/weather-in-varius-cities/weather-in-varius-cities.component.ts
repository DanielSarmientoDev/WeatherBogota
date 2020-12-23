import { Component, OnInit } from '@angular/core';
import { WeatherModel } from 'src/app/Core/models/weather.model';
import { ApiService } from 'src/app/Core/services/api.service';

@Component({
  selector: 'app-weather-in-varius-cities',
  templateUrl: './weather-in-varius-cities.component.html',
  styleUrls: ['./weather-in-varius-cities.component.sass']
})
export class WeatherInVariusCitiesComponent implements OnInit {

  weatherLyon: WeatherModel[];
  WeahterParis: WeatherModel[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getWeatherLyon();
    this.getWeatherParis();
  }
  getWeatherLyon(){
    this.apiService.getWeatherById(2996944).subscribe((weatherLyon) => {
      this.weatherLyon = weatherLyon;
      console.log(weatherLyon);
    });
  }
  getWeatherParis(){
    this.apiService.getWeatherById(2988507).subscribe((WeahterParis) => {
      this.WeahterParis = WeahterParis;
      console.log(WeahterParis);
    });
  }
}

