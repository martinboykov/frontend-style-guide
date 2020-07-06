import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MainNavService {
  constructor(private router: Router) {}
  getSideNav(isMobile, endRoute) {
    if (isMobile) {
      return [
        {
          label: 'Home',
          routerLink: '/',
          routerLinkActiveOptions: { exact: true },
        },
        {
          label: 'Code Guide',
          routerLink: '/code-guide',
          routerLinkActiveOptions: { exact: true },
        },
        {
          label: 'Components',
          routerLinkActiveOptions: { exact: false },
          expanded: this.checkActiveState('/components', endRoute),
          items: [
            {
              label: 'Buttons',
              title: 'components/buttons',
              routerLink: 'components/buttons',
              routerLinkActiveOptions: { exact: true },
              expanded: this.checkActiveState('/components/buttons', endRoute),
            },
            {
              label: 'Forms',
              title: 'components/forms',
              routerLink: 'components/forms',
              routerLinkActiveOptions: { exact: true },
              expanded: this.checkActiveState('/components/forms', endRoute),
            },
          ],
        },
      ];
    } else {
      return [
        {
          label: 'Buttons',
          title: 'components/buttons',
          routerLink: 'components/buttons',
          routerLinkActiveOptions: { exact: true },
          expanded: this.checkActiveState('/components/buttons/', endRoute),
        },
        {
          label: 'Forms',
          title: 'components/forms',
          routerLink: 'components/forms',
          routerLinkActiveOptions: { exact: true },
          expanded: this.checkActiveState('/components/forms/', endRoute),
        },
      ];
    }
  }
  getMainNav(isMobile) {
    if (isMobile) {
      return [];
    } else {
      return [
        {
          icon: 'pi pi-home',
          title: 'Home',
          routerLink: '/',
          routerLinkActiveOptions: { exact: true },
          expanded: true,
        },
        {
          label: 'Code Guide',
          title: 'Code Guide',
          routerLink: '/code-guide',
          routerLinkActiveOptions: { exact: true },
          expanded: true,
        },
        {
          label: 'Components',
          title: 'Components',
          routerLink: '/components',
          expanded: true,
        },
      ];
    }
  }
  checkActiveState(givenLink, endRoute) {
    if (endRoute.indexOf(givenLink) === -1) {
      return false;
    } else {
      return true;
    }
  }
}
