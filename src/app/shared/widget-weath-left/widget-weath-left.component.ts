import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from 'src/app/Core/models/weather.model';

@Component({
  selector: 'app-widget-weath-left',
  templateUrl: './widget-weath-left.component.html',
  styleUrls: ['./widget-weath-left.component.sass']
})
export class WidgetWeathLeftComponent implements OnInit {
 @Input() weatherModel : WeatherModel;
  weather: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
