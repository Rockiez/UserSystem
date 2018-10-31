import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  selectedId: number;
  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  // ngOnInit() {
  //   this.getHeroes();
  // }
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.userService.getUsers();
      })
    ).subscribe(
      (ob) => {this.userService.userList = ob; } );
  }

  getHeroes(): void {
    this.userService.getUsers()
    .subscribe(users => this.userService.userList = users);
  }

  clickevent(): void {
    console.log(this.userService.userList);
  }

  delete(user: User): void {
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
