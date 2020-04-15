import { Component, OnInit } from '@angular/core';
import { SceneryService } from '../../services/scenery.service';
import * as firebase from 'firebase';

/**
 * Editor Component contains differents components :
 * 
 * {@link CharacterEditor}, {@link SceneryEditor}: to edit data,
 * 
 * {@link DisplayData}: to display data,
 * 
 * {@link Scenery}: to render image with data configuration.
 */

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  isAuth: boolean;

  constructor(private _sceneryService: SceneryService) { }

  ngOnInit(): void {
    this._sceneryService.ngOnInit();

    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  getCurrentId(): number {
    let id: number;

    this._sceneryService.getCurrentId().subscribe(
      (currentId) => currentId ?
      id = currentId.valueOf()
      : console.log('Editor : Waiting id...')
    );
    return id;
  }

  save(): void {
    //this._sceneryService.saveSceneryToServer();
    this._sceneryService.saveSceneriesToServer();
  }

  /**
   * getIsAuth() is used to display or not the save button.
   */
  getIsAuth() {
    return this.isAuth;
  }

}
