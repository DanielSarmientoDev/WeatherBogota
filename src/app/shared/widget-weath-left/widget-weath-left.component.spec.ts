import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWeathLeftComponent } from './widget-weath-left.component';

describe('WidgetWeathLeftComponent', () => {
  let component: WidgetWeathLeftComponent;
  let fixture: ComponentFixture<WidgetWeathLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetWeathLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWeathLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
