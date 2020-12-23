import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPlaceComponent } from './section-place.component';

describe('SectionPlaceComponent', () => {
  let component: SectionPlaceComponent;
  let fixture: ComponentFixture<SectionPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
