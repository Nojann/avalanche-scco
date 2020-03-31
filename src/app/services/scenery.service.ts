import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { Scenery } from '../models/scenery.model';
import { Observable, of } from 'rxjs';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SceneryService {

  scenery : Scenery;

  sceneries : Scenery[];
  currentId : number = 1;
  private pathSceneries : string = '/';
  private pathSceneriesChild : string = '/sceneries/';

  constructor() { }

  ngOnInit(): void {
    this.getSceneriesFromServer();
  }

  getSceneriesFromServer() : void {
    var ref = firebase.database().ref(this.pathSceneriesChild);

    ref.on("value", (data) =>
        {this.sceneries=(<Scenery[]>data.val());
        this.scenery=this.sceneries[this.currentId];
        },
        (Error) => console.log("error : ",Error)
    );
  }
  
  saveSceneryToServer(characters : Character[]) : void {
    
    if (!this.sceneries[this.currentId]){
      this.sceneries.push(this.scenery);
      console.log("scenery.service.saveSceneryToServer() : A new scenery is created : ",this.scenery);
    }

    this.setCharacters(characters);
    firebase.database().ref().child('sceneries/'+this.currentId).set(this.sceneries[this.currentId]);
    
    console.log("scenery.service.saveSceneryToServer() : the current scenery is saved : ",this.scenery);
  }

  setCurrentId(id:number) : void {
    this.currentId = id;
    this.sceneries[this.currentId].id=this.currentId;
  }

  private setCharacters(characters : Character[]) : void {
    this.sceneries[this.currentId].characters = characters;
  }

  setBackground(imageName: string) : void {
    this.sceneries[this.currentId].background = imageName;
  }

  setDialog(dialogId : number, dialog : string) : void {
    this.sceneries[this.currentId].dialog[dialogId] = dialog;
  }

  getCurrentId() : Observable<Number> {
    return of(this.currentId);
  }

  getSceneries() : Observable<Scenery[]> {
    return of(this.sceneries);
  }


}
