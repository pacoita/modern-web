import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakeLockComponent } from './wake-lock.component';

describe('WakeLockComponent', () => {
  let component: WakeLockComponent;
  let fixture: ComponentFixture<WakeLockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakeLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
