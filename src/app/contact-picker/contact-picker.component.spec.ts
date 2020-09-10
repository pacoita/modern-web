import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPickerComponent } from './contact-picker.component';

describe('ContactPickerComponent', () => {
  let component: ContactPickerComponent;
  let fixture: ComponentFixture<ContactPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
