import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.sass']
})
export class UsersPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
