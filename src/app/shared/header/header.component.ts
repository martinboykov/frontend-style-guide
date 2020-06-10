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
        label: 'Home',
        routerLink: '/home',
        routerLinkActiveOptions: 'active',
        expanded: true,
      },
      {
        label: 'Code Guide',
        routerLink: '/code-guide',
        routerLinkActiveOptions: 'active',
        expanded: true,
      },
      {
        label: 'Components',
        routerLink: '/components',
        routerLinkActiveOptions: 'active',
        expanded: true,
      },
    ];
  }
  changeColors() {
    this.themeService.switchTheme(this.switchVal);
  }
}
