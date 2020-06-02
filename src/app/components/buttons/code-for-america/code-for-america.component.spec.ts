import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeForAmericaComponent } from './code-for-america.component';

describe('CodeForAmericaComponent', () => {
  let component: CodeForAmericaComponent;
  let fixture: ComponentFixture<CodeForAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeForAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeForAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
