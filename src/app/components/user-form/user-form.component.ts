import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { MatDialog } from '@angular/material/dialog';
import { ConsentFormComponent } from '../consent-form/consent-form.component';
import { GameService } from 'src/app/services/game.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  gender = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required]);
  skiLevel = new FormControl('', [Validators.required]);
  //skiExperience = new FormControl('', [Validators.required]);
  skiPractice = new FormControl('', [Validators.required]);
  skiFreeRide = new FormControl('', [Validators.required]);
  skiFreeRideFreq = new FormControl('', [Validators.required]);

  _validForm: boolean;

  constructor(private userData: UserDataService, public dialog: MatDialog, private gameService: GameService) {
  this._validForm = true;
  }

  ngOnInit(): void {
  }

  openDialogStart(): void {
    const dialogRef = this.dialog.open(ConsentFormComponent, {
      width: '800px',
      height: '500px'
    });
  }

  get formConsent(): boolean {
    return this.gameService.formConsent;
  }

  formFilled(): void {
    this.gameService.formFilled = true;
  }

  validate(): void {
    this._validForm = false;

    if ( !this.gender.invalid
      && !this.age.invalid
      && !this.skiLevel.invalid
      /*&& !this.skiExperience.invalid*/
      && !this.skiPractice.invalid
      && !this.skiFreeRide.invalid
      && !this.skiFreeRideFreq.invalid) {
        this.userData.gender = this.gender.value;
        this.userData.age = this.age.value;
        this.userData.skiLevel = this.skiLevel.value;
        /*this.userData.skiExperience = this.skiExperience.value;*/
        this.userData.skiPractice = this.skiPractice.value;
        this.userData.skiFreeRide = this.skiFreeRide.value;
        this.userData.skiFreeRideFreq = this.skiFreeRideFreq.value;
        this._validForm = true;
        this.formFilled();
      }
  }

  get validForm() {
    return this._validForm;
  }
}
