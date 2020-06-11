import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../theme.service';

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
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.switchVal = false;
    this.items = [
      {
        icon: 'pi pi-home',
        routerLink: '/',
        routerLinkActiveOptions: { exact: true },
        expanded: true,
      },
      {
        label: 'Code Guide',
        routerLink: '/code-guide',
        routerLinkActiveOptions: { exact: true },
        expanded: true,
      },
      {
        label: 'Components',
        routerLink: '/components',
        // routerLinkActiveOptions: { exact: false },
        expanded: true,
      },
    ];

  }
  changeColors() {
    this.themeService.switchTheme(this.switchVal);
  }
}
