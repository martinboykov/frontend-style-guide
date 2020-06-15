import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap, tap, concatMap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private resizer: ResizeService,
    private navService: MainNavService
  ) {}
  ngOnInit() {
    this.resizer.resizeObserverInit();
    this.resizer.isMobileSub$
      .pipe(
        tap((isMobile) => (this.mobile = isMobile)),
        tap((isMobile) => {
          this.items = this.navService.getSideNav(isMobile);
        }),
        tap(() => {
          const data = {
            showSidebar: this.router.routerState.snapshot.url.includes(
              'component'
            ),
          };
          this.showSidebar = this.mobile
            ? (this.display = false)
            : data.hasOwnProperty('showSidebar')
            ? data.showSidebar
              ? (this.display = true)
              : (this.display = false)
            : (this.display = false);
        }),
        concatMap(() => this.router.events)
      )
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
        tap((data: any) =>
          this.mobile
            ? (this.display = false)
            : data.hasOwnProperty('showSidebar')
            ? data.showSidebar
              ? (this.display = true)
              : (this.display = false)
            : (this.display = false)
        ),
        tap((data: any) => console.log(data)),
        map((data: any) =>
          data.hasOwnProperty('showSidebar')
            ? data.showSidebar
            : this.defaultShowSidebar
        ),
        tap((data: any) => console.log(data))
      )
      .subscribe((data) => {
        console.log(data);
        this.showSidebar = data;
      });
  }
  unblock() {
    this.display = false;
  }
  ngAfterViewInit() {}
}
