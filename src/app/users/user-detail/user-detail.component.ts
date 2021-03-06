import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.user$.subscribe((ob) => {this.user = ob; });
    console.log(this.user);
  }

  getUser(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(params.get('id')))
    );
  }

  save(): void {
    if (typeof this.user.age === 'string') {
      this.user.age = +this.user.age;
    }
    if (typeof this.user.weight === 'string') {
      this.user.weight = +this.user.weight;
    }
    if (typeof this.user.height === 'string') {
      this.user.height = +this.user.height;
    }
    console.log(this.user);
    // this.userService.updateUser(this.user).subscribe();
    this.userService.refreshUser(this.user);
    // this.router.navigate(['/detail/'+this.user.id]);

 }

}
