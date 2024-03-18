import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalLargeWidgetComponent } from './horizontal-large-widget.component';

describe('HorizontalLargeWidgetComponent', () => {
  let component: HorizontalLargeWidgetComponent;
  let fixture: ComponentFixture<HorizontalLargeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalLargeWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalLargeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
