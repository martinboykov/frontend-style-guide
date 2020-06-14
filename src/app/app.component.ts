import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResizeService } from './shared/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  sidebarHtml: HTMLElement;
  showSidebar: Observable<boolean>;
  display = true;
  appWidth: any;
  backdropDisplay = true;
  private defaultShowSidebar = true;
  items: MenuItem[];
  observer: any;
  mobile: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private resizer: ResizeService
  ) {}
  ngOnInit() {
    this.resizer.resizeObserverInit();
    this.resizer.isMobileSub$.subscribe((isMobile) => {
      this.mobile = isMobile;
      if (this.mobile) {
        this.items = [
          {
            label: 'Home',
            routerLink: '/',
          },
          {
            label: 'Code Guide',
            routerLink: '/code-guide',
          },
          {
            label: 'Components',
            items: [
              {
                label: 'Buttons',
                title: 'components/buttons',
                command: (e) => this.sidebarHandler(e),
              },
              {
                label: 'Forms',
                title: 'components/forms',
                command: (e) => this.sidebarHandler(e),
              },
            ],
          },
        ];
      } else {
        this.items = [
          {
            label: 'Buttons',
            title: 'components/buttons',
            command: (e) => this.sidebarHandler(e),
          },
          {
            label: 'Forms',
            title: 'components/forms',
            command: (e) => this.sidebarHandler(e),
          },
        ];
      }
    });

    this.showSidebar = this.router.events.pipe(
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
        data.hasOwnProperty('showSidebar')
          ? data.showSidebar
            ? (this.display = true)
            : (this.display = false)
          : (this.display = false)
      ),
      map((data: any) =>
        data.hasOwnProperty('showSidebar')
          ? data.showSidebar
          : this.defaultShowSidebar
      )
    );
  }
  unblock() {
    this.display = false;
  }
  sidebarHandler(e) {
    this.router.navigate([`${e.item.title}`]);
    if (!this.mobile) {
      return;
    }
    setTimeout(() => {
      this.display = false;
    }, 0);
  }
  ngAfterViewInit() {}
}
