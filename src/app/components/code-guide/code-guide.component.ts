import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PrismService } from 'src/app/shared/prism.service';

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
