import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtfFormsComponent } from './wtf-forms.component';

describe('WtfFormsComponent', () => {
  let component: WtfFormsComponent;
  let fixture: ComponentFixture<WtfFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtfFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtfFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
