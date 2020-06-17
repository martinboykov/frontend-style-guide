import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { PrismService } from 'src/app/shared/prism.service';

@Component({
  selector: 'app-wtf-forms',
  templateUrl: './wtf-forms.component.html',
  styleUrls: ['./wtf-forms.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WtfFormsComponent implements OnInit, AfterViewInit {
  @ViewChild('fieldset', { static: true }) fieldset: any;
  btnState = 'Show Snippets';
  htmlToken: string;
  cssToken: string;

  html = `
<label class="control checkbox">
<input type="checkbox">
<span class="control-indicator"></span>
  Check this custom checkbox
</label>
  `;

  css = `
.control {
  position: relative;
  display: inline-block;
  padding-left: 2.5rem;
  color: #555;
  cursor: pointer;
}
.control input {
  position: absolute;
  opacity: 0;
  z-index: -1; /* Put the input behind the label so it doesn't overlay text */
}
.control-indicator {
  position: absolute;
  top: 0.25rem;
  left: 0;
  display: block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  color: #eee;
  text-align: center;
  background-color: #eee;
  background-size: 70% 70%;
  background-position: center center;
  background-repeat: no-repeat;
  user-select: none;
}
.control:hover .control-indicator {
  color: #fff;
  background-color: #ccc;
}
.control input:focus ~ .control-indicator {
  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;
}
.control input:checked ~ .control-indicator {
  color: #fff;
  background-color: #0074d9;
}
.control input:active ~ .control-indicator {
  color: #fff;
  background-color: #84c6ff;
}
.checkbox .control-indicator {
  border-radius: 0.25rem;
}
.control {
  position: relative;
  display: inline-block;
  padding-left: 2.5rem;
  color: #555;
  cursor: pointer;
}
.control input {
  position: absolute;
  opacity: 0;
  z-index: -1; /* Put the input behind the label so it doesn't overlay text */
}
.control-indicator {
  position: absolute;
  top: 0.25rem;
  left: 0;
  display: block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  color: #eee;
  text-align: center;
  background-color: #eee;
  background-size: 70% 70%;
  background-position: center center;
  background-repeat: no-repeat;
  user-select: none;
}
/* Hover state */
/* Uncomment if you need it, but be aware of the sticky iOS states.
.control:hover .control-indicator {
  color: #fff;
  background-color: #ccc;
}
*/
/* Focus */
.control input:focus ~ .control-indicator {
  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;
}
/* Checked state */
.control input:checked ~ .control-indicator {
  color: #fff;
  background-color: #0074d9;
}
/* Active */
.control input:active ~ .control-indicator {
  color: #fff;
  background-color: #84c6ff;
}
/* Checkbox modifiers */
.checkbox .control-indicator {
  border-radius: 0.25rem;
}
/* Variation 1 - using background-image  */
.checkbox input:checked ~ .control-indicator {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=);
}
/* Variation 2 - using::before */
// .checkbox input:checked ~ .control-indicator::before {
//   content: "{{'{' + \ + '}'}}2713"; // default CSS CODE
// }
/* Variation 3 - using ::before and ::after*/
// .checkbox input:checked ~ .control-indicator::before {
//   position: absolute;
//   left: 0;
//   top: 35%;
//   height: 45%;
//   width: 0.3rem;
//   background-color: #fff;
//   content: "";
//   transform: translateX(10px) rotate(-45deg);
//   transform-origin: left bottom;
// }
// .checkbox input:checked ~ .control-indicator::after {
//   position: absolute;
//   left: 0;
//   bottom: 20%;
//   height: 0.3rem;
//   width: 65%;
//   background-color: #fff;
//   content: "";
//   transform: translateX(10px) rotate(-45deg);
//   transform-origin: left bottom;
// }
/* Variation 4 - using ::after and border */
// .checkbox input:checked ~ .control-indicator::after {
//   content: "";
//   position: absolute;
//   left: 30%;
//   top: 5%;
//   height: 1.3rem;
//   width: 0.8rem;
//   border-right: 0.3rem solid #fff;
//   border-bottom: 0.3rem solid #fff;
//   transform: rotate(45deg);
// }
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
