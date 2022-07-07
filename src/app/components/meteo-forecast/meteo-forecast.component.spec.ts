import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoForecastComponent } from './meteo-forecast.component';

describe('MeteoForecastComponent', () => {
  let component: MeteoForecastComponent;
  let fixture: ComponentFixture<MeteoForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
