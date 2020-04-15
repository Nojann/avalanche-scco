import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceTaskComponent } from './choice-task.component';

describe('ChoiceTaskComponent', () => {
  let component: ChoiceTaskComponent;
  let fixture: ComponentFixture<ChoiceTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
