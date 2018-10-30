import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.userService.getUsers()
    .subscribe(users => this.userService.userList = users);
  }

  clickevent(): void {
    console.log(this.userService.userList);
  }

  delete(user: User): void {
    this.userService.userList = this.userService.userList.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }
}
