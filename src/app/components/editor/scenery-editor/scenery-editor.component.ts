import { Component, OnInit, Input } from '@angular/core';
import { SceneryService } from '../../../services/scenery.service';
import { Scenery } from '../../../models/scenery.model';

/**
 * Scenery Editor Component allow to edit Scenery data.
 * The type of Scenery data is {@link Scenery}
 */

@Component({
  selector: 'app-scenery-editor',
  templateUrl: './scenery-editor.component.html',
  styleUrls: ['./scenery-editor.component.scss']
})
export class SceneryEditorComponent implements OnInit {

  constructor(private _sceneryService: SceneryService) {
  }

  ngOnInit(): void {

  }

  getSceneries(): Scenery[] {
    let sceneries: Scenery[];

    this._sceneryService.getSceneries().subscribe(
      (sceneries2) => sceneries2 ?
      sceneries = sceneries2.filter((scenery) =>
        scenery !== undefined
      )
      : console.log('.')
      );

    return sceneries;
}

  idChange(id: number): void {
    this._sceneryService.setCurrentId(id);
  }

  imageNameChange(imageName: string): void {
    this._sceneryService.setBackground(imageName);
  }

  dialogChange(dialogID: number, dialog: string): void {
    this._sceneryService.setDialog(dialogID, dialog);
  }

  addScenery(index: number): void {
    this._sceneryService.addScenery(index);
  }

  deleteScenery(index: number): void {
    this._sceneryService.deleteScenery(index);
  }

  reverseElmtRight(index1: number): void {
    const index2: number = +index1+1;
    if (index2 < this._sceneryService.sceneries.length) {
      this._sceneryService.reverseTwoElmtSceneries(index1, index2);
    }
  }

  /*
  reverseElmtLeft(index1: number): void {
    const index2: number = +index1 + 1;
    console.log(index2);
    if (index2 > 0) {
      this._sceneryService.reverseTwoElmtSceneries(index2, index1);
    }
  }*/

}
