import { Component, Input, OnInit } from '@angular/core';
import { ForecastModel } from 'src/app/Core/models/forecast.model';

@Component({
  selector: 'app-listdaysforecast',
  templateUrl: './listdaysforecast.component.html',
  styleUrls: ['./listdaysforecast.component.sass']
})
export class ListdaysforecastComponent implements OnInit {
  @Input() forecastModel : ForecastModel;
  constructor() { }

  ngOnInit(): void {
  }

}
