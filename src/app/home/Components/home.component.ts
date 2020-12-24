import { Component, OnInit } from '@angular/core';
import { ForecastModel } from 'src/app/Core/models/forecast.model';
import { WeatherModel } from 'src/app/Core/models/weather.model';
import { ApiService } from 'src/app/Core/services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  weatherModel: WeatherModel;
  forecastModel:ForecastModel;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
    this.getForecast();

  }

  getData() {
    this.apiService.getData().subscribe((weatherModel) => {
      this.weatherModel = weatherModel;
    });

  }

  getForecast() {
        this.apiService.getForecast().subscribe((forecastModel) => {
          this.forecastModel = forecastModel["list"]
        });
  }
}
