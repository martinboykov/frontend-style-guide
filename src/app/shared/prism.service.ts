import { Injectable, Inject } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import 'clipboard';
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

declare var Prism: any;

@Injectable({
  providedIn: 'root'
})
export class PrismService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }
  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
  highlightJs(value){
    if (isPlatformBrowser(this.platformId)) {
      return Prism.highlight(value, Prism.languages.javascript, 'javascript');
    }
  }
}
