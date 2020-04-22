import { Component, OnInit } from '@angular/core';
import { ChoiceTaskService } from 'src/app/services/choice-task.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  constructor(private _choiceTaskService: ChoiceTaskService) { }

  ngOnInit(): void {
  }

  getChoiceList() {
    return this._choiceTaskService.choiceList;
  }

}
