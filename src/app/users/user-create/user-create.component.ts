import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.sass']
})
export class UserCreateComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    console.log('Create work');
    this.user = new User();
    this.user.id = this.userService.userList.length + 11;
    this.user.email = '';
    this.user.password = '';
    this.user.first_name = '';
    this.user.last_name = '';
  }

  save(): void {
    if (this.user.first_name === '' 
      && this.user.last_name === '' 
      && this.user.email === ''
      && this.user.password === '') {
      
    }
    this.userService.addUser(this.user)
      .subscribe(user => {
        this.userService.userList.push(user);
      });
      
    this.router.navigate(['/detail'+this.user.id]);

    console.log(this.user);

 }
 cancel() {
  // Providing a `null` value to the named outlet
  // clears the contents of the named outlet
  this.location.back();}
}
