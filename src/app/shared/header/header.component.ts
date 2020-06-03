import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  orientation: string;
  windowWidth: number;
  switchVal: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    this.switchVal = false;
    this.orientation = 'horizontal';
    this.items = [
      {
        label: 'Buttons',
        routerLink: '/buttons',
        routerLinkActiveOptions: 'active',
        expanded: true,
        items: [
          {
            label: 'Type Bootstrap',
            routerLink: '/buttons',
            fragment: 'bootstrap',
            routerLinkActiveOptions: 'active',
          },
          {
            label: 'Code of America Style Guide',
            routerLink: '/buttons',
            fragment: 'code-of-america',
            routerLinkActiveOptions: 'active',
          },
        ],
      },
      {
        label: 'Forms',
        routerLink: '/forms',
        routerLinkActiveOptions: 'active',
        expanded: true,
        items: [
          {
            label: 'Type Bootstrap',
            routerLink: '/forms',
            fragment: 'bootstrap',
            routerLinkActiveOptions: 'active',
          },
          {
            label: 'Type Other',
            routerLink: '/forms',
            fragment: 'other',
            routerLinkActiveOptions: 'active',
          },
        ],
      },
    ];
  }
  changeColors() {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      if (this.switchVal) {
        root.style.setProperty('--theme-color-400', 'var(--green)');
        root.style.setProperty('--theme-color', 'var(--green)');
        root.style.setProperty('--theme-color-600', 'var(--green)');
      } else {
        root.style.setProperty('--theme-color-400', 'var(--blue)');
        root.style.setProperty('--theme-color', 'var(--blue)');
        root.style.setProperty('--theme-color-600', 'var(--blue)');
      }
    }
  }
}
