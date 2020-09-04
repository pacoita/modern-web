import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibrationComponent } from './vibration.component';

describe('VibrationComponent', () => {
  let component: VibrationComponent;
  let fixture: ComponentFixture<VibrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
