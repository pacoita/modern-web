import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LightComponent } from './light.component';

describe('LightComponent', () => {
  let component: LightComponent;
  let fixture: ComponentFixture<LightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [LightComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
