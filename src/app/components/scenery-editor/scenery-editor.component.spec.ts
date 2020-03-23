import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneryEditorComponent } from './scenery-editor.component';

describe('SceneryEditorComponent', () => {
  let component: SceneryEditorComponent;
  let fixture: ComponentFixture<SceneryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
