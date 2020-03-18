import {Component, OnInit} from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  character1 : Character = {
    id:1,
    imageName:"skier1.svg",
    positionTop:26,
    positionLeft:25,
    width:28
};
  

  ngOnInit(): void {
  }

  /*setPositionTop(character: Character) :void{

  }*/

  getPositionTop(character: Character) :number{
    return character.positionTop;
  }

  getPositionLeft(character: Character) :number{
    return character.positionLeft;
  }

  getImageName(character: Character) :string{
    return character.imageName;
  }

  getWidth(character: Character) :number{
    return character.width;
  }

  setPositionTop(character: Character, positionTop: number) :void{
    character.positionTop = positionTop;
  }

  setPositionLeft(character: Character, positionLeft: number) :void{
    character.positionLeft = positionLeft;
  }

  setImageName(character: Character, imageName: string) :void{
    character.imageName = imageName;
  }

  setWidth(character: Character, positionWidth: number) :void{
    character.positionLeft = positionWidth;
  }

  //path in the form of '../../assets/images/scenery/{{getImagePath()}}' 
  getImagePath() :string{
    return 'skier1.svg';
  }

}
