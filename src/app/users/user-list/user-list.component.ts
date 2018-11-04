import { UserService } from './../user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  selectedId: number;
  constructor(public userService: UserService,
    private route: ActivatedRoute,private router: Router) { }

  @Output() moveEvent = new EventEmitter<number>();

  
  columnsToDisplay = ['id','name','detail','delete'];

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

  moveTab(id:number): void{
    this.router.navigate(['/detail/'+id]);
    this.moveEvent.emit(1);
  }
}
