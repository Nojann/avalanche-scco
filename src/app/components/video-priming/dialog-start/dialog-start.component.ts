import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VideoPrimingComponent } from '../video-priming.component';

@Component({
  selector: 'app-dialog-start',
  templateUrl: './dialog-start.component.html',
  styleUrls: ['./dialog-start.component.scss']
})
export class DialogStartComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VideoPrimingComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
