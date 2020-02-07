import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.router.parseUrl('home'));
    return this.auth.user$.pipe(
      map((isLoggedIn: boolean) => isLoggedIn ? isLoggedIn : this.router.parseUrl('home'))
    );
  }

  constructor(private auth: AuthService, private router: Router) {

  }

}
