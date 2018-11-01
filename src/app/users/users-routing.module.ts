import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPanelComponent } from './users-panel/users-panel.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path: 'detail/:id',
   canActivate: [AuthGuard],
   component: UsersPanelComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
