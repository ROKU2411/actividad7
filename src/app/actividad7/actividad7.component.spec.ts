import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad7Component } from './actividad7.component';

describe('Actividad7Component', () => {
  let component: Actividad7Component;
  let fixture: ComponentFixture<Actividad7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actividad7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
