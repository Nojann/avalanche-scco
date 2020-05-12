import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private userData: UserDataService) { }

  ngOnInit(): void {
  }

  toConsole(value: any) {
    console.log(value);
  }


  set skiExperience(value: number) {
    this.userData.skiExperience = value;
  }

}
