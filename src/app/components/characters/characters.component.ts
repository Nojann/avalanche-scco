import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';
import { Character } from '../../model/character';
//import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  

  constructor(private _characterService: CharacterService){}

  ngOnInit(): void { 
    this._characterService.ngOnInit();
  }

  getPositionTop() :number{
    let positionTop: number;
    this._characterService.getCharacter().
      subscribe((character) => positionTop = character.positionTop);
    return positionTop;
  }
  
  getPositionLeft() :number{
    let positionLeft: number;
    this._characterService.getCharacter().
      subscribe(character => positionLeft = character.positionLeft);
    
    return positionLeft;
  }

  getImageName() :string{
    let imageName: string;
    this._characterService.getCharacter().
      subscribe(character => imageName = character.imageName);
    
    return imageName;
  }
  
  getWidth() :number{
    let width: number;
    this._characterService.getCharacter().
      subscribe(character => width = character.width);
    
    return width;
  }

    /*getPositionTop() : number{
    let positionTop : number;
    this._characterService.getPositionTop()
      .subscribe(positionTop => this.character1.positionTop = positionTop);
    return positionTop;
  }
  
  getPositionLeft() : number{
    let positionLeft : number;
    this._characterService.getPositionLeft()
      .subscribe(positionLeft => this.character1.positionLeft = positionLeft);
    return positionLeft;
  }

  getImageName() : string{
    let imageName : string;
    this._characterService.getImageName()
      .subscribe(imageName => this.character1.imageName = imageName);
    return imageName;
  }
  
  getWidth() : number{
    let width : number;
    this._characterService.getWidth()
      .subscribe(width => this.character1.width = width);
    return width;
  }*/

  /*ngOnInit(): void {
    /*this._characterService.getCharactersFromServer()
      .subscribe(
        (character) => {
          this.character1 = character
        },
        (error) => {
          console.log("OnInit Component : "+this.character1);
        });
    
      this._characterService.getCharactersFromServer()
      .subscribe(character1 => this.character1 = character1);
      //this.character1 = this._characterService.getCharacter();
    
  }*/


}
