import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../theme.service';
import { ResizeService } from '../resize.service';
import { MainNavService } from '../main-nav.service';

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
  constructor(
    private themeService: ThemeService,
    private resizer: ResizeService,
    private navService: MainNavService
  ) {}

  ngOnInit() {
    this.switchVal = false;
    this.resizer.isMobileSub$.subscribe((isMobile) => {
      this.items = this.navService.getMainNav(isMobile);
    });
  }
  changeColors() {
    this.themeService.switchTheme(this.switchVal);
  }
}
