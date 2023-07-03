import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarWorkedComponent } from './guardar-worked.component';

describe('GuardarWorkedComponent', () => {
  let component: GuardarWorkedComponent;
  let fixture: ComponentFixture<GuardarWorkedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarWorkedComponent]
    });
    fixture = TestBed.createComponent(GuardarWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
