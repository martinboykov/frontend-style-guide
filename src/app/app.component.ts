import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
declare var ResizeObserver: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar') sidebar: any;
  @ViewChild('appWrapper') appWrapper: any;
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
    private zone: NgZone
  ) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Buttons',
        title: 'components/buttons',
        // routerLink: '/components/buttons',
        command: (e) => this.sidebarHandler(e),
      },
      {
        label: 'Forms',
        title: 'components/forms',
        // routerLink: '/components/forms',
        command: (e) => this.sidebarHandler(e),
      },
    ];
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
    const breakPoint = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--md')
        .replace(/[^0-9]/g, ''),
      10
    );
    this.observer = new ResizeObserver((entries) => {
      this.zone.run(() => {
        this.appWidth = entries[0].contentRect.width;
        if (this.appWidth <= breakPoint) {
          this.mobile = true;
        } else {
          this.mobile = false;
        }
      });
    });
  }
  unblock() {
    this.display = false;
    console.log('click');
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
  ngAfterViewInit() {
    this.sidebarHtml = this.sidebar.el.nativeElement as HTMLElement;
    this.observer.observe(this.appWrapper.nativeElement);
  }
}
