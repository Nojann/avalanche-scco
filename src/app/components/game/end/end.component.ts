import { Component, OnInit } from '@angular/core';
import { ChoiceTaskService } from 'src/app/services/choice-task.service';
//import { MatDialogRef } from '@angular/material/dialog';
import { GameComponent } from '../game.component';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  //constructor(public dialogRef: MatDialogRef<GameComponent>) { }
  constructor() { }

  ngOnInit(): void {
  }

  /*getChoiceList() {
    return this._choiceTaskService.choiceList;
  }*/

}
