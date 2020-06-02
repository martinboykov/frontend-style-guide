import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PrismService } from 'src/app/shared/prism.service';

@Component({
  selector: 'app-code-for-america',
  templateUrl: './code-for-america.component.html',
  styleUrls: ['./code-for-america.component.scss'],
})
export class CodeForAmericaComponent implements OnInit {
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
    margin: 0 8px 4px 0;
    padding: 0 26px;
    font-family: $font-default;
    background-color: #399fd3;
    border-radius: 4px;
    border: none;
    color: white;
    overflow: visible; /* the overflow property removes extra width in IE */
  }
  .btn:hover,
  .btn:focus {
    background-color: #7ab5d6;
  }
  a.btn {
    display: inline-block;
    line-height: 40px;
  }
  `;

  constructor(private prismService: PrismService) {}

  ngOnInit(): void {
    this.html = this.prismService.highlightJs(this.html);
  }
  ngAfterViewInit() {
    this.prismService.highlightAll();
  }
}
