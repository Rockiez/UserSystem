import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UsersPanelComponent } from './users-panel/users-panel.component';
import { UserCreateComponent } from './user-create/user-create.component';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,

  ],
  declarations: [
    UserDetailComponent,
    UserListComponent,
    UsersPanelComponent,
    UserCreateComponent,

  ],
  exports: [
    UserDetailComponent,
    UserListComponent,
    UsersPanelComponent,
    UserCreateComponent
  ]

})
export class UsersModule { }
