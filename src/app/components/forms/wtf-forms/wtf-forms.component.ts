import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { PrismService } from 'src/app/core/prism.service';

@Component({
  selector: 'app-wtf-forms',
  templateUrl: './wtf-forms.component.html',
  styleUrls: ['./wtf-forms.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WtfFormsComponent implements OnInit, AfterViewInit {
  @ViewChild('fieldset', { static: true }) fieldset: any;
  btnState = 'Show Snippets';
  htmlToken: object;
  cssToken: object;

  html = {
    checkbox: `
<label class="control checkbox">
<input type="checkbox">
<span class="control-indicator"></span>
  Check this custom checkbox
</label>
`,
    radio: `
<label class="control radio">
<input id="radio1" name="radio" type="radio">
<span class="control-indicator"></span>
  Toggle this custom radio
</label>
    `,
    select: `
<div class="select">
  <select aria-label="Select menu example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
    `,
    file: `
<label class="file">
  <input type="file" id="file" aria-label="File browser example">
  <span class="file-custom"></span>
</label>
    `,
  };

  css = {
    checkboxAndRadio: `
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
/* Radio modifiers */
.radio .control-indicator {
  border-radius: 50%;
}
.radio input:checked ~ .control-indicator {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==);
}

/* Alternately, use another character */
.control-x input:checked ~ .control-indicator {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xLjQsMEwwLDEuNGwwLjcsMC43bDEuOCwxLjhMMC43LDUuN0wwLDYuNGwxLjQsMS40bDAuNy0wLjdsMS44LTEuOGwxLjgsMS44bDAuNywwLjdsMS40LTEuNEw3LjEsNS43DQoJTDUuMywzLjlsMS44LTEuOGwwLjctMC43TDYuNCwwTDUuNywwLjdMMy45LDIuNUwyLjEsMC43QzIuMSwwLjcsMS40LDAsMS40LDB6Ii8+DQo8L3N2Zz4NCg==);
}
.control-dash input:checked ~ .control-indicator {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K);
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


`,
    select: `
.select {
  position: relative;
  display: inline-block;
  color: #555;
}
.select select {
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0.5rem 2.25rem 0.5rem 1rem;
  line-height: 1.5;
  color: #555;
  background-color: #eee;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
/* Undo the Firefox inner focus ring */
.select select:focus:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}
/* Dropdown arrow */
.select:after {
  position: absolute;
  top: 50%;
  right: 1.25rem;
  display: inline-block;
  content: "";
  width: 0;
  height: 0;
  margin-top: -0.15rem;
  pointer-events: none;
  border-top: 0.35rem solid;
  border-right: 0.35rem solid transparent;
  border-bottom: 0.35rem solid transparent;
  border-left: 0.35rem solid transparent;
}

/* Hover state */
/* Uncomment if you need it, but be aware of the sticky iOS states.
.select select:hover {
background-color: #ddd;
}
*/

/* Focus */
.select select:focus {
  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;
}

/* Active/open */
.select select:active {
  color: #fff;
  background-color: #0074d9;
}

/* Hide the arrow in IE10 and up */
.select select::-ms-expand {
  display: none;
}

/* Media query to target Firefox only */
@-moz-document url-prefix() {
  /* Firefox hack to hide the arrow */
  .select select {
    text-indent: 0.01px;
    text-overflow: "";
    padding-right: 1rem;
  }

  /* <option> elements inherit styles from <select>, so reset them. */
  .select option {
    background-color: #fff;
  }
}
`,
    file: `
.file {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 3.5rem;
}
.file input {
  min-width: 14rem;
  margin: 0;
  filter: alpha(opacity=0);
  opacity: 0;
}
.file-custom {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  color: #555;
  background-color: #fff;
  border: 0.075rem solid #ddd;
  border-radius: 0.25rem;
  box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.file-custom:after {
  content: "Choose file...";
}
.file-custom:before {
  position: absolute;
  top: -0.075rem;
  right: -0.075rem;
  bottom: -0.075rem;
  z-index: 6;
  display: block;
  content: "Browse";
  height: 3.5rem;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  color: #555;
  background-color: #eee;
  border: 0.075rem solid #ddd;
  border-radius: 0 0.25rem 0.25rem 0;
}

/* Focus */
.file input:focus ~ .file-custom {
  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;
}
`,
  };
  constructor(private prismService: PrismService) {}

  ngOnInit(): void {
    this.htmlToken = {
      checkbox: this.prismService.highlight(this.html.checkbox),
      radio: this.prismService.highlight(this.html.radio),
      select: this.prismService.highlight(this.html.select),
      file: this.prismService.highlight(this.html.file),
    };
    this.cssToken = {
      checkboxAndRadio: this.prismService.highlight(
        this.css.checkboxAndRadio,
        'css'
      ),
      select: this.prismService.highlight(this.css.select, 'css'),
      file: this.prismService.highlight(this.css.file, 'css'),
    };
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
