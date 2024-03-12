import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeChartWidgetComponent } from './gauge-chart-widget.component';

describe('GaugeChartWidgetComponent', () => {
  let component: GaugeChartWidgetComponent;
  let fixture: ComponentFixture<GaugeChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaugeChartWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugeChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
