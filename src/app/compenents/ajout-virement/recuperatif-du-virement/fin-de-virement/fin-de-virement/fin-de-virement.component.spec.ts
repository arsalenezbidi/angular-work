import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinDeVirementComponent } from './fin-de-virement.component';

describe('FinDeVirementComponent', () => {
  let component: FinDeVirementComponent;
  let fixture: ComponentFixture<FinDeVirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinDeVirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinDeVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
