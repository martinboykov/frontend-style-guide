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
    this.orientation = 'horizontal';
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
        label: 'Buttons',
        routerLink: '/buttons',
        routerLinkActiveOptions: 'active',
        expanded: true,
        items: [
          // {
          //   label: 'Type Bootstrap',
          //   routerLink: '/buttons',
          //   fragment: 'bootstrap',
          //   routerLinkActiveOptions: 'active',
          // },
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
    this.themeService.switchTheme(this.switchVal);
  }
}
