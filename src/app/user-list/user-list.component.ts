import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private heroService: UserService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getUsers()
    .subscribe(users => this.users = users);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.heroService.deleteUser(user).subscribe();
  }

}
