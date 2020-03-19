import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../services/character.service'
import { Character } from '../model/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public character1;

  constructor(private _characterService: CharacterService){
    
  }

  ngOnInit(): void {
    this.character1 = this._characterService.getCharacter();
  }

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

  

  /*setPositionTop(character: Character) :void{

  }*/

  //path in the form of '../../assets/images/scenery/{{getImagePath()}}' 
  /*getImagePath() :string{
    return 'skier1.svg';
  }*/

}
