import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SurveyComponent } from '../survey/survey.component';
import { GameService } from 'src/app/services/game.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-consent-form',
  templateUrl: './consent-form.component.html',
  styleUrls: ['./consent-form.component.scss']
})
export class ConsentFormComponent implements OnInit {

  _participated: boolean;
  _checked;

  constructor(public dialogRef: MatDialogRef<SurveyComponent>,
              private gameService: GameService, private userDataService: UserDataService) {
    this._participated = false; }

  ngOnInit(): void {
  }

  close(): void {
    this.userDataService.opt1 = this._checked;
    this.dialogRef.close();
  }

  checked(state: boolean) {
    this._checked = !state;
  }

  formConsent() {
    this.gameService.formConsent = true;
  }


}
