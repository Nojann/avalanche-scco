import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEndComponent } from './dialog-end.component';

describe('DialogEndComponent', () => {
  let component: DialogEndComponent;
  let fixture: ComponentFixture<DialogEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
