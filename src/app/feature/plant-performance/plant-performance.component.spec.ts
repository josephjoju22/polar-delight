import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantPerformanceComponent } from './plant-performance.component';

describe('PlantPerformanceComponent', () => {
  let component: PlantPerformanceComponent;
  let fixture: ComponentFixture<PlantPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
