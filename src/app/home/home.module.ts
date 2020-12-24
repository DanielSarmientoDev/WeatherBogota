import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './Components/home.component';
import { SharedModule } from '../shared/shared.module';
import { WidgetWeathLeftComponent } from '../shared/widget-weath-left/widget-weath-left.component';
import { ListdaysforecastComponent } from '../shared/listdaysforecast/listdaysforecast.component';
import { SectionPlaceComponent } from '../shared/section-place/section-place.component';
import { WeatherInVariusCitiesComponent } from '../shared/weather-in-varius-cities/weather-in-varius-cities.component';


@NgModule({
  declarations: [
    HomeComponent,
    WidgetWeathLeftComponent,
    ListdaysforecastComponent,
    SectionPlaceComponent,
    WeatherInVariusCitiesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: []
})
export class HomeModule { }
