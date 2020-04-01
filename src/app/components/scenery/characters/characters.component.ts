import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../../../services/character.service';

//TODO : implement ngFor in the template
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  constructor(private _characterService: CharacterService){}

  /*ngOnInit(): void { 
    this._characterService.ngOnInit();
  }

  getPositionTop(id: number) :number{
    let positionTop: number = 0;

    this._characterService.getCharacters().
      subscribe(
        (characters) => characters ?
          positionTop = characters[id].positionTop
          : console.log("Waiting characters") 
        );
    
    return positionTop;
  }
  
  getPositionLeft(id: number) :number{
    let positionLeft: number = 0;
      this._characterService.getCharacters().
        subscribe(characters => characters ?
          positionLeft = characters[id].positionLeft
          : console.log(".")    
        );

    return positionLeft;
  }

  getImageName(id: number) :string{
    let imageName: string = "Waiting";
      this._characterService.getCharacters().
      subscribe(characters => characters ?
        imageName = characters[id].imageName
        : console.log(".")
      );
    return imageName;
  }
  
  getWidth(id: number) :number{
    let width: number = 0;
      this._characterService.getCharacters().
      subscribe(characters => characters ?
        width = characters[id].width
        : console.log(".")
      );

    return width;
  }*/

}
