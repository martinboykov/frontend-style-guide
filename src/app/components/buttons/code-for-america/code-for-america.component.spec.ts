import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeForAmericaComponent } from './code-for-america.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SafeHtmlPipe } from 'src/app/shared/safe-html.pipe';
// @Pipe({ name: 'safeHtml' })
// class MyPipeMock implements PipeTransform {
//   transform(param) {
//     console.log('mocking');
//     return 'myValue';
//   }
// }
describe('CodeForAmericaComponent', () => {
  let component: CodeForAmericaComponent;
  let fixture: ComponentFixture<CodeForAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeForAmericaComponent, SafeHtmlPipe ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
