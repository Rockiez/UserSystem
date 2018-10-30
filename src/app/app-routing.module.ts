import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  // { path: '', redirectTo: 'detail/11', pathMatch: 'full' },
  { path: 'detail/:id', component: UserDetailComponent},
  // { path: '**', redirectTo: 'detail/11' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
