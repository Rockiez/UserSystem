import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'UserSystem';
  constructor(private router: Router) { }
  home(){
    this.router.navigate(['/detail/11']);
  }
}
