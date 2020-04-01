import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../../../models/character.model';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.scss']
})
export class CharacterEditorComponent implements OnInit {
  @Input() character:Character;

  constructor(private _characterService: CharacterService) { 

  }

  ngOnInit(): void {
    this._characterService.ngOnInit();
  }

  positionTopUp() : void {
    this._characterService.setPositionTop(1);
  }

  positionTopDown() : void {
    this._characterService.setPositionTop(-1);
  }
  
  positionLeftLeft() : void {
    this._characterService.setPositionLeft(1);
  }

  positionLeftRight() : void {
    this._characterService.setPositionLeft(-1);
  }

  widthUp() : void {
    this._characterService.setWidth(-1);
  }

  widthDown() : void {
    this._characterService.setWidth(1);
  }

  imageNameChange(imageName : string) :void{
    this._characterService.setImageName(imageName);
  }

  idChange(id: number){
    console.log("id Change: "+id);
    this._characterService.setCurrentId(id);
  }

}
