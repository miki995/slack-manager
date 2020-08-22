import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SLACK_CLEANER_TOKEN } from '../helpers/token.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem(SLACK_CLEANER_TOKEN);
    const tokenPresent = !!token && token !== 'undefined' && token !== 'null';

    if (!tokenPresent) {
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
