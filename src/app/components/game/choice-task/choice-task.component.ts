import { Component, OnInit, Input } from '@angular/core';
import { ChoiceTaskService } from '../../../services/choice-task.service';
import { GameService } from 'src/app/services/game.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-choice-task',
  templateUrl: './choice-task.component.html',
  styleUrls: ['./choice-task.component.scss']
})
export class ChoiceTaskComponent implements OnInit {

  @Input() _alternativeList: string[];

  constructor(private _choiceTaskService: ChoiceTaskService, private _gameService: GameService, private userData: UserDataService) { }

  ngOnInit(): void {
  }

  saveChoice(choice: string) {
    this._choiceTaskService.addChoice(choice);
    if (choice == 'Renoncer') {
      this.finalChoice1 = true;
    } else if (choice == 'Ne pas renoncer') {
      this.finalChoice1 = false;
    }
    if (choice == "Droite") {
      this.finalChoice2 = true;
    } else if (choice == "Gauche") {
      this.finalChoice2 = false;
    }
    if (choice == "S'engager") {
      this.finalChoice3 = true;
    } else if (choice == "Discuter") {
      this.finalChoice3 = false;
    }


  }

  getChoiceList() {
    return this._choiceTaskService.choiceList;
  }

  getAlternativeList() {
    return this._alternativeList;
  }

  set finalChoice1(value: boolean) {
    this.userData.choice1 = value;
  }

  set finalChoice2(value: boolean) {
    this.userData.choice2 = value;
  }

  set finalChoice3(value: boolean) {
    this.userData.choice3 = value;
  }

}
