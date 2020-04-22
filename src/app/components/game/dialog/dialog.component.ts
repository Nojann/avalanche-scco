import { Component, OnInit, Input } from '@angular/core';
import { SceneryService } from 'src/app/services/scenery.service';

/**
 * Display dialogs contained in a {@link Scenery}.
 */

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() id: number;

  constructor(private _sceneryService: SceneryService) { }

  ngOnInit(): void {
  }

  getDialog(): string[] {
    let dialog: string[] = ['', '', ''];
    //let id: number = 0;

    /*this._sceneryService.getCurrentId().subscribe(
      (currentId) => currentId ?
      id = currentId.valueOf()
      : console.log('Waiting scenery...')
    );*/

    this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      dialog = sceneries[this.id].dialog
      : dialog
    );

    return dialog;
  }

}
