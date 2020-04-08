import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { Scenery } from '../models/scenery.model';
import { Observable, of } from 'rxjs';

import * as firebase from 'firebase';

/**
 * Scenery Service manage {@link Scenery} data.
 */

@Injectable({
  providedIn: 'root'
})
export class SceneryService {

  constructor() {
    this.currentId = 0;
    this.pathSceneriesChild = '/sceneries/';
   }

  scenery: Scenery;

  sceneries: Scenery[];
  currentId: number;
  private pathSceneriesChild: string;

  ngOnInit(): void {
    this.getSceneriesFromServer();
  }

  getSceneriesFromServer(): void {
    const ref = firebase.database().ref(this.pathSceneriesChild);

    ref.on('value', (data) =>
      this.sceneries = ( data.val() as Scenery[]).filter(
        (scenery) => scenery !== undefined),
        (Error) => console.log('error : ', Error)
    );
  }

  // deprecated
  saveSceneryToServer(): void {

    if (!this.sceneries[this.currentId]) {
      this.sceneries.push(this.scenery);
      console.log('scenery.service.saveSceneryToServer() : A new scenery is created : ', this.scenery);
    }

    firebase.database().ref().child('sceneries/' + this.currentId).set(this.sceneries[this.currentId]);

    console.log('scenery.service.saveSceneryToServer() : the current scenery is saved : ', this.scenery);
  }

  saveSceneriesToServer(): void {
    firebase.database().ref().child('sceneries/').set(this.sceneries);
  }

  setCurrentId(id: number): void {
    this.currentId = id;
    this.sceneries[this.currentId].id = this.currentId;
  }

  // Deprecated
  private setCharacters(characters: Character[]): void {
    this.sceneries[this.currentId].characters = characters;
  }

  setBackground(imageName: string): void {
    this.sceneries[this.currentId].background = imageName;
  }

  setDialog(dialogId: number, dialog: string): void {
    this.sceneries[this.currentId].dialog[dialogId] = dialog;
  }

  getCurrentId(): Observable<number> {
    return of(this.currentId);
  }

  getSceneries(): Observable<Scenery[]> {
    return of(this.sceneries);
  }

  /**
   * Add a default Scenery in Sceneries array.
   * @param index is the position where the new Scenery is added.
   */
  addScenery(index: number): void {
    const element: Scenery = this.defaultScenery(index);
    this.sceneries.splice(index, 0, element);

    // Refresh the id in Sceneries array.
    for (const i in this.sceneries) {
      if (+i > index) {
        this.sceneries[i].id = +this.sceneries[i].id + 1;
      }
    }
    // Refresh the current id
    this.currentId = index;
  }

  /**
   * Delete a Scenery in Sceneries array.
   */
  deleteScenery(index: number): void {
    this.sceneries.splice(index, 1);

    for (const i in this.sceneries) {
      if (+i >= index) {
        this.sceneries[i].id = +this.sceneries[i].id - 1;
      }
    }

    this.currentId = 0;
  }

  /**
   * Move an element to next index in Sceneries array.
   * @param index1 is the index of the element to move.
   * @param index2 is the next index.
   */
  reverseTwoElmtSceneries(index1: number, index2: number): void {
    const element: Scenery = this.sceneries[index1];
    // Add sceneries[index1] to index2 + 1
    this.sceneries.splice(index2 + 1, 0, element);
    // Remove the duplicate element
    this.sceneries.splice(index1, 1);
    // Asign the right ID order
    this.sceneries[index1].id = index1;
    this.sceneries[index2].id = index2;
    // Refresh the currentID
    this.currentId = index2;
  }

  private defaultScenery(id: number): Scenery {
    return {
        background : 'background01.png',
        characters : [{
          id : 1,
          imageName : 'skier1.png',
          positionLeft : 8,
          positionTop : 8,
          width : 8
        }, {
          id : 2,
          imageName : 'skier2.png',
          positionLeft : 16,
          positionTop : 16,
          width : 8
        }, {
          id : 3,
          imageName : 'skier3.png',
          positionLeft : 24,
          positionTop : 24,
          width : 8
        }, {
          id : 4,
          imageName : 'skier4.png',
          positionLeft : 32,
          positionTop : 32,
          width : 8
        } ],
        dialog : [ 'Hello ', 'World' ],
        id
      };
  }

}
