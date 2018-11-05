import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }
  id: number;
  password: string;
  constructor(public authService: AuthService, public router: Router,public oktaAuth: OktaAuthService) {

  }

  login() {
    this.authService.login();
  }

  // logout() {
  //   this.authService.logout();
  // }

}
