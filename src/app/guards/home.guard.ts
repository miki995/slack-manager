import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SLACK_CLEANER_TOKEN } from '../helpers/token.helper';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(
    private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const token = localStorage.getItem(SLACK_CLEANER_TOKEN);
    const tokenPresent = !!token && token !== 'undefined';

    if (!tokenPresent) {
      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
    }

    return true;
  }
}
