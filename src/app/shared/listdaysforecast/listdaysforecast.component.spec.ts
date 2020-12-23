import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdaysforecastComponent } from './listdaysforecast.component';

describe('ListdaysforecastComponent', () => {
  let component: ListdaysforecastComponent;
  let fixture: ComponentFixture<ListdaysforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdaysforecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdaysforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
