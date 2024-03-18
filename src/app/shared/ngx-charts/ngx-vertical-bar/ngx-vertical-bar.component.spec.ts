import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVerticalBarComponent } from './ngx-vertical-bar.component';

describe('NgxVerticalBarComponent', () => {
  let component: NgxVerticalBarComponent;
  let fixture: ComponentFixture<NgxVerticalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxVerticalBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxVerticalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
