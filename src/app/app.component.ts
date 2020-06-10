import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  showSidebar: Observable<boolean>;
  display = true;
  private defaultShowSidebar = true;
  items: MenuItem[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    console.log('AppCompInit');
    this.items = [
      {
        label: 'Buttons',
        routerLink: '/components/buttons',
      },
      {
        label: 'Forms',
        routerLink: '/components/forms',
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
  }
  ngAfterViewInit() {
    console.log('AppCompInit');
  }
}
