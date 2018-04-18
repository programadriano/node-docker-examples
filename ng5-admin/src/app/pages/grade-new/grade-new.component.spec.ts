import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeNewComponent } from './grade-new.component';

describe('GradeNewComponent', () => {
  let component: GradeNewComponent;
  let fixture: ComponentFixture<GradeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
