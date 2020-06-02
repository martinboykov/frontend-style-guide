import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { PrismService } from 'src/app/shared/prism.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
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
  display: inline-block;
  font-family: $font-default;
  height: 40px;
  line-height: 40px;
  margin: 0 8px 4px 0;
  padding: 0 26px;
  min-height: 19px;
  min-width: auto;
  width: auto;
  background-color: #399fd3;
  border-radius: 4px;
  border: none;
  color: white;
  overflow: visible;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  vertical-align: middle;
  appearance: none;
}
  `;

  constructor(private prismService: PrismService) {}
  ngOnInit(): void {
    this.html = this.prismService.highlightJs(this.html);
  }
}
