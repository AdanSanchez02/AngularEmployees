import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarJobsComponent } from './guardar-jobs.component';

describe('GuardarJobsComponent', () => {
  let component: GuardarJobsComponent;
  let fixture: ComponentFixture<GuardarJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarJobsComponent]
    });
    fixture = TestBed.createComponent(GuardarJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
