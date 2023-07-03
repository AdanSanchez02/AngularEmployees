import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarWorkedComponent } from './eliminar-worked.component';

describe('EliminarWorkedComponent', () => {
  let component: EliminarWorkedComponent;
  let fixture: ComponentFixture<EliminarWorkedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarWorkedComponent]
    });
    fixture = TestBed.createComponent(EliminarWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
