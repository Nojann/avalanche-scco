import { Injectable } from '@angular/core';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  character : Character = {
    id:1,
    imageName:"skier4.svg",
    positionTop:26,
    positionLeft:25,
    width:28
};

getCharacter() :Character {
  return this.character;
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

