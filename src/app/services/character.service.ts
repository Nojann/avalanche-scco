import { Injectable, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit {

  character : Character = {
    id:1,
    imageName:"",
    positionTop:0,
    positionLeft:0,
    width:0
  }

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCharactersFromServer().subscribe(
      (character => this.character = character));
  }

  getCharactersFromServer() : Observable<Character> {
    return this.httpClient
      .get<Character>('https://avalanche-scco.firebaseio.com/characters.json')
      .pipe(
        tap(_ => console.log("Character charged."))
      );
  }

  getCharacter() : Observable<Character> {
    return of(this.character);
  }

  saveCharactersToServer() : void {
    this.httpClient
    .put('https://avalanche-scco.firebaseio.com/characters.json', this.character)
    .subscribe(
      () => {
        console.log('Characaters saved');
       },
      (error) => {
        console.log('Error : '+ error);
      }
    )
  }
  
  setPositionTop(positionTopIncrement: number) :void{
    this.character.positionTop = this.character.positionTop-positionTopIncrement;
  }

  setPositionLeft(positionLeftIncrement: number) :void{
    this.character.positionLeft = this.character.positionLeft-positionLeftIncrement;
  }

  setImageName(character: Character, imageName: string) :void{
    character.imageName = imageName;
  }

  setWidth(widthIncrement: number) :void{
    this.character.width = this.character.width-widthIncrement;
  }

}
