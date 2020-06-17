import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value, type: number = 1) {
    switch (type) {
      case 1:
        return this.sanitized.bypassSecurityTrustHtml(value);
      case 2:
        return this.sanitized.bypassSecurityTrustStyle(value);
      case 3:
        return this.sanitized.bypassSecurityTrustScript(value);
      default:
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
  }
}
