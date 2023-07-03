import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarEmployeesComponent } from './guardar-employees.component';

describe('GuardarEmployeesComponent', () => {
  let component: GuardarEmployeesComponent;
  let fixture: ComponentFixture<GuardarEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarEmployeesComponent]
    });
    fixture = TestBed.createComponent(GuardarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
