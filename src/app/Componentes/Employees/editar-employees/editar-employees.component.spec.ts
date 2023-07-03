import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmployeesComponent } from './editar-employees.component';

describe('EditarEmployeesComponent', () => {
  let component: EditarEmployeesComponent;
  let fixture: ComponentFixture<EditarEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEmployeesComponent]
    });
    fixture = TestBed.createComponent(EditarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
