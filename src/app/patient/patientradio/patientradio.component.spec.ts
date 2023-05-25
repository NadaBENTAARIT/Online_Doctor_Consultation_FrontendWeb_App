import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientradioComponent } from './patientradio.component';

describe('PatientradioComponent', () => {
  let component: PatientradioComponent;
  let fixture: ComponentFixture<PatientradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
