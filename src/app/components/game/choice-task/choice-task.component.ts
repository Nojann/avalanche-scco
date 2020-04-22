import { Component, OnInit, Input } from '@angular/core';
import { ChoiceTaskService } from '../../../services/choice-task.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-choice-task',
  templateUrl: './choice-task.component.html',
  styleUrls: ['./choice-task.component.scss']
})
export class ChoiceTaskComponent implements OnInit {

  @Input() _alternativeList: string[];

  constructor(private _choiceTaskService: ChoiceTaskService, private _gameService: GameService) { }

  ngOnInit(): void {
  }

  saveChoice(choice: string) {
    this._choiceTaskService.addChoice(choice);
  }

  getChoiceList() {
    return this._choiceTaskService.choiceList;
  }

  getAlternativeList() {
    return this._alternativeList;
  }

}
