import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGuideComponent } from './code-guide.component';

describe('CodeGuideComponent', () => {
  let component: CodeGuideComponent;
  let fixture: ComponentFixture<CodeGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
