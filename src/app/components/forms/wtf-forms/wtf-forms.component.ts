import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PrismService } from 'src/app/shared/prism.service';

@Component({
  selector: 'app-wtf-forms',
  templateUrl: './wtf-forms.component.html',
  styleUrls: ['./wtf-forms.component.scss'],
})
export class WtfFormsComponent implements OnInit, AfterViewInit {
  @ViewChild('fieldset', { static: true }) fieldset: any;
  btnState = 'Show Snippets';
  htmlToken: string;

  html = `
<label class="control checkbox">
<input type="checkbox">
<span class="control-indicator"></span>
  Check this custom checkbox
</label>
  `;

  constructor(private prismService: PrismService) {}

  ngOnInit(): void {
    this.html = this.prismService.highlight(this.html);
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
