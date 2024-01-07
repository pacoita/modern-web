import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VibrationComponent } from './vibration.component';

describe('VibrationComponent', () => {
  let component: VibrationComponent;
  let fixture: ComponentFixture<VibrationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [VibrationComponent]
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
