import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNumberCardComponent } from './custom-number-card.component';

describe('CustomNumberCardComponent', () => {
  let component: CustomNumberCardComponent;
  let fixture: ComponentFixture<CustomNumberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNumberCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNumberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
