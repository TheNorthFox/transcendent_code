import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInputsComponent } from './add-inputs.component';

describe('AddInputsComponent', () => {
  let component: AddInputsComponent;
  let fixture: ComponentFixture<AddInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInputsComponent]
    });
    fixture = TestBed.createComponent(AddInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
