import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.sass']
})
export class UsersPanelComponent implements OnInit {

  selected:number;
  constructor() { }

  ngOnInit() {
  }

  move(ag: number){
    console.log(ag);
    this.selected=ag;
  }
}
