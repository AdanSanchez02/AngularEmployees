import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarWorkedComponent } from './listar-worked.component';

describe('ListarWorkedComponent', () => {
  let component: ListarWorkedComponent;
  let fixture: ComponentFixture<ListarWorkedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarWorkedComponent]
    });
    fixture = TestBed.createComponent(ListarWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
