import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmployeesComponent } from './listar-employees.component';

describe('ListarEmployeesComponent', () => {
  let component: ListarEmployeesComponent;
  let fixture: ComponentFixture<ListarEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEmployeesComponent]
    });
    fixture = TestBed.createComponent(ListarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
