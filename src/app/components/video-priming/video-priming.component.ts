import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-priming',
  templateUrl: './video-priming.component.html',
  styleUrls: ['./video-priming.component.scss']
})
export class VideoPrimingComponent implements OnInit {

  // https://medium.com/angular-in-depth/the-new-angular-youtube-player-component-9ce52ecf3dee
  // https://github.com/angular/components/blob/master/src/youtube-player/README.md

  videoStop: boolean = false;

  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  setVideoStop(state: number): void {
      if (state === 0) {
        this.videoStop = true;
      }
  }

  getVideoStop(): boolean {
    return this.videoStop;
  }
}
