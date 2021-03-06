import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VideoPrimingComponent } from '../video-priming.component';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-dialog-end',
  templateUrl: './dialog-end.component.html',
  styleUrls: ['./dialog-end.component.scss']
})
export class DialogEndComponent implements OnInit {

  @Input() videoId;

  constructor(public dialogRef: MatDialogRef<VideoPrimingComponent>, private _gameService: GameService) { }

  ngOnInit(): void {
  }

  close(): void {
    this._gameService.dialogEndClicked = true;
    this.dialogRef.close();
  }

  closeEvent(value) {
    if (value._state != 0) {
      this._gameService.dialogEndClicked = true;
      this.dialogRef.close();
    }
  }
}
