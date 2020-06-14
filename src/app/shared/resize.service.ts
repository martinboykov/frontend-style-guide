import { Injectable, Inject } from '@angular/core';
import { NgZone } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';

declare var ResizeObserver: any;

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  observer: any;
  public isMobileSub$ = new Subject<boolean>();
  breakPoint = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--md')
      .replace(/[^0-9]/g, ''),
    10
  );
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private zone: NgZone
  ) {}

  resizeObserverInit() {
    this.observer = new ResizeObserver((entries) => {
      this.zone.run(() => {
        const appWidth = entries[0].contentRect.width;
        console.log(appWidth);
        if (appWidth <= this.breakPoint) {
          this.isMobileSub$.next(true);
        } else {
          this.isMobileSub$.next(false);
        }
      });
    });
    this.observer.observe(document.body);
  }
}
