import { Injectable, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Observable, of } from 'rxjs';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit {


  characters : Character[];
  currentId : number = 1;
  private pathCharacters : string = '/';
  private pathCharactersChild : string = '/characters/';

  constructor() {}

  ngOnInit(): void {
    this.getCharactersFromServer();
  }

  getCharactersFromServer() : void {

    var ref = firebase.database().ref(this.pathCharactersChild);

    ref.on("value", (data) =>
        this.characters=(<Character[]>data.val()),
        (Error) => console.log("error : ",Error)
    );
  }

  getCharacters() : Observable<Character[]> {
    return of(this.characters);
  }

  getCharactersArray() : Character[] {
    return this.characters;
  }

  saveCharactersToServer() : void {

      /*let character : Character = {
        id:4,
        imageName: "skier4.svg",
        positionTop: 50,
        positionLeft: 40,
        width: 23 
      }*/

      firebase.database().ref(this.pathCharactersChild+this.currentId).set(this.characters[this.currentId]);
  }

  setCurrentId(id:number) : void{
    this.currentId = id;
  }
  
  setPositionTop(positionTopIncrement: number) :void{
    this.characters[this.currentId].positionTop -= positionTopIncrement;
  }

  setPositionLeft(positionLeftIncrement: number) :void{
    this.characters[this.currentId].positionLeft -= positionLeftIncrement;
  }

  setImageName(imageName: string) :void{
    this.characters[this.currentId].imageName = imageName;
  }

  setWidth(widthIncrement: number) :void{
    this.characters[this.currentId].width -= widthIncrement;
  }

}

