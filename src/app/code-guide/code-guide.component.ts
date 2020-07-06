import {
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { PrismService } from 'src/app/core/prism.service';

@Component({
  selector: 'app-code-guide',
  templateUrl: './code-guide.component.html',
  styleUrls: ['./code-guide.component.scss'],
})
export class CodeGuideComponent implements OnInit, AfterViewInit {
  html = {
    syntax: `
<!doctype html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
`,
    reducing: `
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
`,
    order: `
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
`,
  };

  constructor(private prismService: PrismService) {}

  ngOnInit(): void {
    for (const key in this.html) {
      if (this.html.hasOwnProperty(key)) {
        this.html[key] = this.prismService.highlight(this.html[key]);
      }
    }
  }

  ngAfterViewInit() {
    this.prismService.highlightAll();
  }
}
