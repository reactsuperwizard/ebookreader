import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface RouteToPreload {
  routePath: string;
  route: Route;
  load: Function;
}

@Injectable({
  providedIn: 'root'
})
/* Service allows preloading of pages to improve on speed when loading
 the main content page and the index page from the first page with static image */
export class AppRoutingPreloaderService implements PreloadingStrategy {
  private routesToPreload: RouteToPreload[] = [];
  constructor() { }
  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data.preload) {
      this.routesToPreload.push({
        routePath: route.path,
        route: route,
        load: load
      });
    }

    return of(null);
  }

  preloadRoute(path: string): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.routesToPreload &&
        this.routesToPreload.length > 0) {
        const routeToPreload: RouteToPreload =
          this.routesToPreload.find(
            (filterRouteToPreload: RouteToPreload) =>
              filterRouteToPreload.routePath === path);

        if (routeToPreload) {
          routeToPreload.load();
        }
      }

      resolve();
    });
  }
}
