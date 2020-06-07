import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PrismService } from 'src/app/shared/prism.service';

@Component({
  selector: 'app-code-for-america',
  templateUrl: './code-for-america.component.html',
  styleUrls: ['./code-for-america.component.scss'],
})
export class CodeForAmericaComponent implements OnInit, AfterViewInit {
  @ViewChild('fieldset', { static: true }) fieldset: any;
  btnState = 'Show Snippets';
  htmlToken: string;

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

  constructor(private prismService: PrismService) {}

  ngOnInit(): void {
    this.html = this.prismService.highlight(this.html);
  }

  ngAfterViewInit() {
    this.prismService.highlightAll();
    console.log(this.fieldset);
  }
  switchBtnState() {
    this.btnState = !this.fieldset.collapsed ? 'Hide Snippets' : 'Show Snippets';
  }
}
