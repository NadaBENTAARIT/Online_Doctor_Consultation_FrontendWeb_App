import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChoixComponent } from './patient-choix.component';

describe('PatientChoixComponent', () => {
  let component: PatientChoixComponent;
  let fixture: ComponentFixture<PatientChoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
