import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarDelightComponent } from './polar-delight.component';

describe('PolarDelightComponent', () => {
  let component: PolarDelightComponent;
  let fixture: ComponentFixture<PolarDelightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarDelightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolarDelightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
