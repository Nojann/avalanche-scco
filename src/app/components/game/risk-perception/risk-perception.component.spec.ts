import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPerceptionComponent } from './risk-perception.component';

describe('RiskPerceptionComponent', () => {
  let component: RiskPerceptionComponent;
  let fixture: ComponentFixture<RiskPerceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskPerceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskPerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
