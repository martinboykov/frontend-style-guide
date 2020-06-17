import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtfFormsComponent } from './wtf-forms.component';
import { SafeHtmlPipe } from 'src/app/shared/safe-html.pipe';

describe('WtfFormsComponent', () => {
  let component: WtfFormsComponent;
  let fixture: ComponentFixture<WtfFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WtfFormsComponent, SafeHtmlPipe],
    }).compileComponents();
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
