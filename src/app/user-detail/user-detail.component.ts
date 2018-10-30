import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {

  user$: Observable<User>;
  user: User;
   editName: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    console.log('work');
    this.getUser();
    this.user$.subscribe((ob) => {this.user = ob; });
  }

  getUser(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(params.get('id')))
    );
  }

 save(): void {

      this.userService.updateUser(this.user)
      .subscribe();

  }

}
