import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPrimingComponent } from './video-priming.component';

describe('VideoPrimingComponent', () => {
  let component: VideoPrimingComponent;
  let fixture: ComponentFixture<VideoPrimingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPrimingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPrimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
