import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarJobsComponent } from './eliminar-jobs.component';

describe('EliminarJobsComponent', () => {
  let component: EliminarJobsComponent;
  let fixture: ComponentFixture<EliminarJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarJobsComponent]
    });
    fixture = TestBed.createComponent(EliminarJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
