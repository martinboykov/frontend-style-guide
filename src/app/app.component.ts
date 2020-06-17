import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RoutesRecognized,
  NavigationStart,
} from '@angular/router';
import {
  filter,
  map,
  mergeMap,
  tap,
  concatMap,
  distinctUntilChanged,
} from 'rxjs/operators';
import { ResizeService } from './shared/resize.service';
import { MainNavService } from './shared/main-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  sidebarHtml: HTMLElement;
  showSidebar: boolean;
  display: boolean;
  appWidth: any;
  backdropDisplay = true;
  private defaultShowSidebar = true;
  items: MenuItem[];
  observer: any;
  mobile: boolean;
  appInit = false;
  endRoute: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private resizer: ResizeService,
    private navService: MainNavService
  ) {}
  ngOnInit() {
    this.resizer.resizeObserverInit();
    this.router.events
      // get route
      .pipe(
        filter((e) => e instanceof NavigationStart),
        tap((a: NavigationStart) => {
          this.endRoute = a.url;
        }),
        concatMap(() => this.resizer.isMobileSub$)
      )
      // get window width
      .pipe(
        distinctUntilChanged(),
        tap((isMobile) => (this.mobile = isMobile)),
        tap((isMobile) => {
          this.items = this.navService.getSideNav(isMobile, this.endRoute);
        }),
        tap(() => {
          const data = this.endRoute.includes('component');
          this.showSidebarFn(data);
        }),
        concatMap(() => this.router.events)
      )
      // get sidebar state
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
        tap((data: any) => this.showSidebarFn(data)),
        map((data: any) =>
          data.hasOwnProperty('showSidebar')
            ? data.showSidebar
            : this.defaultShowSidebar
        )
      )
      .subscribe();
  }
  unblock() {
    this.display = false;
  }
  showSidebarFn(data) {
    this.mobile
      ? (this.display = false)
      : data.hasOwnProperty('showSidebar')
      ? data.showSidebar
        ? (this.display = true)
        : (this.display = false)
      : (this.display = false);
    this.showSidebar = data.hasOwnProperty('showSidebar')
      ? data.showSidebar
      : this.defaultShowSidebar;
  }
  ngAfterViewInit() {}
}
