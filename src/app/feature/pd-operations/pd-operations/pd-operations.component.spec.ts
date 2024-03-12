import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdOperationsComponent } from './pd-operations.component';

describe('PdOperationsComponent', () => {
  let component: PdOperationsComponent;
  let fixture: ComponentFixture<PdOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
