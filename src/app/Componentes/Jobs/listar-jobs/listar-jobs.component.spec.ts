import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJobsComponent } from './listar-jobs.component';

describe('ListarJobsComponent', () => {
  let component: ListarJobsComponent;
  let fixture: ComponentFixture<ListarJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarJobsComponent]
    });
    fixture = TestBed.createComponent(ListarJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
