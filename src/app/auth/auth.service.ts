import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public oktaAuth: OktaAuthService) {
        console.log(this.oktaAuth.isAuthenticated());
    console.log(this.oktaAuth.getAccessToken());
  }
  async ngOnInit() {
    // Get the authentication state for immediate use
  }
  login(): void {
    this.oktaAuth.loginRedirect('/detail');

    console.log(this.oktaAuth.isAuthenticated());
    console.log(this.oktaAuth.getAccessToken());
  }

  // logout(): void {
  //   this.isAuthenticated = false;
  // }
}
