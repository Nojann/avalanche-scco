import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogStartComponent } from './dialog-start/dialog-start.component';
import { DialogEndComponent } from './dialog-end/dialog-end.component';

@Component({
  selector: 'app-video-priming',
  templateUrl: './video-priming.component.html',
  styleUrls: ['./video-priming.component.scss']
})
export class VideoPrimingComponent implements OnInit {

  @Input() videoId: string;

  // https://medium.com/angular-in-depth/the-new-angular-youtube-player-component-9ce52ecf3dee
  // https://github.com/angular/components/blob/master/src/youtube-player/README.md

  videoStop: boolean;
  _openDialog: boolean;

  constructor(public dialog: MatDialog) {
    this.videoStop = false;
    this._openDialog = false;
  }


  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  openDialogStart(): void {
    if (this._openDialog === false) {
      const dialogRef = this.dialog.open(DialogStartComponent, {
        width: '500px',
        height: '300px'
      });
    }
    this._openDialog = true;
  }

  openDialogEnd(): void {
    const dialogRef = this.dialog.open(DialogEndComponent, {
      width: '500px',
      height: '300px'
    });
  }

  setVideoStop(state: number, isMuted: boolean): void {
    if (state === 0) {
        this.openDialogEnd();
        this.videoStop = true;
      }
  }

  getVideoStop(): boolean {
    return this.videoStop;
  }


  print(event: any) {
    console.log("click !");
    console.log(event);
  }


}