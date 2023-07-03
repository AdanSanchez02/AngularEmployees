import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJobsComponent } from './editar-jobs.component';

describe('EditarJobsComponent', () => {
  let component: EditarJobsComponent;
  let fixture: ComponentFixture<EditarJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarJobsComponent]
    });
    fixture = TestBed.createComponent(EditarJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
