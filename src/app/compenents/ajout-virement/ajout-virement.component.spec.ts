import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVirementComponent } from './ajout-virement.component';

describe('AjoutVirementComponent', () => {
  let component: AjoutVirementComponent;
  let fixture: ComponentFixture<AjoutVirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutVirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
