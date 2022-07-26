import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './Autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  token: any;
  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.token = this.autenticacionService.isLogged();

    if (!this.token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
