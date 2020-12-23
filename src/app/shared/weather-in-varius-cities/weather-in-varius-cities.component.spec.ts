import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInVariusCitiesComponent } from './weather-in-varius-cities.component';

describe('WeatherInVariusCitiesComponent', () => {
  let component: WeatherInVariusCitiesComponent;
  let fixture: ComponentFixture<WeatherInVariusCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInVariusCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInVariusCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
