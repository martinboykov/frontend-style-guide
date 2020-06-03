import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  switchTheme(switchVal) {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      if (switchVal) {
        root.style.setProperty('--theme-color-400', 'var(--red-400)');
        root.style.setProperty('--theme-color', 'var(--red)');
        root.style.setProperty('--theme-color-600', 'var(--red-600)');
      } else {
        root.style.setProperty('--theme-color-400', 'var(--blue-400)');
        root.style.setProperty('--theme-color', 'var(--blue)');
        root.style.setProperty('--theme-color-600', 'var(--blue-600)');
      }
    }
  }
}
