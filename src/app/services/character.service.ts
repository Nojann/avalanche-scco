import { Injectable, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit {


  characters : Character[];
  currentId : number = 1;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCharactersFromServer();
  }

  getCharactersFromServer() : void {

    var ref = firebase.database().ref('/');

    ref.on("child_added", (data) =>
        this.characters=(<Character[]>data.val())
    );
  }

  getCharacters() : Observable<Character[]> {
    return of(this.characters);
  }

  saveCharactersToServer() : void {

      /*let character : Character = {
        id:4,
        imageName: "skier4.svg",
        positionTop: 50,
        positionLeft: 40,
        width: 23 
      }*/

      firebase.database().ref('/characters/'+this.currentId).set(this.characters[this.currentId]);
      //firebase.database().ref(`/characters/${this.currentId}`).set(this.characters[this.currentId]);
  }

  setCurrentId(id:number) : void{
    this.currentId = id;
    console.log("Current Id : "+this.currentId);
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

