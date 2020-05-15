import { Injectable } from '@angular/core';
import { Scenery } from '../models/scenery.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as firebase from 'firebase';

/**
 * Scenery Service manage {@link Scenery} data.
 */

@Injectable({
  providedIn: 'root'
})
export class SceneryService {

  scenery: Scenery;

  sceneries: Scenery[];
  currentId: number;
  private pathSceneriesChild: string;

  dataId: any;

  // dev : http://localhost:4000/
  uri = 'http://cartodialect.imag.fr/sceneries';

  constructor(private http: HttpClient) {
    this.currentId = 0;
    this.pathSceneriesChild = '/sceneriesWebp/';
   }

  ngOnInit(): void {
    this.getSceneriesFromServer();
  }

  /*getSceneriesFromServer(): void {
    const ref = firebase.database().ref(this.pathSceneriesChild);

    ref.on('value', (data) =>
      this.sceneries = ( data.val() as Scenery[]).filter(
        (scenery) => scenery !== undefined),
        (Error) => console.log('error : ', Error)
    );
  }*/

  getSceneriesFromServer() {

    this.http.get(`${this.uri}`).subscribe((data) => {
      this.dataId = data[0]._id;
      this.sceneries = data[0].sceneries;
  });
  }

  /*saveSceneriesToServer(): void {
    firebase.database().ref().child('sceneriesWebp/').set(this.sceneries);
  }*/

  saveSceneriesToServer(){
    //let array: any = [];
    const dataServer = { sceneries: this.sceneries };

    /*console.log("add to server :", dataServer);
    console.log("ID1:", this.dataId);

    this.http.get(`${this.uri}`).subscribe((data) => {
      console.log("ID2:", data[0]._id);
  });

    this.http.get(`${this.uri}/delete/${this.dataId}`)
        .subscribe(res => console.log('Done'),
                  error => console.log("error GET : ", error));

    this.http.post(`${this.uri}/add`, dataServer)
        .subscribe(res => console.log('Done'),
                  error => console.log("error POST : ", error));*/

    this.http.post(`${this.uri}/replaceOne/${this.dataId}`, dataServer)
                  .subscribe(res => console.log('Done'),
                  error => console.log("error GET : ", error));
  }

  setCurrentId(id: number): void {
    this.currentId = id;
    this.sceneries[this.currentId].id = this.currentId;
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
        background : 'background01.webp',
        characters : [{
          id : 0,
          imageName : 'skier1.webp',
          positionLeft : 8,
          positionTop : 8,
          width : 8,
          rotate: 0,
          scaleX: 1
        }, {
          id : 1,
          imageName : 'skier1.webp',
          positionLeft : 16,
          positionTop : 16,
          width : 8,
          rotate: 0,
          scaleX: 1
        }, {
          id : 2,
          imageName : 'skier1.webp',
          positionLeft : 24,
          positionTop : 24,
          width : 8,
          rotate: 0,
          scaleX: 1
        }, {
          id : 3,
          imageName : 'skier1.webp',
          positionLeft : 32,
          positionTop : 32,
          width : 8,
          rotate: 0,
          scaleX: 1
        } ],
        dialog : [ 'Hello ', 'World' ],
        id
      };
  }

}
