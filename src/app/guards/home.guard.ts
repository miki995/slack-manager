import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SLACK_MANAGER_TOKEN } from '../helpers/token.helper';

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

    const token = localStorage.getItem(SLACK_MANAGER_TOKEN);
    const tokenPresent = !!token && token !== 'undefined' && token !== 'null';

    if (tokenPresent) {
      this.router.navigateByUrl('/dashboard/home');
      return false;
    }

    return true;
  }
}
