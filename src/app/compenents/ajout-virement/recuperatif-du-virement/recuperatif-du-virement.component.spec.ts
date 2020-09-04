import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperatifDuVirementComponent } from './recuperatif-du-virement.component';

describe('RecuperatifDuVirementComponent', () => {
  let component: RecuperatifDuVirementComponent;
  let fixture: ComponentFixture<RecuperatifDuVirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperatifDuVirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperatifDuVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
