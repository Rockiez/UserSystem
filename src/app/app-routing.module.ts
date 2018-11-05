import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './users/user.service';
import { UsersModule } from './users/users.module';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  
  { path: '**', component: PageNotFoundComponent }
];
const config = {
  issuer: 'https://dev-468895.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oah89qa7cByMSsvB0h7'
};

@NgModule({
  imports: [RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(config),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

