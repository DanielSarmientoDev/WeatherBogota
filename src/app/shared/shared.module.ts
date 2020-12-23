import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureConverterPipe } from '../pipes/temperature-converter.pipe';

@NgModule({
  declarations: [TemperatureConverterPipe],
  exports:[TemperatureConverterPipe],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
