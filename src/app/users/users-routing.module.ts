import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPanelComponent } from './users-panel/users-panel.component';

const routes: Routes = [
  { path: 'detail/:id', component: UsersPanelComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
