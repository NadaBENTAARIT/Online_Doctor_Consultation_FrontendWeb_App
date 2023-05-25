import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinAcceuilComponent } from './medecin-acceuil.component';

describe('MedecinAcceuilComponent', () => {
  let component: MedecinAcceuilComponent;
  let fixture: ComponentFixture<MedecinAcceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinAcceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
