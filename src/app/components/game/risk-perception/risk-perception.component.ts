import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';
import { GameService } from 'src/app/services/game.service';

/**
 * Slider allowing to measure a participant risk perception.
 */

@Component({
  selector: 'app-risk-perception',
  templateUrl: './risk-perception.component.html',
  styleUrls: ['./risk-perception.component.scss']
})
export class RiskPerceptionComponent implements OnInit {

  finalEvaluation = new FormControl('', [Validators.required]);
  _validForm;

  constructor(private userData: UserDataService, private gameService: GameService) {
    this._validForm = true;
  }

  ngOnInit(): void {
  }

  formFilled(state: boolean): void {
    this.gameService.formFilled = state;
  }

  validate(): void {
    this.formFilled(true);
    this._validForm = false;

    if (!this.finalEvaluation.invalid) {
        this.userData.finalEvaluation = this.finalEvaluation.value;
        this._validForm = true;
        this.formFilled(true);
      }
  }

  get validForm() {
    return this._validForm;
  }

}
