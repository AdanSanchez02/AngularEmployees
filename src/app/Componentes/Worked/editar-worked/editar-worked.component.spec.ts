import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarWorkedComponent } from './editar-worked.component';

describe('EditarWorkedComponent', () => {
  let component: EditarWorkedComponent;
  let fixture: ComponentFixture<EditarWorkedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarWorkedComponent]
    });
    fixture = TestBed.createComponent(EditarWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
