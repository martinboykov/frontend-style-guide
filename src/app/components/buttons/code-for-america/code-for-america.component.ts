import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { PrismService } from 'src/app/core/prism.service';

@Component({
  selector: 'app-code-for-america',
  templateUrl: './code-for-america.component.html',
  styleUrls: ['./code-for-america.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeForAmericaComponent implements OnInit, AfterViewInit {
  @ViewChild('fieldset', { static: true }) fieldset: any;
  btnState = 'Show Snippets';
  htmlToken: string;
  cssToken: string;
  type = {
    html: 'html',
    css: 'css',
  };
  html = `
<button class="btn"
        type="button">Button</button>
<button type="submit"
        class="btn">Submit button</button>
<a class="btn">Link button</a>
<input type="button"
       value="Input button"
       class="btn">
<input type="submit"
       value="Input submit button"
       class="btn">
  `;
  css = `
.btn {
  height: 40px;
  margin: 0px 8px 4px 0px;
  padding: 0px 26px;

  font-family: $font-default;
  color: white;

  background-color: #399fd3;
  border: none;
  border-radius: 4px;
  overflow: visible; /* the overflow property removes extra width in IE */
}
.btn:hover,
.btn:focus {
  background-color: #7ab5d6;
  cursor: pointer;
}

a.btn {
  display: inline-block;
  line-height: 40px;
  &:hover,
  &:focus {
    color: white;
  }
}
`;
  constructor(private prismService: PrismService) {}

  ngOnInit(): void {
    this.htmlToken = this.prismService.highlight(this.html);
    this.cssToken = this.prismService.highlight(this.css, 'css');

  }

  ngAfterViewInit() {
    this.prismService.highlightAll();
  }
  switchBtnState() {
    this.btnState = !this.fieldset.collapsed
      ? 'Hide Snippets'
      : 'Show Snippets';
  }
}
