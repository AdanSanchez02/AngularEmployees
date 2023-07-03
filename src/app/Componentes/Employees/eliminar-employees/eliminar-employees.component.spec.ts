import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEmployeesComponent } from './eliminar-employees.component';

describe('EliminarEmployeesComponent', () => {
  let component: EliminarEmployeesComponent;
  let fixture: ComponentFixture<EliminarEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarEmployeesComponent]
    });
    fixture = TestBed.createComponent(EliminarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
