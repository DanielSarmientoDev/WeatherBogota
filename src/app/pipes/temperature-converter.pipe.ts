import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {

          if(value && !isNaN(value)){

                 if(unit === 'C'){
                   let kelvintoCelcius = value - 273.15
                   return Math.round(kelvintoCelcius)+ "°";
                 }
                 if(unit === 'F'){
                  let kelvintoFarenheit = (value-273.15)*9/5+32;
                  return Math.round(kelvintoFarenheit) + "°";
                }
          }
    return;
  }

}