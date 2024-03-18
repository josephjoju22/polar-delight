import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdInsightsComponent } from './pd-insights.component';

describe('PdInsightsComponent', () => {
  let component: PdInsightsComponent;
  let fixture: ComponentFixture<PdInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdInsightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
