import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,public oktaAuth: OktaAuthService) {}

  canActivate(
    // future route that will be activated .
    next: ActivatedRouteSnapshot,
    // future RouterState of the application.
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    console.log(url);
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.oktaAuth.isAuthenticated()) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
